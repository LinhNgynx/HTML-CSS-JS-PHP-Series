document.addEventListener("DOMContentLoaded", () =>{
    const countrySection = document.querySelector(".country-section");
    const searchBtn= document.getElementById("search-btn");
    const inputField = document.getElementById("country-name");
    const handleSearch = async () =>{
        const name=inputField.value ;
        const result = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        countrySection.innerHTML = `${result}`;
        inputField.value = null;
    }
    searchBtn.addEventListener("click", handleSearch);
})