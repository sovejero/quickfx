import { getFxRates } from "../api/Rates";
import { RatesTable } from "./RatesTable";
import { useState, useEffect } from "react";

export const RatesTableContainer = () => {
  const [rates, setRates] = useState();

  useEffect(() => {
    const response = getFxRates();
    response.then( (data) => setRates( data ));
  }, []);

  return (
    rates ? <RatesTable currencyRates={rates.rates} date={rates.date} base={rates.base}></RatesTable> : <div>Loading</div>
  );
}
 