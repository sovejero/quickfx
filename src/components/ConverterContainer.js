import { getConvertedRates } from "../api/Converter";
import { Converter } from "./Converter";
import { useState, useEffect } from "react";
import { ConverterInput } from "./ConverterInput";

export const ConverterContainer = () => {
  const [toConvert, setToConvert] = useState();
  const [rates, setRates] = useState();

  useEffect(() => {
    const response = getConvertedRates('EUR', 'USD');
    response.then( (data) => setRates(data));
  }, [toConvert]);

  return (
    rates ? 
    <>
      <ConverterInput setToConvert={setToConvert}></ConverterInput>
      <Converter from={rates.query.from} to={rates.query.to} date={rates.date} result={rates.result}></Converter>
    </>
    : <div>Loading</div>
  );
}
