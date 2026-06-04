const BASE_URL = "https://dummyjson.com";

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products?limit=20`);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return data.products || [];
  } catch (error) {
    throw error;
  }
};
