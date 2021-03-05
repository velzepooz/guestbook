export const inputs = {
  name: {
    id: 'author',
    name: 'author',
    type: 'text',
    minLength: 1,
    placeholder: 'Your name',
    isRequired: false,
    label: 'Enter your name (is you wish):',
  },
  title: {
    id: 'title',
    name: 'title',
    type: 'text',
    minLength: 1,
    placeholder: 'Review title',
    isRequired: true,
    label: 'Enter review title:',
  },
  message: {
    id: 'message',
    name: 'message',
    placeholder: 'Message',
    rows: 5,
    cols: 1,
    isRequired: true,
  },
};
