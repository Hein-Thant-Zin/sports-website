import { useEffect, useState } from "react";

const API = "https://api.ui.dev/hash-history-basketball-league";
// const API ="https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague";
export default function useFetch(path, method, body = "") {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setResponse(null);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${API}${path}`, {
      method,
      ...(body ? { body } : {}),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ body }) => (body ? JSON.parse(body) : null))
      .then((data) => {
        if (!signal.aborted) {
          setResponse(data);
          setLoading(false);
        }
      })
      .catch((error) => console.error("Something went wrong!!", error));

    //clean up function
    return () => controller.abort();
    //   .then(({ body }) => (body ? JSON.parse(body) : null));
  }, [path, method, body]);
  return { response, loading };
}
