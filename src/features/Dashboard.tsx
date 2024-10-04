import { PropsWithChildren } from "react";
import { DashboardProps } from "@/types/types";

export default function Dashboard({
  title,
  children,
  menu,
}: PropsWithChildren<DashboardProps>) {
  return (
    <div className="dashboard">
      <aside className="menu">{menu}</aside>
      <section className="main-content">
        <h1>{title}</h1>
        {children}
      </section>
    </div>
  );
}
