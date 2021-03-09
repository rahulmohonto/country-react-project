import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.css';
import { Card } from 'react-bootstrap';

const CountryDetails = () => {
    const { name } = useParams();
    // console.log(name)
    const [countryDetails, setCountryDetails] = useState({});
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(res => res.json())
            .then(data => setCountryDetails(data[0]))

    }, [])
    const { capital, region, population, nativeName, flag, subregion, area, callingCodes, languages, regionalBlocs } = countryDetails;
    return (
        <div className=" col-md-6 details align-items-center">
            <h2 className="text-center" >Details of {name} </h2>

            <Card style={{ width: '22rem', margin: '20px' }}>
                <Card.Img variant="top" src={flag} />
                <Card.Body>
                    <Card.Title>{countryDetails.name}</Card.Title>
                    <Card.Text className="text-primary">
                        <h3> Capital : {capital}</h3>
                        <h3>Area : {area}</h3>
                        <h3> Rgion : {region}</h3>
                        <h3> Subregion : {subregion}</h3>
                        <h3> Native-Name : {nativeName}</h3>
                        <h3> Population : {population}</h3>
                        {/* <h3>Languages : {languages[0].name} , {languages[1].name}</h3>
                        <h4>Regional Association : {regionalBlocs[0].acronym}</h4> */}
                        <h3> Calling-Codes : {callingCodes}</h3>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default CountryDetails;