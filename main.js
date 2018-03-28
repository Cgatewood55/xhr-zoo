function printToDom(domString,divId)
{
    document.getElementById(divId).innerHTML= domString;
}

function buildDomDtring(animals)
{
    let domString = "";
    animals.forEach(animal => {
        if(animal.isCarnivore){
            domString += `<div class="animal carnivore">`;
        } else {
            domString += `<div class = "animal vegetable">`;
        }
        // domString += `<div class="animal">`;
        domString += `<h1> ${animal.name}</h1>`;
        domString += `<h3> ${animal.number}</h3>`;
        domString += `<img class= "animal-image"src="${animal.imageUrl}">`;
        domString += `<div class="button-container">`;
        domString +=`<button class="escaped">Escape</button>`;
        domString += `</div>`;
        domString += `</div>`;
        
    });
    printToDom(domString,"zoo");

};

const addEscapeEventListener = () => {
    const escapedButtons= document.getElementsByClassName('escaped');

    for(let i=0; i<escapedButtons.length;i++){
        escapedButtons[i].addEventListener('click',animalEscaped);
    }
};

const animalEscaped = () => {
    showCarnivores();
    showVegetables();
};
const showCarnivores = () =>{
    const carnivores = document.getElementsByClassName('carnivore');
    for(let j=0; j<carnivores.length;j++){
        carnivores[j].children[3].innerHTML='';
        carnivores[j].classList.add('red');
    }
};
const showVegetables =() =>{
    const vegetables = document.getElementsByClassName('vegetable');
    for(let j=0; j<vegetables.length;j++){
        vegetables[j].children[3].innerHTML='<button>EAT ME!!!</button>';
        vegetables[j].classList.add('green');
    }
};






function executeThisCodeAfterFileLoaded()
{
    const data = JSON.parse(this.responseText);
    buildDomDtring(data.animals);
    addEscapeEventListener();

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
