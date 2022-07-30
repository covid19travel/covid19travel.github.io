const dataUpdate="2022.07.30";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["HUN","Hungary",0.0,[20220715,0,0,0,0,0,0,0,0,2],[21.3,"="],63.86],["MUS","Mauritius",5.56,[20220716,0,0,0,0,0,0,0,0,2],[92.1,"="],75.27],["NER","Niger",5.56,[20220724,0,0,0,0,0,0,0,2,2],[0.0,"="],11.44],["DOM","Dominican Republic",5.56,[20220713,0,0,0,0,0,0,0,0,0],[4.03,"-"],54.1],["ZMB","Zambia",6.48,[20220709,0,1,0,0,0,0,0,1,3],[0.73,"="],25.27],["CUB","Cuba",7.41,[20220711,1,1,0,0,0,0,0,0,-1],[0.87,"-"],88.64],["BFA","Burkina Faso",8.33,[20220701,0,0,0,0,0,0,0,1,3],[0.0,"="],7.42],["AND","Andorra",8.33,[20220619,0,0,0,0,0,0,0,0,0],[33.65,"="],67.64],["TJK","Tajikistan",8.33,[20220716,0,0,0,0,0,0,0,1,0],[0.0,"="],51.64],["TZA","Tanzania",8.33,[20220722,0,0,0,0,0,0,0,1,0],[0.0,"="],16.54],["LIE","Liechtenstein",11.11,[20220706,0,0,0,0,0,0,0,0,1],[74.94,"+"],67.72],["CHE","Switzerland",11.11,[20220724,0,0,0,0,0,0,0,0,0],[62.3,"="],69.1],["GRL","Greenland",11.11,[20220725,0,0,0,0,0,0,0,0,0],[0.0,"="],68.46],["SWE","Sweden",11.11,[20220717,0,0,0,0,0,0,0,0,0],[8.12,"="],73.11],["ROU","Romania",11.11,[20220722,0,0,0,0,0,0,0,0,1],[41.48,"+"],41.98],["DNK","Denmark",11.11,[20220708,0,0,0,0,0,0,0,0,0],[27.74,"-"],81.82],["GBR","United Kingdom",11.11,[20220725,0,0,0,0,0,0,0,0,1],[19.56,"-"],74.92],["NOR","Norway",11.11,[20220717,0,0,0,0,0,0,0,0,1],[3.54,"-"],74.95],["GAB","Gabon",11.11,[20220616,0,0,0,0,0,0,0,0,2],[1.42,"="],10.97],["FRO","Faeroe Islands",11.11,[20220706,0,0,0,0,0,0,0,0,0],[0.0,"="],77.32],["SAU","Saudi Arabia",11.11,[20220725,0,0,0,0,0,0,0,0,2],[0.98,"-"],69.77],["SVN","Slovenia",11.11,[20220619,0,0,0,0,0,0,0,0,2],[80.73,"-"],57.67],["SVK","Slovak Republic",11.11,[20220619,0,0,0,0,0,0,0,0,0],[21.65,"+"],50.8],["GEO","Georgia",11.11,[20220705,0,0,0,0,0,0,0,0,2],[39.22,"="],33.89],["CRI","Costa Rica",11.11,[20220620,0,0,0,0,0,0,0,0,1],[190.79,"="],81.1],["LTU","Lithuania",11.11,[20220719,0,0,0,0,0,0,0,0,1],[39.43,"+"],67.36],["EST","Estonia",11.11,[20220725,0,0,0,0,0,0,0,0,1],[21.82,"="],63.88],["LVA","Latvia",11.11,[20220724,0,0,0,0,0,0,0,0,2],[68.47,"+"],69.69],["AUS","Australia",11.11,[20220726,0,0,0,0,0,0,0,0,2],[174.35,"+"],83.82],["MDA","Moldova",11.11,[20220704,0,0,0,0,0,0,0,0,1],[20.52,"="],34.74],["UZB","Uzbekistan",11.11,[20220726,0,0,0,0,0,0,0,0,1],[0.18,"-"],46.34],["KWT","Kuwait",11.11,[20220718,0,0,0,0,0,0,0,0,0],[3.98,"-"],78.3],["BEN","Benin",11.11,[20220715,0,0,0,0,0,0,0,0,2],[0.05,"+"],20.7],["SRB","Serbia",11.11,[20220711,0,0,0,0,0,0,0,0,2],[59.7,"+"],47.71],["BGR","Bulgaria",11.11,[20220725,0,0,0,0,0,0,0,0,0],[24.48,"-"],29.98],["YEM","Yemen",11.11,[20220709,0,0,1,0,0,2,0,0,0],[0.0,"="],1.36],["BHR","Bahrain",11.11,[20220725,0,0,0,0,0,0,0,0,2],[37.83,"-"],83.66],["ZAF","South Africa",11.11,[20220725,0,0,0,0,0,0,0,0,0],[0.58,"+"],32.33],["MNG","Mongolia",11.11,[20220704,0,0,0,0,0,0,0,0,2],[40.67,"+"],64.99],["AFG","Afghanistan",11.11,[20220716,0,2,1,0,1,0,0,0,3],[0.41,"-"],16.02],["JAM","Jamaica",11.11,[20220712,0,0,0,0,0,0,0,0,1],[3.71,"-"],25.39],["ISL","Iceland",11.11,[20220711,0,0,0,0,0,0,0,0,0],[45.0,"-"],78.36],["TTO","Trinidad and Tobago",11.11,[20220724,0,0,0,0,0,0,0,0,1],[12.68,"+"],46.89],["IRL","Ireland",11.11,[20220720,0,0,0,0,0,0,0,0,1],[13.62,"="],81.15],["KAZ","Kazakhstan",11.11,[20220711,0,0,0,0,0,0,0,0,1],[13.91,"-"],54.76],["ALB","Albania",11.11,[20220709,0,0,0,0,0,0,0,0,2],[37.7,"-"],43.93],["SDN","Sudan",13.89,[20220706,0,0,0,0,0,0,0,1,0],[0.03,"="],9.94],["NIC","Nicaragua",13.89,[20220718,0,0,0,0,0,0,0,1,0],[0.06,"="],81.91],["PRY","Paraguay",13.89,[20220726,0,0,0,0,0,0,0,1,1],[36.63,"+"],52.11],["PRT","Portugal",13.89,[20220718,0,0,0,0,0,0,0,1,2],[33.08,"-"],86.48],["GMB","Gambia",13.89,[20220711,0,0,0,0,0,0,0,1,3],[0.3,"="],13.42],["MLT","Malta",13.89,[20220724,0,0,0,0,0,0,0,1,2],[23.81,"-"],89.27],["KOR","South Korea",13.89,[20220703,0,0,0,0,0,0,0,1,3],[155.0,"+"],86.15],["SMR","San Marino",13.89,[20220716,0,0,0,0,0,0,0,1,1],[109.89,"-"],70.03],["TCD","Chad",13.89,[20220717,0,0,0,0,0,0,0,1,3],[0.0,"="],12.19],["TUR","Turkey",13.89,[20220725,0,0,0,0,0,0,0,1,2],[61.9,"+"],62.65],["URY","Uruguay",13.89,[20220724,0,0,0,0,0,0,0,1,1],[8.2,"="],84.34],["BWA","Botswana",13.89,[20220725,0,0,0,0,0,0,0,1,3],[1.76,"="],58.44],["BDI","Burundi",13.89,[20220725,0,0,0,0,0,0,0,1,2],[1.75,"+"],0.13],["VEN","Venezuela",13.89,[20220725,0,0,0,0,0,0,0,1,4],[1.48,"+"],50.66],["CZE","Czech Republic",14.81,[20220530,0,1,0,0,0,0,0,0,2],[18.82,"-"],65.48],["OMN","Oman",14.81,[20220715,1,0,0,0,0,0,0,0,0],[7.65,"="],67.28],["POL","Poland",14.81,[20220719,1,0,0,0,0,0,0,0,2],[7.7,"+"],58.8],["ISR","Israel",14.81,[20220725,1,0,0,0,0,0,0,0,2],[53.32,"-"],66.18],["MCO","Monaco",14.81,[20220707,0,1,0,0,0,0,0,-1,2],[34.58,"-"],69.96],["JOR","Jordan",14.81,[20220718,0,1,0,0,0,0,0,0,0],[6.67,"="],40.82],["HRV","Croatia",14.81,[20220716,0,1,0,0,0,0,0,0,2],[32.84,"-"],55.33],["DEU","Germany",14.81,[20220718,0,0,0,0,0,1,0,0,2],[89.04,"-"],76.0],["CYP","Cyprus",14.81,[20220711,0,1,0,0,0,0,0,0,2],[81.2,"-"],72.03],["GRC","Greece",14.81,[20220724,1,0,0,0,0,0,0,0,2],[190.03,"="],73.08],["CIV","Cote d'Ivoire",15.74,[20220713,0,1,0,0,0,0,0,1,3],[0.2,"+"],24.78],["BLR","Belarus",16.67,[20220719,0,0,0,0,0,0,0,2,1],[0.0,"="],66.12],["UGA","Uganda",16.67,[20220724,0,0,0,0,0,0,0,2,3],[0.11,"+"],26.24],["TLS","Timor-Leste",16.67,[20220716,0,0,0,0,0,0,0,2,3],[0.15,"+"],55.2],["BRN","Brunei",16.67,[20220719,0,0,0,0,0,0,0,2,2],[351.92,"-"],95.82],["SSD","South Sudan",16.67,[20220725,0,0,0,0,0,0,0,2,2],[0.0,"="],11.82],["PSE","Palestine",16.67,[20220616,0,0,0,0,0,0,0,2,4],[],34.55],["KHM","Cambodia",17.59,[20220725,1,0,0,0,0,0,0,1,2],[0.14,"+"],86.87],["LUX","Luxembourg",19.44,[20220725,0,0,0,0,0,0,0,3,0],[62.42,"-"],72.35],["NLD","Netherlands",19.44,[20220717,0,0,0,0,0,0,0,3,0],[21.4,"-"],69.2],["CPV","Cape Verde",19.44,[20220706,0,0,0,0,0,0,1,1,2],[3.11,"+"],52.33],["KIR","Kiribati",20.37,[20220704,3,0,0,0,0,0,0,0,4],[9.81,"="],47.08],["CAF","Central African Republic",21.3,[20220718,0,0,0,0,0,2,0,1,3],[0.15,"="],22.8],["SUR","Suriname",21.3,[20220717,1,1,0,0,0,0,0,1,2],[0.41,"="],38.81],["BTN","Bhutan",22.22,[20220723,0,0,1,0,0,0,0,2,4],[4.8,"="],86.58],["GUM","Guam",22.22,[20220617,0,0,0,0,0,0,0,4,1],[]],["BMU","Bermuda",22.22,[20220711,0,0,0,0,0,0,0,4,2],[47.02,"="],74.25],["ITA","Italy",22.22,[20220719,1,2,0,0,0,0,0,0,2],[97.69,"-"],80.95],["FRA","France",23.15,[20220619,0,1,0,0,0,0,0,3,2],[82.26,"-"],78.6],["SWZ","Eswatini",23.15,[20220620,0,1,1,0,0,0,0,1,4],[0.3,"-"],28.69],["NAM","Namibia",23.15,[20220704,0,1,1,2,0,0,0,1,1],[0.0,"="],17.53],["BOL","Bolivia",23.15,[20220718,2,1,0,0,0,0,0,1,3],[42.11,"-"],50.23],["BEL","Belgium",23.15,[20220708,0,1,0,0,0,0,0,3,2],[40.58,"="],78.84],["ESP","Spain",23.61,[20220724,0,0,1,3,0,0,0,1,1],[6.64,"-"],85.51],["FIN","Finland",24.07,[20220708,1,1,0,0,1,0,0,0,1],[0.0,"="],78.33],["THA","Thailand",24.07,[20220725,1,1,0,1,0,0,0,1,1],[2.68,"-"],74.26],["COG","Congo",25.0,[20220713,0,0,1,0,1,0,0,1,3],[0.44,"+"],11.21],["MEX","Mexico",25.0,[20220711,3,1,0,0,0,0,0,1,2],[13.63,"-"],63.1],["COL","Colombia",25.0,[20220725,1,0,0,0,0,1,0,3,2],[5.1,"="],70.45],["VNM","Vietnam",25.93,[20220710,0,1,1,2,0,0,0,0,3],[1.52,"+"],82.27],["ABW","Aruba",25.93,[20220725,0,1,1,2,0,0,0,0,2],[39.2,"="],78.1],["BIH","Bosnia and Herzegovina",25.93,[20220722,1,0,1,2,0,0,0,0,2],[9.21,"+"],25.87],["COD","Democratic Republic of Congo",25.93,[20220718,0,1,1,0,0,0,0,2,3],[0.04,"="],2.36],["NZL","New Zealand",26.85,[20220716,0,2,0,0,0,0,0,3,2],[161.21,"-"],80.44],["SYR","Syria",26.85,[20220711,1,1,1,0,0,0,0,1,2],[0.17,"-"],8.98],["TWN","Taiwan",26.85,[20220707,1,1,0,0,0,0,0,3,3],[95.58,"-"],83.43],["CMR","Cameroon",27.78,[20220720,0,0,1,3,0,0,0,1,3],[0.08,"="],4.5],["RUS","Russia",28.24,[20220712,0,1,2,1,0,0,0,2,2],[5.73,"+"],51.72],["MOZ","Mozambique",28.7,[20220620,0,1,1,2,0,0,0,1,2],[0.11,"="],43.95],["PAN","Panama",28.7,[20220701,1,0,2,0,0,0,0,1,2],[21.16,"="],71.79],["AGO","Angola",29.63,[20220704,0,2,1,0,0,0,0,2,3],[0.0,"-"],21.43],["GUY","Guyana",29.63,[20220725,1,1,0,0,0,0,0,4,1],[7.5,"-"],57.37],["CAN","Canada",29.63,[20220725,0,2,0,0,0,0,0,4,2],[11.57,"-"],82.56],["GRD","Grenada",31.48,[20220328,1,0,0,3,0,0,0,3,3],[8.38,"="],31.03],["IND","India",31.48,[20220719,0,1,0,0,0,2,2,1,3],[1.36,"+"],66.21],["MWI","Malawi",31.48,[20220716,0,1,1,3,0,0,0,1,3],[0.18,"+"],7.63],["SEN","Senegal",32.41,[20220725,1,1,1,0,1,0,0,1,3],[0.26,"="],6.34],["DMA","Dominica",32.41,[20220711,1,1,1,2,0,0,0,1,3],[0.0,"="],42.08],["LSO","Lesotho",32.41,[20220627,0,2,2,2,0,0,0,1,4],[0.0,"="],38.25],["SLB","Solomon Islands",32.41,[20220723,1,1,1,0,0,0,1,3,2],[0.0,"="],26.45],["LKA","Sri Lanka",32.41,[20220725,0,1,1,0,1,1,0,1,3],[0.51,"+"],66.84],["KGZ","Kyrgyz Republic",33.33,[20220724,0,0,2,4,0,0,0,0,2],[2.15,"="],20.33],["TKM","Turkmenistan",33.33,[20220719,0,0,0,0,0,0,2,4,3],[],46.04],["HTI","Haiti",34.26,[20220620,0,1,1,4,0,0,0,1,2],[0.15,"+"],1.41],["HND","Honduras",34.26,[20220711,0,2,1,0,0,2,0,1,2],[5.32,"+"],52.85],["TGO","Togo",34.26,[20220711,0,1,1,3,0,2,0,2,3],[0.27,"+"],18.02],["PNG","Papua New Guinea",34.26,[20220719,0,1,1,3,0,0,0,4,2],[0.02,"+"],2.83],["BGD","Bangladesh",34.26,[20220724,2,1,1,0,0,1,0,1,4],[0.32,"-"],71.07],["GIN","Guinea",35.19,[20220725,1,1,1,3,0,0,0,1,2],[0.05,"+"],20.04],["IRQ","Iraq",35.19,[20220725,0,2,2,1,0,0,0,1,2],[5.96,"-"],17.71],["SOM","Somalia",35.19,[20220725,0,0,2,1,0,2,0,1,3],[0.04,"="],10.34],["ARE","United Arab Emirates",35.19,[20220718,1,1,2,0,0,0,0,2,3],[12.85,"-"],104.56],["AUT","Austria",35.19,[20220725,2,2,1,2,0,0,0,0,2],[110.12,"-"],74.26],["AZE","Azerbaijan",36.11,[20220701,0,0,2,2,1,0,0,1,0],[3.07,"+"],47.1],["RKS","Kosovo",37.04,[20220711,2,2,2,0,0,0,0,0,1],[72.82,"+"],46.25],["PRI","Puerto Rico",37.96,[20220717,1,1,2,0,0,0,0,3,2],[]],["EGY","Egypt",37.96,[20220724,1,1,2,3,0,0,0,0,3],[0.0,"="],35.06],["SLV","El Salvador",37.96,[20220725,1,1,2,1,1,0,0,0,3],[21.69,"="],68.59],["PHL","Philippines",37.96,[20220724,1,2,1,0,1,0,0,4,4],[3.01,"+"],63.08],["MRT","Mauritania",38.89,[20220725,1,2,1,3,0,0,0,1,2],[0.94,"-"],28.93],["USA","United States",38.89,[20220707,2,2,0,0,1,0,1,4,2],[39.99,"+"],67.24],["ARG","Argentina",39.81,[20220712,0,1,2,4,0,0,0,1,2],[13.19,"="],83.19],["NGA","Nigeria",39.81,[20220710,0,1,1,3,1,0,0,2,3],[0.09,"="],11.56],["JPN","Japan",39.81,[20220725,1,1,1,1,0,1,1,2,1],[154.08,"+"],82.25],["BRA","Brazil",39.81,[20220721,2,1,1,0,1,1,1,4,2],[15.81,"-"],79.4],["KEN","Kenya",39.81,[20220725,0,1,2,3,0,0,0,2,2],[0.1,"-"],17.6],["QAT","Qatar",40.74,[20220717,1,1,2,0,1,0,0,2,2],[32.07,"-"],102.04],["BHS","Bahamas",40.74,[20220725,1,1,1,3,1,0,0,1,4],[4.54,"-"],39.11],["MLI","Mali",40.74,[20220719,0,2,2,3,0,0,0,1,3],[0.01,"="],6.52],["SGP","Singapore",41.67,[20220723,1,1,1,2,0,1,0,3,2],[139.92,"-"],91.68],["IDN","Indonesia",41.67,[20220722,1,2,1,1,0,0,1,2,2],[1.99,"+"],62.06],["BLZ","Belize",42.59,[20220718,2,2,1,0,1,0,1,1,0],[17.6,"+"],54.49],["ZWE","Zimbabwe",42.59,[20220708,1,1,1,3,0,2,0,1,3],[0.15,"+"],29.0],["TUN","Tunisia",43.52,[20220725,0,2,2,4,0,0,0,1,3],[17.31,"="],52.01],["VIR","United States Virgin Islands",43.52,[20220718,0,1,1,3,0,1,0,4,2],[]],["ETH","Ethiopia",43.52,[20220718,1,1,1,3,1,0,0,2,3],[0.06,"-"],31.84],["GTM","Guatemala",43.98,[20220722,2,1,1,3,1,1,0,1,2],[21.64,"+"],36.55],["TON","Tonga",44.44,[20220705,0,1,0,0,0,2,2,4,4],[8.24,"+"],91.64],["SYC","Seychelles",45.37,[20220712,1,0,2,4,1,0,0,1,3],[23.24,"="],76.01],["LBN","Lebanon",46.3,[20220704,1,2,1,1,1,2,0,1,1],[34.56,"-"],42.64],["LBY","Libya",47.22,[20220716,1,2,2,4,0,0,0,1,3],[2.01,"="],18.05],["DZA","Algeria",47.22,[20220718,1,2,1,4,1,0,0,1,3],[0.19,"+"],15.51],["MYS","Malaysia",47.22,[20220725,1,1,1,1,1,1,1,2,2],[12.75,"+"],81.74],["BRB","Barbados",47.22,[20220717,1,1,1,2,1,1,1,1,2],[112.05,"-"],54.76],["LBR","Liberia",48.15,[20220718,1,3,2,0,0,0,0,4,4],[0.08,"+"],44.83],["SLE","Sierra Leone",48.15,[20220725,2,2,2,0,1,0,0,2,3],[0.01,"="],22.76],["DJI","Djibouti",49.07,[20220720,1,1,2,4,1,0,0,1,3],[0.0,"="],16.81],["PER","Peru",50.93,[20220725,1,3,2,0,1,0,1,1,3],[31.29,"-"],82.6],["ERI","Eritrea",50.93,[20220725,1,1,1,3,1,2,0,2,4],[0.39,"+"]],["NPL","Nepal",51.85,[20220725,2,1,2,1,1,1,1,1,4],[1.33,"+"],68.33],["GHA","Ghana",51.85,[20220718,0,2,2,4,0,0,0,4,1],[0.36,"="],24.0],["HKG","Hong Kong",52.78,[20220717,1,2,2,4,0,0,0,3,3],[59.45,"+"],86.79],["IRN","Iran",56.94,[20220705,3,2,2,4,0,0,2,1,2],[10.95,"="],66.03],["MAR","Morocco",58.33,[20220704,1,2,2,4,2,0,0,1,2],[1.5,"-"],63.25],["RWA","Rwanda",58.33,[20220711,0,3,2,4,2,0,0,1,1],[0.23,"-"],65.54],["CHL","Chile",58.8,[20220717,1,3,2,2,0,0,2,3,2],[40.96,"+"],90.42],["VUT","Vanuatu",59.72,[20220711,3,3,2,4,1,1,1,1,4],[0.05,"+"],40.93],["FJI","Fiji",60.19,[20220718,0,2,2,0,2,0,2,3,2],[5.71,"="],68.84],["MMR","Myanmar",62.96,[20220717,1,1,1,2,1,2,2,4,4],[0.04,"+"],51.2],["LAO","Laos",63.43,[20220723,2,2,1,4,1,2,2,1,3],[0.82,"+"],68.37],["ECU","Ecuador",65.74,[20220725,0,2,2,4,2,0,2,1,2],[12.03,"="],78.98],["MAC","Macao",73.15,[20220721,3,2,2,4,0,2,1,3,3],[],85.67],["UKR","Ukraine",75.0,[20220704,3,1,2,3,2,1,2,3,3],[0.89,"+"],34.81],["PAK","Pakistan",77.78,[20220711,3,2,2,1,2,1,2,3,4],[0.23,"-"],55.82],["CHN","China",79.17,[20220630,3,3,2,4,2,3,2,2,4],[0.05,"-"],88.71],["MDG","Madagascar",93.52,[20220714,3,3,2,3,2,2,2,4,4],[0.07,"="],4.46],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[147.39,"+"],45.26]];