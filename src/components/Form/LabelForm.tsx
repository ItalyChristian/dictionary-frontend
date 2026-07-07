import { Label } from 'radix-ui';
import { label, requiredLabel } from './styles.css';

type LabelFormProps = {
  text: string;
  htmlFor: string;
  required?: boolean;
};

export const LabelForm = ({ text, required, htmlFor }: LabelFormProps) => {
  return (
    <Label.Root className={label} htmlFor={htmlFor}>
      {text} {required && <span className={requiredLabel}>*</span>}
    </Label.Root>
  );
};
