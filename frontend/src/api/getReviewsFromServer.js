const API_URL = `${process.env.REACT_APP_API_URL}/review`;

export const getReviewsFromServer = async() => {
  const response = await fetch(API_URL);

  if (response.ok) {
    const data = await response.json();

    return data.message;
  }

  throw new Error(`Server responded with ${response.status} error`);
};
