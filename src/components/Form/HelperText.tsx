import { helperText } from './styles.css';

type HelperTextProps = {
  text: string;
};

export const HelperText = ({ text }: HelperTextProps) => {
  return <span className={helperText}>{text}</span>;
};
