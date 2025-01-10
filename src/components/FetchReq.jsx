import React, { useState, useEffect } from "react";

const API_RAT =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODE4NjViMmVmNTEyY2NiMDk4MzEyZTlmZDZjMDkyMiIsIm5iZiI6MTczNDM0NTI5NC4yMDgsInN1YiI6IjY3NjAwMjRlNzViZDJmM2UxOTI3YTNhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KqSLJ1m1AMY_HLZ1aOoyTrjMCi6PD7minJsouFxtVg8";

export default function FetchReq() {
  const [data, setData] = useState(null);

  // Async function to fetch data
  async function req(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_RAT}`, // Adding the API_RAT as a header
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
    req(url);
  }, []); 
  return (
    <div>
    </div>
  );
}
