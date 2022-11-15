const dataUpdate="2022.11.15";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["KIR","Kiribati",0.0,[20221113,0,0,0,0,0,0,0,0,0],[0.0,"="],53.69],["JOR","Jordan",0.0,[20221113,0,0,0,0,0,0,0,0,2],[0.0,"="],40.39],["BTN","Bhutan",0.0,[20221113,0,0,0,0,0,0,0,0,1],[0.56,"-"],86.61],["BWA","Botswana",0.0,[20221010,0,0,0,0,0,0,0,0,0],[0.0,"="],52.4],["OMN","Oman",0.0,[20221108,0,0,0,0,0,0,0,0,0],[0.7,"+"],66.62],["AFG","Afghanistan",2.78,[20221111,0,0,1,0,0,0,0,0,1],[0.29,"-"],25.5],["DJI","Djibouti",2.78,[20221017,0,0,0,0,0,0,0,1,2],[0.0,"="],22.4],["GIN","Guinea",2.78,[20221108,0,0,0,0,0,0,0,1,2],[0.0,"-"],22.92],["ZMB","Zambia",2.78,[20221011,0,0,0,0,0,0,0,1,3],[0.0,"="],40.92],["DZA","Algeria",2.78,[20221113,0,0,0,0,0,0,0,1,3],[0.02,"="],14.43],["PAN","Panama",3.7,[20221017,1,0,0,0,0,0,0,0,-1],[4.54,"+"],71.6],["UZB","Uzbekistan",5.56,[20221004,0,0,0,0,0,0,0,0,1],[0.09,"+"],50.62],["KAZ","Kazakhstan",5.56,[20221113,0,0,0,0,0,0,0,0,2],[0.33,"+"],54.67],["CHE","Switzerland",5.56,[20221028,0,0,0,0,0,0,0,0,0],[34.59,"="],68.77],["MUS","Mauritius",5.56,[20221010,0,0,0,0,0,0,0,0,2],[21.43,"-"],83.74],["LVA","Latvia",5.56,[20221113,0,0,0,0,0,0,0,0,2],[19.37,"+"],70.57],["DOM","Dominican Republic",5.56,[20221110,0,0,0,0,0,0,0,-1,0],[0.58,"+"],53.98],["CAN","Canada",5.56,[20221113,0,0,0,0,0,0,0,0,2],[5.82,"-"],82.3],["BLR","Belarus",5.56,[20220927,0,0,0,0,0,0,0,0,0],[0.0,"="],67.2],["NAM","Namibia",5.56,[20221031,0,0,0,0,0,0,0,0,0],[0.0,"="],20.25],["YEM","Yemen",5.56,[20220919,0,0,1,0,0,0,0,0,0],[0.0,"="],2.01],["SDN","Sudan",5.56,[20221020,0,0,0,0,0,0,0,0,0],[0.03,"+"],9.68],["AND","Andorra",5.56,[20221007,0,0,0,0,0,0,0,0,2],[14.05,"="],66.98],["GEO","Georgia",5.56,[20221031,0,0,0,0,0,0,0,0,2],[0.0,"="],34.08],["GBR","United Kingdom",5.56,[20221007,0,0,0,0,0,0,0,0,0],[5.21,"+"],75.19],["BEN","Benin",5.56,[20221107,0,0,0,0,0,0,0,0,2],[0.01,"-"],20.17],["HUN","Hungary",5.56,[20221107,0,0,0,0,0,0,0,0,2],[17.82,"="],62.26],["SWZ","Eswatini",5.56,[20221113,0,0,0,0,0,0,0,0,0],[1.11,"-"],40.83],["THA","Thailand",5.56,[20221112,0,0,0,0,0,0,0,0,1],[0.65,"="],74.6],["BFA","Burkina Faso",8.33,[20221031,0,0,0,0,0,0,0,1,3],[0.0,"="],11.72],["SYR","Syria",8.33,[20221016,0,0,0,0,0,0,0,1,3],[0.01,"="],9.51],["TZA","Tanzania",8.33,[20221104,0,0,0,0,0,0,0,1,0],[0.02,"="],39.39],["LSO","Lesotho",8.33,[20221017,0,0,0,0,0,0,0,1,1],[0.0,"="],37.85],["COL","Colombia",8.33,[20221024,1,1,0,0,0,0,0,1,1],[0.29,"="],70.91],["TJK","Tajikistan",8.33,[20221024,0,0,0,0,0,0,0,1,0],[0.0,"="],51.45],["POL","Poland",9.26,[20221019,1,0,0,0,0,0,0,0,2],[0.94,"-"],56.67],["NER","Niger",10.56,[20221113,0,0,0,0,0,0,0,1,2],[0.0,"="],19.75],["KGZ","Kyrgyz Republic",11.11,[20221030,0,0,0,0,0,0,0,0,2],[0.04,"+"],20.4],["IRL","Ireland",11.11,[20221112,0,0,0,0,0,0,0,0,1],[5.95,"="],80.72],["JAM","Jamaica",11.11,[20221016,0,0,0,0,-1,0,0,0,1],[0.34,"-"],26.01],["ISL","Iceland",11.11,[20221018,0,0,0,0,0,0,-1,0,0],[9.71,"="],77.82],["KWT","Kuwait",11.11,[20221011,0,0,0,0,0,0,0,0,0],[0.51,"-"],78.26],["KOR","South Korea",11.11,[20221106,0,0,0,0,0,0,0,0,2],[103.57,"+"],86.26],["SVN","Slovenia",11.11,[20221113,0,0,0,0,0,0,0,0,2],[30.11,"-"],57.66],["SAU","Saudi Arabia",11.11,[20221031,0,0,0,0,0,0,0,0,2],[0.33,"-"],69.55],["ROU","Romania",11.11,[20221113,0,0,0,0,0,0,0,0,1],[1.89,"="],41.28],["PSE","Palestine",11.11,[20221105,0,0,0,0,0,0,0,0,1],[],33.85],["PRT","Portugal",11.11,[20221010,0,0,0,0,0,0,0,0,0],[7.99,"-"],86.44],["PNG","Papua New Guinea",11.11,[20221113,0,0,0,0,0,0,0,0,2],[0.23,"-"],2.95],["NZL","New Zealand",11.11,[20220930,0,0,0,0,0,0,0,0,2],[63.91,"="],79.75],["NOR","Norway",11.11,[20221110,0,0,0,0,0,0,0,0,1],[2.37,"-"],74.61],["NLD","Netherlands",11.11,[20221110,0,0,0,0,0,0,0,0,0],[5.69,"="],68.08],["SMR","San Marino",11.11,[20221113,0,0,0,0,0,0,0,-1,1],[49.26,"+"],70.15],["SWE","Sweden",11.11,[20221105,0,0,0,0,0,0,0,0,0],[5.22,"="],72.41],["MNG","Mongolia",11.11,[20221025,0,0,0,0,0,0,0,0,1],[10.47,"+"],64.02],["MLT","Malta",11.11,[20221109,0,0,0,0,0,0,0,0,2],[3.85,"-"],88.35],["MDG","Madagascar",11.11,[20220926,0,0,0,0,0,0,0,0,1],[0.04,"="],5.91],["MDA","Moldova",11.11,[20221105,0,0,0,0,0,0,0,0,1],[1.23,"="],32.73],["MCO","Monaco",11.11,[20221104,0,0,0,0,0,0,0,0,2],[38.95,"+"],70.34],["TTO","Trinidad and Tobago",11.11,[20221108,0,0,0,0,0,0,0,0,1],[0.97,"="],46.82],["LUX","Luxembourg",11.11,[20221113,0,0,0,0,0,0,0,0,0],[21.38,"+"],71.45],["LTU","Lithuania",11.11,[20221112,0,0,0,0,0,0,0,0,1],[8.9,"-"],68.34],["LIE","Liechtenstein",11.11,[20221105,0,0,0,0,0,0,0,0,1],[29.22,"-"],67.22],["SVK","Slovak Republic",11.11,[20221031,0,0,0,0,0,0,0,0,2],[4.45,"-"],45.68],["SRB","Serbia",11.11,[20221024,0,0,0,0,0,0,0,0,2],[7.39,"-"],47.71],["TUR","Turkey",11.11,[20221031,0,0,0,0,0,0,0,0,2],[0.0,"="],62.3],["HRV","Croatia",11.11,[20221101,0,0,0,0,0,0,0,0,2],[5.21,"+"],55.82],["CZE","Czech Republic",11.11,[20221111,0,0,0,0,0,0,0,0,1],[4.7,"-"],65.67],["CUB","Cuba",11.11,[20221108,0,0,0,0,0,0,0,0,1],[0.04,"+"],89.18],["CYP","Cyprus",11.11,[20221107,0,0,0,0,0,0,0,0,3],[42.89,"="],72.07],["BLZ","Belize",11.11,[20221104,0,0,0,0,0,0,0,0,0],[0.57,"+"],54.48],["AUS","Australia",11.11,[20221113,0,0,0,0,0,0,0,0,0],[35.66,"+"],83.22],["DNK","Denmark",11.11,[20221012,0,0,0,0,0,0,0,0,0],[10.57,"+"],81.1],["ECU","Ecuador",11.11,[20221107,0,0,0,0,0,0,0,0,2],[0.28,"="],78.26],["EGY","Egypt",11.11,[20221110,0,0,0,0,0,0,0,0,3],[0.0,"="],36.0],["ESP","Spain",11.11,[20221030,0,0,0,0,0,0,0,0,2],[6.69,"="],85.49],["EST","Estonia",11.11,[20221004,0,0,0,0,0,0,0,0,1],[5.86,"="],63.9],["CRI","Costa Rica",11.11,[20221031,0,0,0,0,0,0,0,0,2],[6.87,"="],81.45],["BRN","Brunei",11.11,[20221031,0,0,0,0,0,0,0,0,1],[116.09,"="],99.26],["GRL","Greenland",11.11,[20221106,0,0,0,0,0,0,0,0,1],[0.0,"="],68.15],["ZAF","South Africa",11.11,[20221113,0,0,0,0,0,0,0,0,0],[0.89,"+"],32.56],["BGR","Bulgaria",11.11,[20221108,0,0,0,0,0,0,0,0,0],[4.37,"-"],30.58],["FRA","France",11.11,[20221017,0,0,0,0,0,0,0,0,1],[35.51,"+"],78.3],["FRO","Faeroe Islands",11.11,[20221030,0,0,0,0,0,0,0,0,0],[0.0,"="],76.99],["BHR","Bahrain",11.11,[20221107,0,0,0,0,0,0,0,0,2],[13.4,"-"],83.31],["GAB","Gabon",11.11,[20221108,0,0,0,0,0,0,0,0,3],[0.0,"="],10.77],["ALB","Albania",11.11,[20221104,0,0,0,0,0,0,0,0,2],[0.51,"+"],44.56],["ARG","Argentina",13.46,[20220926,0,0,0,0,0,0,0,0,1],[0.47,"="],83.19],["NIC","Nicaragua",13.89,[20221106,0,0,0,0,0,0,0,1,0],[0.04,"="],83.76],["SOM","Somalia",13.89,[20221108,0,0,0,0,0,0,0,1,2],[0.0,"-"],33.74],["BMU","Bermuda",13.89,[20221021,0,0,0,0,0,0,0,1,2],[0.0,"="],74.22],["CAF","Central African Republic",13.89,[20221112,0,0,0,0,0,0,0,1,3],[0.0,"-"],28.98],["BGD","Bangladesh",13.89,[20221113,0,0,0,0,0,0,0,1,4],[0.03,"="],72.63],["CMR","Cameroon",13.89,[20221031,0,0,0,0,0,0,0,1,0],[0.0,"-"],4.61],["CIV","Cote d'Ivoire",13.89,[20221022,0,0,0,0,0,0,0,1,3],[0.02,"+"],32.73],["MRT","Mauritania",13.89,[20221106,0,0,0,0,1,0,0,1,2],[0.04,"="],30.13],["VUT","Vanuatu",13.89,[20221004,0,0,0,0,0,-1,0,1,2],[0.0,"="],40.31],["CHL","Chile",13.89,[20221113,0,0,0,0,0,0,0,1,2],[32.44,"-"],90.23],["TCD","Chad",13.89,[20221111,0,0,0,0,0,0,0,1,3],[0.01,"+"],20.42],["GMB","Gambia",13.89,[20221111,0,0,0,0,0,0,0,1,3],[0.0,"="],16.79],["UGA","Uganda",13.89,[20221028,0,0,0,0,0,0,0,1,3],[0.03,"+"],27.02],["CPV","Cape Verde",13.89,[20221107,0,0,0,0,0,0,0,1,2],[3.39,"="],52.05],["QAT","Qatar",13.89,[20221106,0,0,0,0,0,0,0,1,0],[11.38,"-"],105.68],["VEN","Venezuela",13.89,[20221004,0,0,0,0,0,0,0,1,3],[0.18,"+"],50.48],["URY","Uruguay",13.89,[20221018,0,0,0,0,0,0,0,1,1],[3.36,"+"],84.56],["SYC","Seychelles",13.89,[20221113,0,0,0,0,0,0,0,1,2],[0.0,"="],76.11],["PRY","Paraguay",13.89,[20221113,0,0,0,0,0,0,0,1,2],[0.14,"="],51.89],["ISR","Israel",14.81,[20221113,1,0,0,0,0,0,0,0,2],[14.1,"+"],65.15],["GRC","Greece",14.81,[20221024,1,0,0,0,0,0,0,0,2],[84.15,"="],73.58],["BEL","Belgium",14.81,[20221017,0,1,0,0,0,0,0,0,2],[5.58,"-"],78.62],["TLS","Timor-Leste",15.1,[20221104,0,0,0,0,0,0,0,1,3],[0.11,"+"],56.76],["ITA","Italy",15.51,[20221107,0,1,0,0,0,0,0,0,2],[42.81,"="],81.26],["SSD","South Sudan",16.14,[20221010,0,0,0,0,0,0,0,1,3],[0.02,"+"],19.25],["TON","Tonga",16.25,[20221107,0,0,0,0,0,0,0,1,1],[0.0,"="],71.89],["MEX","Mexico",17.59,[20221113,1,0,0,0,0,0,0,1,2],[0.61,"+"],64.19],["MOZ","Mozambique",17.59,[20221002,0,1,0,0,0,0,0,1,2],[0.03,"+"],41.17],["SGP","Singapore",17.59,[20221031,1,0,0,0,0,0,0,1,2],[40.06,"-"],90.9],["BRB","Barbados",18.52,[20221113,1,1,0,0,0,0,0,0,2],[0.0,"="],55.0],["GUY","Guyana",18.52,[20221113,1,1,0,0,0,0,0,0,1],[0.4,"-"],57.08],["SEN","Senegal",19.44,[20221107,0,0,0,0,1,0,0,1,3],[0.01,"-"],7.29],["MAR","Morocco",20.33,[20221113,0,1,0,0,0,0,0,0,3],[0.24,"="],62.76],["KHM","Cambodia",20.37,[20220930,1,0,0,0,0,0,1,1,2],[0.0,"="],86.93],["TWN","Taiwan",21.3,[20221112,1,1,0,0,0,0,0,1,2],[88.06,"+"],85.87],["SUR","Suriname",21.3,[20221113,1,1,0,0,0,0,0,1,2],[0.0,"="],38.49],["NPL","Nepal",22.09,[20221107,0,0,0,1,0,0,0,1,4],[0.03,"-"],77.31],["BRA","Brazil",22.59,[20221107,0,0,0,0,0,0,2,1,2],[3.54,"-"],80.05],["AGO","Angola",22.65,[20221113,0,2,0,0,0,0,0,1,2],[0.0,"="],21.96],["RUS","Russia",22.69,[20221101,0,1,2,1,0,0,0,0,2],[3.51,"+"],53.82],["HND","Honduras",23.15,[20221107,0,1,1,0,0,0,0,1,3],[0.3,"="],54.68],["ARE","United Arab Emirates",23.15,[20221113,1,0,1,0,0,0,0,1,2],[2.33,"-"],103.72],["VNM","Vietnam",23.15,[20221113,0,1,1,1,0,0,0,0,2],[0.39,"-"],86.01],["DEU","Germany",23.15,[20221101,0,0,0,0,0,1,1,1,2],[33.37,"-"],76.16],["MLI","Mali",24.0,[20221019,0,0,2,0,0,0,0,1,0],[0.0,"="],9.56],["DMA","Dominica",24.07,[20221113,1,1,1,0,0,0,0,0,2],[0.0,"="],42.14],["FIN","Finland",24.07,[20221012,1,1,0,0,1,0,0,0,1],[30.76,"="],78.42],["BOL","Bolivia",24.07,[20221107,1,1,1,0,0,0,0,1,2],[0.23,"-"],50.4],["MYS","Malaysia",24.07,[20221112,1,1,1,0,0,0,0,0,2],[9.09,"-"],81.1],["COD","Democratic Republic of Congo",24.79,[20221104,0,0,0,0,0,0,2,1,3],[0.04,"="],3.76],["SLB","Solomon Islands",24.9,[20221113,1,1,1,0,0,0,0,1,3],[0.4,"+"],35.12],["RKS","Kosovo",25.04,[20221113,2,2,2,0,0,0,0,0,1],[0.1,"-"],46.29],["PHL","Philippines",25.42,[20221107,0,1,1,0,1,0,0,1,2],[1.06,"-"],63.62],["RWA","Rwanda",25.62,[20221113,0,0,0,0,0,0,0,0,0],[0.07,"+"],67.36],["USA","United States",25.85,[20221031,1,1,0,0,0,1,0,1,2],[11.12,"+"],68.61],["ABW","Aruba",25.93,[20221113,0,1,1,2,0,0,0,0,2],[5.89,"="],78.74],["BIH","Bosnia and Herzegovina",25.93,[20221107,1,0,1,2,0,0,0,0,2],[0.74,"+"],26.17],["LKA","Sri Lanka",25.93,[20221105,0,1,1,1,0,0,0,1,1],[0.06,"="],67.57],["SLV","El Salvador",26.85,[20221113,1,1,1,1,0,0,0,0,1],[0.0,"="],68.56],["BDI","Burundi",26.85,[20221106,0,2,1,0,0,0,0,1,1],[0.07,"-"],0.18],["LBR","Liberia",27.53,[20221031,0,1,1,0,0,0,0,1,3],[0.0,"-"],67.83],["GHA","Ghana",27.57,[20221113,0,2,2,0,0,0,0,1,1],[0.04,"+"],26.16],["KEN","Kenya",27.61,[20221107,0,1,2,0,0,0,0,1,3],[0.17,"-"],19.55],["PER","Peru",28.7,[20221107,1,0,1,0,0,0,1,1,1],[3.93,"-"],83.14],["LBY","Libya",29.07,[20221010,0,2,2,0,0,0,0,1,3],[0.0,"-"],18.05],["GRD","Grenada",29.38,[20220328,1,0,0,3,0,0,0,1,3],[1.14,"="],30.99],["IDN","Indonesia",29.89,[20221031,0,1,0,0,0,0,0,1,-1],[2.13,"+"],62.09],["TGO","Togo",30.1,[20221113,0,0,1,3,0,0,0,1,3],[0.01,"="],16.41],["JPN","Japan",31.48,[20221113,1,1,1,1,0,1,1,1,1],[57.31,"+"],83.06],["BHS","Bahamas",32.41,[20221113,1,1,1,0,1,0,0,1,2],[1.82,"="],40.32],["AUT","Austria",35.19,[20221113,2,2,1,2,0,0,0,0,2],[38.86,"-"],76.32],["COG","Congo",35.32,[20220922,0,2,2,2,0,0,0,1,3],[0.0,"="],10.96],["FJI","Fiji",35.61,[20221009,0,1,0,0,1,0,0,1,2],[0.27,"="],68.78],["GTM","Guatemala",36.57,[20221107,2,0,1,3,1,0,0,0,2],[2.32,"+"],39.1],["IND","India",37.04,[20221010,0,1,1,0,0,2,2,1,3],[0.07,"+"],67.07],["PAK","Pakistan",37.91,[20221113,0,0,0,0,0,0,0,1,2],[0.02,"="],56.04],["LAO","Laos",38.34,[20221112,1,1,1,4,0,0,0,1,3],[0.17,"+"],69.36],["SLE","Sierra Leone",39.31,[20221113,2,2,2,0,1,0,0,1,3],[0.01,"="],32.74],["MAC","Macao",39.81,[20221112,2,1,1,2,1,0,0,1,3],[],86.22],["HTI","Haiti",39.81,[20221113,0,1,2,4,0,0,0,1,2],[0.01,"="],2.04],["AZE","Azerbaijan",40.35,[20221113,0,3,2,0,0,0,2,1,0],[0.26,"="],46.94],["ETH","Ethiopia",40.74,[20221017,1,1,1,3,1,0,0,1,3],[0.01,"-"],29.75],["MWI","Malawi",40.74,[20221031,1,1,1,3,1,0,0,1,3],[0.0,"+"],14.8],["MMR","Myanmar",40.74,[20221107,1,1,0,0,1,2,2,1,3],[0.1,"-"],50.84],["IRQ","Iraq",41.38,[20221111,0,2,2,1,0,0,0,1,2],[0.16,"+"],17.79],["LBN","Lebanon",41.43,[20221017,1,2,1,1,1,2,0,1,1],[0.98,"="],43.88],["TUN","Tunisia",41.6,[20221031,0,1,2,4,0,0,0,1,3],[0.13,"="],51.67],["HKG","Hong Kong",42.31,[20221104,2,1,1,3,0,0,0,2,2],[74.93,"+"],90.07],["ZWE","Zimbabwe",53.7,[20221107,1,1,1,3,1,2,1,1,4],[0.0,"="],29.11],["IRN","Iran",53.94,[20221113,1,2,2,4,0,0,2,1,2],[0.08,"-"],66.03],["NGA","Nigeria",57.72,[20221113,0,1,1,3,1,2,2,1,3],[0.0,"="],22.11],["UKR","Ukraine",60.16,[20221112,3,1,2,3,2,1,2,3,3],[3.25,"+"],38.17],["CHN","China",62.5,[20221106,2,2,2,4,1,2,2,2,3],[0.76,"+"],89.22],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[5.14,"-"],45.43]];