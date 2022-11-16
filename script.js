class Medidas {
    constructor(Hombro, Cintura, Cadera, Altura) {
        this.Hombro = Hombro;
        this.Cintura = Cintura;
        this.Cadera = Cadera;
        this.Altura = Altura;
    }
}

document.addEventListener("DOMContentLoaded", function() {

    const gButton = document.getElementById("gButton");
    const HombrosIn = document.getElementById("HombrosInput");
    const CinturaIn = document.getElementById("CinturaInput");
    const CaderaIn = document.getElementById("CaderaInput");
    const AlturaIn = document.getElementById("AlturaInput");

    gButton.onclick = function changeContent() {
        const medidasPersona = new Medidas(
            HombrosIn.value,
            CinturaIn.value,
            CaderaIn.value,
            AlturaIn.value
        )
        console.log(medidasPersona)


        gButton.textContent = "Generated!";
        gButton.style = "Color: green";

        // console.log(HombrosIn.value);
        // console.log(CinturaIn.value);
        // console.log(CaderaIn.value);
        // console.log(AlturaIn.value);
        setTimeout(() => {
            gButton.textContent = "Generate";
            gButton.style = "Color: default";
        }, "5000");
    };
});