<script lang="ts">
    import { convertTemperature, type TemperatureUnit } from '$lib/converts/temperature';
    //importamos tanto funcion como el tipoo de dato

    let inputValue:  number = 0;
    let fromUnit: TemperatureUnit = 'C';
    let toUnit: TemperatureUnit = 'F';
    let result: number = 0;
    //creamos las variables que usaremos 
    
    $:result = convertTemperature(inputValue, fromUnit, toUnit);
    //funcion que usaremos para actualizar el resultado 
    // cada vez que cambien los datos asi se actualizara 
    // continuamente*/
</script>

<div class="p-4 max-w-md mx-auto bg-white rounded shadow">
    <h2 class="text-xl font-bold mb-4">Convertidor de temperaturas</h2>

    <input 
        type="number"
        bind:value={inputValue}
        class="border p-2 w-full mb-4"
        placeholder="Ingrese la temperatura"
    >

    <div class="flex gap-4 mb-4">
        <select bind:value={fromUnit} class="border p-2 w-full">
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
            <option value="K">Kelvin (K)</option>
        </select>
    </div>

</div>