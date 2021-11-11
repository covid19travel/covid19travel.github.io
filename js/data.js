const dataUpdate="2021.11.11";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["CAF","Central African Republic",5.56,[20211101,0,0,0,0,0,0,0,2,1],[0.0,"="]],["NIC","Nicaragua",8.33,[20211024,0,0,0,0,0,0,0,1,1],[0.38,"+"]],["BDI","Burundi",11.11,[20211109,0,0,0,0,0,0,0,2,1],[0.11,"+"]],["SDN","Sudan",13.89,[20211018,0,0,0,-1,0,0,0,1,4],[0.19,"="]],["BWA","Botswana",13.89,[20211107,0,0,0,0,0,0,0,1,2],[37.47,"="]],["GMB","Gambia",13.89,[20211106,0,0,0,0,0,0,0,1,3],[0.04,"="]],["FRO","Faeroe Islands",13.89,[20211029,0,0,0,0,0,0,0,1,0],[118.41,"-"]],["BFA","Burkina Faso",13.89,[20211024,0,0,0,0,0,0,0,1,4],[0.12,"+"]],["VUT","Vanuatu",16.67,[20211025,0,0,0,0,0,0,0,2,0],[0.0,"="]],["TUN","Tunisia",16.67,[20211107,0,0,0,0,0,0,0,2,3],[2.77,"+"]],["CIV","Cote d'Ivoire",17.59,[20211023,0,0,0,0,0,1,0,1,4],[0.07,"="]],["PRI","Puerto Rico",19.44,[20211101,-1,0,1,0,0,0,0,1,3],[]],["BLR","Belarus",19.44,[20211101,0,0,0,0,0,0,0,3,0],[20.67,"-"]],["SWE","Sweden",19.44,[20211106,0,0,0,0,0,0,0,3,0],[7.2,"+"]],["NOR","Norway",20.37,[20211104,1,0,0,0,0,0,0,2,0],[27.78,"+"]],["FIN","Finland",20.37,[20211108,1,0,0,0,0,0,0,2,1],[13.69,"-"]],["SEN","Senegal",21.3,[20211106,1,1,0,0,0,0,0,1,3],[0.02,"="]],["EST","Estonia",21.3,[20211109,1,1,1,1,0,0,0,2,-1],[97.73,"-"]],["KIR","Kiribati",22.22,[20211108,0,0,0,0,0,0,0,4,0],[0.0,"="]],["TCD","Chad",22.22,[20211106,0,0,0,3,0,0,0,1,4],[0.0,"="]],["JOR","Jordan",23.15,[20211026,0,1,0,0,0,0,0,3,2],[20.94,"+"]],["BGD","Bangladesh",23.15,[20211108,0,0,1,0,0,1,0,1,4],[0.12,"-"]],["YEM","Yemen",23.15,[20211108,1,0,1,0,0,0,1,1,2],[0.04,"="]],["MWI","Malawi",24.07,[20211101,0,1,0,1,0,1,0,1,3],[0.02,"+"]],["DNK","Denmark",24.07,[20211108,1,1,0,0,0,0,0,2,2],[42.51,"+"]],["NER","Niger",25.0,[20211101,0,0,2,3,0,0,0,2,3],[0.11,"+"]],["MDA","Moldova",25.93,[20211101,0,1,0,2,0,0,0,2,2],[27.95,"-"]],["MDG","Madagascar",26.85,[20211025,0,2,0,2,0,0,0,1,3],[0.02,"+"]],["AFG","Afghanistan",27.78,[20211031,0,2,2,0,2,0,0,2,3],[0.03,"="]],["HUN","Hungary",27.78,[20211101,0,0,1,3,0,0,0,1,2],[64.96,"+"]],["SLV","El Salvador",27.78,[20211024,0,0,2,1,0,0,0,1,2],[8.65,"+"]],["MUS","Mauritius",28.7,[20211108,0,1,0,3,0,0,0,2,3],[8.69,"-"]],["LIE","Liechtenstein",28.7,[20211108,0,0,0,3,0,1,0,2,3],[43.09,"+"]],["SVK","Slovak Republic",29.17,[20211109,1,1,1,3,0,0,0,2,3],[105.67,"+"]],["BHR","Bahrain",29.63,[20211108,0,1,1,0,0,1,0,2,3],[1.53,"-"]],["COL","Colombia",29.63,[20211029,0,1,1,3,1,0,0,0,4],[4.08,"+"]],["SLE","Sierra Leone",29.63,[20211108,1,1,0,0,1,0,0,2,3],[0.0,"="]],["TJK","Tajikistan",29.63,[20211101,1,1,0,0,0,0,0,4,3],[0.0,"="]],["GRL","Greenland",30.09,[20211102,1,0,1,3,0,0,1,1,2],[32.21,"+"]],["PAK","Pakistan",31.94,[20211108,0,1,1,2,0,1,0,3,4],[0.23,"="]],["AZE","Azerbaijan",32.41,[20211106,1,1,1,2,0,0,0,1,2],[21.58,"-"]],["SLB","Solomon Islands",33.33,[20211025,0,0,1,0,0,0,1,4,0],[0.0,"="]],["BOL","Bolivia",35.19,[20211031,1,1,2,4,0,0,0,2,-1],[6.11,"-"]],["MEX","Mexico",35.19,[20211108,0,2,1,0,1,1,2,1,4],[2.16,"-"]],["SSD","South Sudan",35.19,[20211108,1,1,0,4,0,0,0,2,2],[0.14,"+"]],["BIH","Bosnia and Herzegovina",35.19,[20211108,1,1,1,3,0,0,0,1,2],[23.91,"-"]],["MCO","Monaco",35.19,[20211025,1,1,1,0,1,0,0,2,2],[9.83,"-"]],["CZE","Czech Republic",35.19,[20211022,1,1,1,1,0,0,0,3,2],[79.76,"+"]],["PRY","Paraguay",35.19,[20211102,1,1,1,3,0,0,0,1,3],[0.56,"="]],["SOM","Somalia",35.19,[20211101,0,1,1,3,0,1,0,1,3],[0.62,"="]],["CHL","Chile",35.65,[20211107,1,1,1,2,0,0,2,2,3],[11.9,"+"]],["NAM","Namibia",36.11,[20211101,0,1,1,2,0,2,0,1,3],[0.36,"-"]],["URY","Uruguay",37.04,[20211105,0,1,1,2,1,0,0,2,2],[5.6,"="]],["BEN","Benin",37.04,[20211101,0,0,2,3,0,1,0,2,4],[0.03,"-"]],["MNG","Mongolia",37.04,[20211108,1,2,1,3,0,1,1,1,4],[28.46,"+"]],["HRV","Croatia",37.96,[20211109,1,1,1,2,1,0,0,1,2],[132.3,"+"]],["COD","Democratic Republic of Congo",37.96,[20211018,0,1,1,3,0,2,2,1,3],[0.01,"="]],["DJI","Djibouti",37.96,[20211025,1,1,1,4,0,0,0,1,4],[0.09,"-"]],["SMR","San Marino",37.96,[20211025,1,1,1,4,0,0,0,1,3],[17.26,"-"]],["MAC","Macao",37.96,[20211106,1,1,1,0,1,0,0,3,2],[]],["KEN","Kenya",37.96,[20211025,0,2,2,2,0,0,0,1,4],[0.14,"+"]],["TZA","Tanzania",38.89,[20211101,1,1,1,1,1,1,1,1,1],[0.01,"="]],["POL","Poland",38.89,[20211110,1,1,1,2,0,1,0,2,3],[37.23,"+"]],["COG","Congo",38.89,[20211108,0,1,1,3,0,2,0,1,3],[1.25,"="]],["TGO","Togo",38.89,[20211018,0,0,2,3,0,0,1,1,4],[0.06,"-"]],["KOR","South Korea",39.35,[20211108,1,2,1,4,0,0,0,2,3],[4.24,"+"]],["UZB","Uzbekistan",39.81,[20211026,1,0,0,3,1,0,1,2,3],[0.78,"+"]],["OMN","Oman",39.81,[20211108,1,0,2,4,0,0,0,1,4],[0.24,"+"]],["ETH","Ethiopia",39.81,[20211109,0,1,1,3,1,0,0,2,3],[0.22,"-"]],["DZA","Algeria",39.81,[20211101,0,1,2,4,0,0,0,1,3],[0.25,"+"]],["BRA","Brazil",40.28,[20211101,2,2,1,2,1,2,0,1,3],[4.94,"-"]],["ZMB","Zambia",40.74,[20211025,0,2,2,0,1,0,0,2,4],[0.12,"="]],["LBN","Lebanon",40.74,[20211107,0,1,2,1,1,1,0,1,1],[10.53,"+"]],["GHA","Ghana",40.74,[20211031,0,2,2,3,0,0,0,1,4],[0.15,"="]],["PRT","Portugal",40.74,[20211104,0,2,2,2,0,0,0,2,2],[11.62,"+"]],["SRB","Serbia",40.74,[20211025,1,1,1,2,1,0,0,2,3],[56.57,"-"]],["AND","Andorra",40.74,[20211108,1,1,1,2,1,0,0,2,2],[31.8,"-"]],["GBR","United Kingdom",41.2,[20211105,1,2,1,3,1,0,0,3,3],[49.7,"-"]],["ESP","Spain",41.2,[20211104,1,2,2,3,0,0,0,2,3],[5.89,"+"]],["ISL","Iceland",41.67,[20211025,2,1,1,2,0,0,0,3,2],[42.37,"+"]],["CMR","Cameroon",41.67,[20211105,0,0,2,3,0,0,2,2,3],[0.74,"-"]],["NLD","Netherlands",41.67,[20211104,1,2,2,0,0,0,0,3,2],[66.98,"+"]],["RKS","Kosovo",42.59,[20211101,1,1,1,3,0,2,0,1,3],[0.77,"-"]],["VIR","United States Virgin Islands",42.59,[20211022,1,2,1,3,0,1,0,1,3],[]],["ARG","Argentina",42.59,[20211025,1,1,1,1,1,1,1,2,3],[2.67,"+"]],["TON","Tonga",43.52,[20211108,0,0,1,3,0,2,0,4,2],[0.0,"="]],["MLT","Malta",43.52,[20211108,1,1,1,4,0,0,0,3,3],[8.67,"+"]],["LSO","Lesotho",43.52,[20211024,1,2,1,2,0,2,0,1,3],[0.29,"-"]],["EGY","Egypt",43.52,[20211108,1,1,2,4,0,0,0,1,4],[0.9,"="]],["NPL","Nepal",43.52,[20211108,1,2,2,3,1,0,0,2,4],[0.95,"="]],["DEU","Germany",43.98,[20211105,1,2,2,4,0,0,0,2,2],[38.21,"+"]],["LBY","Libya",44.44,[20211108,2,0,2,4,0,0,0,2,3],[8.1,"+"]],["MLI","Mali",44.44,[20211031,1,2,2,3,0,0,0,1,3],[0.23,"="]],["SGP","Singapore",44.44,[20211106,1,1,1,4,0,1,0,2,4],[48.12,"-"]],["ABW","Aruba",44.44,[20211024,1,1,1,4,0,1,0,2,2],[12.04,"+"]],["ZWE","Zimbabwe",44.44,[20211101,0,2,1,3,1,1,0,1,4],[0.2,"+"]],["LBR","Liberia",44.44,[20211101,1,2,1,3,1,0,0,1,3],[0.01,"="]],["IND","India",44.91,[20211108,2,1,1,2,0,2,2,2,4],[0.83,"="]],["ZAF","South Africa",45.37,[20211108,1,1,1,2,1,2,0,1,3],[0.45,"-"]],["BEL","Belgium",45.83,[20211108,1,2,2,3,0,0,0,3,2],[86.52,"-"]],["LTU","Lithuania",46.3,[20211105,1,1,2,4,0,0,0,2,2],[100.84,"+"]],["LUX","Luxembourg",46.3,[20211108,1,1,1,3,1,0,0,3,2],[37.34,"+"]],["ALB","Albania",46.3,[20211108,2,1,2,3,0,2,0,1,2],[19.97,"+"]],["CYP","Cyprus",46.3,[20211108,1,1,1,3,1,0,0,3,2],[18.03,"+"]],["GUM","Guam",46.3,[20211108,1,1,2,4,0,0,0,2,3],[]],["CHE","Switzerland",46.3,[20211106,1,1,2,3,0,0,0,3,2],[32.3,"+"]],["TLS","Timor-Leste",46.3,[20211107,0,2,2,3,2,1,0,2,3],[0.18,"+"]],["GTM","Guatemala",46.76,[20211108,2,1,2,3,2,0,0,1,4],[3.92,"-"]],["GEO","Georgia",47.22,[20211108,1,2,2,4,0,0,0,1,3],[121.23,"-"]],["BTN","Bhutan",47.22,[20211108,2,1,1,3,0,0,1,2,3],[0.02,"-"]],["BMU","Bermuda",47.22,[20211102,1,1,1,3,1,1,0,2,2],[7.11,"="]],["PSE","Palestine",47.22,[20211101,0,0,2,4,0,0,2,2,4],[]],["JPN","Japan",47.22,[20211106,1,1,1,1,0,1,1,4,1],[0.14,"-"]],["ARE","United Arab Emirates",47.69,[20211101,1,1,1,3,1,0,2,1,2],[0.74,"="]],["NGA","Nigeria",48.15,[20211031,0,2,1,3,1,2,0,1,3],[0.04,"-"]],["IRL","Ireland",48.15,[20211106,1,2,2,1,0,1,0,3,3],[73.78,"-"]],["MOZ","Mozambique",48.15,[20211108,0,1,2,3,1,2,0,1,3],[0.03,"="]],["CPV","Cape Verde",49.07,[20211031,0,1,1,4,0,1,2,1,2],[1.28,"+"]],["KGZ","Kyrgyz Republic",49.07,[20211108,1,1,2,4,0,0,1,1,2],[1.06,"+"]],["TWN","Taiwan",49.07,[20211018,0,2,1,3,1,0,1,2,3],[0.02,"="]],["BHS","Bahamas",51.39,[20211021,2,2,1,4,0,2,2,1,4],[4.18,"-"]],["RWA","Rwanda",51.85,[20211025,1,2,1,3,1,2,0,1,3],[0.22,"-"]],["GAB","Gabon",51.85,[20211107,0,0,2,3,1,2,1,1,3],[3.64,"+"]],["KWT","Kuwait",51.85,[20211025,1,1,1,3,0,0,2,3,4],[0.55,"+"]],["DOM","Dominican Republic",52.78,[20211106,1,1,1,4,1,1,1,1,3],[9.08,"+"]],["QAT","Qatar",52.78,[20211031,1,1,1,3,1,1,1,2,2],[4.52,"+"]],["HKG","Hong Kong",52.78,[20211108,1,1,1,3,1,1,1,2,2],[0.04,"="]],["SVN","Slovenia",53.7,[20211108,1,2,2,4,0,1,0,2,2],[160.77,"+"]],["BGR","Bulgaria",53.7,[20211101,2,2,2,3,0,0,0,3,3],[56.69,"-"]],["CRI","Costa Rica",54.63,[20211101,2,2,2,2,0,1,1,1,3],[5.21,"-"]],["TUR","Turkey",54.63,[20211024,1,1,1,0,2,0,2,3,4],[33.23,"-"]],["LKA","Sri Lanka",54.63,[20211106,2,1,2,3,0,1,1,2,3],[3.04,"+"]],["THA","Thailand",55.09,[20211108,1,1,2,3,0,2,2,3,4],[11.06,"+"]],["SWZ","Eswatini",55.56,[20211101,3,1,1,3,0,2,1,1,4],[0.21,"-"]],["USA","United States",56.02,[20211105,2,2,2,4,1,1,1,3,3],[22.93,"+"]],["RUS","Russia",56.02,[20211101,3,1,2,3,0,1,2,2,2],[26.44,"-"]],["ISR","Israel",56.48,[20211105,2,2,2,3,0,0,0,4,2],[5.62,"-"]],["ROU","Romania",57.41,[20211101,3,1,1,2,1,1,1,2,3],[36.18,"-"]],["AUT","Austria",57.41,[20211105,2,2,1,3,1,0,2,2,2],[101.15,"+"]],["SAU","Saudi Arabia",57.41,[20211025,1,1,2,3,1,0,1,3,2],[0.12,"-"]],["IDN","Indonesia",57.87,[20211101,1,1,2,3,1,1,2,3,3],[0.16,"-"]],["ECU","Ecuador",57.87,[20211108,2,1,1,4,1,1,2,2,3],[3.0,"="]],["UKR","Ukraine",58.33,[20211109,2,1,1,3,2,0,2,1,3],[52.14,"-"]],["MRT","Mauritania",58.33,[20211108,0,1,2,4,1,2,1,1,3],[1.21,"+"]],["GIN","Guinea",59.26,[20211108,1,2,2,3,1,2,1,1,3],[0.03,"-"]],["MYS","Malaysia",59.26,[20211101,2,1,2,4,1,1,2,2,3],[15.83,"+"]],["AUS","Australia",60.65,[20211105,1,2,2,4,1,0,2,3,3],[5.5,"+"]],["SYR","Syria",60.65,[20211104,3,3,2,3,1,2,1,1,3],[1.04,"-"]],["PAN","Panama",61.11,[20211106,2,3,2,4,0,2,0,2,4],[2.97,"+"]],["PER","Peru",61.11,[20211104,2,2,2,4,0,2,1,3,4],[2.95,"+"]],["SUR","Suriname",61.11,[20211105,2,2,2,4,0,2,0,2,4],[15.71,"-"]],["KHM","Cambodia",61.57,[20211024,2,2,2,4,0,2,2,2,3],[0.43,"+"]],["ERI","Eritrea",62.04,[20211110,1,1,2,3,1,2,0,4,3],[0.49,"+"]],["BLZ","Belize",62.04,[20211026,3,2,1,4,0,2,1,1,4],[37.54,"+"]],["AGO","Angola",63.43,[20211108,0,2,2,4,1,1,2,4,3],[0.12,"="]],["HTI","Haiti",64.81,[20211031,1,1,2,4,1,2,1,2,3],[0.29,"="]],["CUB","Cuba",65.28,[20211031,3,1,2,4,2,2,2,1,4],[4.52,"-"]],["SYC","Seychelles",65.74,[20211108,1,2,2,4,1,2,2,1,1],[32.68,"+"]],["MAR","Morocco",65.74,[20211022,1,2,2,3,0,2,2,2,3],[0.39,"-"]],["GUY","Guyana",65.74,[20211031,1,2,2,4,1,2,0,3,4],[11.61,"+"]],["PNG","Papua New Guinea",65.74,[20211101,2,2,2,3,2,1,2,2,3],[2.03,"-"]],["TKM","Turkmenistan",66.67,[20211102,1,2,2,4,1,2,2,4,3],[]],["FRA","France",66.67,[20211105,1,2,2,3,1,0,2,3,2],[13.89,"+"]],["CAN","Canada",67.13,[20211105,2,3,2,4,1,1,2,3,3],[6.64,"+"]],["BRB","Barbados",67.59,[20211031,3,2,2,3,1,2,0,2,3],[107.33,"-"]],["VNM","Vietnam",68.98,[20211101,3,2,2,3,2,2,2,2,3],[7.82,"+"]],["TTO","Trinidad and Tobago",69.44,[20211031,2,2,2,4,0,2,2,1,3],[24.18,"+"]],["IRN","Iran",69.91,[20211031,3,3,2,4,0,2,2,2,3],[9.77,"-"]],["LVA","Latvia",70.37,[20211108,2,3,2,4,1,2,0,2,3],[82.36,"-"]],["ITA","Italy",71.3,[20211105,2,3,2,1,1,2,2,3,3],[10.38,"+"]],["KAZ","Kazakhstan",71.3,[20211105,1,1,2,4,2,2,2,3,3],[6.99,"-"]],["PHL","Philippines",74.54,[20211107,3,2,2,4,2,2,2,3,4],[1.67,"-"]],["LAO","Laos",75.0,[20211101,3,2,2,3,2,2,2,2,3],[14.02,"+"]],["VEN","Venezuela",75.0,[20211107,3,2,2,4,1,1,1,3,4],[3.26,"+"]],["IRQ","Iraq",75.93,[20211029,3,2,2,3,0,2,2,3,3],[2.53,"-"]],["UGA","Uganda",75.93,[20211101,3,2,2,2,1,2,2,2,3],[0.12,"="]],["CHN","China",76.39,[20211108,3,3,2,4,1,3,2,2,2],[0.0,"-"]],["HND","Honduras",76.85,[20211109,2,2,2,4,2,1,2,1,3],[1.0,"-"]],["GRC","Greece",79.17,[20211108,1,2,2,4,2,2,2,3,2],[65.38,"+"]],["DMA","Dominica",79.63,[20211009,3,3,2,4,1,2,1,2,2],[70.05,"+"]],["BRN","Brunei",79.63,[20211110,3,3,2,4,1,2,0,4,4],[16.85,"-"]],["NZL","New Zealand",81.02,[20211108,3,3,2,4,2,2,2,4,3],[3.36,"+"]],["MMR","Myanmar",85.19,[20211108,3,2,2,4,1,2,2,4,4],[1.78,"+"]],["JAM","Jamaica",86.11,[20211019,3,3,2,4,1,3,2,3,3],[2.9,"-"]],["FJI","Fiji",90.74,[20211108,3,3,2,4,2,2,2,2,2],[2.34,"+"]]];