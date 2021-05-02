import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Countries = ({ search }) => {

    const [countries, setCountries] = useState([])

    const getData = () => {
        const url = 'https://restcountries.eu/rest/v2/all'
        axios
            .get(url)
            .then(response => setCountries(response.data))
            .catch(error => console.log({ error }));
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {
                countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase())).map(country => {
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
            }
        </div>
    )
}

export default Countries
