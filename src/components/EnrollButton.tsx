import { forwardRef } from "react";
import Button from "./Button";

type EnrollButtonProps = Omit<React.ComponentProps<typeof Button>, "iconName">;

const EnrollButton = forwardRef<HTMLButtonElement, EnrollButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Button ref={ref} {...props}>
        {children || "Enroll"}
      </Button>
    );
  }
);

export default EnrollButton;
