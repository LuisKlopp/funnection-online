const STORAGE_KEY = "answered_map";

export const getAnsweredMap = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
};

export const setAnsweredLocal = (questionId: number) => {
  const map = getAnsweredMap();
  map[questionId] = true;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
};

export const checkAnswered = (questionId: number) => {
  const map = getAnsweredMap();
  return !!map[questionId];
};
