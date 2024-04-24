const matchBtns = document.querySelector(".matchBox__toggle");

const handleListShow = (e) => {
  const list = e.target.parentElement.querySelector(".searchList");
  const listDisplay = list.style.display;
  if (listDisplay == "none") {
    list.style.display = "grid";
  } else {
    list.style.display = "none";
  }
};

matchBtns.addEventListener("click", handleListShow);
