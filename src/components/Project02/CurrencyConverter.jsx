import React, { useEffect, useState } from "react";
import { Card, CardBody, Button } from "@nextui-org/react";
import CurrencyInputBox from "./CurrencyInputBox";
import useCurrencyInfo from "../../hooks/useCurrencyInfo";

const CurrencyConverter = () => {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(1);
  const [convertTo, setConvertTo] = useState("");
  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };
  // const convertCurrency = () => {
  //   return amount *
  // }
  return (
    <div
      className='h-screen w-full bg-cover bg-center bg-no-repeat pt-44'
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070')`,
      }}
    >
      <Card className='p-4lg:w-[30%] mx-auto w-[60%] space-y-3 rounded-xl bg-lighGrey'>
        <form className=''>
          <CardBody>
            <CurrencyInputBox
              label='From'
              disabled={false}
              from={from}
              amount={amount}
              onAmountChange={(value) => setAmount(value)}
              currencyOptions={currencyOptions}
            />
            <Button onClick={swap} color='secondary' className='mx-auto my-2 flex w-24'>
              swap
            </Button>
            <CurrencyInputBox
              simplified
              disabled
              label={"To"}
              to={to}
              onCurrencyChange={(value) => setConvertTo(value)}
            />
            <Button color='primary' className='mt-4 flex items-center'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </Button>
          </CardBody>
        </form>
      </Card>
    </div>
  );
};

export default CurrencyConverter;
