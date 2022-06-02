const dataUpdate="2022.06.02";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["TJK","Tajikistan",2.78,[20220523,0,0,0,0,0,0,0,1,-1],[0.0,"="],51.05],["MNG","Mongolia",2.78,[20220520,0,0,0,0,0,0,0,1,2],[4.52,"-"],65.35],["DOM","Dominican Republic",5.56,[20220601,0,0,0,0,0,0,0,0,0],[3.14,"+"],54.6],["AND","Andorra",8.33,[20220523,0,0,0,0,0,0,0,0,2],[59.54,"="],69.07],["ROU","Romania",11.11,[20220523,0,0,0,0,0,0,0,0,1],[1.8,"="],42.4],["KWT","Kuwait",11.11,[20220509,0,0,0,0,0,0,0,0,0],[1.49,"="],76.41],["LVA","Latvia",11.11,[20220531,0,0,0,0,0,0,0,0,2],[8.91,"-"],69.9],["FRO","Faeroe Islands",11.11,[20220527,0,0,0,0,0,0,0,0,0],[0.0,"="],83.37],["GAB","Gabon",11.11,[20220523,0,0,0,0,0,0,0,0,2],[0.18,"="],11.23],["MDA","Moldova",11.11,[20220516,0,0,0,0,0,0,0,0,1],[0.0,"-"],26.35],["SVK","Slovak Republic",11.11,[20220516,0,0,0,0,0,0,0,0,0],[3.42,"-"],50.79],["SVN","Slovenia",11.11,[20220523,0,0,0,0,0,0,0,0,2],[12.64,"-"],58.78],["NOR","Norway",11.11,[20220525,0,0,0,0,0,0,0,0,1],[4.35,"+"],73.91],["BGR","Bulgaria",11.11,[20220520,0,0,0,0,0,0,0,0,0],[2.8,"+"],29.86],["SRB","Serbia",11.11,[20220530,0,0,0,0,0,0,0,0,2],[2.85,"-"],47.69],["PRT","Portugal",11.11,[20220516,0,0,0,0,0,0,0,0,1],[244.06,"-"],87.06],["JAM","Jamaica",11.11,[20220601,0,0,0,0,0,0,0,0,1],[9.34,"-"],23.49],["HUN","Hungary",11.11,[20220523,0,0,0,0,0,0,0,0,2],[4.55,"="],64.32],["DNK","Denmark",11.11,[20220530,0,0,0,0,0,0,0,0,0],[8.36,"-"],82.51],["ISL","Iceland",11.11,[20220517,0,0,0,0,0,0,0,0,0],[26.25,"-"],78.69],["CRI","Costa Rica",11.11,[20220516,0,0,0,0,0,0,0,0,1],[0.0,"-"],80.62],["ALB","Albania",11.11,[20220531,0,0,0,0,0,0,0,0,2],[0.8,"-"],43.01],["IRL","Ireland",11.11,[20220524,0,0,0,0,0,0,0,0,1],[28.34,"="],80.98],["AFG","Afghanistan",11.11,[20220522,0,2,1,0,1,0,0,0,3],[0.21,"+"],11.95],["SWE","Sweden",11.11,[20220524,0,0,0,0,0,0,0,0,0],[1.9,"="],75.22],["LTU","Lithuania",11.11,[20220531,0,0,0,0,0,0,0,0,1],[3.91,"-"],69.74],["GBR","United Kingdom",12.96,[20220518,1,0,0,0,0,0,0,0,1],[6.58,"-"],73.22],["MLT","Malta",13.89,[20220530,0,0,0,0,0,0,0,1,2],[17.37,"+"],90.91],["NIC","Nicaragua",13.89,[20220523,0,0,0,0,0,0,0,1,0],[0.0,"="],71.6],["SDN","Sudan",13.89,[20220530,0,0,0,0,0,0,0,1,0],[0.04,"+"],8.09],["GEO","Georgia",13.89,[20220530,0,0,0,0,0,0,0,1,2],[0.0,"="],31.86],["BFA","Burkina Faso",13.89,[20220509,0,0,0,0,0,0,0,1,3],[0.0,"="],7.19],["GMB","Gambia",13.89,[20220510,0,0,0,0,0,0,0,1,3],[0.0,"-"],14.25],["BDI","Burundi",13.89,[20220523,0,0,0,0,0,0,0,1,2],[0.16,"-"],0.11],["TZA","Tanzania",13.89,[20220516,0,0,0,0,0,0,0,1,0],[0.0,"="],6.37],["URY","Uruguay",13.89,[20220517,0,0,0,0,0,0,0,1,1],[38.61,"+"],82.55],["BWA","Botswana",13.89,[20220531,0,0,0,0,0,0,0,1,2],[6.07,"+"],56.26],["LIE","Liechtenstein",14.81,[20220530,0,1,0,0,0,0,0,0,1],[19.48,"-"],69.06],["POL","Poland",14.81,[20220523,1,0,0,0,0,0,0,0,2],[0.59,"-"],59.53],["CIV","Cote d'Ivoire",14.81,[20220517,0,1,0,0,0,0,0,0,3],[0.07,"="],20.1],["ISR","Israel",14.81,[20220529,1,0,0,-1,0,0,0,0,2],[18.98,"-"],66.09],["CZE","Czech Republic",14.81,[20220530,0,1,0,0,0,0,0,0,2],[2.08,"+"],64.11],["KOR","South Korea",16.67,[20220521,0,0,0,0,0,0,0,2,3],[28.28,"-"],86.91],["PSE","Palestine",16.67,[20220520,0,0,0,0,0,0,0,2,4],[],33.88],["BLR","Belarus",16.67,[20220524,0,0,0,0,0,0,0,2,1],[0.0,"="],64.21],["BHR","Bahrain",17.59,[20220516,1,0,0,0,0,0,0,1,2],[28.36,"+"],69.82],["DEU","Germany",17.59,[20220530,0,0,0,0,0,1,-1,1,2],[34.42,"+"],76.88],["CAF","Central African Republic",18.52,[20220522,0,0,0,0,0,2,0,2,3],[0.0,"="],21.07],["CUB","Cuba",18.52,[20220527,1,1,0,0,0,0,0,0,2],[0.34,"-"],88.04],["NLD","Netherlands",19.44,[20220525,0,0,0,0,0,0,0,3,0],[6.13,"+"],72.26],["CHE","Switzerland",19.44,[20220521,0,0,0,0,0,0,0,3,0],[11.44,"-"],68.83],["TLS","Timor-Leste",19.44,[20220530,0,0,0,1,0,0,0,2,3],[0.21,"+"],49.46],["BEN","Benin",19.44,[20220523,0,0,0,0,1,0,0,1,2],[0.0,"="],21.11],["MCO","Monaco",20.37,[20220521,0,1,0,0,0,0,0,2,2],[22.57,"="],64.95],["JOR","Jordan",20.37,[20220522,0,1,0,2,0,0,0,0,2],[0.38,"="],43.84],["GRL","Greenland",22.22,[20220530,0,0,0,0,0,0,0,4,1],[0.0,"="],67.7],["GUM","Guam",22.22,[20220523,0,0,0,0,0,0,0,4,1],[]],["BMU","Bermuda",22.22,[20220601,0,0,0,0,0,0,0,4,2],[71.8,"="],76.75],["SWZ","Eswatini",23.15,[20220526,0,1,1,0,0,0,0,1,4],[3.12,"-"],28.67],["BEL","Belgium",23.15,[20220530,0,1,0,0,0,0,0,3,2],[11.28,"="],78.62],["FRA","France",23.15,[20220518,0,1,0,0,0,0,0,3,2],[28.07,"+"],78.34],["MEX","Mexico",23.15,[20220501,1,0,0,0,1,0,0,1,2],[1.8,"+"],61.37],["ZMB","Zambia",23.15,[20220523,0,1,1,-1,0,0,0,1,3],[0.4,"+"],17.3],["RUS","Russia",23.15,[20220523,0,1,0,0,0,1,0,3,2],[2.88,"-"],50.69],["NAM","Namibia",23.15,[20220516,0,1,1,2,0,0,0,1,1],[7.01,"+"],15.87],["BOL","Bolivia",23.15,[20220530,2,1,0,0,0,0,0,1,2],[1.34,"-"],50.37],["KHM","Cambodia",24.07,[20220509,1,1,1,0,0,0,0,2,2],[0.0,"="],84.27],["EST","Estonia",24.07,[20220526,1,1,0,0,0,0,0,2,1],[8.86,"-"],63.89],["HRV","Croatia",24.07,[20220523,1,1,1,0,0,0,0,2,2],[6.82,"-"],54.98],["KAZ","Kazakhstan",25.0,[20220516,1,1,1,0,0,0,1,1,3],[0.04,"-"],48.87],["LUX","Luxembourg",25.0,[20220531,0,0,0,0,1,0,0,3,2],[26.79,"+"],72.78],["VEN","Venezuela",25.0,[20220524,0,0,0,0,1,0,0,3,3],[0.12,"="],49.77],["ABW","Aruba",25.0,[20220516,0,0,1,2,0,0,0,1,2],[96.07,"="],76.84],["VNM","Vietnam",25.93,[20220521,0,1,1,2,0,0,0,0,3],[1.17,"-"],80.72],["COL","Colombia",25.93,[20220529,1,1,2,0,0,0,0,1,3],[1.22,"="],69.79],["MDG","Madagascar",26.85,[20220424,1,1,0,2,0,2,0,1,3],[0.03,"="],4.07],["GUY","Guyana",26.85,[20220509,1,1,0,0,0,0,0,3,1],[7.65,"+"],46.34],["PRY","Paraguay",26.85,[20220502,1,1,1,0,0,0,0,1,2],[0.76,"="],47.45],["SYR","Syria",26.85,[20220531,1,1,1,0,0,0,0,1,2],[0.01,"="],8.75],["SEN","Senegal",26.85,[20220530,1,1,1,0,0,0,0,1,3],[0.02,"-"],6.11],["TWN","Taiwan",26.85,[20220522,1,1,0,0,0,0,0,3,3],[338.28,"-"],79.72],["SUR","Suriname",26.85,[20220502,1,1,0,0,0,0,0,3,1],[3.19,"-"],40.2],["FIN","Finland",26.85,[20220530,1,1,0,0,1,0,0,1,1],[28.28,"="],78.02],["AZE","Azerbaijan",26.85,[20220512,2,3,1,0,0,0,0,1,0],[0.07,"+"],47.43],["CHL","Chile",27.31,[20220522,1,1,1,2,0,0,0,2,3],[38.76,"+"],91.18],["GRC","Greece",27.78,[20220530,1,2,1,0,0,0,0,0,2],[34.77,"-"],73.53],["CMR","Cameroon",27.78,[20220530,0,0,1,3,0,0,0,1,3],[0.09,"="],4.46],["COG","Congo",28.7,[20220523,0,1,1,2,0,0,0,1,3],[0.0,"="],11.55],["MOZ","Mozambique",28.7,[20220523,0,1,1,2,0,0,0,1,2],[0.07,"+"],43.83],["COD","Democratic Republic of Congo",28.7,[20220509,0,1,1,0,0,0,1,1,4],[0.12,"="],1.29],["YEM","Yemen",28.7,[20220516,0,1,1,0,0,2,0,3,1],[0.0,"="],1.41],["UZB","Uzbekistan",28.7,[20220519,0,1,2,0,0,0,0,1,1],[0.04,"="],43.73],["ESP","Spain",29.17,[20220525,0,2,1,3,0,0,0,1,2],[26.95,"-"],86.63],["NER","Niger",29.63,[20220531,0,0,0,3,0,2,0,1,3],[0.0,"="],6.17],["NZL","New Zealand",29.63,[20220530,0,2,0,0,0,0,0,4,2],[144.62,"+"],80.06],["PAN","Panama",30.56,[20220527,0,0,2,2,0,0,0,1,2],[73.99,"-"],70.78],["NGA","Nigeria",30.56,[20220523,0,0,1,3,0,0,0,2,3],[0.0,"-"],7.96],["TUR","Turkey",30.56,[20220529,0,0,0,0,1,0,2,1,2],[1.22,"-"],62.4],["PRI","Puerto Rico",30.56,[20220601,0,0,2,0,0,0,0,3,2],[]],["GRD","Grenada",31.48,[20220328,1,0,0,3,0,0,0,3,3],[45.7,"-"],33.95],["CPV","Cape Verde",31.48,[20220516,0,0,1,1,0,1,1,1,2],[3.91,"+"],54.71],["HTI","Haiti",31.48,[20220523,0,1,1,3,0,0,0,1,2],[0.05,"-"],1.12],["QAT","Qatar",31.48,[20220516,1,0,1,0,1,0,0,2,3],[6.7,"+"],89.1],["SSD","South Sudan",32.41,[20220509,0,0,1,0,0,2,1,1,2],[0.05,"+"],5.6],["DMA","Dominica",32.41,[20220530,1,1,1,2,0,0,0,1,3],[85.73,"="],42.01],["LSO","Lesotho",32.41,[20220526,0,2,2,2,0,0,0,1,4],[0.35,"="],34.07],["UGA","Uganda",32.41,[20220509,1,1,1,2,1,0,0,1,4],[0.01,"-"],22.63],["MAC","Macao",32.41,[20220509,1,1,1,0,0,0,0,3,2],[],87.83],["TGO","Togo",33.33,[20220530,0,0,0,4,0,2,0,4,4],[0.06,"="],18.37],["ZAF","South Africa",34.26,[20220522,0,1,1,2,1,0,0,1,2],[5.3,"-"],31.28],["HND","Honduras",34.26,[20220530,0,2,1,0,0,2,0,1,3],[0.74,"+"],54.01],["BGD","Bangladesh",34.26,[20220530,2,1,1,0,0,1,0,1,4],[0.02,"="],70.69],["AUT","Austria",35.19,[20220529,2,2,1,2,0,0,0,0,2],[22.3,"+"],73.17],["TTO","Trinidad and Tobago",35.19,[20220516,1,1,1,0,0,0,0,4,3],[22.87,"-"],50.78],["VIR","United States Virgin Islands",35.19,[20220530,0,1,1,3,0,1,0,1,2],[]],["BIH","Bosnia and Herzegovina",36.11,[20220519,1,1,1,2,0,1,0,1,2],[0.59,"+"],25.93],["KGZ","Kyrgyz Republic",36.11,[20220523,0,0,2,4,0,0,0,1,2],[0.0,"="],19.67],["IND","India",37.04,[20220515,0,1,1,0,0,2,2,1,3],[0.19,"="],63.87],["SOM","Somalia",37.04,[20220524,1,1,1,1,0,2,0,1,3],[0.03,"-"],8.66],["RKS","Kosovo",37.04,[20220530,2,2,2,0,0,0,0,0,1],[0.3,"-"],46.19],["ETH","Ethiopia",37.04,[20220531,0,1,1,3,1,0,0,1,3],[0.15,"+"],18.06],["GTM","Guatemala",37.5,[20220530,2,1,1,3,0,0,0,1,4],[3.03,"+"],34.1],["BRB","Barbados",37.96,[20220523,1,1,1,3,0,0,0,2,3],[63.18,"-"],53.12],["PHL","Philippines",37.96,[20220523,1,2,1,0,1,0,0,4,4],[0.17,"="],63.8],["SLV","El Salvador",37.96,[20220524,1,1,2,1,1,0,0,0,4],[1.47,"="],66.12],["LKA","Sri Lanka",37.96,[20220509,1,0,1,3,0,1,0,2,3],[0.04,"="],67.44],["ARE","United Arab Emirates",37.96,[20220509,1,1,2,1,0,0,0,2,2],[3.95,"+"],97.11],["ITA","Italy",38.89,[20220515,1,2,1,0,1,0,0,2,2],[31.45,"-"],79.4],["IRQ","Iraq",38.89,[20220502,0,2,2,1,0,1,0,1,3],[0.24,"+"],18.15],["USA","United States",38.89,[20220526,2,2,0,0,1,0,1,4,2],[30.46,"+"],66.67],["BTN","Bhutan",38.89,[20220523,0,2,2,0,0,1,0,2,4],[0.26,"="],86.17],["KIR","Kiribati",39.81,[20220523,3,0,0,0,0,2,2,2,4],[0.0,"="],49.98],["ARG","Argentina",39.81,[20220523,0,1,2,4,0,0,0,1,2],[16.37,"="],80.91],["PNG","Papua New Guinea",40.74,[20220517,0,1,2,2,0,0,0,4,2],[0.12,"+"],2.89],["MLI","Mali",40.74,[20220510,0,2,2,3,0,0,0,1,3],[0.03,"="],5.41],["EGY","Egypt",40.74,[20220516,1,1,2,3,0,0,0,1,4],[0.0,"="],33.34],["AGO","Angola",40.74,[20220530,0,2,1,0,1,0,1,2,2],[0.14,"-"],19.32],["SGP","Singapore",41.67,[20220526,1,1,1,2,0,1,0,3,2],[61.49,"-"],91.5],["LBY","Libya",42.13,[20220523,1,1,2,4,0,0,0,2,3],[0.06,"="],16.42],["BLZ","Belize",42.59,[20220522,2,2,1,0,1,0,1,1,0],[22.13,"-"],52.26],["ZWE","Zimbabwe",42.59,[20220524,0,2,1,3,0,2,0,1,3],[1.41,"+"],29.85],["CAN","Canada",42.59,[20220530,2,0,0,0,0,1,2,4,2],[7.09,"-"],82.48],["PAK","Pakistan",43.06,[20220529,1,1,1,1,1,1,2,3,4],[0.03,"-"],54.73],["AUS","Australia",43.06,[20220511,0,2,2,2,1,0,2,1,2],[134.84,"-"],83.82],["GHA","Ghana",43.52,[20220422,0,2,2,4,0,0,0,1,4],[0.0,"-"],19.95],["TCD","Chad",43.52,[20220525,1,1,1,2,1,0,1,1,3],[0.0,"="],12.35],["MRT","Mauritania",43.52,[20220531,1,1,2,4,0,0,0,1,3],[0.22,"-"],22.66],["SMR","San Marino",43.52,[20220522,1,1,2,4,0,0,0,1,1],[33.26,"-"],69.48],["MUS","Mauritius",43.52,[20220427,0,2,2,3,0,0,0,2,3],[12.81,"="],75.66],["KEN","Kenya",44.44,[20220516,0,2,2,3,0,1,0,1,1],[0.17,"+"],16.65],["JPN","Japan",45.37,[20220530,1,1,1,1,0,1,1,4,1],[19.62,"-"],80.98],["ERI","Eritrea",45.37,[20220503,1,1,2,3,1,2,0,2,3],[0.02,"="]],["THA","Thailand",45.83,[20220522,0,2,2,2,1,2,1,1,3],[7.06,"+"],75.03],["NPL","Nepal",46.3,[20220530,0,1,2,1,1,1,1,1,4],[0.03,"="],66.97],["TON","Tonga",46.3,[20220515,2,1,0,0,0,2,1,4,4],[19.46,"="],67.9],["LBN","Lebanon",46.3,[20220510,2,1,1,1,1,2,0,1,4],[1.02,"-"],34.9],["RWA","Rwanda",46.3,[20220502,1,1,2,1,2,0,0,1,-1],[0.06,"-"],64.1],["SYC","Seychelles",46.3,[20220531,1,1,2,3,1,0,0,1,3],[34.86,"-"],81.44],["BRN","Brunei",46.3,[20220530,0,1,1,2,1,1,0,4,4],[53.98,"+"],94.21],["TUN","Tunisia",47.22,[20220517,1,2,2,4,0,0,0,1,3],[0.62,"-"],53.37],["MWI","Malawi",47.22,[20220530,0,1,1,3,1,2,0,2,3],[0.03,"="],5.8],["CYP","Cyprus",47.22,[20220515,1,1,1,1,1,1,1,2,3],[20.99,"="],71.92],["DZA","Algeria",47.22,[20220515,1,2,1,4,1,0,0,1,3],[0.01,"="],14.53],["SLE","Sierra Leone",48.15,[20220530,2,2,2,0,1,0,0,2,3],[0.0,"="],18.05],["BHS","Bahamas",48.15,[20220523,1,2,1,3,1,1,0,1,3],[14.68,"-"],39.8],["LBR","Liberia",48.15,[20220516,1,3,2,0,0,0,0,4,4],[0.0,"="],27.76],["GIN","Guinea",49.07,[20220531,1,1,1,4,0,0,2,1,3],[0.11,"="],18.6],["IDN","Indonesia",50.0,[20220515,1,1,1,0,1,1,1,4,3],[0.1,"="],60.61],["LAO","Laos",55.09,[20220529,2,2,1,4,1,2,1,0,3],[0.33,"-"],68.47],["OMN","Oman",55.56,[20220502,1,2,2,4,0,0,0,4,2],[0.0,"="],58.83],["HKG","Hong Kong",56.48,[20220523,2,2,2,4,0,0,0,3,3],[3.55,"+"],83.77],["TKM","Turkmenistan",57.41,[20220530,0,2,2,4,0,0,2,4,3],[],47.73],["FJI","Fiji",57.41,[20220530,0,2,2,0,2,0,2,3,1],[1.74,"="],70.25],["MMR","Myanmar",57.41,[20220521,1,1,0,2,1,2,2,4,4],[0.03,"="],44.39],["MAR","Morocco",58.33,[20220523,1,2,2,4,2,0,0,1,3],[0.54,"+"],62.66],["DJI","Djibouti",58.33,[20220530,1,1,2,4,1,1,1,1,3],[0.0,"="],13.07],["MYS","Malaysia",63.43,[20220517,2,2,2,4,1,1,2,2,3],[5.18,"-"],82.59],["SAU","Saudi Arabia",65.74,[20220523,2,2,1,3,2,1,2,0,2],[1.57,"+"],70.46],["ECU","Ecuador",65.74,[20220530,0,2,2,4,2,0,2,1,2],[2.05,"-"],78.02],["IRN","Iran",67.59,[20220529,3,3,2,4,0,0,2,3,2],[0.25,"="],68.05],["BRA","Brazil",69.91,[20220411,2,2,2,4,1,2,2,4,2],[12.25,"+"],77.65],["PER","Peru",70.37,[20220516,1,3,2,0,2,0,2,4,3],[1.87,"+"],81.86],["UKR","Ukraine",75.0,[20220524,3,1,2,3,2,1,2,3,3],[0.0,"="],34.86],["VUT","Vanuatu",75.46,[20220528,3,3,2,4,2,2,1,4,4],[16.42,"-"],37.57],["CHN","China",79.17,[20220511,3,3,2,4,2,3,2,2,4],[0.02,"="],86.95],["SLB","Solomon Islands",82.87,[20220424,3,2,2,4,2,1,2,4,2],[0.0,"="],23.63],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9.55,"+"],45.11]];