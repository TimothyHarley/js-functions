//input = animal ex. fish
//output = animal product ex fish stix

function nuggetizer(animal){
return `${animal} stix`;

};

//console.log ('fish:' nuggetizer('fish'));
//console.log ('cat:' nuggetizer('cat'));
//console.log ('bear:' nuggetizer('bear'));

const nuggetizer2 = (animal) => {
return `${animal} jerky`

};
console.log('deer:', nuggetizer2('deer'));

const nomnom = (person, food) => {
    return `${person} devoured ${food}`
}

const bearSticks = nuggetizer('bear');

console.log(nomnom('tim', bearSticks)); // tim devoured bearsticks
console.log(nomnom('callen', 'crap')); // callen devoured crap
console.log(nomnom('pink','blue')); // pink devoured blue


//function bearsticks (name) {
 //   return `${name} devoured bear`
 //   }


 //function numberAdder that takes in a number and
 //returns the number plus 3.  so input 22=, output =25.


 //function numberAdder(number){
 //    return (number)+3;
 //};
 //console.log numberAdder(5);


 
 const numberAdder = (num) => {
     const finalNumber = num + 3;
     printToDom(`<h2>${finalNumber}<h2>`, 'allTheNumbers');
 };

 
 //this is VERY IMPORTANT 
 const printToDom = (stringToPrint, divId) => {
     const selectedDiv = document.getElementById(divId);
     selectedDiv.innerHTML += stringToPrint;
 };
//that was VERY IMPORTANT


numberAdder(22);
numberAdder(3);
numberAdder(45);



