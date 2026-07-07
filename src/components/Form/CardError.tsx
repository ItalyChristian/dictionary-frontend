import { TriangleAlert } from 'lucide-react';
import { errorMessage } from './styles.css';

type CardErrorProps = {
  message: string | undefined;
};

export const CardError = ({ message }: CardErrorProps) => {
  return (
    <div className={errorMessage} role="alert">
      <span>
        <TriangleAlert />
      </span>
      <p>{message}</p>
    </div>
  );
};
