const dataUpdate="2022.11.22";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["BWA","Botswana",0.0,[20221117,0,0,0,0,0,0,0,0,0],[0.0,"="],53.7],["ISL","Iceland",0.0,[20221118,0,0,0,0,0,0,0,0,-1],[0.0,"="],77.82],["JOR","Jordan",0.0,[20221115,0,0,0,0,0,0,0,0,2],[0.0,"="],40.39],["KIR","Kiribati",0.0,[20221114,0,0,0,0,0,0,0,0,0],[0.0,"="],56.3],["BTN","Bhutan",0.0,[20221115,0,0,0,0,0,0,0,0,1],[0.52,"-"],86.61],["OMN","Oman",0.0,[20221108,0,0,0,0,0,0,0,0,0],[0.0,"-"],66.62],["ZMB","Zambia",2.78,[20221117,0,0,0,0,0,0,0,1,3],[0.0,"="],40.92],["AFG","Afghanistan",2.78,[20221120,0,0,1,0,0,0,0,0,1],[0.23,"="],25.57],["GIN","Guinea",2.78,[20221120,0,0,0,0,0,0,0,1,2],[0.03,"="],22.92],["DZA","Algeria",2.78,[20221113,0,0,0,0,0,0,0,1,3],[0.02,"-"],14.43],["DJI","Djibouti",2.78,[20221120,0,0,0,0,0,0,0,1,3],[0.0,"="],23.23],["CAN","Canada",5.56,[20221120,0,0,0,0,0,0,0,0,2],[6.64,"+"],82.36],["CHE","Switzerland",5.56,[20221028,0,0,0,0,0,0,0,0,0],[34.31,"="],68.77],["LVA","Latvia",5.56,[20221115,0,0,0,0,0,0,0,0,2],[17.61,"+"],70.57],["HUN","Hungary",5.56,[20221107,0,0,0,0,0,0,0,0,2],[6.55,"="],62.27],["DOM","Dominican Republic",5.56,[20221110,0,0,0,0,0,0,0,0,0],[0.46,"+"],54.0],["KAZ","Kazakhstan",5.56,[20221113,0,0,0,0,0,0,0,0,2],[0.0,"-"],54.67],["THA","Thailand",5.56,[20221117,0,0,0,0,0,0,0,0,1],[0.81,"="],74.6],["GBR","United Kingdom",5.56,[20221115,0,0,0,0,0,0,0,0,1],[5.03,"-"],75.19],["GEO","Georgia",5.56,[20221120,0,0,0,0,0,0,0,0,2],[0.0,"="],34.08],["SWZ","Eswatini",5.56,[20221120,0,0,0,0,0,0,0,0,1],[0.76,"="],40.83],["MUS","Mauritius",5.56,[20221120,0,0,0,0,0,0,0,0,2],[0.0,"="],83.74],["UZB","Uzbekistan",5.56,[20221004,0,0,0,0,0,0,0,0,1],[0.2,"+"],50.62],["NAM","Namibia",5.56,[20221031,0,0,0,0,0,0,0,0,0],[0.0,"="],20.26],["SDN","Sudan",5.56,[20221115,0,0,0,0,0,0,0,0,0],[0.01,"="],15.43],["AND","Andorra",5.56,[20221007,0,0,0,0,0,0,0,0,2],[29.58,"="],66.99],["BLR","Belarus",5.56,[20221120,0,0,0,0,0,0,0,0,0],[0.0,"="],67.08],["YEM","Yemen",5.56,[20220919,0,0,1,0,0,0,0,0,0],[0.0,"="],2.01],["BEN","Benin",5.56,[20221107,0,0,0,0,0,0,0,0,2],[0.0,"-"],20.17],["TJK","Tajikistan",8.33,[20221120,0,0,0,0,0,0,0,1,0],[0.0,"="],51.45],["COL","Colombia",8.33,[20221024,1,1,0,0,0,0,0,1,1],[0.36,"="],70.95],["BFA","Burkina Faso",8.33,[20221031,0,0,0,0,0,0,0,1,3],[0.0,"="],11.72],["TZA","Tanzania",8.33,[20221104,0,0,0,0,0,0,0,1,0],[0.04,"="],39.39],["MRT","Mauritania",8.33,[20221120,0,0,0,0,0,0,0,1,1],[0.02,"="],30.13],["POL","Poland",9.26,[20221120,1,0,0,0,0,0,0,0,2],[0.96,"+"],56.69],["NER","Niger",10.56,[20221114,0,0,0,0,0,0,0,1,2],[0.0,"="],19.75],["TUR","Turkey",11.11,[20221031,0,0,0,0,0,0,0,0,2],[0.0,"="],62.3],["TTO","Trinidad and Tobago",11.11,[20221108,0,0,0,0,0,0,0,0,1],[1.48,"="],46.82],["SAU","Saudi Arabia",11.11,[20221031,0,0,0,0,0,0,0,0,2],[0.22,"-"],69.57],["MNG","Mongolia",11.11,[20221025,0,0,0,0,0,0,0,0,1],[7.23,"-"],64.02],["IRL","Ireland",11.11,[20221112,0,0,0,0,0,0,0,0,1],[4.81,"="],80.73],["ROU","Romania",11.11,[20221114,0,0,0,0,0,0,0,0,1],[1.83,"-"],41.28],["JAM","Jamaica",11.11,[20221016,0,0,0,0,0,0,0,0,1],[0.36,"="],26.01],["QAT","Qatar",11.11,[20221106,0,0,0,0,0,0,0,0,0],[10.21,"-"],105.7],["PSE","Palestine",11.11,[20221105,0,0,0,0,0,0,0,0,1],[],33.85],["PRT","Portugal",11.11,[20221010,0,0,0,0,0,0,0,0,0],[5.81,"-"],86.45],["KGZ","Kyrgyz Republic",11.11,[20221030,0,0,0,0,0,0,0,0,2],[0.06,"+"],20.42],["SVN","Slovenia",11.11,[20221114,0,0,0,0,0,0,0,0,2],[37.15,"+"],57.66],["HRV","Croatia",11.11,[20221120,0,0,0,0,0,0,0,0,2],[4.56,"-"],55.82],["NLD","Netherlands",11.11,[20221110,0,0,0,0,0,0,0,0,0],[4.75,"="],68.08],["MDG","Madagascar",11.11,[20220926,0,0,0,0,0,0,0,0,1],[0.1,"="],6.11],["MDA","Moldova",11.11,[20221118,0,0,0,0,0,0,0,0,1],[0.98,"="],32.79],["MCO","Monaco",11.11,[20221104,0,0,0,0,0,0,0,0,2],[45.14,"="],70.34],["SWE","Sweden",11.11,[20221105,0,0,0,0,0,0,0,0,0],[5.8,"="],72.31],["NOR","Norway",11.11,[20221110,0,0,0,0,0,0,0,0,1],[2.36,"+"],74.61],["NZL","New Zealand",11.11,[20221120,0,0,0,0,0,0,0,0,-1],[71.26,"="],79.75],["MLT","Malta",11.11,[20221116,0,0,0,0,0,0,0,0,2],[3.07,"-"],88.35],["LUX","Luxembourg",11.11,[20221120,0,0,0,0,0,0,0,0,0],[23.1,"-"],71.43],["LSO","Lesotho",11.11,[20221115,0,0,0,0,0,0,0,0,1],[0.0,"="],37.85],["SRB","Serbia",11.11,[20221024,0,0,0,0,0,0,0,0,2],[7.15,"+"],47.71],["LIE","Liechtenstein",11.11,[20221105,0,0,0,0,0,0,0,0,1],[24.73,"+"],67.22],["SVK","Slovak Republic",11.11,[20221118,0,0,0,0,0,0,0,0,2],[3.29,"+"],45.68],["SYR","Syria",11.11,[20221120,0,0,0,0,0,0,0,0,3],[0.01,"="],9.51],["KWT","Kuwait",11.11,[20221120,0,0,0,0,0,0,0,0,1],[0.36,"-"],78.27],["LTU","Lithuania",11.11,[20221112,0,0,0,0,0,0,0,0,1],[8.2,"+"],68.35],["PNG","Papua New Guinea",11.11,[20221120,0,0,0,0,0,0,0,0,2],[0.07,"-"],2.98],["KOR","South Korea",11.11,[20221106,0,0,0,0,0,0,0,0,2],[101.38,"-"],86.26],["SMR","San Marino",11.11,[20221115,0,0,0,0,0,0,0,0,1],[0.0,"-"],70.15],["CYP","Cyprus",11.11,[20221107,0,0,0,0,0,0,0,0,3],[44.21,"="],72.07],["CZE","Czech Republic",11.11,[20221111,0,0,0,0,0,0,0,0,1],[3.6,"+"],65.67],["CPV","Cape Verde",11.11,[20221107,0,0,0,0,0,0,0,0,2],[3.47,"+"],52.05],["GRL","Greenland",11.11,[20221106,0,0,0,0,0,0,0,0,1],[0.0,"="],68.15],["DNK","Denmark",11.11,[20221117,0,0,0,0,0,0,0,0,0],[9.36,"-"],81.09],["ECU","Ecuador",11.11,[20221120,0,0,0,0,0,0,0,0,2],[0.0,"="],78.26],["EGY","Egypt",11.11,[20221110,0,0,0,0,0,0,0,0,3],[0.0,"="],36.03],["ESP","Spain",11.11,[20221030,0,0,0,0,0,0,0,0,2],[6.78,"="],85.49],["BRN","Brunei",11.11,[20221031,0,0,0,0,0,0,0,0,1],[139.17,"="],99.28],["EST","Estonia",11.11,[20221004,0,0,0,0,0,0,0,0,1],[5.26,"="],63.91],["BRB","Barbados",11.11,[20221114,0,0,0,0,0,0,0,0,2],[6.02,"="],55.0],["CUB","Cuba",11.11,[20221108,0,0,0,0,0,0,0,0,1],[0.02,"="],89.19],["BLZ","Belize",11.11,[20221118,0,0,0,0,0,0,0,0,0],[0.0,"-"],54.58],["ZAF","South Africa",11.11,[20221113,0,0,0,0,0,0,0,0,0],[0.91,"-"],32.59],["ALB","Albania",11.11,[20221120,0,0,0,0,0,0,0,0,0],[0.48,"-"],44.62],["ARE","United Arab Emirates",11.11,[20221120,0,0,0,0,0,0,0,0,2],[2.24,"+"],103.72],["AUS","Australia",11.11,[20221120,0,0,0,0,0,0,0,0,0],[43.06,"+"],83.22],["BHR","Bahrain",11.11,[20221107,0,0,0,0,0,0,0,0,2],[11.82,"-"],83.32],["VUT","Vanuatu",11.11,[20221004,0,0,0,0,0,0,0,0,2],[0.0,"="],40.31],["CRI","Costa Rica",11.11,[20221031,0,0,0,0,0,0,0,0,2],[7.66,"="],81.82],["GAB","Gabon",11.11,[20221108,0,0,0,0,0,0,0,0,3],[0.17,"="],10.77],["BGR","Bulgaria",11.11,[20221108,0,0,0,0,0,0,0,0,0],[3.28,"-"],30.58],["FRO","Faeroe Islands",11.11,[20221030,0,0,0,0,0,0,0,0,0],[0.0,"="],76.99],["FRA","France",11.11,[20221017,0,0,0,0,0,0,0,0,1],[48.6,"+"],78.31],["ARG","Argentina",13.44,[20221119,0,0,0,0,0,0,0,0,1],[0.7,"="],83.2],["CAF","Central African Republic",13.89,[20221112,0,0,0,0,0,0,0,1,3],[0.0,"="],28.98],["PRY","Paraguay",13.89,[20221120,0,0,0,0,0,0,0,1,2],[0.04,"="],52.01],["CHL","Chile",13.89,[20221114,0,0,0,0,0,0,0,1,2],[28.59,"-"],90.24],["CMR","Cameroon",13.89,[20221119,0,0,0,0,0,0,0,1,0],[0.0,"="],4.61],["COG","Congo",13.89,[20221115,0,0,0,0,0,0,0,1,0],[1.39,"="],10.96],["NIC","Nicaragua",13.89,[20221106,0,0,0,0,0,0,0,1,0],[0.03,"="],84.01],["BGD","Bangladesh",13.89,[20221113,0,0,0,0,0,0,0,1,4],[0.02,"="],72.87],["VEN","Venezuela",13.89,[20221120,0,0,0,0,0,0,0,1,3],[0.19,"-"],50.48],["UGA","Uganda",13.89,[20221028,0,0,0,0,0,0,0,1,3],[0.03,"-"],27.02],["LBY","Libya",13.89,[20221120,0,0,0,0,0,0,0,1,0],[0.04,"+"],18.05],["GMB","Gambia",13.89,[20221111,0,0,0,0,0,0,0,1,3],[0.0,"="],16.79],["SOM","Somalia",13.89,[20221108,0,0,0,0,0,0,0,1,2],[0.0,"="],33.74],["URY","Uruguay",13.89,[20221120,0,0,0,0,0,0,0,1,1],[3.5,"+"],84.56],["TCD","Chad",13.89,[20221111,0,0,0,0,0,0,0,1,3],[0.0,"-"],20.44],["CIV","Cote d'Ivoire",13.89,[20221118,0,0,0,0,0,0,0,1,3],[0.01,"="],32.73],["SYC","Seychelles",13.89,[20221114,0,0,0,0,0,0,0,1,2],[0.0,"="],76.14],["LBN","Lebanon",13.89,[20221120,0,0,0,0,0,0,0,1,2],[1.09,"+"],43.88],["ISR","Israel",14.81,[20221120,1,0,0,0,0,0,0,0,2],[16.41,"+"],65.16],["BEL","Belgium",14.81,[20221117,0,1,0,0,0,0,0,0,2],[3.62,"-"],78.63],["DEU","Germany",14.81,[20221120,0,0,0,0,0,1,0,0,2],[28.39,"-"],76.17],["GRC","Greece",14.81,[20221024,1,0,0,0,0,0,0,0,2],[77.02,"="],73.58],["TLS","Timor-Leste",15.1,[20221104,0,0,0,0,0,0,0,1,3],[0.13,"+"],57.18],["ITA","Italy",15.51,[20221107,0,1,0,0,0,0,0,0,2],[49.23,"="],81.26],["SSD","South Sudan",16.14,[20221010,0,0,0,0,0,0,0,1,3],[0.01,"-"],19.32],["TON","Tonga",16.23,[20221120,0,0,0,0,0,0,0,1,1],[0.0,"="],71.89],["MOZ","Mozambique",17.59,[20221120,0,1,0,0,0,0,0,1,2],[0.02,"-"],41.17],["SGP","Singapore",17.59,[20221120,1,0,0,0,0,0,0,1,2],[32.29,"-"],90.96],["MEX","Mexico",17.59,[20221113,1,0,0,0,0,0,0,1,2],[0.0,"-"],64.19],["FIN","Finland",18.52,[20221117,1,1,0,0,0,0,0,0,1],[30.95,"="],78.43],["GUY","Guyana",18.52,[20221114,1,1,0,0,0,0,0,0,1],[1.34,"+"],57.08],["ETH","Ethiopia",19.44,[20221119,0,0,0,3,0,0,0,0,3],[0.02,"="],29.75],["SEN","Senegal",19.44,[20221120,0,0,0,0,1,0,0,1,3],[0.02,"+"],7.29],["MAR","Morocco",20.33,[20221115,0,1,0,0,0,0,0,0,3],[0.28,"+"],62.77],["PAN","Panama",20.37,[20221117,1,0,1,2,0,0,0,0,2],[10.27,"+"],71.66],["KHM","Cambodia",20.37,[20220930,1,0,0,0,0,0,1,1,2],[0.03,"="],86.97],["SUR","Suriname",21.3,[20221113,1,1,0,0,0,0,0,1,2],[0.0,"="],38.49],["TWN","Taiwan",21.3,[20221120,1,1,0,0,0,0,0,1,2],[74.38,"-"],85.94],["NPL","Nepal",21.83,[20221120,0,0,0,1,0,0,0,1,4],[0.02,"="],77.71],["BRA","Brazil",22.59,[20221107,0,0,0,0,0,0,2,1,2],[6.14,"="],80.2],["AGO","Angola",22.65,[20221120,0,2,0,0,0,0,0,1,2],[0.0,"="],21.96],["RUS","Russia",22.69,[20221120,0,1,2,1,0,0,0,0,2],[3.53,"+"],53.83],["VNM","Vietnam",23.15,[20221120,0,1,1,1,0,0,0,0,2],[0.43,"+"],86.03],["HND","Honduras",23.15,[20221120,0,1,1,0,0,0,0,1,3],[0.2,"+"],54.77],["MLI","Mali",24.0,[20221019,0,0,2,0,0,0,0,1,0],[0.01,"="],9.8],["MYS","Malaysia",24.07,[20221119,1,1,1,0,0,0,0,0,2],[8.32,"+"],81.1],["BMU","Bermuda",24.07,[20221120,1,1,1,0,0,0,0,0,2],[8.03,"="],74.22],["DMA","Dominica",24.07,[20221120,1,1,1,0,0,0,0,0,2],[0.0,"="],42.14],["BOL","Bolivia",24.07,[20221107,1,1,1,0,0,0,0,1,2],[0.43,"-"],50.4],["COD","Democratic Republic of Congo",24.79,[20221104,0,0,0,0,0,0,2,1,3],[0.06,"="],3.76],["SLB","Solomon Islands",24.9,[20221114,1,1,1,0,0,0,0,1,3],[62.64,"-"],35.12],["RKS","Kosovo",25.04,[20221114,2,2,2,0,0,0,0,0,1],[0.02,"="],46.29],["PHL","Philippines",25.42,[20221120,0,1,1,0,1,0,0,1,2],[1.01,"+"],63.7],["RWA","Rwanda",25.64,[20221113,0,0,0,0,0,0,0,0,0],[0.0,"-"],67.32],["USA","United States",25.84,[20221031,1,1,0,0,0,1,0,1,2],[12.9,"-"],68.72],["ABW","Aruba",25.93,[20221120,0,1,1,2,0,0,0,0,2],[9.5,"="],78.79],["BIH","Bosnia and Herzegovina",25.93,[20221107,1,0,1,2,0,0,0,0,2],[0.34,"-"],26.17],["LKA","Sri Lanka",25.93,[20221120,0,1,1,1,0,0,0,1,1],[0.08,"+"],67.57],["KEN","Kenya",26.53,[20221107,0,1,2,0,0,0,0,1,3],[0.16,"="],19.7],["SLV","El Salvador",26.85,[20221120,1,1,1,1,0,0,0,0,2],[0.0,"="],68.56],["BDI","Burundi",26.85,[20221120,0,2,1,0,0,0,0,1,1],[0.08,"="],0.18],["PER","Peru",28.7,[20221107,1,0,1,0,0,0,1,1,1],[8.56,"+"],83.18],["GRD","Grenada",29.38,[20220328,1,0,0,3,0,0,0,1,3],[0.38,"="],31.07],["TGO","Togo",30.1,[20221120,0,0,1,3,0,0,0,1,3],[0.01,"="],16.42],["LBR","Liberia",30.34,[20221031,0,1,1,0,0,0,0,1,3],[0.05,"="],67.83],["HTI","Haiti",31.48,[20221120,0,1,1,3,0,0,0,1,2],[0.01,"="],2.04],["JPN","Japan",31.48,[20221120,1,1,1,1,0,1,1,1,1],[67.2,"+"],83.07],["IDN","Indonesia",32.07,[20221120,1,1,0,0,0,0,0,1,2],[2.44,"-"],62.48],["BHS","Bahamas",32.41,[20221120,1,1,1,0,1,0,0,1,2],[0.62,"="],40.4],["GHA","Ghana",33.56,[20221114,0,2,2,0,0,0,0,1,1],[0.01,"-"],26.74],["AUT","Austria",35.19,[20221120,2,2,1,2,0,0,0,0,2],[42.56,"+"],76.32],["FJI","Fiji",35.58,[20221120,0,1,0,0,1,0,0,1,2],[0.32,"="],68.78],["GTM","Guatemala",36.57,[20221119,2,0,1,3,1,0,0,0,2],[2.49,"+"],39.31],["LAO","Laos",36.95,[20221120,1,1,1,3,0,0,0,1,3],[0.22,"+"],69.36],["IND","India",37.04,[20221010,0,1,1,0,0,2,2,1,3],[0.04,"="],67.08],["SLE","Sierra Leone",39.31,[20221120,2,2,2,0,1,0,0,1,3],[0.0,"="],32.74],["MAC","Macao",39.81,[20221119,2,1,1,2,1,0,0,1,3],[],86.22],["AZE","Azerbaijan",40.35,[20221120,0,3,2,0,0,0,2,1,0],[0.35,"+"],46.94],["PAK","Pakistan",40.35,[20221115,0,0,0,0,0,0,0,1,2],[0.01,"-"],56.06],["MMR","Myanmar",40.74,[20221107,1,1,0,0,1,2,2,1,3],[0.09,"="],50.84],["MWI","Malawi",40.74,[20221113,1,1,1,3,1,0,0,1,3],[0.0,"="],15.16],["IRQ","Iraq",41.38,[20221120,0,2,2,1,0,0,0,1,2],[0.25,"+"],17.79],["TUN","Tunisia",41.6,[20221031,0,1,2,4,0,0,0,1,3],[0.12,"="],51.67],["HKG","Hong Kong",42.3,[20221120,2,1,1,3,0,0,0,2,2],[98.61,"+"],90.21],["ZWE","Zimbabwe",53.7,[20221107,1,1,1,3,1,2,1,1,4],[0.0,"="],29.11],["IRN","Iran",53.94,[20221114,1,2,2,4,0,0,2,1,2],[0.06,"="],66.05],["NGA","Nigeria",57.68,[20221114,0,1,1,3,1,2,2,1,3],[0.0,"="],23.52],["UKR","Ukraine",60.16,[20221112,3,1,2,3,2,1,2,3,3],[2.5,"-"],38.17],["CHN","China",62.5,[20221106,2,2,2,4,1,2,2,2,3],[1.81,"+"],89.22],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3.84,"-"],45.43]];