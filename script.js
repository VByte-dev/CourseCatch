// Applying Data
let applyData = (r)=>{
  for (let i in r) {
    let name = r[i].name;
    let category = r[i].category;
    let img = r[i].image;
    let disc =  r[i].description;
    let url =  r[i].url;

    console.log([name, category, img, disc, url]);

    let html = `        
    <div class="card">
    <img src="${img}" alt="" />
    <h1>${name}</h1>
    <p>
      <span style="color: #9000ff;">Discription: </span>${disc.slice(0, 200)}
    </p>
    <span style="color: #9000ff;">Category: </span> ${category}</p>
    <a target="_blank" href="${url}"><button id="catch">Catch</button></a>
  </div>`;
  document.querySelector('.cards').innerHTML += html;
  }
}

// Fetching Data
let fetchD = async (query) => {
  const url =
    `https://udemy-paid-courses-for-free-api.p.rapidapi.com/rapidapi/courses/search?page=1&page_size=10&query=${query}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "d3303e0c2bmshd6010ef281a9967p1aadb3jsna2649f915671",
      "x-rapidapi-host": "udemy-paid-courses-for-free-api.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    let r = result.courses;
    document.querySelector('.cards').innerHTML = "";
    applyData(r);
  } catch (error) {
    console.error(error);
  }
};

let discover = document.querySelector("#discover");
discover.addEventListener("click", () => {
  let query = document.querySelector("#query").value;
  fetchD(query);
});
