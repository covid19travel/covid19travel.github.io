const dataUpdate="2022.02.19";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["BFA","Burkina Faso",2.78,[20220129,0,0,0,0,0,0,0,1,4],[0.03,"="],3.59],["NIC","Nicaragua",8.33,[20220124,0,0,0,0,0,0,0,1,1],[0.22,"="],57.03],["YEM","Yemen",12.04,[20220124,1,0,0,0,0,0,0,1,1],[0.03,"-"],1.21],["CIV","Cote d'Ivoire",13.89,[20220213,0,0,0,0,0,0,0,1,4],[0.12,"-"],11.2],["BWA","Botswana",13.89,[20220212,0,0,0,0,0,0,0,1,3],[13.72,"="],46.92],["GMB","Gambia",13.89,[20220215,0,0,0,0,0,0,0,1,3],[0.08,"="],12.25],["TLS","Timor-Leste",13.89,[20220117,0,0,0,0,0,0,0,1,3],[9.32,"-"],42.31],["TZA","Tanzania",13.89,[20220213,0,0,0,0,0,0,0,1,1],[0.03,"="],2.79],["SDN","Sudan",16.67,[20220207,1,1,0,0,0,0,0,2,4],[0.13,"-"],4.42],["PSE","Palestine",16.67,[20220207,0,0,0,0,0,0,0,2,4],[],29.3],["NER","Niger",16.67,[20220207,0,0,0,0,0,0,0,2,3],[0.01,"="],4.08],["DNK","Denmark",16.67,[20220217,0,0,0,0,0,0,0,2,0],[676.6,"-"],81.55],["TJK","Tajikistan",18.52,[20220207,1,1,0,0,0,0,0,2,3],[0.03,"-"],39.71],["AFG","Afghanistan",19.44,[20220131,0,2,1,0,1,0,0,2,3],[0.7,"-"],10.15],["BDI","Burundi",19.44,[20220207,0,0,0,0,0,0,2,1,2],[0.11,"-"],0.07],["SWE","Sweden",19.44,[20220211,0,0,0,0,0,0,0,3,0],[36.11,"-"],74.47],["BOL","Bolivia",21.3,[20220207,2,1,0,0,0,0,0,1,4],[8.91,"-"],46.44],["SEN","Senegal",21.3,[20220214,1,1,0,0,0,0,0,1,3],[0.15,"-"],5.86],["VUT","Vanuatu",22.22,[20220214,0,0,0,0,0,0,0,4,0],[0.0,"="],23.47],["BLR","Belarus",23.15,[20220207,0,1,0,0,0,0,0,3,1],[81.36,"-"],46.31],["IRL","Ireland",23.15,[20220211,1,0,0,0,0,0,0,3,2],[64.57,"-"],79.15],["MNG","Mongolia",23.61,[20220214,0,0,1,2,0,0,1,1,4],[79.66,"-"],65.24],["NOR","Norway",25.0,[20220211,1,1,0,0,0,1,0,1,2],[287.96,"-"],73.47],["GRL","Greenland",25.0,[20220215,1,1,0,0,0,1,0,1,2],[39.26,"-"],67.65],["FRO","Faeroe Islands",25.93,[20220215,1,0,1,2,0,0,0,0,0],[991.4,"-"],83.37],["CUB","Cuba",26.85,[20220207,1,1,0,0,1,0,0,1,3],[6.54,"-"],87.16],["TWN","Taiwan",27.78,[20220205,1,2,0,0,0,0,0,2,3],[0.25,"="],74.54],["ZMB","Zambia",27.78,[20220214,0,0,1,3,0,0,0,1,3],[1.36,"-"],9.58],["NAM","Namibia",28.7,[20220205,0,1,1,2,0,0,0,1,3],[1.87,"-"],14.11],["SRB","Serbia",28.7,[20220124,0,0,1,2,0,1,0,1,3],[77.41,"-"],47.39],["URY","Uruguay",28.7,[20220208,0,1,1,0,0,0,0,3,2],[172.94,"-"],77.63],["VEN","Venezuela",28.7,[20220207,1,0,0,0,1,0,0,3,3],[4.2,"+"],49.77],["MDG","Madagascar",29.17,[20220214,0,0,2,3,0,2,0,1,3],[0.73,"="],3.26],["LBR","Liberia",29.63,[20220214,1,1,1,0,0,0,0,2,4],[0.01,"="],20.94],["SLE","Sierra Leone",29.63,[20220214,1,1,0,0,1,0,0,2,3],[0.02,"="],9.06],["CHL","Chile",30.09,[20220212,1,1,1,2,0,0,1,2,3],[177.59,"-"],89.1],["PAK","Pakistan",30.09,[20220130,2,1,1,2,0,1,0,1,4],[1.17,"-"],41.97],["CMR","Cameroon",30.56,[20220207,0,0,1,3,0,0,0,4,3],[0.23,"-"],2.44],["NGA","Nigeria",30.56,[20220131,0,0,1,3,0,0,0,2,3],[0.02,"="],2.58],["PRT","Portugal",31.48,[20220211,0,1,1,2,0,0,0,2,3],[159.96,"-"],91.38],["MAC","Macao",32.41,[20220219,1,1,1,0,0,0,0,3,2],[],73.69],["KEN","Kenya",32.41,[20211219,0,2,1,2,0,0,0,1,4],[0.07,"="],13.3],["COD","Democratic Republic of Congo",33.33,[20220214,0,1,1,0,0,2,1,1,4],[0.01,"="],0.27],["JOR","Jordan",34.26,[20220207,0,1,1,2,0,0,0,3,2],[163.81,"-"],41.81],["HND","Honduras",34.26,[20220207,0,2,1,0,0,2,0,1,3],[18.59,"="],45.32],["ARG","Argentina",34.26,[20220124,0,1,2,1,0,0,0,2,4],[31.07,"-"],78.39],["UGA","Uganda",34.26,[20220207,0,1,1,2,1,0,0,1,4],[0.1,"-"],4.71],["SOM","Somalia",35.19,[20220207,0,1,1,3,0,1,0,1,3],[0.05,"="],5.32],["AND","Andorra",35.19,[20220214,1,1,1,2,0,0,0,2,2],[83.02,"+"],68.65],["PRY","Paraguay",35.19,[20220214,1,1,1,3,0,0,0,1,2],[26.09,"-"],43.9],["SLV","El Salvador",35.19,[20220124,2,0,2,1,0,0,0,1,4],[27.92,"="],64.94],["MEX","Mexico",35.19,[20220214,0,2,1,0,1,1,2,1,4],[15.53,"-"],60.32],["LBN","Lebanon",35.19,[20220214,0,1,1,1,1,1,0,1,4],[69.47,"-"],31.35],["MCO","Monaco",35.19,[20220214,1,1,0,2,0,0,1,2,4],[63.34,"+"],64.95],["TCD","Chad",35.19,[20220122,1,1,1,3,0,0,0,1,4],[0.0,"="],0.82],["KHM","Cambodia",35.65,[20220207,1,2,1,3,0,0,0,2,3],[2.1,"+"],81.51],["MWI","Malawi",36.11,[20220214,1,1,1,2,0,1,0,1,3],[0.15,"="],4.01],["CYP","Cyprus",36.11,[20220214,1,1,1,2,0,1,0,1,3],[198.73,"-"],71.75],["SSD","South Sudan",36.11,[20220214,1,0,1,0,0,2,1,1,3],[0.03,"="],2.44],["DMA","Dominica",37.04,[20220210,3,1,0,0,1,0,0,2,3],[97.24,"-"],40.74],["DOM","Dominican Republic",37.96,[20220124,0,1,2,2,1,1,0,1,3],[4.35,"-"],53.39],["ISL","Iceland",37.96,[20220131,1,1,1,3,0,0,0,2,2],[674.26,"+"],78.13],["CPV","Cape Verde",37.96,[20220217,0,2,2,0,1,0,2,1,-1],[0.64,"-"],51.82],["SMR","San Marino",37.96,[20220124,1,1,1,4,0,0,0,1,3],[120.41,"+"],64.03],["ABW","Aruba",37.96,[20220131,0,0,1,4,0,2,0,1,2],[17.39,"-"],74.93],["MLI","Mali",38.89,[20220215,0,2,2,3,0,0,0,1,3],[0.05,"="],3.41],["MOZ","Mozambique",38.89,[20220214,0,1,1,4,0,1,0,2,3],[0.11,"-"],28.05],["VIR","United States Virgin Islands",38.89,[20220202,1,1,1,3,0,1,0,1,2],[]],["TUR","Turkey",39.81,[20220208,0,1,1,0,1,0,2,1,4],[102.53,"-"],61.97],["ZWE","Zimbabwe",40.74,[20220130,0,0,1,3,1,2,0,1,3],[1.75,"+"],22.32],["ETH","Ethiopia",40.74,[20220208,1,1,1,3,1,0,0,1,3],[0.12,"+"],1.56],["FIN","Finland",41.67,[20220217,1,1,2,3,1,0,0,2,1],[90.43,"-"],75.95],["ZAF","South Africa",41.67,[20220219,1,2,1,2,1,0,0,1,3],[4.13,"-"],29.14],["BIH","Bosnia and Herzegovina",41.67,[20220214,1,1,1,3,1,1,1,1,3],[22.27,"-"],25.93],["CZE","Czech Republic",41.67,[20220214,1,2,1,3,0,0,0,2,2],[161.25,"-"],63.7],["GBR","United Kingdom",42.13,[20220218,1,2,2,3,1,0,0,2,3],[69.44,"-"],71.61],["BHS","Bahamas",42.59,[20220127,3,1,1,3,0,0,0,1,4],[4.18,"-"],38.62],["SVK","Slovak Republic",42.59,[20220210,0,0,2,4,0,1,0,2,3],[381.71,"-"],50.13],["TGO","Togo",43.52,[20220123,1,2,2,3,0,2,0,2,4],[0.14,"-"],12.68],["GHA","Ghana",43.52,[20220206,0,2,2,4,0,0,0,1,4],[0.22,"="],14.4],["EGY","Egypt",43.52,[20220202,1,1,2,4,0,0,0,1,4],[2.06,"-"],27.6],["MRT","Mauritania",43.52,[20220214,1,1,2,4,0,0,0,1,3],[0.12,"-"],21.14],["MUS","Mauritius",43.52,[20220207,0,2,2,3,0,0,0,2,3],[0.0,"="],71.45],["HTI","Haiti",43.52,[20220204,0,1,1,4,1,1,0,1,3],[0.28,"-"],0.86],["HRV","Croatia",43.52,[20220214,1,1,1,3,1,0,0,2,2],[89.29,"-"],54.47],["PRI","Puerto Rico",43.52,[20220211,1,1,1,0,0,0,2,3,2],[]],["AZE","Azerbaijan",43.52,[20220121,1,1,2,3,0,0,0,2,2],[50.21,"-"],46.64],["AUS","Australia",43.98,[20220218,0,1,1,3,1,0,2,3,2],[76.51,"+"],79.12],["BMU","Bermuda",44.44,[20220129,1,1,1,3,0,1,0,3,3],[39.0,"="],74.15],["CAF","Central African Republic",44.44,[20220207,0,1,1,0,1,2,1,2,3],[0.1,"-"],12.09],["GEO","Georgia",44.44,[20220214,1,2,2,2,0,0,0,2,4],[387.4,"-"],31.16],["BGR","Bulgaria",44.44,[20220206,1,2,2,3,0,0,0,1,2],[66.09,"-"],29.53],["LBY","Libya",44.44,[20220214,1,1,1,4,1,1,0,2,3],[32.2,"-"],15.08],["UZB","Uzbekistan",45.37,[20220206,1,0,2,3,0,0,1,3,3],[1.01,"-"],37.12],["POL","Poland",45.37,[20220211,2,2,1,3,0,0,0,2,3],[57.92,"-"],58.44],["LSO","Lesotho",45.37,[20220208,0,2,2,2,0,2,0,1,3],[0.41,"="],33.7],["LUX","Luxembourg",46.3,[20220214,1,1,1,3,1,0,0,3,2],[90.21,"-"],71.12],["KOR","South Korea",46.3,[20220213,0,2,2,4,0,0,0,2,3],[157.1,"+"],86.29],["MDA","Moldova",47.22,[20220214,2,1,2,4,0,0,0,1,2],[43.61,"-"],25.54],["ROU","Romania",47.22,[20220214,2,1,1,2,0,2,1,1,3],[83.18,"-"],42.0],["LIE","Liechtenstein",47.22,[20220206,1,1,1,4,0,1,0,3,3],[239.79,"-"],68.74],["JPN","Japan",47.22,[20220214,1,1,1,1,0,1,1,4,1],[63.66,"-"],79.38],["TON","Tonga",47.22,[20220131,1,0,1,3,0,2,0,4,2],[21.76,"+"],60.59],["KGZ","Kyrgyz Republic",47.22,[20220201,3,0,2,4,0,0,-1,1,2],[0.87,"+"],17.16],["COG","Congo",48.15,[20220131,0,1,1,3,0,2,2,2,3],[0.04,"="],10.32],["LVA","Latvia",48.15,[20220215,1,3,2,3,0,0,0,1,3],[507.82,"-"],69.43],["THA","Thailand",48.15,[20220205,1,2,1,2,0,1,1,2,1],[23.72,"+"],70.61],["TTO","Trinidad and Tobago",48.15,[20220128,2,2,2,3,0,0,0,1,3],[35.64,"-"],49.85],["NPL","Nepal",48.15,[20220214,1,1,2,3,1,1,2,1,4],[1.47,"-"],55.69],["ISR","Israel",48.15,[20220216,2,2,2,0,0,0,0,4,2],[245.52,"-"],65.84],["PAN","Panama",48.15,[20220131,2,1,1,4,0,1,0,2,4],[31.01,"-"],57.83],["RUS","Russia",48.61,[20220206,0,2,1,2,0,2,2,3,3],[124.93,"-"],49.07],["KWT","Kuwait",49.07,[20220206,1,1,2,2,1,0,0,3,2],[46.89,"-"],77.97],["ESP","Spain",49.07,[20220211,1,1,2,4,0,0,0,3,4],[62.64,"-"],83.08],["SAU","Saudi Arabia",49.07,[20220214,1,1,1,3,1,0,1,2,2],[5.26,"-"],67.81],["ARE","United Arab Emirates",50.0,[20220217,1,1,1,3,1,1,1,1,2],[10.86,"-"],94.34],["BEL","Belgium",50.0,[20220217,1,2,2,3,0,0,0,3,3],[90.16,"-"],77.51],["DJI","Djibouti",50.0,[20220216,1,1,1,3,1,1,1,1,3],[0.1,"+"],9.12],["EST","Estonia",50.0,[20220211,1,2,2,4,0,0,0,2,2],[414.14,"+"],63.09],["RWA","Rwanda",50.93,[20220214,1,1,1,3,2,2,0,1,3],[0.09,"-"],53.06],["BHR","Bahrain",50.93,[20220214,1,2,2,3,0,1,0,2,4],[262.34,"-"],68.49],["PNG","Papua New Guinea",50.93,[20220207,0,1,1,2,1,0,2,4,3],[2.17,"="],2.6],["LKA","Sri Lanka",52.78,[20220213,1,1,2,4,0,1,1,1,3],[5.69,"+"],65.37],["GUM","Guam",52.78,[20220207,1,2,2,3,0,0,0,4,3],[]],["MLT","Malta",52.78,[20220214,1,2,2,4,0,0,0,3,4],[23.36,"-"],89.21],["GTM","Guatemala",53.24,[20220217,2,2,2,3,1,1,0,1,3],[18.58,"-"],30.14],["DZA","Algeria",54.63,[20220205,1,1,2,4,1,0,0,3,3],[0.96,"-"],13.46],["GIN","Guinea",54.63,[20220214,1,1,1,4,0,2,2,2,3],[0.03,"-"],13.9],["SUR","Suriname",54.63,[20220204,1,2,2,3,0,2,0,2,4],[18.46,"-"],39.61],["SYR","Syria",55.09,[20220207,3,3,1,3,1,2,1,1,3],[0.73,"="],6.36],["BEN","Benin",55.56,[20220219,0,2,2,3,1,1,0,3,4],[0.02,"-"],14.2],["TUN","Tunisia",55.56,[20220207,2,1,2,4,0,2,0,2,3],[21.44,"+"],52.76],["CHE","Switzerland",56.48,[20220211,2,2,2,4,0,0,0,3,2],[208.74,"+"],68.39],["ERI","Eritrea",56.48,[20220208,1,1,2,3,1,2,0,2,3],[0.08,"="]],["ECU","Ecuador",56.48,[20220214,1,1,2,4,2,1,1,1,3],[22.23,"="],75.27],["CRI","Costa Rica",57.41,[20220127,2,2,2,2,0,1,1,2,3],[73.88,"-"],72.91],["BRN","Brunei",57.41,[20220218,3,1,1,2,1,1,0,4,4],[233.32,"-"],91.36],["LTU","Lithuania",57.41,[20220202,2,3,2,4,0,0,0,2,2],[265.01,"-"],69.47],["NLD","Netherlands",58.33,[20220217,0,2,2,4,0,1,1,3,3],[341.09,"-"],71.89],["USA","United States",58.8,[20220215,2,2,2,4,1,1,1,4,3],[33.61,"-"],64.4],["COL","Colombia",59.26,[20220131,1,2,2,3,1,1,0,3,4],[8.75,"-"],64.35],["SWZ","Eswatini",60.19,[20220131,0,2,2,4,1,0,2,1,4],[2.4,"-"],28.67],["SGP","Singapore",60.19,[20220211,1,3,2,4,0,1,0,3,4],[248.95,"+"],88.45],["NZL","New Zealand",61.11,[20220214,1,2,2,4,0,0,1,4,3],[26.59,"+"],77.06],["ALB","Albania",61.11,[20220207,1,1,1,3,1,1,2,3,3],[12.81,"+"],41.22],["MAR","Morocco",61.11,[20220131,1,2,2,4,1,0,0,4,3],[1.77,"-"],62.22],["AUT","Austria",61.11,[20220211,2,3,2,4,1,0,0,2,2],[328.59,"-"],72.16],["BRA","Brazil",61.57,[20220212,2,2,2,4,1,1,2,3,3],[51.95,"-"],71.62],["IRN","Iran",62.04,[20220213,2,3,2,4,0,0,2,3,2],[25.78,"-"],64.67],["HUN","Hungary",62.96,[20220214,0,2,2,2,2,0,2,2,3],[74.58,"-"],63.83],["QAT","Qatar",63.89,[20220207,1,1,1,4,1,1,2,3,2],[18.67,"-"],75.7],["VNM","Vietnam",63.89,[20220214,2,2,2,3,1,1,2,2,3],[33.5,"+"],77.6],["CHN","China",64.35,[20220216,3,2,2,4,1,1,2,2,2],[0.01,"="],85.05],["IRQ","Iraq",64.81,[20220212,1,2,2,3,0,1,2,3,3],[6.13,"-"],15.96],["MYS","Malaysia",64.81,[20220129,3,1,2,4,0,0,2,2,3],[74.89,"+"],78.54],["BRB","Barbados",64.81,[20220125,3,2,2,3,1,2,0,1,3],[117.96,"-"],51.65],["GAB","Gabon",65.74,[20220214,0,2,1,3,1,2,2,4,3],[0.55,"+"],10.28],["MMR","Myanmar",65.74,[20220213,3,1,2,4,1,2,2,2,4],[4.15,"+"],36.03],["HKG","Hong Kong",65.74,[20220215,2,2,1,4,1,1,1,3,3],[9.85,"+"],66.08],["IDN","Indonesia",66.2,[20220131,1,1,2,3,2,1,2,3,3],[19.93,"+"],50.35],["RKS","Kosovo",66.67,[20220218,2,1,1,4,2,0,2,2,3],[24.21,"-"],45.56],["PER","Peru",66.67,[20220214,2,2,2,4,1,0,2,3,4],[24.63,"-"],69.44],["BGD","Bangladesh",68.52,[20220212,3,1,2,4,1,1,1,2,4],[2.55,"-"],44.56],["OMN","Oman",69.44,[20220131,2,2,2,4,1,1,1,3,1],[30.94,"="],57.04],["FRA","France",69.44,[20220211,1,2,2,2,2,0,2,3,2],[145.2,"-"],77.31],["TKM","Turkmenistan",69.44,[20220208,0,3,2,3,2,0,2,4,3],[],52.41],["AGO","Angola",70.37,[20220207,0,3,2,3,1,1,2,3,3],[0.05,"="],14.99],["SVN","Slovenia",71.3,[20220128,1,3,2,4,2,1,1,2,3],[246.44,"-"],58.57],["GRC","Greece",72.22,[20220214,1,2,2,4,2,2,1,2,3],[174.38,"+"],71.78],["SLB","Solomon Islands",72.69,[20220206,3,1,2,4,1,2,2,4,3],[26.27,"-"],11.36],["FJI","Fiji",74.07,[20220207,2,3,2,3,1,0,2,3,3],[2.36,"+"],68.33],["JAM","Jamaica",74.07,[20220130,1,2,2,4,1,2,2,2,3],[3.4,"-"],21.63],["SYC","Seychelles",75.0,[20220214,2,2,2,4,1,2,2,1,3],[75.68,"-"],79.46],["UKR","Ukraine",75.0,[20220214,3,1,2,3,2,1,2,3,3],[72.44,"-"],34.79],["CAN","Canada",76.39,[20220211,3,3,2,4,1,1,2,4,3],[20.32,"-"],80.74],["ITA","Italy",76.85,[20220211,2,3,2,1,2,2,2,3,2],[91.2,"-"],78.1],["KAZ","Kazakhstan",76.85,[20220124,1,2,2,4,2,3,2,3,3],[6.84,"-"],46.93],["BLZ","Belize",77.78,[20220207,2,2,2,4,1,2,2,2,4],[32.19,"-"],50.84],["GUY","Guyana",77.78,[20220208,1,3,2,4,2,2,0,4,3],[7.79,"-"],40.8],["PHL","Philippines",78.24,[20220214,3,3,2,4,2,2,2,3,4],[2.38,"-"],56.01],["BTN","Bhutan",78.7,[20220131,3,2,2,4,1,3,2,2,4],[41.58,"+"],73.4],["LAO","Laos",78.7,[20220214,2,2,2,3,2,0,2,4,3],[4.27,"-"],57.59],["KIR","Kiribati",81.48,[20220214,3,3,2,4,2,2,2,2,4],[59.08,"-"],37.91],["IND","India",81.94,[20220207,3,3,2,4,2,3,2,2,3],[2.24,"-"],55.16],["DEU","Germany",84.26,[20220211,2,3,2,4,2,1,2,3,2],[207.53,"-"],74.44],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[55.54,"-"],44.49]];