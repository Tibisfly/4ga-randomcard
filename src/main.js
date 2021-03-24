require('./style.css')
//1. Un array con [heart, spade, c, di...]
//2. Variable número para hacer mathfloor.mathrandom 1-12
//3. Coger el elemento carta (dom) document.getElementById ("")
//4. Coger el documento dentro del elemento carta document.querySelector("")
//5. Añadir la variable numero al HTML (dom) .innerHTML
//6. Variable para la ecuación aleatoria de los símbolos 
//7. Añado a mi HTML el atributo que me da el paso 6. (una nueva class) al div carta (el mas grande) ya que before and after se encargaran de colocarlo.
function main(){
    document.getElementById("elboton").addEventListener("click" , changeCard)
}
function changeCard(){
    let poker = ["heart", "spades", "blackclub", "diamond"];
    let card = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let numberRandom = Math.floor(Math.random()* card.length);
        console.log(card[numberRandom]);

    let elementCard = document.querySelector(".theCard");
    let elementNumber = document.querySelector(".theNumber");
    elementNumber.innerHTML = card[numberRandom];
    
    let randomPoker =  poker[Math.floor(Math.random() * poker.length)];
    elementCard.className = "theCard";
    elementCard.classList.add(randomPoker);
}

window.addEventListener("load" , () => main());


    


