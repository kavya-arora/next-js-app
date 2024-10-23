export const followCharacter = async ({ id }) => {
  console.log("follow", id);
  const response = await fetch("/api/follow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: id }),
  });
  await response.json();
};