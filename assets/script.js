//add the class of valid and invalid values

const form = document.querySelector('#form');

/*prevents page refresh on click and execute the function created below*/
/*get input values too*/
form.addEventListener('submit', function (e) {
    e.preventDefault();

    //input data capture
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    /*take the value and convert it into a number*/
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    /*checks if the value is real and returns to the user if not*/
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso,altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC É ${imc} e voce esta com ${nivelImc}.`;

    setResultado(msg, true);
})

/*Sets the imc level based on the imc function*/
function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc > 39.9){
        return nivel[5]
    } 
    
    if(imc > 34.9){
        return nivel[4]
    }
    
    if(imc > 29.9){
        return nivel[3]
    }
    
    if(imc > 24.9){
        return nivel[2]
    }
    
    if(imc > 18.5){
        return nivel[1]
    }
    
    if (imc < 18.5) {
        return nivel[0]
    }
}


/*calculate the imc*/
function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

/*here is created the paragraph inside the div for the result*/
function criaP() {
    const p = document.createElement('p');
    return p;
}

/*selects the #result div and prints in it the value preselected by the other function ^*/
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criaP();

    /*add the class of valid and invalid values*/
    if (isValid) {
        p.classList.add('valid');
    } else {
        p.classList.add('invalid');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}