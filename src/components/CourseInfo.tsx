import { PropsWithChildren } from "react";
import { CourseProps, BookProps } from "@/types/types";
import Button from "./Button";
import Box from "./Box";
import Select from "./Select";

type ExtendedBookProps = BookProps & { id: string };

export default function CourseInfo({
  courseName,
  children,
}: PropsWithChildren<CourseProps>) {
  return (
    <Box className="mb-2">
      <h1>{courseName}</h1>
      {children}
      <Select<ExtendedBookProps>
        values={[
          { id: "1", name: "JavaScript" },
          { id: "2", name: "TypeScript" },
        ]}
        onChange={(value) => console.log(value)}
        labelKey="name"
        className="mb-2"
      />
      <Button icon="FiDownload">Download Course</Button>
    </Box>
  );
}
