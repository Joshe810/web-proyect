function operaciones(op) {
    var ops = {
        sumar: function sumarNumeros(n1, n2) {
            return (parseInt(n1) + parseInt(n2));
        },

        restar: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        },
        
        multiplicar: function multiplicarNumeros(n1, n2) {
            return (parseInt(n1) * parseInt(n2));
        },

        dividir: function dividirNumeros(n1, n2) {
            return (parseInt(n1) / parseInt(n2));
        },

        residuo: function residuoNumeros(n1, n2) {
            return (parseInt(n1) % parseInt(n2));
        }
    };

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
    //Comprobamos si se ha introducido números en las cajas
    if (isNaN(parseFloat(document.getElementById('num1').value))) {
        document.getElementById('resultado').innerHTML="Por favor, escriba un número valido";
        document.getElementById("num1").innerText = "0";
        document.getElementById("num1").focus();
        } else if (isNaN(parseFloat(document.getElementById('num2').value))) {
        document.getElementById('resultado').innerHTML="Por favor, escriba un número valido";
        document.getElementById("num2").innerText = "0";
        document.getElementById("num2").focus();
    }

    //Si se han introducido los números en ámbas cajas, operamos:
    else {
        switch(op) {
            case 'sumar':
                var resultado = ops.sumar(num1, num2);
                document.getElementById('resultado').innerHTML= resultado;
                break;
            case 'restar':
                var resultado = ops.restar(num1, num2);
                document.getElementById('resultado').innerHTML= resultado;
                break;
            case 'multiplicar':
                var resultado = ops.multiplicar(num1, num2);
                document.getElementById('resultado').innerHTML= resultado;
                break;
            case 'dividir':
                var resultado = ops.dividir(num1, num2);
                document.getElementById('resultado').innerHTML= resultado;
                break;
            case 'residuo':
                var resultado = ops.residuo(num1, num2);
                document.getElementById('resultado').innerHTML= resultado;
                break;
        }
    }

}