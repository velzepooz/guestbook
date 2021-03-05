export const prepareFormData = (formData) => {
  const { title, author, message } = formData;

  return {
    title: title.value.trim(),
    author: author.value.trim(),
    message: message.value.trim(),
  };
};

export const isValidFormData = (data) => {
  return data.title && data.message;
};
