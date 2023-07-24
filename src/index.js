let count = 1;
function createNodes() {
  for (let i = 0; i < 20; i++) {
    var list = document.getElementById("app");
    var data = document.createElement("div");
    data.innerText = "test" + count;
    count++;
    data.classList.add("a1");
    list.appendChild(data);
  }
}

createNodes();

document.addEventListener("scroll", () => {
  const { scrollTop, clientHeight, scrollHeight } = document.getElementById(
    "app"
  );
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    createNodes();
  }
});
