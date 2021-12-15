const dataUpdate="2021.12.15";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["NIC","Nicaragua",8.33,[20211212,0,0,0,0,0,0,0,1,1],[0.14,"-"],37.9],["BDI","Burundi",8.33,[20211206,0,0,0,0,0,0,0,1,1],[0.44,"-"],0.02],["TZA","Tanzania",8.33,[20211206,0,0,0,0,0,0,0,1,1],[0.01,"="],1.75],["YEM","Yemen",12.04,[20211129,1,0,0,0,0,0,0,1,1],[0.02,"="],1.2],["BFA","Burkina Faso",13.89,[20211213,0,0,0,0,0,0,0,1,4],[0.23,"="],1.51],["GMB","Gambia",13.89,[20211213,0,0,0,0,0,0,0,1,3],[0.28,"+"],9.18],["SDN","Sudan",13.89,[20211206,0,0,0,-1,0,0,0,1,4],[0.31,"+"],2.75],["BWA","Botswana",13.89,[20211211,0,0,0,0,0,0,0,1,3],[12.71,"+"],22.03],["MDG","Madagascar",13.89,[20211213,0,0,0,0,0,2,0,1,4],[0.51,"="],1.9],["NER","Niger",16.67,[20211213,0,0,2,0,0,0,0,2,3],[0.04,"="],1.85],["TUN","Tunisia",16.67,[20211129,0,0,0,0,0,0,0,2,3],[1.46,"+"],45.06],["CIV","Cote d'Ivoire",17.59,[20211205,0,0,0,0,0,1,0,1,4],[0.03,"-"],5.57],["VUT","Vanuatu",19.44,[20211129,0,0,0,0,0,0,0,3,1],[0.05,"+"],15.06],["BLR","Belarus",19.44,[20211205,0,0,0,0,0,0,0,3,1],[15.69,"-"],30.35],["SWE","Sweden",19.44,[20211204,0,0,0,0,0,0,0,3,0],[27.06,"+"],71.74],["TWN","Taiwan",20.37,[20211213,1,0,0,0,0,0,0,2,3],[0.04,"-"],63.54],["CUB","Cuba",21.3,[20211203,1,1,0,0,0,0,0,1,3],[0.61,"-"],82.73],["SEN","Senegal",21.3,[20211213,1,1,0,0,0,0,0,1,3],[0.05,"="],5.45],["SLB","Solomon Islands",22.22,[20211213,0,0,0,0,0,0,0,4,0],[0.0,"="],7.43],["TCD","Chad",22.22,[20211205,0,0,0,3,0,0,0,1,4],[0.0,"="],0.48],["CMR","Cameroon",22.22,[20211213,0,0,1,3,0,0,0,1,3],[0.28,"+"],2.25],["KIR","Kiribati",22.22,[20211206,0,0,0,0,0,0,0,4,0],[0.0,"="],18.68],["CAF","Central African Republic",24.07,[20211211,0,0,0,0,0,2,0,2,3],[0.65,"="],6.81],["PSE","Palestine",25.0,[20211212,0,0,0,0,0,0,2,2,4],[],26.88],["LIE","Liechtenstein",25.0,[20211129,1,1,1,0,0,1,0,3,-1],[171.98,"-"],66.45],["NAM","Namibia",25.0,[20211208,0,0,1,2,0,0,0,1,3],[17.09,"-"],12.33],["LBR","Liberia",26.85,[20211213,1,1,1,0,0,0,0,1,4],[0.04,"="],11.11],["PRI","Puerto Rico",26.85,[20211213,1,1,1,0,0,0,0,1,3],[]],["KWT","Kuwait",26.85,[20211213,2,0,0,0,0,0,0,3,2],[0.79,"+"],73.63],["SLV","El Salvador",27.78,[20211212,0,0,2,1,0,0,0,1,2],[3.22,"+"],63.16],["AFG","Afghanistan",27.78,[20211206,0,2,2,0,2,0,0,2,3],[0.06,"+"],8.95],["HUN","Hungary",27.78,[20211210,0,0,1,3,0,0,0,1,2],[60.09,"-"],61.24],["SLE","Sierra Leone",29.63,[20211213,1,1,0,0,1,0,0,2,3],[0.03,"-"],4.73],["COG","Congo",29.63,[20211205,0,0,1,3,0,1,0,1,3],[0.0,"-"],2.4],["TJK","Tajikistan",29.63,[20211206,1,1,0,0,0,0,0,4,3],[0.0,"="],26.59],["MEX","Mexico",31.48,[20211206,0,1,1,0,1,1,2,1,2],[1.88,"+"],50.84],["LBN","Lebanon",31.48,[20211205,0,0,1,1,1,1,0,1,1],[22.99,"-"],25.92],["URY","Uruguay",31.48,[20211126,0,1,1,2,0,0,0,2,2],[6.74,"+"],76.52],["PAK","Pakistan",31.94,[20211213,0,1,1,2,0,1,0,3,4],[0.14,"="],25.75],["BHR","Bahrain",32.41,[20211209,0,1,1,0,0,1,0,3,3],[2.14,"+"],66.74],["KEN","Kenya",32.41,[20211121,0,2,1,2,0,0,0,1,4],[0.34,"+"],5.93],["MAC","Macao",32.41,[20211124,1,1,1,0,0,0,0,3,2],[],68.4],["MDA","Moldova",32.41,[20211208,1,1,0,2,0,0,0,3,2],[11.05,"-"],23.84],["PHL","Philippines",33.33,[20211203,3,2,1,0,0,1,0,3,4],[0.22,"+"],37.83],["SRB","Serbia",33.33,[20211213,1,0,1,2,0,1,0,2,3],[15.78,"-"],46.06],["BOL","Bolivia",33.8,[20211130,2,1,1,1,1,0,0,2,4],[10.82,"+"],36.92],["GRL","Greenland",34.26,[20211212,1,1,1,0,0,1,1,1,2],[53.6,"-"],66.42],["VEN","Venezuela",34.26,[20211208,1,0,0,0,1,0,1,3,2],[1.82,"-"],34.34],["JOR","Jordan",34.26,[20211204,0,1,1,2,0,0,0,3,2],[44.15,"-"],37.34],["GUM","Guam",34.26,[20211205,-1,1,1,4,0,0,0,1,3],[]],["NOR","Norway",34.72,[20211203,1,1,1,3,0,0,0,3,2],[89.58,"+"],70.99],["PRY","Paraguay",35.19,[20211210,1,1,1,3,0,0,0,1,3],[0.9,"+"],38.35],["CZE","Czech Republic",35.19,[20211213,1,1,1,3,0,0,0,1,2],[116.95,"-"],60.74],["SSD","South Sudan",35.19,[20211129,1,1,0,4,0,0,0,2,2],[0.1,"="],1.56],["SOM","Somalia",35.19,[20211129,0,1,1,3,0,1,0,1,3],[0.02,"="],4.06],["MNG","Mongolia",37.04,[20211213,1,2,1,3,0,1,1,1,4],[7.23,"-"],64.78],["FIN","Finland",37.04,[20211213,1,0,1,3,0,0,0,3,1],[27.98,"+"],73.61],["NGA","Nigeria",37.96,[20211213,0,0,1,3,0,2,0,2,3],[0.26,"+"],1.88],["CPV","Cape Verde",37.96,[20211129,0,1,1,0,0,1,2,1,2],[1.26,"-"],44.53],["SMR","San Marino",37.96,[20211213,1,1,1,4,0,0,0,1,3],[173.04,"+"],69.83],["ISL","Iceland",38.89,[20211206,2,1,1,2,0,0,0,2,2],[39.48,"+"],82.34],["VIR","United States Virgin Islands",38.89,[20211201,1,1,1,3,0,1,0,1,3],[]],["TGO","Togo",38.89,[20211115,0,0,2,3,0,0,1,1,4],[0.16,"-"],9.55],["IRQ","Iraq",38.89,[20211213,1,1,1,3,0,1,0,1,3],[1.15,"-"],12.53],["LBY","Libya",38.89,[20211205,0,0,2,4,0,0,0,2,3],[7.19,"+"],10.79],["DZA","Algeria",39.81,[20211128,0,1,2,4,0,0,0,1,3],[0.47,"+"],12.08],["MWI","Malawi",39.81,[20211212,1,1,1,2,0,2,0,1,2],[0.45,"+"],3.23],["COD","Democratic Republic of Congo",39.81,[20211213,0,1,1,3,0,2,2,1,3],[0.11,"-"],0.08],["THA","Thailand",40.28,[20211214,1,1,1,2,0,1,2,3,4],[5.35,"+"],61.95],["GHA","Ghana",40.74,[20211122,0,2,2,3,0,0,0,1,4],[0.14,"="],2.65],["FRO","Faeroe Islands",40.74,[20211210,1,1,2,3,0,0,0,1,0],[123.96,"-"],77.76],["AZE","Azerbaijan",40.74,[20211130,1,1,-1,2,0,0,1,4,2],[10.45,"-"],45.21],["MCO","Monaco",40.74,[20211212,1,1,2,3,0,0,0,1,3],[62.62,"-"],58.98],["HRV","Croatia",40.74,[20211213,1,1,1,3,0,0,0,3,1],[78.99,"-"],50.14],["POL","Poland",41.67,[20211210,1,1,1,3,0,1,0,2,3],[57.77,"-"],54.79],["KOR","South Korea",41.67,[20211213,0,2,1,4,0,0,0,3,3],[13.1,"+"],81.49],["ABW","Aruba",41.67,[20211209,1,0,1,4,0,2,0,1,2],[21.68,"+"],73.2],["DOM","Dominican Republic",41.67,[20211126,1,1,2,2,1,1,0,1,3],[2.26,"+"],51.65],["BHS","Bahamas",41.67,[20211213,1,1,1,3,0,1,1,1,4],[2.22,"-"],36.2],["TLS","Timor-Leste",42.13,[20211205,0,2,2,3,2,1,0,1,3],[0.01,"="],36.44],["EST","Estonia",42.59,[20211212,0,1,2,4,0,0,0,2,2],[36.37,"+"],60.59],["ARG","Argentina",42.59,[20211203,1,1,1,1,1,1,1,2,3],[6.41,"+"],68.18],["RKS","Kosovo",42.59,[20211206,1,1,1,3,0,2,0,1,3],[0.55,"="],43.41],["KGZ","Kyrgyz Republic",42.59,[20211211,1,0,2,4,1,0,0,1,2],[0.69,"-"],14.31],["BMU","Bermuda",42.59,[20211121,1,1,1,3,0,2,0,1,3],[7.11,"+"],72.52],["MLT","Malta",43.52,[20211214,1,1,1,4,0,0,0,3,4],[20.16,"+"],84.11],["ETH","Ethiopia",43.52,[20211212,1,1,1,3,1,0,0,2,3],[0.14,"+"],1.23],["DJI","Djibouti",43.52,[20211213,1,1,-1,4,1,0,0,3,4],[0.09,"="],2.6],["PRT","Portugal",43.52,[20211203,0,2,2,2,0,0,0,3,2],[38.91,"+"],88.87],["LVA","Latvia",43.52,[20211206,1,1,1,4,1,0,0,1,3],[35.79,"+"],66.11],["EGY","Egypt",43.52,[20211206,1,1,2,4,0,0,0,1,3],[0.82,"+"],16.85],["ZMB","Zambia",43.52,[20211129,1,1,1,3,1,0,0,2,3],[1.03,"+"],4.52],["ESP","Spain",43.98,[20211203,1,2,2,3,0,0,0,3,3],[36.47,"-"],80.74],["CHL","Chile",43.98,[20211212,1,1,1,3,0,0,2,4,3],[7.41,"-"],85.01],["SGP","Singapore",44.44,[20211213,1,1,1,4,0,1,0,2,4],[8.68,"-"],87.0],["BIH","Bosnia and Herzegovina",44.44,[20211129,1,1,1,3,0,1,1,1,2],[14.84,"+"],22.08],["MRT","Mauritania",44.44,[20211213,0,1,1,3,1,2,1,1,3],[0.79,"+"],14.78],["DNK","Denmark",44.44,[20211213,1,2,2,2,0,0,0,2,2],[118.19,"+"],77.35],["BGD","Bangladesh",44.44,[20211206,1,1,1,2,1,1,0,2,4],[0.17,"="],26.06],["MLI","Mali",44.44,[20211213,1,2,2,3,0,0,0,1,3],[0.43,"-"],1.67],["UZB","Uzbekistan",44.44,[20211207,1,0,1,3,0,1,1,3,3],[0.59,"-"],17.33],["ZAF","South Africa",45.37,[20211205,1,1,1,2,1,2,0,1,3],[36.95,"+"],25.67],["GTM","Guatemala",45.37,[20211206,2,2,2,-1,1,1,0,3,3],[1.67,"-"],23.92],["ALB","Albania",45.37,[20211213,1,1,1,3,0,2,0,2,3],[9.96,"-"],34.65],["LTU","Lithuania",46.3,[20211201,1,1,2,4,0,0,0,2,2],[57.79,"-"],67.22],["LUX","Luxembourg",46.3,[20211213,1,1,1,3,1,0,0,3,2],[59.4,"+"],67.69],["CYP","Cyprus",46.3,[20211129,1,1,1,3,1,0,0,3,2],[48.17,"+"],66.23],["GBR","United Kingdom",46.76,[20211213,1,2,2,3,1,0,0,3,3],[78.86,"+"],68.62],["COL","Colombia",47.22,[20211213,1,1,2,3,1,1,0,1,4],[3.71,"+"],51.19],["TON","Tonga",47.22,[20211210,1,0,1,3,0,2,0,4,2],[0.0,"="],43.31],["JPN","Japan",47.22,[20211213,1,1,1,1,0,1,1,4,1],[0.09,"="],77.87],["BGR","Bulgaria",47.22,[20211207,1,2,2,3,0,0,0,2,2],[22.13,"+"],26.84],["MUS","Mauritius",47.22,[20211213,1,2,2,3,0,0,0,2,3],[5.56,"="],71.85],["USA","United States",47.69,[20211213,2,2,1,3,1,1,1,3,3],[36.22,"+"],60.53],["MOZ","Mozambique",48.15,[20211206,0,1,2,3,1,2,0,1,3],[1.1,"+"],14.38],["OMN","Oman",49.07,[20211207,1,1,2,4,0,0,0,3,3],[0.31,"="],54.14],["ZWE","Zimbabwe",49.07,[20211206,0,1,1,3,1,1,1,2,4],[29.23,"+"],19.8],["GAB","Gabon",49.07,[20211206,0,0,1,3,1,2,1,2,3],[0.74,"+"],7.6],["CRI","Costa Rica",49.07,[20211206,2,2,2,2,0,1,0,1,3],[1.68,"+"],65.47],["RWA","Rwanda",49.07,[20211129,1,2,1,3,1,2,0,-1,3],[0.35,"+"],29.23],["CHE","Switzerland",50.0,[20211204,1,2,2,3,0,0,0,3,2],[107.34,"-"],66.15],["IRL","Ireland",50.0,[20211211,1,2,2,3,0,0,0,3,3],[85.21,"-"],76.54],["GEO","Georgia",50.0,[20211213,1,2,2,4,0,0,0,2,4],[83.16,"-"],26.59],["AUS","Australia",50.46,[20211214,0,1,2,4,1,0,2,3,3],[7.44,"+"],75.13],["IND","India",51.39,[20211213,2,0,2,2,0,2,2,2,4],[0.56,"-"],37.7],["ARE","United Arab Emirates",51.85,[20211206,1,1,1,3,1,0,1,3,2],[0.82,"+"],90.28],["SAU","Saudi Arabia",51.85,[20211213,1,1,1,3,1,0,1,3,2],[0.15,"+"],64.65],["LSO","Lesotho",52.78,[20211213,2,2,2,2,0,2,0,1,3],[9.24,"+"],28.64],["QAT","Qatar",52.78,[20211213,1,1,1,3,1,1,1,2,2],[5.68,"+"],75.7],["HKG","Hong Kong",52.78,[20211214,1,1,1,3,1,1,1,2,2],[0.05,"="],60.73],["HND","Honduras",52.78,[20211126,2,2,2,0,0,1,2,1,3],[0.53,"="],38.67],["BTN","Bhutan",53.24,[20211208,1,1,2,4,1,0,1,2,4],[0.15,"="],72.4],["BEL","Belgium",53.7,[20211213,1,3,2,3,0,0,0,3,3],[109.07,"-"],75.18],["NPL","Nepal",54.17,[20211213,1,1,1,4,1,1,2,2,4],[0.81,"-"],29.4],["GUY","Guyana",54.63,[20211212,1,2,2,4,0,2,0,1,3],[6.48,"+"],36.24],["TUR","Turkey",54.63,[20211212,0,2,2,0,2,0,2,1,4],[23.14,"-"],59.97],["LKA","Sri Lanka",54.63,[20211129,0,1,2,4,0,1,1,3,3],[4.69,"+"],64.16],["MYS","Malaysia",55.09,[20211128,2,1,2,4,0,1,2,2,3],[13.79,"-"],77.77],["SVN","Slovenia",55.56,[20211129,-1,2,2,4,1,1,0,2,2],[65.65,"-"],56.36],["BEN","Benin",55.56,[20211206,0,2,2,3,1,1,0,3,4],[0.04,"="],7.04],["ISR","Israel",56.48,[20211213,2,2,2,3,0,0,0,4,2],[7.1,"-"],62.41],["NLD","Netherlands",56.48,[20211203,1,2,2,4,0,1,0,3,3],[97.03,"-"],74.37],["UKR","Ukraine",57.41,[20211203,3,1,1,3,1,0,2,2,2],[20.6,"-"],29.13],["ECU","Ecuador",57.87,[20211213,2,1,1,4,1,1,2,2,3],[3.24,"+"],65.74],["ROU","Romania",58.33,[20211205,2,1,2,2,0,2,1,3,3],[4.7,"-"],40.01],["GIN","Guinea",59.26,[20211213,1,2,2,3,1,2,1,1,3],[0.02,"-"],6.06],["AND","Andorra",59.26,[20211210,1,2,1,4,1,1,1,2,3],[244.24,"+"],65.07],["CHN","China",59.72,[20211213,1,3,1,2,1,3,2,2,2],[0.01,"="],80.49],["KHM","Cambodia",60.65,[20211204,1,2,2,4,0,2,2,3,3],[0.08,"="],80.01],["SYR","Syria",60.65,[20211129,3,3,2,3,1,2,1,1,3],[0.51,"+"],4.04],["RUS","Russia",60.65,[20211203,2,2,2,2,0,3,2,3,2],[20.24,"-"],42.38],["IDN","Indonesia",60.65,[20211206,1,1,2,3,1,1,2,3,3],[0.07,"="],37.5],["TTO","Trinidad and Tobago",61.11,[20211205,2,1,2,4,0,0,1,4,4],[53.65,"+"],46.74],["SWZ","Eswatini",61.11,[20211206,3,1,1,3,1,2,1,1,3],[78.47,"+"],24.13],["IRN","Iran",61.57,[20211213,0,2,2,4,0,2,2,3,3],[3.23,"-"],57.8],["BRA","Brazil",61.57,[20211210,2,2,2,4,1,1,2,3,3],[2.56,"+"],65.49],["ERI","Eritrea",62.04,[20211213,1,1,2,3,1,2,0,4,3],[0.65,"-"]],["PAN","Panama",62.04,[20211214,2,2,1,4,1,2,0,3,4],[7.31,"+"],55.9],["CAN","Canada",62.5,[20211213,2,2,2,4,1,0,2,3,3],[11.57,"+"],76.78],["PER","Peru",63.89,[20211205,2,2,2,4,0,2,1,3,3],[3.76,"-"],59.38],["PNG","Papua New Guinea",63.89,[20211209,2,2,2,3,1,2,1,3,3],[0.48,"-"],2.37],["BRN","Brunei",63.89,[20211213,3,1,2,3,0,2,0,4,3],[4.38,"-"],87.29],["HTI","Haiti",64.81,[20211129,1,1,2,4,1,2,1,2,3],[0.28,"+"],0.58],["SVK","Slovak Republic",64.81,[20211213,2,3,2,4,0,2,0,2,3],[134.88,"-"],43.51],["AUT","Austria",64.81,[20211213,2,2,2,3,1,2,0,3,2],[43.98,"-"],68.59],["NZL","New Zealand",65.28,[20211214,3,1,1,3,2,2,2,4,3],[1.86,"-"],73.53],["BLZ","Belize",65.74,[20211202,1,2,2,4,1,2,1,1,4],[9.48,"+"],48.59],["AGO","Angola",66.67,[20211212,0,2,2,4,1,1,2,3,3],[0.06,"="],9.77],["FRA","France",66.67,[20211203,1,2,2,3,1,0,2,3,2],[75.88,"+"],71.26],["VNM","Vietnam",67.13,[20211121,2,2,2,3,2,2,2,2,3],[15.58,"+"],59.05],["MAR","Morocco",67.59,[20211128,1,3,2,4,2,0,0,3,3],[0.37,"+"],61.25],["BRB","Barbados",67.59,[20211130,3,2,2,3,1,2,0,2,3],[31.96,"+"],48.65],["SUR","Suriname",69.44,[20211210,2,2,2,3,0,2,2,2,4],[5.77,"+"],37.95],["SYC","Seychelles",69.44,[20211129,2,2,2,4,1,2,1,1,3],[33.55,"-"],79.08],["KAZ","Kazakhstan",71.3,[20211130,1,1,2,4,2,2,2,3,3],[3.23,"-"],43.73],["LAO","Laos",71.3,[20211206,0,2,2,3,2,2,2,4,3],[19.11,"-"],42.0],["MMR","Myanmar",71.3,[20211213,3,1,2,4,1,2,2,4,4],[0.6,"="],21.64],["UGA","Uganda",73.15,[20211213,3,2,2,2,1,2,2,1,3],[0.13,"+"],2.73],["TKM","Turkmenistan",75.0,[20211211,0,3,2,4,1,2,2,4,3],[],52.41],["ITA","Italy",76.85,[20211210,2,3,2,1,2,2,2,3,3],[29.43,"+"],73.46],["JAM","Jamaica",78.7,[20211129,2,3,2,4,1,2,2,3,3],[1.39,"+"],18.22],["DMA","Dominica",79.63,[20211203,3,3,2,4,1,2,1,2,3],[33.94,"+"],37.57],["GRC","Greece",80.09,[20211213,2,2,2,4,2,2,2,3,3],[46.95,"-"],65.46],["DEU","Germany",84.26,[20211205,2,3,2,4,2,1,2,3,2],[54.79,"-"],69.06],["FJI","Fiji",90.74,[20211108,3,3,2,4,2,2,2,2,2],[0.49,"="],66.24]];