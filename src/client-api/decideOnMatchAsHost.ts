export const decideOnMatchAsHost = async (matchesId, decision) => {
  const res = await fetch(
    `/api/hosts/matchesconfirm/${matchesId}?accepted=${decision}`,
    { method: "GET" }
  );
  if (res.status != 200) {
    throw new Error("Couln't process the decision, try again later.");
  }

  const body = await res.json();

  return body;
};
