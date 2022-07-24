const dataUpdate="2022.07.24";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["HUN","Hungary",0.0,[20220715,0,0,0,0,0,0,0,0,2],[15.17,"="],63.85],["MUS","Mauritius",5.56,[20220716,0,0,0,0,0,0,0,0,2],[40.09,"="],75.27],["NER","Niger",5.56,[20220628,0,0,0,0,0,0,0,2,3],[0.0,"="],11.44],["DOM","Dominican Republic",5.56,[20220713,0,0,0,0,0,0,0,0,0],[5.41,"="],54.07],["ZMB","Zambia",6.48,[20220709,0,1,0,0,0,0,0,1,3],[0.43,"="],24.71],["CUB","Cuba",7.41,[20220711,1,1,0,0,0,0,0,0,-1],[0.73,"+"],88.64],["AND","Andorra",8.33,[20220619,0,0,0,0,0,0,0,0,0],[121.1,"="],67.64],["TJK","Tajikistan",8.33,[20220716,0,0,0,0,0,0,0,1,0],[0.0,"="],51.64],["BFA","Burkina Faso",8.33,[20220701,0,0,0,0,0,0,0,1,3],[0.0,"="],7.42],["TZA","Tanzania",8.33,[20220630,0,0,0,0,0,0,0,1,0],[0.0,"="],16.54],["DNK","Denmark",11.11,[20220708,0,0,0,0,0,0,0,0,0],[36.2,"="],81.84],["LTU","Lithuania",11.11,[20220719,0,0,0,0,0,0,0,0,1],[32.61,"+"],67.36],["NOR","Norway",11.11,[20220717,0,0,0,0,0,0,0,0,1],[4.47,"-"],74.95],["GRL","Greenland",11.11,[20220718,0,0,0,0,0,0,0,0,0],[0.0,"="],68.46],["CHE","Switzerland",11.11,[20220629,0,0,0,0,0,0,0,0,0],[82.13,"="],69.1],["SWE","Sweden",11.11,[20220717,0,0,0,0,0,0,0,0,0],[8.22,"="],73.11],["SVN","Slovenia",11.11,[20220619,0,0,0,0,0,0,0,0,2],[76.91,"+"],57.67],["GAB","Gabon",11.11,[20220616,0,0,0,0,0,0,0,0,2],[0.82,"+"],10.97],["GBR","United Kingdom",11.11,[20220622,0,0,0,0,0,0,0,0,1],[29.41,"="],74.81],["FRO","Faeroe Islands",11.11,[20220706,0,0,0,0,0,0,0,0,0],[0.0,"="],77.32],["ROU","Romania",11.11,[20220722,0,0,0,0,0,0,0,0,1],[30.37,"+"],41.98],["EST","Estonia",11.11,[20220718,0,0,0,0,0,0,0,0,1],[-8.29,"="],63.85],["SVK","Slovak Republic",11.11,[20220619,0,0,0,0,0,0,0,0,0],[21.42,"+"],50.82],["SAU","Saudi Arabia",11.11,[20220718,0,0,0,0,0,0,0,0,2],[1.66,"-"],69.77],["GEO","Georgia",11.11,[20220705,0,0,0,0,0,0,0,0,2],[27.98,"="],33.87],["CRI","Costa Rica",11.11,[20220620,0,0,0,0,0,0,0,0,1],[236.35,"+"],81.02],["LIE","Liechtenstein",11.11,[20220706,0,0,0,0,0,0,0,0,1],[53.58,"="],67.71],["JAM","Jamaica",11.11,[20220712,0,0,0,0,0,0,0,0,1],[4.25,"+"],25.34],["UZB","Uzbekistan",11.11,[20220715,0,0,0,0,0,0,0,0,1],[0.21,"-"],46.34],["MDA","Moldova",11.11,[20220704,0,0,0,0,0,0,0,0,1],[11.9,"="],34.74],["KAZ","Kazakhstan",11.11,[20220711,0,0,0,0,0,0,0,0,1],[10.57,"+"],48.58],["BEN","Benin",11.11,[20220715,0,0,0,0,0,0,0,0,2],[0.06,"="],20.7],["SRB","Serbia",11.11,[20220711,0,0,0,0,0,0,0,0,2],[42.11,"+"],47.71],["BGR","Bulgaria",11.11,[20220717,0,0,0,0,0,0,0,0,0],[21.49,"+"],29.97],["BHR","Bahrain",11.11,[20220627,0,0,0,0,0,0,0,0,2],[58.25,"-"],83.65],["ISL","Iceland",11.11,[20220708,0,0,0,0,0,0,0,0,0],[61.58,"="],78.36],["YEM","Yemen",11.11,[20220709,0,0,1,0,0,2,0,0,0],[0.0,"-"],1.36],["ALB","Albania",11.11,[20220709,0,0,0,0,0,0,0,0,2],[0.0,"="],43.84],["ZAF","South Africa",11.11,[20220704,0,0,0,0,0,0,0,0,0],[0.57,"-"],32.28],["AFG","Afghanistan",11.11,[20220716,0,2,1,0,1,0,0,0,3],[0.38,"+"],13.24],["TTO","Trinidad and Tobago",11.11,[20220712,0,0,0,0,0,0,0,0,2],[9.45,"+"],46.88],["MNG","Mongolia",11.11,[20220704,0,0,0,0,0,0,0,0,2],[16.04,"="],64.99],["IRL","Ireland",11.11,[20220720,0,0,0,0,0,0,0,0,1],[31.0,"="],81.13],["KWT","Kuwait",11.11,[20220718,0,0,0,0,0,0,0,0,0],[16.07,"+"],78.23],["LVA","Latvia",11.11,[20220617,0,0,0,0,0,0,0,0,2],[58.34,"="],69.69],["NIC","Nicaragua",13.89,[20220718,0,0,0,0,0,0,0,1,0],[0.06,"="],81.72],["PRY","Paraguay",13.89,[20220714,0,0,0,0,0,0,0,1,1],[24.52,"+"],52.11],["PRT","Portugal",13.89,[20220718,0,0,0,0,0,0,0,1,2],[60.47,"="],86.46],["GMB","Gambia",13.89,[20220711,0,0,0,0,0,0,0,1,3],[0.11,"="],13.42],["MLT","Malta",13.89,[20220719,0,0,0,0,0,0,0,1,2],[43.55,"-"],89.26],["SDN","Sudan",13.89,[20220706,0,0,0,0,0,0,0,1,0],[0.04,"="],9.94],["KOR","South Korea",13.89,[20220703,0,0,0,0,0,0,0,1,3],[125.35,"+"],86.14],["VEN","Venezuela",13.89,[20220711,0,0,0,0,0,0,0,1,4],[1.12,"-"],50.66],["BDI","Burundi",13.89,[20220620,0,0,0,0,0,0,0,1,2],[0.75,"="],0.13],["TUR","Turkey",13.89,[20220717,0,0,0,0,0,0,0,1,2],[38.37,"="],62.64],["TCD","Chad",13.89,[20220717,0,0,0,0,0,0,0,1,3],[0.0,"="],12.19],["SMR","San Marino",13.89,[20220716,0,0,0,0,0,0,0,1,1],[139.78,"-"],70.03],["URY","Uruguay",13.89,[20220718,0,0,0,0,0,0,0,1,1],[10.03,"="],84.33],["BWA","Botswana",13.89,[20220722,0,0,0,0,0,0,0,1,3],[2.07,"="],58.44],["AUS","Australia",13.89,[20220718,0,0,0,0,0,0,0,1,2],[184.78,"-"],83.78],["JOR","Jordan",14.81,[20220718,0,1,0,0,0,0,0,0,0],[3.44,"="],40.8],["ISR","Israel",14.81,[20220718,1,0,0,0,0,0,0,0,2],[81.5,"+"],66.17],["HRV","Croatia",14.81,[20220716,0,1,0,0,0,0,0,0,2],[32.67,"="],55.32],["CZE","Czech Republic",14.81,[20220530,0,1,0,0,0,0,0,0,2],[19.73,"-"],65.48],["MCO","Monaco",14.81,[20220707,0,1,0,0,0,0,0,-1,2],[81.91,"="],69.96],["OMN","Oman",14.81,[20220715,1,0,0,0,0,0,0,0,0],[3.81,"="],67.28],["DEU","Germany",14.81,[20220718,0,0,0,0,0,1,0,0,2],[108.81,"="],75.99],["CYP","Cyprus",14.81,[20220711,0,1,0,0,0,0,0,0,2],[120.12,"="],72.0],["POL","Poland",14.81,[20220719,1,0,0,0,0,0,0,0,2],[6.17,"+"],58.8],["CIV","Cote d'Ivoire",15.74,[20220713,0,1,0,0,0,0,0,1,3],[0.24,"="],24.78],["BRN","Brunei",16.67,[20220719,0,0,0,0,0,0,0,2,2],[397.18,"="],95.82],["TLS","Timor-Leste",16.67,[20220716,0,0,0,0,0,0,0,2,3],[0.1,"="],54.96],["SSD","South Sudan",16.67,[20220706,0,0,0,0,0,0,0,2,2],[0.0,"="],11.82],["PSE","Palestine",16.67,[20220616,0,0,0,0,0,0,0,2,4],[],34.53],["BLR","Belarus",16.67,[20220719,0,0,0,0,0,0,0,2,1],[0.0,"="],66.12],["KHM","Cambodia",17.59,[20220716,1,0,0,0,0,0,0,1,2],[0.11,"="],86.87],["CPV","Cape Verde",19.44,[20220706,0,0,0,0,0,0,1,1,2],[3.65,"-"],52.33],["LUX","Luxembourg",19.44,[20220718,0,0,0,0,0,0,0,3,0],[91.4,"="],72.32],["NLD","Netherlands",19.44,[20220717,0,0,0,0,0,0,0,3,0],[26.71,"="],69.2],["KIR","Kiribati",20.37,[20220704,3,0,0,0,0,0,0,0,4],[13.39,"="],47.08],["COL","Colombia",20.37,[20220710,1,1,1,0,0,0,0,1,3],[6.78,"="],70.45],["SUR","Suriname",21.3,[20220717,1,1,0,0,0,0,0,1,2],[0.73,"="],38.81],["CAF","Central African Republic",21.3,[20220718,0,0,0,0,0,2,0,1,3],[0.0,"="],22.8],["ITA","Italy",22.22,[20220719,1,2,0,0,0,0,0,0,2],[125.54,"-"],80.95],["GUM","Guam",22.22,[20220617,0,0,0,0,0,0,0,4,1],[]],["BMU","Bermuda",22.22,[20220711,0,0,0,0,0,0,0,4,2],[61.02,"="],74.25],["BTN","Bhutan",22.22,[20220627,0,0,1,0,0,0,0,2,4],[3.13,"="],86.54],["BOL","Bolivia",23.15,[20220718,2,1,0,0,0,0,0,1,3],[40.39,"-"],50.08],["NAM","Namibia",23.15,[20220704,0,1,1,2,0,0,0,1,1],[0.0,"="],17.53],["BEL","Belgium",23.15,[20220708,0,1,0,0,0,0,0,3,2],[39.79,"="],78.83],["SWZ","Eswatini",23.15,[20220620,0,1,1,0,0,0,0,1,4],[0.14,"-"],28.69],["FRA","France",23.15,[20220619,0,1,0,0,0,0,0,3,2],[161.86,"="],78.57],["THA","Thailand",24.07,[20220715,1,1,0,1,0,0,0,1,1],[3.44,"-"],74.19],["GRC","Greece",24.07,[20220718,1,1,1,0,0,0,0,0,2],[503.87,"="],73.07],["FIN","Finland",24.07,[20220708,1,1,0,0,1,0,0,0,1],[0.0,"="],78.33],["MEX","Mexico",25.0,[20220711,3,1,0,0,0,0,0,1,2],[19.7,"-"],63.1],["COG","Congo",25.0,[20220713,0,0,1,0,1,0,0,1,3],[0.0,"="],11.21],["VNM","Vietnam",25.93,[20220710,0,1,1,2,0,0,0,0,3],[1.08,"+"],82.27],["ABW","Aruba",25.93,[20220711,0,1,1,2,0,0,0,0,2],[0.0,"="],78.03],["COD","Democratic Republic of Congo",25.93,[20220718,0,1,1,0,0,0,0,2,3],[0.03,"="],2.37],["BIH","Bosnia and Herzegovina",25.93,[20220722,1,0,1,2,0,0,0,0,2],[9.2,"="],25.87],["NZL","New Zealand",26.85,[20220716,0,2,0,0,0,0,0,3,2],[185.96,"-"],80.4],["SYR","Syria",26.85,[20220711,1,1,1,0,0,0,0,1,2],[0.08,"="],8.63],["IRQ","Iraq",26.85,[20220711,0,2,2,1,0,0,0,0,2],[9.08,"-"],17.6],["TWN","Taiwan",26.85,[20220707,1,1,0,0,0,0,0,3,3],[101.0,"-"],83.26],["CMR","Cameroon",27.78,[20220720,0,0,1,3,0,0,0,1,3],[0.0,"="],4.5],["RUS","Russia",28.24,[20220712,0,1,2,1,0,0,0,2,2],[3.78,"+"],51.66],["PAN","Panama",28.7,[20220701,1,0,2,0,0,0,0,1,2],[10.9,"="],71.79],["UGA","Uganda",28.7,[20220624,0,1,0,2,2,0,0,1,3],[0.06,"-"],26.24],["MOZ","Mozambique",28.7,[20220620,0,1,1,2,0,0,0,1,2],[0.15,"+"],43.95],["ESP","Spain",29.17,[20220712,0,2,1,3,0,0,0,1,2],[34.95,"="],85.49],["GUY","Guyana",29.63,[20220712,1,1,0,0,0,0,0,4,1],[9.92,"-"],57.31],["AGO","Angola",29.63,[20220704,0,2,1,0,0,0,0,2,3],[0.17,"="],21.43],["CAN","Canada",29.63,[20220718,0,2,0,0,0,0,0,4,2],[13.43,"-"],82.49],["MWI","Malawi",31.48,[20220716,0,1,1,3,0,0,0,1,3],[0.19,"="],7.63],["IND","India",31.48,[20220719,0,1,0,0,0,2,2,1,3],[1.43,"="],66.0],["GRD","Grenada",31.48,[20220328,1,0,0,3,0,0,0,3,3],[8.25,"-"],31.02],["DMA","Dominica",32.41,[20220711,1,1,1,2,0,0,0,1,3],[0.0,"="],42.08],["SEN","Senegal",32.41,[20220718,1,1,1,0,1,0,0,1,3],[0.21,"-"],6.34],["LSO","Lesotho",32.41,[20220627,0,2,2,2,0,0,0,1,4],[0.0,"="],38.25],["SLB","Solomon Islands",32.41,[20220723,1,1,1,0,0,0,1,3,2],[0.0,"="],25.72],["KGZ","Kyrgyz Republic",33.33,[20220711,0,0,2,4,0,0,0,0,2],[0.63,"="],20.33],["TKM","Turkmenistan",33.33,[20220719,0,0,0,0,0,0,2,4,3],[],46.04],["TGO","Togo",34.26,[20220711,0,1,1,3,0,2,0,2,3],[0.26,"-"],18.02],["PNG","Papua New Guinea",34.26,[20220719,0,1,1,3,0,0,0,4,2],[0.02,"="],2.82],["HND","Honduras",34.26,[20220711,0,2,1,0,0,2,0,1,3],[7.99,"="],52.85],["HTI","Haiti",34.26,[20220620,0,1,1,4,0,0,0,1,2],[0.04,"-"],1.41],["BGD","Bangladesh",34.26,[20220712,2,1,1,0,0,1,0,1,4],[0.51,"-"],71.0],["AUT","Austria",35.19,[20220718,2,2,1,2,0,0,0,0,2],[136.04,"="],74.26],["ARE","United Arab Emirates",35.19,[20220718,1,1,2,0,0,0,0,2,3],[13.94,"-"],104.56],["GIN","Guinea",35.19,[20220718,1,1,1,3,0,0,0,1,2],[0.0,"="],19.52],["MRT","Mauritania",35.19,[20220718,1,1,1,3,0,0,0,1,2],[1.28,"-"],28.93],["AZE","Azerbaijan",36.11,[20220701,0,0,2,2,1,0,0,1,0],[3.88,"+"],47.1],["RKS","Kosovo",37.04,[20220711,2,2,2,0,0,0,0,0,1],[66.8,"+"],46.24],["SLV","El Salvador",37.96,[20220715,1,1,2,1,1,0,0,0,3],[0.0,"="],68.46],["PHL","Philippines",37.96,[20220711,1,2,1,0,1,0,0,4,4],[2.4,"+"],63.08],["EGY","Egypt",37.96,[20220711,1,1,2,3,0,0,0,0,3],[0.0,"="],34.63],["PRI","Puerto Rico",37.96,[20220717,1,1,2,0,0,0,0,3,2],[]],["USA","United States",38.89,[20220707,2,2,0,0,1,0,1,4,2],[37.18,"-"],67.15],["BRA","Brazil",39.81,[20220721,2,1,1,0,1,1,1,4,2],[17.83,"-"],79.17],["NGA","Nigeria",39.81,[20220710,0,1,1,3,1,0,0,2,3],[0.09,"+"],11.56],["JPN","Japan",39.81,[20220718,1,1,1,1,0,1,1,2,1],[111.03,"+"],82.22],["ARG","Argentina",39.81,[20220712,0,1,2,4,0,0,0,1,2],[12.53,"="],83.15],["LKA","Sri Lanka",39.81,[20220627,3,0,1,1,0,1,0,2,3],[0.29,"+"],66.84],["QAT","Qatar",40.74,[20220717,1,1,2,0,1,0,0,2,2],[37.13,"-"],101.87],["MLI","Mali",40.74,[20220719,0,2,2,3,0,0,0,1,3],[0.01,"="],6.52],["SOM","Somalia",40.74,[20220627,0,2,2,1,0,2,0,1,3],[0.01,"="],9.69],["IDN","Indonesia",41.67,[20220722,1,2,1,1,0,0,1,2,2],[1.72,"+"],61.96],["SGP","Singapore",41.67,[20220723,1,1,1,2,0,1,0,3,2],[155.99,"-"],91.67],["BLZ","Belize",42.59,[20220718,2,2,1,0,1,0,1,1,0],[22.53,"="],54.49],["ZWE","Zimbabwe",42.59,[20220708,1,1,1,3,0,2,0,1,3],[0.16,"+"],29.0],["ETH","Ethiopia",43.52,[20220718,1,1,1,3,1,0,0,2,3],[0.09,"="],31.84],["VIR","United States Virgin Islands",43.52,[20220718,0,1,1,3,0,1,0,4,2],[]],["GTM","Guatemala",43.98,[20220722,2,1,1,3,1,1,0,1,2],[25.87,"-"],36.38],["TON","Tonga",44.44,[20220705,0,1,0,0,0,2,2,4,4],[17.98,"+"],91.64],["SYC","Seychelles",45.37,[20220712,1,0,2,4,1,0,0,1,3],[12.2,"="],75.95],["KEN","Kenya",45.37,[20220704,0,1,2,3,0,0,0,4,1],[0.15,"="],17.6],["BHS","Bahamas",46.3,[20220718,1,1,1,3,1,0,1,1,4],[7.77,"+"],39.11],["LBN","Lebanon",46.3,[20220704,1,2,1,1,1,2,0,1,1],[36.0,"-"],42.6],["DZA","Algeria",47.22,[20220718,1,2,1,4,1,0,0,1,3],[0.11,"+"],15.51],["LBY","Libya",47.22,[20220716,1,2,2,4,0,0,0,1,3],[0.73,"="],18.05],["TUN","Tunisia",47.22,[20220517,1,2,2,4,0,0,0,1,3],[33.05,"="],52.01],["MYS","Malaysia",47.22,[20220714,1,1,1,1,1,1,1,2,2],[13.19,"-"],81.66],["BRB","Barbados",47.22,[20220717,1,1,1,2,1,1,1,1,2],[108.92,"+"],54.73],["LBR","Liberia",48.15,[20220718,1,3,2,0,0,0,0,4,4],[0.01,"="],44.83],["SLE","Sierra Leone",48.15,[20220718,2,2,2,0,1,0,0,2,3],[0.01,"="],22.76],["DJI","Djibouti",49.07,[20220720,1,1,2,4,1,0,0,1,3],[0.0,"="],15.57],["CHL","Chile",49.54,[20220717,1,1,2,2,0,0,2,3,2],[35.34,"+"],90.35],["PER","Peru",50.93,[20220701,1,3,2,0,1,0,1,1,3],[32.9,"-"],82.4],["ERI","Eritrea",50.93,[20220709,1,1,1,3,1,2,0,2,4],[0.26,"="]],["GHA","Ghana",51.85,[20220718,0,2,2,4,0,0,0,4,1],[0.0,"="],24.0],["NPL","Nepal",51.85,[20220718,2,1,2,1,1,1,1,1,4],[0.99,"+"],68.25],["HKG","Hong Kong",52.78,[20220717,1,2,2,4,0,0,0,3,3],[51.25,"+"],86.61],["IRN","Iran",56.94,[20220705,3,2,2,4,0,0,2,1,2],[7.92,"+"],66.03],["MAR","Morocco",58.33,[20220704,1,2,2,4,2,0,0,1,2],[2.64,"-"],63.25],["RWA","Rwanda",58.33,[20220711,0,3,2,4,2,0,0,1,1],[0.21,"-"],65.54],["VUT","Vanuatu",59.72,[20220711,3,3,2,4,1,1,1,1,4],[0.05,"="],39.67],["FJI","Fiji",60.19,[20220718,0,2,2,0,2,0,2,3,2],[7.62,"="],68.73],["MMR","Myanmar",62.96,[20220717,1,1,1,2,1,2,2,4,4],[0.03,"="],51.2],["LAO","Laos",63.43,[20220723,2,2,1,4,1,2,2,1,3],[0.5,"="],68.37],["ECU","Ecuador",65.74,[20220718,0,2,2,4,2,0,2,1,2],[15.21,"="],78.9],["MAC","Macao",73.15,[20220721,3,2,2,4,0,2,1,3,3],[],85.55],["UKR","Ukraine",75.0,[20220704,3,1,2,3,2,1,2,3,3],[0.62,"="],34.81],["PAK","Pakistan",77.78,[20220711,3,2,2,1,2,1,2,3,4],[0.26,"-"],55.62],["CHN","China",79.17,[20220630,3,3,2,4,2,3,2,2,4],[0.06,"+"],88.67],["MDG","Madagascar",93.52,[20220714,3,3,2,3,2,2,2,4,4],[0.1,"="],4.42],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[123.44,"+"],45.24]];