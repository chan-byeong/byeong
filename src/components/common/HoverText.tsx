import React from "react";
import styles from "./common.module.css";

export const HoverText = ({ children }) => {
  const [text, hoverContent] = React.Children.toArray(children);

  return (
    <span className={styles["text-hover"]}>
      {text}
      <div className={styles["hover-contents"]}>{hoverContent}</div>
    </span>
  );
};
