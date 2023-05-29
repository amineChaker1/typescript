import { useState } from "react";
import "./App.css";

async function App() {
  const [clientName, setClientName] = useState<string | null>("");
  const handleClick = () => {
    setClientName("Chaker");
  };
  type DataType = {
    userId: string;
    id: string;
    title: string;
    body: string;
  };

  async function fetchPosts(): Promise<DataType> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("no response");
    }
    return res.json();
  }
  const data = await fetchPosts();
  return (
    <>
      <h1 onClick={() => handleClick()} style={{ color: "white" }}>
        {clientName ? clientName : "null"}
      </h1>
      <button>Get Posts</button>
      {data.map((post) => (
        <h1> {post.userId} </h1>
      ))}
    </>
  );
}

export default App;
