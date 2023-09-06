import { useEffect, useState } from "react";

const API = "https://api.ui.dev/hash-history-basketball-league";
export default function useFetch(path, method, body = "") {
  const [response, setResponse] = useState(null);
  const [laoding, setLoading] = useState(false);

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
      .then((data) => {
        setResponse(data);
        setLoading(false);
      });
    //   .then(({ body }) => (body ? JSON.parse(body) : null));
  }, [path, method, body]);
  return { response, laoding };
}
