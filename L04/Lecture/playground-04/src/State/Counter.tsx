import { useState } from "react";

export function Counter({ fancy, name }: { fancy?: boolean, name?: string }) {
  const [score, setScore] = useState(0);


  return (
    <div style={{ border: fancy ? '2px solid gold' : '1px solid black' }}>
      <h1>{name ? `${name}: ${score}` : score}</h1>
      <button onClick={() => setScore((prev) => prev + 1)}>
        Click
      </button>
    </div>
  );
}