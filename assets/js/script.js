async function getJoke() {

    const selectList = document.querySelector("#categories");
    let selectCategorie = selectList.options[selectList.selectedIndex].value;


    const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${selectCategorie}`);
    const data = await response.json();
    document.querySelector("#p-jokes").innerText = data.value;
}

const getBtnJoke = document.querySelector("#get-joke");

getBtnJoke.addEventListener("click", getJoke);

/* https://api.chucknorris.io/jokes/random?category={category} 

 "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel"

*/