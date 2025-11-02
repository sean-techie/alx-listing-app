// interfaces/index.ts

// Defines the shape of data that a Card component will receive
export interface CardProps {
  id?: string | number;
  title: string;
  description?: string;
  imageSrc?: string;
  price?: string | number;
  onClick?: () => void;
}

// Defines the props for the reusable Button component
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}
