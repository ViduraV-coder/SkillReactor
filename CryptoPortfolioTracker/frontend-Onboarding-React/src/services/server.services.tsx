export const addUsername = async (username: string) => {

  const status = await fetch(
    "https://components.skillreactor.io/CryptoPortfolioTracker/tempacc/onboarding-backend",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        username,
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
    });

    return status;
};
