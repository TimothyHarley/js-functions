const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

function TimAssistant (rubberDuck) {
    printToDom(`<h2>This is the function output.  It is dependant on the ${rubberDuck}</h2>`, 'what');
    return `this the function output.  It is dependant on the ${rubberDuck}`;
};

TimAssistant ('green owl');

//console.log (TimAssistant('green owl'))

TimAssistant('beautiful wife')

TimAssistant('creativity of Tim, his wife, and the green owl')