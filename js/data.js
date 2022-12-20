const dataUpdate="2022.12.20";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["PNG","Papua New Guinea",0.0,[20221218,0,0,0,0,0,0,0,0,2],[0.16,"-"],3.0],["AFG","Afghanistan",0.0,[20221218,0,0,0,0,0,0,0,0,0],[0.14,"-"],25.81],["KIR","Kiribati",0.0,[20221212,0,0,0,0,0,0,0,0,0],[0.0,"="],56.3],["DZA","Algeria",0.0,[20221219,0,0,0,0,0,0,0,0,3],[0.01,"="],14.43],["JOR","Jordan",0.0,[20221218,0,0,0,0,0,0,0,0,2],[0.0,"="],40.39],["LVA","Latvia",0.0,[20221213,0,0,0,0,0,0,0,0,2],[17.76,"-"],70.57],["BWA","Botswana",0.0,[20221218,0,0,0,0,0,0,0,0,0],[2.73,"-"],54.18],["BTN","Bhutan",0.0,[20221204,0,0,0,0,0,0,0,0,1],[0.0,"-"],86.61],["TZA","Tanzania",2.78,[20221128,0,0,0,0,0,0,0,1,0],[0.31,"="],41.92],["ZMB","Zambia",2.78,[20221213,0,0,0,0,0,0,0,1,3],[0.0,"="],40.92],["SWZ","Eswatini",5.56,[20221218,0,0,0,0,0,0,0,0,1],[1.03,"="],40.83],["CAN","Canada",5.56,[20221218,0,0,0,0,0,0,0,0,2],[4.7,"-"],82.46],["THA","Thailand",5.56,[20221211,0,0,0,0,0,0,0,0,1],[0.7,"="],74.6],["MUS","Mauritius",5.56,[20221122,0,0,0,0,0,0,0,0,2],[33.76,"-"],83.74],["DOM","Dominican Republic",5.56,[20221208,0,0,0,0,0,0,0,0,0],[5.99,"="],54.05],["CHE","Switzerland",5.56,[20221129,0,0,0,0,0,0,0,0,0],[27.12,"="],68.78],["BLR","Belarus",5.56,[20221121,0,0,0,0,0,0,0,0,0],[0.0,"="],67.14],["NAM","Namibia",5.56,[20221129,0,0,0,0,0,0,0,0,0],[0.0,"="],20.34],["YEM","Yemen",5.56,[20221201,0,0,1,0,0,0,0,0,0],[0.0,"="],2.25],["HUN","Hungary",5.56,[20221107,0,0,0,0,0,0,0,0,2],[7.68,"="],62.27],["KAZ","Kazakhstan",5.56,[20221218,0,0,0,0,0,0,0,0,2],[0.0,"="],54.72],["ISL","Iceland",5.56,[20221218,0,0,0,0,0,0,0,0,0],[0.0,"="],77.82],["SDN","Sudan",5.56,[20221211,0,0,0,0,0,0,0,0,0],[0.0,"="],17.71],["BEN","Benin",5.56,[20221218,0,0,0,0,0,0,0,0,2],[0.0,"="],20.17],["AND","Andorra",5.56,[20221125,0,0,0,0,0,0,0,0,2],[29.58,"="],66.99],["UZB","Uzbekistan",5.56,[20221128,0,0,0,0,0,0,0,0,1],[0.29,"-"],50.62],["GEO","Georgia",5.56,[20221211,0,0,0,0,0,0,0,0,2],[1.54,"="],34.08],["GBR","United Kingdom",5.56,[20221205,0,0,0,0,0,0,0,0,1],[7.71,"="],75.19],["MRT","Mauritania",8.33,[20221205,0,0,0,0,0,0,0,1,1],[0.01,"="],31.54],["TJK","Tajikistan",8.33,[20221211,0,0,0,0,0,0,0,1,0],[0.0,"="],51.45],["SOM","Somalia",8.33,[20221212,0,0,0,0,0,0,0,1,2],[0.0,"="],33.74],["BFA","Burkina Faso",8.33,[20221205,0,0,0,0,0,0,0,1,3],[0.0,"="],14.71],["DJI","Djibouti",8.33,[20221212,0,0,0,0,1,0,0,1,3],[0.0,"="],26.5],["POL","Poland",9.26,[20221122,1,0,0,0,0,0,0,0,2],[1.52,"-"],56.74],["NER","Niger",10.56,[20221218,0,0,0,0,0,0,0,1,2],[0.0,"="],19.75],["LUX","Luxembourg",11.11,[20221218,0,0,0,0,0,0,0,0,0],[34.6,"+"],71.42],["LTU","Lithuania",11.11,[20221126,0,0,0,0,0,0,0,0,1],[14.87,"+"],68.35],["KGZ","Kyrgyz Republic",11.11,[20221205,0,0,0,0,0,0,0,-1,1],[0.01,"-"],20.5],["SSD","South Sudan",11.11,[20221218,0,0,0,0,0,0,0,2,3],[0.02,"="],19.43],["LIE","Liechtenstein",11.11,[20221129,0,0,0,0,0,0,0,0,2],[37.09,"+"],67.23],["IRL","Ireland",11.11,[20221205,0,0,0,0,0,0,0,0,1],[6.68,"="],80.75],["KWT","Kuwait",11.11,[20221218,0,0,0,0,0,0,0,0,1],[0.0,"="],78.31],["LSO","Lesotho",11.11,[20221128,0,0,0,0,0,0,0,0,1],[0.0,"="],40.13],["TTO","Trinidad and Tobago",11.11,[20221128,0,0,0,0,0,0,0,0,1],[1.84,"="],46.82],["KOR","South Korea",11.11,[20221218,0,0,0,0,0,0,0,0,2],[128.59,"+"],86.28],["MDA","Moldova",11.11,[20221118,0,0,0,0,0,0,0,0,1],[1.21,"="],32.79],["SRB","Serbia",11.11,[20221129,0,0,0,0,0,0,0,0,2],[7.93,"-"],47.71],["SMR","San Marino",11.11,[20221115,0,0,0,0,0,0,0,0,1],[83.36,"-"],70.15],["SVK","Slovak Republic",11.11,[20221212,0,0,0,0,0,0,0,0,2],[4.62,"="],45.68],["SVN","Slovenia",11.11,[20221114,0,0,0,0,0,0,0,0,2],[87.58,"-"],57.66],["SWE","Sweden",11.11,[20221128,0,0,0,0,0,0,0,0,0],[16.03,"="],72.35],["SAU","Saudi Arabia",11.11,[20221201,0,0,0,0,0,0,0,0,2],[0.13,"="],69.63],["ROU","Romania",11.11,[20221114,0,0,0,0,0,0,0,0,1],[2.51,"+"],41.28],["QAT","Qatar",11.11,[20221212,0,0,0,0,0,0,0,0,2],[10.0,"-"],105.73],["PSE","Palestine",11.11,[20221204,0,0,0,0,0,0,0,0,4],[],33.85],["PRY","Paraguay",11.11,[20221218,0,0,0,0,0,0,0,0,2],[4.44,"="],52.06],["MCO","Monaco",11.11,[20221128,0,0,0,0,0,0,0,0,2],[55.7,"+"],70.34],["PRT","Portugal",11.11,[20221128,0,0,0,0,0,0,0,0,0],[2.64,"="],86.5],["OMN","Oman",11.11,[20221130,0,0,0,0,0,0,0,0,0],[0.0,"="],66.62],["NZL","New Zealand",11.11,[20221120,0,0,0,0,0,0,0,0,-1],[126.69,"+"],79.79],["NOR","Norway",11.11,[20221209,0,0,0,0,0,0,0,-1,1],[3.9,"+"],74.61],["NLD","Netherlands",11.11,[20221209,0,0,0,0,0,0,0,0,0],[4.91,"="],68.08],["NGA","Nigeria",11.11,[20221218,0,0,0,0,0,0,0,0,0],[0.0,"-"],23.52],["MYS","Malaysia",11.11,[20221212,0,0,0,0,0,0,0,0,1],[3.15,"-"],81.12],["MNG","Mongolia",11.11,[20221218,0,0,0,0,0,0,0,0,1],[57.04,"+"],64.02],["SYR","Syria",11.11,[20221217,0,0,0,0,0,0,0,0,3],[0.0,"-"],9.51],["MLT","Malta",11.11,[20221218,0,0,0,0,0,0,0,0,2],[4.72,"+"],88.37],["MDG","Madagascar",11.11,[20221206,0,0,0,0,0,0,0,0,1],[0.03,"="],6.47],["PER","Peru",11.11,[20221128,0,0,0,0,0,0,0,0,1],[23.26,"-"],83.39],["HRV","Croatia",11.11,[20221218,0,0,0,0,0,0,0,0,2],[8.02,"-"],55.84],["TUR","Turkey",11.11,[20221128,0,0,0,0,0,0,0,0,2],[0.0,"="],62.31],["CPV","Cape Verde",11.11,[20221218,0,0,0,0,0,0,0,0,2],[1.1,"-"],52.05],["CRI","Costa Rica",11.11,[20221205,0,0,0,0,0,0,0,0,2],[9.96,"="],82.68],["DNK","Denmark",11.11,[20221117,0,0,0,0,0,0,0,0,0],[17.39,"+"],81.0],["EGY","Egypt",11.11,[20221217,0,0,0,0,0,0,0,0,3],[0.0,"="],36.08],["ESP","Spain",11.11,[20221215,0,0,0,0,0,0,0,0,2],[5.68,"="],85.49],["EST","Estonia",11.11,[20221218,0,0,0,0,0,0,0,0,1],[6.96,"="],63.94],["FRA","France",11.11,[20221130,0,0,0,0,0,0,0,0,0],[84.2,"-"],78.34],["CYP","Cyprus",11.11,[20221206,0,0,0,0,0,0,0,0,1],[40.94,"="],72.07],["BRN","Brunei",11.11,[20221213,0,0,0,0,0,0,0,0,2],[99.6,"="],99.32],["GAB","Gabon",11.11,[20221127,0,0,0,0,0,0,0,0,3],[0.0,"="],10.77],["BRB","Barbados",11.11,[20221211,0,0,0,0,0,0,0,0,2],[26.25,"="],55.02],["BLZ","Belize",11.11,[20221118,0,0,0,0,0,0,0,0,0],[10.74,"+"],54.59],["FRO","Faeroe Islands",11.11,[20221127,0,0,0,0,0,0,0,0,0],[0.0,"="],76.99],["BHR","Bahrain",11.11,[20221206,0,0,0,0,0,0,0,0,2],[3.22,"-"],83.32],["ALB","Albania",11.11,[20221216,0,0,0,0,0,0,0,0,0],[0.59,"+"],44.65],["GRL","Greenland",11.11,[20221127,0,0,0,0,0,0,0,0,1],[0.0,"="],68.17],["VUT","Vanuatu",11.11,[20221202,0,0,0,0,0,0,0,0,0],[0.0,"="],40.31],["ZAF","South Africa",11.11,[20221209,0,0,0,0,0,0,0,0,0],[0.32,"="],32.66],["AUS","Australia",11.11,[20221213,0,0,0,0,0,0,0,0,0],[62.93,"-"],82.73],["BGR","Bulgaria",11.11,[20221211,0,0,0,0,0,0,0,0,0],[2.5,"-"],30.59],["CZE","Czech Republic",11.11,[20221206,0,0,0,0,0,0,0,0,0],[7.32,"="],65.67],["ARG","Argentina",13.44,[20221119,0,0,0,0,0,0,0,0,1],[19.68,"+"],83.27],["CHL","Chile",13.89,[20221212,0,0,0,0,0,0,0,1,2],[18.34,"+"],90.26],["NIC","Nicaragua",13.89,[20221206,0,0,0,0,0,0,0,1,0],[0.1,"="],85.13],["VEN","Venezuela",13.89,[20221213,0,0,0,0,0,0,0,1,3],[0.38,"+"],52.88],["CIV","Cote d'Ivoire",13.89,[20221205,0,0,0,0,0,0,0,1,2],[0.01,"="],37.04],["BDI","Burundi",13.89,[20221218,0,0,0,0,0,0,0,1,2],[0.25,"="],0.21],["CMR","Cameroon",13.89,[20221119,0,0,0,0,0,0,0,1,0],[0.0,"="],9.78],["BGD","Bangladesh",13.89,[20221205,0,0,0,0,0,0,0,1,4],[0.01,"="],73.41],["SYC","Seychelles",13.89,[20221205,0,0,0,0,0,0,0,1,3],[41.69,"="],76.19],["COG","Congo",13.89,[20221218,0,0,0,0,0,0,0,1,0],[0.0,"="],10.96],["ARE","United Arab Emirates",13.89,[20221218,0,0,0,0,0,0,0,1,2],[0.88,"-"],103.72],["CUB","Cuba",13.89,[20221204,0,0,0,0,0,0,0,1,2],[0.17,"+"],89.22],["CAF","Central African Republic",13.89,[20221201,0,0,0,0,0,0,0,1,3],[0.0,"="],34.68],["UKR","Ukraine",13.89,[20221205,0,0,0,0,0,0,0,1,3],[1.53,"="],38.17],["TCD","Chad",13.89,[20221204,0,0,0,0,0,0,0,1,3],[0.0,"="],20.44],["GMB","Gambia",13.89,[20221212,0,0,0,0,0,0,0,1,3],[0.0,"="],16.79],["LBY","Libya",13.89,[20221204,0,0,0,0,0,0,0,1,1],[0.04,"+"],18.05],["URY","Uruguay",13.89,[20221121,0,0,0,0,0,0,0,1,1],[20.32,"+"],84.57],["ISR","Israel",14.81,[20221218,1,0,0,0,0,0,0,0,2],[17.91,"+"],65.16],["DEU","Germany",14.81,[20221213,0,0,0,0,0,1,0,0,2],[38.06,"-"],76.19],["BEL","Belgium",14.81,[20221117,0,1,0,0,0,0,0,0,2],[4.71,"-"],78.64],["PAN","Panama",14.81,[20221125,1,0,1,0,0,0,0,0,2],[38.77,"+"],71.67],["GRC","Greece",14.81,[20221218,1,0,0,0,0,0,0,0,2],[71.32,"="],73.59],["ECU","Ecuador",14.81,[20221218,0,0,0,0,0,1,0,0,2],[5.45,"="],78.94],["KHM","Cambodia",14.81,[20221212,1,0,0,0,0,0,0,0,2],[0.12,"="],87.04],["TON","Tonga",16.18,[20221217,0,0,0,0,0,0,0,1,1],[0.0,"="],72.49],["LBN","Lebanon",16.67,[20221212,0,0,0,0,1,0,0,0,2],[1.08,"+"],43.97],["JAM","Jamaica",16.67,[20221128,0,0,1,0,0,0,0,0,1],[0.0,"="],26.25],["AGO","Angola",17.03,[20221205,0,2,0,0,0,0,0,1,2],[0.06,"="],23.02],["MOZ","Mozambique",17.59,[20221205,0,1,0,0,0,0,0,1,2],[0.0,"-"],53.82],["SGP","Singapore",17.59,[20221205,1,0,0,0,0,0,0,1,2],[20.19,"-"],90.75],["MEX","Mexico",17.59,[20221113,1,0,0,0,0,0,0,1,2],[2.92,"-"],64.82],["FIN","Finland",18.52,[20221117,1,1,0,0,0,0,0,0,1],[27.17,"="],78.45],["GUY","Guyana",18.52,[20221129,1,1,0,0,0,0,0,0,1],[0.0,"-"],47.0],["ITA","Italy",19.21,[20221212,0,1,0,0,-1,1,0,0,2],[41.26,"="],81.26],["LKA","Sri Lanka",19.44,[20221217,0,0,1,1,0,0,0,0,1],[0.04,"="],67.57],["COL","Colombia",19.44,[20221202,1,1,0,0,0,0,0,1,1],[1.48,"="],71.04],["ETH","Ethiopia",19.44,[20221214,0,0,0,3,0,0,0,0,3],[0.12,"+"],29.75],["SEN","Senegal",19.44,[20221212,0,0,0,0,1,0,0,1,3],[0.0,"="],7.83],["TLS","Timor-Leste",20.6,[20221208,0,0,0,0,0,0,1,1,3],[0.14,"-"],58.22],["SUR","Suriname",21.3,[20221212,1,1,0,0,0,0,0,1,2],[0.0,"="],38.49],["TWN","Taiwan",21.3,[20221205,1,1,0,0,0,0,0,1,2],[64.4,"-"],86.19],["NPL","Nepal",21.67,[20221218,0,0,0,1,0,0,0,1,4],[0.01,"="],78.4],["BRA","Brazil",22.22,[20221214,0,0,0,0,0,0,2,1,2],[20.25,"-"],81.21],["RUS","Russia",22.69,[20221121,0,1,2,1,0,0,0,0,2],[4.94,"-"],54.25],["KEN","Kenya",22.78,[20221218,0,0,2,0,0,0,0,1,0],[0.06,"="],19.94],["HND","Honduras",23.15,[20221207,0,1,1,0,0,0,0,1,3],[2.35,"-"],55.05],["VNM","Vietnam",23.15,[20221212,0,1,1,1,0,0,0,0,2],[-0.95,"-"],86.81],["USA","United States",23.18,[20221213,1,1,0,0,0,1,0,1,2],[20.31,"+"],68.92],["BMU","Bermuda",24.07,[20221121,1,1,1,0,0,0,0,0,2],[8.72,"="],74.22],["DMA","Dominica",24.07,[20221205,1,1,1,0,0,0,0,0,2],[0.0,"="],42.14],["MAR","Morocco",24.46,[20221204,0,1,0,0,0,0,0,0,3],[0.26,"="],62.78],["COD","Democratic Republic of Congo",25.0,[20221212,0,0,0,0,0,0,2,1,1],[0.04,"-"],3.76],["MLI","Mali",25.0,[20221216,0,0,2,0,0,0,0,1,0],[0.0,"="],10.98],["RKS","Kosovo",25.04,[20221218,2,2,2,0,0,0,0,0,1],[0.11,"="],46.29],["PHL","Philippines",25.41,[20221218,0,1,1,0,1,0,0,1,2],[0.92,"-"],63.83],["GIN","Guinea",25.45,[20221205,0,2,2,0,0,0,2,1,2],[0.04,"="],23.77],["BOL","Bolivia",25.46,[20221218,1,1,1,1,0,0,0,1,2],[17.79,"+"],50.4],["RWA","Rwanda",25.64,[20221206,0,0,0,0,0,0,0,0,0],[0.0,"="],67.32],["FJI","Fiji",25.74,[20221213,0,1,1,0,0,0,0,1,2],[1.15,"+"],68.89],["ABW","Aruba",25.93,[20221218,0,1,1,2,0,0,0,0,2],[0.0,"="],78.87],["BIH","Bosnia and Herzegovina",25.93,[20221212,1,0,1,2,0,0,0,0,2],[0.48,"+"],26.17],["UGA","Uganda",26.85,[20221212,0,2,1,0,0,0,0,1,1],[0.0,"="],27.41],["SLV","El Salvador",26.85,[20221205,1,1,1,1,0,0,0,0,2],[0.0,"="],68.56],["GRD","Grenada",29.38,[20220328,1,0,0,3,0,0,0,1,3],[1.02,"="],31.07],["LBR","Liberia",29.7,[20221218,0,1,1,0,0,0,0,1,4],[0.02,"="],69.23],["TGO","Togo",30.1,[20221211,0,0,1,3,0,0,0,1,3],[0.0,"="],16.45],["SLB","Solomon Islands",30.46,[20221213,1,1,1,0,0,0,0,1,3],[0.0,"="],35.12],["JPN","Japan",31.48,[20221218,1,1,1,1,0,1,1,1,1],[119.19,"+"],83.15],["HTI","Haiti",31.48,[20221218,0,1,1,3,0,0,0,1,2],[0.0,"="],2.05],["IDN","Indonesia",32.05,[20221207,1,1,0,0,0,0,0,1,2],[0.54,"-"],62.54],["BHS","Bahamas",32.41,[20221213,1,1,1,0,1,0,0,1,2],[0.0,"="],40.4],["GHA","Ghana",33.54,[20221205,0,2,2,0,0,0,0,1,1],[0.01,"+"],26.82],["IND","India",34.26,[20221212,0,1,1,0,0,2,2,0,3],[0.01,"="],67.11],["AUT","Austria",35.19,[20221218,2,2,1,2,0,0,0,0,2],[55.32,"-"],76.32],["GTM","Guatemala",36.57,[20221128,2,0,1,3,1,0,0,0,2],[10.32,"-"],39.38],["LAO","Laos",38.65,[20221210,1,1,1,1,1,0,0,1,2],[0.49,"-"],69.36],["SLE","Sierra Leone",38.86,[20221212,2,2,2,0,1,0,0,1,3],[0.0,"="],35.16],["MAC","Macao",39.81,[20221217,2,1,1,2,1,0,0,1,3],[],90.53],["PAK","Pakistan",40.3,[20221211,0,0,0,0,0,0,0,1,2],[0.0,"="],56.11],["AZE","Azerbaijan",40.35,[20221205,0,3,2,0,0,0,2,1,0],[0.76,"="],46.94],["MMR","Myanmar",40.74,[20221218,1,1,0,0,1,2,2,1,3],[0.03,"="],50.84],["MWI","Malawi",40.74,[20221217,1,1,1,3,1,0,0,1,3],[0.0,"="],15.16],["IRQ","Iraq",41.37,[20221218,0,2,2,1,0,0,0,1,2],[0.26,"+"],17.84],["TUN","Tunisia",41.6,[20221208,0,1,2,4,0,0,0,1,3],[0.17,"="],51.74],["HKG","Hong Kong",42.28,[20221216,2,1,1,3,0,0,0,2,2],[206.9,"+"],90.56],["ZWE","Zimbabwe",53.7,[20221218,1,1,1,3,1,2,1,1,4],[0.0,"="],29.11],["IRN","Iran",53.94,[20221216,1,2,2,4,0,0,2,1,2],[0.05,"="],66.07],["CHN","China",71.76,[20221204,3,3,2,4,2,1,2,2,3],[0.2,"-"],89.35],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[5.37,"-"],45.43]];