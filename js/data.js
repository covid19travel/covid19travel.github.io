const dataUpdate="2022.08.09";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["PRI","Puerto Rico",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["ERI","Eritrea",0.0,[20200121,0,0,0,0,0,0,0,0,0],[0.28,"-"]],["VIR","United States Virgin Islands",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["GUM","Guam",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["HUN","Hungary",0.0,[20220715,0,0,0,0,0,0,0,0,2],[32.3,"="],63.86],["AND","Andorra",5.56,[20220719,0,0,0,0,0,0,0,0,0],[52.69,"="],67.64],["YEM","Yemen",5.56,[20220719,0,0,1,0,0,0,0,0,0],[0.01,"="],1.36],["DOM","Dominican Republic",5.56,[20220713,0,0,0,0,0,0,0,0,0],[3.97,"-"],54.15],["MUS","Mauritius",5.56,[20220716,0,0,0,0,0,0,0,0,2],[43.47,"="],75.27],["ZMB","Zambia",6.48,[20220719,0,1,0,0,0,0,0,1,3],[1.46,"="],26.49],["NAM","Namibia",8.33,[20220719,0,0,0,0,0,0,0,1,0],[0.0,"="],18.3],["TJK","Tajikistan",8.33,[20220716,0,0,0,0,0,0,0,1,0],[0.0,"="],51.64],["TZA","Tanzania",8.33,[20220719,0,0,0,0,0,0,0,1,0],[0.08,"="],18.93],["BFA","Burkina Faso",8.33,[20220719,0,0,0,0,0,0,0,1,3],[0.0,"="],7.42],["NER","Niger",10.8,[20220719,0,0,0,0,0,0,0,1,2],[0.01,"="],11.44],["KAZ","Kazakhstan",11.11,[20220719,0,0,0,0,0,0,0,0,1],[11.99,"-"],54.87],["ISL","Iceland",11.11,[20220719,0,0,0,0,0,0,0,0,0],[28.22,"="],78.36],["CRI","Costa Rica",11.11,[20220719,0,0,0,0,0,0,0,0,1],[44.9,"="],81.17],["IRL","Ireland",11.11,[20220719,0,0,0,0,0,0,0,0,1],[9.95,"="],81.16],["GRL","Greenland",11.11,[20220719,0,0,0,0,0,0,0,0,0],[0.0,"="],68.46],["SAU","Saudi Arabia",11.11,[20220719,0,0,0,0,0,0,0,0,2],[0.52,"-"],69.77],["JAM","Jamaica",11.11,[20220719,0,0,0,0,0,0,0,0,1],[4.09,"+"],25.49],["SWE","Sweden",11.11,[20220719,0,0,0,0,0,0,0,0,0],[8.42,"="],73.11],["DNK","Denmark",11.11,[20220719,0,0,0,0,0,0,0,0,0],[25.51,"-"],81.79],["SVK","Slovak Republic",11.11,[20220719,0,0,0,0,0,0,0,0,2],[-1.5,"-"],50.73],["EST","Estonia",11.11,[20220719,0,0,0,0,0,0,0,0,1],[53.61,"="],63.5],["GEO","Georgia",11.11,[20220719,0,0,0,0,0,0,0,0,2],[42.26,"="],33.89],["SRB","Serbia",11.11,[20220719,0,0,0,0,0,0,0,0,2],[68.53,"+"],47.71],["GBR","United Kingdom",11.11,[20220719,0,0,0,0,0,0,0,0,1],[13.87,"-"],75.03],["ROU","Romania",11.11,[20220719,0,0,0,0,0,0,0,0,1],[38.49,"-"],41.98],["TTO","Trinidad and Tobago",11.11,[20220719,0,0,0,0,0,0,0,0,1],[16.52,"+"],46.91],["GAB","Gabon",11.11,[20220719,0,0,0,0,0,0,0,0,2],[0.0,"="],10.97],["FRO","Faeroe Islands",11.11,[20220719,0,0,0,0,0,0,0,0,0],[0.0,"="],77.32],["AFG","Afghanistan",11.11,[20220719,0,2,1,0,1,0,0,0,3],[0.64,"+"],16.39],["ZAF","South Africa",11.11,[20220719,0,0,0,0,0,0,0,0,0],[0.0,"="],32.39],["ALB","Albania",11.11,[20220709,0,0,0,0,0,0,0,0,2],[26.34,"-"],43.93],["AUS","Australia",11.11,[20220719,0,0,0,0,0,0,0,0,2],[118.44,"-"],83.86],["MDA","Moldova",11.11,[20220704,0,0,0,0,0,0,0,0,1],[33.74,"="],34.74],["MNG","Mongolia",11.11,[20220704,0,0,0,0,0,0,0,0,2],[76.18,"+"],64.99],["BEN","Benin",11.11,[20220715,0,0,0,0,0,0,0,0,2],[0.0,"="],20.7],["CHE","Switzerland",11.11,[20220719,0,0,0,0,0,0,0,0,0],[38.56,"="],69.11],["BGR","Bulgaria",11.11,[20220719,0,0,0,0,0,0,0,0,0],[20.78,"-"],30.0],["BHR","Bahrain",11.11,[20220719,0,0,0,0,0,0,0,0,2],[26.07,"-"],83.69],["UZB","Uzbekistan",11.11,[20220719,0,0,0,0,0,0,0,0,1],[0.1,"="],46.34],["LTU","Lithuania",11.11,[20220719,0,0,0,0,0,0,0,0,1],[44.4,"-"],67.37],["LIE","Liechtenstein",11.11,[20220706,0,0,0,0,0,0,0,0,1],[42.71,"-"],67.72],["NOR","Norway",11.11,[20220717,0,0,0,0,0,0,0,0,1],[3.03,"-"],74.96],["KWT","Kuwait",11.11,[20220719,0,0,0,0,0,0,0,0,1],[7.11,"="],78.34],["KIR","Kiribati",11.11,[20220719,0,0,0,0,0,0,0,0,4],[0.0,"="],48.09],["LVA","Latvia",11.11,[20220719,0,0,0,0,0,0,0,0,2],[73.93,"+"],69.69],["OMN","Oman",12.32,[20220719,0,0,0,0,0,0,0,0,0],[2.76,"="],67.28],["NIC","Nicaragua",13.89,[20220719,0,0,0,0,0,0,0,1,0],[0.0,"="],82.18],["PRY","Paraguay",13.89,[20220719,0,0,0,0,0,0,0,1,1],[7.57,"="],52.09],["SDN","Sudan",13.89,[20220719,0,0,0,0,0,0,0,1,0],[0.04,"+"],9.94],["GMB","Gambia",13.89,[20220711,0,0,0,0,0,0,0,1,3],[0.7,"+"],13.42],["PRT","Portugal",13.89,[20220719,0,0,0,0,0,0,0,1,2],[20.29,"-"],86.48],["SMR","San Marino",13.89,[20220719,0,0,0,0,0,0,0,1,1],[64.0,"-"],70.03],["MDG","Madagascar",13.89,[20220719,0,0,0,0,0,0,0,1,3],[0.03,"="],4.49],["SOM","Somalia",13.89,[20220719,0,0,0,0,0,0,0,1,3],[0.0,"-"],11.96],["KOR","South Korea",13.89,[20220703,0,0,0,0,0,0,0,1,3],[212.27,"+"],86.16],["MLT","Malta",13.89,[20220719,0,0,0,0,0,0,0,1,2],[13.23,"-"],89.3],["URY","Uruguay",13.89,[20220719,0,0,0,0,0,0,0,1,1],[0.0,"-"],84.36],["TUR","Turkey",13.89,[20220719,0,0,0,0,0,0,0,1,2],[68.82,"="],62.67],["CUB","Cuba",13.89,[20220719,0,0,0,0,-1,0,0,1,2],[0.88,"-"],88.66],["BWA","Botswana",13.89,[20220719,0,0,0,0,0,0,0,1,3],[1.54,"="],58.44],["BDI","Burundi",13.89,[20220719,0,0,0,0,0,0,0,1,2],[2.33,"+"],0.13],["TCD","Chad",13.89,[20220719,0,0,0,0,0,0,0,1,3],[0.0,"="],12.19],["CAF","Central African Republic",13.89,[20220719,0,0,0,0,0,0,0,1,3],[0.05,"="],22.82],["SUR","Suriname",13.89,[20220719,0,0,0,0,0,0,0,1,0],[0.39,"="],38.81],["VEN","Venezuela",13.89,[20220719,0,0,0,0,0,0,0,1,4],[1.28,"-"],50.66],["BRN","Brunei",14.01,[20220719,0,0,0,0,0,0,0,1,2],[171.99,"="],97.9],["DEU","Germany",14.81,[20220718,0,0,0,0,0,1,0,0,2],[59.7,"-"],76.01],["POL","Poland",14.81,[20220719,1,0,0,0,0,0,0,0,2],[9.28,"-"],58.82],["ISR","Israel",14.81,[20220719,1,0,0,0,0,0,0,0,2],[29.28,"-"],66.19],["SVN","Slovenia",14.81,[20220719,0,0,0,0,0,1,0,0,2],[71.76,"-"],57.67],["JOR","Jordan",14.81,[20220719,0,1,0,0,0,0,0,0,0],[7.68,"+"],40.82],["HRV","Croatia",14.81,[20220719,0,1,0,0,0,0,0,0,2],[22.88,"+"],55.33],["CYP","Cyprus",14.81,[20220711,0,1,0,0,0,0,0,0,2],[64.75,"="],72.03],["GRC","Greece",14.81,[20220719,1,0,0,0,0,0,0,0,2],[171.59,"="],73.08],["CZE","Czech Republic",14.81,[20220719,0,1,0,0,0,0,0,0,1],[18.83,"-"],65.5],["MCO","Monaco",14.81,[20220707,0,1,0,0,0,0,0,-1,2],[25.12,"-"],69.96],["BLR","Belarus",14.83,[20220719,0,0,0,0,0,0,0,1,0],[0.0,"="],66.12],["NZL","New Zealand",14.98,[20220719,0,0,0,0,0,0,0,1,2],[110.47,"-"],80.48],["TLS","Timor-Leste",15.15,[20220719,0,0,0,0,0,0,0,1,3],[0.47,"+"],55.47],["LUX","Luxembourg",15.43,[20220719,0,0,0,0,0,0,0,1,0],[61.14,"="],72.35],["NLD","Netherlands",15.6,[20220717,0,0,0,0,0,0,0,1,0],[13.46,"-"],69.2],["CIV","Cote d'Ivoire",15.74,[20220713,0,1,0,0,0,0,0,1,3],[0.22,"="],24.78],["UGA","Uganda",15.96,[20220719,0,0,0,0,0,0,0,1,3],[0.05,"="],26.78],["BMU","Bermuda",16.03,[20220711,0,0,0,0,0,0,0,1,2],[37.39,"="],74.25],["SSD","South Sudan",16.35,[20220719,0,0,0,0,0,0,0,1,2],[0.06,"="],12.74],["CAN","Canada",16.65,[20220719,0,0,0,0,0,0,0,1,2],[9.41,"-"],82.57],["PSE","Palestine",16.67,[20220616,0,0,0,0,0,0,0,2,4],[],34.55],["KHM","Cambodia",17.59,[20220719,1,0,0,0,0,0,0,1,2],[0.19,"-"],86.97],["FRA","France",18.78,[20220719,0,1,0,0,0,0,0,1,2],[47.07,"-"],78.62],["ITA","Italy",19.22,[20220719,1,1,0,0,0,0,0,0,2],[62.82,"-"],80.95],["CPV","Cape Verde",19.44,[20220706,0,0,0,0,0,0,1,1,2],[1.31,"+"],52.35],["PAN","Panama",20.72,[20220719,1,0,0,0,0,0,0,1,2],[19.64,"+"],71.98],["BEL","Belgium",20.96,[20220719,0,1,0,0,0,0,0,2,2],[24.18,"-"],78.85],["COL","Colombia",21.09,[20220719,1,0,0,0,0,1,0,1,2],[3.71,"="],70.65],["BTN","Bhutan",22.22,[20220719,0,0,1,0,0,0,0,2,4],[2.46,"-"],86.62],["BOL","Bolivia",23.15,[20220719,2,1,0,0,0,0,0,1,3],[36.52,"+"],50.34],["USA","United States",23.4,[20220719,1,0,0,0,1,0,0,1,2],[31.88,"-"],67.18],["ESP","Spain",23.61,[20220719,0,0,1,3,0,0,0,1,2],[12.1,"="],85.53],["THA","Thailand",24.07,[20220719,1,1,0,1,0,0,0,1,1],[2.73,"-"],74.36],["GUY","Guyana",24.86,[20220719,1,1,0,0,0,0,0,1,1],[5.9,"-"],57.37],["ECU","Ecuador",24.87,[20220719,0,0,0,0,0,0,0,1,2],[11.25,"="],79.02],["MEX","Mexico",25.0,[20220711,3,1,0,0,0,0,0,1,2],[10.95,"-"],63.1],["RKS","Kosovo",25.05,[20220719,2,2,2,0,0,0,0,0,1],[55.25,"-"],46.25],["RUS","Russia",25.46,[20220719,0,1,2,1,0,0,0,1,2],[11.4,"+"],51.85],["COD","Democratic Republic of Congo",25.86,[20220719,0,1,1,0,0,0,0,1,3],[0.05,"+"],2.36],["VNM","Vietnam",25.93,[20220719,0,1,1,2,0,0,0,0,3],[83.39,"+"],83.15],["ABW","Aruba",25.93,[20220719,0,1,1,2,0,0,0,0,2],[43.62,"+"],78.17],["BIH","Bosnia and Herzegovina",25.93,[20220719,1,0,1,2,0,0,0,0,2],[14.21,"+"],25.87],["AGO","Angola",26.08,[20220719,0,2,1,0,0,0,0,1,2],[0.15,"="],21.68],["TWN","Taiwan",26.85,[20220719,1,1,0,0,0,0,0,3,2],[89.68,"-"],83.63],["FIN","Finland",26.85,[20220719,1,1,0,0,1,0,0,1,1],[121.65,"="],78.37],["RWA","Rwanda",27.55,[20220719,0,0,0,0,0,0,0,1,1],[0.09,"+"],77.36],["CMR","Cameroon",27.78,[20220719,0,0,1,3,0,0,0,1,3],[0.0,"="],4.51],["ARG","Argentina",28.27,[20220719,0,1,1,1,0,0,0,1,1],[13.35,"="],83.25],["MOZ","Mozambique",28.7,[20220719,0,1,1,2,0,0,0,1,2],[0.07,"-"],43.95],["CHL","Chile",28.87,[20220719,1,1,0,2,0,0,0,1,2],[49.63,"+"],90.47],["LSO","Lesotho",28.89,[20220719,0,2,2,2,0,0,0,1,4],[1.11,"+"],38.25],["GRD","Grenada",29.37,[20220328,1,0,0,3,0,0,0,1,3],[7.49,"="],31.05],["ARE","United Arab Emirates",29.38,[20220718,1,1,1,0,0,0,0,2,3],[10.09,"-"],104.56],["SYR","Syria",29.63,[20220719,1,1,1,1,0,0,0,1,2],[0.17,"+"],8.98],["HND","Honduras",30.34,[20220719,0,2,1,0,0,0,0,1,2],[7.75,"="],53.45],["COG","Congo",30.34,[20220719,0,2,1,2,0,0,0,1,3],[0.0,"="],11.21],["PHL","Philippines",30.4,[20220719,1,1,1,0,1,0,0,1,4],[3.65,"+"],63.27],["IDN","Indonesia",30.49,[20220719,1,1,1,1,0,0,0,1,2],[2.02,"+"],62.15],["SLB","Solomon Islands",30.98,[20220719,1,1,1,0,0,0,1,1,2],[0.0,"="],27.13],["SGP","Singapore",31.49,[20220719,1,1,1,0,0,1,0,1,2],[108.3,"-"],91.69],["NPL","Nepal",31.72,[20220719,2,0,0,1,0,0,0,1,4],[1.67,"-"],68.52],["DMA","Dominica",32.41,[20220719,1,1,1,2,0,0,0,1,3],[0.0,"="],42.21],["SEN","Senegal",32.41,[20220719,1,1,1,0,1,0,0,1,3],[0.19,"-"],6.35],["QAT","Qatar",32.54,[20220719,1,1,1,0,1,0,0,1,3],[27.31,"-"],102.04],["SWZ","Eswatini",32.66,[20220719,0,1,1,4,0,0,0,1,1],[0.31,"="],28.69],["LBY","Libya",32.85,[20220719,1,2,2,0,0,0,0,1,3],[4.35,"+"],18.08],["BRA","Brazil",33.22,[20220719,2,1,1,0,1,1,1,1,2],[12.09,"-"],79.4],["KGZ","Kyrgyz Republic",33.33,[20220719,0,0,2,4,0,0,0,0,2],[4.35,"+"],20.3],["LKA","Sri Lanka",33.33,[20220719,0,1,1,0,1,1,0,1,3],[0.73,"+"],66.85],["TGO","Togo",33.76,[20220719,0,1,1,3,0,2,0,1,3],[0.19,"="],18.02],["PNG","Papua New Guinea",34.03,[20220719,0,1,1,3,0,0,0,1,2],[0.03,"="],2.83],["SLV","El Salvador",34.16,[20220719,1,1,1,1,1,0,0,0,3],[0.0,"="],68.59],["BGD","Bangladesh",34.26,[20220719,2,1,1,0,0,1,0,1,4],[0.18,"="],71.27],["HTI","Haiti",34.26,[20220620,0,1,1,4,0,0,0,1,2],[0.24,"-"],1.42],["FJI","Fiji",34.73,[20220719,0,1,0,0,1,0,0,1,2],[3.12,"-"],68.87],["AUT","Austria",35.19,[20220719,2,2,1,2,0,0,0,0,2],[102.85,"+"],76.44],["GIN","Guinea",35.19,[20220719,1,1,1,3,0,0,0,1,2],[0.02,"+"],20.04],["AZE","Azerbaijan",36.11,[20220719,0,0,2,2,1,0,0,1,0],[4.4,"+"],47.11],["IND","India",37.04,[20220719,0,1,1,0,0,2,2,1,3],[1.29,"+"],66.5],["JPN","Japan",37.53,[20220719,1,1,1,1,0,1,1,1,1],[169.94,"-"],82.29],["EGY","Egypt",37.96,[20220719,1,1,2,3,0,0,0,0,3],[0.0,"="],35.33],["KEN","Kenya",38.34,[20220719,0,1,2,3,0,0,0,1,2],[0.06,"="],17.6],["BLZ","Belize",38.57,[20220719,1,1,1,0,1,0,1,1,2],[14.77,"+"],54.64],["LBR","Liberia",38.6,[20220719,1,3,2,0,0,0,0,1,4],[0.03,"="],44.83],["NGA","Nigeria",39.49,[20220719,0,1,1,3,1,0,0,1,3],[0.06,"="],11.56],["PER","Peru",40.24,[20220719,1,1,1,0,1,0,1,1,3],[22.7,"-"],82.88],["MRT","Mauritania",40.6,[20220719,1,2,1,4,0,0,0,1,2],[0.27,"+"],30.56],["PAK","Pakistan",40.66,[20220719,0,0,0,0,0,0,0,1,4],[0.3,"-"],56.15],["BHS","Bahamas",40.74,[20220719,1,1,1,3,1,0,0,1,4],[4.36,"+"],39.82],["MLI","Mali",40.74,[20220719,0,2,2,3,0,0,0,1,3],[0.01,"="],6.59],["MWI","Malawi",40.74,[20220719,1,1,1,3,1,0,0,1,3],[0.15,"-"],7.63],["IRQ","Iraq",41.42,[20220719,0,2,2,1,0,0,0,1,2],[1.88,"-"],17.74],["LBN","Lebanon",41.58,[20220719,1,2,1,1,1,2,0,1,1],[27.11,"-"],42.66],["TUN","Tunisia",41.59,[20220719,0,1,2,4,0,0,0,1,3],[7.21,"="],52.02],["ETH","Ethiopia",42.63,[20220719,1,1,1,3,1,0,0,1,3],[0.03,"="],31.84],["GHA","Ghana",42.96,[20220718,0,2,2,4,0,0,0,1,1],[0.1,"-"],24.15],["SLE","Sierra Leone",43.3,[20220719,2,2,2,0,1,0,0,1,3],[0.01,"="],22.78],["GTM","Guatemala",43.98,[20220719,2,1,1,3,1,1,0,1,2],[12.04,"+"],37.3],["MYS","Malaysia",44.95,[20220719,1,1,1,1,1,1,1,1,2],[12.42,"-"],81.81],["DZA","Algeria",45.21,[20220719,1,2,1,4,1,0,0,1,3],[0.26,"="],15.51],["SYC","Seychelles",45.37,[20220712,1,0,2,4,1,0,0,1,3],[38.2,"+"],76.07],["BRB","Barbados",47.22,[20220719,1,1,1,2,1,1,1,1,2],[132.33,"-"],54.8],["DJI","Djibouti",49.07,[20220719,1,1,2,4,1,0,0,1,3],[0.0,"="],17.25],["HKG","Hong Kong",52.72,[20220719,1,1,2,4,1,0,0,2,2],[59.14,"-"],87.11],["LAO","Laos",53.3,[20220719,2,1,1,4,1,2,0,1,3],[1.12,"-"],70.3],["ZWE","Zimbabwe",53.7,[20220719,1,1,1,3,1,2,1,1,3],[0.1,"+"],29.34],["IRN","Iran",53.94,[20220719,1,2,2,4,0,0,2,1,2],[7.33,"-"],66.03],["MAR","Morocco",58.33,[20220704,1,2,2,4,2,0,0,1,2],[0.61,"-"],63.29],["MMR","Myanmar",58.7,[20220719,1,1,1,2,1,2,2,1,4],[0.03,"="],51.2],["VUT","Vanuatu",59.72,[20220719,3,3,2,4,1,1,1,1,4],[0.33,"="],40.93],["UKR","Ukraine",61.46,[20220704,3,1,2,3,2,1,2,3,3],[1.43,"+"],34.81],["TON","Tonga",61.57,[20220719,1,2,1,3,0,2,2,4,4],[38.12,"="],91.64],["TKM","Turkmenistan",62.04,[20210426,1,3,2,1,0,0,2,4,3],[],46.04],["MAC","Macao",73.15,[20220719,3,2,2,4,0,2,1,3,3],[],85.92],["CHN","China",73.61,[20220719,3,3,2,4,2,3,1,2,4],[0.04,"="],88.71],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[129.26,"-"],45.3]];