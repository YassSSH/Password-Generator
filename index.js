const lowerchar = "azertyuiopqsdfghjklmwxcvbn";
const upperchar = lowerchar.toUpperCase();
const numberchar = "0123456789";
const specialchar = "&é\"'(-è_çà)@]^";
let mdp = "";
const lengthvalue = document.querySelector("#password-length")
const result = document.querySelector(".result")


console.log(lengthvalue.value);

const generer = document.querySelector("#generateButton");
function generermdp(){
    let data = [];

    if(document.querySelector("#lowercase").checked) data.push(...lowerchar);
    if(document.querySelector("#uppercase").checked) data.push(...upperchar);
    if(document.querySelector("#numbers").checked) data.push(...numberchar);
    if(document.querySelector("#symbols").checked) data.push(...specialchar);

    if(data.length ===0){
        alert("Veuillez sélectionner un critère avant de generer");
    }
    for (i = 0 ; i < lengthvalue.value; i++){
    var preresult = data[Math.floor(Math.random() * data.length)]
    mdp += preresult;
    }

    result.innerHTML = mdp;


    
    
};
generer.addEventListener('click', generermdp )