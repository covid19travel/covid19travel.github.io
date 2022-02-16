const dataUpdate="2022.02.16";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["BFA","Burkina Faso",2.78,[20220129,0,0,0,0,0,0,0,1,4],[0.03,"="],3.59],["NIC","Nicaragua",8.33,[20220124,0,0,0,0,0,0,0,1,1],[0.22,"+"],55.67],["YEM","Yemen",12.04,[20220124,1,0,0,0,0,0,0,1,1],[0.07,"-"],1.21],["CIV","Cote d'Ivoire",13.89,[20220213,0,0,0,0,0,0,0,1,4],[0.14,"-"],11.2],["GMB","Gambia",13.89,[20220215,0,0,0,0,0,0,0,1,3],[0.18,"="],12.25],["BWA","Botswana",13.89,[20220212,0,0,0,0,0,0,0,1,3],[20.19,"="],46.92],["TLS","Timor-Leste",13.89,[20220117,0,0,0,0,0,0,0,1,3],[12.23,"-"],42.14],["TZA","Tanzania",13.89,[20220213,0,0,0,0,0,0,0,1,1],[0.08,"+"],2.79],["DNK","Denmark",16.67,[20220214,0,0,0,0,0,0,0,2,0],[769.91,"-"],81.53],["PSE","Palestine",16.67,[20220207,0,0,0,0,0,0,0,2,4],[],29.3],["SDN","Sudan",16.67,[20220207,1,1,0,0,0,0,0,2,4],[0.2,"-"],4.42],["NER","Niger",16.67,[20220207,0,0,0,0,0,0,0,2,3],[0.02,"+"],4.08],["TJK","Tajikistan",18.52,[20220207,1,1,0,0,0,0,0,2,3],[0.05,"+"],39.71],["AFG","Afghanistan",19.44,[20220131,0,2,1,0,1,0,0,2,3],[1.35,"-"],10.15],["BDI","Burundi",19.44,[20220207,0,0,0,0,0,0,2,1,2],[0.2,"+"],0.07],["SWE","Sweden",19.44,[20220211,0,0,0,0,0,0,0,3,0],[77.27,"-"],74.37],["BOL","Bolivia",21.3,[20220207,2,1,0,0,0,0,0,1,4],[13.71,"+"],46.07],["SEN","Senegal",21.3,[20220214,1,1,0,0,0,0,0,1,3],[0.17,"="],5.86],["VUT","Vanuatu",22.22,[20220214,0,0,0,0,0,0,0,4,0],[0.0,"="],23.47],["BLR","Belarus",23.15,[20220207,0,1,0,0,0,0,0,3,1],[82.82,"-"],46.31],["IRL","Ireland",23.15,[20220211,1,0,0,0,0,0,0,3,2],[72.84,"-"],79.08],["MNG","Mongolia",23.61,[20220214,0,0,1,2,0,0,1,1,4],[119.34,"+"],65.23],["NOR","Norway",25.0,[20220211,1,1,0,0,0,1,0,1,2],[346.16,"-"],73.39],["GRL","Greenland",25.0,[20220215,1,1,0,0,0,1,0,1,2],[46.3,"-"],67.65],["FRO","Faeroe Islands",25.93,[20220215,1,0,1,2,0,0,0,0,0],[1282.01,"-"],83.34],["CUB","Cuba",26.85,[20220207,1,1,0,0,1,0,0,1,3],[7.85,"-"],87.11],["ZMB","Zambia",27.78,[20220214,0,0,1,3,0,0,0,1,3],[1.74,"-"],9.34],["TWN","Taiwan",27.78,[20220205,1,2,0,0,0,0,0,2,3],[0.26,"="],74.21],["NAM","Namibia",28.7,[20220205,0,1,1,2,0,0,0,1,3],[2.03,"-"],14.11],["VEN","Venezuela",28.7,[20220207,1,0,0,0,1,0,0,3,3],[4.52,"-"],49.77],["URY","Uruguay",28.7,[20220208,0,1,1,0,0,0,0,3,2],[194.2,"-"],77.6],["SRB","Serbia",28.7,[20220124,0,0,1,2,0,1,0,1,3],[100.75,"-"],47.38],["MDG","Madagascar",29.17,[20220214,0,0,2,3,0,2,0,1,3],[0.73,"="],3.26],["SLE","Sierra Leone",29.63,[20220214,1,1,0,0,1,0,0,2,3],[0.04,"="],9.06],["LBR","Liberia",29.63,[20220214,1,1,1,0,0,0,0,2,4],[0.04,"="],20.94],["CHL","Chile",30.09,[20220212,1,1,1,2,0,0,1,2,3],[183.72,"-"],88.97],["PAK","Pakistan",30.09,[20220130,2,1,1,2,0,1,0,1,4],[1.38,"-"],41.54],["CMR","Cameroon",30.56,[20220207,0,0,1,3,0,0,0,4,3],[0.54,"="],2.44],["NGA","Nigeria",30.56,[20220131,0,0,1,3,0,0,0,2,3],[0.02,"="],2.58],["PRT","Portugal",31.48,[20220211,0,1,1,2,0,0,0,2,3],[207.51,"-"],91.35],["MAC","Macao",32.41,[20220124,1,1,1,0,0,0,0,3,2],[],73.4],["KEN","Kenya",32.41,[20211219,0,2,1,2,0,0,0,1,4],[0.08,"-"],12.96],["COD","Democratic Republic of Congo",33.33,[20220214,0,1,1,0,0,2,1,1,4],[0.02,"="],0.27],["JOR","Jordan",34.26,[20220207,0,1,1,2,0,0,0,3,2],[188.31,"-"],41.81],["HND","Honduras",34.26,[20220207,0,2,1,0,0,2,0,1,3],[0.0,"="],43.72],["ARG","Argentina",34.26,[20220124,0,1,2,1,0,0,0,2,4],[37.33,"-"],77.9],["UGA","Uganda",34.26,[20220207,0,1,1,2,1,0,0,1,4],[0.13,"-"],4.71],["PRY","Paraguay",35.19,[20220214,1,1,1,3,0,0,0,1,2],[31.41,"-"],43.57],["AND","Andorra",35.19,[20220214,1,1,1,2,0,0,0,2,2],[102.25,"+"],68.65],["SLV","El Salvador",35.19,[20220124,2,0,2,1,0,0,0,1,4],[27.92,"="],64.94],["MEX","Mexico",35.19,[20220214,0,2,1,0,1,1,2,1,4],[14.78,"+"],60.26],["MCO","Monaco",35.19,[20220214,1,1,0,2,0,0,1,2,4],[74.63,"-"],64.95],["SOM","Somalia",35.19,[20220207,0,1,1,3,0,1,0,1,3],[0.05,"+"],5.32],["LBN","Lebanon",35.19,[20220214,0,1,1,1,1,1,0,1,4],[82.31,"-"],30.99],["TCD","Chad",35.19,[20220122,1,1,1,3,0,0,0,1,4],[0.0,"="],0.82],["KHM","Cambodia",35.65,[20220207,1,2,1,3,0,0,0,2,3],[1.84,"+"],81.44],["SSD","South Sudan",36.11,[20220214,1,0,1,0,0,2,1,1,3],[0.05,"="],2.44],["MWI","Malawi",36.11,[20220214,1,1,1,2,0,1,0,1,3],[0.14,"="],4.01],["CYP","Cyprus",36.11,[20220214,1,1,1,2,0,1,0,1,3],[210.87,"-"],71.65],["DMA","Dominica",37.04,[20220210,3,1,0,0,1,0,0,2,3],[118.28,"+"],40.53],["SMR","San Marino",37.96,[20220124,1,1,1,4,0,0,0,1,3],[198.72,"+"],64.03],["ISL","Iceland",37.96,[20220131,1,1,1,3,0,0,0,2,2],[603.76,"+"],78.13],["DOM","Dominican Republic",37.96,[20220124,0,1,2,2,1,1,0,1,3],[7.6,"-"],53.33],["ABW","Aruba",37.96,[20220131,0,0,1,4,0,2,0,1,2],[20.61,"-"],74.82],["MLI","Mali",38.89,[20220215,0,2,2,3,0,0,0,1,3],[0.04,"="],3.02],["MOZ","Mozambique",38.89,[20220214,0,1,1,4,0,1,0,2,3],[0.15,"-"],28.05],["VIR","United States Virgin Islands",38.89,[20220202,1,1,1,3,0,1,0,1,2],[]],["TUR","Turkey",39.81,[20220208,0,1,1,0,1,0,2,1,4],[107.32,"-"],61.92],["ZWE","Zimbabwe",40.74,[20220130,0,0,1,3,1,2,0,1,3],[0.96,"-"],22.2],["ETH","Ethiopia",40.74,[20220208,1,1,1,3,1,0,0,1,3],[0.11,"="],1.36],["CZE","Czech Republic",41.67,[20220214,1,2,1,3,0,0,0,2,2],[237.37,"+"],63.65],["ZAF","South Africa",41.67,[20220207,1,2,1,2,1,0,0,1,3],[4.64,"+"],28.95],["FIN","Finland",41.67,[20220214,1,1,2,3,1,0,0,2,1],[114.86,"-"],75.82],["BIH","Bosnia and Herzegovina",41.67,[20220214,1,1,1,3,1,1,1,1,3],[31.31,"-"],25.93],["GBR","United Kingdom",42.13,[20220204,1,2,2,3,1,0,0,2,3],[88.63,"-"],71.51],["SVK","Slovak Republic",42.59,[20220210,0,0,2,4,0,1,0,2,3],[386.49,"-"],49.99],["BHS","Bahamas",42.59,[20220127,3,1,1,3,0,0,0,1,4],[5.05,"-"],38.51],["HTI","Haiti",43.52,[20220204,0,1,1,4,1,1,0,1,3],[0.22,"+"],0.81],["EGY","Egypt",43.52,[20220202,1,1,2,4,0,0,0,1,4],[2.11,"-"],27.6],["MRT","Mauritania",43.52,[20220214,1,1,2,4,0,0,0,1,3],[0.21,"-"],21.14],["TGO","Togo",43.52,[20220123,1,2,2,3,0,2,0,2,4],[0.14,"+"],12.68],["AZE","Azerbaijan",43.52,[20220121,1,1,2,3,0,0,0,2,2],[59.51,"-"],46.62],["PRI","Puerto Rico",43.52,[20220211,1,1,1,0,0,0,2,3,2],[]],["GHA","Ghana",43.52,[20220206,0,2,2,4,0,0,0,1,4],[0.11,"+"],14.4],["HRV","Croatia",43.52,[20220214,1,1,1,3,1,0,0,2,2],[108.51,"-"],54.39],["MUS","Mauritius",43.52,[20220207,0,2,2,3,0,0,0,2,3],[0.0,"="],71.45],["LBY","Libya",44.44,[20220214,1,1,1,4,1,1,0,2,3],[40.18,"-"],15.08],["GEO","Georgia",44.44,[20220214,1,2,2,2,0,0,0,2,4],[466.93,"-"],31.03],["BGR","Bulgaria",44.44,[20220206,1,2,2,3,0,0,0,1,2],[78.03,"-"],29.44],["BMU","Bermuda",44.44,[20220129,1,1,1,3,0,1,0,3,3],[43.12,"="],74.15],["CAF","Central African Republic",44.44,[20220207,0,1,1,0,1,2,1,2,3],[0.49,"="],12.09],["UZB","Uzbekistan",45.37,[20220206,1,0,2,3,0,0,1,3,3],[1.56,"-"],37.12],["LSO","Lesotho",45.37,[20220208,0,2,2,2,0,2,0,1,3],[0.56,"="],33.7],["POL","Poland",45.37,[20220211,2,2,1,3,0,0,0,2,3],[72.34,"-"],58.24],["KOR","South Korea",46.3,[20220213,0,2,2,4,0,0,0,2,3],[117.48,"+"],86.25],["LUX","Luxembourg",46.3,[20220214,1,1,1,3,1,0,0,3,2],[121.14,"-"],71.12],["KGZ","Kyrgyz Republic",47.22,[20220201,3,0,2,4,0,0,-1,1,2],[1.1,"-"],16.99],["TON","Tonga",47.22,[20220131,1,0,1,3,0,2,0,4,2],[17.03,"-"],60.59],["LIE","Liechtenstein",47.22,[20220206,1,1,1,4,0,1,0,3,3],[304.24,"-"],68.59],["CPV","Cape Verde",47.22,[20220206,0,2,2,0,0,1,2,1,3],[0.9,"-"],51.82],["JPN","Japan",47.22,[20220214,1,1,1,1,0,1,1,4,1],[66.15,"-"],79.36],["ROU","Romania",47.22,[20220214,2,1,1,2,0,2,1,1,3],[104.87,"-"],41.96],["MDA","Moldova",47.22,[20220214,2,1,2,4,0,0,0,1,2],[55.81,"-"],25.44],["COG","Congo",48.15,[20220131,0,1,1,3,0,2,2,2,3],[0.21,"="],10.32],["TTO","Trinidad and Tobago",48.15,[20220128,2,2,2,3,0,0,0,1,3],[45.96,"-"],49.76],["NPL","Nepal",48.15,[20220214,1,1,2,3,1,1,2,1,4],[2.66,"-"],53.25],["PAN","Panama",48.15,[20220131,2,1,1,4,0,1,0,2,4],[43.57,"-"],57.65],["THA","Thailand",48.15,[20220205,1,2,1,2,0,1,1,2,1],[22.11,"+"],70.43],["ISR","Israel",48.15,[20220212,2,2,2,0,0,0,0,4,2],[310.04,"-"],65.81],["LVA","Latvia",48.15,[20220215,1,3,2,3,0,0,0,1,3],[522.41,"-"],69.37],["RUS","Russia",48.61,[20220206,0,2,1,2,0,2,2,3,3],[129.31,"+"],48.88],["ESP","Spain",49.07,[20220208,1,1,2,4,0,0,0,3,4],[81.88,"-"],82.12],["SAU","Saudi Arabia",49.07,[20220123,1,1,1,3,1,0,1,2,3],[6.82,"-"],67.81],["DJI","Djibouti",49.07,[20220122,1,1,2,4,0,0,0,3,2],[0.14,"="],9.12],["KWT","Kuwait",49.07,[20220206,1,1,2,2,1,0,0,3,2],[63.33,"-"],77.97],["BEL","Belgium",50.0,[20220214,1,2,2,3,0,0,0,3,3],[118.84,"-"],77.3],["EST","Estonia",50.0,[20220211,1,2,2,4,0,0,0,2,2],[378.66,"-"],63.0],["BHR","Bahrain",50.93,[20220214,1,2,2,3,0,1,0,2,4],[320.86,"-"],68.49],["PNG","Papua New Guinea",50.93,[20220207,0,1,1,2,1,0,2,4,3],[1.41,"="],2.6],["RWA","Rwanda",50.93,[20220214,1,1,1,3,2,2,0,1,3],[0.16,"-"],52.34],["LKA","Sri Lanka",52.78,[20220213,1,1,2,4,0,1,1,1,3],[5.75,"="],65.32],["GUM","Guam",52.78,[20220207,1,2,2,3,0,0,0,4,3],[]],["MLT","Malta",52.78,[20220214,1,2,2,4,0,0,0,3,4],[27.5,"-"],89.08],["GTM","Guatemala",53.24,[20220213,2,2,2,3,1,1,0,1,3],[19.08,"+"],30.06],["BEN","Benin",53.7,[20220206,1,2,2,3,1,1,0,1,3],[0.06,"="],14.2],["DZA","Algeria",54.63,[20220205,1,1,2,4,1,0,0,3,3],[1.13,"-"],13.46],["SUR","Suriname",54.63,[20220204,1,2,2,3,0,2,0,2,4],[26.67,"-"],39.61],["GIN","Guinea",54.63,[20220214,1,1,1,4,0,2,2,2,3],[0.05,"-"],13.9],["SYR","Syria",55.09,[20220207,3,3,1,3,1,2,1,1,3],[0.73,"-"],6.36],["TUN","Tunisia",55.56,[20220207,2,1,2,4,0,2,0,2,3],[21.54,"-"],52.71],["AUS","Australia",55.56,[20220212,0,2,1,2,1,2,2,3,3],[88.8,"-"],79.05],["ERI","Eritrea",56.48,[20220208,1,1,2,3,1,2,0,2,3],[0.11,"-"]],["ECU","Ecuador",56.48,[20220214,1,1,2,4,2,1,1,1,3],[25.24,"+"],75.11],["CHE","Switzerland",56.48,[20220211,2,2,2,4,0,0,0,3,2],[242.67,"-"],68.31],["LTU","Lithuania",57.41,[20220202,2,3,2,4,0,0,0,2,2],[325.51,"-"],69.41],["CRI","Costa Rica",57.41,[20220127,2,2,2,2,0,1,1,2,3],[87.45,"-"],72.91],["BRN","Brunei",57.41,[20220213,3,1,1,2,1,1,0,4,4],[204.25,"+"],91.36],["NLD","Netherlands",58.33,[20220211,0,2,2,4,0,1,1,3,3],[411.59,"-"],71.86],["ARE","United Arab Emirates",58.33,[20220116,2,1,1,3,1,0,2,3,2],[13.55,"-"],94.14],["USA","United States",58.8,[20220215,2,2,2,4,1,1,1,4,3],[41.14,"-"],64.25],["COL","Colombia",59.26,[20220131,1,2,2,3,1,1,0,3,4],[11.64,"-"],63.93],["SWZ","Eswatini",60.19,[20220131,0,2,2,4,1,0,2,1,4],[2.43,"-"],28.67],["SGP","Singapore",60.19,[20220211,1,3,2,4,0,1,0,3,4],[193.78,"+"],88.45],["MAR","Morocco",61.11,[20220131,1,2,2,4,1,0,0,4,3],[2.62,"-"],62.22],["ALB","Albania",61.11,[20220207,1,1,1,3,1,1,2,3,3],[13.78,"-"],41.05],["NZL","New Zealand",61.11,[20220214,1,2,2,4,0,0,1,4,3],[14.83,"+"],76.99],["AUT","Austria",61.11,[20220211,2,3,2,4,1,0,0,2,2],[338.0,"-"],72.16],["BRA","Brazil",61.57,[20220212,2,2,2,4,1,1,2,3,3],[59.41,"-"],71.3],["IRN","Iran",62.04,[20220213,2,3,2,4,0,0,2,3,2],[34.43,"-"],64.54],["HUN","Hungary",62.96,[20220214,0,2,2,2,2,0,2,2,3],[94.45,"-"],63.76],["VNM","Vietnam",63.89,[20220214,2,2,2,3,1,1,2,2,3],[28.09,"+"],77.6],["QAT","Qatar",63.89,[20220207,1,1,1,4,1,1,2,3,2],[22.73,"-"],75.7],["MYS","Malaysia",64.81,[20220129,3,1,2,4,0,0,2,2,3],[63.77,"+"],78.52],["BRB","Barbados",64.81,[20220125,3,2,2,3,1,2,0,1,3],[146.05,"-"],51.58],["IRQ","Iraq",64.81,[20220212,1,2,2,3,0,1,2,3,3],[8.07,"-"],15.96],["MMR","Myanmar",65.74,[20220213,3,1,2,4,1,2,2,2,4],[2.96,"+"],35.06],["GAB","Gabon",65.74,[20220214,0,2,1,3,1,2,2,4,3],[0.54,"="],10.28],["HKG","Hong Kong",65.74,[20220215,2,2,1,4,1,1,1,3,3],[7.48,"+"],66.08],["IDN","Indonesia",66.2,[20220131,1,1,2,3,2,1,2,3,3],[11.89,"-"],49.45],["RKS","Kosovo",66.67,[20220211,2,1,1,4,2,0,2,2,3],[36.01,"-"],45.5],["PER","Peru",66.67,[20220214,2,2,2,4,1,0,2,3,4],[31.3,"-"],69.28],["BGD","Bangladesh",68.52,[20220212,3,1,2,4,1,1,1,2,4],[3.46,"-"],35.91],["TKM","Turkmenistan",69.44,[20220208,0,3,2,3,2,0,2,4,3],[],52.41],["OMN","Oman",69.44,[20220131,2,2,2,4,1,1,1,3,1],[34.38,"-"],57.04],["FRA","France",69.44,[20220211,1,2,2,2,2,0,2,3,2],[155.77,"-"],77.19],["CHN","China",69.91,[20220126,3,2,2,4,1,3,2,2,2],[0.01,"="],85.05],["AGO","Angola",70.37,[20220207,0,3,2,3,1,1,2,3,3],[0.06,"+"],14.99],["SVN","Slovenia",71.3,[20220128,1,3,2,4,2,1,1,2,3],[326.38,"-"],58.5],["GRC","Greece",72.22,[20220214,1,2,2,4,2,2,1,2,3],[172.73,"-"],71.59],["SLB","Solomon Islands",72.69,[20220206,3,1,2,4,1,2,2,4,3],[33.09,"+"],11.36],["FJI","Fiji",74.07,[20220207,2,3,2,3,1,0,2,3,3],[2.44,"="],68.33],["JAM","Jamaica",74.07,[20220130,1,2,2,4,1,2,2,2,3],[4.26,"-"],21.49],["UKR","Ukraine",75.0,[20220214,3,1,2,3,2,1,2,3,3],[79.24,"-"],34.59],["SYC","Seychelles",75.0,[20220214,2,2,2,4,1,2,2,1,3],[93.26,"+"],79.46],["CAN","Canada",76.39,[20220211,3,3,2,4,1,1,2,4,3],[22.86,"-"],80.53],["ITA","Italy",76.85,[20220211,2,3,2,1,2,2,2,3,2],[103.89,"-"],77.87],["KAZ","Kazakhstan",76.85,[20220124,1,2,2,4,2,3,2,3,3],[11.03,"-"],46.77],["BLZ","Belize",77.78,[20220207,2,2,2,4,1,2,2,2,4],[40.85,"-"],50.69],["GUY","Guyana",77.78,[20220208,1,3,2,4,2,2,0,4,3],[11.37,"-"],40.52],["PHL","Philippines",78.24,[20220214,3,3,2,4,2,2,2,3,4],[2.91,"-"],55.5],["BTN","Bhutan",78.7,[20220131,3,2,2,4,1,3,2,2,4],[26.98,"+"],73.24],["LAO","Laos",78.7,[20220214,2,2,2,3,2,0,2,4,3],[5.07,"+"],57.44],["KIR","Kiribati",81.48,[20220214,3,3,2,4,2,2,2,2,4],[85.39,"-"],37.91],["IND","India",81.94,[20220207,3,3,2,4,2,3,2,2,3],[3.24,"-"],54.51],["DEU","Germany",84.26,[20220211,2,3,2,4,2,1,2,3,2],[189.69,"-"],74.21],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[60.89,"-"],44.47]];