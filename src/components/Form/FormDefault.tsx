import { form } from "./styles.css";

type FormDefaultProps = {
  children: React.ReactNode;
} & React.ComponentProps<"form">;

export const FormDefault = ({ children, ...rest }: FormDefaultProps) => {
  return (
    <form className={form} {...rest}>
      {children}
    </form>
  );
};
