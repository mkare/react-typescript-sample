export type BookProps = {
  name: string;
  author?: string;
};

export type CourseProps = {
  courseName: string;
};

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type DashboardProps = {
  title: string;
  menu: React.ReactNode;
};
