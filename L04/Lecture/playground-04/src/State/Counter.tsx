import { useState } from "react";

let globalCounter = 0;

export function Counter({ fancy, name }: { fancy?: boolean, name?: string }) {
  const [score, setScore] = useState(0);

  console.log("Global Counter:", globalCounter);

  return (
    <div style={{ border: fancy ? '2px solid gold' : '1px solid black' }}>
      <h1>{name ? `${name}: ${score}` : score}</h1>
      <button onClick={() => {
        setScore((prev) => prev + 1);
        globalCounter += 1;
      }}>
        Click
      </button>
    </div>
  );
}