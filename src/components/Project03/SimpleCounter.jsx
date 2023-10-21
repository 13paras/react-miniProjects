import { useState } from "react";
import toast from "react-hot-toast";

export default function SimpleCounter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <div className='mt-36 flex justify-center '>
        <button
          onClick={increment}
          className='btn mx-2 w-24 rounded-lg bg-red-400 py-4 shadow-lg transition-all duration-200 ease-in-out hover:bg-red-500 hover:shadow-xl active:scale-95'
        >
          +1
        </button>

        <button
          onClick={decrement}
          className='btn mx-2 w-24 rounded-lg bg-blue-600 py-4 shadow-lg transition-all duration-200 ease-in-out hover:bg-blue-700 hover:shadow-xl active:scale-95'
        >
          -1
        </button>
        <button
          onClick={() => {
            if (counter !== 0) {
              setCounter(0);
              toast.success("Counter Reset!!");
            }
          }}
          className='btn mx-2 w-24 rounded-lg bg-green-600 py-4 shadow-lg transition-all duration-200 ease-in-out hover:bg-green-700 hover:shadow-xl active:scale-95'
        >
          Reset
        </button>
      </div>
      <div className='mt-14 flex justify-center  '>
        <p className='text-6xl text-orange-400 drop-shadow'> {counter} </p>
      </div>
    </div>
  );
}
