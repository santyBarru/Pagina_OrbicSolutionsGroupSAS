"use client";

import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";

export type DesignOpts = {
  negocio?: string; // sin uso en el diseño (compatibilidad)
  texto: string;
  colorId: "negro" | "blanco";
  fontFamily: string; // tipografía del título
  fontBottom: string; // tipografía de la fila inferior
  negrita: boolean;
  cursiva: boolean;
  sizeTitulo: number; // tamaño del título (px base sobre 512)
  franja: string[];
  formato?: "stand" | "tarjeta"; // stand = caballete con QR; tarjeta = plana sin QR
};

type Props = DesignOpts & { logo: string | null; qr: string | null };

// ── Diseño del stand: título → empresa → logo → símbolo NFC → estrellas ──
// Se usa como textura del 3D y para el PNG de descarga (W base 512, escala proporcional)
export function drawDesign(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  {
    negocio,
    texto,
    colorId,
    fontFamily,
    fontBottom,
    negrita,
    cursiva,
    sizeTitulo,
    franja,
    formato,
  }: DesignOpts,
  logoImg: HTMLImageElement | null,
  qrImg: HTMLImageElement | null = null,
) {
  void franja;
  void negocio;
  const s = W / 512;
  const dark = colorId === "negro";
  const plate = dark ? "#141519" : "#f4f4f2";
  const tx = dark ? "#ffffff" : "#111114";
  const sub = dark ? "rgba(255,255,255,0.55)" : "rgba(17,17,20,0.6)";
  const faint = dark ? "rgba(255,255,255,0.16)" : "rgba(17,17,20,0.16)";
  const cx = W / 2;
  const esTarjeta = (formato ?? "stand") === "tarjeta";

  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = plate;
  ctx.fillRect(0, 0, W, H);
  ctx.textAlign = "center";

  // 1. TÍTULO — arriba, relleno y con formato del usuario
  const peso = negrita ? 800 : 500;
  const estilo = cursiva ? "italic " : "";
  let tSize = Math.max(22, Math.min(52, sizeTitulo || 40));
  const titulo = texto || "¡Califícanos!";
  ctx.font = `${estilo}${peso} ${tSize * s}px "${fontFamily}", sans-serif`;
  while (ctx.measureText(titulo).width > W - 80 * s && tSize > 20) {
    tSize -= 2;
    ctx.font = `${estilo}${peso} ${tSize * s}px "${fontFamily}", sans-serif`;
  }
  ctx.fillStyle = tx;
  ctx.fillText(titulo, cx, 88 * s);

  // 2. LOGO — grande, protagonista central (en tarjeta va aún más grande y centrado)
  const logoCY = (esTarjeta ? 320 : 242) * s;
  const maxW = (esTarjeta ? 380 : 345) * s,
    maxH = (esTarjeta ? 300 : 225) * s;
  if (logoImg) {
    const k = Math.min(maxW / logoImg.width, maxH / logoImg.height);
    const lw = logoImg.width * k,
      lh = logoImg.height * k;
    ctx.drawImage(logoImg, cx - lw / 2, logoCY - lh / 2, lw, lh);
  } else {
    ctx.strokeStyle = faint;
    ctx.lineWidth = 3 * s;
    ctx.setLineDash([9 * s, 8 * s]);
    ctx.beginPath();
    ctx.arc(cx, logoCY, 90 * s, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = sub;
    ctx.font = `600 ${18 * s}px Inter, sans-serif`;
    ctx.fillText("tu logo", cx, logoCY + 6 * s);
  }

  // 3. ESTRELLAS — vectoriales, grandes y doradas
  const drawStar = (sx: number, sy: number, rOut: number, rIn: number) => {
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 === 0 ? rOut : rIn;
      const a = (Math.PI / 5) * i - Math.PI / 2;
      const px2 = sx + Math.cos(a) * r,
        py3 = sy + Math.sin(a) * r;
      if (i === 0) ctx.moveTo(px2, py3);
      else ctx.lineTo(px2, py3);
    }
    ctx.closePath();
    ctx.fillStyle = "#F5B72E";
    ctx.fill();
    ctx.lineJoin = "round";
    ctx.lineWidth = 5 * s;
    ctx.strokeStyle = "#F5B72E";
    ctx.stroke();
  };
  const starY = (esTarjeta ? 560 : 396) * s,
    starR = 22 * s,
    gap = 60 * s;
  for (let i = 0; i < 5; i++) {
    drawStar(cx + (i - 2) * gap, starY, starR, starR * 0.46);
  }

  // 4. QR — más pequeño, redondeado (SOLO en stand; la tarjeta no lleva QR)
  if (!esTarjeta) {
    const qs = 188 * s,
      qx = cx - qs / 2,
      qy = 462 * s;
    const cell = qs / 11;
    const fg = dark ? "#ffffff" : "#0b0d13";
    if (qrImg) {
      // QR propio del cliente sobre panel blanco (zona de silencio para escaneo real)
      const pad = 10 * s;
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(qx - pad, qy - pad, qs + pad * 2, qs + pad * 2, 14 * s);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.clip();
      ctx.drawImage(qrImg, qx, qy, qs, qs);
      ctx.restore();
    } else {
      ctx.fillStyle = fg;
      let seed = 7;
      for (let i = 0; i < 121; i++) {
        seed = (seed * 137 + 41) % 211;
        const gx = i % 11,
          gy = Math.floor(i / 11);
        const inFinder =
          (gx < 4 && gy < 4) || (gx > 6 && gy < 4) || (gx < 4 && gy > 6);
        if (!inFinder && seed % 3 !== 0) {
          ctx.beginPath();
          ctx.roundRect(
            qx + gx * cell + 1 * s,
            qy + gy * cell + 1 * s,
            cell - 2.5 * s,
            cell - 2.5 * s,
            3 * s,
          );
          ctx.fill();
        }
      }
      (
        [
          [0, 0],
          [qs - cell * 3.2, 0],
          [0, qs - cell * 3.2],
        ] as const
      ).forEach(([fx, fy]) => {
        ctx.strokeStyle = fg;
        ctx.lineWidth = 6 * s;
        ctx.beginPath();
        ctx.roundRect(
          qx + fx + 2 * s,
          qy + fy + 2 * s,
          cell * 3 - 4 * s,
          cell * 3 - 4 * s,
          7 * s,
        );
        ctx.stroke();
        ctx.beginPath();
        ctx.roundRect(
          qx + fx + cell * 0.95,
          qy + fy + cell * 0.95,
          cell * 1.1,
          cell * 1.1,
          3 * s,
        );
        ctx.fill();
      });
    }

    // esquinas redondeadas — blancas o negras según la placa
    const m = 18 * s,
      R = 26 * s,
      arm = 16 * s;
    ctx.lineWidth = 5.5 * s;
    ctx.lineCap = "round";
    const corner = (
      x: number,
      y: number,
      sx: number,
      sy: number,
      col: string,
    ) => {
      ctx.strokeStyle = col;
      ctx.beginPath();
      ctx.moveTo(x + sx * (R + arm), y);
      ctx.lineTo(x + sx * R, y);
      ctx.quadraticCurveTo(x, y, x, y + sy * R);
      ctx.lineTo(x, y + sy * (R + arm));
      ctx.stroke();
    };
    const bx0 = qx - m,
      bx1 = qx + qs + m,
      by0 = qy - m,
      by1 = qy + qs + m;
    corner(bx0, by0, 1, 1, fg);
    corner(bx1, by0, -1, 1, fg);
    corner(bx0, by1, 1, -1, fg);
    corner(bx1, by1, -1, -1, fg);
  } // fin del bloque QR (solo stand)

  // 5. Fila inferior — layout dinámico (nunca se encima) con iconos simplificados
  const py2 = (esTarjeta ? H - 130 : H - 96) * s;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // Icono "Acerca": ondas NFC + celular inclinado (simplificado)
  const wIconA = 74 * s;
  const iconAcerca = (ix: number, iy: number) => {
    ctx.strokeStyle = tx;
    ctx.lineWidth = 4.5 * s;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(ix + 8 * s, iy, (7 + i * 8.5) * s, -Math.PI / 2.7, Math.PI / 2.7);
      ctx.stroke();
    }
    ctx.save();
    ctx.translate(ix + 54 * s, iy);
    ctx.rotate(0.14);
    ctx.beginPath();
    ctx.roundRect(-12 * s, -20 * s, 24 * s, 40 * s, 6 * s);
    ctx.stroke();
    ctx.restore();
  };

  // Icono "Escanea": celular con marco de escaneo (simplificado)
  const wIconE = 32 * s;
  const iconEscanea = (ix: number, iy: number) => {
    ctx.strokeStyle = tx;
    ctx.lineWidth = 4.5 * s;
    ctx.beginPath();
    ctx.roundRect(ix, iy - 22 * s, 30 * s, 44 * s, 7 * s);
    ctx.stroke();
    ctx.lineWidth = 3 * s;
    const fx0 = ix + 7 * s,
      fy0 = iy - 12 * s,
      fw = 16 * s,
      fh = 20 * s,
      c = 5 * s;
    ctx.beginPath();
    ctx.moveTo(fx0, fy0 + c);
    ctx.lineTo(fx0, fy0);
    ctx.lineTo(fx0 + c, fy0);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(fx0 + fw - c, fy0);
    ctx.lineTo(fx0 + fw, fy0);
    ctx.lineTo(fx0 + fw, fy0 + c);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(fx0, fy0 + fh - c);
    ctx.lineTo(fx0, fy0 + fh);
    ctx.lineTo(fx0 + c, fy0 + fh);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(fx0 + fw - c, fy0 + fh);
    ctx.lineTo(fx0 + fw, fy0 + fh);
    ctx.lineTo(fx0 + fw, fy0 + fh - c);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(fx0 + 1.5 * s, iy - 2 * s);
    ctx.lineTo(fx0 + fw - 1.5 * s, iy - 2 * s);
    ctx.stroke();
  };

  // Medir y centrar toda la fila
  ctx.font = `700 ${26 * s}px "${fontBottom}", sans-serif`;
  const wAcerca = ctx.measureText("Acerca").width;
  const wEscanea = ctx.measureText("Escanea").width;
  ctx.font = `600 ${22 * s}px "${fontBottom}", sans-serif`;
  const wO = ctx.measureText("o").width;
  const g1 = 16 * s,
    g2 = 24 * s;
  const totalRow =
    wAcerca + g1 + wIconA + g2 + wO + g2 + wEscanea + g1 + wIconE;
  let xc = cx - totalRow / 2;

  ctx.textAlign = "left";
  ctx.fillStyle = tx;
  ctx.font = `700 ${26 * s}px "${fontBottom}", sans-serif`;
  ctx.fillText("Acerca", xc, py2 + 9 * s);
  xc += wAcerca + g1;
  iconAcerca(xc, py2 - 2 * s);
  xc += wIconA + g2;
  ctx.fillStyle = sub;
  ctx.font = `600 ${22 * s}px "${fontBottom}", sans-serif`;
  ctx.fillText("o", xc, py2 + 8 * s);
  xc += wO + g2;
  ctx.fillStyle = tx;
  ctx.font = `700 ${26 * s}px "${fontBottom}", sans-serif`;
  ctx.fillText("Escanea", xc, py2 + 9 * s);
  xc += wEscanea + g1;
  iconEscanea(xc, py2 - 2 * s);
  ctx.textAlign = "center";

  // Brillo del material acrílico (efecto 3D, no impreso)
  ctx.save();
  ctx.globalCompositeOperation = "soft-light";
  const sheen = ctx.createLinearGradient(0, 0, W, H);
  sheen.addColorStop(0, "rgba(255,255,255,0.28)");
  sheen.addColorStop(0.3, "rgba(255,255,255,0.05)");
  sheen.addColorStop(0.55, "rgba(255,255,255,0)");
  sheen.addColorStop(0.85, "rgba(255,255,255,0.1)");
  ctx.fillStyle = sheen;
  ctx.fillRect(0, 0, W, H);
  ctx.restore();
}

