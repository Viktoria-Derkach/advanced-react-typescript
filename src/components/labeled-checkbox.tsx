import { ChangeEventHandler, ComponentProps, FC, ReactNode, useId } from 'react';
import { Checkbox } from './checkbox';
import { Label } from './label';

type Props = ComponentProps< typeof Checkbox>

export const LabeledCheckbox: FC<Props> = ({  id, children,  ...props }) => {
  const internalId = useId();

  return (
    <div className="form-check">
      <Checkbox id={id ?? internalId} {...props} />
      <Label htmlFor={id ?? internalId}>{children}</Label>
    </div>
  );
};
