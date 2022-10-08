 let countries= [
     "Afghanistan",
     "Albania",
     "Algeria",
     "Andorra",
     "Angola",
     "Anguilla",
     "Antigua and Barbuda",
     "Argentina",
     "Armenia",
     "Aruba",
     "Australia",
     "Austria",
     "Azerbaijan",
     "Bahamas",
     "Bahrain",
     "Bangladesh",
     "Barbados",
     "Belarus",
     "Belgium",
     "Belize",
     "Benin",
     "Bermuda",
     "Bhutan",
     "Bolivia",
     "Bonaire, Sint Eustatius and Saba",
     "Bosnia and Herzegovina",
     "Botswana",
     "Brazil",
     "Brunei Darussalam",
     "Bulgaria",
     "Burkina Faso",
     "Burundi",
     "Cambodia",
     "Cameroon",
     "Canada",
     "Cape Verde",
     "Cayman Islands",
     "Central African Republic",
     "Chad",
     "Chile",
     "China",
     "Colombia",
     "Comoros",
     "Congo",
     "Congo, the Democratic Republic of the",
     "Costa Rica",
     "Cote D'Ivoire",
     "Croatia",
     "Cuba",
     "Curacao",
     "Cyprus",
     "Czech Republic",
     "Denmark",
     "Djibouti",
     "Dominica",
     "Dominican Republic",
     "Ecuador",
     "Egypt",
     "El Salvador",
     "Equatorial Guinea",
     "Eritrea",
     "Estonia",
     "Ethiopia",
     "Falkland Islands (Malvinas)",
     "Faroe Islands",
     "Fiji",
     "Finland",
     "France",
     "French Guiana",
     "French Polynesia",
     "Gabon",
     "Gambia",
     "Georgia",
     "Germany",
     "Ghana",
     "Gibraltar",
     "Greece",
     "Greenland",
     "Grenada",
     "Guadeloupe",
     "Guatemala",
     "Guinea",
     "Guinea-Bissau",
     "Guyana",
     "Haiti",
     "Holy See (Vatican City State)",
     "Honduras",
     "Hong Kong",
     "Hungary",
     "Iceland",
     "India",
     "Indonesia",
     "Iran, Islamic Republic of",
     "Iraq",
     "Ireland",
     "Isle of Man",
     "Italy",
     "Jamaica",
     "Japan",
     "Jersey",
     "Jordan",
     "Kazakhstan",
     "Kenya",
     "Kuwait",
     "Kyrgyzstan",
     "Lao People's Democratic Republic",
     "Latvia",
     "Lebanon",
     "Lesotho",
     "Liberia",
     "Libyan Arab Jamahiriya",
     "Liechtenstein",
     "Lithuania",
     "Luxembourg",
     "Macao",
     "Macedonia, the Former Yugoslav Republic of",
     "Madagascar",
     "Malawi",
     "Malaysia",
     "Maldives",
     "Mali",
     "Malta",
     "Marshall Islands",
     "Martinique",
     "Mauritania",
     "Mauritius",
     "Mayotte",
     "Mexico",
     "Micronesia, Federated States of",
     "Moldova, Republic of",
     "Monaco",
     "Mongolia",
     "Montenegro",
     "Montserrat",
     "Morocco",
     "Mozambique",
     "Myanmar",
     "Namibia",
     "Nepal",
     "Netherlands",
     "New Caledonia",
     "New Zealand",
     "Nicaragua",
     "Niger",
     "Nigeria",
     "Norway",
     "Oman",
     "Pakistan",
     "Palau",
     "Palestine",
     "Panama",
     "Papua New Guinea",
     "Paraguay",
     "Peru",
     "Philippines",
     "Poland",
     "Portugal",
     "Qatar",
     "Reunion",
     "Romania",
     "Russian Federation",
     "Rwanda",
     "Saint Helena",
     "Saint Kitts and Nevis",
     "Saint Lucia",
     "Saint Martin",
     "Saint Pierre and Miquelon",
     "Saint Vincent and the Grenadines",
     "Samoa",
     "San Marino",
     "Sao Tome and Principe",
     "Saudi Arabia",
     "Senegal",
     "Serbia",
     "Seychelles",
     "Sierra Leone",
     "Singapore",
     "Sint Maarten",
     "Slovakia",
     "Slovenia",
     "Solomon Islands",
     "Somalia",
     "South Africa",
     "South Sudan",
     "Spain",
     "Sri Lanka",
     "Sudan",
     "Suriname",
     "Swaziland",
     "Sweden",
     "Switzerland",
     "Syrian Arab Republic",
     "Taiwan, Province of China",
     "Tajikistan",
     "Tanzania, United Republic of",
     "Thailand",
     "Timor-Leste",
     "Togo",
     "Tonga",
     "Trinidad and Tobago",
     "Tunisia",
     "Turkey",
     "Turks and Caicos Islands",
     "Uganda",
     "Ukraine",
     "United Arab Emirates",
     "United Kingdom",
     "United States",
     "Uruguay",
     "Uzbekistan",
     "Vanuatu",
     "Venezuela",
     "Viet Nam",
     "Wallis and Futuna",
     "Yemen",
     "Zambia",
     "Zimbabwe"
];
console.log(countries.length)
 for (i in countries){
  if(i==0|| i==1 || i==2 || i==3 || i==4 || i==5 || i==6 || i==7 || i==8){
  table("https://disease.sh/v3/covid-19/countries/"+countries[i],countries[i]," ")
  }else{  table("https://disease.sh/v3/covid-19/countries/"+countries[i],countries[i],"none")

  }
 
 
}

 async function table(url,country,style) {
      let x = await fetch(url);
      let y = await x.json();
      if(y.country==country){
      let table=document.getElementsByTagName("tbody")[0];
      let keys=["country",
                  "cases",
                  "todayCases",
                 "deaths",
                  "todayDeaths",
                  "recovered",
                  "todayRecovered",
                  "active",
                  "tests",
                  "critical",   
                  "population"];
      let row=table.insertRow(table.length);
      
      for(i in keys){
        
        let td=row.insertCell(row.length);
        td.innerHTML=y[keys[i]]
        
      }
row.style.display=style

    }else{

    }
        }



    
  $(function(){
    $(".boxes").eq(0).hide().slideDown(1500)
    $(".boxes").eq(1).hide().slideDown(1500)
    $(".boxes").eq(2).hide().slideDown(1500)
    $(".boxes").eq(3).hide().slideDown(1500)
    $(".card-1").hide().slideDown(1500)
 
    
    $(".lien").on("click",function(){
      let page=parseInt($(this).text())
      let tr=0;
      
      $("#table tr:gt(0)").each(function(){
      tr++;
      
      if(tr>9*page || tr<=((9*page)-9)){
    $(this).hide()
      }else{
        $(this).show()
      }


      })
    })
    $(".direction").eq(0).on("click",function(){
      for(let i=0;i<22;i++){
        if(i>=0 && i<=11){
           $(".lien").eq(i).show()
        }else{
          $(".lien").eq(i).hide()
        }
       
      }
    })
    $(".direction").eq(0).click()
    $(".direction").eq(1).on("click",function(){
      for(let i=0;i<22;i++){
        if(i>11 && i<22){
           $(".lien").eq(i).show()
        }else{
          $(".lien").eq(i).hide()
        }
       
      }
    })
  })

let countriesSearch= document.getElementById("countries-search")
for(i in countries){
let createElement1=document.createElement("option");
createElement1.value=countries[i]

countriesSearch.appendChild(createElement1)

}
