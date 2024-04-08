import React, { useEffect } from "react";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/notes/getnotes", {
        headers: {
          "Content-Type": "application/json",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxMzg5NzMzYzAxNGUyMzBkMDc1YjM2In0sImlhdCI6MTcxMjU3MDY0OX0.imTRZJNluW084CDXAG-qQ9YVIPrIJIshVuDu4yFU-H8",
        },
      })
      .then((response) => {
        console.log("-=-RESPONS=", response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <text>this is Home</text>
    </div>
  );
}
