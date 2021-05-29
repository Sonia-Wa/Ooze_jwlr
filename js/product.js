const urlParams = new URLSearchParams(window.location.search);
//in the URL grab ID and store it's value in id
const id = urlParams.get("id");

const url = "https://kea21s2-040e.restdb.io/rest/ooze-database?id=" +
id;

const key = {
    headers: {
      "x-apikey": "606d5f59f55350043100750e	",
    },
  };



fetch (url, key) 
    .then(function (res) {
        return res.json();
    })
    .then(function (data){
        prodView(data);
    });

    function prodView(data) {
        data.forEach(showProduct);
    }


    function showProduct(jewelry) {
        //template
        const template = document.querySelector("#prodview").content;

        //clone
        const copy = template.cloneNode(true);

        //content change
        copy.querySelector("img").src = jewelry.image;

        copy.querySelector(".piece-name").textContent = jewelry.name;

        copy.querySelector(".piece-price").textContent = `${jewelry.price} PLN`;

        copy.querySelector(".piece-desc").textContent = jewelry.description;

        copy.querySelector(".piece-mat").textContent = jewelry.material;

        copy.querySelector(".piece-dim").textContent = jewelry.dimentions;

        //grab parent
        const parent = document.querySelector(".product_inf");
        //append child
        parent.appendChild(copy);

    }