function Stand(props: Props) {
  const groupRef = useRef<THREE.Group>(null);

  const canvas = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 870;
    return c;
  }, []);

  const texture = useMemo(() => {
    const t = new THREE.CanvasTexture(canvas);
    t.anisotropy = 8;
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, [canvas]);

  // Redibujar cuando cambia la personalización (esperando la fuente)
  useEffect(() => {
    let cancel = false;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const paint = (
      img: HTMLImageElement | null,
      qimg: HTMLImageElement | null,
    ) => {
      if (cancel) return;
      drawDesign(ctx, canvas.width, canvas.height, props, img, qimg);
      texture.needsUpdate = true;
    };
    const ready = async () => {
      try {
        await document.fonts.load(`40px "${props.fontFamily}"`);
        await document.fonts.load(`800 40px "${props.fontFamily}"`);
        await document.fonts.load(`italic 800 40px "${props.fontFamily}"`);
        await document.fonts.load(`700 40px "${props.fontBottom}"`);
      } catch {}
      const cargar = (src: string | null) =>
        new Promise<HTMLImageElement | null>((res) => {
          if (!src) return res(null);
          const im = new Image();
          im.onload = () => res(im);
          im.onerror = () => res(null);
          im.src = src;
        });
      const [li, qi] = await Promise.all([
        cargar(props.logo),
        cargar(props.qr),
      ]);
      paint(li, qi);
    };
    ready();
    return () => {
      cancel = true;
    };
  }, [
    props.logo,
    props.qr,
    props.texto,
    props.colorId,
    props.fontFamily,
    props.fontBottom,
    props.negrita,
    props.cursiva,
    props.sizeTitulo,
    props.franja,
    props.formato,
    canvas,
    texture,
    props,
  ]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.5) * 0.008;
    }
  });

  const dark = props.colorId === "negro";
  const side = dark ? "#14161f" : "#d8dae2";
  const edge = dark ? "#1c1f2b" : "#c9ccd6";

  const sideMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: side,
        roughness: 0.25,
        metalness: 0.15,
      }),
    [side],
  );
  const backMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: edge,
        roughness: 0.35,
        metalness: 0.1,
      }),
    [edge],
  );
  const frontMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.32,
        metalness: 0.05,
      }),
    [texture],
  );

  // Material PLA impreso en 3D — mate, con líneas de capa características
  const plaMat = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 128;
    c.height = 128;
    const x = c.getContext("2d");
    const baseCol = dark ? "#22242e" : "#c2c5cf";
    const lineCol = dark ? "#1a1c24" : "#b3b6c1";
    if (x) {
      x.fillStyle = baseCol;
      x.fillRect(0, 0, 128, 128);
      x.fillStyle = lineCol;
      for (let y = 0; y < 128; y += 4) x.fillRect(0, y, 128, 1.4);
    }
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(2.5, 2);
    return new THREE.MeshStandardMaterial({
      map: t,
      roughness: 0.95,
      metalness: 0,
    });
  }, [dark]);

  // Sticker NFC circular (va pegado detrás de la placa)
  const stickerMat = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 256;
    c.height = 256;
    const x = c.getContext("2d");
    if (x) {
      x.fillStyle = "#f5f5f2";
      x.beginPath();
      x.arc(128, 128, 124, 0, Math.PI * 2);
      x.fill();
      x.strokeStyle = "#d8d8d2";
      x.lineWidth = 6;
      x.beginPath();
      x.arc(128, 128, 118, 0, Math.PI * 2);
      x.stroke();
      // ondas NFC
      x.strokeStyle = "#15171e";
      x.lineWidth = 10;
      x.lineCap = "round";
      for (let i = 0; i < 3; i++) {
        x.beginPath();
        x.arc(96, 120, 22 + i * 22, -Math.PI / 3, Math.PI / 3);
        x.stroke();
      }
      x.fillStyle = "#15171e";
      x.beginPath();
      x.arc(88, 120, 9, 0, Math.PI * 2);
      x.fill();
      x.font = "700 34px Inter, sans-serif";
      x.textAlign = "center";
      x.fillText("NFC", 128, 204);
      x.font = "500 20px Inter, sans-serif";
      x.fillStyle = "#8a8a84";
      x.fillText("ORBIC", 128, 232);
    }
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return new THREE.MeshStandardMaterial({
      map: t,
      roughness: 0.55,
      metalness: 0,
      transparent: true,
    });
  }, []);

  const esTarjeta = (props.formato ?? "stand") === "tarjeta";

  if (esTarjeta) {
    // TARJETA: placa plana tipo tarjeta de crédito (vertical), sin base ni caballete.
    // Proporción 2.0 x 3.15 y flotando centrada, con leve giro para lucir el grosor.
    return (
      <group ref={groupRef} rotation={[0, 0.1, 0]} position={[0, 1.55, 0]}>
        <mesh
          castShadow
          material={[sideMat, sideMat, sideMat, sideMat, frontMat, backMat]}
        >
          <boxGeometry args={[2.0, 3.15, 0.05]} />
        </mesh>
        {/* Sticker NFC pegado atrás */}
        <mesh
          position={[0, 0, -0.03]}
          rotation={[0, Math.PI, 0]}
          material={stickerMat}
        >
          <circleGeometry args={[0.3, 48]} />
        </mesh>
      </group>
    );
  }

  return (
    <group ref={groupRef}>
      {/* Placa frontal — acrílico con impresión láser */}
      <group rotation={[-0.12, 0, 0]} position={[0, 0, 0.2]}>
        <mesh
          position={[0, 1.7, 0]}
          castShadow
          material={[sideMat, sideMat, sideMat, sideMat, frontMat, backMat]}
        >
          <boxGeometry args={[2.0, 3.4, 0.06]} />
        </mesh>
        {/* Sticker NFC pegado en la parte trasera */}
        <mesh
          position={[0, 1.55, -0.036]}
          rotation={[0, Math.PI, 0]}
          material={stickerMat}
        >
          <circleGeometry args={[0.34, 48]} />
        </mesh>
      </group>
      {/* Base impresa en 3D (PLA con líneas de capa) — unida al borde inferior */}
      <mesh position={[0, 0.035, -0.24]} castShadow material={plaMat}>
        <boxGeometry args={[1.4, 0.07, 0.92]} />
      </mesh>
    </group>
  );
}

export default function StandNFC3D(props: Props) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0.9, 2.6, 7.6], fov: 30 }}
      style={{ touchAction: "none" }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 6, 4]} intensity={1.4} castShadow />
      <pointLight
        position={[-4, 3, 2]}
        intensity={6}
        color="#8B5CFF"
        distance={12}
      />
      <pointLight
        position={[4, 1.5, -2]}
        intensity={4}
        color="#FF6B35"
        distance={10}
      />
      <Stand {...props} />
      <ContactShadows
        position={[0, -0.01, 0]}
        opacity={0.55}
        scale={9}
        blur={2.4}
        far={3}
      />
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={4.2}
        maxDistance={11}
        minPolarAngle={1.0}
        maxPolarAngle={1.62}
        target={[0, 1.55, 0]}
      />
    </Canvas>
  );
}
