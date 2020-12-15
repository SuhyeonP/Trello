import Ajv from 'ajv';

const isValidBoardData = data => {
  const ajv = new Ajv();

  const schema = {
    properties: {
      boardName: { type: 'string' },
      userId: { type: 'string' },
      backgroundType: { type: 'string' },
      backgroundValue: { type: 'string' },
    },
    required: ['boardName', 'userId', 'backgroundType', 'backgroundValue'],
  };

  const validate = ajv.compile(schema);
  return validate(data);
};

export default isValidBoardData;
