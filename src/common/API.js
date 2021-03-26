const CG_COINS_URL = "https://api.coingecko.com/api/v3/coins";
const BACKEND_ENDPOINT = "http://localhost:5000";

async function _fetch(URL) {
  const response = await fetch(URL, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "text/plain",
      // "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: "follow", // manual, *follow, error
    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(params), // body data type must match "Content-Type" header
  });
  return response.text(); // parses JSON response into native JavaScript objects
}

export async function fetchTokenInfo(tokenId) {
  const url = `${CG_COINS_URL}/${tokenId}/?tickers=false&&community_data=false&&developer_data=false&&localization=false`;
  return await _fetch(url);
}

export async function fetchTokenList() {
  const url = `${BACKEND_ENDPOINT}/tokens`;
  return await _fetch(url);
}
