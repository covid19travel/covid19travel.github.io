const dataUpdate="2022.06.24";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["MNG","Mongolia",0.0,[20220608,0,0,0,0,0,0,0,0,2],[0.0,"="],65.35],["LBN","Lebanon",2.78,[20220618,0,0,0,0,0,0,0,1,-1],[9.32,"+"],35.04],["DOM","Dominican Republic",5.56,[20220601,0,0,0,0,0,0,0,0,0],[7.17,"-"],54.73],["AND","Andorra",8.33,[20220619,0,0,0,0,0,0,0,0,0],[60.09,"="],69.1],["TJK","Tajikistan",8.33,[20220608,0,0,0,0,0,0,0,1,0],[0.0,"="],51.05],["KAZ","Kazakhstan",11.11,[20220611,0,0,0,0,0,0,0,0,1],[0.14,"+"],48.96],["DNK","Denmark",11.11,[20220623,0,0,0,0,0,0,0,0,0],[25.38,"+"],82.5],["SVK","Slovak Republic",11.11,[20220619,0,0,0,0,0,0,0,0,0],[5.22,"+"],50.8],["SVN","Slovenia",11.11,[20220619,0,0,0,0,0,0,0,0,2],[24.99,"+"],58.79],["CHE","Switzerland",11.11,[20220613,0,0,0,0,0,0,0,0,0],[40.8,"="],68.86],["SWE","Sweden",11.11,[20220616,0,0,0,0,0,0,0,0,0],[4.12,"+"],75.29],["NOR","Norway",11.11,[20220622,0,0,0,0,0,0,0,0,1],[10.75,"+"],74.03],["FRO","Faeroe Islands",11.11,[20220621,0,0,0,0,0,0,0,0,0],[0.0,"="],83.37],["GAB","Gabon",11.11,[20220616,0,0,0,0,0,0,0,0,2],[0.73,"+"],11.24],["GBR","United Kingdom",11.11,[20220622,0,0,0,0,0,0,0,0,1],[24.8,"+"],73.43],["SRB","Serbia",11.11,[20220530,0,0,0,0,0,0,0,0,2],[4.67,"+"],47.71],["ROU","Romania",11.11,[20220620,0,0,0,0,0,0,0,0,1],[1.94,"="],42.42],["CRI","Costa Rica",11.11,[20220620,0,0,0,0,0,0,0,0,1],[0.0,"="],80.62],["BGR","Bulgaria",11.11,[20220620,0,0,0,0,0,0,0,0,0],[3.63,"+"],29.89],["AFG","Afghanistan",11.11,[20220613,0,2,1,0,1,0,0,0,3],[0.19,"-"],12.5],["MDA","Moldova",11.11,[20220605,0,0,0,0,0,0,0,0,1],[1.02,"+"],26.43],["LVA","Latvia",11.11,[20220617,0,0,0,0,0,0,0,0,2],[10.32,"-"],69.93],["HRV","Croatia",11.11,[20220613,0,0,0,0,0,0,0,0,4],[8.03,"-"],55.0],["HUN","Hungary",11.11,[20220523,0,0,0,0,0,0,0,0,2],[2.9,"="],64.34],["LTU","Lithuania",11.11,[20220531,0,0,0,0,0,0,0,0,1],[5.44,"-"],69.76],["ALB","Albania",11.11,[20220531,0,0,0,0,0,0,0,0,2],[6.9,"+"],43.31],["JAM","Jamaica",11.11,[20220601,0,0,0,0,0,0,0,0,1],[4.75,"-"],23.8],["IRL","Ireland",11.11,[20220524,0,0,0,0,0,0,0,0,1],[26.33,"="],81.08],["KWT","Kuwait",11.11,[20220606,0,0,0,0,0,0,0,0,1],[11.33,"="],76.68],["ISL","Iceland",11.11,[20220620,0,0,0,0,0,0,0,0,0],[39.85,"-"],78.69],["ZMB","Zambia",12.04,[20220613,0,1,0,0,0,0,0,1,3],[0.99,"+"],22.88],["MLT","Malta",13.89,[20220621,0,0,0,0,0,0,0,1,2],[85.45,"+"],91.0],["GMB","Gambia",13.89,[20220605,0,0,0,0,0,0,0,1,3],[0.0,"="],14.25],["NIC","Nicaragua",13.89,[20220523,0,0,0,0,0,0,0,1,0],[0.0,"="],80.92],["GEO","Georgia",13.89,[20220530,0,0,0,0,0,0,0,1,2],[2.21,"="],31.91],["PRY","Paraguay",13.89,[20220607,0,0,0,0,0,0,0,1,1],[2.77,"="],47.68],["PRT","Portugal",13.89,[20220613,0,0,0,0,0,0,0,1,2],[145.19,"+"],87.28],["KOR","South Korea",13.89,[20220619,0,0,0,0,0,0,0,1,3],[13.75,"+"],86.97],["TZA","Tanzania",13.89,[20220609,0,0,0,0,0,0,0,1,0],[0.0,"="],6.37],["SMR","San Marino",13.89,[20220618,0,0,0,0,0,0,0,1,1],[107.36,"="],69.49],["TUR","Turkey",13.89,[20220620,0,0,0,0,0,0,0,1,2],[0.0,"="],62.42],["VEN","Venezuela",13.89,[20220620,0,0,0,0,0,0,0,1,4],[0.43,"+"],49.77],["SDN","Sudan",13.89,[20220617,0,0,0,0,0,0,0,1,0],[0.02,"="],8.33],["AUS","Australia",13.89,[20220617,0,0,0,0,0,0,0,1,2],[107.52,"-"],83.98],["UZB","Uzbekistan",13.89,[20220619,0,0,0,0,0,0,0,1,1],[0.26,"+"],45.14],["URY","Uruguay",13.89,[20220620,0,0,0,0,0,0,0,1,1],[33.19,"="],82.8],["BFA","Burkina Faso",13.89,[20220606,0,0,0,0,0,0,0,1,3],[0.0,"-"],7.23],["BDI","Burundi",13.89,[20220620,0,0,0,0,0,0,0,1,2],[0.19,"+"],0.11],["BWA","Botswana",13.89,[20220531,0,0,0,0,0,0,0,1,2],[26.04,"="],63.03],["BEN","Benin",13.89,[20220610,0,0,0,0,0,0,0,1,2],[0.0,"-"],21.61],["LIE","Liechtenstein",14.81,[20220530,0,1,0,0,0,0,0,0,1],[47.21,"+"],69.08],["CZE","Czech Republic",14.81,[20220530,0,1,0,0,0,0,0,0,2],[4.4,"+"],64.14],["ISR","Israel",14.81,[20220620,1,0,0,0,0,0,0,0,2],[109.3,"+"],66.13],["POL","Poland",14.81,[20220604,1,0,0,0,0,0,0,0,2],[0.54,"+"],59.56],["BLR","Belarus",16.67,[20220524,0,0,0,0,0,0,0,2,1],[0.0,"="],66.42],["TLS","Timor-Leste",16.67,[20220613,0,0,0,0,0,0,0,2,3],[0.03,"+"],51.69],["KHM","Cambodia",16.67,[20220619,0,0,0,0,0,0,0,2,2],[0.0,"="],84.63],["PSE","Palestine",16.67,[20220616,0,0,0,0,0,0,0,2,4],[],33.93],["CAF","Central African Republic",16.67,[20220620,0,0,1,0,0,0,0,2,3],[0.0,"="],21.23],["BRN","Brunei",16.67,[20220620,0,0,0,0,0,0,0,2,2],[106.23,"-"],96.66],["BTN","Bhutan",16.67,[20220611,0,0,1,0,0,0,0,0,4],[0.56,"="],86.24],["OMN","Oman",17.59,[20220613,1,0,0,0,0,0,0,1,0],[1.36,"="],58.19],["DEU","Germany",17.59,[20220620,0,0,0,0,0,1,0,1,2],[94.99,"+"],75.48],["CIV","Cote d'Ivoire",17.59,[20220608,0,1,0,0,0,0,0,1,3],[0.16,"+"],20.48],["BHR","Bahrain",17.59,[20220607,1,0,0,0,0,0,0,1,2],[101.28,"+"],69.93],["MEX","Mexico",17.59,[20220620,1,0,0,0,0,0,0,1,2],[6.02,"+"],61.37],["MDG","Madagascar",17.59,[20220620,0,1,0,0,0,0,0,1,3],[0.17,"="],4.22],["MCO","Monaco",17.59,[20220606,0,1,0,0,0,0,0,1,2],[60.07,"="],64.95],["CUB","Cuba",18.52,[20220621,1,1,0,0,0,0,0,0,2],[0.21,"+"],88.11],["LUX","Luxembourg",19.44,[20220620,0,0,0,0,0,0,0,3,0],[98.0,"+"],72.8],["CPV","Cape Verde",19.44,[20220613,0,0,0,0,0,0,1,1,2],[34.74,"+"],54.71],["NLD","Netherlands",19.44,[20220622,0,0,0,0,0,0,0,3,0],[24.54,"+"],69.76],["JOR","Jordan",20.37,[20220613,0,1,0,2,0,0,0,0,0],[0.9,"="],44.09],["GUM","Guam",22.22,[20220617,0,0,0,0,0,0,0,4,1],[]],["ITA","Italy",22.22,[20220611,1,2,0,0,0,0,0,0,2],[70.38,"+"],79.42],["BMU","Bermuda",22.22,[20220606,0,0,0,0,0,0,0,4,2],[44.73,"-"],76.75],["CMR","Cameroon",22.22,[20220619,0,0,0,0,0,0,0,4,4],[0.03,"+"],4.46],["GRL","Greenland",22.22,[20220530,0,0,0,0,0,0,0,4,1],[0.0,"="],67.7],["BEL","Belgium",23.15,[20220623,0,1,0,0,0,0,0,3,2],[29.05,"+"],78.66],["SWZ","Eswatini",23.15,[20220620,0,1,1,0,0,0,0,1,4],[0.99,"-"],28.67],["UGA","Uganda",23.15,[20220606,0,1,0,2,1,0,0,1,1],[0.19,"-"],22.9],["RUS","Russia",23.15,[20220613,0,1,0,0,0,1,0,3,2],[2.05,"-"],50.93],["BOL","Bolivia",23.15,[20220620,2,1,0,0,0,0,0,1,3],[5.26,"+"],50.74],["NAM","Namibia",23.15,[20220621,0,1,1,2,0,0,0,1,3],[1.75,"-"],16.49],["FRA","France",23.15,[20220619,0,1,0,0,0,0,0,3,2],[88.92,"+"],78.44],["GRC","Greece",24.07,[20220620,1,1,1,0,0,0,0,0,2],[80.14,"+"],73.56],["EST","Estonia",24.07,[20220610,1,1,0,0,0,0,0,2,1],[8.85,"="],63.96],["VNM","Vietnam",25.93,[20220615,0,1,1,2,0,0,0,0,3],[0.83,"-"],81.27],["YEM","Yemen",25.93,[20220611,0,1,1,0,0,2,0,2,1],[0.0,"="],1.46],["ABW","Aruba",25.93,[20220620,0,1,1,2,0,0,0,0,2],[112.4,"="],77.21],["CAN","Canada",25.93,[20220620,0,0,0,0,0,1,0,4,2],[5.29,"+"],83.26],["BIH","Bosnia and Herzegovina",25.93,[20220615,1,0,1,2,0,0,0,0,2],[0.77,"+"],25.93],["COL","Colombia",25.93,[20220610,1,1,2,0,0,0,0,1,3],[5.53,"+"],70.38],["SYR","Syria",26.85,[20220620,1,1,1,0,0,0,0,1,2],[0.01,"="],9.77],["SSD","South Sudan",26.85,[20220614,0,0,0,0,0,2,1,1,3],[0.02,"-"],8.5],["FIN","Finland",26.85,[20220623,1,1,0,0,1,0,0,1,1],[21.28,"-"],78.11],["CYP","Cyprus",26.85,[20220606,1,1,0,0,1,0,0,1,1],[41.06,"="],71.98],["NZL","New Zealand",26.85,[20220620,0,2,0,0,0,0,0,3,2],[86.63,"-"],80.21],["SEN","Senegal",26.85,[20220620,1,1,1,0,0,0,0,1,3],[0.05,"="],8.54],["TTO","Trinidad and Tobago",26.85,[20220612,1,1,1,0,0,0,0,1,3],[9.72,"-"],50.85],["TWN","Taiwan",26.85,[20220619,1,1,0,0,0,0,0,3,3],[211.16,"-"],80.6],["CHL","Chile",27.31,[20220619,1,1,1,2,0,0,0,2,3],[49.77,"-"],91.45],["LKA","Sri Lanka",28.7,[20220612,0,0,1,1,0,1,0,2,3],[0.05,"="],67.56],["MOZ","Mozambique",28.7,[20220620,0,1,1,2,0,0,0,1,2],[0.26,"-"],66.24],["COD","Democratic Republic of Congo",28.7,[20220614,0,1,1,0,0,0,1,1,3],[0.18,"+"],1.85],["ESP","Spain",29.17,[20220605,0,2,1,3,0,0,0,1,2],[30.1,"="],86.72],["NER","Niger",29.63,[20220531,0,0,0,3,0,2,0,1,3],[0.0,"="],6.19],["GUY","Guyana",29.63,[20220619,1,1,0,0,0,0,0,4,1],[9.72,"-"],46.62],["SUR","Suriname",29.63,[20220608,1,1,0,0,0,0,0,4,2],[1.24,"="],40.2],["THA","Thailand",30.09,[20220614,0,2,1,2,0,1,0,1,3],[3.0,"+"],75.46],["PAN","Panama",30.56,[20220613,0,0,2,2,-1,0,0,1,2],[38.54,"+"],71.02],["PRI","Puerto Rico",30.56,[20220601,0,0,2,0,0,0,0,3,2],[]],["NGA","Nigeria",30.56,[20220523,0,0,1,3,0,0,0,2,3],[0.02,"="],7.96],["ETH","Ethiopia",30.56,[20220621,0,0,1,3,0,0,0,2,3],[0.54,"-"],18.06],["TGO","Togo",31.02,[20220619,0,0,1,3,0,2,0,2,3],[0.14,"+"],18.37],["GRD","Grenada",31.48,[20220328,1,0,0,3,0,0,0,3,3],[16.25,"+"],34.1],["LSO","Lesotho",32.41,[20220613,0,2,2,2,0,0,0,1,4],[1.28,"="],34.07],["DMA","Dominica",32.41,[20220613,1,1,1,2,0,0,0,1,3],[12.7,"="],42.19],["HND","Honduras",34.26,[20220608,0,2,1,0,0,2,0,1,3],[0.24,"-"],53.21],["HTI","Haiti",34.26,[20220620,0,1,1,4,0,0,0,1,2],[0.22,"="],1.26],["BGD","Bangladesh",34.26,[20220621,2,1,1,0,0,1,0,1,4],[0.48,"+"],71.46],["AUT","Austria",35.19,[20220620,2,2,1,2,0,0,0,0,2],[77.47,"+"],73.24],["VIR","United States Virgin Islands",35.19,[20220613,0,1,1,3,0,1,0,1,2],[]],["COG","Congo",35.19,[20220613,0,2,1,3,0,0,0,1,3],[0.0,"="],11.53],["KEN","Kenya",35.19,[20220606,0,1,1,3,0,1,0,1,1],[0.72,"+"],16.77],["IRQ","Iraq",35.19,[20220617,0,2,2,1,0,0,0,1,3],[1.52,"+"],18.43],["AZE","Azerbaijan",36.11,[20220620,0,0,2,2,1,0,0,1,0],[0.43,"+"],47.47],["KGZ","Kyrgyz Republic",36.11,[20220613,0,0,2,4,0,0,0,1,2],[0.02,"="],19.89],["SOM","Somalia",37.04,[20220613,1,1,1,1,0,2,0,1,3],[0.07,"="],9.79],["IND","India",37.04,[20220604,0,1,1,0,0,2,2,1,3],[0.95,"+"],65.22],["SYC","Seychelles",37.04,[20220620,1,0,2,3,0,0,0,1,3],[39.51,"="],81.59],["RKS","Kosovo",37.04,[20220623,2,2,2,0,0,0,0,0,1],[1.23,"+"],46.22],["GTM","Guatemala",37.5,[20220611,2,1,1,3,0,0,0,1,4],[10.7,"+"],34.57],["ZAF","South Africa",37.96,[20220522,0,2,1,2,1,0,0,1,2],[1.54,"-"],31.66],["ARE","United Arab Emirates",37.96,[20220620,1,1,2,1,0,0,0,2,2],[15.44,"+"],98.01],["TCD","Chad",37.96,[20220610,1,1,1,2,1,0,0,1,3],[0.0,"="],12.36],["PHL","Philippines",37.96,[20220609,1,2,1,0,1,0,0,4,4],[0.52,"+"],63.26],["SLV","El Salvador",37.96,[20220606,1,1,2,1,1,0,0,0,4],[12.14,"="],66.21],["MUS","Mauritius",37.96,[20220612,0,2,1,3,0,0,0,2,3],[22.88,"+"],74.18],["TON","Tonga",38.89,[20220606,0,1,0,0,0,2,1,4,4],[22.98,"="],91.0],["ZWE","Zimbabwe",38.89,[20220613,0,1,1,3,0,2,0,1,3],[0.61,"-"],30.34],["USA","United States",38.89,[20220611,2,2,0,0,1,0,1,4,2],[30.19,"+"],66.9],["JPN","Japan",39.81,[20220623,1,1,1,1,0,1,1,2,1],[11.26,"+"],81.16],["PNG","Papua New Guinea",39.81,[20220605,0,1,1,3,0,0,0,4,2],[0.02,"-"],2.98],["ARG","Argentina",39.81,[20220523,0,1,2,4,0,0,0,1,2],[8.86,"="],82.33],["KIR","Kiribati",39.81,[20220613,3,0,0,0,0,2,2,2,4],[0.0,"="],49.98],["EGY","Egypt",40.74,[20220620,1,1,2,3,0,0,0,1,3],[0.0,"="],34.92],["MLI","Mali",40.74,[20220619,0,2,2,3,0,0,0,1,3],[0.01,"="],5.97],["AGO","Angola",40.74,[20220530,0,2,1,0,1,0,1,2,2],[0.0,"="],20.07],["QAT","Qatar",40.74,[20220620,1,1,2,0,1,0,0,2,2],[19.97,"+"],90.2],["BRB","Barbados",40.74,[20220607,1,1,2,3,0,0,0,1,3],[37.13,"+"],53.3],["SGP","Singapore",41.67,[20220617,1,1,1,2,0,1,0,3,2],[84.87,"+"],91.59],["BLZ","Belize",42.59,[20220618,2,2,1,0,1,0,1,1,2],[61.97,"+"],52.41],["SLB","Solomon Islands",42.59,[20220613,2,2,0,0,2,0,0,4,2],[6.38,"="],25.28],["MRT","Mauritania",43.52,[20220621,1,1,2,4,0,0,0,1,3],[0.29,"+"],27.89],["BHS","Bahamas",44.44,[20220606,1,1,1,3,1,1,0,1,3],[8.68,"="],39.8],["NPL","Nepal",46.3,[20220620,0,1,2,1,1,1,1,1,4],[0.07,"+"],68.06],["MWI","Malawi",47.22,[20220530,0,1,1,3,1,2,0,2,3],[0.12,"+"],8.09],["DZA","Algeria",47.22,[20220606,1,2,1,4,1,0,0,1,3],[0.02,"="],15.36],["TUN","Tunisia",47.22,[20220517,1,2,2,4,0,0,0,1,3],[2.75,"="],53.42],["SLE","Sierra Leone",48.15,[20220620,2,2,2,0,1,0,0,2,3],[0.01,"="],20.38],["LBR","Liberia",48.15,[20220620,1,3,2,0,0,0,0,4,4],[0.01,"-"],27.76],["GIN","Guinea",49.07,[20220621,1,1,1,4,0,0,2,1,3],[0.0,"="],24.98],["DJI","Djibouti",49.07,[20220613,1,1,2,4,1,0,0,1,3],[0.0,"="],14.85],["MYS","Malaysia",50.0,[20220618,1,1,1,1,1,1,2,2,2],[6.7,"+"],83.1],["LBY","Libya",50.0,[20220620,1,2,2,4,0,0,0,2,3],[0.07,"="],16.95],["ERI","Eritrea",50.93,[20220620,1,1,1,3,1,2,0,2,3],[0.04,"="]],["MMR","Myanmar",51.85,[20220622,1,1,0,0,1,2,2,4,4],[0.02,"+"],49.31],["GHA","Ghana",51.85,[20220422,0,2,2,4,0,0,0,4,0],[0.59,"-"],20.2],["HKG","Hong Kong",52.78,[20220616,1,2,2,4,0,0,0,3,3],[17.76,"+"],84.97],["PER","Peru",54.63,[20220605,1,3,2,0,1,1,1,1,3],[5.57,"="],82.53],["LAO","Laos",55.09,[20220609,2,2,1,4,1,2,1,0,3],[0.1,"+"],68.8],["IDN","Indonesia",55.56,[20220605,1,1,1,0,1,1,2,4,3],[0.54,"+"],60.88],["TKM","Turkmenistan",57.41,[20220613,0,2,2,4,0,0,2,4,3],[],47.73],["FJI","Fiji",57.41,[20220616,0,2,2,0,2,0,2,3,1],[3.14,"+"],70.32],["MAR","Morocco",58.33,[20220606,1,2,2,4,2,0,0,1,3],[5.74,"+"],62.74],["BRA","Brazil",60.65,[20220606,2,2,2,4,1,1,1,4,2],[23.59,"+"],78.76],["ECU","Ecuador",65.74,[20220620,0,2,2,4,2,0,2,1,2],[5.26,"="],78.29],["RWA","Rwanda",66.67,[20220607,0,3,2,4,2,0,2,1,1],[0.28,"+"],64.23],["SAU","Saudi Arabia",67.59,[20220613,2,2,2,3,2,0,2,0,2],[2.53,"-"],70.97],["IRN","Iran",67.59,[20220612,3,3,2,4,0,0,2,3,2],[0.23,"+"],68.05],["VUT","Vanuatu",73.61,[20220614,3,3,2,4,2,1,1,4,4],[11.26,"-"],40.26],["UKR","Ukraine",75.0,[20220524,3,1,2,3,2,1,2,3,3],[0.0,"="],34.86],["PAK","Pakistan",77.78,[20220529,3,2,2,1,2,1,2,3,4],[0.09,"+"],55.71],["MAC","Macao",78.7,[20220621,3,2,2,4,1,2,1,3,3],[],88.87],["CHN","China",79.17,[20220615,3,3,2,4,2,3,2,2,4],[0.01,"="],87.19],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[16.1,"+"],45.16]];