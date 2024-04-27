const searchForm = document.querySelector(".search_form");

const searchHandle = (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll(".search_box");
  if (!inputs[1].value) {
    window.location.href = `/searchteam??name=${inputs[0]}`;
  }
};

searchForm.addEventListener("submit", searchHandle);
