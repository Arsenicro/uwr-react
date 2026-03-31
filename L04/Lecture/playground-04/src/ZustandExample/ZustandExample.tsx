import { create } from "zustand";

interface CountState {
  count: number;
  increment: () => void;
}

const useCount = create<CountState>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))

export default function ZustandExample() {
  /* const count = useCount((state) => state.count);
  const increment = useCount((state) => state.increment); */
  const { count, increment } = useCount();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>
        Click
      </button>
    </div>
  );
}