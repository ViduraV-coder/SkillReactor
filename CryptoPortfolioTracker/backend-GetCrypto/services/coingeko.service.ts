import { CoinGeckoClient } from 'coingecko-api-v3';

const client = new CoinGeckoClient({
  timeout: 10000,
  autoRetry: true,
});

export const getCoinList = async() => {
    const coinList = await client.coinList({include_platform: false});
    return coinList;
}

export const getCoinPrice = async(coinId: string) => {
    const coinPrice = await client.simplePrice({ids: coinId, vs_currencies: "usd"});
    return coinPrice;
}