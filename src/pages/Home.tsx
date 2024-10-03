import React from "react";
import BookInfo from "@/components/BookInfo";
import CourseInfo from "@/components/CourseInfo";
import FeaturedBookInfo from "@/components/FeaturedBookInfo";
import HighlightedBookInfo from "@/components/HighlightedBookInfo";
import Box from "@/components/Box";
import TodoList from "@/components/TodoList";
import Counter from "@/components/Counter";

const Home: React.FC = () => {
  return (
    <Box>
      <CourseInfo courseName="React">
        <Box as="p" className="paragraph">
          <b>React</b> is a JavaScript library for building user interfaces.{" "}
          <br />
          <Box as="a" href="https://reactjs.org/" className="link me-2">
            React documentation
          </Box>
          <span>React and TypeScript are a match made in heaven.</span>
        </Box>
      </CourseInfo>
      <BookInfo name="Moby Dick" author="Herman Melville" />
      <FeaturedBookInfo
        themeColor="#6F1E51"
        title="The Catcher in the Rye by J.D. Salinger"
      />
      <HighlightedBookInfo
        themeColor="#1B1464"
        name="The Catcher in the Rye"
        author="J.D. Salinger"
      />

      <TodoList />
      <Counter />
    </Box>
  );
};

export default Home;
