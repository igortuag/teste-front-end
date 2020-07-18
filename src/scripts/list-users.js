window.onload = loadUsers;

function loadUsers() {
  if(localStorage.getItem("token") != null) {
    var userList = document.getElementById("userList");
    var userListFooter = document.getElementById("userListFooter");
    axios.get("https://reqres.in/api/users?page=1").then(function (response) {
      apiData = response.data;
      users = apiData.data;
      console.log(response.data);
      users.map(
        (user) =>
          (userList.innerHTML += `<div class="userBox">
            <button class="editButton">
              <img src="../../assets/icon-edit.svg" alt="Editar" />
            </button>
            <img class="userImg"
              src="${user.avatar}"
              alt="Foto de ${user.first_name} ${user.last_name}"
            />
            <p>${user.first_name} ${user.last_name}</p>
            <span>${user.email}</span>
          </div>`)
      );
    }).then( function () {
      userListFooter.innerHTML += `<p>Mostrando ${apiData.per_page} de ${apiData.total}</p>`;
    }
    );
  }else {
    alert("Usuário não autenticado, faça o login para acessar esta pagina!")
    window.location.href = "/src/";
  }
}
