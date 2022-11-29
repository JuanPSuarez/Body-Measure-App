class Medidas {
    constructor(Hombro, Cintura, Cadera, Altura) {
        this.Hombro = Hombro;
        this.Cintura = Cintura;
        this.Cadera = Cadera;
        this.Altura = Altura;
    }
}



function darkModeButton() {
    var divDarkMode = document.getElementsByTagName("div")[0];
    var bodyDarkMode = document.getElementsByTagName("body")[0];
    divDarkMode.classList.toggle("dark-mode");
    bodyDarkMode.classList.toggle("dark-mode");

    var buttonDarkMode = document.getElementsByTagName("button")[0];
    if (buttonDarkMode.textContent == "🌚") buttonDarkMode.textContent = "🌝";
    else buttonDarkMode.textContent = "🌚";

    if (buttonDarkMode.textContent == "🌚") document.getElementById("silhouette-img").src = "/resources/SilhouetteDark.png";
    else document.getElementById("silhouette-img").src =
        "/resources/SilhouetteLight.png";


    //  document.getElementById("silhouette-img").src =
    //     "/resources/SilhouetteLight.png";
    // else document.getElementById("silhouette-img").src =
    //     "/resources/SilhouetteDark.png";




    // if (silhouetteImg.src == "/resources/SilhouetteDark.png") silhouetteImg = "/resources/SilhouetteLight.png";
    // else silhouetteImg = "/resources/SilhouetteDark.png";

}


// document.addEventListener("DOMContentLoaded", function() {
// document.getElementsByTagName("button")[0].textContent = "dark-mode";




const HombrosIn = document.getElementById("HombrosInput");
const CinturaIn = document.getElementById("CinturaInput");
const CaderaIn = document.getElementById("CaderaInput");
const AlturaIn = document.getElementById("AlturaInput");
const gButton = document.getElementById("gButton");
const out1 = document.getElementById("1");
const out2 = document.getElementById("2");
const out3 = document.getElementById("3");
const out4 = document.getElementById("4");

// const switchButton = document.getElementById("Switch");


//! TODO: Functional darkmode

// switchButton.onclick = document.getElementsByTagName("body")[0];
// element.classlist.toggle("dark-mode");

gButton.onclick = function changeContent() {
    const medidasPersona = new Medidas(
        HombrosIn.value,
        CinturaIn.value,
        CaderaIn.value,
        AlturaIn.value
    );

    //! TODO: Generar el texto debajo de los sliders ✅

    out1.textContent = "Hombros: " + medidasPersona.Hombro + "cm";
    out2.textContent = "Cintura: " + medidasPersona.Cintura + "cm";
    out3.textContent = "Cadera: " + medidasPersona.Cadera + "cm";
    out4.textContent = "Altura: " + medidasPersona.Altura + "cm";

    // console.log(outputM)

    // console.log(medidasPersona)

    gButton.textContent = "Generated!";
    gButton.style = "Color: green";

    setTimeout(() => {
        gButton.textContent = "Generate";
        gButton.style = "Color: default";
    }, "5000");
};
// });