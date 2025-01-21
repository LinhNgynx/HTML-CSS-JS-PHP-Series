document.addEventListener("DOMContentLoaded", () => {
    const countrySection = document.querySelector(".country-section");
    const searchBtn = document.getElementById("search-btn");
    const inputField = document.getElementById("country-name");

    let debounceTimer;

    const createCountryHTML = (country) => `
        <h2>${country.name.common}</h2>
        <p><strong>Region:</strong> ${country.region || "N/A"}</p>
        <p><strong>Population:</strong> ${country.population.toLocaleString() || "N/A"}</p>
        <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"}</p>
        <p><strong>Currency:</strong> ${
            country.currencies 
                ? Object.values(country.currencies).map(c => c.name).join(", ") 
                : "N/A"
        }</p>
        <p><strong>Languages:</strong> ${
            country.languages 
                ? Object.values(country.languages).join(", ") 
                : "N/A"
        }</p>
        <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" width="200">
    `;

    const handleSearch = async () => {
        const name = inputField.value.trim();
        if (!name) {
            countrySection.innerHTML = `<p>Please enter a country name.</p>`;
            return;
        }

        countrySection.innerHTML = `<p>Loading...</p>`;
        searchBtn.disabled = true;

        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
            if (!response.ok) {
                throw new Error("Country not found");
            }

            const data = await response.json();
            const country = data[0];

            countrySection.innerHTML = createCountryHTML(country);
        } catch (error) {
            const errorMessage = error.message === "Country not found" 
                ? "No matching country found. Please try again." 
                : "Something went wrong. Please try again later.";
            countrySection.innerHTML = `<p>Error: ${errorMessage}</p>`;
        }

        searchBtn.disabled = false;
        inputField.value = '';
    };

    const debounce = (func, delay) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(func, delay);
    };

    searchBtn.addEventListener("click", handleSearch);
    inputField.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            debounce(handleSearch, 300);
        }
    });
});
