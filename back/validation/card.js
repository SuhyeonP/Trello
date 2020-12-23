import Ajv from 'ajv';

const isValidateCardData = data => {
  const ajv = new Ajv();

  const schema = {
    properties: {
      listId: { type: 'integer' },
      cardTitle: { type: 'string' },
      content: { type: 'string' },
      order: { type: 'integer' },
      background: { type: 'string' },
    },
    required: ['listId', 'cardTitle', 'content', 'order', 'background'],
  };

  const validate = ajv.compile(schema);
  return validate(data);
};

export default isValidateCardData;
