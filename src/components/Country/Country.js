import React, { useState, useEffect } from 'react';
import ShowCountry from '../ShowCountry/ShowCountry';


const Country = () => {
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2')
            .then(res => res.json())
            .then(data => setCountry(data))

    }, [])

    return (
        <div className="container mt-5">
            <h2>Country Numbers : {country.length}</h2>
            <div className="row">

                {
                    country.map(country => <ShowCountry key={country.alpha3Code} oneCountry={country}
                    ></ShowCountry>)
                }
            </div>
        </div>
    );
};

export default Country;