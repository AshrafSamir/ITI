let installation;
let addBtn = document.getElementById("btn");
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  installation = e;
});

addBtn.addEventListener("click", (e) => {
  installation.prompt();
  installation.userChoice.then((choiceResult) => {
    installation = null;
  });
});
