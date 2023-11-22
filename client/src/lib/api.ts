export type Product = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  ingredients: string;
};

export type ProductImage = {
  imageUrl: string;
  video: string;
  productId: number;
};

/**
 * Fetches all products from the API.
 * @returns Promise that resolves to an array of products.
 */

export async function fetchCatalog(): Promise<Product[]> {
  const res = await fetch("/api/products");
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Fetches a single product from the API.
 * @param {number} productId The ID of the product to fetch.
 * @returns Promise that resolves to the product.
 */

export async function fetchProduct(productId: number): Promise<Product> {
  const res = await fetch(`/api/products/${productId}`);
  console.log(`productId: ${productId}`);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

export async function fetchImages(productId: number): Promise<ProductImage[]> {
  const res = await fetch(`/api/productImages/${productId}`);
  console.log(`productId: ${productId}`);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
