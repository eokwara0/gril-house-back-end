const form = document.getElementById("reset");
form.addEventListener("submit", async function (event) {
  // prevent form submission
  event.preventDefault();

  // create formData Object
  const formData = new FormData(event.target);

  // get userId from url string
  const userId = window.location.href.split("/")[5].split("?")[0];
  // get jwt_token from url string
  const jwt = window.location.href.split("/")[5].split("?")[1];

  // make a request to the server to change the user's password
  const response = await fetch(
    `http://localhost:3000/user/password/${userId}?${jwt}newpassword=${formData.get(
      "newpassword"
    )}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer: ${jwt.split("=")[0].split("&&")[0]}`,
        "Content-Type": "application/json",
      },
    }
  );
});
