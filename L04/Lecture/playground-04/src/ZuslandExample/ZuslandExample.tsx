import { useState } from "react";


export default function ZuslandExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click
      </button>
    </div>
  );
}