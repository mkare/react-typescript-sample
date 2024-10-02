import { PropsWithChildren } from "react";
import { CourseProps } from "@/types/types";
import Button from "./Button";

export default function CourseInfo({
  courseName,
  children,
}: PropsWithChildren<CourseProps>) {
  return (
    <div>
      <h1>{courseName}</h1>
      {children}
      <Button icon="FiDownload">Download Course</Button>
    </div>
  );
}
