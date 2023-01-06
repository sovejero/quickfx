export const ConverterInput = ({setToConvert}) => {
  return (
    <>
    <div>ConverterInput</div>
    <label>From</label>
    <input></input>

    <label>To</label>
    <input></input>

    <label>Date</label>
    <input></input>
    <button onClick={() => setToConvert()}>Get Convertion</button>
    </>
  );
}