const dataUpdate="2022.04.05";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["MNG","Mongolia",2.78,[20220331,0,0,0,0,0,0,0,1,2],[2.95,"-"],65.32],["NIC","Nicaragua",8.33,[20220325,0,0,0,0,0,0,0,1,1],[0.15,"="],65.63],["DOM","Dominican Republic",8.33,[20220323,0,0,0,0,0,0,0,1,1],[0.39,"+"],54.18],["CIV","Cote d'Ivoire",10.19,[20220402,1,1,0,0,0,0,0,1,-1],[0.03,"="],17.0],["FRO","Faeroe Islands",11.11,[20220331,0,0,0,0,0,0,0,0,0],[0.0,"="],83.37],["AND","Andorra",11.11,[20220328,0,0,0,0,0,0,0,0,2],[57.5,"="],68.99],["IRL","Ireland",11.11,[20220405,0,0,0,0,0,0,0,0,1],[91.13,"-"],80.45],["SWE","Sweden",11.11,[20220405,0,0,0,0,0,0,0,0,0],[8.65,"="],74.98],["ISL","Iceland",11.11,[20220327,0,0,0,0,0,0,0,0,0],[84.44,"-"],78.69],["GBR","United Kingdom",12.96,[20220326,1,0,0,0,0,0,0,-1,3],[96.49,"-"],72.48],["KEN","Kenya",13.89,[20220404,0,0,0,0,0,0,0,1,1],[0.02,"="],14.86],["GMB","Gambia",13.89,[20220329,0,0,0,0,0,0,0,1,3],[0.02,"+"],12.79],["BFA","Burkina Faso",13.89,[20220404,0,0,0,0,0,0,0,1,2],[0.0,"="],5.53],["BWA","Botswana",13.89,[20220404,0,0,0,0,0,0,0,1,3],[252.57,"="],53.92],["TZA","Tanzania",13.89,[20220328,0,0,0,0,0,0,0,1,1],[0.0,"="],4.99],["SDN","Sudan",13.89,[20220325,0,0,0,0,0,0,0,1,0],[0.02,"="],6.12],["NOR","Norway",13.89,[20220313,0,0,0,0,0,0,0,1,1],[27.24,"-"],73.7],["HUN","Hungary",13.89,[20220324,0,0,0,0,0,0,0,1,0],[14.22,"-"],64.23],["ROU","Romania",13.89,[20220328,0,0,0,0,0,0,0,1,1],[13.88,"-"],42.27],["DNK","Denmark",13.89,[20220318,0,0,0,0,0,0,0,1,0],[56.82,"-"],82.59],["MDA","Moldova",14.81,[20220329,0,1,0,0,0,0,0,0,2],[5.61,"-"],26.22],["POL","Poland",14.81,[20220401,0,1,0,0,0,0,0,0,2],[9.26,"-"],59.18],["TJK","Tajikistan",15.74,[20220325,1,1,0,0,0,0,0,1,3],[0.0,"="],47.33],["NER","Niger",16.67,[20220321,0,0,0,0,0,0,0,2,3],[0.01,"="],6.15],["PSE","Palestine",16.67,[20220401,0,0,0,0,0,0,0,2,4],[],33.63],["AFG","Afghanistan",16.67,[20220404,0,2,1,0,1,0,0,2,3],[0.11,"="],11.1],["ISR","Israel",17.59,[20220404,1,0,0,0,0,0,0,1,2],[134.31,"-"],65.98],["LVA","Latvia",17.59,[20220402,0,1,0,0,0,0,0,1,2],[85.86,"-"],69.77],["COG","Congo",17.59,[20220328,0,1,0,0,0,0,0,1,3],[0.01,"-"],11.32],["LTU","Lithuania",17.59,[20220314,0,1,0,0,0,0,0,1,3],[81.98,"-"],69.63],["PRT","Portugal",17.59,[20220321,1,0,0,0,0,0,0,1,2],[106.26,"+"],92.6],["TUN","Tunisia",17.59,[20220321,0,1,0,0,0,0,0,1,3],[2.6,"="],53.2],["FRA","France",19.44,[20220321,0,0,0,0,0,0,0,3,2],[212.73,"+"],77.8],["BDI","Burundi",19.44,[20220328,0,-1,0,0,0,0,1,1,2],[0.15,"+"],0.08],["BLR","Belarus",19.44,[20220327,0,0,0,0,0,0,0,3,1],[8.85,"-"],58.94],["GUY","Guyana",20.37,[20220317,1,0,0,0,0,0,0,4,1],[0.69,"="],45.76],["SVK","Slovak Republic",20.37,[20220321,1,0,0,0,0,0,0,2,3],[114.91,"-"],50.71],["JOR","Jordan",20.37,[20220321,0,1,0,2,0,0,0,0,2],[2.42,"-"],42.96],["BGR","Bulgaria",21.3,[20220404,1,1,0,0,0,0,0,1,2],[14.3,"-"],29.74],["PRY","Paraguay",21.3,[20220325,1,1,1,0,0,0,0,3,-1],[0.81,"-"],46.15],["GEO","Georgia",21.3,[20220404,1,1,0,0,0,0,0,1,2],[10.33,"-"],31.59],["SEN","Senegal",21.3,[20220404,1,1,0,0,0,0,0,1,3],[0.04,"="],6.04],["SVN","Slovenia",22.22,[20220325,0,2,0,0,0,1,0,0,2],[116.64,"-"],58.7],["TUR","Turkey",23.15,[20220404,1,0,0,0,1,0,0,1,2],[15.64,"-"],62.3],["MEX","Mexico",23.15,[20220401,1,0,0,0,1,0,0,1,2],[1.7,"="],61.19],["BEL","Belgium",23.15,[20220318,0,1,0,0,0,0,0,3,2],[91.31,"+"],78.5],["CHE","Switzerland",23.15,[20220331,0,1,0,0,0,0,0,3,2],[88.18,"-"],68.77],["KWT","Kuwait",24.07,[20220328,1,1,0,0,0,0,0,2,2],[3.56,"-"],75.87],["CAF","Central African Republic",24.07,[20220328,0,0,0,2,0,2,0,2,3],[0.0,"="],18.25],["LUX","Luxembourg",25.0,[20220403,0,0,0,0,1,0,0,3,2],[185.08,"-"],72.51],["FIN","Finland",26.85,[20220318,1,1,0,0,1,0,0,2,1],[107.93,"-"],77.66],["BEN","Benin",26.85,[20220404,0,2,0,0,1,0,0,1,2],[0.0,"="],19.52],["TWN","Taiwan",27.78,[20220322,1,2,0,0,0,0,0,2,3],[1.01,"+"],76.65],["URY","Uruguay",27.78,[20220330,0,0,2,0,0,0,0,4,1],[22.2,"-"],81.72],["CMR","Cameroon",27.78,[20220404,0,0,1,3,0,0,0,1,3],[0.0,"="],3.85],["ZMB","Zambia",27.78,[20220328,0,0,1,3,0,0,0,1,3],[0.44,"+"],11.71],["VEN","Venezuela",28.7,[20220404,1,0,0,0,1,0,0,3,3],[0.37,"="],49.77],["NAM","Namibia",28.7,[20220404,0,1,1,2,0,0,0,1,2],[0.84,"+"],14.84],["ABW","Aruba",28.7,[20220329,0,0,1,2,0,1,0,1,2],[16.32,"="],75.99],["LBR","Liberia",29.63,[20220404,1,1,1,0,0,0,0,2,4],[0.0,"-"],19.61],["BOL","Bolivia",29.63,[20220404,2,1,1,0,0,0,0,2,4],[1.11,"-"],48.85],["CUB","Cuba",29.63,[20220323,1,1,0,0,0,0,0,4,2],[6.49,"-"],87.62],["KHM","Cambodia",29.63,[20220328,1,1,1,0,0,0,0,2,3],[0.23,"-"],82.86],["CHL","Chile",30.09,[20220402,1,1,1,2,0,0,1,2,3],[26.05,"-"],90.45],["BMU","Bermuda",30.56,[20220401,1,1,1,3,0,1,0,2,3],[24.77,"-"],75.72],["LIE","Liechtenstein",31.48,[20220330,0,1,1,1,0,0,0,3,2],[108.66,"-"],69.0],["MCO","Monaco",31.48,[20220328,0,1,0,4,0,0,0,2,2],[124.5,"+"],64.95],["ARG","Argentina",31.48,[20220321,0,1,1,1,0,0,1,2,3],[4.54,"-"],81.12],["GRD","Grenada",31.48,[20220328,1,0,0,3,0,0,0,3,3],[5.33,"="],33.6],["PRI","Puerto Rico",32.41,[20220403,1,1,1,1,0,0,0,3,2],[]],["LSO","Lesotho",32.41,[20220402,0,2,2,2,0,0,0,1,4],[0.2,"="],33.7],["TCD","Chad",32.41,[20220321,1,1,1,2,0,0,0,1,3],[0.03,"+"],0.91],["SLV","El Salvador",32.41,[20220309,2,0,2,1,0,0,0,0,4],[1.14,"="],65.77],["EST","Estonia",32.41,[20220403,1,1,1,1,0,0,0,2,2],[73.73,"-"],63.63],["MAC","Macao",32.41,[20220401,1,1,1,0,0,0,0,3,2],[],78.02],["LKA","Sri Lanka",32.87,[20220331,0,0,1,3,0,1,0,2,4],[0.7,"-"],66.93],["TLS","Timor-Leste",33.33,[20220325,0,0,1,0,1,0,1,2,3],[0.11,"-"],43.08],["GRL","Greenland",33.33,[20220329,1,1,0,0,0,1,0,4,1],[0.0,"="],67.7],["PAN","Panama",33.33,[20220404,0,0,2,2,0,0,0,2,2],[5.72,"-"],69.31],["RKS","Kosovo",33.33,[20220328,2,1,1,4,0,0,0,2,3],[1.62,"+"],46.05],["HTI","Haiti",34.26,[20220327,0,1,1,4,0,0,0,1,3],[0.05,"="],0.99],["NGA","Nigeria",34.26,[20220404,0,0,1,3,0,1,0,2,2],[0.01,"="],4.52],["HND","Honduras",34.26,[20220326,0,2,1,0,0,2,0,1,3],[0.72,"+"],47.48],["NLD","Netherlands",34.26,[20220313,0,0,1,0,0,1,1,3,2],[122.47,"-"],72.11],["ARE","United Arab Emirates",35.19,[20220321,1,1,2,1,0,0,0,1,2],[2.99,"+"],96.22],["HRV","Croatia",35.19,[20220403,1,1,1,2,0,0,0,2,2],[30.01,"-"],54.83],["YEM","Yemen",35.19,[20220404,1,1,1,0,0,2,0,4,1],[0.0,"="],1.33],["PER","Peru",36.11,[20220328,0,2,2,1,0,0,1,1,4],[1.34,"-"],76.72],["BIH","Bosnia and Herzegovina",36.11,[20220404,1,1,1,3,0,1,0,0,2],[2.97,"-"],25.93],["SSD","South Sudan",36.11,[20220327,1,0,1,0,0,2,1,1,2],[0.1,"-"],4.24],["SYR","Syria",36.11,[20220321,1,1,1,0,0,1,1,1,3],[0.04,"="],7.22],["CYP","Cyprus",36.11,[20220327,1,1,1,2,0,1,0,1,3],[327.28,"-"],72.02],["VIR","United States Virgin Islands",36.11,[20220403,1,1,1,3,0,1,0,0,2],[]],["SRB","Serbia",36.11,[20220402,1,1,1,2,0,1,0,1,3],[18.58,"-"],47.58],["KGZ","Kyrgyz Republic",36.11,[20220318,0,0,2,4,0,0,0,1,2],[0.17,"-"],18.77],["BRB","Barbados",37.04,[20220328,-1,1,2,3,0,0,0,1,3],[75.86,"+"],52.57],["BGD","Bangladesh",37.04,[20220312,2,1,1,0,0,1,0,2,4],[0.04,"="],68.58],["MDG","Madagascar",37.5,[20220328,0,0,2,3,0,2,0,2,3],[0.02,"="],3.7],["ZAF","South Africa",37.96,[20220326,0,2,1,2,1,0,0,1,2],[2.2,"-"],29.86],["MOZ","Mozambique",37.96,[20220404,0,2,1,3,0,0,0,2,3],[0.01,"="],40.83],["UGA","Uganda",37.96,[20220404,1,1,1,2,1,0,0,1,4],[0.02,"="],17.01],["RWA","Rwanda",37.96,[20220404,1,1,1,-1,2,0,0,1,3],[0.02,"="],60.53],["BHR","Bahrain",38.89,[20220403,1,1,1,2,0,1,0,2,2],[38.69,"-"],69.56],["COD","Democratic Republic of Congo",39.81,[20220320,0,1,1,0,0,2,2,1,4],[0.02,"="],0.56],["RUS","Russia",40.28,[20220331,0,2,1,2,0,2,1,3,3],[12.32,"-"],49.93],["MLI","Mali",40.74,[20220329,0,2,2,3,0,0,0,1,3],[0.02,"="],4.69],["KOR","South Korea",40.74,[20220403,0,2,1,4,0,0,0,2,3],[534.15,"-"],86.73],["ETH","Ethiopia",40.74,[20220402,1,1,1,3,1,0,0,1,3],[0.02,"="],17.78],["BHS","Bahamas",40.74,[20220404,0,1,1,3,1,1,0,1,3],[2.03,"+"],39.46],["AUT","Austria",40.74,[20220404,2,2,1,3,0,0,0,1,2],[241.22,"-"],72.92],["MWI","Malawi",41.67,[20220404,0,1,1,2,1,2,0,1,3],[0.03,"-"],4.39],["PNG","Papua New Guinea",43.06,[20220404,0,1,2,3,0,1,0,4,4],[0.27,"+"],2.82],["THA","Thailand",43.06,[20220404,0,2,1,2,0,1,1,2,1],[37.29,"-"],71.84],["SOM","Somalia",43.52,[20220328,0,1,1,3,0,1,1,2,3],[0.0,"="],7.89],["EGY","Egypt",43.52,[20220328,1,1,2,4,0,0,0,1,4],[0.55,"-"],30.43],["JPN","Japan",43.52,[20220405,1,0,1,1,0,1,1,4,1],[36.66,"+"],79.92],["MRT","Mauritania",43.52,[20220328,1,1,2,4,0,0,0,1,3],[0.11,"+"],22.14],["GHA","Ghana",43.52,[20220321,0,2,2,4,0,0,0,1,4],[0.02,"="],15.92],["ESP","Spain",43.98,[20220315,1,2,2,3,0,0,0,3,2],[30.52,"="],86.09],["CRI","Costa Rica",44.44,[20220328,0,2,2,2,0,1,0,2,3],[13.02,"="],77.28],["TGO","Togo",45.37,[20220314,1,2,2,3,0,2,0,2,4],[0.04,"-"],18.37],["IRQ","Iraq",46.3,[20220328,0,2,2,3,0,0,0,3,3],[0.74,"-"],17.29],["UZB","Uzbekistan",46.3,[20220327,1,1,2,3,0,0,1,2,1],[0.09,"="],40.82],["ALB","Albania",46.3,[20220314,1,1,1,3,0,0,2,1,2],[2.39,"+"],42.42],["NPL","Nepal",46.3,[20220404,0,1,2,1,1,1,1,1,4],[0.08,"+"],64.58],["GIN","Guinea",46.3,[20220328,1,1,1,3,0,0,2,1,3],[0.0,"="],18.37],["CZE","Czech Republic",47.22,[20220325,1,2,1,3,1,0,0,2,2],[52.97,"-"],63.97],["QAT","Qatar",47.22,[20220328,1,1,1,0,1,1,1,3,2],[4.89,"+"],88.5],["SLE","Sierra Leone",48.15,[20220404,2,2,2,0,1,0,0,2,3],[0.0,"="],13.68],["IND","India",48.61,[20220403,2,2,1,2,2,1,0,1,3],[0.08,"-"],59.7],["MUS","Mauritius",50.0,[20220404,1,2,2,4,0,0,0,2,3],[69.0,"="],75.66],["SUR","Suriname",50.0,[20220404,1,2,2,3,0,0,0,3,4],[1.53,"-"],40.12],["LBY","Libya",50.0,[20220328,1,2,2,4,0,0,0,2,3],[0.37,"-"],16.32],["DEU","Germany",50.93,[20220402,2,2,0,2,2,1,0,3,2],[235.73,"-"],75.31],["NZL","New Zealand",50.93,[20220404,2,2,2,3,0,0,0,2,3],[268.7,"-"],79.31],["BTN","Bhutan",51.85,[20220404,2,2,2,0,0,1,1,2,4],[126.77,"+"],74.32],["GUM","Guam",52.78,[20220313,1,2,2,3,0,0,0,4,3],[]],["OMN","Oman",52.78,[20220329,1,2,2,4,0,0,0,3,2],[0.95,"-"],57.84],["SMR","San Marino",52.78,[20220404,1,1,1,4,1,1,1,1,1],[69.05,"-"],69.4],["COL","Colombia",52.78,[20220328,1,2,2,2,1,0,0,3,3],[0.64,"="],67.93],["MLT","Malta",52.78,[20220404,1,2,2,4,0,0,0,3,3],[162.55,"+"],90.43],["ZWE","Zimbabwe",53.7,[20220321,0,2,1,3,0,2,2,1,3],[0.66,"-"],23.6],["LBN","Lebanon",53.7,[20220404,2,3,1,1,1,2,0,1,4],[4.57,"-"],32.6],["MYS","Malaysia",54.17,[20220320,2,2,2,4,0,0,2,2,3],[46.02,"-"],78.79],["AUS","Australia",54.17,[20220404,0,2,2,4,1,0,2,3,2],[218.77,"-"],82.44],["IDN","Indonesia",54.17,[20220404,1,1,1,3,1,1,1,3,3],[0.73,"-"],57.65],["BLZ","Belize",54.63,[20220401,2,2,2,0,1,1,1,2,3],[1.8,"-"],51.76],["GAB","Gabon",55.56,[20220328,0,2,1,3,0,3,2,2,3],[0.03,"+"],11.05],["GRC","Greece",55.56,[20220319,1,2,1,3,1,2,1,1,2],[189.59,"-"],73.27],["DMA","Dominica",55.56,[20220328,1,2,2,4,1,0,0,2,3],[17.07,"-"],41.58],["BRN","Brunei",56.48,[20220330,2,1,1,3,1,1,0,4,4],[136.5,"-"],91.71],["KAZ","Kazakhstan",56.48,[20220405,1,1,2,4,1,1,2,1,3],[0.17,"-"],48.27],["TTO","Trinidad and Tobago",56.48,[20220313,2,2,2,3,0,0,0,4,3],[15.77,"-"],50.54],["ITA","Italy",56.48,[20220401,2,2,2,1,2,0,0,2,2],[113.62,"-"],79.24],["CPV","Cape Verde",56.48,[20220402,1,2,1,0,2,1,2,1,3],[0.31,"="],54.6],["SYC","Seychelles",56.48,[20220403,2,2,2,4,1,0,0,1,3],[95.43,"+"],80.97],["IRN","Iran",56.48,[20220405,0,3,2,4,0,0,2,3,2],[2.92,"+"],66.95],["ERI","Eritrea",56.48,[20220404,1,1,2,3,1,2,0,2,3],[0.02,"="]],["FJI","Fiji",57.41,[20220402,0,2,2,0,2,0,2,3,1],[0.49,"-"],69.49],["DJI","Djibouti",58.33,[20220404,1,1,2,4,1,1,1,1,3],[0.07,"-"],10.48],["DZA","Algeria",58.33,[20220322,1,2,2,4,1,0,0,3,3],[0.02,"="],13.7],["USA","United States",58.8,[20220330,2,2,2,2,1,1,2,4,3],[64.64,"+"],65.61],["GTM","Guatemala",58.8,[20220315,2,2,2,3,1,1,0,3,3],[5.19,"+"],32.88],["SWZ","Eswatini",60.19,[20220313,0,2,2,4,1,0,2,1,4],[2.34,"+"],27.16],["AGO","Angola",60.19,[20220307,0,3,1,3,0,2,1,4,4],[0.03,"="],17.66],["AZE","Azerbaijan",60.19,[20220322,1,1,2,3,0,0,2,4,2],[0.42,"-"],47.22],["SGP","Singapore",60.19,[20220404,1,3,2,4,0,1,0,3,3],[92.15,"-"],91.04],["JAM","Jamaica",62.96,[20220320,1,2,1,4,1,2,1,2,2],[0.8,"+"],22.69],["CAN","Canada",63.43,[20220404,2,2,2,3,0,1,2,4,3],[18.87,"-"],81.95],["TKM","Turkmenistan",63.89,[20220404,0,3,2,4,2,0,2,1,3],[],52.41],["MAR","Morocco",63.89,[20220404,1,2,2,4,2,0,0,3,3],[0.21,"="],62.52],["UKR","Ukraine",63.89,[20220316,3,1,2,3,2,1,2,3,3],[0.0,"="],34.86],["VNM","Vietnam",63.89,[20220404,2,2,2,3,2,2,2,1,3],[86.91,"-"],79.2],["CHN","China",64.35,[20220301,3,2,2,4,1,1,2,2,2],[0.77,"+"],85.91],["ECU","Ecuador",65.74,[20220404,0,2,2,4,2,0,2,1,3],[4.07,"+"],76.7],["SAU","Saudi Arabia",67.59,[20220321,2,2,2,3,2,0,2,0,2],[0.29,"-"],69.21],["BRA","Brazil",69.91,[20220307,2,2,2,4,1,2,2,4,3],[10.6,"+"],75.24],["PAK","Pakistan",70.37,[20220321,3,2,2,2,1,1,2,3,4],[0.09,"-"],51.41],["KIR","Kiribati",72.69,[20220328,3,3,2,3,2,2,2,2,4],[0.24,"="],45.58],["HKG","Hong Kong",75.0,[20220326,3,2,2,4,1,1,1,3,3],[73.11,"-"],77.59],["TON","Tonga",76.39,[20220319,2,2,2,4,2,2,1,4,4],[222.07,"+"],65.83],["PHL","Philippines",78.24,[20220328,3,3,2,4,2,2,2,3,4],[0.31,"-"],59.43],["MMR","Myanmar",78.7,[20220325,3,1,2,4,1,2,2,3,4],[0.24,"-"],40.02],["LAO","Laos",78.7,[20220328,2,2,2,3,2,2,2,2,3],[30.12,"-"],60.65],["SLB","Solomon Islands",83.33,[20220404,3,2,2,4,2,1,2,3,3],[14.39,"="],17.39],["VUT","Vanuatu",85.19,[20220404,3,3,2,4,1,2,1,4,4],[83.63,"-"],27.09],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[12.12,"-"],44.85]];