// Table Entity
type Table = {
  id: number;
  name: string;
  structure: string; // JSON or other format for table structure
  content: string; // JSON or other format for table data
  bookId: number; // Foreign key to Book
  createdAt: Date;
  updatedAt: Date;
};
