function onSearch() {
  let request = document.getElementById("searchform").value;
  fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=ubRd9RWAMEfiWz7JoWIKwS8xEcbZxQdJ&q=" +
      request +
      "&limit=5&offset=0&rating=pg&lang=en"
  )
    .then((response) => response.json())
    .then((data) => {
      gifs = "";
      for (let i = 0; i < data.data.length ; i++) {
        gifs += `<img src="${data.data[i].images.fixed_width.url}"/>`;
      }
      document.getElementById("gif").innerHTML = gifs;
    })
    .catch((err) => console.log(err));
}
