export interface BlogPost {
  id: number;
  user_id: number;
  title: string;
  description: string;
  content_text: string;
  content_html: string;
  photo_url: string;
  category: string;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse {
  success: boolean;
  total_blogs: number;
  message: string;
  offset: number;
  limit: number;
  blogs: BlogPost[];
}

export interface Article {
  id: number;
  title: string;
  description: string;
  content_text: string;
  photo_url?: string;
  category: string;
  created_at: string;
}

export interface ArticleCardProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  created_at: string;
  onClick: () => void;
}
export interface ArticleModalProps {
  article: Article;
  onClose: () => void;
}

export interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}
export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}
