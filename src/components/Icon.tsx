import React from "react";
import * as Icons from "react-icons/fi";

export type IconName = keyof typeof Icons;

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  className = "",
}) => {
  const IconComponent = Icons[name]; // TypeScript ile güvenli erişim

  if (!IconComponent) return null; // Eğer ikon yoksa null döner

  return <IconComponent size={size} color={color} className={className} />;
};

export default Icon;
