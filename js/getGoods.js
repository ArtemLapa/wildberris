const getGoods = () => {
  const links = document.querySelectorAll(".navigation-link")

  const getData = () => {
    fetch("https://wildberri-db-default-rtdb.firebaseio.com/widlberri-db.json")
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("allGoods", JSON.stringify(data))
        console.log(data)
      })
  };

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      getData();
    })
  });

  localStorage.setItem("goods", JSON.stringify({ name: "all" }));

  const goods = JSON.parse(localStorage.getItem("goods"));
  console.log(goods)

  localStorage.removeItem("goods")

  console.log(localStorage.getItem("goods"))
}

getGoods();