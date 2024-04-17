
// Esto agrega a la pantalla el valor del botón de la calculadora que toquen
function agregar(valor){
    document.getElementById('pantalla').value += valor
}

// Esta acción vacia el lector de la calculadora
function borrar(){
    document.getElementById('pantalla').value = ''
}
// Esta acción toma el valor de la pantalla realiza la op matemática y devuelve un resultado
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado   
}