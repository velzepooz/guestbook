const API_URL = `${process.env.REACT_APP_API_URL}/review/add`;

export const addReview = async(data) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return true;
  }

  throw new Error(`Server responded with ${response.status} error`);
};
