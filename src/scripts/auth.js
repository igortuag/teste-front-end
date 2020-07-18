function Authentication() {
  var mail = document.getElementById("email");
  var pass = document.getElementById("password");

  axios
    .post("https://reqres.in/api/login", {
      email: mail.value,
      password: pass.value,
    })
    .then(function (response) {
      if (response.status === 200) {
        window.location.href = "./pages/lista-usuarios.html";
        localStorage.setItem("token", response.data.token);
      } else {
        alert("Email ou senha errado");
      }
    });
}
