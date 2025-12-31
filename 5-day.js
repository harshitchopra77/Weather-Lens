cityName.innerHTML= "--"+inputBox.value+"--"


fetch("api.openweathermap.org/data/2.5/forecast?q={city name}&appid=5264d864713fc40d5f86d77f26f60ae5"
    .then(response =>response.json())
    .then(data =>{
        for(i=0;i<5;i++){
        document.querySelector("day" + (i+1)+ "Min").innerHTML = "Min:" + Number(data.list[i].main.temp.temp_min - 273.15).toFixed(1)+"deg";
        }
        for(i=0;i<5;i++){
            document.querySelector("day" + (i+1)+ "Max").innerHTML = "Max:" + Number(data.list[i].main.temp.temp_mix - 273.15).toFixed(1)+"deg";
        }
        for(i=0;i<5;i++){
            document.querySelector("img" + (i+1)).src = "clear sky-icon"+ data_list[i].weather[0].icon+ ".png";
        }
    })
    .catch(err => alert("Invalid location"))
)
    const d = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    function checkDay(day){
        if(day +d.getDay() > 6){
            return day +d.getDay()-7;
        }
        else{
            return day +d.getDay();
        }
    }
    for(i=0;i<5;i++){
        document.querySelector("day"+(i+1)).innerHTML = weekday[CheckDay(i)];
    }
