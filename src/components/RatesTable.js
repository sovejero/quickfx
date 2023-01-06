
export const RatesTable = ({currencyRates, date, base}) => {

  return (
    <>
    <div>
      Base Currency: {base}
      Date: {date}
    </div>
    <table>
    <thead>
        <tr>
            <th colSpan="1">Currency</th>
            <th colSpan="1">Spot price</th>
        </tr>
    </thead>
    <tbody>
      {
        Object.entries(currencyRates).map( ([key, value]) => (
          <tr>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
          )
        )
      }
    </tbody>
    </table>
    </>
  );
}
