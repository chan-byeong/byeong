import styles from "./common.module.css";

export const Bold = ({ children }) => {
  return <strong className={styles["text-highlight"]}>{children}</strong>;
};
