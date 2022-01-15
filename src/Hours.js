import React, { useState } from 'react';

export const Hours = () => {

    const [startTime, setStartTime ] = useState('');
    const [endTime, setEndTime ] = useState('');
    const [hourly, setHourly] = useState('');

    console.log(startTime);
    console.log(endTime);
    console.log(hourly);    

    const toStart = () => {
       const x = +startTime.search(":")
       const sHour = +startTime.slice(0,x)
       const sHourToMin = +sHour*60;
       const sMin = +startTime.slice(x+1)
       const start = sHourToMin+sMin;
       console.log(start);
    };


    return (
        
       <>
            <label htmlFor="startTime">Start Time:</label>
            <input 
                type="time" 
                name="startTime" 
                id="startTime" 
                onChange={ (e) => setStartTime(e.target.value)}
            />
    
            <label htmlFor="endTime">End Time:</label>
            
            <input 
                type="time" 
                name="endTime" 
                id="endTime" 
                onChange={ (e) => setEndTime(e.target.value)}
            />
    
            <label htmlFor="hourly">Hourly:</label>
            
            <input 
                type="number" 
                name="hourly" 
                id="hourly" 
                onChange={ (e) => setHourly(e.target.value)}
            />
            
            <button onClick={toStart}> submit </button>
       </>
    )
}
