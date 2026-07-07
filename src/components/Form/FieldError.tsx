import { fieldError } from "./styles.css";

type FieldErrorProps = {
  message: string | undefined;
};

export const FieldError = ({ message }: FieldErrorProps) => {
  return <span className={fieldError}>{message}</span>;
};
