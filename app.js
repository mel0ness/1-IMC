const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

let Poids = null;
let Taille = null;
let Resultat = null;
let TailleM = null;

const InputTaille = document.getElementById("taille");
const InputPoids = document.getElementById("poids");

InputTaille.addEventListener("change", () => {
  Taille = InputTaille.value;
  TailleM = InputTaille.value / 100;
})
InputPoids.addEventListener("change", () => {
  Poids = InputPoids.value;
})

const Calcul = document.getElementById("calcul");
const Result = document.getElementById("result");
const Comment = document.getElementById("comment");
const Error = document.getElementById("error");

Calcul.addEventListener("click", (e) => {
  e.preventDefault(); 
  if(Poids === null) {
Error.classList.add("error")
Error.textContent = "Veuillez renseigner votre Poids!"
Result.textContent = 0;
Comment.style.color = "black";
Comment.textContent = "En attente du résultat...";  
  }
  else if(Taille === null) {
    Error.classList.add("error")
Error.textContent = "Veuillez renseigner votre Taille!"
Result.textContent = 0;
Comment.style.color = "black";
Comment.textContent = "En attente du résultat..."; 
  }
  else if(Taille <= 0 || Poids <= 0) {
    Error.classList.add("error")
Error.textContent = "Les informations indiquées sont erronées."
Result.textContent = 0;
Comment.style.color = "black";
Comment.textContent = "En attente du résultat..."; 
  }
  else if(Taille > 0 && Poids > 0) {
    Error.classList.remove("error")
    Error.textContent = ""
    Resultat = ((Poids / (TailleM * TailleM)).toFixed(1))
    Result.textContent = Resultat;

    if(BMIData[0].range[0] < Resultat && Resultat <= BMIData[0].range[1]) {
      Comment.style.color = BMIData[0].color;
      Comment.textContent = BMIData[0].name;  
    }
    else if(BMIData[1].range[0] < Resultat && Resultat <= BMIData[1].range[1]) {
      Comment.style.color = BMIData[1].color;
      Comment.textContent = BMIData[1].name; 
    }
    else if(BMIData[2].range[0] < Resultat && Resultat <= BMIData[2].range[1]) {
      Comment.style.color = BMIData[2].color;
      Comment.textContent = BMIData[2].name;  
    }
    else if(BMIData[3].range[0] < Resultat && Resultat <= BMIData[3].range[1]) {
      Comment.style.color = BMIData[3].color;
      Comment.textContent = BMIData[3].name;  
    }
    else if(BMIData[4].range[0] < Resultat && Resultat <= BMIData[4].range[1]) {
      Comment.style.color = BMIData[4].color;
      Comment.textContent = BMIData[4].name;  
    }
    else if(BMIData[5].range < Resultat) {
      Comment.style.color = BMIData[5].color;
      Comment.textContent = BMIData[5].name;  
    }
  }
})