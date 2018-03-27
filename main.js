function printToDom(domString,divId)
{
    document.getElementById(divId).innerHTML= domString;
}

function buildDomDtring(animals)
{
    let domString = "";
    animals.forEach(animal => {
        domString += `<div class="animal">`;
        domString += `<h1> ${animal.name}</h1>`;
        domString += `<h3> ${animal.number}</h3>`;
        domString += `<img class= "animal-image"src="${animal.imageUrl}">`;
        domString += `<div class="button-container">`;
        domString +=`<button>Escape</button>`;
        domString += `</div>`;
        domString += `</div>`;
        
    });
    printToDom(domString,"animal-cards");

}

function executeThisCodeAfterFileLoaded()
{
    const data = JSON.parse(this.responseText);
    buildDomDtring(data.animals);

}

function executeThisCodeIfXHRFails() 
{
    console.log("something went wrong")

}



function startApplication()
{
    let myrequest = new XMLHttpRequest();
    myrequest.addEventListener("load",executeThisCodeAfterFileLoaded);
    myrequest.addEventListener("error",executeThisCodeIfXHRFails);
    myrequest.open("GET","animal.json");
    myrequest.send(myrequest);
}
startApplication();