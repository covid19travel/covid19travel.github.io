const dataUpdate="2022.04.11";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["ISL","Iceland",0.0,[20220411,0,0,0,0,0,0,0,0,-1],[64.18,"="],78.69],["MNG","Mongolia",2.78,[20220331,0,0,0,0,0,0,0,1,2],[4.37,"="],65.33],["DOM","Dominican Republic",8.33,[20220408,0,0,0,-1,0,0,0,1,1],[0.53,"+"],54.29],["NIC","Nicaragua",8.33,[20220409,0,0,0,0,0,0,0,1,1],[0.12,"="],65.63],["DNK","Denmark",11.11,[20220409,0,0,0,0,0,0,0,0,0],[45.5,"-"],82.58],["SWE","Sweden",11.11,[20220405,0,0,0,0,0,0,0,0,0],[5.84,"="],75.02],["IRL","Ireland",11.11,[20220405,0,0,0,0,0,0,0,0,1],[63.69,"="],80.55],["FRO","Faeroe Islands",11.11,[20220408,0,0,0,0,0,0,0,0,0],[0.0,"="],83.37],["AND","Andorra",11.11,[20220328,0,0,0,0,0,0,0,0,2],[56.21,"="],69.02],["NOR","Norway",11.11,[20220405,0,0,0,0,0,0,0,0,1],[19.03,"-"],73.72],["GBR","United Kingdom",12.96,[20220408,1,0,0,0,0,0,0,0,3],[70.81,"="],72.6],["ROU","Romania",13.89,[20220328,0,0,0,0,0,0,0,1,1],[9.47,"-"],42.29],["HUN","Hungary",13.89,[20220324,0,0,0,0,0,0,0,1,0],[20.42,"="],64.25],["TZA","Tanzania",13.89,[20220328,0,0,0,0,0,0,0,1,1],[0.0,"="],4.99],["SDN","Sudan",13.89,[20220407,0,0,0,0,0,0,0,1,0],[0.01,"="],7.48],["GMB","Gambia",13.89,[20220329,0,0,0,0,0,0,0,1,3],[0.01,"="],12.79],["BFA","Burkina Faso",13.89,[20220404,0,0,0,0,0,0,0,1,2],[0.0,"="],5.53],["BWA","Botswana",13.89,[20220404,0,0,0,0,0,0,0,1,3],[0.0,"="],53.92],["MDA","Moldova",14.81,[20220329,0,1,0,0,0,0,0,0,2],[4.41,"-"],26.27],["BEL","Belgium",14.81,[20220409,0,1,0,0,0,0,0,0,2],[79.73,"="],78.51],["POL","Poland",14.81,[20220401,0,1,0,0,0,0,0,0,2],[3.24,"-"],59.22],["TJK","Tajikistan",15.74,[20220325,1,1,0,0,0,0,0,1,3],[0.0,"="],49.78],["PSE","Palestine",16.67,[20220401,0,0,0,0,0,0,0,2,4],[],33.74],["NER","Niger",16.67,[20220321,0,0,0,0,0,0,0,2,3],[0.01,"="],6.15],["AFG","Afghanistan",16.67,[20220404,0,2,1,0,1,0,0,2,3],[0.05,"-"],11.38],["COG","Congo",17.59,[20220328,0,1,0,0,0,0,0,1,3],[0.02,"="],12.04],["LVA","Latvia",17.59,[20220402,0,1,0,0,0,0,0,1,2],[47.45,"-"],69.79],["LTU","Lithuania",17.59,[20220314,0,1,0,0,0,0,0,1,3],[55.06,"-"],69.64],["TUN","Tunisia",17.59,[20220321,0,1,0,0,0,0,0,1,3],[1.78,"="],53.22],["ISR","Israel",17.59,[20220404,1,0,0,0,0,0,0,1,2],[85.11,"-"],66.0],["PRT","Portugal",17.59,[20220405,1,0,0,0,0,0,0,1,2],[88.36,"="],92.6],["CUB","Cuba",18.52,[20220408,1,1,0,0,0,0,0,0,2],[5.41,"-"],87.67],["GUY","Guyana",18.52,[20220409,1,1,0,0,0,0,0,4,-1],[0.98,"+"],45.88],["BDI","Burundi",19.44,[20220328,0,-1,0,0,0,0,1,1,2],[0.17,"="],0.08],["MDG","Madagascar",19.44,[20220410,0,0,0,0,0,2,0,1,3],[0.02,"+"],3.7],["FRA","France",19.44,[20220321,0,0,0,0,0,0,0,3,2],[207.99,"+"],77.83],["BLR","Belarus",19.44,[20220327,0,0,0,0,0,0,0,3,1],[6.49,"-"],58.26],["SVK","Slovak Republic",20.37,[20220321,1,0,0,0,0,0,0,2,3],[79.71,"-"],50.72],["JOR","Jordan",20.37,[20220321,0,1,0,2,0,0,0,0,2],[2.42,"="],43.4],["CIV","Cote d'Ivoire",21.3,[20220402,1,1,0,0,0,0,0,1,1],[0.04,"+"],17.0],["SEN","Senegal",21.3,[20220404,1,1,0,0,0,0,0,1,3],[0.03,"="],6.04],["BGR","Bulgaria",21.3,[20220404,1,1,0,0,0,0,0,1,2],[9.72,"+"],29.76],["PRY","Paraguay",21.3,[20220325,1,1,1,0,0,0,0,3,-1],[0.19,"="],46.15],["GEO","Georgia",21.3,[20220404,1,1,0,0,0,0,0,1,2],[8.05,"-"],31.63],["SVN","Slovenia",22.22,[20220406,0,2,0,0,0,1,0,0,2],[93.8,"-"],58.72],["NLD","Netherlands",23.15,[20220405,0,0,0,0,0,1,0,3,2],[52.14,"-"],72.17],["HTI","Haiti",23.15,[20220410,0,1,1,4,0,0,0,1,-1],[0.05,"="],1.0],["CHE","Switzerland",23.15,[20220331,0,1,0,0,0,0,0,3,2],[35.29,"="],68.57],["TUR","Turkey",23.15,[20220404,1,0,0,0,1,0,0,1,2],[10.88,"-"],62.32],["MEX","Mexico",23.15,[20220401,1,0,0,0,1,0,0,1,2],[6.28,"-"],61.19],["CAF","Central African Republic",24.07,[20220328,0,0,0,2,0,2,0,2,3],[0.0,"="],18.25],["KWT","Kuwait",24.07,[20220328,1,1,0,0,0,0,0,2,2],[2.43,"-"],75.94],["LUX","Luxembourg",25.0,[20220410,0,0,0,0,1,0,0,3,2],[152.61,"="],72.63],["ETH","Ethiopia",26.85,[20220411,1,1,0,0,1,0,0,1,2],[0.03,"="],17.78],["BEN","Benin",26.85,[20220404,0,2,0,0,1,0,0,1,2],[0.0,"="],19.52],["CMR","Cameroon",27.78,[20220404,0,0,1,3,0,0,0,1,3],[0.13,"="],3.85],["URY","Uruguay",27.78,[20220330,0,0,2,0,0,0,0,4,1],[18.08,"-"],81.91],["ZMB","Zambia",27.78,[20220328,0,0,1,3,0,0,0,1,3],[0.35,"="],12.0],["TWN","Taiwan",27.78,[20220322,1,2,0,0,0,0,0,2,3],[1.86,"+"],76.98],["NAM","Namibia",28.7,[20220404,0,1,1,2,0,0,0,1,2],[1.41,"+"],14.94],["VEN","Venezuela",28.7,[20220404,1,0,0,0,1,0,0,3,3],[0.32,"-"],49.77],["ABW","Aruba",28.7,[20220329,0,0,1,2,0,1,0,1,2],[18.46,"="],76.14],["BOL","Bolivia",29.63,[20220404,2,1,1,0,0,0,0,2,4],[0.99,"-"],49.1],["FIN","Finland",29.63,[20220409,1,1,0,0,1,0,0,2,1],[80.1,"="],77.73],["KHM","Cambodia",29.63,[20220328,1,1,1,0,0,0,0,2,3],[0.17,"="],83.06],["CHL","Chile",30.09,[20220402,1,1,1,2,0,0,1,2,3],[18.96,"-"],90.62],["BMU","Bermuda",30.56,[20220401,1,1,1,3,0,1,0,2,3],[33.72,"="],76.13],["MCO","Monaco",31.48,[20220328,0,1,0,4,0,0,0,2,2],[143.43,"="],64.95],["GRD","Grenada",31.48,[20220328,1,0,0,3,0,0,0,3,3],[5.08,"+"],33.64],["ARG","Argentina",31.48,[20220321,0,1,1,1,0,0,1,2,3],[3.61,"-"],81.29],["LIE","Liechtenstein",31.48,[20220330,0,1,1,1,0,0,0,3,2],[122.89,"+"],69.0],["CZE","Czech Republic",31.48,[20220410,0,1,0,0,2,0,0,2,2],[40.06,"-"],63.99],["MAC","Macao",32.41,[20220401,1,1,1,0,0,0,0,3,2],[],79.92],["PRI","Puerto Rico",32.41,[20220403,1,1,1,1,0,0,0,3,2],[]],["EST","Estonia",32.41,[20220403,1,1,1,1,0,0,0,2,2],[57.35,"-"],63.66],["SLV","El Salvador",32.41,[20220309,2,0,2,1,0,0,0,0,4],[1.14,"-"],65.79],["TCD","Chad",32.41,[20220321,1,1,1,2,0,0,0,1,3],[0.03,"="],4.47],["LKA","Sri Lanka",32.87,[20220331,0,0,1,3,0,1,0,2,4],[0.4,"-"],67.11],["KEN","Kenya",33.33,[20220406,0,2,2,3,0,1,0,1,1],[0.02,"="],14.86],["PAN","Panama",33.33,[20220404,0,0,2,2,0,0,0,2,2],[5.69,"+"],69.46],["GRL","Greenland",33.33,[20220329,1,1,0,0,0,1,0,4,1],[0.0,"="],67.7],["RKS","Kosovo",33.33,[20220411,2,1,1,4,0,0,0,2,3],[1.68,"+"],46.07],["NGA","Nigeria",34.26,[20220404,0,0,1,3,0,1,0,2,2],[0.01,"="],4.52],["HND","Honduras",34.26,[20220326,0,2,1,0,0,2,0,1,3],[0.3,"="],45.54],["YEM","Yemen",35.19,[20220404,1,1,1,0,0,2,0,4,1],[0.0,"="],1.33],["ARE","United Arab Emirates",35.19,[20220321,1,1,2,1,0,0,0,1,2],[2.3,"-"],96.42],["HRV","Croatia",35.19,[20220403,1,1,1,2,0,0,0,2,2],[22.05,"-"],54.87],["SYR","Syria",36.11,[20220321,1,1,1,0,0,1,1,1,3],[0.03,"="],7.44],["KGZ","Kyrgyz Republic",36.11,[20220409,0,0,2,4,0,0,-1,1,2],[0.0,"-"],18.89],["CYP","Cyprus",36.11,[20220327,1,1,1,2,0,1,0,1,3],[208.5,"-"],72.02],["BIH","Bosnia and Herzegovina",36.11,[20220404,1,1,1,3,0,1,0,0,2],[2.29,"="],25.93],["VIR","United States Virgin Islands",36.11,[20220403,1,1,1,3,0,1,0,0,2],[]],["SSD","South Sudan",36.11,[20220327,1,0,1,0,0,2,1,1,2],[0.07,"="],4.24],["SRB","Serbia",36.11,[20220402,1,1,1,2,0,1,0,1,3],[14.21,"-"],47.58],["BRB","Barbados",37.04,[20220328,-1,1,2,3,0,0,0,1,3],[113.14,"+"],52.61],["BGD","Bangladesh",37.04,[20220312,2,1,1,0,0,1,0,2,4],[0.03,"="],69.08],["ZAF","South Africa",37.96,[20220326,0,2,1,2,1,0,0,1,2],[2.2,"-"],30.1],["UGA","Uganda",37.96,[20220404,1,1,1,2,1,0,0,1,4],[0.02,"="],17.01],["MOZ","Mozambique",37.96,[20220404,0,2,1,3,0,0,0,2,3],[0.01,"="],41.11],["LSO","Lesotho",37.96,[20220408,0,2,2,2,0,0,0,1,4],[0.0,"="],33.7],["RWA","Rwanda",37.96,[20220404,1,1,1,-1,2,0,0,1,3],[0.02,"="],61.36],["BHR","Bahrain",38.89,[20220403,1,1,1,2,0,1,0,2,2],[31.75,"-"],69.62],["COD","Democratic Republic of Congo",39.81,[20220320,0,1,1,0,0,2,2,1,4],[0.0,"="],0.56],["RUS","Russia",40.28,[20220331,0,2,1,2,0,2,1,3,3],[9.57,"-"],50.04],["MLI","Mali",40.74,[20220329,0,2,2,3,0,0,0,1,3],[0.05,"+"],4.69],["KOR","South Korea",40.74,[20220410,0,2,1,4,0,0,0,2,3],[396.56,"-"],86.76],["AUT","Austria",40.74,[20220404,2,2,1,3,0,0,0,1,2],[158.66,"-"],72.96],["BHS","Bahamas",40.74,[20220404,0,1,1,3,1,1,0,1,3],[2.29,"+"],39.46],["MWI","Malawi",41.67,[20220404,0,1,1,2,1,2,0,1,3],[0.03,"="],4.39],["MLT","Malta",41.67,[20220411,1,2,2,0,0,0,0,3,3],[147.73,"-"],90.53],["AGO","Angola",42.59,[20220408,0,2,1,0,0,2,1,2,4],[0.0,"="],17.66],["PNG","Papua New Guinea",43.06,[20220404,0,1,2,3,0,1,0,4,4],[0.35,"="],2.82],["THA","Thailand",43.06,[20220404,0,2,1,2,0,1,1,2,1],[34.67,"-"],72.13],["EGY","Egypt",43.52,[20220328,1,1,2,4,0,0,0,1,4],[0.55,"="],30.89],["GHA","Ghana",43.52,[20220410,0,2,2,4,0,0,0,1,4],[0.04,"="],15.98],["SOM","Somalia",43.52,[20220328,0,1,1,3,0,1,1,2,3],[0.05,"="],8.26],["JPN","Japan",43.52,[20220405,1,0,1,1,0,1,1,4,1],[38.26,"+"],80.0],["MRT","Mauritania",43.52,[20220328,1,1,2,4,0,0,0,1,3],[0.12,"="],22.25],["ESP","Spain",43.98,[20220315,1,2,2,3,0,0,0,3,2],[23.19,"="],86.2],["CRI","Costa Rica",44.44,[20220328,0,2,2,2,0,1,0,2,3],[5.54,"="],78.0],["TLS","Timor-Leste",44.44,[20220410,0,0,1,0,2,0,2,2,3],[0.11,"="],43.95],["TGO","Togo",45.37,[20220314,1,2,2,3,0,2,0,2,4],[0.02,"="],18.37],["GIN","Guinea",46.3,[20220328,1,1,1,3,0,0,2,1,3],[0.0,"="],18.37],["IRQ","Iraq",46.3,[20220328,0,2,2,3,0,0,0,3,3],[0.57,"-"],17.59],["UZB","Uzbekistan",46.3,[20220327,1,1,2,3,0,0,1,2,1],[0.09,"="],41.81],["ALB","Albania",46.3,[20220314,1,1,1,3,0,0,2,1,2],[1.73,"-"],42.51],["NPL","Nepal",46.3,[20220404,0,1,2,1,1,1,1,1,4],[0.05,"-"],64.96],["QAT","Qatar",47.22,[20220328,1,1,1,0,1,1,1,3,2],[4.78,"+"],88.5],["SLE","Sierra Leone",48.15,[20220404,2,2,2,0,1,0,0,2,3],[0.01,"="],13.82],["LBR","Liberia",48.15,[20220404,1,3,2,0,0,0,0,4,4],[0.0,"="],20.94],["IND","India",48.61,[20220403,2,2,1,2,2,1,0,1,3],[0.07,"="],60.16],["MUS","Mauritius",50.0,[20220404,1,2,2,4,0,0,0,2,3],[50.74,"="],76.18],["SUR","Suriname",50.0,[20220404,1,2,2,3,0,0,0,3,4],[0.22,"-"],40.12],["LBY","Libya",50.0,[20220328,1,2,2,4,0,0,0,2,3],[0.2,"+"],16.36],["DEU","Germany",50.93,[20220402,2,2,0,2,2,1,0,3,2],[172.09,"-"],75.37],["BTN","Bhutan",51.85,[20220404,2,2,2,0,0,1,1,2,4],[199.68,"+"],74.69],["OMN","Oman",52.78,[20220329,1,2,2,4,0,0,0,3,2],[0.61,"-"],57.9],["GUM","Guam",52.78,[20220313,1,2,2,3,0,0,0,4,3],[]],["SMR","San Marino",52.78,[20220404,1,1,1,4,1,1,1,1,1],[119.57,"="],69.44],["COL","Colombia",52.78,[20220328,1,2,2,2,1,0,0,3,3],[0.59,"="],68.41],["BRN","Brunei",53.7,[20220408,2,1,1,2,1,1,0,4,4],[83.47,"-"],91.79],["ZWE","Zimbabwe",53.7,[20220321,0,2,1,3,0,2,2,1,3],[0.42,"-"],23.85],["LBN","Lebanon",53.7,[20220404,2,3,1,1,1,2,0,1,4],[3.51,"-"],32.64],["ITA","Italy",53.7,[20220409,2,2,2,0,2,0,0,2,2],[105.43,"-"],79.29],["AUS","Australia",54.17,[20220404,0,2,2,4,1,0,2,3,2],[219.33,"+"],82.88],["IDN","Indonesia",54.17,[20220404,1,1,1,3,1,1,1,3,3],[0.89,"+"],58.41],["MYS","Malaysia",54.17,[20220320,2,2,2,4,0,0,2,2,3],[35.02,"-"],79.17],["BLZ","Belize",54.63,[20220401,2,2,2,0,1,1,1,2,0],[1.04,"="],51.76],["GRC","Greece",55.56,[20220319,1,2,1,3,1,2,1,1,2],[131.47,"-"],73.34],["DMA","Dominica",55.56,[20220328,1,2,2,4,1,0,0,2,3],[12.3,"="],41.61],["GAB","Gabon",55.56,[20220328,0,2,1,3,0,3,2,2,3],[0.01,"="],11.05],["NZL","New Zealand",56.48,[20220404,2,2,2,3,0,0,0,4,3],[214.29,"-"],79.52],["TTO","Trinidad and Tobago",56.48,[20220313,2,2,2,3,0,0,0,4,3],[19.47,"+"],50.6],["KAZ","Kazakhstan",56.48,[20220405,1,1,2,4,1,1,2,1,3],[0.12,"-"],48.42],["CPV","Cape Verde",56.48,[20220402,1,2,1,0,2,1,2,1,3],[0.31,"-"],54.6],["SYC","Seychelles",56.48,[20220403,2,2,2,4,1,0,0,1,3],[92.67,"="],81.04],["ERI","Eritrea",56.48,[20220404,1,1,2,3,1,2,0,2,3],[0.01,"+"]],["FJI","Fiji",57.41,[20220402,0,2,2,0,2,0,2,3,1],[1.2,"="],69.59],["DZA","Algeria",58.33,[20220322,1,2,2,4,1,0,0,3,3],[0.01,"="],13.7],["DJI","Djibouti",58.33,[20220404,1,1,2,4,1,1,1,1,3],[0.06,"-"],10.95],["GTM","Guatemala",58.8,[20220315,2,2,2,3,1,1,0,3,3],[3.51,"-"],33.13],["USA","United States",58.8,[20220407,2,2,2,2,1,1,2,4,3],[10.31,"-"],65.77],["AZE","Azerbaijan",60.19,[20220322,1,1,2,3,0,0,2,4,2],[0.25,"-"],47.27],["SGP","Singapore",60.19,[20220411,1,3,2,4,0,1,0,3,3],[69.0,"-"],91.12],["SWZ","Eswatini",60.19,[20220313,0,2,2,4,1,0,2,1,4],[1.44,"-"],27.16],["JAM","Jamaica",62.96,[20220320,1,2,1,4,1,2,1,2,2],[0.78,"="],22.78],["CAN","Canada",63.43,[20220404,2,2,2,3,0,1,2,4,3],[13.87,"-"],81.99],["VNM","Vietnam",63.89,[20220404,2,2,2,3,2,2,2,1,3],[55.76,"-"],79.2],["TKM","Turkmenistan",63.89,[20220404,0,3,2,4,2,0,2,1,3],[],52.41],["MAR","Morocco",63.89,[20220404,1,2,2,4,2,0,0,3,3],[0.2,"+"],62.56],["ECU","Ecuador",65.74,[20220404,0,2,2,4,2,0,2,1,3],[2.84,"="],77.22],["PER","Peru",65.74,[20220410,0,2,2,4,2,0,2,1,4],[1.29,"-"],78.94],["SAU","Saudi Arabia",67.59,[20220321,2,2,2,3,2,0,2,0,2],[0.3,"="],69.58],["IRN","Iran",67.59,[20220405,3,3,2,4,0,0,2,3,2],[4.08,"+"],67.22],["BRA","Brazil",69.91,[20220307,2,2,2,4,1,2,2,4,3],[10.16,"="],75.67],["PAK","Pakistan",70.37,[20220410,3,2,2,2,1,1,2,3,4],[0.07,"="],51.41],["KIR","Kiribati",72.69,[20220328,3,3,2,3,2,2,2,2,4],[0.24,"-"],45.58],["UKR","Ukraine",75.0,[20220406,3,1,2,3,2,1,2,3,3],[0.0,"="],34.86],["HKG","Hong Kong",75.0,[20220326,3,2,2,4,1,1,1,3,3],[35.75,"-"],77.59],["CHN","China",75.46,[20220410,3,2,2,4,2,3,2,2,2],[1.52,"+"],86.08],["PHL","Philippines",78.24,[20220328,3,3,2,4,2,2,2,3,4],[0.23,"-"],59.91],["MMR","Myanmar",78.7,[20220325,3,1,2,4,1,2,2,3,4],[0.12,"="],40.58],["LAO","Laos",78.7,[20220328,2,2,2,3,2,2,2,2,3],[23.38,"-"],62.53],["TON","Tonga",81.02,[20220410,3,3,2,4,2,2,2,4,4],[108.67,"-"],65.83],["SLB","Solomon Islands",83.33,[20220404,3,2,2,4,2,1,2,3,3],[11.13,"="],17.39],["VUT","Vanuatu",85.19,[20220404,3,3,2,4,1,2,1,4,4],[57.81,"-"],27.09],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[8.98,"-"],44.91]];