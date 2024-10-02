import BookInfo from "./BookInfo";
import { ComponentProps } from "react";

type Props = {
  themeColor: string;
  title: ComponentProps<typeof BookInfo>["name"];
};

export default function FeaturedBookInfo({ themeColor, title }: Props) {
  return (
    <div style={{ background: themeColor }}>
      <BookInfo name={title} />
    </div>
  );
}
