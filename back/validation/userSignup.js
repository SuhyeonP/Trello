import Ajv from 'ajv';

const isValidateUserSignUpData = data => {
  const ajv = new Ajv();

  const schema = {
    properties: {
      userId: { type: 'string' },
      userPassword: { type: 'string' },
      userNickName: { type: 'string' },
    },
    required: ['userId', 'userPassword', 'userNickName'],
  };

  const validate = ajv.compile(schema);
  return validate(data);
};

export default isValidateUserSignUpData;
