import React, { useState } from 'react';

export const Hours = () => {

    const [startTime, setStartTime ] = useState('');
    const [endTime, setEndTime ] = useState('');
    const [hourly, setHourly] = useState('');

    console.log(startTime);
    console.log(endTime);
    console.log(hourly);    

    const calculate = () => {
       const x = +startTime.search(":")
       const sHour = +startTime.slice(0,x)
       const sHourToMin = +sHour*60;
       const sMin = +startTime.slice(x+1)
       const start = sHourToMin+sMin;
       //console.log(start);

       const y = +endTime.search(":")
       const eHour = +endTime.slice(0,y)
       const eHourToMin = +eHour*60;
       const eMin = +endTime.slice(y+1)
       const end = eHourToMin+eMin;
       //console.log(end);

       const minsWorked = end - start
       const hoursWorked = minsWorked/60;
       //console.log(hoursWorked);

       const posHoursWorked = hoursWorked < 0 ? hoursWorked+24 : hoursWorked;
       
       const pay = posHoursWorked*(+hourly);
       return pay;

    };
    const answer = calculate();

    return (
        
       <>
       <span><h1>Wage Calculator</h1></span>
            <form onSubmit={calculate} className='calcdiv'>
                <label htmlFor="startTime">Start Time:</label>
                <input 
                    type="time" 
                    name="startTime" 
                    id="startTime" 
                    onChange={ (e) => setStartTime(e.target.value)}
                />
                <br />
        
                <label htmlFor="endTime">End Time:</label>
                
                <input 
                    type="time" 
                    name="endTime" 
                    id="endTime" 
                    onChange={ (e) => setEndTime(e.target.value)}
                />
                <br />
                <label htmlFor="hourly">Hourly:</label>
                
                <input 
                    type="number" 
                    name="hourly" 
                    id="hourly" 
                    onChange={ (e) => setHourly(e.target.value)}
                />
                <br />
            <div className='answdiv'>
                pay: {answer} $, please
            </div>
                <button type="submit"> reset </button>
            </form>
       </>
    )
}
