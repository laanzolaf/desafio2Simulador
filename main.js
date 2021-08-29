
let entradaNombre = prompt("Ingresa tu nombre: ");
let entradaEdad = parseInt(prompt("Ingresa tu edad: "));
let bebidaEscogida = " ";

if(entradaEdad < 18){
    alert("Lo siento " + entradaNombre +" pero no puedes interactuar en la página, porque eres menor de edad.")
} else {
    alert("¡Te doy la bienvenida " + entradaNombre +"! Aquí encontrarás todo sobre tus bebidas favoritas.")
    
    
    while(bebidaEscogida!=""){
        bebidaEscogida = prompt("Escribe la bebida de la que quieres saber: vino, cerveza o vodka");
        switch(bebidaEscogida.toLowerCase()){
            case "vino":
                alert("El vino  es una bebida obtenida de la uva mediante la fermentación alcohólica de su mosto o zumo");
                console.log("El usuario " + entradaNombre + " cosultó sobre vinos.")
                bebidaEscogida = "";
                break
            case "cerveza":
                alert("La cerveza es una bebida alcohólica, no destilada, de sabor amargo, que se fabrica con granos de cebada germinados u otros cereales cuyo almidón se fermenta en agua con levadura y se aromatiza a menudo con lúpulo, entre otras plantas.");
                console.log("El usuario " + entradaNombre + " cosultó sobre cervezas.")
                bebidaEscogida = "";
                break
            case "vodka":
                alert("es una bebida destilada. Se discute el origen de la misma aunque el nombre actual es ruso. Se produce generalmente a través de la fermentación de granos y otras plantas ricas en almidón, como el centeno, trigo, patata o remolacha.");
                console.log("El usuario " + entradaNombre + " cosultó sobre vodkas.")
                bebidaEscogida = "";
                break

        }
    }
}






