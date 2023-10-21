/* eslint-disable react-hooks/exhaustive-deps */
import { Checkbox } from "@nextui-org/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const Project01 = () => {
  const [length, setLength] = useState(8);
  const [inputText, setInputText] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null);

  // useCallback is used for optimization
  const copyToClipboard = useCallback(() => {
    setIsCopied(true);
    passwordRef.current?.select();
    //- to optimize more
    //- this can be used in some scenarios
    // passwordRef.current?.setSelectionRange(0, 5);
    passwordRef.current?.setSelectionRange(0, length);
    toast.success("Password copied!!");
    navigator.clipboard.writeText(inputText);
    setTimeout(() => {
      setIsCopied(false);
    }, 600);
  }, [inputText]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()+_";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setInputText(pass);
  }, [length, numbersAllowed, charAllowed, setInputText]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, charAllowed, setInputText]);
  return (
    <div className='mx-auto mt-32 w-[60%] space-y-3 rounded-xl bg-gray-800 p-4 lg:w-[30%]'>
      <h1 className='text-center text-3xl font-semibold text-orange-600'>Password Generator</h1>
      <div className='flex items-center'>
        <input
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          readOnly
          ref={passwordRef}
          className='w-[80%] rounded-l-xl bg-gray-200 p-2 text-orange-600'
        />
        <button
          onClick={copyToClipboard}
          className='w-20 rounded-r-xl bg-blue-700 p-2 px-3 transition-all duration-150 ease-in-out hover:bg-blue-600 active:scale-95'
        >
          {!isCopied ? "copy" : "copied!"}
        </button>
      </div>
      <div className='flex items-center space-x-4'>
        <input
          defaultValue={length}
          onChange={e => setLength(e.target.value)}
          type='range'
          min={1}
          max={50}
          step={1}
        />
        <span>Length ({length})</span>
        <Checkbox
          isSelected={numbersAllowed}
          onValueChange={() => setNumbersAllowed(!numbersAllowed)}
          color='secondary'
        >
          Numbers
        </Checkbox>
        <Checkbox
          isSelected={charAllowed}
          onValueChange={() => setCharAllowed(!charAllowed)}
          color='secondary'
        >
          Characters
        </Checkbox>
      </div>
    </div>
  );
};

export default Project01;
