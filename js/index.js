const search = document.getElementById("search");
const filteredList = document.getElementById("filteredList");

const URL = "js/baby.json";

const app = async (URL) => {
  const response = await fetch(URL);
  const data = await response.json();

  search.addEventListener("input", function (event) {
    let results = data.names.filter((name) =>
      name.toLowerCase().startsWith(search.value.toLowerCase())
    );

    if (search.value === "") {
      results = [];
    }

    const resDOM = results.map(
      (result) => `
        <div class="container mt-3 text-center">
          <p class="font-weight-bold">${result}</p>
        </div>
        <hr>
      `
    );

    filteredList.innerHTML = resDOM.join("");
  });
};

app(URL);
