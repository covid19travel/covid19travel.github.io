const dataUpdate="Tue Mar 30 12:34:12 2021";const DATA_INDEX={NAME:0,STRINGENCY:1,DATA:2};var data=[["Nicaragua",8.33,[20210322,0,0,0,0,0,0,0,1]],["Tanzania",8.33,[20210330,0,0,0,0,0,0,0,1]],["Afghanistan",12.04,[20210301,1,0,0,0,0,0,0,1]],["Nepal",16.67,[20210322,0,0,0,0,0,0,0,2]],["Laos",16.67,[20210328,0,0,0,0,0,0,0,2]],["Central African Republic",18.52,[20210315,0,0,0,0,0,1,0,2]],["Senegal",19.44,[20210330,0,0,0,0,0,0,0,3]],["Burundi",20.37,[20210322,0,1,0,0,0,0,0,2]],["New Zealand",22.22,[20210329,0,0,0,0,0,0,0,4]],["Burkina Faso",22.22,[20210328,0,0,0,0,0,0,2,1]],["Kiribati",22.22,[20210329,0,0,0,0,0,0,0,4]],["Chad",22.22,[20210322,0,0,0,0,0,2,0,2]],["Vanuatu",22.22,[20210325,0,0,0,0,0,0,0,4]],["Macao",23.15,[20210322,1,0,0,0,0,0,0,3]],["Taiwan",25.0,[20210322,0,0,1,0,0,0,0,3]],["Yemen",25.0,[20210328,0,0,0,0,0,2,1,3]],["Bolivia",25.0,[20210327,2,0,0,0,0,0,0,3]],["Cote d'Ivoire",25.93,[20210328,0,0,0,0,0,1,0,4]],["Democratic Republic of Congo",26.85,[20210328,0,0,2,1,1,1,1,1]],["Syria",27.78,[20210329,0,0,2,0,0,0,2,1]],["Belarus",27.78,[20210329,0,0,1,0,0,0,0,4]],["Mauritania",29.63,[20210323,0,1,1,1,0,1,0,1]],["Dominica",29.63,[20210329,1,0,0,2,0,1,0,2]],["Tajikistan",31.48,[20210322,1,0,0,3,0,0,0,3]],["Haiti",32.41,[20210322,0,0,0,3,0,2,0,2]],["Solomon Islands",33.33,[20210322,0,0,1,0,1,0,1,3]],["Djibouti",34.26,[20210329,0,1,1,4,0,0,0,1]],["Niger",34.26,[20210329,0,1,1,3,0,0,0,2]],["Cameroon",35.19,[20210329,1,1,1,3,0,0,0,1]],["Zambia",36.11,[20210329,0,0,2,4,0,0,0,1]],["Uzbekistan",37.04,[20210329,1,0,1,3,0,0,0,3]],["Greenland",37.04,[20210329,1,0,1,2,0,0,0,4]],["Madagascar",37.04,[20210322,1,0,0,2,0,0,2,3]],["Gambia",38.89,[20210329,0,0,1,4,1,0,0,2]],["Cape Verde",39.81,[20210328,2,2,2,3,0,1,1,1]],["Russia",40.28,[20210327,0,1,2,3,0,1,0,3]],["Liberia",40.74,[20210315,0,2,1,3,1,0,0,1]],["Iceland",40.74,[20210321,1,1,1,3,0,0,0,3]],["Brunei",40.74,[20210323,1,1,1,2,0,0,0,4]],["Guam",41.67,[20210324,1,1,1,3,0,1,0,2]],["Sudan",42.13,[20210329,1,1,2,4,0,0,0,2]],["Namibia",42.59,[20210329,1,1,1,3,0,2,0,1]],["Japan",42.59,[20210326,1,1,1,1,0,1,1,4]],["El Salvador",42.59,[20210329,3,1,1,0,0,0,1,3]],["Croatia",43.52,[20210326,1,1,1,4,0,0,0,3]],["Benin",43.52,[20210322,1,1,1,3,0,0,0,4]],["Australia",44.91,[20210326,1,2,1,3,1,0,1,4]],["Bosnia and Herzegovina",45.37,[20210325,1,2,1,4,0,2,0,1]],["Fiji",45.37,[20210329,0,2,1,2,0,2,0,3]],["Nigeria",45.37,[20210329,1,1,1,3,0,2,0,2]],["Mexico",47.22,[20210329,3,2,1,0,1,1,2,1]],["Tonga",47.22,[20210328,1,0,1,3,0,2,0,4]],["Thailand",47.22,[20210325,1,1,2,4,1,1,1,2]],["Somalia",47.22,[20210322,3,2,1,3,0,1,0,2]],["Congo",47.22,[20210322,0,1,1,3,0,2,1,2]],["Faeroe Islands",48.15,[20210329,1,2,1,2,0,1,1,2]],["Malawi",48.15,[20210328,0,2,1,3,1,2,0,1]],["Mali",48.15,[20210329,1,2,2,3,0,1,0,1]],["South Africa",48.15,[20210328,1,1,1,3,1,2,0,1]],["United States Virgin Islands",49.07,[20210329,2,2,1,3,0,1,0,2]],["Saudi Arabia",50.0,[20210329,3,0,2,3,0,0,0,3]],["China",50.0,[20210329,1,1,1,1,1,1,1,3]],["Pakistan",50.46,[20210322,0,3,2,4,0,3,0,1]],["Singapore",50.93,[20210326,1,2,1,4,0,1,0,3]],["Ethiopia",50.93,[20210322,3,1,1,3,1,0,0,2]],["Ghana",50.93,[20210329,0,2,2,3,0,1,0,4]],["Egypt",50.93,[20210329,2,2,2,4,0,0,0,1]],["Israel",50.93,[20210329,2,1,1,3,1,0,0,4]],["Sierra Leone",51.85,[20210322,1,2,1,3,1,2,0,1]],["Finland",52.31,[20210326,2,2,2,4,0,1,0,3]],["Kyrgyz Republic",52.31,[20210326,2,2,0,3,2,0,0,3]],["Guatemala",52.78,[20210328,2,1,2,4,1,0,0,2]],["United Arab Emirates",53.7,[20210330,1,2,2,4,0,0,2,2]],["Zimbabwe",53.7,[20210322,2,2,2,3,1,0,0,1]],["Bahrain",53.7,[20210322,1,2,1,3,1,1,1,1]],["Uganda",53.7,[20210329,2,2,1,2,2,2,0,1]],["Bermuda",54.63,[20210322,1,2,2,3,0,2,0,2]],["Serbia",54.63,[20210328,2,2,2,4,0,1,0,1]],["San Marino",54.63,[20210322,2,1,1,4,0,2,1,1]],["Papua New Guinea",54.63,[20210329,0,2,2,3,1,2,1,2]],["Luxembourg",55.56,[20210315,2,2,1,3,1,2,0,1]],["Libya",55.56,[20210329,1,2,2,4,0,2,2,2]],["Andorra",55.56,[20210323,1,2,2,4,1,0,0,2]],["Mozambique",55.56,[20210329,1,1,2,3,1,3,0,1]],["Latvia",56.48,[20210329,2,2,2,4,0,0,0,3]],["Aruba",56.48,[20210322,0,2,2,4,0,2,0,3]],["Angola",56.48,[20210329,1,1,1,3,1,2,1,2]],["Costa Rica",56.48,[20210329,1,2,2,3,0,1,2,1]],["Kazakhstan",57.41,[20210327,2,2,2,4,0,0,1,3]],["South Korea",58.33,[20210328,1,1,2,4,0,1,1,3]],["Kenya",58.33,[20210329,1,2,2,3,0,2,2,1]],["United States",58.8,[20210329,2,1,1,4,1,1,1,3]],["Ecuador",59.26,[20210322,2,2,2,4,1,1,1,1]],["Ukraine",59.26,[20210329,2,3,2,3,1,1,1,1]],["Switzerland",60.19,[20210328,2,2,2,4,0,1,0,3]],["Turkmenistan",60.19,[20210328,1,3,2,1,0,1,2,4]],["Belgium",60.19,[20210326,1,2,2,4,0,2,0,3]],["Guyana",60.19,[20210328,2,1,2,4,0,2,0,3]],["Qatar",60.19,[20210322,2,2,2,3,1,1,0,2]],["Albania",60.19,[20210322,2,1,2,4,0,2,0,3]],["Bulgaria",61.11,[20210330,3,3,2,3,0,0,0,3]],["Guinea",61.11,[20210329,1,2,2,4,0,2,2,1]],["Botswana",62.04,[20210328,1,1,2,4,0,2,2,1]],["Kosovo",62.04,[20210328,1,2,1,3,1,1,2,2]],["Tunisia",62.04,[20210322,1,1,1,4,1,2,2,2]],["Suriname",62.96,[20210329,1,2,2,4,0,2,0,4]],["Denmark",62.96,[20210326,2,2,2,4,0,1,0,4]],["Monaco",62.96,[20210329,1,3,1,4,0,1,2,2]],["Vietnam",63.43,[20210322,1,2,1,3,1,2,2,4]],["Romania",63.89,[20210329,2,1,1,4,0,2,2,3]],["Cambodia",63.89,[20210322,3,2,2,3,0,1,2,2]],["Lithuania",63.89,[20210324,2,2,2,4,0,2,2,2]],["Georgia",64.81,[20210328,0,2,2,4,0,2,2,2]],["Trinidad and Tobago",64.81,[20210329,2,2,2,4,1,0,0,4]],["Seychelles",65.74,[20210329,2,2,2,4,1,1,1,1]],["Oman",65.74,[20210323,2,3,2,4,0,2,0,3]],["Moldova",65.74,[20210322,3,3,2,4,1,2,1,1]],["Sweden",65.74,[20210326,2,1,2,4,1,1,1,3]],["Lesotho",65.74,[20210329,2,1,2,4,1,2,0,3]],["Gabon",65.74,[20210322,1,2,2,3,0,2,2,3]],["India",66.2,[20210318,2,2,2,4,0,3,2,3]],["Puerto Rico",66.67,[20210322,2,2,2,3,1,2,1,3]],["Estonia",67.59,[20210315,3,3,2,4,0,1,0,3]],["Malaysia",68.06,[20210322,2,3,2,4,0,2,2,3]],["Eswatini",68.52,[20210322,3,1,2,3,1,1,2,1]],["Palestine",68.52,[20210329,2,1,2,4,1,2,2,-1]],["France",68.52,[20210326,1,3,2,4,0,2,2,3]],["Bahamas",68.98,[20210322,3,2,2,4,1,2,2,1]],["Indonesia",68.98,[20210322,3,2,2,4,1,2,2,3]],["Togo",69.44,[20210328,2,2,2,3,0,1,2,4]],["Slovenia",69.44,[20210322,2,2,2,4,0,2,2,2]],["Spain",69.44,[20210327,1,2,2,4,0,2,2,3]],["Norway",69.91,[20210328,2,3,2,4,1,1,1,3]],["Argentina",70.37,[20210322,1,2,2,3,2,2,2,3]],["Azerbaijan",70.37,[20210326,2,1,2,4,2,1,0,4]],["Dominican Republic",70.37,[20210322,3,2,2,3,1,2,0,3]],["Brazil",70.83,[20210319,3,3,2,4,1,3,2,1]],["Rwanda",71.3,[20210329,1,2,2,4,1,2,2,2]],["Jamaica",71.3,[20210322,1,2,2,3,1,2,2,2]],["Cyprus",71.3,[20210322,3,2,1,4,1,2,1,3]],["Hong Kong",71.3,[20210323,2,2,2,4,1,1,1,3]],["Mongolia",71.76,[20210329,3,2,2,4,1,2,2,4]],["Canada",71.76,[20210326,3,2,2,4,1,2,2,4]],["Austria",71.76,[20210327,2,2,2,4,1,2,2,3]],["South Sudan",72.22,[20210329,2,2,2,4,1,2,1,2]],["Turkey",72.22,[20210329,2,2,2,3,1,2,1,3]],["Algeria",72.22,[20210315,1,2,1,4,2,2,2,4]],["Bhutan",72.22,[20210330,0,2,2,4,1,1,2,4]],["Belize",73.15,[20210329,3,2,2,4,1,2,1,1]],["Iraq",73.15,[20210330,3,2,2,4,0,2,2,1]],["Slovak Republic",74.07,[20210327,3,2,2,4,0,2,2,2]],["Barbados",74.07,[20210328,3,3,2,4,1,2,0,2]],["Germany",75.0,[20210327,3,2,2,4,1,2,1,3]],["Poland",75.0,[20210326,3,2,2,4,1,1,1,3]],["Netherlands",75.0,[20210328,2,2,2,4,1,2,1,3]],["Malta",75.0,[20210329,3,3,2,4,0,0,2,3]],["Philippines",75.46,[20210329,3,3,2,4,1,2,2,4]],["Jordan",75.93,[20210329,3,2,2,3,1,2,1,3]],["United Kingdom",75.93,[20210328,2,3,2,4,1,2,2,3]],["Kuwait",75.93,[20210325,3,2,2,2,1,2,1,4]],["Paraguay",76.85,[20210328,3,3,2,4,2,2,0,1]],["Panama",76.85,[20210329,3,2,2,3,1,2,2,3]],["Morocco",76.85,[20210329,1,2,2,4,1,2,2,3]],["Myanmar",77.78,[20210322,3,3,2,4,1,2,1,4]],["Chile",79.17,[20210329,3,3,2,4,1,3,2,3]],["Cuba",79.63,[20210322,3,3,2,4,2,2,2,2]],["Hungary",79.63,[20210327,3,3,2,4,1,2,0,4]],["Iran",80.09,[20210322,3,3,2,4,1,2,2,3]],["Portugal",80.56,[20210326,2,2,2,4,1,2,2,3]],["Bangladesh",81.02,[20210329,3,3,2,4,2,3,2,2]],["Czech Republic",81.48,[20210329,3,2,2,4,1,2,2,3]],["Sri Lanka",81.94,[20210307,3,3,2,4,2,3,2,3]],["Honduras",82.41,[20210329,3,3,2,4,0,2,2,3]],["Colombia",82.87,[20210328,2,3,2,4,2,3,2,4]],["Peru",83.33,[20210327,2,3,2,4,2,3,2,2]],["Ireland",84.26,[20210327,2,3,2,4,1,2,2,3]],["Italy",84.26,[20210326,3,3,2,4,1,2,2,3]],["Timor-Leste",85.19,[20210329,3,3,2,4,2,2,2,4]],["Eritrea",86.11,[20210322,2,2,2,3,2,2,2,4]],["Uruguay",87.04,[20210330,3,3,2,4,1,1,2,4]],["Venezuela",87.96,[20210328,3,3,2,4,1,2,2,4]],["Greece",87.96,[20210330,3,3,2,4,1,2,2,3]],["Lebanon",92.59,[20210322,3,2,2,4,2,2,2,4]],["Mauritius",97.22,[20210329,3,3,2,4,2,3,2,3]]];