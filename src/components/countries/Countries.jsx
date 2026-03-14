import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([])

    const [visitedFlags, setVisitedFlags] = useState([])



    const handleVisitedCountries = (country) => {
        // console.log("clicked", country)
        const newVisitedCountry = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountry)
    }

    const handleFlag =(Flag)=>{
        console.log("clicked", Flag);
        const newVisitedFlag = [...visitedFlags, Flag]
        setVisitedFlags(newVisitedFlag)
        
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    // console.log(countries);

    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            <h4>Total Visited Country: {visitedCountries.length}</h4>
            <h4>My Total visited flag: {visitedFlags.length}</h4>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flag'>
                {
                    visitedFlags.map((flag, index)=> <img key={index} src={flag}></img>)
                }
            </div>
            <div className='Countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        handleFlag={handleFlag}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;