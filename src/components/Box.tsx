import React from "react";

type BoxProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const Box = <T extends React.ElementType = "div">({
  as,
  ...props
}: BoxProps<T>) => {
  const Component = as || "div";
  return <Component {...props} />;
};

export default Box;
