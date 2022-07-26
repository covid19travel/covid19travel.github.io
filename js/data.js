const dataUpdate="2022.07.26";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["HUN","Hungary",0.0,[20220715,0,0,0,0,0,0,0,0,2],[15.17,"="],63.85],["MUS","Mauritius",5.56,[20220716,0,0,0,0,0,0,0,0,2],[50.71,"+"],75.27],["NER","Niger",5.56,[20220724,0,0,0,0,0,0,0,2,2],[0.0,"="],11.44],["DOM","Dominican Republic",5.56,[20220713,0,0,0,0,0,0,0,0,0],[5.5,"+"],54.08],["ZMB","Zambia",6.48,[20220709,0,1,0,0,0,0,0,1,3],[1.16,"+"],25.27],["CUB","Cuba",7.41,[20220711,1,1,0,0,0,0,0,0,-1],[0.8,"+"],88.64],["BFA","Burkina Faso",8.33,[20220701,0,0,0,0,0,0,0,1,3],[0.0,"="],7.42],["AND","Andorra",8.33,[20220619,0,0,0,0,0,0,0,0,0],[49.0,"-"],67.64],["TJK","Tajikistan",8.33,[20220716,0,0,0,0,0,0,0,1,0],[0.0,"="],51.64],["TZA","Tanzania",8.33,[20220722,0,0,0,0,0,0,0,1,0],[0.0,"="],16.54],["LIE","Liechtenstein",11.11,[20220706,0,0,0,0,0,0,0,0,1],[88.42,"+"],67.71],["CHE","Switzerland",11.11,[20220724,0,0,0,0,0,0,0,0,0],[82.13,"="],69.1],["GRL","Greenland",11.11,[20220725,0,0,0,0,0,0,0,0,0],[0.0,"="],68.46],["SWE","Sweden",11.11,[20220717,0,0,0,0,0,0,0,0,0],[8.22,"="],73.11],["ROU","Romania",11.11,[20220722,0,0,0,0,0,0,0,0,1],[33.04,"+"],41.98],["DNK","Denmark",11.11,[20220708,0,0,0,0,0,0,0,0,0],[22.47,"-"],81.83],["GBR","United Kingdom",11.11,[20220725,0,0,0,0,0,0,0,0,1],[29.41,"="],74.81],["NOR","Norway",11.11,[20220717,0,0,0,0,0,0,0,0,1],[4.23,"-"],74.95],["GAB","Gabon",11.11,[20220616,0,0,0,0,0,0,0,0,2],[0.82,"="],10.97],["FRO","Faeroe Islands",11.11,[20220706,0,0,0,0,0,0,0,0,0],[0.0,"="],77.32],["SAU","Saudi Arabia",11.11,[20220725,0,0,0,0,0,0,0,0,2],[1.43,"-"],69.77],["SVN","Slovenia",11.11,[20220619,0,0,0,0,0,0,0,0,2],[78.16,"+"],57.67],["SVK","Slovak Republic",11.11,[20220619,0,0,0,0,0,0,0,0,0],[22.11,"+"],50.81],["GEO","Georgia",11.11,[20220705,0,0,0,0,0,0,0,0,2],[27.98,"="],33.87],["CRI","Costa Rica",11.11,[20220620,0,0,0,0,0,0,0,0,1],[236.35,"="],81.02],["LTU","Lithuania",11.11,[20220719,0,0,0,0,0,0,0,0,1],[33.19,"+"],67.36],["EST","Estonia",11.11,[20220725,0,0,0,0,0,0,0,0,1],[-8.29,"="],63.85],["LVA","Latvia",11.11,[20220724,0,0,0,0,0,0,0,0,2],[66.04,"+"],69.69],["AUS","Australia",11.11,[20220726,0,0,0,0,0,0,0,0,2],[180.67,"-"],83.79],["MDA","Moldova",11.11,[20220704,0,0,0,0,0,0,0,0,1],[11.9,"="],34.74],["UZB","Uzbekistan",11.11,[20220726,0,0,0,0,0,0,0,0,1],[0.19,"-"],46.34],["KWT","Kuwait",11.11,[20220718,0,0,0,0,0,0,0,0,0],[16.07,"="],78.23],["BEN","Benin",11.11,[20220715,0,0,0,0,0,0,0,0,2],[0.06,"="],20.7],["SRB","Serbia",11.11,[20220711,0,0,0,0,0,0,0,0,2],[47.39,"+"],47.71],["BGR","Bulgaria",11.11,[20220725,0,0,0,0,0,0,0,0,0],[23.07,"+"],29.97],["YEM","Yemen",11.11,[20220709,0,0,1,0,0,2,0,0,0],[0.0,"="],1.36],["BHR","Bahrain",11.11,[20220725,0,0,0,0,0,0,0,0,2],[48.57,"-"],83.66],["ZAF","South Africa",11.11,[20220725,0,0,0,0,0,0,0,0,0],[0.78,"+"],32.28],["MNG","Mongolia",11.11,[20220704,0,0,0,0,0,0,0,0,2],[31.78,"+"],64.99],["AFG","Afghanistan",11.11,[20220716,0,2,1,0,1,0,0,0,3],[0.42,"+"],13.24],["JAM","Jamaica",11.11,[20220712,0,0,0,0,0,0,0,0,1],[4.13,"-"],25.36],["ISL","Iceland",11.11,[20220711,0,0,0,0,0,0,0,0,0],[61.58,"="],78.36],["TTO","Trinidad and Tobago",11.11,[20220724,0,0,0,0,0,0,0,0,1],[8.91,"-"],46.88],["IRL","Ireland",11.11,[20220720,0,0,0,0,0,0,0,0,1],[31.0,"="],81.14],["KAZ","Kazakhstan",11.11,[20220711,0,0,0,0,0,0,0,0,1],[11.85,"="],48.59],["ALB","Albania",11.11,[20220709,0,0,0,0,0,0,0,0,2],[0.0,"="],43.84],["SDN","Sudan",13.89,[20220706,0,0,0,0,0,0,0,1,0],[0.01,"-"],9.94],["NIC","Nicaragua",13.89,[20220718,0,0,0,0,0,0,0,1,0],[0.06,"="],81.72],["PRY","Paraguay",13.89,[20220726,0,0,0,0,0,0,0,1,1],[24.52,"="],52.11],["PRT","Portugal",13.89,[20220718,0,0,0,0,0,0,0,1,2],[41.2,"-"],86.46],["GMB","Gambia",13.89,[20220711,0,0,0,0,0,0,0,1,3],[0.11,"="],13.42],["MLT","Malta",13.89,[20220724,0,0,0,0,0,0,0,1,2],[37.08,"-"],89.26],["KOR","South Korea",13.89,[20220703,0,0,0,0,0,0,0,1,3],[135.19,"+"],86.14],["SMR","San Marino",13.89,[20220716,0,0,0,0,0,0,0,1,1],[154.09,"+"],70.03],["TCD","Chad",13.89,[20220717,0,0,0,0,0,0,0,1,3],[0.0,"="],12.19],["TUR","Turkey",13.89,[20220725,0,0,0,0,0,0,0,1,2],[38.37,"="],62.64],["URY","Uruguay",13.89,[20220724,0,0,0,0,0,0,0,1,1],[10.03,"="],84.33],["BWA","Botswana",13.89,[20220725,0,0,0,0,0,0,0,1,3],[2.07,"="],58.44],["BDI","Burundi",13.89,[20220725,0,0,0,0,0,0,0,1,2],[1.23,"+"],0.13],["VEN","Venezuela",13.89,[20220725,0,0,0,0,0,0,0,1,4],[1.28,"+"],50.66],["CZE","Czech Republic",14.81,[20220530,0,1,0,0,0,0,0,0,2],[17.24,"-"],65.48],["OMN","Oman",14.81,[20220715,1,0,0,0,0,0,0,0,0],[0.0,"-"],67.28],["POL","Poland",14.81,[20220719,1,0,0,0,0,0,0,0,2],[6.36,"+"],58.8],["ISR","Israel",14.81,[20220725,1,0,0,0,0,0,0,0,2],[64.81,"-"],66.18],["MCO","Monaco",14.81,[20220707,0,1,0,0,0,0,0,-1,2],[67.35,"-"],69.96],["JOR","Jordan",14.81,[20220718,0,1,0,0,0,0,0,0,0],[6.67,"+"],40.8],["HRV","Croatia",14.81,[20220716,0,1,0,0,0,0,0,0,2],[33.06,"+"],55.32],["DEU","Germany",14.81,[20220718,0,0,0,0,0,1,0,0,2],[106.21,"-"],76.0],["CYP","Cyprus",14.81,[20220711,0,1,0,0,0,0,0,0,2],[120.12,"="],72.0],["GRC","Greece",14.81,[20220724,1,0,0,0,0,0,0,0,2],[503.87,"="],73.07],["CIV","Cote d'Ivoire",15.74,[20220713,0,1,0,0,0,0,0,1,3],[0.21,"-"],24.78],["BLR","Belarus",16.67,[20220719,0,0,0,0,0,0,0,2,1],[0.0,"="],66.12],["UGA","Uganda",16.67,[20220724,0,0,0,0,0,0,0,2,3],[0.07,"="],26.24],["TLS","Timor-Leste",16.67,[20220716,0,0,0,0,0,0,0,2,3],[0.09,"-"],54.96],["BRN","Brunei",16.67,[20220719,0,0,0,0,0,0,0,2,2],[393.81,"-"],95.82],["SSD","South Sudan",16.67,[20220725,0,0,0,0,0,0,0,2,2],[0.0,"="],11.82],["PSE","Palestine",16.67,[20220616,0,0,0,0,0,0,0,2,4],[],34.53],["KHM","Cambodia",17.59,[20220725,1,0,0,0,0,0,0,1,2],[0.12,"+"],86.87],["LUX","Luxembourg",19.44,[20220725,0,0,0,0,0,0,0,3,0],[90.24,"-"],72.35],["NLD","Netherlands",19.44,[20220717,0,0,0,0,0,0,0,3,0],[24.11,"-"],69.2],["CPV","Cape Verde",19.44,[20220706,0,0,0,0,0,0,1,1,2],[4.01,"+"],52.33],["KIR","Kiribati",20.37,[20220704,3,0,0,0,0,0,0,0,4],[23.2,"="],47.08],["CAF","Central African Republic",21.3,[20220718,0,0,0,0,0,2,0,1,3],[0.0,"="],22.8],["SUR","Suriname",21.3,[20220717,1,1,0,0,0,0,0,1,2],[0.73,"="],38.81],["BTN","Bhutan",22.22,[20220723,0,0,1,0,0,0,0,2,4],[4.8,"+"],86.54],["GUM","Guam",22.22,[20220617,0,0,0,0,0,0,0,4,1],[]],["BMU","Bermuda",22.22,[20220711,0,0,0,0,0,0,0,4,2],[61.02,"="],74.25],["ITA","Italy",22.22,[20220719,1,2,0,0,0,0,0,0,2],[119.62,"-"],80.95],["FRA","France",23.15,[20220619,0,1,0,0,0,0,0,3,2],[111.98,"-"],78.58],["SWZ","Eswatini",23.15,[20220620,0,1,1,0,0,0,0,1,4],[0.2,"+"],28.69],["NAM","Namibia",23.15,[20220704,0,1,1,2,0,0,0,1,1],[0.0,"="],17.53],["BOL","Bolivia",23.15,[20220718,2,1,0,0,0,0,0,1,3],[46.83,"+"],50.08],["BEL","Belgium",23.15,[20220708,0,1,0,0,0,0,0,3,2],[36.42,"-"],78.84],["ESP","Spain",23.61,[20220724,0,0,1,3,0,0,0,1,1],[34.95,"="],85.49],["FIN","Finland",24.07,[20220708,1,1,0,0,1,0,0,0,1],[0.0,"="],78.33],["THA","Thailand",24.07,[20220725,1,1,0,1,0,0,0,1,1],[2.99,"-"],74.21],["COG","Congo",25.0,[20220713,0,0,1,0,1,0,0,1,3],[0.0,"="],11.21],["MEX","Mexico",25.0,[20220711,3,1,0,0,0,0,0,1,2],[19.95,"+"],63.1],["COL","Colombia",25.0,[20220725,1,0,0,0,0,1,0,3,2],[6.78,"="],70.45],["VNM","Vietnam",25.93,[20220710,0,1,1,2,0,0,0,0,3],[1.09,"+"],82.27],["ABW","Aruba",25.93,[20220725,0,1,1,2,0,0,0,0,2],[31.18,"+"],78.04],["BIH","Bosnia and Herzegovina",25.93,[20220722,1,0,1,2,0,0,0,0,2],[9.86,"+"],25.87],["COD","Democratic Republic of Congo",25.93,[20220718,0,1,1,0,0,0,0,2,3],[0.03,"="],2.36],["NZL","New Zealand",26.85,[20220716,0,2,0,0,0,0,0,3,2],[152.06,"-"],80.43],["SYR","Syria",26.85,[20220711,1,1,1,0,0,0,0,1,2],[0.12,"+"],8.63],["TWN","Taiwan",26.85,[20220707,1,1,0,0,0,0,0,3,3],[98.93,"-"],83.32],["CMR","Cameroon",27.78,[20220720,0,0,1,3,0,0,0,1,3],[0.0,"="],4.5],["RUS","Russia",28.24,[20220712,0,1,2,1,0,0,0,2,2],[4.26,"+"],51.67],["MOZ","Mozambique",28.7,[20220620,0,1,1,2,0,0,0,1,2],[0.14,"-"],43.95],["PAN","Panama",28.7,[20220701,1,0,2,0,0,0,0,1,2],[0.0,"-"],71.79],["AGO","Angola",29.63,[20220704,0,2,1,0,0,0,0,2,3],[0.04,"-"],21.43],["GUY","Guyana",29.63,[20220725,1,1,0,0,0,0,0,4,1],[9.01,"-"],57.31],["CAN","Canada",29.63,[20220725,0,2,0,0,0,0,0,4,2],[14.39,"+"],82.49],["GRD","Grenada",31.48,[20220328,1,0,0,3,0,0,0,3,3],[8.25,"="],31.02],["IND","India",31.48,[20220719,0,1,0,0,0,2,2,1,3],[1.42,"-"],66.06],["MWI","Malawi",31.48,[20220716,0,1,1,3,0,0,0,1,3],[0.21,"-"],7.63],["SEN","Senegal",32.41,[20220725,1,1,1,0,1,0,0,1,3],[0.28,"+"],6.23],["DMA","Dominica",32.41,[20220711,1,1,1,2,0,0,0,1,3],[0.0,"="],42.08],["LSO","Lesotho",32.41,[20220627,0,2,2,2,0,0,0,1,4],[0.0,"="],38.25],["SLB","Solomon Islands",32.41,[20220723,1,1,1,0,0,0,1,3,2],[0.0,"="],25.72],["LKA","Sri Lanka",32.41,[20220725,0,1,1,0,1,1,0,1,3],[0.31,"+"],66.84],["KGZ","Kyrgyz Republic",33.33,[20220724,0,0,2,4,0,0,0,0,2],[0.28,"-"],20.33],["TKM","Turkmenistan",33.33,[20220719,0,0,0,0,0,0,2,4,3],[],46.04],["HTI","Haiti",34.26,[20220620,0,1,1,4,0,0,0,1,2],[0.09,"+"],1.41],["HND","Honduras",34.26,[20220711,0,2,1,0,0,2,0,1,2],[5.87,"-"],52.85],["TGO","Togo",34.26,[20220711,0,1,1,3,0,2,0,2,3],[0.26,"-"],18.02],["PNG","Papua New Guinea",34.26,[20220719,0,1,1,3,0,0,0,4,2],[0.02,"="],2.82],["BGD","Bangladesh",34.26,[20220724,2,1,1,0,0,1,0,1,4],[0.43,"-"],71.05],["GIN","Guinea",35.19,[20220725,1,1,1,3,0,0,0,1,2],[0.0,"="],20.04],["IRQ","Iraq",35.19,[20220725,0,2,2,1,0,0,0,1,2],[8.22,"-"],17.6],["SOM","Somalia",35.19,[20220725,0,0,2,1,0,2,0,1,3],[0.04,"+"],9.69],["ARE","United Arab Emirates",35.19,[20220718,1,1,2,0,0,0,0,2,3],[13.67,"-"],104.56],["AUT","Austria",35.19,[20220725,2,2,1,2,0,0,0,0,2],[124.24,"-"],74.26],["AZE","Azerbaijan",36.11,[20220701,0,0,2,2,1,0,0,1,0],[2.71,"-"],47.1],["RKS","Kosovo",37.04,[20220711,2,2,2,0,0,0,0,0,1],[67.54,"-"],46.24],["PRI","Puerto Rico",37.96,[20220717,1,1,2,0,0,0,0,3,2],[]],["EGY","Egypt",37.96,[20220724,1,1,2,3,0,0,0,0,3],[0.0,"="],34.63],["SLV","El Salvador",37.96,[20220725,1,1,2,1,1,0,0,0,3],[0.0,"="],68.46],["PHL","Philippines",37.96,[20220724,1,2,1,0,1,0,0,4,4],[2.61,"+"],63.08],["MRT","Mauritania",38.89,[20220725,1,2,1,3,0,0,0,1,2],[1.17,"-"],28.93],["USA","United States",38.89,[20220707,2,2,0,0,1,0,1,4,2],[36.9,"-"],67.15],["ARG","Argentina",39.81,[20220712,0,1,2,4,0,0,0,1,2],[13.19,"="],83.16],["NGA","Nigeria",39.81,[20220710,0,1,1,3,1,0,0,2,3],[0.09,"="],11.56],["JPN","Japan",39.81,[20220725,1,1,1,1,0,1,1,2,1],[124.72,"+"],82.24],["BRA","Brazil",39.81,[20220721,2,1,1,0,1,1,1,4,2],[18.96,"-"],79.4],["KEN","Kenya",39.81,[20220725,0,1,2,3,0,0,0,2,2],[0.14,"-"],17.6],["QAT","Qatar",40.74,[20220717,1,1,2,0,1,0,0,2,2],[35.21,"-"],101.87],["BHS","Bahamas",40.74,[20220725,1,1,1,3,1,0,0,1,4],[6.14,"+"],39.11],["MLI","Mali",40.74,[20220719,0,2,2,3,0,0,0,1,3],[0.01,"="],6.52],["SGP","Singapore",41.67,[20220723,1,1,1,2,0,1,0,3,2],[152.46,"-"],91.67],["IDN","Indonesia",41.67,[20220722,1,2,1,1,0,0,1,2,2],[1.78,"+"],61.96],["BLZ","Belize",42.59,[20220718,2,2,1,0,1,0,1,1,0],[21.13,"-"],54.49],["ZWE","Zimbabwe",42.59,[20220708,1,1,1,3,0,2,0,1,3],[0.18,"+"],29.0],["TUN","Tunisia",43.52,[20220725,0,2,2,4,0,0,0,1,3],[33.05,"="],52.01],["VIR","United States Virgin Islands",43.52,[20220718,0,1,1,3,0,1,0,4,2],[]],["ETH","Ethiopia",43.52,[20220718,1,1,1,3,1,0,0,2,3],[0.09,"+"],31.84],["GTM","Guatemala",43.98,[20220722,2,1,1,3,1,1,0,1,2],[25.75,"+"],36.38],["TON","Tonga",44.44,[20220705,0,1,0,0,0,2,2,4,4],[10.27,"="],91.64],["SYC","Seychelles",45.37,[20220712,1,0,2,4,1,0,0,1,3],[28.47,"+"],76.01],["LBN","Lebanon",46.3,[20220704,1,2,1,1,1,2,0,1,1],[35.55,"+"],42.6],["LBY","Libya",47.22,[20220716,1,2,2,4,0,0,0,1,3],[2.01,"+"],18.05],["DZA","Algeria",47.22,[20220718,1,2,1,4,1,0,0,1,3],[0.14,"+"],15.51],["MYS","Malaysia",47.22,[20220725,1,1,1,1,1,1,1,2,2],[12.75,"+"],81.68],["BRB","Barbados",47.22,[20220717,1,1,1,2,1,1,1,1,2],[115.63,"+"],54.74],["LBR","Liberia",48.15,[20220718,1,3,2,0,0,0,0,4,4],[0.01,"="],44.83],["SLE","Sierra Leone",48.15,[20220725,2,2,2,0,1,0,0,2,3],[0.01,"="],22.76],["DJI","Djibouti",49.07,[20220720,1,1,2,4,1,0,0,1,3],[0.0,"="],15.57],["PER","Peru",50.93,[20220725,1,3,2,0,1,0,1,1,3],[36.24,"-"],82.6],["ERI","Eritrea",50.93,[20220725,1,1,1,3,1,2,0,2,4],[0.25,"+"]],["NPL","Nepal",51.85,[20220725,2,1,2,1,1,1,1,1,4],[1.12,"+"],68.25],["GHA","Ghana",51.85,[20220718,0,2,2,4,0,0,0,4,1],[0.0,"="],24.0],["HKG","Hong Kong",52.78,[20220717,1,2,2,4,0,0,0,3,3],[54.02,"+"],86.61],["IRN","Iran",56.94,[20220705,3,2,2,4,0,0,2,1,2],[9.14,"+"],66.03],["MAR","Morocco",58.33,[20220704,1,2,2,4,2,0,0,1,2],[2.42,"-"],63.25],["RWA","Rwanda",58.33,[20220711,0,3,2,4,2,0,0,1,1],[0.24,"+"],65.54],["CHL","Chile",58.8,[20220717,1,3,2,2,0,0,2,3,2],[37.04,"+"],90.37],["VUT","Vanuatu",59.72,[20220711,3,3,2,4,1,1,1,1,4],[-0.33,"-"],39.67],["FJI","Fiji",60.19,[20220718,0,2,2,0,2,0,2,3,2],[6.07,"-"],68.73],["MMR","Myanmar",62.96,[20220717,1,1,1,2,1,2,2,4,4],[0.03,"-"],51.2],["LAO","Laos",63.43,[20220723,2,2,1,4,1,2,2,1,3],[0.53,"+"],68.37],["ECU","Ecuador",65.74,[20220725,0,2,2,4,2,0,2,1,2],[16.5,"+"],78.9],["MAC","Macao",73.15,[20220721,3,2,2,4,0,2,1,3,3],[],85.59],["UKR","Ukraine",75.0,[20220704,3,1,2,3,2,1,2,3,3],[0.64,"+"],34.81],["PAK","Pakistan",77.78,[20220711,3,2,2,1,2,1,2,3,4],[0.26,"-"],55.67],["CHN","China",79.17,[20220630,3,3,2,4,2,3,2,2,4],[0.06,"="],88.71],["MDG","Madagascar",93.52,[20220714,3,3,2,3,2,2,2,4,4],[0.07,"="],4.46],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[130.92,"+"],45.24]];