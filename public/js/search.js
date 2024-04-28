const searchForm = document.querySelector(".search_form");

const searchHandle = (e) => {
  e.preventDefault();

  const inputs = document.querySelectorAll(".search_box input");

  console.log(inputs[1].value);
  if (!inputs[1].value) {
    window.location.href = `/teamSearch?name=${inputs[0].value}`;
  } else if (inputs[1].value) {
    window.location.href = `/teamSearch?name=${inputs[1].value}`;
  }
};

searchForm.addEventListener("submit", searchHandle);
