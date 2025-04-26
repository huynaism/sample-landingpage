import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  type?: "default" | "primary" | "primary-inverse";
  children?: React.ReactNode | string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const cx = classNames.bind(styles);

const Button: React.FC<Props> = ({
  className,
  children,
  type = "default",
  onClick,
}) => {
  const btnStyle: any = {};

  if (type === "default") {
    btnStyle.backgroundColor = "#ffffff";
    btnStyle.color = "#000000";
  } else if (type === "primary") {
    btnStyle.backgroundColor = "#6195FF";
    btnStyle.color = "#ffffff";
  } else if (type === "primary-inverse") {
    btnStyle.color = "#6195FF";
    btnStyle.border = "1px solid #6195FF";
  }

  return (
    <div className={cx("btn", className)} style={btnStyle} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
