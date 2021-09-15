import React from 'react';
import './Country.css';

const Country = (props) => {
    //console.log(props.country);
    const { name, population, region, flag } = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="countryBody">
            <div className="countriesStyle">
                <div className="countriesFlag">
                    <img  src={flag} alt="" />
                    <br />
                    <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
                </div>
                <div className="countriesInfo">
                    <h3>{name}</h3>
                    <p>Population : {population}</p>
                    <p>Region : <small>{region}</small></p>
                </div>
            </div>
        </div>
    );
};

export default Country;