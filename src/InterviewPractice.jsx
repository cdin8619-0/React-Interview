// The list should be displayed in the 'CountriesPage'.
// Each country should be displayed in a separate component.
// The user should be able to filter the list by capital
// Fetch all cities. use the '/capital/{capital}' endpoint
// To filter by capital city, use the '/capital/{capital}' endpoint


import {useEffect, useState} from "react";

function InterviewPractice() {

    const BASE_URL = "https://restcontries.com/v3.1";

    const FILTERABLE_CAPITALS = [
        "Tallinn",
        "Helsinki",
        "Stockholm",
        "Oslo",
        "Copenhagen",
        "Reykjavik",
    ]

    const CountryCard = ({country}) => {
        return <p key = {country.name}>
            {country.name}, {country.capital}
        </p>
    }

    const CountriesPage = () => {
        const [countries, setCountries] = useState([])

        useEffect(() => {
            const fetchData = async () => {
                const data = fetch(`${BASE_URL}/all`)
                const parsedData = await data.json()

                setCountries(parsedData)
            }

            fetchData()
        }, [])

        return (
            <div className="p-4">
                React Interview
                <div>
                    {countries.map((country) => (
                        <CountryCard key = {country.name} country={country} />
                    ))}
                </div>
            </div>
        );
    };


}

export default InterviewPractice;