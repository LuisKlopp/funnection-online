export const getAnonId = () => {
  if (typeof window === "undefined") return "";

  let id = localStorage.getItem("anon_id");

  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("anon_id", id);
  }

  return id;
};
