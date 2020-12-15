import Ajv from 'ajv';

const isValidateUserLoginData = data => {
  const ajv = new Ajv();

  const schema = {
    properties: {
      userId: { type: 'string' },
      userPassword: { type: 'string' },
    },
    required: ['userId', 'userPassword'],
  };

  const validate = ajv.compile(schema);
  return validate(data);
};

export default isValidateUserLoginData;
