function Authentication() {
  var mail = document.getElementById("email");
  var pass = document.getElementById("password");
  var loginButton = document.getElementById("loginButton");

  loginButton.innerHTML = "Carregando..."

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
        alert("Falha na autenticação, tente novamente!")
      }
      loginButton.innerHTML = "ENTRAR"
      return response.data
    }).catch(
      function (error) {
        alert("Email ou senha invalido, por favor tente novamente!")
        loginButton.innerHTML = "ENTRAR"
        return Promise.reject(error)
      }
    );
}