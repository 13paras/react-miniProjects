/* eslint-disable react/prop-types */
import { Input, Select, SelectItem } from "@nextui-org/react";

const CurrencyInputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions,
  disabled,
  from,
  to,
  simplified,
}) => {
  return (
    <div className='flex items-center justify-between gap-6 rounded-lg bg-neutral-500 p-2 '>
      <Input
        type='number'
        label={label}
        value={amount}
        min={0}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        placeholder='0'
        className='w-40'
        disabled={disabled}
        labelPlacement='outside'
      />

      <Select
        label='Currency Type'
        placeholder={simplified ? to : from}
        value={from}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        labelPlacement='outside'
        className={"w-40"}
      >
        {currencyOptions &&
          currencyOptions.map((currency) => <SelectItem key={currency}>{currency}</SelectItem>)}
      </Select>
    </div>
  );
};

export default CurrencyInputBox;
