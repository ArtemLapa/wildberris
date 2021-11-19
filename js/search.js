const search = function () {
  const input = document.querySelector(".search-block > input"),
    searchBtn = document.querySelector(".search-block > button");
  

  let inputValue = ""

  input.addEventListener("input", (e) => {
    inputValue = e.target.value;
  });
  
  searchBtn.addEventListener("click", () => {
    console.log(inputValue)
  });
};

search();