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

export type CartItem = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
  cartId: number;
};

export type Favorite = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  favoriteId: number;
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

export async function fetchCart(): Promise<CartItem[]> {
  const res = await fetch("/api/cart");
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

export async function addToCart(productId: number) {
  const requestBody = JSON.stringify({ productId, quantity: 1 });

  const res = await fetch("/api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: requestBody,
  });

  if (!res.ok) {
    throw new Error(`fetch Error ${res.status}`);
  }
  return await res.json();
}

export async function addQuantity(cartId: number, quantity: number) {
  const requestBody = JSON.stringify({ quantity });

  const res = await fetch(`/api/cart/${cartId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: requestBody,
  });

  if (!res.ok) {
    throw new Error(`fetch Error ${res.status}`);
  }
  return await res.json();
}

export async function removeQuantity(cartId: number, quantity: number) {
  const requestBody = JSON.stringify({ quantity });

  const res = await fetch(`/api/cart/${cartId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: requestBody,
  });

  if (!res.ok) {
    throw new Error(`fetch Error ${res.status}`);
  }
  return await res.json();
}

export async function deleteItem(cartId: number) {
  const res = await fetch(`/api/cart/${cartId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`fetch Error ${res.status}`);
  }
  return await res.json();
}

export async function addToFavorites(productId: number) {
  const requestBody = JSON.stringify({ productId });

  const res = await fetch("/api/favorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: requestBody,
  });

  if (!res.ok) {
    throw new Error(`fetch Error ${res.status}`);
  }
  return await res.json();
}

export async function fetchFavorites(): Promise<Favorite[]> {
  const res = await fetch("/api/favorites");
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
