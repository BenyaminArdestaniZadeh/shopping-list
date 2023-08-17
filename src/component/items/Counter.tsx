import { useState } from "react";

type Props = {
  getUniqueItem: (count: number) => void;
};

export default function Counter({ getUniqueItem }: Props) {
  // to get the number of items
  const [count, setCount] = useState<number>(1);

  const buttonHandler = (action: string) => {
    if (action === "decrease") {
      const minusOne = count - 1;
      if (count > 1) {
        setCount(minusOne);
        getUniqueItem(minusOne);
      }
    } else {
      const plusOne = count + 1;
      setCount(plusOne);
      getUniqueItem(plusOne);
    }
  };

  return (
    <>
      <div className="counter-container">
        <button onClick={() => buttonHandler("decrease")}>-</button>
        <h5>{count}</h5>
        <button onClick={() => buttonHandler("increase")}>+</button>
      </div>
    </>
  );
}
