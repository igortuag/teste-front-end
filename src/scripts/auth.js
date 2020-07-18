function Authentication() {
  var mail = document.getElementById("email");
  var pass = document.getElementById("password");

  axios
    .post("https://reqres.in/api/login", {
      email: mail.value,
      password: pass.value,
    })
    .then(function (response) {
      console.log(response.data);
      if (response.status === 200) {
        alert(response.status);
        alert(response.data.token);
        window.location.href = './pages/lista-usuarios.html';
      } else {
        alert("Email ou senha errado");
      }
    });
}
