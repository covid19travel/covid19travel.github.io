const dataUpdate="2022.03.24";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["MNG","Mongolia",2.78,[20220314,0,0,0,0,0,0,0,1,2],[5.58,"-"],65.31],["IRL","Ireland",5.56,[20220319,0,0,0,0,0,0,0,0,1],[114.17,"+"],80.31],["DOM","Dominican Republic",8.33,[20220323,0,0,0,0,0,0,0,1,1],[0.75,"-"],53.94],["NIC","Nicaragua",8.33,[20220228,0,0,0,0,0,0,0,1,1],[0.16,"="],61.37],["ISL","Iceland",11.11,[20220313,0,0,0,0,0,0,0,0,0],[368.4,"-"],78.65],["DNK","Denmark",13.89,[20220318,0,0,0,0,0,0,0,1,0],[112.94,"-"],81.48],["GMB","Gambia",13.89,[20220322,0,0,0,0,0,0,0,1,3],[0.03,"="],12.79],["BWA","Botswana",13.89,[20220322,0,0,0,0,0,0,0,1,3],[0.0,"="],52.69],["TZA","Tanzania",13.89,[20220314,0,0,0,0,0,0,0,1,1],[0.01,"-"],4.52],["SDN","Sudan",13.89,[20220318,0,0,0,0,0,0,0,1,0],[0.05,"+"],6.12],["FRO","Faeroe Islands",13.89,[20220301,0,0,0,0,0,0,0,1,0],[0.0,"="],83.37],["BFA","Burkina Faso",13.89,[20220227,0,0,0,0,0,0,0,1,2],[0.04,"="],5.47],["ROU","Romania",13.89,[20220315,0,0,0,0,0,0,0,1,3],[18.63,"+"],42.25],["CZE","Czech Republic",13.89,[20220323,0,0,0,0,0,0,0,1,1],[71.47,"-"],63.93],["NOR","Norway",13.89,[20220313,0,0,0,0,0,0,0,1,1],[57.63,"-"],73.66],["TJK","Tajikistan",14.81,[20220224,1,0,0,0,0,0,0,2,3],[0.0,"="],45.94],["PSE","Palestine",16.67,[20220307,0,0,0,0,0,0,0,2,4],[],33.45],["KHM","Cambodia",16.67,[20220221,0,0,0,0,0,0,0,2,3],[0.62,"-"],82.03],["NER","Niger",16.67,[20220321,0,0,0,0,0,0,0,2,3],[0.01,"="],6.13],["AND","Andorra",16.67,[20220321,0,0,0,0,0,0,0,2,2],[169.92,"+"],68.91],["GBR","United Kingdom",17.59,[20220314,1,1,0,0,0,0,0,1,3],[128.2,"+"],72.33],["PRT","Portugal",17.59,[20220321,1,0,0,0,0,0,0,1,2],[64.05,"="],92.6],["ISR","Israel",17.59,[20220321,1,0,0,0,0,0,0,1,2],[127.55,"+"],65.94],["TUN","Tunisia",17.59,[20220321,0,1,0,0,0,0,0,1,3],[4.8,"="],53.13],["LTU","Lithuania",17.59,[20220314,0,1,0,0,0,0,0,1,3],[176.54,"+"],69.6],["CAF","Central African Republic",18.52,[20220314,0,0,0,2,0,2,0,2,-1],[0.0,"="],16.76],["FRA","France",19.44,[20220321,0,0,0,0,0,0,0,3,2],[161.8,"+"],77.74],["SWE","Sweden",19.44,[20220319,0,0,0,0,0,0,0,3,0],[5.12,"-"],74.92],["AFG","Afghanistan",19.44,[20220307,0,2,1,0,1,0,0,2,3],[0.21,"-"],11.05],["URY","Uruguay",20.37,[20220307,0,1,0,0,0,0,0,2,2],[43.86,"+"],81.34],["JOR","Jordan",20.37,[20220321,0,1,0,2,0,0,0,0,2],[12.79,"="],42.96],["GUY","Guyana",20.37,[20220317,1,0,0,0,0,0,0,4,1],[0.71,"-"],45.6],["YEM","Yemen",20.37,[20220321,1,0,0,0,0,0,0,4,1],[0.0,"="],1.33],["SVK","Slovak Republic",20.37,[20220321,1,0,0,0,0,0,0,2,3],[183.33,"-"],50.68],["SEN","Senegal",21.3,[20220321,1,1,0,0,0,0,0,1,3],[0.02,"="],6.04],["CIV","Cote d'Ivoire",21.3,[20220321,1,1,0,0,0,0,0,1,1],[0.03,"="],15.6],["OMN","Oman",21.3,[20220314,0,2,0,0,0,0,0,1,3],[2.29,"-"],57.63],["SVN","Slovenia",22.22,[20220313,0,2,0,0,0,1,0,0,2],[140.19,"+"],58.69],["PAN","Panama",22.22,[20220320,0,0,0,2,0,0,0,2,4],[6.59,"+"],68.73],["CMR","Cameroon",22.22,[20220321,0,0,1,3,0,0,0,1,3],[0.07,"-"],2.99],["CHE","Switzerland",23.15,[20220318,0,1,0,0,0,0,0,3,2],[285.35,"-"],68.78],["BLR","Belarus",23.15,[20220314,0,1,0,0,0,0,0,3,1],[13.63,"-"],54.08],["BEL","Belgium",23.15,[20220318,0,1,0,0,0,0,0,3,2],[91.2,"-"],78.41],["POL","Poland",24.07,[20220318,1,1,0,0,0,0,0,2,2],[24.44,"-"],59.07],["LUX","Luxembourg",25.0,[20220321,0,0,0,0,1,0,0,3,2],[172.64,"-"],71.85],["GRL","Greenland",25.0,[20220314,1,1,0,0,0,1,0,1,1],[12.83,"-"],67.7],["BDI","Burundi",25.0,[20220307,0,0,0,0,0,0,2,1,2],[0.13,"+"],0.08],["TUR","Turkey",25.0,[20220321,2,0,0,0,1,0,0,1,2],[20.4,"-"],62.26],["PRY","Paraguay",26.85,[20220319,1,1,0,0,0,0,0,3,2],[2.09,"-"],45.66],["FIN","Finland",26.85,[20220318,1,1,0,0,1,0,0,2,1],[110.66,"-"],77.55],["TWN","Taiwan",27.78,[20220322,1,2,0,0,0,0,0,2,3],[0.42,"+"],76.36],["ZMB","Zambia",27.78,[20220314,0,0,1,3,0,0,0,1,3],[0.54,"-"],11.32],["VEN","Venezuela",28.7,[20220307,1,0,0,0,1,0,0,3,3],[0.37,"-"],49.77],["NAM","Namibia",28.7,[20220321,0,1,1,2,0,0,0,1,2],[0.46,"-"],14.62],["ABW","Aruba",28.7,[20220314,0,0,1,2,0,1,0,1,2],[3.48,"-"],75.58],["LBR","Liberia",29.63,[20220314,1,1,1,0,0,0,0,2,4],[0.0,"="],20.94],["CUB","Cuba",29.63,[20220323,1,1,0,0,0,0,0,4,2],[6.52,"+"],87.5],["LVA","Latvia",30.09,[20220321,1,2,0,3,0,0,0,1,3],[189.42,"-"],69.73],["CHL","Chile",30.09,[20220313,1,1,1,2,0,0,1,2,3],[59.32,"-"],90.19],["LIE","Liechtenstein",31.48,[20220319,0,1,1,1,0,0,0,3,2],[377.3,"-"],68.98],["BGD","Bangladesh",31.48,[20220312,2,1,0,0,0,1,0,2,4],[0.07,"-"],56.53],["ARG","Argentina",31.48,[20220321,0,1,1,1,0,0,1,2,3],[10.69,"-"],80.8],["MCO","Monaco",31.48,[20220314,0,1,0,4,0,0,0,2,2],[147.44,"+"],64.95],["SLV","El Salvador",32.41,[20220309,2,0,2,1,0,0,0,0,4],[10.33,"="],65.65],["KEN","Kenya",32.41,[20220307,0,2,1,2,0,0,0,1,4],[0.03,"="],14.71],["TCD","Chad",32.41,[20220321,1,1,1,2,0,0,0,1,3],[0.02,"="],0.9],["LKA","Sri Lanka",33.33,[20220307,1,1,0,0,0,1,1,2,3],[2.01,"-"],66.93],["HND","Honduras",34.26,[20220305,0,2,1,0,0,2,0,1,3],[1.86,"+"],46.25],["NLD","Netherlands",34.26,[20220313,0,0,1,0,0,1,1,3,2],[250.14,"-"],71.99],["MEX","Mexico",35.19,[20220320,1,1,1,0,1,1,2,1,2],[2.46,"-"],61.07],["HRV","Croatia",35.19,[20220321,1,1,1,2,0,0,0,2,2],[35.74,"-"],54.8],["LBN","Lebanon",35.19,[20220214,0,1,1,1,1,1,0,1,4],[6.36,"-"],32.42],["ARE","United Arab Emirates",35.19,[20220321,1,1,2,1,0,0,0,1,2],[3.49,"+"],95.92],["SYR","Syria",35.65,[20220321,0,1,1,3,1,1,1,1,3],[0.11,"-"],7.2],["KGZ","Kyrgyz Republic",36.11,[20220318,0,0,2,4,0,0,0,1,2],[0.16,"+"],18.53],["TLS","Timor-Leste",36.11,[20220311,0,0,1,0,1,0,1,3,3],[0.31,"+"],42.96],["VIR","United States Virgin Islands",36.11,[20220314,1,1,1,3,0,1,0,0,2],[]],["SRB","Serbia",36.11,[20220307,1,1,1,2,0,1,0,1,3],[23.58,"-"],47.58],["BIH","Bosnia and Herzegovina",36.11,[20220321,1,1,1,2,0,1,0,1,3],[3.93,"-"],25.93],["NGA","Nigeria",36.11,[20220314,0,0,1,3,1,0,0,2,3],[0.02,"+"],4.26],["SSD","South Sudan",36.11,[20220228,1,0,1,0,0,2,1,1,3],[0.1,"="],3.8],["CYP","Cyprus",36.11,[20220313,1,1,1,2,0,1,0,1,3],[333.99,"+"],72.02],["MDG","Madagascar",37.5,[20220318,0,0,2,3,0,2,0,2,3],[0.03,"="],3.62],["MOZ","Mozambique",37.96,[20220320,0,2,1,3,0,0,0,2,2],[0.01,"="],39.88],["EST","Estonia",37.96,[20220321,1,1,1,1,0,0,2,2,3],[107.27,"-"],63.56],["LSO","Lesotho",37.96,[20220314,0,2,2,2,0,0,0,1,4],[0.7,"="],33.7],["ZAF","South Africa",37.96,[20220315,0,2,1,2,1,0,0,1,3],[1.66,"-"],29.47],["HTI","Haiti",37.96,[20220227,0,1,1,4,0,1,0,1,3],[0.04,"-"],0.94],["BHR","Bahrain",38.89,[20220318,1,1,1,2,0,1,0,2,2],[56.81,"-"],69.51],["COD","Democratic Republic of Congo",39.81,[20220320,0,1,1,0,0,2,2,1,4],[0.03,"+"],0.48],["MDA","Moldova",39.81,[20220228,0,1,2,4,0,0,0,1,2],[8.19,"-"],26.16],["RUS","Russia",40.28,[20220307,0,2,1,2,0,2,1,3,3],[20.72,"-"],49.72],["MLI","Mali",40.74,[20220322,0,2,2,3,0,0,0,1,3],[0.02,"="],4.49],["RWA","Rwanda",40.74,[20220313,1,1,1,1,2,0,0,1,3],[0.09,"+"],58.81],["KOR","South Korea",40.74,[20220320,0,2,1,4,0,0,0,2,3],[716.73,"-"],86.67],["ETH","Ethiopia",40.74,[20220314,1,1,1,3,1,0,0,1,3],[0.02,"-"],17.73],["SOM","Somalia",40.74,[20220314,0,1,1,3,0,1,1,1,3],[0.0,"="],7.66],["MWI","Malawi",41.67,[20220321,0,1,1,2,1,2,0,1,3],[0.04,"="],4.39],["BRB","Barbados",42.59,[20220304,2,2,2,3,0,0,0,1,3],[33.31,"-"],52.39],["UGA","Uganda",43.52,[20220307,1,1,1,2,1,0,1,1,4],[0.05,"="],17.01],["EGY","Egypt",43.52,[20220228,1,1,2,4,0,0,0,1,4],[0.77,"="],29.98],["MRT","Mauritania",43.52,[20220321,1,1,2,4,0,0,0,1,3],[0.02,"="],22.08],["AUT","Austria",43.52,[20220321,2,2,1,3,0,0,0,2,2],[478.44,"-"],72.85],["GHA","Ghana",43.52,[20220321,0,2,2,4,0,0,0,1,4],[0.05,"="],15.34],["GEO","Georgia",43.52,[20220319,1,1,2,4,0,0,0,1,4],[19.06,"-"],31.54],["ESP","Spain",43.98,[20220315,1,2,2,3,0,0,0,3,2],[36.28,"="],85.52],["BGR","Bulgaria",44.44,[20220321,1,2,2,3,0,0,0,1,2],[20.9,"-"],29.7],["QAT","Qatar",44.44,[20220315,1,1,1,0,1,1,1,2,2],[4.63,"+"],88.4],["RKS","Kosovo",44.44,[20220314,2,1,1,4,0,0,0,2,3],[2.11,"-"],45.99],["BMU","Bermuda",44.44,[20220219,1,1,1,3,0,1,0,3,3],[55.51,"="],74.79],["TGO","Togo",45.37,[20220314,1,2,2,3,0,2,0,2,4],[0.06,"="],13.63],["UZB","Uzbekistan",45.37,[20220301,1,0,2,3,0,0,1,3,3],[0.08,"-"],39.97],["PRI","Puerto Rico",46.3,[20220305,1,1,1,1,0,0,2,3,3],[]],["MUS","Mauritius",46.3,[20220314,0,2,2,4,0,0,0,2,3],[125.76,"="],75.66],["ALB","Albania",46.3,[20220314,1,1,1,3,0,0,2,1,2],[1.79,"-"],42.11],["NPL","Nepal",46.3,[20220321,0,1,2,1,1,1,1,1,4],[0.09,"="],63.41],["JPN","Japan",47.22,[20220322,1,1,1,1,0,1,1,4,1],[31.11,"-"],79.76],["NZL","New Zealand",47.22,[20220321,1,2,2,3,0,0,0,2,3],[353.32,"-"],78.53],["SLE","Sierra Leone",48.15,[20220321,2,2,2,0,1,0,0,2,3],[0.01,"="],13.68],["COG","Congo",48.15,[20220307,0,1,1,3,0,2,2,2,3],[0.03,"="],11.31],["THA","Thailand",48.61,[20220314,0,2,2,3,0,1,1,2,1],[30.26,"-"],71.56],["PNG","Papua New Guinea",48.61,[20220312,0,1,2,3,0,1,1,4,4],[0.0,"="],2.75],["SUR","Suriname",50.0,[20220311,1,2,2,3,0,0,0,3,4],[5.84,"+"],40.02],["CRI","Costa Rica",50.0,[20220222,0,2,2,2,0,1,1,2,3],[15.76,"-"],76.62],["BOL","Bolivia",50.0,[20220307,2,1,2,0,1,1,1,2,4],[2.2,"-"],48.58],["LBY","Libya",50.0,[20220307,1,2,2,4,0,0,0,2,3],[1.39,"-"],16.12],["GAB","Gabon",50.93,[20220307,0,2,1,3,0,1,2,2,3],[0.07,"="],10.78],["HUN","Hungary",51.85,[20220228,0,2,2,2,2,0,0,2,3],[22.19,"-"],64.19],["DMA","Dominica",51.85,[20220314,1,1,2,4,1,0,0,2,3],[26.59,"-"],41.48],["GUM","Guam",52.78,[20220313,1,2,2,3,0,0,0,4,3],[]],["SMR","San Marino",52.78,[20220307,1,1,1,4,1,1,1,1,1],[103.15,"="],69.26],["MLT","Malta",52.78,[20220321,1,2,2,4,0,0,0,3,3],[66.42,"+"],90.25],["MAC","Macao",52.78,[20220312,1,2,1,4,0,0,1,3,2],[],76.65],["ZWE","Zimbabwe",53.7,[20220321,0,2,1,3,0,2,2,1,3],[1.26,"-"],22.9],["MYS","Malaysia",54.17,[20220320,2,2,2,4,0,0,2,2,3],[68.19,"-"],78.69],["AUS","Australia",54.17,[20220322,0,2,2,4,1,0,2,3,2],[196.37,"+"],81.51],["IDN","Indonesia",54.17,[20220317,1,1,1,3,2,1,1,2,3],[2.79,"-"],56.5],["KWT","Kuwait",54.63,[20220228,1,1,2,4,1,0,0,3,2],[3.83,"-"],75.81],["BLZ","Belize",54.63,[20220314,2,2,2,0,1,1,1,2,3],[3.23,"-"],51.51],["GIN","Guinea",54.63,[20220321,1,1,1,3,0,0,2,4,3],[0.03,"="],18.28],["GRC","Greece",55.56,[20220319,1,2,1,3,1,2,1,1,2],[210.22,"-"],73.14],["BEN","Benin",55.56,[20220219,0,2,2,3,1,1,0,3,4],[0.0,"-"],17.78],["SYC","Seychelles",56.48,[20220321,2,2,2,4,1,0,0,1,3],[33.41,"="],80.97],["TTO","Trinidad and Tobago",56.48,[20220313,2,2,2,3,0,0,0,4,3],[21.09,"-"],50.44],["ERI","Eritrea",56.48,[20220314,1,1,2,3,1,2,0,2,3],[0.0,"="]],["BRN","Brunei",57.41,[20220317,3,1,1,2,1,1,0,4,4],[307.41,"-"],91.68],["BTN","Bhutan",57.41,[20220321,2,2,2,0,1,1,1,2,4],[56.26,"-"],74.03],["CPV","Cape Verde",58.33,[20220310,0,2,2,0,2,1,2,1,3],[0.51,"="],54.44],["DJI","Djibouti",58.33,[20220314,1,1,2,4,1,1,1,1,3],[0.09,"="],10.35],["DZA","Algeria",58.33,[20220322,1,2,2,4,1,0,0,3,3],[0.03,"="],13.7],["USA","United States",58.8,[20220316,2,2,2,2,1,1,2,4,3],[9.22,"-"],65.42],["GTM","Guatemala",58.8,[20220315,2,2,2,3,1,1,0,3,3],[8.68,"-"],32.27],["COL","Colombia",59.26,[20220228,1,2,2,3,1,1,0,3,4],[1.05,"-"],67.21],["AZE","Azerbaijan",60.19,[20220322,1,1,2,3,0,0,2,4,2],[0.71,"-"],47.1],["SWZ","Eswatini",60.19,[20220313,0,2,2,4,1,0,2,1,4],[1.27,"-"],28.67],["AGO","Angola",60.19,[20220307,0,3,1,3,0,2,1,4,4],[0.03,"-"],16.8],["PER","Peru",60.19,[20220314,2,2,2,4,0,0,2,1,4],[2.22,"="],75.9],["SGP","Singapore",60.19,[20220312,1,3,2,4,0,1,0,3,4],[168.62,"-"],90.92],["FJI","Fiji",61.11,[20220313,0,3,2,0,2,0,2,3,3],[2.88,"-"],69.38],["IRN","Iran",62.04,[20220225,2,3,2,4,0,0,2,3,2],[1.94,"-"],66.55],["KAZ","Kazakhstan",62.04,[20220313,1,1,2,4,1,1,2,3,3],[0.24,"-"],48.05],["JAM","Jamaica",62.96,[20220320,1,2,1,4,1,2,1,2,2],[0.81,"+"],22.52],["BHS","Bahamas",62.96,[20220320,3,1,1,3,1,1,2,1,3],[1.16,"-"],39.19],["VNM","Vietnam",63.89,[20220321,2,2,2,3,2,2,2,1,3],[243.52,"-"],79.2],["MAR","Morocco",63.89,[20220321,1,2,2,4,2,0,0,3,3],[0.15,"="],62.48],["UKR","Ukraine",63.89,[20220316,3,1,2,3,2,1,2,3,3],[0.0,"="],35.02],["ITA","Italy",63.89,[20220318,2,3,2,1,2,1,0,2,2],[119.79,"+"],79.14],["CHN","China",64.35,[20220301,3,2,2,4,1,1,2,2,2],[0.15,"-"],85.89],["IRQ","Iraq",64.81,[20220228,1,2,2,3,0,1,2,3,3],[0.78,"-"],17.12],["CAN","Canada",66.2,[20220321,2,2,2,4,0,1,2,4,3],[14.1,"+"],81.71],["TKM","Turkmenistan",66.67,[20220315,0,3,2,4,1,0,2,4,3],[],52.41],["ECU","Ecuador",67.59,[20220321,1,2,2,4,2,0,2,1,3],[3.69,"="],76.52],["BRA","Brazil",69.91,[20220307,2,2,2,4,1,2,2,4,3],[16.77,"-"],74.48],["PAK","Pakistan",70.37,[20220321,3,2,2,2,1,1,2,3,4],[0.16,"-"],45.24],["IND","India",71.76,[20220314,3,2,2,4,2,2,2,2,3],[0.14,"="],59.05],["KIR","Kiribati",72.69,[20220314,3,3,2,3,2,2,2,2,4],[2.27,"="],45.58],["HKG","Hong Kong",75.0,[20220312,3,2,2,4,1,1,1,3,3],[215.21,"-"],73.9],["TON","Tonga",76.39,[20220319,2,2,2,4,2,2,1,4,4],[231.39,"="],65.83],["PHL","Philippines",78.24,[20220214,3,3,2,4,2,2,2,3,4],[0.43,"-"],58.76],["DEU","Germany",78.7,[20220320,2,2,2,4,2,1,2,3,2],[202.78,"-"],75.19],["MMR","Myanmar",78.7,[20220314,3,1,2,4,1,2,2,3,4],[0.66,"-"],39.6],["SAU","Saudi Arabia",78.7,[20220321,2,2,2,3,2,0,2,4,2],[0.33,"="],67.81],["SLB","Solomon Islands",81.94,[20220313,3,3,2,4,2,0,2,4,3],[16.47,"="],16.46],["LAO","Laos",84.26,[20220315,2,2,2,3,2,3,2,2,3],[21.19,"+"],60.06],["VUT","Vanuatu",85.19,[20220321,3,3,2,4,1,2,1,4,4],[45.91,"+"],27.09],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[14.69,"-"],44.79]];