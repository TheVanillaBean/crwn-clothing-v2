import React from 'react';
import { FormInputLabel, Group, Input } from './form-input.styles';

const FormInput = ({ label, inputOptions }) => {
  return (
    <Group>
      <Input {...inputOptions} />

      {label && <FormInputLabel shrink={inputOptions.value.length > 0}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
