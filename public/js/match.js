const matchBtns = document.querySelectorAll(".matchBox__toggle");

const handleListShow = (e) => {
  const list = e.target.parentElement.querySelector(".searchList");
  const listDisplay = list.className;
  console.log(listDisplay);
  if (listDisplay == "searchList hide") {
    list.classList.add("show");
    list.classList.remove("hide");
  } else if (listDisplay == "searchList show") {
    list.classList.add("hide");
    list.classList.remove("show");
  }
};
for (let i = 0; i < matchBtns.length; i++) {
  console.log(i);
  matchBtns[i].addEventListener("click", handleListShow);
}
