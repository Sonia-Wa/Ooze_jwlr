const url = "https://kea21s2-040e.restdb.io/rest/ooze-database";

const key = {
    headers: {
      "x-apikey": "606d5f59f55350043100750e	",
    },
  };



fetch (url, key) 
    .then(function (res) {
        console.log(res);
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
        const template = document.querySelector("#prodview-temp").content;

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
        const parent = document.querySelector("main");
        //append child
        parent.appendChild(copy);

    }