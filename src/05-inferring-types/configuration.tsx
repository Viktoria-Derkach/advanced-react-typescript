import { FC } from 'react';
import { LabeledInput } from '../components';

function getConfigItem<TSchema extends keyof typeof config, TItem  extends keyof typeof config[TSchema]>
(section: TSchema, item:  TItem) {
  const config = {
    user: {
      firstName: 'John',
      birthDate: new Date(1990, 6, 10),
      lastName: 'Jay'
    },
    address: {
      street: 'Main St',
      houseNumber: 123,
      city: 'New York',
    },
  };

  return config[section][item];
}

export const Configuration: FC = () => {
  const firstName = getConfigItem('user', 'firstName');
  const lastName = getConfigItem('user', 'lastName');
  const birthDate = getConfigItem('user', 'birthDate').toDateString();

  // const employer = getConfigItem('employer', 'name');

  const street = getConfigItem('address', 'street');
  const houseNumber = getConfigItem('address', 'houseNumber');
  const city = getConfigItem('address', 'city').toUpperCase();

  return (
    <div>
      <h3>Configuration</h3>
      <div className="row gap-2">
        <LabeledInput value={firstName} readOnly>
          First name:
        </LabeledInput>
        <LabeledInput value={lastName} readOnly>
          Last name:
        </LabeledInput>
        <LabeledInput value={birthDate} readOnly>
          Birth date:
        </LabeledInput>
        <LabeledInput value={`${street} ${houseNumber}, ${city}`} readOnly>
          Address:
        </LabeledInput>
      </div>
    </div>
  );
};
