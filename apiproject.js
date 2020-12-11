const baseURL = "https://picsum.photos/v2/list";

const section = document.querySelector("#photos");

fetch(baseURL)
    .then((result) => {
        return result.json();
    })
    .then(function (json) {
        console.log(json);
        displayResults(json);
    });


function displayResults(json) {
    //console.log(json);
    json.forEach((element) => {
//create our elements
        let photodiv=document.createElement("div");
        let photoimg=document.createElement("img");

        //give our elements class names
        photodiv.setAttribute("class", "imagediv");
        photoimg.setAttribute("class", "photoimage");

        //set image source to object url
        photoimg.src = element.download_url;

        section.appendChild(photodiv);
        photodiv.appendChild(photoimg);

    });




}

