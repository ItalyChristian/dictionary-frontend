import { TriangleAlert } from "lucide-react";
import { errorMessage } from "./styles.css";
import { FieldError } from "./FieldError";

type CardErrorProps = {
  message: string | undefined;
};

export const CardError = ({ message }: CardErrorProps) => {
  return (
    <div className={errorMessage} role="alert">
      <TriangleAlert />

      <FieldError message={message} />
    </div>
  );
};
