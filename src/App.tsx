import "./App.css";
import BookInfo from "@/components/BookInfo";
import CourseInfo from "@/components/CourseInfo";
import FeaturedBookInfo from "@/components/FeaturedBookInfo";
import HighlightedBookInfo from "@/components/HighlightedBookInfo";

function App() {
  return (
    <>
      <CourseInfo courseName="React">
        <p>
          <b>React</b> is a JavaScript library for building user interfaces.
          <br />
          <a href="https://reactjs.org/">React documentation</a>,{" "}
          <a href="https://reactjs.org/tutorial/tutorial.html">
            React tutorial
          </a>{" "}
          React and TypeScript are a match made in heaven.
        </p>
      </CourseInfo>

      <BookInfo name="The Great Gatsby" author="F. Scott Fitzgerald" />
      <FeaturedBookInfo
        themeColor="#6F1E51"
        title="The Catcher in the Rye by J.D. Salinger"
      />
      <HighlightedBookInfo
        themeColor="#1B1464"
        name="The Catcher in the Rye"
        author="J.D. Salinger"
      />
    </>
  );
}

export default App;
