
export async function getConvertedRates( from, to, date = 'latest', base = 'EUR') {
  const URL = `https://api.exchangerate.host/convert?from=${from}&to=${to}&date=${date}&base=${base}`;
  
  try{
    const response = await fetch(URL);
    return await response.json();
  } catch(error) {
    return;
  }
}
