const dataUpdate="2023.03.17";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["AFG","Afghanistan",0.0,[20221231,0,0,0,0,0,0,0,0,0],[0.03,"-"],32.93],["LVA","Latvia",0.0,[20221231,0,0,0,0,0,0,0,0,2],[1.55,"+"],70.57],["HUN","Hungary",0.0,[20221231,0,0,0,0,0,0,0,0,2],[1.3,"="],62.28],["MDG","Madagascar",0.0,[20221231,0,0,0,0,0,0,0,0,1],[0.01,"="],7.68],["KIR","Kiribati",0.0,[20221231,0,0,0,0,0,0,0,0,0],[0.12,"="],62.08],["BLR","Belarus",0.0,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],67.23],["JOR","Jordan",0.0,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],40.39],["PSE","Palestine",0.0,[20221231,0,0,0,0,0,0,0,0,1],[],33.85],["BWA","Botswana",0.0,[20221231,0,0,0,0,0,0,0,0,0],[0.19,"="],62.31],["BTN","Bhutan",0.0,[20221231,0,0,0,0,0,0,0,0,1],[0.13,"="],86.61],["DJI","Djibouti",2.78,[20221231,0,0,0,0,0,0,0,1,2],[0.0,"="],31.0],["TZA","Tanzania",2.78,[20221231,0,0,0,0,0,0,0,1,0],[0.01,"="],49.0],["NAM","Namibia",5.56,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],20.76],["GAB","Gabon",5.56,[20221231,0,0,0,0,0,0,0,0,3],[0.0,"="],10.78],["DOM","Dominican Republic",5.56,[20221231,0,0,0,0,0,0,0,0,0],[0.11,"="],54.2],["CHE","Switzerland",5.56,[20221231,0,0,0,0,0,0,0,0,0],[2.43,"="],68.79],["MUS","Mauritius",5.56,[20221231,0,0,0,0,0,0,0,0,2],[6.76,"="],83.74],["THA","Thailand",5.56,[20221231,0,0,0,0,0,0,0,0,1],[0.03,"="],74.6],["MDA","Moldova",5.56,[20221231,0,0,0,0,0,0,0,0,1],[13.07,"="],32.87],["CAN","Canada",5.56,[20221231,0,0,0,0,0,0,0,0,2],[3.27,"-"],82.6],["GBR","United Kingdom",5.56,[20221231,0,0,0,0,0,0,0,0,1],[6.07,"+"],75.19],["KHM","Cambodia",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],87.33],["YEM","Yemen",5.56,[20221231,0,0,1,0,0,0,0,0,0],[0.0,"="],2.29],["GEO","Georgia",5.56,[20221231,0,0,0,0,0,0,0,0,2],[6.94,"="],34.08],["UZB","Uzbekistan",5.56,[20221231,0,0,0,0,0,0,0,0,1],[0.08,"="],52.27],["KAZ","Kazakhstan",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],54.79],["SRB","Serbia",5.56,[20221231,0,0,0,0,0,0,0,0,0],[9.42,"-"],47.71],["ISL","Iceland",5.56,[20221231,0,0,0,0,0,0,0,0,0],[1.84,"="],77.82],["SOM","Somalia",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],37.11],["PNG","Papua New Guinea",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.03,"="],3.11],["SDN","Sudan",5.56,[20221231,0,0,0,0,0,0,0,0,0],[0.01,"="],22.56],["TJK","Tajikistan",8.33,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"="],51.95],["BFA","Burkina Faso",8.33,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"="],15.45],["CAF","Central African Republic",8.33,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"="],40.63],["ZMB","Zambia",8.33,[20221231,0,0,0,0,0,0,0,1,3],[0.04,"-"],43.7],["MRT","Mauritania",8.33,[20221231,0,0,0,0,0,0,0,1,1],[0.0,"="],32.47],["CMR","Cameroon",8.33,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"="],10.36],["POL","Poland",9.26,[20221231,1,0,0,0,0,0,0,0,2],[7.35,"+"],56.81],["EGY","Egypt",10.29,[20221231,0,2,0,0,0,0,0,0,3],[0.01,"="],37.03],["SSD","South Sudan",10.55,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"="],28.42],["NER","Niger",10.55,[20221231,0,0,0,0,0,0,0,1,2],[0.0,"="],20.45],["LIE","Liechtenstein",11.11,[20221231,0,0,0,0,0,0,0,0,0],[4.12,"="],67.24],["TUR","Turkey",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],62.31],["LSO","Lesotho",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.0,"="],40.56],["SVK","Slovak Republic",11.11,[20221231,0,0,0,0,0,0,0,0,2],[4.67,"+"],45.68],["KWT","Kuwait",11.11,[20221231,0,0,0,0,0,0,0,0,1],[1.35,"="],78.36],["TTO","Trinidad and Tobago",11.11,[20221231,0,0,0,0,0,0,0,0,2],[6.35,"="],46.82],["KGZ","Kyrgyz Republic",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.08,"="],20.71],["LTU","Lithuania",11.11,[20221231,0,0,0,0,0,0,0,0,1],[10.0,"-"],68.37],["KOR","South Korea",11.11,[20221231,0,0,0,0,0,0,0,0,2],[19.93,"-"],85.71],["MCO","Monaco",11.11,[20221231,0,0,0,0,0,0,0,0,2],[2.18,"="],70.34],["SMR","San Marino",11.11,[20221231,0,0,0,0,0,0,0,0,1],[13.89,"="],70.15],["SWE","Sweden",11.11,[20221231,0,0,0,0,0,0,0,0,0],[1.14,"+"],71.98],["SWZ","Eswatini",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.84,"="],34.74],["SAU","Saudi Arabia",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.21,"+"],69.8],["RUS","Russia",11.11,[20221231,0,0,0,0,0,0,0,0,0],[8.59,"-"],54.99],["ROU","Romania",11.11,[20221231,0,0,0,0,0,0,0,0,1],[4.24,"="],41.28],["QAT","Qatar",11.11,[20221231,0,0,0,0,0,0,0,0,2],[3.54,"+"],105.81],["PRY","Paraguay",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.15,"="],52.26],["LUX","Luxembourg",11.11,[20221231,0,0,0,0,0,0,0,0,0],[17.48,"="],71.44],["PRT","Portugal",11.11,[20221231,0,0,0,0,0,0,0,0,0],[3.35,"="],86.61],["SYR","Syria",11.11,[20221231,0,0,0,0,0,0,0,0,3],[0.0,"="],10.2],["OMN","Oman",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],66.62],["NZL","New Zealand",11.11,[20221231,0,0,0,0,0,0,0,0,2],[33.93,"+"],79.85],["NOR","Norway",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.94,"-"],74.61],["NLD","Netherlands",11.11,[20221231,0,0,0,0,0,0,0,0,0],[3.19,"="],68.08],["NGA","Nigeria",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],30.53],["MNG","Mongolia",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.01,"="],64.02],["MLT","Malta",11.11,[20221231,0,0,0,0,0,0,0,0,2],[4.3,"="],88.41],["PER","Peru",11.11,[20221231,0,0,0,0,0,0,0,0,1],[1.21,"+"],83.86],["HRV","Croatia",11.11,[20221231,0,0,0,0,0,0,0,0,2],[1.16,"="],55.86],["IRL","Ireland",11.11,[20221231,0,0,0,0,0,0,0,0,1],[1.89,"="],80.85],["HKG","Hong Kong",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],90.76],["DZA","Algeria",11.11,[20221231,0,0,0,0,0,0,0,0,3],[0.01,"="],14.43],["DNK","Denmark",11.11,[20221231,0,0,0,0,0,0,0,0,0],[2.01,"+"],80.71],["CZE","Czech Republic",11.11,[20221231,0,0,0,0,0,0,0,0,0],[8.37,"+"],65.68],["CYP","Cyprus",11.11,[20221231,0,0,0,0,0,0,0,0,1],[18.84,"="],72.1],["CRI","Costa Rica",11.11,[20221231,0,0,0,0,0,0,0,0,2],[15.6,"="],83.28],["CPV","Cape Verde",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],52.05],["BRN","Brunei",11.11,[20221231,0,0,0,0,0,0,0,0,2],[31.45,"="],99.45],["BRB","Barbados",11.11,[20221231,0,0,0,0,0,0,0,0,2],[7.61,"+"],55.04],["BLZ","Belize",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],54.63],["VUT","Vanuatu",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],49.66],["BHR","Bahrain",11.11,[20221231,0,0,0,0,0,0,0,0,2],[22.1,"+"],83.33],["BGR","Bulgaria",11.11,[20221231,0,0,0,0,0,0,0,0,0],[1.25,"+"],30.62],["BEN","Benin",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.01,"="],20.54],["ZAF","South Africa",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.63,"-"],35.13],["AUS","Australia",11.11,[20221231,0,0,0,0,0,0,0,0,0],[8.16,"-"],82.72],["AND","Andorra",11.11,[20221231,0,0,0,0,0,0,0,0,2],[2.77,"="],67.0],["ALB","Albania",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.24,"+"],44.85],["ESP","Spain",11.11,[20221231,0,0,0,0,0,0,0,0,2],[2.17,"="],85.64],["EST","Estonia",11.11,[20221231,0,0,0,0,0,0,0,0,1],[3.28,"="],64.01],["SVN","Slovenia",11.11,[20221231,0,0,0,0,0,0,0,0,2],[18.06,"+"],57.66],["GRC","Greece",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],73.61],["GMB","Gambia",11.11,[20221231,0,0,0,0,0,0,0,0,3],[0.07,"="],16.85],["GRL","Greenland",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.0,"="],68.17],["FRO","Faeroe Islands",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],76.99],["FRA","France",11.11,[20221231,0,0,0,0,0,0,0,0,1],[6.75,"+"],78.41],["MOZ","Mozambique",12.04,[20221231,0,1,0,0,0,0,0,1,2],[0.05,"="],56.01],["URY","Uruguay",13.89,[20221231,0,0,0,0,0,0,0,1,1],[0.0,"="],84.71],["NIC","Nicaragua",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.04,"="],86.88],["VEN","Venezuela",13.89,[20221231,0,0,0,0,0,0,0,1,3],[0.09,"="],52.88],["CIV","Cote d'Ivoire",13.89,[20221231,0,0,0,0,0,0,0,1,2],[0.03,"="],43.2],["MYS","Malaysia",13.89,[20221231,0,0,0,0,0,0,0,1,1],[0.65,"+"],81.16],["TCD","Chad",13.89,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"="],34.57],["COG","Congo",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.03,"="],10.96],["CUB","Cuba",13.89,[20221231,0,0,0,0,0,0,0,1,2],[0.04,"="],89.27],["BGD","Bangladesh",13.89,[20221231,0,0,0,0,0,0,0,1,4],[0.0,"="],80.22],["LBY","Libya",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.03,"="],18.15],["UKR","Ukraine",13.89,[20221231,0,0,0,0,0,0,0,1,1],[3.46,"+"],38.17],["ARE","United Arab Emirates",13.89,[20221231,0,0,0,0,0,0,0,1,2],[1.4,"+"],103.72],["SYC","Seychelles",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"="],76.29],["CHL","Chile",13.89,[20221231,0,0,0,0,0,0,0,1,2],[15.09,"+"],90.29],["ARG","Argentina",14.38,[20221231,0,0,0,0,0,0,0,0,1],[0.26,"="],76.59],["ISR","Israel",14.81,[20221231,1,0,0,0,0,0,0,0,2],[5.67,"-"],65.18],["DEU","Germany",14.81,[20221231,0,0,0,0,0,1,0,0,2],[7.93,"-"],76.24],["BEL","Belgium",14.81,[20221231,0,1,0,0,0,0,0,0,2],[14.26,"+"],78.66],["ECU","Ecuador",14.81,[20221231,0,0,0,0,0,1,0,0,2],[0.0,"="],79.09],["IDN","Indonesia",14.93,[20221231,0,0,0,0,0,0,0,1,1],[0.09,"+"],62.68],["TLS","Timor-Leste",15.03,[20221231,0,0,0,0,0,0,0,1,3],[0.01,"="],59.5],["TON","Tonga",16.22,[20221231,0,0,0,0,0,0,0,1,1],[0.41,"="],72.06],["IRQ","Iraq",16.67,[20221231,0,0,2,1,0,0,0,1,0],[0.0,"="],17.85],["JAM","Jamaica",16.67,[20221231,0,0,1,0,0,0,0,0,0],[1.06,"+"],26.63],["LBN","Lebanon",16.67,[20221231,0,0,0,0,1,0,0,0,2],[1.6,"+"],43.98],["AGO","Angola",17.02,[20221231,0,2,0,0,0,0,0,1,2],[0.0,"="],23.9],["TWN","Taiwan",17.59,[20221231,1,0,0,0,0,0,0,1,2],[0.0,"="],86.84],["SGP","Singapore",17.59,[20221231,1,0,0,0,0,0,0,1,2],[10.81,"="],90.85],["MEX","Mexico",17.59,[20221231,1,0,0,0,0,0,0,1,2],[2.61,"+"],64.19],["GUY","Guyana",18.52,[20221231,1,1,0,0,0,0,0,0,1],[0.11,"="],47.23],["FIN","Finland",18.52,[20221231,1,1,0,0,0,0,0,0,1],[1.72,"-"],78.47],["COL","Colombia",19.44,[20221231,1,1,0,0,0,0,0,1,1],[0.24,"="],71.23],["SEN","Senegal",19.44,[20221231,0,0,0,0,1,0,0,1,3],[0.0,"="],8.31],["BDI","Burundi",19.44,[20221231,0,0,1,0,0,0,0,1,3],[0.0,"="],0.25],["PAN","Panama",20.37,[20221231,1,0,1,0,0,0,0,0,2],[1.52,"="],71.94],["SUR","Suriname",21.3,[20221231,1,1,0,0,0,0,0,1,2],[0.0,"="],38.49],["NPL","Nepal",21.59,[20221231,0,0,0,1,0,0,0,1,4],[0.0,"="],79.33],["ITA","Italy",21.99,[20221231,0,1,0,0,0,1,0,1,2],[6.3,"="],81.26],["BRA","Brazil",22.22,[20221231,0,0,0,0,0,0,2,1,2],[0.85,"="],81.79],["ETH","Ethiopia",22.22,[20221231,0,0,0,3,0,0,0,1,3],[0.01,"="],30.26],["KEN","Kenya",22.77,[20221231,0,0,2,0,0,0,0,1,3],[0.0,"="],20.26],["HND","Honduras",23.15,[20221231,0,1,1,0,0,0,0,1,3],[0.19,"="],55.76],["VNM","Vietnam",23.15,[20221231,0,1,1,1,0,0,0,0,2],[0.01,"="],87.56],["LKA","Sri Lanka",23.15,[20221231,0,1,1,1,0,0,0,0,1],[0.01,"+"],67.57],["MLI","Mali",23.69,[20221231,0,0,2,0,0,0,0,1,1],[0.01,"-"],13.08],["BOL","Bolivia",24.07,[20221231,1,1,1,0,0,0,0,1,2],[1.05,"-"],50.4],["DMA","Dominica",24.07,[20221231,1,1,1,0,0,0,0,0,2],[0.0,"="],42.14],["BMU","Bermuda",24.07,[20221231,1,1,1,0,0,0,0,0,2],[3.21,"="],74.22],["MAR","Morocco",24.46,[20221231,0,1,0,0,0,0,0,0,3],[0.01,"="],62.79],["COD","Democratic Republic of Congo",25.0,[20221231,0,0,0,0,0,0,2,1,3],[0.0,"="],11.04],["RKS","Kosovo",25.04,[20221231,2,2,2,0,0,0,0,0,1],[1.35,"-"],46.3],["PHL","Philippines",25.41,[20221231,0,1,1,0,1,0,0,1,2],[0.11,"-"],64.07],["GIN","Guinea",25.45,[20221231,0,2,2,0,0,0,2,1,2],[0.0,"="],33.98],["RWA","Rwanda",25.64,[20221231,0,0,0,0,0,0,0,0,0],[0.02,"="],71.85],["FJI","Fiji",25.74,[20221231,0,1,1,0,0,0,0,1,2],[0.02,"-"],68.95],["ABW","Aruba",25.93,[20221231,0,1,1,2,0,0,0,0,2],[0.0,"="],79.05],["BIH","Bosnia and Herzegovina",25.93,[20221231,1,0,1,2,0,0,0,0,2],[0.4,"="],26.17],["SLV","El Salvador",26.85,[20221231,1,1,1,1,0,0,0,0,2],[0.0,"="],68.56],["BHS","Bahamas",26.85,[20221231,1,1,0,0,1,0,0,1,2],[0.0,"="],40.4],["LAO","Laos",28.61,[20221231,1,1,1,0,0,0,0,1,3],[0.01,"="],69.36],["IND","India",28.7,[20221231,0,1,0,0,0,2,2,0,3],[0.02,"="],67.17],["USA","United States",28.72,[20221231,1,1,0,0,0,1,1,1,2],[9.19,"-"],69.32],["GRD","Grenada",29.38,[20220328,1,0,0,3,0,0,0,1,3],[0.0,"="],31.07],["LBR","Liberia",29.46,[20221231,0,1,1,0,0,0,0,1,4],[0.0,"="],70.36],["TGO","Togo",30.1,[20221231,0,0,1,3,0,0,0,1,3],[0.02,"-"],17.56],["SLB","Solomon Islands",30.46,[20221231,1,1,1,0,0,0,0,1,3],[0.0,"="],35.12],["TUN","Tunisia",31.36,[20221231,0,0,2,4,0,0,0,0,3],[0.2,"="],51.79],["HTI","Haiti",31.48,[20221231,0,1,1,3,0,0,0,1,2],[0.07,"="],2.06],["JPN","Japan",33.33,[20221231,1,1,1,1,0,1,1,1,1],[7.65,"-"],83.37],["GHA","Ghana",33.38,[20221231,0,2,2,0,0,0,0,1,1],[0.03,"="],29.3],["AUT","Austria",35.19,[20221231,2,2,1,2,0,0,0,0,2],[55.51,"-"],74.74],["MAC","Macao",36.11,[20221231,2,1,1,2,0,0,0,1,2],[],92.29],["GTM","Guatemala",36.57,[20221231,2,0,1,3,1,0,0,0,2],[0.93,"-"],39.81],["MMR","Myanmar",37.04,[20221231,1,0,0,0,1,2,2,1,3],[0.0,"-"],50.84],["SLE","Sierra Leone",37.96,[20221231,2,2,2,0,1,0,0,1,3],[0.0,"="],45.82],["UGA","Uganda",38.44,[20221231,0,2,2,0,2,0,0,1,1],[0.01,"="],27.56],["PAK","Pakistan",40.54,[20221231,0,0,0,0,0,0,0,1,2],[0.02,"="],59.32],["MWI","Malawi",40.74,[20221231,1,1,1,3,1,0,0,1,3],[0.0,"="],17.74],["AZE","Azerbaijan",45.56,[20221231,0,3,2,0,0,0,2,1,0],[0.28,"-"],46.94],["CHN","China",47.69,[20221231,3,1,2,3,1,0,0,2,3],[0.0,"="],89.54],["ZWE","Zimbabwe",53.7,[20221231,1,1,1,3,1,2,1,1,4],[0.14,"="],29.11],["IRN","Iran",53.94,[20221231,1,2,2,4,0,0,2,1,2],[0.52,"-"],66.11],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[8.76,"-"],45.43]];