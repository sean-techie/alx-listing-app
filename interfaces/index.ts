// interfaces/index.ts

// Interface for Card component
export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

// Interface for Button component
export interface ButtonProps {
  text: string;
  onClick?: () => void;
}
