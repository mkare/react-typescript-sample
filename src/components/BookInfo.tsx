import { BookProps } from "@/types/types";
import Box from "./Box";

export default function BookInfo({ name, author }: BookProps) {
  return (
    <Box className="book-info">
      <h2>{name}</h2>
      {author && <p>Author: {author}</p>}
    </Box>
  );
}
