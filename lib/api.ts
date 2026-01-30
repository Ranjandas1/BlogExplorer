import { ApiResponse } from "./types";

const API_BASE_URL = "https://api.slingacademy.com/v1/sample-data/blog-posts";

export async function fetchBlogPosts(): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}?offset=0&limit=10`);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    throw error;
  }
}
