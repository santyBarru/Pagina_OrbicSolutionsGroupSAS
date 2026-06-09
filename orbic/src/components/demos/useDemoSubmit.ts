export async function submitDemo(productId: string) {
  const response = await fetch(`/api/demo/${productId}`);
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Error al solicitar el demo");
  }
  return response.json();
}
