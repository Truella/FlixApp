import React, { useState } from "react";
const API_RAT =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODE4NjViMmVmNTEyY2NiMDk4MzEyZTlmZDZjMDkyMiIsIm5iZiI6MTczNDM0NTI5NC4yMDgsInN1YiI6IjY3NjAwMjRlNzViZDJmM2UxOTI3YTNhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KqSLJ1m1AMY_HLZ1aOoyTrjMCi6PD7minJsouFxtVg8";
const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${API_RAT}`,
    "Content-Type": "application/json",
  },
};
export default function useApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function sendMovieReq(url) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
      console.log(data)
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message || "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, sendMovieReq, setData };
}
