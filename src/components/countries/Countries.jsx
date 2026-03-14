import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([])



    const handleVisitedCountries = (country) => {
        console.log("clicked", country)
        const newVisitedCountry = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountry)
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    // console.log(countries);

    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            <h4>Total Visited Country: {visitedCountries.length}</h4>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='Countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;