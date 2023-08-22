export const AddAsset = async (asset: any) => {
  const status = await fetch(
    "https://components.skillreactor.io/CryptoPortfolioTracker/tempacc/assets-service",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(asset),
    }
  )
    .then((response) => {
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });

  return status;
};

export const GetAsset = async (username: string) => {
  const data = await fetch(
    "https://components.skillreactor.io/CryptoPortfolioTracker/tempacc/portfolio-service?username="+username,
    {
      method: "GET",
      headers: {
        "content-type": "text/plain",
      },
    }
  )
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
    
  return await data.json();
};

export const DeleteAsset = async (username: string, token: string, quantity: number) => {
  const status = await fetch(
    "https://components.skillreactor.io/CryptoPortfolioTracker/tempacc/assets-service",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        username,
        token,
        quantity,
        action: "DELETE"
      }),
    }
  )
    .then((response) => {
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });

  return status;
};
