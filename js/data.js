const dataUpdate="2022.12.23";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["BTN","Bhutan",0.0,[20221204,0,0,0,0,0,0,0,0,1],[0.06,"="],86.61],["AFG","Afghanistan",0.0,[20221218,0,0,0,0,0,0,0,0,0],[0.13,"-"],25.81],["KIR","Kiribati",0.0,[20221212,0,0,0,0,0,0,0,0,0],[0.0,"="],56.3],["LVA","Latvia",0.0,[20221213,0,0,0,0,0,0,0,0,2],[17.15,"-"],70.57],["PNG","Papua New Guinea",0.0,[20221219,0,0,0,0,0,0,0,0,2],[0.19,"-"],3.0],["JOR","Jordan",0.0,[20221219,0,0,0,0,0,0,0,0,2],[0.0,"="],40.39],["DZA","Algeria",0.0,[20221220,0,0,0,0,0,0,0,0,3],[0.01,"="],14.43],["BWA","Botswana",0.0,[20221221,0,0,0,0,0,0,0,0,0],[2.73,"="],54.18],["TZA","Tanzania",2.78,[20221128,0,0,0,0,0,0,0,1,0],[0.31,"="],41.92],["ZMB","Zambia",2.78,[20221213,0,0,0,0,0,0,0,1,3],[0.12,"+"],42.74],["DOM","Dominican Republic",5.56,[20221208,0,0,0,0,0,0,0,0,0],[1.03,"="],54.06],["SWZ","Eswatini",5.56,[20221219,0,0,0,0,0,0,0,0,1],[0.37,"="],40.83],["MDA","Moldova",5.56,[20221221,0,0,0,0,0,0,-1,0,1],[1.59,"="],32.79],["CAN","Canada",5.56,[20221219,0,0,0,0,0,0,0,0,2],[7.26,"+"],82.5],["CHE","Switzerland",5.56,[20221129,0,0,0,0,0,0,0,0,0],[22.79,"="],68.78],["BLR","Belarus",5.56,[20221121,0,0,0,0,0,0,0,0,0],[0.0,"="],67.14],["MUS","Mauritius",5.56,[20221122,0,0,0,0,0,0,0,0,2],[22.25,"="],83.74],["HUN","Hungary",5.56,[20221107,0,0,0,0,0,0,0,0,2],[7.65,"="],62.27],["THA","Thailand",5.56,[20221219,0,0,0,0,0,0,0,0,1],[0.7,"="],74.6],["GBR","United Kingdom",5.56,[20221205,0,0,0,0,0,0,0,0,1],[9.97,"+"],75.19],["ISL","Iceland",5.56,[20221221,0,0,0,0,0,0,0,0,0],[36.55,"="],77.82],["AND","Andorra",5.56,[20221125,0,0,0,0,0,0,0,0,2],[14.79,"="],66.99],["KAZ","Kazakhstan",5.56,[20221218,0,0,0,0,0,0,0,0,2],[0.0,"="],54.72],["UZB","Uzbekistan",5.56,[20221128,0,0,0,0,0,0,0,0,1],[0.27,"-"],50.62],["YEM","Yemen",5.56,[20221201,0,0,1,0,0,0,0,0,0],[0.0,"="],2.25],["KHM","Cambodia",5.56,[20221221,0,0,0,0,0,0,0,0,2],[0.1,"-"],87.04],["GEO","Georgia",5.56,[20221211,0,0,0,0,0,0,0,0,2],[2.63,"+"],34.08],["BEN","Benin",5.56,[20221218,0,0,0,0,0,0,0,0,2],[0.0,"="],20.17],["SDN","Sudan",5.56,[20221211,0,0,0,0,0,0,0,0,0],[0.01,"="],17.71],["NAM","Namibia",5.56,[20221129,0,0,0,0,0,0,0,0,0],[1.32,"="],20.34],["TJK","Tajikistan",8.33,[20221211,0,0,0,0,0,0,0,1,0],[0.0,"="],51.45],["SOM","Somalia",8.33,[20221212,0,0,0,0,0,0,0,1,2],[0.0,"="],33.74],["DJI","Djibouti",8.33,[20221212,0,0,0,0,1,0,0,1,3],[0.0,"="],26.5],["MRT","Mauritania",8.33,[20221205,0,0,0,0,0,0,0,1,1],[0.0,"="],31.54],["BFA","Burkina Faso",8.33,[20221205,0,0,0,0,0,0,0,1,3],[0.26,"="],14.71],["CMR","Cameroon",8.33,[20221220,0,0,0,0,0,0,0,1,0],[0.0,"="],9.78],["POL","Poland",9.26,[20221122,1,0,0,0,0,0,0,0,2],[1.44,"+"],56.74],["NER","Niger",10.56,[20221221,0,0,0,0,0,0,0,1,2],[0.02,"="],19.75],["NGA","Nigeria",11.11,[20221221,0,0,0,0,0,0,0,0,0],[0.0,"="],23.52],["SSD","South Sudan",11.11,[20221219,0,0,0,0,0,0,0,2,3],[0.0,"="],19.43],["IRL","Ireland",11.11,[20221205,0,0,0,0,0,0,0,0,1],[8.54,"="],80.76],["TTO","Trinidad and Tobago",11.11,[20221128,0,0,0,0,0,0,0,0,1],[1.78,"="],46.82],["SRB","Serbia",11.11,[20221129,0,0,0,0,0,0,0,0,2],[8.53,"+"],47.71],["SMR","San Marino",11.11,[20221115,0,0,0,0,0,0,0,0,1],[83.36,"="],70.15],["SVK","Slovak Republic",11.11,[20221212,0,0,0,0,0,0,0,0,2],[4.13,"-"],45.68],["KGZ","Kyrgyz Republic",11.11,[20221205,0,0,0,0,0,0,0,-1,1],[0.01,"="],20.51],["SVN","Slovenia",11.11,[20221114,0,0,0,0,0,0,0,0,2],[82.93,"+"],57.66],["SWE","Sweden",11.11,[20221128,0,0,0,0,0,0,0,0,0],[19.06,"+"],72.35],["SAU","Saudi Arabia",11.11,[20221201,0,0,0,0,0,0,0,0,2],[0.12,"="],69.63],["RUS","Russia",11.11,[20221219,0,0,0,0,0,0,0,0,0],[4.9,"-"],54.25],["ROU","Romania",11.11,[20221114,0,0,0,0,0,0,0,0,1],[2.51,"="],41.28],["QAT","Qatar",11.11,[20221212,0,0,0,0,0,0,0,0,2],[7.64,"-"],105.73],["KWT","Kuwait",11.11,[20221219,0,0,0,0,0,0,0,0,1],[0.0,"="],78.31],["PSE","Palestine",11.11,[20221204,0,0,0,0,0,0,0,0,4],[],33.85],["PRY","Paraguay",11.11,[20221219,0,0,0,0,0,0,0,0,2],[4.44,"="],52.06],["LIE","Liechtenstein",11.11,[20221129,0,0,0,0,0,0,0,0,2],[31.1,"="],67.23],["NLD","Netherlands",11.11,[20221209,0,0,0,0,0,0,0,0,0],[4.98,"="],68.08],["MNG","Mongolia",11.11,[20221219,0,0,0,0,0,0,0,0,1],[1.4,"="],64.02],["SYR","Syria",11.11,[20221217,0,0,0,0,0,0,0,0,3],[0.0,"="],9.51],["MLT","Malta",11.11,[20221219,0,0,0,0,0,0,0,0,2],[4.43,"-"],88.37],["MDG","Madagascar",11.11,[20221206,0,0,0,0,0,0,0,0,1],[0.03,"="],6.47],["NOR","Norway",11.11,[20221209,0,0,0,0,0,0,0,-1,1],[4.4,"+"],74.61],["MYS","Malaysia",11.11,[20221212,0,0,0,0,0,0,0,0,1],[2.81,"-"],81.12],["NZL","New Zealand",11.11,[20221120,0,0,0,0,0,0,0,0,-1],[126.86,"+"],79.79],["OMN","Oman",11.11,[20221130,0,0,0,0,0,0,0,0,0],[0.1,"="],66.62],["PER","Peru",11.11,[20221128,0,0,0,0,0,0,0,0,1],[13.47,"-"],83.41],["PRT","Portugal",11.11,[20221128,0,0,0,0,0,0,0,0,0],[3.77,"+"],86.5],["LUX","Luxembourg",11.11,[20221219,0,0,0,0,0,0,0,0,0],[36.9,"+"],71.42],["LTU","Lithuania",11.11,[20221126,0,0,0,0,0,0,0,0,1],[14.6,"+"],68.36],["LSO","Lesotho",11.11,[20221128,0,0,0,0,0,0,0,0,1],[0.0,"="],40.13],["MCO","Monaco",11.11,[20221128,0,0,0,0,0,0,0,0,2],[29.49,"-"],70.34],["KOR","South Korea",11.11,[20221219,0,0,0,0,0,0,0,0,2],[131.48,"+"],86.28],["TUR","Turkey",11.11,[20221128,0,0,0,0,0,0,0,0,2],[0.0,"="],62.31],["BLZ","Belize",11.11,[20221221,0,0,0,0,0,0,0,0,0],[10.74,"="],54.59],["ZAF","South Africa",11.11,[20221209,0,0,0,0,0,0,0,0,0],[0.27,"-"],32.67],["VUT","Vanuatu",11.11,[20221202,0,0,0,0,0,0,0,0,0],[1.49,"+"],40.31],["CYP","Cyprus",11.11,[20221206,0,0,0,0,0,0,0,0,1],[40.94,"="],72.07],["EGY","Egypt",11.11,[20221217,0,0,0,0,0,0,0,0,3],[0.0,"="],36.08],["ESP","Spain",11.11,[20221215,0,0,0,0,0,0,0,0,2],[5.68,"="],85.49],["EST","Estonia",11.11,[20221220,0,0,0,0,0,0,0,0,1],[8.81,"="],63.95],["HRV","Croatia",11.11,[20221219,0,0,0,0,0,0,0,0,2],[8.41,"+"],55.84],["CRI","Costa Rica",11.11,[20221205,0,0,0,0,0,0,0,0,2],[11.3,"="],82.68],["CPV","Cape Verde",11.11,[20221219,0,0,0,0,0,0,0,0,2],[0.9,"+"],52.05],["AUS","Australia",11.11,[20221213,0,0,0,0,0,0,0,0,0],[65.8,"+"],82.73],["FRA","France",11.11,[20221221,0,0,0,0,0,0,0,0,1],[72.37,"-"],78.34],["FRO","Faeroe Islands",11.11,[20221220,0,0,0,0,0,0,0,0,0],[0.0,"="],76.99],["DNK","Denmark",11.11,[20221117,0,0,0,0,0,0,0,0,0],[20.92,"+"],80.98],["GAB","Gabon",11.11,[20221127,0,0,0,0,0,0,0,0,3],[0.0,"="],10.77],["CZE","Czech Republic",11.11,[20221206,0,0,0,0,0,0,0,0,0],[6.51,"-"],65.67],["BHR","Bahrain",11.11,[20221206,0,0,0,0,0,0,0,0,2],[3.69,"+"],83.33],["BGR","Bulgaria",11.11,[20221211,0,0,0,0,0,0,0,0,0],[2.26,"-"],30.59],["BRB","Barbados",11.11,[20221211,0,0,0,0,0,0,0,0,2],[0.0,"="],55.02],["ALB","Albania",11.11,[20221216,0,0,0,0,0,0,0,0,0],[0.47,"-"],44.65],["BRN","Brunei",11.11,[20221213,0,0,0,0,0,0,0,0,2],[76.05,"="],99.32],["GRL","Greenland",11.11,[20221127,0,0,0,0,0,0,0,0,1],[0.0,"="],68.17],["ARG","Argentina",13.44,[20221119,0,0,0,0,0,0,0,0,1],[19.68,"="],83.28],["COG","Congo",13.89,[20221219,0,0,0,0,0,0,0,1,0],[0.0,"="],10.96],["CUB","Cuba",13.89,[20221204,0,0,0,0,0,0,0,1,2],[0.21,"+"],89.22],["VEN","Venezuela",13.89,[20221213,0,0,0,0,0,0,0,1,3],[0.49,"+"],52.88],["SYC","Seychelles",13.89,[20221205,0,0,0,0,0,0,0,1,3],[0.0,"="],76.19],["NIC","Nicaragua",13.89,[20221206,0,0,0,0,0,0,0,1,0],[0.0,"="],85.13],["BGD","Bangladesh",13.89,[20221205,0,0,0,0,0,0,0,1,4],[0.01,"="],73.41],["CIV","Cote d'Ivoire",13.89,[20221205,0,0,0,0,0,0,0,1,2],[0.01,"="],37.04],["BDI","Burundi",13.89,[20221219,0,0,0,0,0,0,0,1,2],[0.29,"="],0.21],["CHL","Chile",13.89,[20221212,0,0,0,0,0,0,0,1,2],[18.83,"+"],90.26],["CAF","Central African Republic",13.89,[20221201,0,0,0,0,0,0,0,1,3],[0.0,"="],34.68],["TCD","Chad",13.89,[20221204,0,0,0,0,0,0,0,1,3],[0.0,"="],20.44],["UKR","Ukraine",13.89,[20221205,0,0,0,0,0,0,0,1,3],[0.12,"-"],38.17],["URY","Uruguay",13.89,[20221121,0,0,0,0,0,0,0,1,1],[20.32,"="],84.59],["LBY","Libya",13.89,[20221204,0,0,0,0,0,0,0,1,1],[0.02,"="],18.05],["GMB","Gambia",13.89,[20221212,0,0,0,0,0,0,0,1,3],[0.0,"="],16.79],["ARE","United Arab Emirates",13.89,[20221219,0,0,0,0,0,0,0,1,2],[0.76,"-"],103.72],["GRC","Greece",14.81,[20221220,1,0,0,0,0,0,0,0,2],[65.45,"="],73.59],["ECU","Ecuador",14.81,[20221219,0,0,0,0,0,1,0,0,2],[5.29,"+"],78.97],["PAN","Panama",14.81,[20221125,1,0,1,0,0,0,0,0,2],[16.52,"="],71.75],["ISR","Israel",14.81,[20221219,1,0,0,0,0,0,0,0,2],[14.98,"-"],65.16],["DEU","Germany",14.81,[20221213,0,0,0,0,0,1,0,0,2],[39.43,"+"],76.19],["BEL","Belgium",14.81,[20221117,0,1,0,0,0,0,0,0,2],[12.26,"-"],78.64],["TON","Tonga",16.18,[20221217,0,0,0,0,0,0,0,1,1],[0.0,"="],72.49],["LBN","Lebanon",16.67,[20221212,0,0,0,0,1,0,0,0,2],[1.05,"+"],43.97],["JAM","Jamaica",16.67,[20221128,0,0,1,0,0,0,0,0,1],[0.43,"="],26.28],["AGO","Angola",17.03,[20221205,0,2,0,0,0,0,0,1,2],[0.01,"="],23.02],["MEX","Mexico",17.59,[20221113,1,0,0,0,0,0,0,1,2],[2.44,"-"],64.82],["SGP","Singapore",17.59,[20221205,1,0,0,0,0,0,0,1,2],[18.74,"-"],90.75],["MOZ","Mozambique",17.59,[20221205,0,1,0,0,0,0,0,1,2],[0.05,"="],53.82],["FIN","Finland",18.52,[20221117,1,1,0,0,0,0,0,0,1],[25.16,"-"],78.46],["GUY","Guyana",18.52,[20221129,1,1,0,0,0,0,0,0,1],[3.74,"="],47.0],["ITA","Italy",19.21,[20221212,0,1,0,0,-1,1,0,0,2],[41.26,"="],81.26],["COL","Colombia",19.44,[20221202,1,1,0,0,0,0,0,1,1],[0.0,"-"],71.04],["ETH","Ethiopia",19.44,[20221214,0,0,0,3,0,0,0,0,3],[0.13,"-"],29.75],["LKA","Sri Lanka",19.44,[20221217,0,0,1,1,0,0,0,0,1],[0.03,"-"],67.57],["SEN","Senegal",19.44,[20221219,0,0,0,0,1,0,0,1,3],[0.0,"="],7.83],["TLS","Timor-Leste",20.6,[20221208,0,0,0,0,0,0,1,1,3],[0.08,"-"],58.22],["SUR","Suriname",21.3,[20221212,1,1,0,0,0,0,0,1,2],[0.0,"="],38.49],["TWN","Taiwan",21.3,[20221205,1,1,0,0,0,0,0,1,2],[67.57,"+"],86.27],["NPL","Nepal",21.67,[20221219,0,0,0,1,0,0,0,1,4],[0.01,"="],78.4],["BRA","Brazil",22.22,[20221214,0,0,0,0,0,0,2,1,2],[19.02,"-"],81.21],["KEN","Kenya",22.78,[20221219,0,0,2,0,0,0,0,1,0],[0.05,"-"],19.94],["HND","Honduras",23.15,[20221207,0,1,1,0,0,0,0,1,3],[2.45,"-"],55.19],["VNM","Vietnam",23.15,[20221212,0,1,1,1,0,0,0,0,2],[0.25,"-"],86.81],["USA","United States",23.18,[20221213,1,1,0,0,0,1,0,1,2],[20.17,"-"],68.97],["DMA","Dominica",24.07,[20221205,1,1,1,0,0,0,0,0,2],[0.0,"="],42.14],["BMU","Bermuda",24.07,[20221121,1,1,1,0,0,0,0,0,2],[8.72,"="],74.22],["MAR","Morocco",24.46,[20221204,0,1,0,0,0,0,0,0,3],[0.2,"-"],62.78],["COD","Democratic Republic of Congo",25.0,[20221221,0,0,0,0,0,0,2,1,3],[0.04,"="],3.76],["MLI","Mali",25.0,[20221216,0,0,2,0,0,0,0,1,0],[0.0,"="],10.98],["RKS","Kosovo",25.04,[20221219,2,2,2,0,0,0,0,0,1],[0.14,"+"],46.29],["PHL","Philippines",25.41,[20221219,0,1,1,0,1,0,0,1,2],[0.83,"-"],63.83],["GIN","Guinea",25.45,[20221205,0,2,2,0,0,0,2,1,2],[0.0,"="],23.77],["BOL","Bolivia",25.46,[20221219,1,1,1,1,0,0,0,1,2],[19.88,"+"],50.4],["RWA","Rwanda",25.64,[20221206,0,0,0,0,0,0,0,0,0],[0.12,"="],67.32],["FJI","Fiji",25.74,[20221213,0,1,1,0,0,0,0,1,2],[1.15,"="],68.89],["ABW","Aruba",25.93,[20221219,0,1,1,2,0,0,0,0,2],[7.89,"="],78.88],["BIH","Bosnia and Herzegovina",25.93,[20221212,1,0,1,2,0,0,0,0,2],[0.49,"+"],26.17],["UGA","Uganda",26.85,[20221212,0,2,1,0,0,0,0,1,1],[0.0,"="],27.41],["SLV","El Salvador",26.85,[20221205,1,1,1,1,0,0,0,0,2],[0.0,"="],68.56],["GRD","Grenada",29.38,[20220328,1,0,0,3,0,0,0,1,3],[0.0,"="],31.07],["LBR","Liberia",29.7,[20221218,0,1,1,0,0,0,0,1,4],[0.01,"="],69.23],["TGO","Togo",30.1,[20221211,0,0,1,3,0,0,0,1,3],[0.0,"="],16.45],["SLB","Solomon Islands",30.46,[20221213,1,1,1,0,0,0,0,1,3],[0.0,"="],35.12],["JPN","Japan",31.48,[20221220,1,1,1,1,0,1,1,1,1],[123.97,"+"],83.17],["HTI","Haiti",31.48,[20221218,0,1,1,3,0,0,0,1,2],[0.02,"+"],2.05],["IDN","Indonesia",32.05,[20221207,1,1,0,0,0,0,0,1,2],[0.41,"-"],62.54],["BHS","Bahamas",32.41,[20221213,1,1,1,0,1,0,0,1,2],[0.0,"="],40.4],["GHA","Ghana",33.54,[20221221,0,2,2,0,0,0,0,1,1],[0.01,"="],26.82],["IND","India",34.26,[20221212,0,1,1,0,0,2,2,0,3],[0.01,"="],67.11],["AUT","Austria",35.19,[20221219,2,2,1,2,0,0,0,0,2],[52.68,"-"],76.32],["GTM","Guatemala",36.57,[20221128,2,0,1,3,1,0,0,0,2],[10.83,"+"],39.38],["LAO","Laos",38.65,[20221210,1,1,1,1,1,0,0,1,2],[0.47,"-"],69.36],["SLE","Sierra Leone",38.86,[20221219,2,2,2,0,1,0,0,1,3],[0.0,"="],35.16],["MAC","Macao",39.81,[20221217,2,1,1,2,1,0,0,1,3],[],91.07],["PAK","Pakistan",40.3,[20221211,0,0,0,0,0,0,0,1,2],[0.01,"+"],56.11],["AZE","Azerbaijan",40.35,[20221220,0,3,2,0,0,0,2,1,0],[0.83,"-"],46.94],["MMR","Myanmar",40.74,[20221218,1,1,0,0,1,2,2,1,3],[0.02,"="],50.84],["MWI","Malawi",40.74,[20221217,1,1,1,3,1,0,0,1,3],[0.0,"="],15.16],["IRQ","Iraq",41.37,[20221219,0,2,2,1,0,0,0,1,2],[0.26,"="],17.84],["TUN","Tunisia",41.6,[20221208,0,1,2,4,0,0,0,1,3],[0.24,"="],51.74],["HKG","Hong Kong",42.28,[20221216,2,1,1,3,0,0,0,2,2],[218.27,"+"],90.56],["ZWE","Zimbabwe",53.7,[20221219,1,1,1,3,1,2,1,1,4],[0.6,"="],29.11],["IRN","Iran",53.94,[20221216,1,2,2,4,0,0,2,1,2],[0.06,"="],66.07],["CHN","China",71.76,[20221204,3,3,2,4,2,1,2,2,3],[0.19,"="],89.35],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4.87,"+"],45.43]];