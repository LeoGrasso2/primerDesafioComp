let cant=prompt('Ingrese la cantidad de alumnos del curso');
Number.parseInt(cant, 10);

for(let i=0; i<cant; i++){
    
    let nombre= prompt('Ingrese el nombre del alumno');
    let nota= prompt('Ingrese su nota.');
    Number.parseInt(nota, 10);
    if(nota>10 || nota<1){
        alert('Ingrese un numero no mayor a 10.')
        i--;
    }
    else if(nota>=7){
    alert("Felicidades para " +nombre + ', aprobó con ' + nota);
    }
    else if(nota<7){
    alert('Lamentablemente, ' + nombre + ' desaprobó con ' + nota);
    }
    
}
