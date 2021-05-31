const urlParams = new URLSearchParams(window.location.search);

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
        allProducts(data);
    });

    function allProducts(data) {
        data.forEach(showProducts);
    }

    function showProducts(jewelry) {
        //template
        const template = document.querySelector("#prod-temp").content;

        //clone
        const copy = template.cloneNode(true);

        //content change
        copy.querySelector(".prodview-link").href =  `product.html?id=${jewelry._id}`;

        copy.querySelector("img").src = jewelry.image;

        copy.querySelector(".piece-name").textContent = jewelry.name;

        copy.querySelector(".piece-price").textContent = `${jewelry.price} PLN`;

        //grab parent
        const parent = document.querySelector("main");
        //append child
        parent.appendChild(copy);

    }

