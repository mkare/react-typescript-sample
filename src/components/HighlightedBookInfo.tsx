import BookInfo from "./BookInfo";
import { ComponentProps } from "react";

type Props = {
  themeColor: string;
} & ComponentProps<typeof BookInfo>;

export default function HighlightedBookInfo({ themeColor, ...props }: Props) {
  return (
    <div style={{ background: themeColor }}>
      <BookInfo {...props} />
    </div>
  );
}
