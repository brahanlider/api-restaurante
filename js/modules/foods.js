const foods = () => {
  const renderFoods = (data) => {
    const foodsFoods = document.getElementById("foodsFoods");

    data.forEach((element) => {
      // const { id, name, description, urlImagen, urlRecipes } = element;
      const { id, name, urlImage, description, urlRecipe } = element;

      foodsFoods.innerHTML += `
      <div class="col-md-4" key=${id}>
      <div class="card bg-dark border border-2 border-light border-opacity-25 h-100 mx-auto text-white"
        style="width: min(100%, 18rem);">
        <div class="card-header text-center">
          ${name}
        </div>
        <div class="card-body">
          <img src="${urlImage}" class="card-img-top" alt="Anime 1" width="256" height="144"
            style="width: 100%; height: 192px; object-fit: cover; border-radius: 0.5rem">
          <h5 class="card-title mt-2">${name}</h5>
          <p class="card-text">${description}</p>
        </div>
        <div class="card-footer text-center">
          <a href="${urlRecipe}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Receta</a>
        </div>
      </div>
    </div>
      `;
    });
  };

  const fetchRead = async () => {
    const response = await fetch("https://brahanlider.github.io/api-restaurante/api/data.json");
    const data = await response.json();
    renderFoods(data);//llama los =>(data.json)
    // console.log(data);
  };
  fetchRead();
};

export default foods;
