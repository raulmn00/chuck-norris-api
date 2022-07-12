async function getJoke() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    document.querySelector("#p-jokes").innerText = data.value;
}

const getBtnJoke = document.querySelector("#get-joke");

getBtnJoke.addEventListener("click", getJoke);