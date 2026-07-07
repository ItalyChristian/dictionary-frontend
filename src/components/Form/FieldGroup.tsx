import React from 'react';
import { fieldGroup } from './styles.css';

type FieldGroupProps = {
  children: React.ReactNode;
};

export const FieldGroup = ({ children }: FieldGroupProps) => {
  return <div className={fieldGroup}>{children}</div>;
};
