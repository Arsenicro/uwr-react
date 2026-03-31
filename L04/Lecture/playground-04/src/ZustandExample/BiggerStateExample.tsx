import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

interface CounterState {
  count: number;
  count2: number;
  increment: () => void;
  increment2: () => void;
}

const useCounter = create<CounterState>()((set) => ({
  count: 0,
  count2: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  increment2: () => set((state) => ({ count2: state.count2 + 1 })),
}));

function Counter1() {
  console.log("Counter1 render");
  //const { count, increment } = useCounter();
  //const count = useCounter((state) => state.count);
  //const increment = useCounter((state) => state.increment);

  const { count, increment } = useCounter(
    useShallow((state) => ({ count: state.count, increment: state.increment }))
  );

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>
        Click
      </button>
    </div>
  );
}

function Counter2() {
  console.log("Counter2 render");
  //const { count2, increment2 } = useCounter();
  const { count2, increment2 } = useCounter(
    useShallow((state) => ({ count2: state.count2, increment2: state.increment2 }))
  );

  return (
    <div>
      <h1>{count2}</h1>
      <button onClick={increment2}>
        Click
      </button>
    </div>
  );
}

export default function BiggerStateExample() {

  return (
    <>
      <Counter1 />
      <Counter2 />
    </>
  );
}