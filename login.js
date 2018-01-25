/*var input = document.querySelector('.menu');
input.addEventListener('click', open)
function open() {
    document.querySelector('.dropdown').classList.toggle('dropdown--visible');
}
*/

var input = document.querySelector('.menu');
var country = ['America', 'Austriya', 'Russia', 'Ukraine', 'Italy'];
var results;


function autocomplete(value) {
    var country_return = [];
    var lowerCase;

    for (var i = 0; i < country.length; i++) {
        lowerCase = country[i].toLowerCase();
        if (lowerCase.includes(value.toLowerCase())) {
            country_return.push(country[i]);
        }
    }
    return country_return;
}

input.onkeyup = function (e) {
    var inputVal = this.value;

    if (inputVal.length > 0) {
        var countryShow = [];

        countryAutoComplete = document.getElementById("countryAutoComplete");
        countryAutoComplete.innerHTML = '';
        countryShow = autocomplete(inputVal);

        for (i = 0; i < countryShow.length; i++) {
            var listElement = document.createElement('li');
            listElement.innerHTML = countryShow[i];
            listElement.className = "listElement";
            countryAutoComplete.appendChild(listElement);
        }
        countryAutoComplete.style.display = 'block';
    } else {
        countryShow = [];
        countryAutoComplete.innerHTML = '';
    }
    selectItem();
}

function selectItem() {
    var items = document.getElementsByClassName('listElement');
    if (items.length > 0) {
        for (i = 0; i < items.length; i++) {
            items[i].addEventListener('click', changeInputValue.bind(null, items[i].innerHTML));
        }
    }
}

function changeInputValue(value) {
    input.value = value;
    countryAutoComplete.style.display = 'none';
}