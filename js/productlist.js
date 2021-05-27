const url = "https://kea21s2-040e.restdb.io/rest/ooze-database";

fetch (url) 
    .then(function (res) {
        return res.json();
    })
    .then(function (data){
        allProducts(data);
    });

    function allProducts(data) {
        data.foreach(showProducts);
    }

    function showProducts(jewelry) {
        //template
        const template = document.querySelector("#prod-temp").content;

        //clone
        const copy = template.cloneNode(true);

        //content change
        copy.querySelector(".img").src = jewelry.main_img;

        copy.querySelector(".piece-name").textContent = jewelry.name;

        copy.querySelector(".piece-price").textContent = `${jewelry.price} PLN`;

        //grab parent
        const parent = document.querySelector("main");
        //append child
        parent.appendChild(copy);

    }

