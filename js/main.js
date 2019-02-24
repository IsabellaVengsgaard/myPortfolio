"use strict";

/*****mobile menu*****/

function openSlideMenu() {
    console.log('open menu plz');
    document.getElementById('menumobile').style.width = '250px';
    document.getElementById('contentmobile').style.marginLeft = '250px';
}

function closeSlideMenu() {
    console.log('close menu plz');
    document.getElementById('menumobile').style.width = '0';
    document.getElementById('contentmobile').style.marginLeft = '0';
}

fetch('json/data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
        appendWorks(json);
    });

function appendWorks(works) {
    let htmlTemplate = "";
    for (let work of works) {
        console.log(works);
        htmlTemplate += `<div>
            <img src="img/${work.img}"></div>`;
    }

    document.querySelector('#projekter').innerHTML = htmlTemplate;
}
