// Recipe Entity
type Recipe = {
  id: number;
  name: string;
  ingredients: string[]; // List of ingredient names
  steps: string[]; // List of preparation steps
  bookId: number; // Foreign key to Book
  createdAt: Date;
  updatedAt: Date;
};
