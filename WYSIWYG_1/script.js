const changeStyleBtn = document.getElementsByClassName('change_style_btn');
const editorField = document.getElementById('feld')
var elem;
const changeProperties = (element) => {
    elem = element;
    console.log(elem);
    console.log(elem.dataset.attribute);
    document.execCommand(elem.dataset.attribute, false);
};

//Erster Ansatz
// for (let i = 0; i < changeStyleBtn.length; i++) {
//     if (changeStyleBtn[i] == "bold") {
//         changeStyleBtn.setAttribute("Style", "font-weight: bold;");
//     } else {
//         console.log(element.dataset.attribute);
//     }
// }



for (let i = 0; i < changeStyleBtn.length; i++) {
    changeStyleBtn[i].addEventListener('click', function(){
        changeProperties(this);
    });
}