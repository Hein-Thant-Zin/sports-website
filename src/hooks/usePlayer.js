import useFetch from "./useFetch";

export default function Player(player) {
  return useFetch(`/players/${player}`, "POST");
}
