import React from "react";
import {useState} from "react";


function UserPage(){

    const [County, setcounty] = useState('');
    const [datetime, setdate] = useState('');
    const [temp, setTemp] = useState('');
    const [humidity, setHum] = useState('');
    const [day30, setday30] = useState('');
    const [day60, setday60] = useState('');
    const [day90, setday90] = useState('');

    const handleCountyChange = event => {
        setcounty(event.target.value);
    };

    const handleDateChange = event => {
        setdate(event.target.value);
      };

    const handleTempChange = event => {
        setTemp(event.target.value);
      };

    const handleHumChange = event => {
        setHum(event.target.value);
      };
    
    const handle30Change = event => {
        setday30(event.target.value);
      };
    
    const handle60Change = event => {
        setday60(event.target.value);
      };
    const handle90Change = event => {
        setday90(event.target.value);
      };

    function handleSubmit(e){
        console.log("you click the button");

        const UserData = {
            "County": County,
            "datetime": datetime.substring(2,10),
            "temp": temp,
            "humidity": humidity,
            "30-day avg prec": day30,
            "60-day avg prec": day60,
            "90-day avg prec": day90
        }

        const UserDataJson = JSON.stringify(UserData);
        console.log(UserDataJson)

        fetch('https://9rpmw4nf9e.execute-api.us-west-2.amazonaws.com/postWeather_Data', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: UserDataJson
            
        }).then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }
        // JSON.stringify({
            // firstParam: 'yourValue',
            // secondParam: 'yourOtherValue',
            // })

    return (
        <div>
            <h1>Hi this is a wildfire prediction</h1>

            <label>County: </label>
            <input 
                type="text" 
                id ="County" 
                name ="County" 
                onChange={handleCountyChange}
                value={County}
                placeholder="Enter County">
            </input>
            <br></br>

            <label>Date: </label>
            <input 
                type="date" 
                name="datetime"
                onChange={handleDateChange}
                value={datetime}
            ></input>
            <br></br>

            <label>Temp: </label>
            <input 
                type="float" 
                name="temp" 
                onChange={handleTempChange}
                value={temp}
                placeholder="Enter Temp in Celius">
            </input>
            <br></br>

            <label>Hum: </label>
            <input 
                type="float" 
                name="Hum" 
                onChange={handleHumChange}
                value={humidity}
                placeholder="Enter Hum in %">
            </input>
            <br></br>

            <label>30-day avg prec: </label>
            <input 
                type="float" 
                name="30-day avg prec" 
                onChange={handle30Change}
                value={day30}
                placeholder="Enter 30-day avg precipitation in inches">
            </input>
            <br></br>

            <label>60-day avg prec: </label>
            <input 
                type="float" 
                name="60-day avg prec" 
                onChange={handle60Change}
                value={day60}
                placeholder="Enter 60-day avg precipitation in inches">
            </input>
            <br></br>

            <label>90-day avg prec: </label>
            <input 
                type="float" 
                name="90-day avg prec" 
                onChange={handle90Change}
                value={day90}
                placeholder="Enter 90-day avg precipitation in inches">
            </input>
            <br></br>

            <button type="button" name= "submit" onClick={handleSubmit}>Sumbit</button>
        </div>
    );
}

export default UserPage;