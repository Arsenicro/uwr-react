import { useState } from "react";
import { Counter } from "./Counter";

function SameComponentMultipleTimes() {
  const counter = <Counter />;

  return (
    <div>
      {counter}
      {counter}
      {counter}
    </div>
  );
}

function ToggleSecond() {
  const [renderSecond, setRenderSecond] = useState(true);

  return (
    <div>
      <div>
        <Counter />
        {renderSecond && <Counter />}
      </div>
      <button onClick={() => setRenderSecond((prev) => !prev)}>
        Toggle Second Counter
      </button>
    </div>
  );
}


function SamePositionDifferentProps() {
  const [fancy, setFancy] = useState(false);

  return (
    <div>
      <Counter fancy={fancy} />
      <button onClick={() => setFancy((prev) => !prev)}>
        Toggle Fancy
      </button>
    </div>
  );
}

function StillSamePositionDifferentProps() {
  const [fancy, setFancy] = useState(false);

  if (fancy) {
    return (
      <div>
        <Counter fancy={true} />
        <button onClick={() => setFancy(false)}>
          Toggle Fancy
        </button>
      </div>
    );
  }

  return (
    <div>
      <Counter fancy={false} />
      <button onClick={() => setFancy(true)}>
        Toggle Fancy
      </button>
    </div>
  );
}

function WrongKeyUsage() {
  const [counters, setCounters] = useState(["Alice", "Bob"]);

  return (
    <div>
      {counters.map((name, index) => (
        <Counter key={index} name={name} />
      ))}
      <button onClick={() => setCounters((prev) => prev[0] === "Alice" ? ["Bob", "Alice"] : ["Alice", "Bob"])}>
        Swap Counters
      </button>
    </div>
  );
}


function NestedComponentDefinition() {
  const [count, setCount] = useState(0);

  function TextField() {
    const [text, setText] = useState('');

    return <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type something..." />;
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>
      <TextField />
    </div>
  );
}

function ResetStateProblem() {
  const [player, setPlayer] = useState('Alice');

  return (
    <div>
      <button onClick={() => setPlayer(player === 'Alice' ? 'Bob' : 'Alice')}>
        Switch Player
      </button>
      <Counter name={player} />
    </div>
  )
}

function ResetStateSolution1() {
  const [player, setPlayer] = useState('Alice');

  return (
    <div>
      <button onClick={() => setPlayer(player === 'Alice' ? 'Bob' : 'Alice')}>
        Switch Player
      </button>
      <Counter name={player} />
    </div>
  )
}

function ResetStateSolution2() {
  const [player, setPlayer] = useState('Alice');

  return (
    <div>
      <button onClick={() => setPlayer(player === 'Alice' ? 'Bob' : 'Alice')}>
        Switch Player
      </button>
      <Counter name={player} />
    </div>
  )
}

export function State() {
  return <Counter />
}
