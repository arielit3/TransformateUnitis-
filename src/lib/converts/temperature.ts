export type TemperatureUnit = 'C' | 'F' | 'K';
//creamos una variable global para definiir las
//unidades de temperatura

export function convertTemperature(
    value: number, //el valor que queremos convertir
    from: TemperatureUnit, //la unidad de origen
    to: TemperatureUnit //la unidad de destino
): number {
//Esto nos indica que la unidad que recibe la funcion recibe un valor
// numerico y devuelve otro valor numerico*/
    if (from === to) return value;
    //si la unidad origen y destino es igual, entonces el 
    //valor es el mismo
    let celsius: number;
    //definimos que celsius es igual al valor que 
    // queremos convertir*/
    if (from === 'F') {
        //si la unidad de origen es farenheit
        celsius = (value - 32) * (5 / 9);
        //celsius es igual al valor menos 32 por 5 ente 9
    } else if (from === 'K') {
        //pero si la unidad es Kelvin
        celsius = value - 273.15;
        //celsius es igual a el valor menos 273
    } else {
        celsius = value;
        //si la unidad es igual a celsius, entonces
        //celsius es igual al valor
    }

    //Luego de convertir el valor de origen, ahora 
    // pasamos a convertirlo a valor de destino*/
    if (to === 'F') {
        //si el destino es farenheit
        return celsius * (9 / 5) + 32;
        //regresa celsius por 9 entre 5 mas 32
    } else if (to === 'K') {
        //si el destino es kelvin, regresa celsius mas 273
        return celsius + 273.15;
    } else {
        //si el destino no es ninguno de los anteriores
        //entonces se regresa celsius
        return celsius;
    }
}
