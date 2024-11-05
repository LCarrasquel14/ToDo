const url = "https://todo-db-beta.vercel.app/users";

export const getUsers = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
