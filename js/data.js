const dataUpdate="2022.09.23";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["SWE","Sweden",0.0,[20220919,0,0,0,0,0,0,0,0,0],[6.86,"-"],73.21],["GEO","Georgia",0.0,[20220912,0,0,0,0,0,0,0,0,2],[66.2,"+"],33.96],["HUN","Hungary",0.0,[20220812,0,0,0,0,0,0,0,0,2],[18.2,"="],63.89],["BWA","Botswana",2.78,[20220815,0,0,0,0,0,0,0,1,2],[0.0,"="],53.1],["ZMB","Zambia",2.78,[20220829,0,0,0,0,0,0,0,1,3],[0.08,"-"],30.44],["NAM","Namibia",5.56,[20220916,0,0,0,0,0,0,0,0,0],[0.0,"="],20.33],["UZB","Uzbekistan",5.56,[20220903,0,0,0,0,0,0,0,0,1],[0.04,"="],48.4],["BLR","Belarus",5.56,[20220901,0,0,0,0,0,0,0,0,0],[0.0,"="],66.68],["KAZ","Kazakhstan",5.56,[20220815,0,0,0,0,0,0,0,0,1],[0.62,"-"],55.14],["CHE","Switzerland",5.56,[20220831,0,0,0,0,0,0,0,0,0],[22.68,"="],69.13],["YEM","Yemen",5.56,[20220919,0,0,1,0,0,0,0,0,0],[0.0,"="],1.43],["AND","Andorra",5.56,[20220823,0,0,0,0,0,0,0,0,2],[0.0,"="],67.66],["DOM","Dominican Republic",5.56,[20220815,0,0,0,0,0,0,0,0,0],[3.53,"="],54.35],["MUS","Mauritius",5.56,[20220905,0,0,0,0,0,0,0,0,2],[0.0,"="],75.27],["KWT","Kuwait",5.56,[20220913,0,0,0,0,0,0,0,0,1],[2.59,"="],78.49],["SDN","Sudan",8.33,[20220916,0,0,0,0,0,0,0,1,0],[0.0,"="],9.94],["TZA","Tanzania",8.33,[20220822,0,0,0,0,0,0,0,1,0],[0.02,"="],28.81],["TJK","Tajikistan",8.33,[20220815,0,0,0,0,0,0,0,1,0],[0.0,"="],52.52],["BFA","Burkina Faso",8.33,[20220822,0,0,0,0,0,0,0,1,3],[0.0,"="],10.98],["BEN","Benin",8.33,[20220812,0,0,0,0,0,0,0,1,2],[0.0,"="],21.01],["LSO","Lesotho",8.33,[20220912,0,0,0,0,0,0,0,1,1],[1.35,"="],38.25],["POL","Poland",9.26,[20220914,1,0,0,0,0,0,0,0,2],[11.51,"-"],58.88],["NER","Niger",10.79,[20220808,0,0,0,0,0,0,0,1,2],[0.0,"="],11.8],["LIE","Liechtenstein",11.11,[20220820,0,0,0,0,0,0,0,0,1],[37.47,"-"],67.75],["MNG","Mongolia",11.11,[20220812,0,0,0,0,0,0,0,0,2],[3.75,"="],64.99],["EST","Estonia",11.11,[20220817,0,0,0,0,0,0,0,0,1],[12.92,"="],63.68],["MLT","Malta",11.11,[20220920,0,0,0,0,0,0,0,0,2],[5.01,"+"],89.37],["SVN","Slovenia",11.11,[20220904,0,0,0,0,0,0,0,0,1],[98.2,"+"],57.67],["FRA","France",11.11,[20220822,0,0,0,0,0,0,0,0,1],[47.89,"+"],78.69],["FRO","Faeroe Islands",11.11,[20220912,0,0,0,0,0,0,0,0,0],[0.0,"="],77.32],["GBR","United Kingdom",11.11,[20220817,0,0,0,0,0,0,0,0,1],[7.81,"+"],75.42],["MDG","Madagascar",11.11,[20220819,0,0,0,0,0,0,0,0,1],[0.0,"="],5.05],["SVK","Slovak Republic",11.11,[20220919,0,0,0,0,0,0,0,0,2],[11.27,"+"],50.73],["MDA","Moldova",11.11,[20220818,0,0,0,0,0,0,0,0,1],[13.6,"="],34.74],["SRB","Serbia",11.11,[20220915,0,0,0,0,0,0,0,0,2],[25.95,"-"],47.71],["NOR","Norway",11.11,[20220822,0,0,0,0,0,0,0,0,1],[1.11,"-"],75.01],["LVA","Latvia",11.11,[20220914,0,0,0,0,0,0,0,0,2],[64.7,"+"],69.69],["LTU","Lithuania",11.11,[20220904,0,0,0,0,0,0,0,0,1],[47.91,"-"],67.41],["SAU","Saudi Arabia",11.11,[20220921,0,0,0,0,0,0,0,0,2],[0.28,"-"],70.27],["IRL","Ireland",11.11,[20220829,0,0,0,0,0,0,0,0,1],[3.97,"="],81.25],["ROU","Romania",11.11,[20220824,0,0,0,0,0,0,0,0,1],[7.59,"-"],41.98],["ISL","Iceland",11.11,[20220918,0,0,0,0,0,0,0,0,0],[7.12,"="],78.36],["DNK","Denmark",11.11,[20220916,0,0,0,0,0,0,0,0,2],[13.4,"+"],81.64],["KIR","Kiribati",11.11,[20220919,0,0,0,0,0,0,0,0,0],[0.0,"="],48.79],["GRL","Greenland",11.11,[20220908,0,0,0,0,0,0,0,0,1],[0.0,"="],68.46],["JAM","Jamaica",11.11,[20220818,0,0,0,0,0,0,0,0,1],[2.36,"+"],25.86],["GAB","Gabon",11.11,[20220821,0,0,0,0,0,0,0,0,2],[0.09,"="],10.98],["BGR","Bulgaria",11.11,[20220920,0,0,0,0,0,0,0,0,0],[6.8,"-"],30.08],["BHR","Bahrain",11.11,[20220918,0,0,0,0,0,0,0,0,2],[20.67,"+"],83.78],["BTN","Bhutan",11.11,[20220914,0,0,0,0,0,0,0,2,4],[5.76,"="],86.81],["AFG","Afghanistan",11.11,[20220920,0,2,1,0,1,0,0,0,3],[0.42,"+"],25.41],["TTO","Trinidad and Tobago",11.11,[20220919,0,0,0,0,0,0,0,0,1],[7.08,"-"],46.99],["AUS","Australia",11.11,[20220920,0,0,0,0,0,0,0,0,0],[27.53,"+"],84.02],["ZAF","South Africa",11.11,[20220815,0,0,0,0,0,0,0,0,0],[0.4,"+"],32.64],["ALB","Albania",11.11,[20220823,0,0,0,0,0,0,0,0,2],[2.37,"-"],44.18],["CUB","Cuba",11.11,[20220817,0,0,0,0,0,0,0,0,2],[0.16,"-"],88.76],["CRI","Costa Rica",11.11,[20220901,0,0,0,0,0,0,0,0,2],[17.32,"="],81.55],["ARG","Argentina",13.41,[20220919,0,0,0,0,0,0,0,0,1],[1.95,"="],83.46],["UGA","Uganda",13.89,[20220908,0,0,0,0,0,0,0,1,3],[0.0,"="],27.39],["URY","Uruguay",13.89,[20220911,0,0,0,0,0,0,0,1,1],[5.37,"="],84.44],["PRY","Paraguay",13.89,[20220905,0,0,0,0,0,0,0,1,1],[0.41,"="],52.46],["CAF","Central African Republic",13.89,[20220828,0,0,0,0,0,0,0,1,3],[0.0,"="],25.6],["VEN","Venezuela",13.89,[20220919,0,0,0,0,0,0,0,1,3],[0.13,"-"],50.66],["BMU","Bermuda",13.89,[20220911,0,0,0,0,0,0,0,1,2],[10.32,"+"],74.25],["PRT","Portugal",13.89,[20220919,0,0,0,0,0,0,0,1,2],[26.56,"+"],86.63],["SMR","San Marino",13.89,[20220821,0,0,0,0,0,0,0,1,1],[32.0,"+"],70.03],["SOM","Somalia",13.89,[20220826,0,0,0,0,0,0,0,1,2],[0.01,"="],17.14],["KOR","South Korea",13.89,[20220918,0,0,0,0,0,0,0,1,3],[69.3,"-"],86.2],["BDI","Burundi",13.89,[20220812,0,0,0,0,0,0,0,1,0],[0.19,"-"],0.15],["NZL","New Zealand",13.89,[20220912,0,0,0,0,0,0,0,1,2],[22.43,"="],80.55],["TLS","Timor-Leste",13.89,[20220920,0,0,0,0,0,0,0,1,3],[0.11,"-"],56.43],["GMB","Gambia",13.89,[20220918,0,0,0,0,0,0,0,1,3],[0.0,"="],13.54],["VUT","Vanuatu",13.89,[20220822,0,0,0,0,0,0,0,1,2],[0.93,"="],40.93],["CMR","Cameroon",13.89,[20220905,0,0,0,0,0,0,0,1,2],[0.0,"="],4.62],["TUR","Turkey",13.89,[20220920,0,0,0,0,0,0,0,1,2],[0.0,"="],62.71],["NIC","Nicaragua",13.89,[20220905,0,0,0,0,0,0,0,1,0],[0.12,"+"],83.49],["ESP","Spain",13.89,[20220916,0,0,0,0,0,0,0,1,2],[5.83,"="],85.59],["ECU","Ecuador",13.89,[20220919,0,0,0,0,0,0,0,1,2],[1.49,"="],79.16],["TCD","Chad",13.89,[20220911,0,0,0,0,0,0,0,1,3],[0.01,"="],21.02],["BRN","Brunei",13.9,[20220905,0,0,0,0,0,0,0,1,2],[53.13,"="],99.86],["BEL","Belgium",14.81,[20220819,0,1,0,0,0,0,0,0,2],[17.68,"+"],78.88],["OMN","Oman",14.81,[20220916,1,0,0,0,0,0,0,0,0],[0.0,"="],67.41],["JOR","Jordan",14.81,[20220911,0,1,0,0,0,0,0,0,2],[3.89,"="],40.89],["DEU","Germany",14.81,[20220918,0,0,0,0,0,1,0,0,2],[44.56,"+"],76.08],["ISR","Israel",14.81,[20220919,1,0,0,0,0,0,0,0,2],[12.95,"-"],66.23],["CYP","Cyprus",14.81,[20220919,0,1,0,0,0,0,0,0,3],[29.37,"="],72.05],["GRC","Greece",14.81,[20220920,1,0,0,0,0,0,0,0,2],[49.89,"="],73.12],["LUX","Luxembourg",15.42,[20220919,0,0,0,0,0,0,0,1,0],[22.25,"+"],72.41],["ITA","Italy",15.52,[20220920,0,1,0,0,0,0,0,0,2],[29.99,"+"],80.97],["NLD","Netherlands",15.65,[20220822,0,0,0,0,0,0,0,1,0],[7.37,"-"],68.32],["CIV","Cote d'Ivoire",15.74,[20220829,0,1,0,0,0,0,0,1,3],[0.06,"-"],32.09],["SSD","South Sudan",16.18,[20220920,0,0,0,0,0,0,0,1,1],[0.0,"="],17.67],["HRV","Croatia",16.67,[20220914,0,0,1,0,0,0,0,0,2],[14.9,"-"],55.37],["CZE","Czech Republic",16.67,[20220916,0,0,-1,0,1,0,0,0,1],[21.46,"+"],65.54],["SGP","Singapore",17.59,[20220921,1,0,0,0,0,0,0,1,2],[37.28,"+"],91.77],["MOZ","Mozambique",17.59,[20220918,0,1,0,0,0,0,0,1,2],[0.02,"="],41.38],["PAN","Panama",17.59,[20220919,1,0,0,0,0,0,0,1,2],[5.23,"="],72.32],["BGD","Bangladesh",17.59,[20220813,0,0,0,0,0,1,0,1,4],[0.31,"+"],71.83],["MCO","Monaco",17.59,[20220815,0,1,0,0,0,0,0,1,2],[22.21,"-"],69.96],["CAN","Canada",19.39,[20220919,0,0,0,0,1,0,0,1,2],[7.69,"-"],82.74],["CPV","Cape Verde",19.44,[20220910,0,0,0,0,0,0,1,1,2],[0.15,"="],52.45],["COL","Colombia",19.44,[20220912,1,1,0,0,0,0,0,1,3],[0.28,"-"],70.81],["KHM","Cambodia",20.37,[20220919,1,0,0,0,0,0,1,1,2],[0.07,"+"],87.56],["QAT","Qatar",20.47,[20220904,1,1,0,0,0,0,0,1,3],[28.46,"+"],103.99],["TWN","Taiwan",21.3,[20220917,1,1,0,0,0,0,0,1,2],[169.78,"-"],84.96],["SUR","Suriname",21.3,[20220912,1,1,0,0,0,0,0,1,2],[0.51,"="],38.81],["BOL","Bolivia",22.22,[20220906,1,1,1,0,0,0,0,1,2],[0.97,"-"],50.64],["PSE","Palestine",22.22,[20220810,0,0,0,0,0,0,0,4,4],[],34.56],["SYC","Seychelles",22.22,[20220829,0,0,0,3,0,0,0,1,2],[0.0,"="],76.27],["BRA","Brazil",22.22,[20220919,0,0,0,0,0,0,2,1,2],[3.21,"+"],80.32],["NPL","Nepal",22.61,[20220919,0,0,0,1,0,0,0,1,4],[0.16,"-"],74.33],["GUY","Guyana",23.67,[20220919,1,1,0,0,0,0,0,1,1],[1.18,"="],57.37],["MEX","Mexico",24.07,[20220829,0,1,1,0,0,0,1,1,3],[1.78,"="],63.1],["FIN","Finland",24.07,[20220916,1,1,0,0,1,0,0,0,1],[24.68,"+"],78.45],["MLI","Mali",24.16,[20220921,0,0,2,0,0,0,0,1,0],[0.11,"-"],7.54],["RKS","Kosovo",25.04,[20220915,2,2,2,0,0,0,0,0,1],[0.41,"="],46.27],["VNM","Vietnam",25.93,[20220915,0,1,1,2,0,0,0,0,3],[2.44,"-"],86.03],["ABW","Aruba",25.93,[20220919,0,1,1,2,0,0,0,0,1],[0.0,"="],78.46],["BIH","Bosnia and Herzegovina",25.93,[20220910,1,0,1,2,0,0,0,0,2],[1.55,"-"],25.87],["MRT","Mauritania",26.85,[20220828,1,1,1,0,0,0,0,1,2],[0.02,"-"],30.85],["BRB","Barbados",26.85,[20220912,1,1,0,2,0,0,0,1,2],[14.81,"+"],54.99],["SYR","Syria",26.85,[20220822,1,1,1,0,0,0,0,1,2],[0.04,"-"],9.69],["USA","United States",27.01,[20220920,1,1,0,0,1,1,0,1,2],[15.95,"-"],67.76],["MAR","Morocco",27.09,[20220920,0,1,0,0,0,0,0,1,3],[0.04,"="],63.36],["COD","Democratic Republic of Congo",27.78,[20220905,0,0,1,1,0,0,1,1,3],[0.02,"+"],3.0],["AGO","Angola",28.16,[20220912,0,2,1,0,0,0,0,1,3],[0.0,"="],22.65],["CHL","Chile",28.79,[20220822,1,1,0,2,0,0,0,1,2],[19.45,"+"],90.67],["GRD","Grenada",29.37,[20220328,1,0,0,3,0,0,0,1,3],[5.46,"="],31.17],["THA","Thailand",29.63,[20220917,1,1,1,1,0,0,0,1,1],[1.01,"+"],74.66],["SLV","El Salvador",29.63,[20220919,1,1,0,2,1,0,0,0,0],[0.0,"="],68.59],["RWA","Rwanda",29.71,[20220919,0,0,0,0,2,0,0,0,1],[0.05,"="],66.27],["IDN","Indonesia",29.83,[20220903,0,1,0,0,0,0,0,1,2],[0.77,"-"],62.32],["HND","Honduras",30.22,[20220919,0,2,1,0,0,0,0,1,3],[0.63,"+"],54.48],["PHL","Philippines",30.28,[20220919,1,1,1,0,1,0,0,1,2],[2.12,"+"],63.88],["LBN","Lebanon",30.42,[20220920,1,2,1,1,1,2,0,1,-1],[2.16,"+"],42.94],["SLB","Solomon Islands",30.85,[20220906,1,1,1,0,0,0,1,1,3],[0.0,"="],28.42],["ARE","United Arab Emirates",32.16,[20220918,1,1,1,0,1,0,0,1,2],[4.09,"-"],104.56],["LBR","Liberia",32.35,[20220904,0,1,1,0,0,0,0,1,4],[0.09,"="],56.84],["GIN","Guinea",32.41,[20220912,1,1,0,0,0,0,2,1,2],[0.0,"="],21.36],["DMA","Dominica",32.41,[20220919,1,1,1,2,0,0,0,1,3],[0.0,"="],42.21],["SEN","Senegal",32.41,[20220919,1,1,1,0,1,0,0,1,3],[0.08,"+"],6.49],["SWZ","Eswatini",32.66,[20220801,0,1,1,4,0,0,0,1,1],[0.06,"="],41.15],["LBY","Libya",32.73,[20220912,1,2,2,0,0,0,0,1,3],[0.06,"-"],18.24],["BLZ","Belize",32.97,[20220912,1,1,1,0,0,0,1,0,2],[4.71,"="],54.97],["KGZ","Kyrgyz Republic",33.33,[20220919,0,0,2,4,0,0,0,0,2],[0.17,"="],20.49],["GHA","Ghana",33.92,[20220918,0,2,2,0,0,0,0,1,1],[0.09,"="],25.41],["AUT","Austria",35.19,[20220919,2,2,1,2,0,0,0,0,2],[75.16,"+"],76.45],["EGY","Egypt",35.19,[20220910,1,1,2,3,0,0,0,0,3],[0.0,"="],36.04],["COG","Congo",35.26,[20220912,0,2,2,2,0,0,0,1,3],[0.0,"="],11.21],["PNG","Papua New Guinea",35.49,[20220917,0,1,1,3,0,0,0,1,2],[0.04,"-"],2.91],["MYS","Malaysia",35.69,[20220904,1,1,1,0,1,0,1,0,2],[5.53,"-"],81.92],["KEN","Kenya",35.99,[20220915,0,1,2,3,0,0,0,1,2],[0.02,"="],18.84],["LKA","Sri Lanka",36.1,[20220829,0,1,1,1,1,1,0,1,3],[0.1,"+"],67.42],["JPN","Japan",37.04,[20220920,1,1,1,1,0,1,1,1,1],[48.32,"-"],82.49],["IND","India",37.04,[20220913,0,1,1,0,0,2,2,1,3],[0.37,"-"],67.29],["TGO","Togo",37.04,[20220918,0,1,1,3,0,2,0,1,3],[0.32,"="],16.61],["FJI","Fiji",37.78,[20220919,0,1,0,0,1,0,2,0,2],[0.18,"-"],69.05],["MAC","Macao",37.96,[20220914,1,1,1,2,0,0,0,3,3],[],87.3],["RUS","Russia",38.43,[20220919,0,2,1,1,1,1,0,3,2],[36.51,"-"],52.9],["HTI","Haiti",39.81,[20220918,0,1,2,4,0,0,0,1,2],[0.02,"="],1.94],["PAK","Pakistan",39.87,[20220919,0,0,0,0,0,0,0,1,4],[0.02,"="],56.86],["PER","Peru",40.09,[20220912,1,1,1,0,1,0,1,1,3],[3.15,"-"],83.63],["BHS","Bahamas",40.74,[20220918,1,1,1,3,1,0,0,1,4],[0.94,"-"],40.28],["MMR","Myanmar",40.74,[20220918,1,1,0,0,1,2,2,1,4],[0.64,"+"],51.2],["ETH","Ethiopia",40.74,[20220822,1,1,1,3,1,0,0,1,3],[0.01,"="],30.52],["MWI","Malawi",40.74,[20220914,1,1,1,3,1,0,0,1,3],[0.04,"+"],11.3],["GTM","Guatemala",41.2,[20220912,2,1,1,3,1,1,0,0,4],[2.82,"+"],39.02],["IRQ","Iraq",41.37,[20220830,0,2,2,1,0,0,0,1,2],[0.26,"="],17.96],["TUN","Tunisia",41.59,[20220920,0,1,2,4,0,0,0,1,3],[0.22,"="],52.05],["SLE","Sierra Leone",42.61,[20220919,2,2,2,0,1,0,0,1,3],[0.0,"="],26.0],["AZE","Azerbaijan",44.68,[20220919,0,3,2,0,2,0,2,1,0],[1.99,"-"],47.15],["DZA","Algeria",45.32,[20220916,1,2,1,4,1,0,0,1,3],[0.01,"-"],14.67],["NGA","Nigeria",46.81,[20220918,0,0,1,3,1,0,2,1,3],[0.02,"-"],14.59],["TON","Tonga",48.61,[20220911,1,2,1,0,0,2,2,1,4],[0.0,"="],72.26],["HKG","Hong Kong",48.87,[20220919,2,1,2,4,0,0,0,2,2],[91.71,"-"],88.93],["DJI","Djibouti",51.33,[20220829,1,1,2,4,1,0,0,1,3],[0.0,"="],19.2],["ZWE","Zimbabwe",52.61,[20220910,1,1,1,3,1,2,1,1,4],[0.31,"+"],29.58],["LAO","Laos",53.01,[20220919,2,1,1,4,1,2,0,1,3],[0.65,"-"],70.34],["IRN","Iran",53.9,[20220912,1,2,2,4,0,0,2,1,3],[0.73,"-"],66.44],["UKR","Ukraine",65.33,[20220819,3,1,2,3,2,1,2,3,3],[1.16,"-"],34.81],["CHN","China",73.61,[20220822,3,3,2,4,2,3,1,2,4],[0.06,"="],89.11],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[23.11,"-"],45.37]];