const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

let bandNumber = 1;

const takeNumber = function (bandName) {

    const bandString =`<h3>${bandNumber}.${bandName}<h3>`
    bandNumber++


  printToDom(bandString, 'bandList');
};

takeNumber("Galactic Scum");
takeNumber("Underdogs");
takeNumber("Coldplay");







//

//let bandNumber = 1;

//const takeNumber = function () {



//  printToDom(bandNumber, );
//}

//takeNumber("Galactic Scum")
//takeNumber("Underdogs")



//const printToDom = (stringToPrint, divId) => {
//    const selectedDiv = document.getElementById(divId);
//    selectedDiv.innerHTML += stringToPrint;
//};

//