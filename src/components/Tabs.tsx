import { useState } from "react";
import Select from "./Select";
const tabs = [
  { id: "1", name: "Books" },
  { id: "2", name: "Movies" },
  { id: "3", name: "Laptops" },
];

type Book = {
  id: string;
  name: string;
};

type Movie = {
  id: string;
  title: string;
};

type Laptop = {
  id: string;
  model: string;
  releaseDate: string;
};

const books: Book[] = [
  { id: "1", name: "JavaScript" },
  { id: "2", name: "TypeScript" },
];

const movies: Movie[] = [
  { id: "1", title: "Inception" },
  { id: "2", title: "Interstellar" },
];

const laptops: Laptop[] = [
  { id: "1", model: "MacBook Pro", releaseDate: "2016" },
  { id: "2", model: "Dell XPS", releaseDate: "2019" },
];

const getSelect = (tab: string) => {
  switch (tab) {
    case "Books":
      return (
        <Select<Book>
          onChange={(value) => console.info(value)}
          values={books}
          labelKey="name"
        />
      );
    case "Movies":
      return (
        <Select<Movie>
          onChange={(value) => console.info(value)}
          values={movies}
          labelKey="title"
        />
      );
    case "Laptops":
      return (
        <Select<Laptop>
          onChange={(value) => console.info(value)}
          values={laptops}
          labelKey="model"
        />
      );
  }
};

const Tabs = () => {
  const [tab, setTab] = useState<string>(tabs[0].name);

  const select = getSelect(tab);

  return (
    <>
      <Select<{ id: string; name: string }>
        onChange={(value) => setTab(value.name)}
        values={tabs}
        labelKey="name"
      />
      {select}
    </>
  );
};

export default Tabs;
