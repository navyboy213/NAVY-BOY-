const darkmodebtn = Document.get;
ElementByid("dark-mode");
const lightmodeBtn = Document.get;
ElementByid("ligth-mode");

darkmodebtn.addEve;
ntlistener("click", () => {
  document.body.classList.add("dark-mode");
});
lightmodeBtn.addEve;
ntlistener("click", () => {
  document.body.classList.remove("dark-mode");
});
