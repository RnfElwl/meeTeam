const logout = document.querySelector(".logout");

const a = async () => {
  const b = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/10.6.1/data/en_US/profileicon.json"
  );
  console.log(b);
  return;
};

const handleLogout = async () => {
  await fetch("user/logout", {
    method: "POST",
  });
  return window.location.reload(true);
};

logout.addEventListener("click", handleLogout);
