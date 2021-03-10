//alert('hy');
async function getCovidData(){

  const jsonData = await fetch('https://api.covid19api.com/summary');

  const jsData = await jsonData.json();

let a= document.querySelector('.searchTerm').value;


//console.log(jsData.Countries[1]);

  for(var j=0;j<200;j++){
    let countryname =  jsData.Countries[j];


    if(countryname.Country == a)
    {
      document.getElementById('countryName').innerText = countryname.Country;
      console.log(countryname.Country);
      console.log(countryname.CountryCode);
      console.log(countryname.TotalConfirmed);
      console.log(countryname.TotalDeaths);
      console.log(countryname.TotalRecovered);
      document.getElementById('card1-text').innerText = countryname.TotalConfirmed;
      document.getElementById('card2-text').innerText = countryname.TotalDeaths;
      document.getElementById('card3-text').innerText = countryname.TotalRecovered;

    }

  }



}
