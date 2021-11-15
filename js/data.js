const dataUpdate="2021.11.15";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["BFA","Burkina Faso",2.78,[20211115,0,0,0,0,0,0,0,1,3],[0.12,"="]],["CAF","Central African Republic",5.56,[20211101,0,0,0,0,0,0,0,2,1],[0.26,"="]],["NIC","Nicaragua",8.33,[20211114,0,0,0,0,0,0,0,1,1],[0.38,"="]],["BDI","Burundi",11.11,[20211109,0,0,0,0,0,0,0,2,1],[0.1,"="]],["BWA","Botswana",13.89,[20211107,0,0,0,0,0,0,0,1,2],[4.65,"="]],["FRO","Faeroe Islands",13.89,[20211029,0,0,0,0,0,0,0,1,0],[94.73,"+"]],["GMB","Gambia",13.89,[20211106,0,0,0,0,0,0,0,1,3],[0.04,"="]],["SDN","Sudan",13.89,[20211114,0,0,0,-1,0,0,0,1,4],[0.22,"="]],["VUT","Vanuatu",16.67,[20211025,0,0,0,0,0,0,0,2,0],[0.0,"="]],["TUN","Tunisia",16.67,[20211114,0,0,0,0,0,0,0,2,3],[2.88,"="]],["NER","Niger",16.67,[20211114,0,0,2,0,0,0,0,2,3],[0.12,"-"]],["CIV","Cote d'Ivoire",17.59,[20211113,0,0,0,0,0,1,0,1,4],[0.05,"="]],["JOR","Jordan",17.59,[20211113,0,1,0,0,0,0,0,1,2],[19.42,"-"]],["SWE","Sweden",19.44,[20211106,0,0,0,0,0,0,0,3,0],[7.61,"="]],["BLR","Belarus",19.44,[20211101,0,0,0,0,0,0,0,3,0],[20.49,"-"]],["PRI","Puerto Rico",19.44,[20211101,-1,0,1,0,0,0,0,1,3],[]],["NOR","Norway",20.37,[20211112,1,0,0,0,0,0,0,2,0],[30.75,"+"]],["FIN","Finland",20.37,[20211108,1,0,0,0,0,0,0,2,1],[11.97,"="]],["SEN","Senegal",21.3,[20211106,1,1,0,0,0,0,0,1,3],[0.02,"+"]],["KIR","Kiribati",22.22,[20211108,0,0,0,0,0,0,0,4,0],[0.0,"="]],["TCD","Chad",22.22,[20211106,0,0,0,3,0,0,0,1,4],[0.0,"="]],["YEM","Yemen",23.15,[20211108,1,0,1,0,0,0,1,1,2],[0.02,"-"]],["BGD","Bangladesh",23.15,[20211108,0,0,1,0,0,1,0,1,4],[0.13,"="]],["MWI","Malawi",24.07,[20211101,0,1,0,1,0,1,0,1,3],[0.02,"="]],["DNK","Denmark",24.07,[20211108,1,1,0,0,0,0,0,2,2],[51.2,"+"]],["CMR","Cameroon",25.0,[20211114,0,0,1,3,0,0,0,2,3],[0.99,"="]],["PSE","Palestine",25.0,[20211114,0,0,0,0,0,0,2,2,4],[]],["MDA","Moldova",25.93,[20211101,0,1,0,2,0,0,0,2,2],[24.29,"-"]],["MDG","Madagascar",26.85,[20211113,0,2,0,2,0,2,0,1,3],[0.02,"="]],["HUN","Hungary",27.78,[20211101,0,0,1,3,0,0,0,1,2],[70.42,"="]],["AFG","Afghanistan",27.78,[20211031,0,2,2,0,2,0,0,2,3],[0.06,"+"]],["SLB","Solomon Islands",27.78,[20211115,0,0,1,0,0,0,0,4,0],[0.0,"="]],["SLV","El Salvador",27.78,[20211024,0,0,2,1,0,0,0,1,2],[3.58,"+"]],["MUS","Mauritius",28.7,[20211108,0,1,0,3,0,0,0,2,3],[7.47,"="]],["LIE","Liechtenstein",28.7,[20211115,0,0,0,3,0,1,0,2,3],[44.21,"="]],["SVK","Slovak Republic",29.17,[20211109,1,1,1,3,0,0,0,2,3],[108.5,"+"]],["BHR","Bahrain",29.63,[20211108,0,1,1,0,0,1,0,2,3],[1.19,"-"]],["GRL","Greenland",29.63,[20211111,1,1,1,1,0,0,1,1,2],[32.97,"="]],["COL","Colombia",29.63,[20211029,0,1,1,3,1,0,0,0,4],[4.75,"+"]],["SLE","Sierra Leone",29.63,[20211108,1,1,0,0,1,0,0,2,3],[0.0,"="]],["TJK","Tajikistan",29.63,[20211101,1,1,0,0,0,0,0,4,3],[0.0,"="]],["MAR","Morocco",30.56,[20211115,1,1,0,0,0,1,0,3,3],[0.32,"-"]],["PAK","Pakistan",31.94,[20211108,0,1,1,2,0,1,0,3,4],[0.18,"+"]],["AZE","Azerbaijan",32.41,[20211106,1,1,1,2,0,0,0,1,2],[19.12,"-"]],["EST","Estonia",32.41,[20211109,1,1,1,1,0,0,0,2,2],[75.38,"-"]],["UZB","Uzbekistan",33.33,[20211113,1,0,1,2,0,1,0,2,2],[0.75,"-"]],["BIH","Bosnia and Herzegovina",35.19,[20211108,1,1,1,3,0,0,0,1,2],[26.94,"="]],["HRV","Croatia",35.19,[20211112,1,1,1,3,0,0,0,1,2],[130.23,"-"]],["BOL","Bolivia",35.19,[20211031,1,1,2,4,0,0,0,2,-1],[6.83,"+"]],["PRY","Paraguay",35.19,[20211112,1,1,1,3,0,0,0,1,3],[0.62,"-"]],["MEX","Mexico",35.19,[20211108,0,2,1,0,1,1,2,1,4],[1.99,"+"]],["MCO","Monaco",35.19,[20211025,1,1,1,0,1,0,0,2,2],[15.29,"="]],["SSD","South Sudan",35.19,[20211108,1,1,0,4,0,0,0,2,2],[0.13,"="]],["SOM","Somalia",35.19,[20211101,0,1,1,3,0,1,0,1,3],[0.13,"="]],["CZE","Czech Republic",35.19,[20211022,1,1,1,1,0,0,0,3,2],[99.04,"+"]],["CHL","Chile",35.65,[20211113,1,1,1,2,0,0,2,2,3],[20.4,"+"]],["NAM","Namibia",36.11,[20211101,0,1,1,2,0,2,0,1,3],[0.18,"-"]],["URY","Uruguay",37.04,[20211105,0,1,1,2,1,0,0,2,2],[5.25,"-"]],["MNG","Mongolia",37.04,[20211115,1,2,1,3,0,1,1,1,4],[25.85,"+"]],["MAC","Macao",37.96,[20211106,1,1,1,0,1,0,0,3,2],[]],["KEN","Kenya",37.96,[20211025,0,2,2,2,0,0,0,1,4],[0.12,"="]],["SMR","San Marino",37.96,[20211115,1,1,1,4,0,0,0,1,3],[15.16,"="]],["DJI","Djibouti",37.96,[20211025,1,1,1,4,0,0,0,1,4],[0.06,"="]],["COD","Democratic Republic of Congo",37.96,[20211018,0,1,1,3,0,2,2,1,3],[0.02,"="]],["TZA","Tanzania",38.89,[20211101,1,1,1,1,1,1,1,1,1],[0.0,"="]],["TGO","Togo",38.89,[20211018,0,0,2,3,0,0,1,1,4],[0.08,"+"]],["POL","Poland",38.89,[20211110,1,1,1,2,0,1,0,2,3],[37.86,"+"]],["COG","Congo",38.89,[20211108,0,1,1,3,0,2,0,1,3],[0.54,"="]],["NGA","Nigeria",38.89,[20211112,0,1,1,3,1,1,0,1,3],[0.03,"="]],["KOR","South Korea",39.35,[20211115,1,2,1,4,0,0,0,2,3],[4.39,"+"]],["OMN","Oman",39.81,[20211108,1,0,2,4,0,0,0,1,4],[0.18,"-"]],["DZA","Algeria",39.81,[20211101,0,1,2,4,0,0,0,1,3],[0.27,"+"]],["LBN","Lebanon",40.74,[20211107,0,1,2,1,1,1,0,1,1],[12.78,"+"]],["GHA","Ghana",40.74,[20211031,0,2,2,3,0,0,0,1,4],[0.12,"="]],["PRT","Portugal",40.74,[20211104,0,2,2,2,0,0,0,2,2],[13.91,"+"]],["ZMB","Zambia",40.74,[20211025,0,2,2,0,1,0,0,2,4],[0.06,"-"]],["ISL","Iceland",40.74,[20211114,1,1,1,3,0,0,0,3,2],[44.63,"="]],["SRB","Serbia",40.74,[20211115,1,1,1,2,1,0,0,2,-1],[46.01,"-"]],["GBR","United Kingdom",41.2,[20211112,1,2,1,3,1,0,0,3,3],[55.05,"+"]],["BRA","Brazil",41.2,[20211115,2,1,1,2,1,1,2,1,3],[5.21,"-"]],["ESP","Spain",41.2,[20211104,1,2,2,3,0,0,0,2,3],[6.57,"="]],["TWN","Taiwan",41.67,[20211112,1,2,1,3,0,0,0,2,3],[0.03,"+"]],["NLD","Netherlands",41.67,[20211112,1,2,2,0,0,0,0,3,2],[78.63,"+"]],["RKS","Kosovo",42.59,[20211101,1,1,1,3,0,2,0,1,3],[0.61,"-"]],["VIR","United States Virgin Islands",42.59,[20211022,1,2,1,3,0,1,0,1,3],[]],["ARG","Argentina",42.59,[20211114,1,1,1,1,1,1,1,2,3],[2.83,"="]],["LSO","Lesotho",43.52,[20211024,1,2,1,2,0,2,0,1,3],[0.04,"+"]],["NPL","Nepal",43.52,[20211108,1,2,2,3,1,0,0,2,4],[1.18,"+"]],["EGY","Egypt",43.52,[20211108,1,1,2,4,0,0,0,1,4],[0.77,"-"]],["MLT","Malta",43.52,[20211115,1,1,1,4,0,0,0,3,3],[9.58,"-"]],["ETH","Ethiopia",43.52,[20211109,1,1,1,3,1,0,0,2,3],[0.2,"="]],["TON","Tonga",43.52,[20211108,0,0,1,3,0,2,0,4,2],[0.0,"="]],["DEU","Germany",43.98,[20211105,1,2,2,4,0,0,0,2,2],[44.98,"+"]],["SGP","Singapore",44.44,[20211106,1,1,1,4,0,1,0,2,4],[46.08,"-"]],["MLI","Mali",44.44,[20211114,1,2,2,3,0,0,0,1,3],[0.21,"="]],["ABW","Aruba",44.44,[20211024,1,1,1,4,0,1,0,2,2],[10.3,"-"]],["ZWE","Zimbabwe",44.44,[20211101,0,2,1,3,1,1,0,1,4],[0.23,"+"]],["LBR","Liberia",44.44,[20211111,1,2,1,3,1,0,0,1,3],[0.01,"="]],["LBY","Libya",44.44,[20211108,2,0,2,4,0,0,0,2,3],[7.82,"-"]],["IND","India",44.91,[20211108,2,1,1,2,0,2,2,2,4],[0.83,"-"]],["ZAF","South Africa",45.37,[20211108,1,1,1,2,1,2,0,1,3],[0.41,"-"]],["ALB","Albania",45.37,[20211113,1,1,1,3,0,2,0,2,2],[19.61,"-"]],["BEL","Belgium",45.83,[20211108,1,2,2,3,0,0,0,3,2],[86.59,"="]],["LTU","Lithuania",46.3,[20211105,1,1,2,4,0,0,0,2,2],[84.53,"-"]],["LUX","Luxembourg",46.3,[20211108,1,1,1,3,1,0,0,3,2],[32.09,"="]],["AND","Andorra",46.3,[20211111,1,1,1,4,1,0,0,2,2],[37.16,"="]],["ARE","United Arab Emirates",46.3,[20211114,1,1,1,3,1,0,1,1,2],[0.74,"-"]],["GUM","Guam",46.3,[20211108,1,1,2,4,0,0,0,2,3],[]],["CYP","Cyprus",46.3,[20211108,1,1,1,3,1,0,0,3,2],[19.2,"="]],["TLS","Timor-Leste",46.3,[20211107,0,2,2,3,2,1,0,2,3],[0.11,"="]],["CHE","Switzerland",46.3,[20211113,1,1,2,3,0,0,0,3,2],[35.64,"="]],["GTM","Guatemala",46.76,[20211108,2,1,2,3,2,0,0,1,4],[3.46,"+"]],["BMU","Bermuda",47.22,[20211102,1,1,1,3,1,1,0,2,2],[7.11,"="]],["JPN","Japan",47.22,[20211112,1,1,1,1,0,1,1,4,1],[0.14,"="]],["BTN","Bhutan",47.22,[20211108,2,1,1,3,0,0,1,2,3],[0.04,"="]],["GEO","Georgia",47.22,[20211108,1,2,2,4,0,0,0,1,3],[111.86,"-"]],["MOZ","Mozambique",48.15,[20211108,0,1,2,3,1,2,0,1,3],[0.03,"="]],["IRL","Ireland",48.15,[20211106,1,2,2,1,0,1,0,3,3],[84.08,"+"]],["CPV","Cape Verde",49.07,[20211031,0,1,1,4,0,1,2,1,2],[1.03,"="]],["AUT","Austria",49.07,[20211114,2,2,1,3,1,0,0,2,2],[120.18,"+"]],["KGZ","Kyrgyz Republic",49.07,[20211108,1,1,2,4,0,0,1,1,2],[1.12,"+"]],["BEN","Benin",50.0,[20211101,0,2,2,3,0,1,0,3,4],[0.03,"="]],["BHS","Bahamas",51.39,[20211021,2,2,1,4,0,2,2,1,4],[3.16,"="]],["RWA","Rwanda",51.85,[20211025,1,2,1,3,1,2,0,1,3],[0.21,"="]],["QAT","Qatar",51.85,[20211114,-1,1,1,4,1,1,1,2,2],[4.91,"+"]],["GAB","Gabon",51.85,[20211107,0,0,2,3,1,2,1,1,3],[3.32,"="]],["KWT","Kuwait",51.85,[20211115,1,1,1,3,0,0,2,3,4],[0.55,"+"]],["MRT","Mauritania",52.78,[20211114,0,1,2,4,1,2,0,1,3],[1.32,"+"]],["HKG","Hong Kong",52.78,[20211108,1,1,1,3,1,1,1,2,2],[0.02,"="]],["DOM","Dominican Republic",52.78,[20211106,1,1,1,4,1,1,1,1,3],[10.13,"+"]],["SVN","Slovenia",53.7,[20211108,1,2,2,4,0,1,0,2,2],[152.3,"+"]],["BGR","Bulgaria",53.7,[20211101,2,2,2,3,0,0,0,3,3],[47.05,"-"]],["ISR","Israel",53.7,[20211114,2,2,2,2,0,0,0,4,2],[5.28,"-"]],["KHM","Cambodia",54.17,[20211114,0,2,2,4,0,2,2,2,3],[0.38,"-"]],["LKA","Sri Lanka",54.63,[20211106,2,1,2,3,0,1,1,2,3],[4.06,"+"]],["TUR","Turkey",54.63,[20211024,1,1,1,0,2,0,2,3,4],[29.89,"-"]],["CRI","Costa Rica",54.63,[20211101,2,2,2,2,0,1,1,1,3],[5.17,"="]],["THA","Thailand",55.09,[20211108,1,1,2,3,0,2,2,3,4],[10.32,"-"]],["SWZ","Eswatini",55.56,[20211101,3,1,1,3,0,2,1,1,4],[0.18,"="]],["USA","United States",56.02,[20211105,2,2,2,4,1,1,1,3,3],[24.79,"-"]],["RUS","Russia",56.02,[20211101,3,1,2,3,0,1,2,2,2],[26.17,"-"]],["SAU","Saudi Arabia",57.41,[20211025,1,1,2,3,1,0,1,3,2],[0.12,"="]],["ROU","Romania",57.41,[20211101,3,1,1,2,1,1,1,2,3],[26.3,"-"]],["IDN","Indonesia",57.87,[20211111,1,1,2,3,1,1,2,3,3],[0.14,"-"]],["ECU","Ecuador",57.87,[20211108,2,1,1,4,1,1,2,2,3],[0.14,"="]],["UKR","Ukraine",58.33,[20211109,2,1,1,3,2,0,2,1,3],[49.13,"-"]],["GIN","Guinea",59.26,[20211108,1,2,2,3,1,2,1,1,3],[0.04,"="]],["MYS","Malaysia",59.26,[20211101,2,1,2,4,1,1,2,2,3],[17.66,"+"]],["AUS","Australia",60.65,[20211105,1,2,2,4,1,0,2,3,3],[5.06,"-"]],["SYR","Syria",60.65,[20211115,3,3,2,3,1,2,1,1,3],[1.7,"+"]],["PAN","Panama",61.11,[20211106,2,3,2,4,0,2,0,2,4],[3.99,"+"]],["PER","Peru",61.11,[20211104,2,2,2,4,0,2,1,3,4],[3.03,"="]],["ERI","Eritrea",62.04,[20211110,1,1,2,3,1,2,0,4,3],[0.43,"-"]],["BLZ","Belize",62.04,[20211026,3,2,1,4,0,2,1,1,4],[36.11,"="]],["AGO","Angola",63.43,[20211108,0,2,2,4,1,1,2,4,3],[0.1,"-"]],["SUR","Suriname",63.89,[20211112,2,2,2,4,0,2,0,3,4],[12.08,"-"]],["HND","Honduras",63.89,[20211109,2,2,2,0,2,1,2,1,3],[0.99,"+"]],["HTI","Haiti",64.81,[20211031,1,1,2,4,1,2,1,2,3],[0.59,"="]],["CUB","Cuba",65.28,[20211031,3,1,2,4,2,2,2,1,4],[3.48,"-"]],["SYC","Seychelles",65.74,[20211108,1,2,2,4,1,2,2,1,1],[36.61,"="]],["PNG","Papua New Guinea",65.74,[20211101,2,2,2,3,2,1,2,2,3],[2.35,"-"]],["GUY","Guyana",65.74,[20211031,1,2,2,4,1,2,0,3,4],[13.4,"+"]],["TKM","Turkmenistan",66.67,[20211102,1,2,2,4,1,2,2,4,3],[]],["FRA","France",66.67,[20211105,1,2,2,3,1,0,2,3,2],[15.42,"+"]],["CAN","Canada",67.13,[20211105,2,3,2,4,1,1,2,3,3],[6.78,"+"]],["BRB","Barbados",67.59,[20211112,3,2,2,3,1,2,0,2,3],[100.62,"-"]],["VNM","Vietnam",68.98,[20211101,3,2,2,3,2,2,2,2,3],[8.49,"+"]],["TTO","Trinidad and Tobago",69.44,[20211031,2,2,2,4,0,2,2,1,3],[30.25,"+"]],["LVA","Latvia",70.37,[20211114,2,3,2,4,1,2,0,2,3],[64.5,"-"]],["KAZ","Kazakhstan",71.3,[20211105,1,1,2,4,2,2,2,3,3],[6.64,"+"]],["ITA","Italy",71.3,[20211112,2,3,2,1,1,2,2,3,3],[12.29,"+"]],["IRN","Iran",72.69,[20211114,3,3,2,4,0,2,2,3,3],[8.49,"-"]],["JAM","Jamaica",74.07,[20211114,2,2,2,4,1,3,2,2,3],[2.55,"-"]],["PHL","Philippines",74.54,[20211107,3,2,2,4,2,2,2,3,4],[1.79,"-"]],["VEN","Venezuela",75.0,[20211107,3,2,2,4,1,1,1,3,4],[3.32,"+"]],["LAO","Laos",75.0,[20211101,3,2,2,3,2,2,2,2,3],[14.01,"-"]],["UGA","Uganda",75.93,[20211101,3,2,2,2,1,2,2,2,3],[0.11,"-"]],["IRQ","Iraq",75.93,[20211115,3,2,2,3,0,2,2,3,3],[2.27,"-"]],["CHN","China",76.39,[20211108,3,3,2,4,1,3,2,2,2],[0.0,"-"]],["DMA","Dominica",79.63,[20211009,3,3,2,4,1,2,1,2,2],[74.42,"+"]],["BRN","Brunei",79.63,[20211110,3,3,2,4,1,2,0,4,4],[15.45,"+"]],["GRC","Greece",80.09,[20211108,2,2,2,4,2,2,2,3,2],[64.38,"-"]],["NZL","New Zealand",81.02,[20211108,3,3,2,4,2,2,2,4,3],[3.61,"-"]],["MMR","Myanmar",85.19,[20211108,3,2,2,4,1,2,2,4,4],[1.69,"-"]],["FJI","Fiji",90.74,[20211108,3,3,2,4,2,2,2,2,2],[2.39,"="]]];