import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Countries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all'
        axios
            .get(url)
            .then(response => setCountries(response.data))
            .catch(error => console.log({ error }))
    }, [])

    return (
        countries.map(country => {
            return (
                <div key={country.name} className="country">
                    <div>
                        <img src={country.flag} alt={country.name} />
                    </div>
                    <div>
                        <h3>{country.name}</h3>
                        <p>{country.capital}</p>
                    </div>
                </div>
            )
        })
    )
}

export default Countries
