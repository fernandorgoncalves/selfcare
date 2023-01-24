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
  localStorage.setItem("sexo", JSON.stringify(document.getElementById("sexo")))
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
    document.getElementById("resultadoLogin").innerHTML =
      " Login ou senha incorreto"
  } else if (usuarioLocal.value === null || senhaLocal.value === null) {
    document.getElementById("resultadoLogin").innerHTML =
      "Preencha o email ou a senha"
  } else {
    document.getElementById("resultadoLogin").innerHTML = "Você entrou"
  }
}
