import { ComponentProps, forwardRef } from "react";
import Icon, { IconName } from "./Icon";

type Props = {
  icon?: IconName;
  iconPosition?: "start" | "end";
} & ComponentProps<"button">;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ icon, iconPosition = "start", children, ...props }, ref) => {
    const renderIcon = icon ? <Icon name={icon} size={24} /> : null;

    const renderClassname = () => {
      let className = "button";
      if (props.className) className += ` ${props.className}`;
      return className;
    };

    return (
      <button ref={ref} {...props} className={renderClassname()}>
        {iconPosition === "start" && renderIcon}
        <span>{children}</span>
        {iconPosition === "end" && renderIcon}
      </button>
    );
  }
);

export default Button;
