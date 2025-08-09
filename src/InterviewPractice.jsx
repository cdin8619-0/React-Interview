// The list should be displayed in the 'CountriesPage'.
// Each country should be displayed in a separate component.
// The user should be able to filter the list by capital
// Fetch all cities. use the '/capital/{capital}' endpoint
// To filter by capital city, use the '/capital/{capital}' endpoint


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
    type Capital = (typeof FILTERABLE_CAPITALS)[number];

    interface Country {
        name: {
            common: string;
        };
        capital: string;
    }


}

export default InterviewPractice;