import React, { useState } from 'react';
import "./Country.css"

const Country = ({ country, handleVisitedCountries }) => {
    // console.log(country.area.area)
   
    const [Visited, setVisited] = useState(false)
    const handleBtn =()=>{
        // basic

        // if(Visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // ternary
        // setVisited(Visited? false: true)

        setVisited(!Visited)
        handleVisitedCountries(country)
    }
    return (
        <div className={`Country ${Visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h4>Country Name: {country.name.common}</h4>
            <p>Total Population: {country.population.population}</p>
            <p>Continent: {country.region.region}</p>
            <p>Area: {country.area.area} {country.area.area>30000? "Big Country":"Small Country"}</p>
            <br />
            <button className='btn' onClick={handleBtn}>{Visited? "Visited": "Not Visited"}</button>

            
        </div>
    );
};

export default Country;