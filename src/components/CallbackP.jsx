import React, { useCallback, useEffect, useState } from "react";

const CallbackP = () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(0);
  const [num1] = useState(4);
  const [num2] = useState(5);

  const sum = useCallback(() => num1 + num2, [num1, num2]);
  const buildArray = useCallback(() => [num1, num2], [num1, num2]);
  useEffect(() => {
    console.log(`New array. Value: ${buildArray()}`);
    setResult(buildArray());
  }, [buildArray]);
  return (
    <main className='mx-auto mt-48 h-[300px] w-[300px] rounded-lg bg-zinc-700 text-black'>
      <input
        type='text'
        placeholder='input'
        value={userInput}
        className='mx-14 mt-20 h-12 rounded-lg bg-gray-400 pl-2 text-black'
        onChange={(e) => setUserInput(e.target.value)}
      />
    </main>
  );
};

export default CallbackP;
