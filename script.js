function salvar() {
  localStorage.setItem("nome", document.getElementById("nome").value)
  localStorage.setItem("tel", document.getElementById("tel").value)
  localStorage.setItem("email", document.getElementById("email").value)
  localStorage.setItem("endereco", document.getElementById("end").value)
  localStorage.setItem("cidade", document.getElementById("cidade").value)
  /* localStorage.setItem(
    "dataNascimento",
    JSON.stringify(document.getElementById("dataNascimento"))
  )*/
  localStorage.setItem("sexo", document.getElementById("sexo").value)
  localStorage.setItem(
    "senha",
    JSON.stringify(document.getElementById("senha").value)
  )
  /*localStorage.setItem(
    "confimeSenha",
    JSON.stringify(document.getElementById("confirme-senha").value)
  )*/
  window.location.reload(true)
}
function carregar() {
  var usuarioLocal = localStorage.getItem(
    "email",
    document.getElementById("email").value
  )
  var senhaLocal = localStorage.getItem(
    "senha",
    document.getElementById("senha").value
  )
  if (email.value !== usuarioLocal && senha.value !== senhaLocal) {
    alert("Campos em branco ou Login e senha incorreto")
  } else {
    alert("Voce entrou")
  }
  window.location.reload(true)
}
