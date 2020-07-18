window.onload = loadUsers;

function loadUsers() {
  var userList = document.getElementById("userList");
  var userListFooter = document.getElementById("userListFooter");
  userList.innerHTML = "<h1>Administrar usuários</h1>";

  axios.get("https://reqres.in/api/users?page=1").then(function (response) {
    apiData = response.data;
    users = apiData.data;
    console.log(response.data);
    userListFooter.innerHTML = `<p>Mostrando ${apiData.per_page} de ${apiData.total}</p>`;
    users.map(
      (user) =>
        (userList.innerHTML += `<div class="container">
          <button>
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
  });
}
