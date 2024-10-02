import { BookProps } from "@/types/types";

export default function BookInfo({ name, author }: BookProps) {
  return (
    <div>
      <h2>{name}</h2>
      {author && <p>Author: {author}</p>}
    </div>
  );
}
