
const apiKey = "697eaef5124fb614cce441b396ba869f";

document.getElementById("btn").addEventListener("click", ()=> {
    const city = document.getElementById("city").value.trim();

    if(city === ""){
        showResult("please enter a city name .............");
        return;
    }
    getweather(city);
})

async function getweather(city){

    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const response = await fetch(url);
        if(!response.ok){
            showResult("city not found...");
            return;
        }

        const data = await response.json();
        // Convert from Kelvin → Celsius
    const tempC = (data.main.temp - 273.15).toFixed(2);

    showResult(
        `City : ${data.name}<br>
        temperature : ${tempC}°C <br>
        weather : ${data.weather[0].description}`
    );


    } catch(error){
        showResult("Something Wrong ");
    }

    function showResult(message){
        document.getElementById("result").innerHTML = message;
    }
}