export const RegisterUser = async (user: any) => {
  const status = await fetch(
    "https://components.skillreactor.io/CryptoPortfolioTracker/tempacc/registration-service",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(user),
    }
  )
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });

  return status;
};

export const LoginUser = async (user: any) => {
  const status = await fetch(
    "https://components.skillreactor.io/CryptoPortfolioTracker/tempacc/login-service",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(user),
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
