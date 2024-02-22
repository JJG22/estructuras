let tipoCliente = "Normal";
if(tipoCliente == "Normal"){

    console.log (`Va a ser atendido en el modulo 1, por ser cliente
${tipoCliente}`);
}else if (tipoCliente == "Preferencial"){
    console.log("Estan habilitados los modulos 2 y 3 para su atencion")
}else{
    console.log("Usted no es cliente del banco, dirijase al modulo 4");
}