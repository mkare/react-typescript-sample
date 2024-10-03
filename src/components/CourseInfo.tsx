import { PropsWithChildren } from "react";
import { CourseProps } from "@/types/types";
import Button from "./Button";
import Box from "./Box";

export default function CourseInfo({
  courseName,
  children,
}: PropsWithChildren<CourseProps>) {
  return (
    <Box className="mb-2">
      <h1>{courseName}</h1>
      {children}
      <Button icon="FiDownload">Download Course</Button>
    </Box>
  );
}
