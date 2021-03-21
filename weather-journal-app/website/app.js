/* Global Variables */
let baseURLz = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let baseURLa = '&appid=';
const apiKey = '';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const zipcode = document.getElementById('zip').value;
const ures = document.getElementById('feelings').value;


getWeather(baseURLz, zipcode, baseURLa, apiKey)
.then(function(data){
    console.log(data);
    postData('/all', {temp: data.main.temp, date: newDate, ures: ures});
})
.then(
    updateUI
)
}
const getWeather = async (baseURLz, zipcode, baseURLa, apikey)=>{

  const res = await fetch(baseURLz+zipcode+baseURLa+apikey+'&units = imperial')
  try {
    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}
const postData = async ( url = '', data = {})=>{

    const res = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await res.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};
    const updateUI = async () => {
    const req = await fetch('/all');
    try{
      const allData = await req.json();
      document.getElementById('date').innerHTML = 'Date: '+allData.date;
      document.getElementById('temp').innerHTML = 'Temperature: '+allData.temp+'°F';
      document.getElementById('content').innerHTML = 'Feelings: '+allData.ures;
  
    }catch(error){
      console.log("error", error);
    }
}
