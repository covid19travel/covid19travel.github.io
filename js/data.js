const dataUpdate="2022.12.09";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["JOR","Jordan",0.0,[20221115,0,0,0,0,0,0,0,0,2],[0.0,"="],40.39],["BTN","Bhutan",0.0,[20221204,0,0,0,0,0,0,0,0,1],[0.17,"="],86.61],["LVA","Latvia",0.0,[20221207,0,0,0,0,0,0,0,0,2],[20.46,"-"],70.57],["DOM","Dominican Republic",0.0,[20221207,0,0,0,0,0,0,0,0,-1],[0.8,"="],54.04],["BWA","Botswana",0.0,[20221117,0,0,0,0,0,0,0,0,0],[1.01,"="],54.14],["KIR","Kiribati",0.0,[20221114,0,0,0,0,0,0,0,0,0],[0.0,"="],56.3],["TZA","Tanzania",2.78,[20221128,0,0,0,0,0,0,0,1,0],[0.04,"="],41.92],["DJI","Djibouti",2.78,[20221122,0,0,0,0,0,0,0,1,3],[0.0,"="],25.71],["DZA","Algeria",2.78,[20221113,0,0,0,0,0,0,0,1,3],[0.01,"="],14.43],["AFG","Afghanistan",2.78,[20221205,0,0,1,0,0,0,0,0,1],[0.14,"-"],25.81],["ZMB","Zambia",2.78,[20221117,0,0,0,0,0,0,0,1,3],[0.0,"="],40.92],["MUS","Mauritius",5.56,[20221122,0,0,0,0,0,0,0,0,2],[52.87,"="],83.74],["BLR","Belarus",5.56,[20221121,0,0,0,0,0,0,0,0,0],[0.0,"="],67.08],["CHE","Switzerland",5.56,[20221129,0,0,0,0,0,0,0,0,0],[30.7,"="],68.78],["CAN","Canada",5.56,[20221205,0,0,0,0,0,0,0,0,2],[6.17,"-"],82.45],["THA","Thailand",5.56,[20221129,0,0,0,0,0,0,0,0,1],[0.88,"="],74.6],["NAM","Namibia",5.56,[20221129,0,0,0,0,0,0,0,0,0],[0.0,"="],20.34],["KAZ","Kazakhstan",5.56,[20221113,0,0,0,0,0,0,0,0,2],[0.87,"-"],54.72],["SWZ","Eswatini",5.56,[20221121,0,0,0,0,0,0,0,0,1],[1.7,"="],40.83],["SOM","Somalia",5.56,[20221128,0,0,0,0,0,0,0,0,2],[0.01,"+"],33.74],["GBR","United Kingdom",5.56,[20221205,0,0,0,0,0,0,0,0,1],[6.17,"+"],75.19],["HUN","Hungary",5.56,[20221107,0,0,0,0,0,0,0,0,2],[6.96,"="],62.27],["AND","Andorra",5.56,[20221125,0,0,0,0,0,0,0,0,2],[41.97,"="],66.99],["SDN","Sudan",5.56,[20221115,0,0,0,0,0,0,0,0,0],[0.01,"="],16.54],["GIN","Guinea",5.56,[20221205,0,0,0,0,0,0,1,1,2],[0.0,"="],22.92],["BEN","Benin",5.56,[20221128,0,0,0,0,0,0,0,0,2],[0.0,"="],20.17],["YEM","Yemen",5.56,[20221201,0,0,1,0,0,0,0,0,0],[0.0,"="],2.25],["UZB","Uzbekistan",5.56,[20221128,0,0,0,0,0,0,0,0,1],[0.44,"-"],50.62],["GEO","Georgia",5.56,[20221122,0,0,0,0,0,0,0,0,2],[2.64,"-"],34.08],["TJK","Tajikistan",8.33,[20221122,0,0,0,0,0,0,0,1,0],[0.0,"="],51.45],["MRT","Mauritania",8.33,[20221205,0,0,0,0,0,0,0,1,1],[0.0,"="],31.54],["BFA","Burkina Faso",8.33,[20221205,0,0,0,0,0,0,0,1,3],[0.0,"="],14.71],["POL","Poland",9.26,[20221122,1,0,0,0,0,0,0,0,2],[1.29,"+"],56.71],["NER","Niger",10.56,[20221114,0,0,0,0,0,0,0,1,2],[0.0,"="],19.75],["SSD","South Sudan",10.57,[20221202,0,0,0,0,0,0,0,1,3],[0.0,"="],19.43],["IRL","Ireland",11.11,[20221205,0,0,0,0,0,0,0,0,1],[5.38,"="],80.75],["TUR","Turkey",11.11,[20221128,0,0,0,0,0,0,0,0,2],[0.0,"="],62.31],["KWT","Kuwait",11.11,[20221121,0,0,0,0,0,0,0,0,1],[0.25,"="],78.3],["KGZ","Kyrgyz Republic",11.11,[20221205,0,0,0,0,0,0,0,-1,1],[0.03,"="],20.47],["TTO","Trinidad and Tobago",11.11,[20221128,0,0,0,0,0,0,0,0,1],[1.54,"="],46.82],["SYR","Syria",11.11,[20221128,0,0,0,0,0,0,0,0,3],[0.01,"="],9.51],["LIE","Liechtenstein",11.11,[20221129,0,0,0,0,0,0,0,0,2],[48.33,"="],67.23],["ISL","Iceland",11.11,[20221121,0,0,0,0,0,0,0,0,-1],[0.0,"="],77.82],["SMR","San Marino",11.11,[20221115,0,0,0,0,0,0,0,0,1],[100.62,"="],70.15],["MNG","Mongolia",11.11,[20221127,0,0,0,0,0,0,0,0,1],[3.8,"-"],64.02],["LTU","Lithuania",11.11,[20221126,0,0,0,0,0,0,0,0,1],[15.53,"-"],68.35],["SRB","Serbia",11.11,[20221129,0,0,0,0,0,0,0,0,2],[6.94,"+"],47.71],["SAU","Saudi Arabia",11.11,[20221201,0,0,0,0,0,0,0,0,2],[0.17,"="],69.63],["ROU","Romania",11.11,[20221114,0,0,0,0,0,0,0,0,1],[1.41,"="],41.28],["QAT","Qatar",11.11,[20221106,0,0,0,0,0,0,0,0,0],[20.79,"+"],105.72],["PSE","Palestine",11.11,[20221204,0,0,0,0,0,0,0,0,4],[],33.85],["PRT","Portugal",11.11,[20221128,0,0,0,0,0,0,0,0,0],[10.11,"+"],86.48],["PNG","Papua New Guinea",11.11,[20221121,0,0,0,0,0,0,0,0,2],[0.31,"="],3.0],["PER","Peru",11.11,[20221128,0,0,0,0,0,0,0,0,1],[27.85,"-"],83.32],["SVK","Slovak Republic",11.11,[20221118,0,0,0,0,0,0,0,0,2],[4.22,"+"],45.68],["OMN","Oman",11.11,[20221130,0,0,0,0,0,0,0,0,0],[0.0,"="],66.62],["NZL","New Zealand",11.11,[20221120,0,0,0,0,0,0,0,0,-1],[102.31,"-"],79.79],["NOR","Norway",11.11,[20221110,0,0,0,0,0,0,0,0,1],[3.16,"+"],74.61],["NLD","Netherlands",11.11,[20221110,0,0,0,0,0,0,0,0,0],[4.56,"="],68.08],["SVN","Slovenia",11.11,[20221114,0,0,0,0,0,0,0,0,2],[76.81,"+"],57.66],["MYS","Malaysia",11.11,[20221203,0,0,0,0,0,0,0,0,1],[5.43,"-"],81.11],["SWE","Sweden",11.11,[20221128,0,0,0,0,0,0,0,0,0],[11.71,"+"],72.34],["MLT","Malta",11.11,[20221206,0,0,0,0,0,0,0,0,2],[3.04,"-"],88.37],["MDG","Madagascar",11.11,[20221206,0,0,0,0,0,0,0,0,1],[0.12,"="],6.38],["MDA","Moldova",11.11,[20221118,0,0,0,0,0,0,0,0,1],[1.17,"="],32.79],["MCO","Monaco",11.11,[20221128,0,0,0,0,0,0,0,0,2],[73.54,"-"],70.34],["LUX","Luxembourg",11.11,[20221205,0,0,0,0,0,0,0,0,0],[27.04,"-"],71.43],["LSO","Lesotho",11.11,[20221128,0,0,0,0,0,0,0,0,1],[0.0,"="],40.1],["HRV","Croatia",11.11,[20221120,0,0,0,0,0,0,0,0,2],[6.92,"+"],55.83],["KOR","South Korea",11.11,[20221106,0,0,0,0,0,0,0,0,2],[112.22,"+"],86.27],["FRA","France",11.11,[20221130,0,0,0,0,0,0,0,0,0],[91.21,"+"],78.33],["CZE","Czech Republic",11.11,[20221206,0,0,0,0,0,0,0,0,0],[8.04,"+"],65.67],["CPV","Cape Verde",11.11,[20221204,0,0,0,0,0,0,0,0,2],[1.44,"-"],52.05],["ALB","Albania",11.11,[20221120,0,0,0,0,0,0,0,0,0],[0.65,"+"],44.62],["DNK","Denmark",11.11,[20221117,0,0,0,0,0,0,0,0,0],[21.48,"+"],81.03],["ECU","Ecuador",11.11,[20221121,0,0,0,0,0,0,0,0,2],[5.71,"+"],78.9],["ESP","Spain",11.11,[20221127,0,0,0,0,0,0,0,0,2],[5.9,"="],85.49],["EST","Estonia",11.11,[20221129,0,0,0,0,0,0,0,0,1],[5.71,"="],63.94],["BRN","Brunei",11.11,[20221031,0,0,0,0,0,0,0,0,1],[114.91,"="],99.32],["CYP","Cyprus",11.11,[20221206,0,0,0,0,0,0,0,0,1],[47.46,"="],72.07],["BRB","Barbados",11.11,[20221129,0,0,0,0,0,0,0,0,2],[0.0,"="],55.02],["FRO","Faeroe Islands",11.11,[20221127,0,0,0,0,0,0,0,0,0],[0.0,"="],76.99],["CRI","Costa Rica",11.11,[20221205,0,0,0,0,0,0,0,0,2],[7.79,"="],82.68],["VUT","Vanuatu",11.11,[20221202,0,0,0,0,0,0,0,0,0],[0.0,"="],40.31],["GAB","Gabon",11.11,[20221127,0,0,0,0,0,0,0,0,3],[0.0,"="],10.77],["AUS","Australia",11.11,[20221122,0,0,0,0,0,0,0,0,0],[60.75,"+"],82.73],["BGR","Bulgaria",11.11,[20221108,0,0,0,0,0,0,0,0,0],[2.42,"+"],30.58],["ZAF","South Africa",11.11,[20221113,0,0,0,0,0,0,0,0,0],[0.53,"+"],32.65],["BLZ","Belize",11.11,[20221118,0,0,0,0,0,0,0,0,0],[2.48,"="],54.58],["GRL","Greenland",11.11,[20221127,0,0,0,0,0,0,0,0,1],[0.0,"="],68.17],["BHR","Bahrain",11.11,[20221206,0,0,0,0,0,0,0,0,2],[4.26,"-"],83.32],["ARG","Argentina",13.44,[20221119,0,0,0,0,0,0,0,0,1],[3.99,"="],83.24],["EGY","Egypt",13.48,[20221204,0,1,0,0,0,0,0,0,3],[0.0,"="],36.08],["PRY","Paraguay",13.89,[20221120,0,0,0,0,0,0,0,1,2],[121.64,"="],52.05],["CMR","Cameroon",13.89,[20221119,0,0,0,0,0,0,0,1,0],[0.0,"="],8.73],["NIC","Nicaragua",13.89,[20221206,0,0,0,0,0,0,0,1,0],[0.03,"="],84.94],["VEN","Venezuela",13.89,[20221120,0,0,0,0,0,0,0,1,3],[0.22,"-"],52.88],["ARE","United Arab Emirates",13.89,[20221203,0,0,0,0,0,0,0,1,2],[1.0,"-"],103.72],["CHL","Chile",13.89,[20221128,0,0,0,0,0,0,0,1,2],[18.39,"-"],90.25],["CAF","Central African Republic",13.89,[20221201,0,0,0,0,0,0,0,1,3],[0.0,"="],32.88],["CIV","Cote d'Ivoire",13.89,[20221205,0,0,0,0,0,0,0,1,2],[0.0,"="],37.04],["COG","Congo",13.89,[20221128,0,0,0,0,0,0,0,1,0],[0.0,"="],10.96],["CUB","Cuba",13.89,[20221204,0,0,0,0,0,0,0,1,2],[0.11,"+"],89.21],["LBN","Lebanon",13.89,[20221120,0,0,0,0,0,0,0,1,2],[0.81,"+"],43.98],["BGD","Bangladesh",13.89,[20221205,0,0,0,0,0,0,0,1,4],[0.01,"="],73.41],["SYC","Seychelles",13.89,[20221205,0,0,0,0,0,0,0,1,3],[0.0,"="],76.14],["URY","Uruguay",13.89,[20221121,0,0,0,0,0,0,0,1,1],[6.28,"="],84.57],["UKR","Ukraine",13.89,[20221205,0,0,0,0,0,0,0,1,3],[3.31,"+"],38.17],["LBY","Libya",13.89,[20221204,0,0,0,0,0,0,0,1,1],[0.03,"="],18.05],["GMB","Gambia",13.89,[20221111,0,0,0,0,0,0,0,1,3],[0.0,"="],16.79],["TCD","Chad",13.89,[20221204,0,0,0,0,0,0,0,1,3],[0.0,"="],20.44],["ISR","Israel",14.81,[20221205,1,0,0,0,0,0,0,0,2],[18.48,"+"],65.16],["PAN","Panama",14.81,[20221125,1,0,1,0,0,0,0,0,2],[23.48,"="],71.67],["KHM","Cambodia",14.81,[20221204,1,0,0,0,0,0,0,0,2],[0.08,"="],87.02],["BEL","Belgium",14.81,[20221117,0,1,0,0,0,0,0,0,2],[10.64,"+"],78.64],["DEU","Germany",14.81,[20221121,0,0,0,0,0,1,0,0,2],[33.43,"+"],76.18],["GRC","Greece",14.81,[20221127,1,0,0,0,0,0,0,0,2],[60.32,"="],73.59],["ITA","Italy",15.51,[20221107,0,1,0,0,0,0,0,0,2],[53.73,"="],81.26],["TON","Tonga",16.18,[20221205,0,0,0,0,0,0,0,1,1],[0.0,"="],72.49],["UGA","Uganda",16.22,[20221201,0,2,0,0,2,0,0,1,4],[0.02,"="],27.41],["JAM","Jamaica",16.67,[20221128,0,0,1,0,0,0,0,0,1],[0.52,"="],26.22],["AGO","Angola",17.1,[20221205,0,2,0,0,0,0,0,1,2],[0.06,"="],21.96],["SGP","Singapore",17.59,[20221205,1,0,0,0,0,0,0,1,2],[20.76,"+"],90.71],["MEX","Mexico",17.59,[20221113,1,0,0,0,0,0,0,1,2],[2.65,"-"],64.82],["MOZ","Mozambique",17.59,[20221120,0,1,0,0,0,0,0,1,2],[0.0,"="],53.82],["GUY","Guyana",18.52,[20221129,1,1,0,0,0,0,0,0,1],[1.33,"+"],47.0],["FIN","Finland",18.52,[20221117,1,1,0,0,0,0,0,0,1],[32.63,"+"],78.45],["ETH","Ethiopia",19.44,[20221205,0,0,0,3,0,0,0,0,3],[0.05,"+"],29.75],["SEN","Senegal",19.44,[20221205,0,0,0,0,1,0,0,1,3],[0.01,"="],7.83],["COL","Colombia",19.44,[20221202,1,1,0,0,0,0,0,1,1],[1.22,"="],71.04],["BDI","Burundi",19.44,[20221121,0,0,1,0,0,0,0,1,1],[0.31,"="],0.2],["TLS","Timor-Leste",20.6,[20221207,0,0,0,0,0,0,1,1,3],[0.07,"-"],58.11],["SUR","Suriname",21.3,[20221113,1,1,0,0,0,0,0,1,2],[0.0,"="],38.49],["TWN","Taiwan",21.3,[20221205,1,1,0,0,0,0,0,1,2],[59.06,"-"],86.11],["NPL","Nepal",21.82,[20221121,0,0,0,1,0,0,0,1,4],[0.01,"-"],78.1],["BRA","Brazil",22.22,[20221128,0,0,0,0,0,0,2,1,2],[15.43,"+"],80.9],["RUS","Russia",22.69,[20221121,0,1,2,1,0,0,0,0,2],[4.43,"+"],54.03],["VNM","Vietnam",23.15,[20221203,0,1,1,1,0,0,0,0,2],[0.45,"-"],86.25],["HND","Honduras",23.15,[20221207,0,1,1,0,0,0,0,1,3],[0.27,"-"],54.88],["USA","United States",23.2,[20221122,1,1,0,0,0,1,0,1,2],[18.66,"-"],68.86],["BMU","Bermuda",24.07,[20221121,1,1,1,0,0,0,0,0,2],[12.85,"="],74.22],["BOL","Bolivia",24.07,[20221107,1,1,1,0,0,0,0,1,2],[4.35,"-"],50.4],["DMA","Dominica",24.07,[20221205,1,1,1,0,0,0,0,0,2],[0.0,"="],42.14],["MAR","Morocco",24.46,[20221204,0,1,0,0,0,0,0,0,3],[0.33,"-"],62.77],["COD","Democratic Republic of Congo",25.0,[20221124,0,0,0,0,0,0,2,1,3],[0.04,"="],3.76],["MLI","Mali",25.0,[20221205,0,0,2,0,0,0,0,1,0],[0.0,"="],10.48],["RKS","Kosovo",25.04,[20221205,2,2,2,0,0,0,0,0,1],[0.06,"="],46.29],["PHL","Philippines",25.41,[20221201,0,1,1,0,1,0,0,1,2],[1.02,"+"],63.81],["RWA","Rwanda",25.64,[20221206,0,0,0,0,0,0,0,0,0],[0.05,"="],67.32],["ABW","Aruba",25.93,[20221205,0,1,1,2,0,0,0,0,2],[6.96,"="],78.84],["BIH","Bosnia and Herzegovina",25.93,[20221128,1,0,1,2,0,0,0,0,2],[0.31,"-"],26.17],["LKA","Sri Lanka",25.93,[20221121,0,1,1,1,0,0,0,1,1],[0.04,"+"],67.57],["KEN","Kenya",26.5,[20221125,0,1,2,0,0,0,0,1,3],[0.1,"="],19.82],["SLV","El Salvador",26.85,[20221205,1,1,1,1,0,0,0,0,2],[0.0,"="],68.56],["GRD","Grenada",29.38,[20220328,1,0,0,3,0,0,0,1,3],[0.63,"="],31.07],["LBR","Liberia",29.7,[20221205,0,1,1,0,0,0,0,1,4],[0.04,"="],69.23],["TGO","Togo",30.1,[20221204,0,0,1,3,0,0,0,1,3],[0.01,"="],16.45],["SLB","Solomon Islands",30.46,[20221128,1,1,1,0,0,0,0,1,3],[0.0,"="],35.12],["HTI","Haiti",31.48,[20221207,0,1,1,3,0,0,0,1,2],[0.0,"-"],2.05],["JPN","Japan",31.48,[20221206,1,1,1,1,0,1,1,1,1],[87.7,"+"],83.12],["IDN","Indonesia",31.86,[20221207,1,1,0,0,0,0,0,1,2],[1.18,"-"],63.2],["BHS","Bahamas",32.41,[20221204,1,1,1,0,1,0,0,1,2],[0.29,"="],40.4],["SLE","Sierra Leone",33.3,[20221205,2,2,2,0,1,0,0,1,3],[0.0,"="],35.16],["GHA","Ghana",33.54,[20221205,0,2,2,0,0,0,0,1,1],[0.01,"="],26.82],["IND","India",34.26,[20221127,0,1,1,0,0,2,2,0,3],[0.02,"="],67.1],["FJI","Fiji",34.76,[20221205,0,1,1,0,1,0,0,1,2],[1.21,"="],68.86],["AUT","Austria",35.19,[20221205,2,2,1,2,0,0,0,0,2],[53.33,"-"],76.32],["GTM","Guatemala",36.57,[20221128,2,0,1,3,1,0,0,0,2],[7.27,"+"],39.37],["MAC","Macao",39.81,[20221205,2,1,1,2,1,0,0,1,3],[],90.53],["PAK","Pakistan",40.32,[20221128,0,0,0,0,0,0,0,1,2],[0.01,"="],56.11],["AZE","Azerbaijan",40.35,[20221205,0,3,2,0,0,0,2,1,0],[0.43,"="],46.94],["MMR","Myanmar",40.74,[20221107,1,1,0,0,1,2,2,1,3],[0.03,"="],50.84],["MWI","Malawi",40.74,[20221128,1,1,1,3,1,0,0,1,3],[0.1,"="],15.16],["IRQ","Iraq",41.37,[20221205,0,2,2,1,0,0,0,1,2],[0.23,"="],17.82],["HKG","Hong Kong",42.3,[20221128,2,1,1,3,0,0,0,2,2],[143.69,"+"],90.43],["TUN","Tunisia",43.52,[20221208,0,2,2,4,0,0,0,1,3],[0.09,"="],51.74],["LAO","Laos",44.2,[20221204,1,1,1,3,1,0,0,1,3],[0.63,"+"],69.36],["ZWE","Zimbabwe",53.7,[20221207,1,1,1,3,1,2,1,1,4],[0.18,"="],29.11],["IRN","Iran",53.94,[20221122,1,2,2,4,0,0,2,1,2],[0.05,"="],66.07],["NGA","Nigeria",57.68,[20221114,0,1,1,3,1,2,2,1,3],[0.0,"="],23.52],["CHN","China",69.91,[20221122,3,3,2,4,1,2,2,2,3],[1.98,"-"],89.27],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[5.21,"+"],45.43]];