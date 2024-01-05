const mode = document.getElementById("mode-icon");

mode.addEventListener("click", () => {
  const form = document.getElementById("login-form");

  if (mode.classList.contains("fa-moon")) {
    // Caiu em 'fa-moon', executa isso. Repare que as classe 'fa-sun' não precisa existir no HTML e nem no CSS.
    mode.classList.remove("fa-moon");
    mode.classList.add("fa-sun");
    form.classList.add("dark");
    return;
  }

  mode.classList.remove("fa-sun");
  mode.classList.add("fa-moon");

  form.classList.remove("dark"); // Removendo a classe dark automaticamente já volta pro light
});
