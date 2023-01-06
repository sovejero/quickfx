
export async function getFxRates( date = 'latest', base = 'EUR') {
  const URL = `https://api.exchangerate.host/${date}?base=${base}`;
  
  try{
    const response = await fetch(URL);
    return await response.json();
  } catch(error) {
    return;
  }
}
