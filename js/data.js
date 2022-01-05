const dataUpdate="2022.01.05";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["CIV","Cote d'Ivoire",6.48,[20211228,0,0,0,0,0,1,0,1,3],[4.72,"+"],7.99],["NIC","Nicaragua",8.33,[20220105,0,0,0,0,0,0,0,1,1],[0.08,"-"],43.35],["TZA","Tanzania",8.33,[20211218,0,0,0,0,0,0,0,1,1],[0.68,"="],2.21],["YEM","Yemen",12.04,[20211220,1,0,0,0,0,0,0,1,1],[0.01,"="],1.2],["SDN","Sudan",13.89,[20211206,0,0,0,-1,0,0,0,1,4],[0.32,"+"],2.75],["BWA","Botswana",13.89,[20220103,0,0,0,0,0,0,0,1,3],[58.14,"="],43.05],["BFA","Burkina Faso",13.89,[20211213,0,0,0,0,0,0,0,1,4],[0.69,"+"],3.02],["MDG","Madagascar",13.89,[20220104,0,0,0,0,0,2,0,1,4],[1.47,"+"],1.9],["GMB","Gambia",13.89,[20220103,0,0,0,0,0,0,0,1,3],[1.42,"+"],9.47],["NER","Niger",16.67,[20211220,0,0,2,0,0,0,0,2,3],[0.17,"+"],3.83],["TUN","Tunisia",16.67,[20220101,0,0,0,0,0,0,0,2,3],[8.44,"+"],49.79],["VUT","Vanuatu",19.44,[20220103,0,0,0,0,0,0,0,3,0],[0.0,"="],16.03],["SWE","Sweden",19.44,[20220104,0,0,0,0,0,0,0,3,0],[89.39,"+"],72.9],["BDI","Burundi",19.44,[20220103,0,0,0,0,2,0,0,1,1],[6.1,"+"],0.03],["BLR","Belarus",19.44,[20211219,0,0,0,0,0,0,0,3,1],[11.56,"+"],34.19],["TWN","Taiwan",20.37,[20211231,1,0,0,0,0,0,0,2,3],[0.11,"+"],67.96],["SEN","Senegal",21.3,[20220103,1,1,0,0,0,0,0,1,3],[1.46,"+"],5.47],["TCD","Chad",22.22,[20211227,0,0,0,3,0,0,0,1,4],[0.42,"="],0.48],["SLB","Solomon Islands",22.22,[20211213,0,0,0,0,0,0,0,4,0],[0.04,"="],8.61],["KIR","Kiribati",22.22,[20220103,0,0,0,0,0,0,0,4,0],[0.0,"="],31.38],["CUB","Cuba",24.07,[20211220,1,1,0,0,0,0,0,2,4],[4.0,"+"],85.47],["CAF","Central African Republic",24.07,[20211211,0,0,0,0,0,2,0,2,3],[0.0,"="],7.04],["PSE","Palestine",25.0,[20220103,0,0,0,0,0,0,2,2,4],[],28.31],["NAM","Namibia",25.0,[20211220,0,0,1,2,0,0,0,1,3],[20.72,"+"],13.21],["HUN","Hungary",25.0,[20211217,0,0,0,3,0,0,0,2,2],[26.65,"+"],62.14],["MEX","Mexico",25.93,[20211212,0,1,1,0,1,1,1,1,2],[4.6,"-"],55.92],["MRT","Mauritania",25.93,[20220103,0,1,1,3,0,0,0,1,3],[8.48,"+"],19.32],["PRI","Puerto Rico",26.85,[20211213,1,1,1,0,0,0,0,1,3],[]],["TGO","Togo",26.85,[20211220,0,1,2,1,0,0,0,2,2],[4.77,"-"],12.04],["LBR","Liberia",26.85,[20211220,1,1,1,0,0,0,0,1,4],[0.5,"+"],19.0],["MAC","Macao",26.85,[20211215,1,1,-1,0,0,0,0,3,2],[],70.46],["SLV","El Salvador",27.78,[20211227,0,0,2,1,0,0,0,1,2],[0.71,"="],63.89],["AFG","Afghanistan",27.78,[20211206,0,2,2,0,2,0,0,2,3],[0.08,"="],9.42],["SRB","Serbia",28.7,[20220103,0,0,0,4,0,1,0,1,3],[28.53,"+"],46.76],["VEN","Venezuela",28.7,[20220103,1,0,0,0,1,0,0,3,2],[0.7,"-"],40.44],["SLE","Sierra Leone",29.63,[20220103,1,1,0,0,1,0,0,2,3],[0.8,"+"],4.73],["TJK","Tajikistan",29.63,[20211228,1,1,0,0,0,0,0,4,4],[0.0,"="],28.38],["NGA","Nigeria",30.56,[20220103,0,0,1,3,0,0,0,2,3],[0.38,"-"],2.12],["KWT","Kuwait",30.56,[20220101,2,1,0,0,0,0,0,3,2],[17.12,"+"],74.31],["CMR","Cameroon",30.56,[20211227,0,0,1,3,0,0,0,4,3],[0.0,"-"],2.42],["URY","Uruguay",31.48,[20211220,0,1,1,2,0,0,0,2,2],[46.12,"+"],76.8],["PAK","Pakistan",31.94,[20211213,0,1,1,2,0,1,0,3,4],[0.28,"+"],32.21],["KEN","Kenya",32.41,[20211219,0,2,1,2,0,0,0,1,4],[4.38,"+"],7.86],["BHR","Bahrain",32.41,[20220102,0,1,1,0,0,1,0,3,2],[41.69,"+"],67.51],["COG","Congo",33.33,[20211220,0,0,1,3,0,2,0,1,3],[3.08,"="],9.91],["GRL","Greenland",34.26,[20220103,1,1,1,0,0,1,1,1,2],[175.39,"+"],66.98],["EST","Estonia",34.26,[20220102,0,1,2,1,0,0,0,2,2],[71.66,"+"],61.74],["JOR","Jordan",34.26,[20211231,0,1,1,2,0,0,0,3,2],[0.0,"="],38.31],["FIN","Finland",34.72,[20220103,1,1,1,4,0,0,0,2,1],[118.8,"+"],74.59],["LBN","Lebanon",35.19,[20211219,0,0,1,1,1,2,0,1,1],[52.04,"+"],27.23],["SOM","Somalia",35.19,[20211219,0,1,1,3,0,1,0,1,3],[0.0,"="],4.95],["DNK","Denmark",35.19,[20220103,1,1,1,2,0,0,0,2,2],[310.86,"+"],79.08],["ZMB","Zambia",35.19,[20220102,1,1,1,3,0,0,0,1,3],[21.06,"+"],6.66],["PRY","Paraguay",35.19,[20220101,1,1,1,3,0,0,0,1,3],[9.81,"+"],40.83],["BIH","Bosnia and Herzegovina",35.19,[20220103,1,1,1,3,0,0,0,1,2],[20.94,"+"],22.08],["DOM","Dominican Republic",36.11,[20220103,0,1,2,2,1,1,0,1,3],[17.32,"+"],52.07],["BOL","Bolivia",37.04,[20220102,2,1,1,0,1,0,0,2,4],[50.94,"-"],39.56],["GHA","Ghana",37.96,[20211220,0,2,2,2,0,0,0,1,4],[3.21,"-"],7.36],["GUM","Guam",37.96,[20220103,1,1,1,4,0,0,0,1,2],[]],["FRO","Faeroe Islands",37.96,[20220104,1,1,1,3,0,0,0,2,0],[404.92,"+"],82.67],["ISL","Iceland",37.96,[20220102,1,1,1,3,0,0,0,2,2],[302.51,"+"],77.04],["CPV","Cape Verde",37.96,[20211221,0,1,1,0,0,1,2,1,2],[134.82,"+"],45.55],["SMR","San Marino",37.96,[20211220,1,1,1,4,0,0,0,1,3],[431.55,"+"],63.58],["CZE","Czech Republic",37.96,[20211227,1,1,1,3,0,0,0,2,2],[51.36,"+"],62.17],["BMU","Bermuda",38.89,[20211216,1,1,1,3,0,1,0,1,3],[200.02,"+"],73.7],["COD","Democratic Republic of Congo",38.89,[20220103,0,1,1,3,0,2,0,1,3],[1.1,"+"],0.13],["VIR","United States Virgin Islands",38.89,[20220103,1,1,1,3,0,1,0,1,3],[]],["BGD","Bangladesh",38.89,[20220103,1,1,1,2,0,1,0,2,4],[0.34,"+"],26.9],["MWI","Malawi",39.81,[20211212,1,1,1,2,0,2,0,1,2],[3.48,"-"],3.63],["POL","Poland",39.81,[20211229,2,1,1,0,0,1,0,3,3],[30.5,"+"],55.76],["THA","Thailand",40.28,[20211214,1,1,1,2,0,1,2,3,4],[4.27,"+"],64.94],["MNG","Mongolia",40.28,[20220104,1,2,1,3,0,1,1,2,4],[10.16,"+"],65.01],["MLI","Mali",40.74,[20211213,0,2,2,3,0,0,0,1,3],[1.48,"+"],1.97],["AZE","Azerbaijan",40.74,[20211218,1,1,2,3,0,-1,0,1,3],[4.3,"+"],45.75],["ETH","Ethiopia",40.74,[20220104,1,1,1,3,1,0,0,1,3],[3.36,"-"],1.35],["MCO","Monaco",40.74,[20220103,1,1,1,2,1,0,0,2,3],[34.95,"-"],58.98],["HRV","Croatia",40.74,[20220103,1,1,1,3,0,0,0,3,2],[104.21,"+"],52.58],["LVA","Latvia",40.74,[20211220,1,1,1,4,0,0,0,2,3],[48.23,"+"],67.65],["CHL","Chile",41.2,[20211219,1,1,1,2,0,0,2,4,3],[7.89,"+"],86.13],["ABW","Aruba",41.67,[20211209,1,0,1,4,0,2,0,1,2],[628.61,"+"],73.73],["BHS","Bahamas",41.67,[20211213,1,1,1,3,0,1,1,1,4],[89.8,"+"],37.13],["GAB","Gabon",41.67,[20220103,0,0,1,3,0,2,1,2,3],[17.52,"="],7.6],["ARG","Argentina",41.67,[20211215,1,1,1,1,1,1,0,2,3],[96.83,"+"],72.09],["TLS","Timor-Leste",42.13,[20220102,0,2,2,3,2,1,0,1,3],[0.1,"="],39.66],["LBY","Libya",42.59,[20211220,1,0,2,4,0,0,0,2,3],[8.43,"+"],11.87],["RKS","Kosovo",42.59,[20211219,1,1,1,3,0,2,0,1,3],[2.81,"+"],44.0],["KGZ","Kyrgyz Republic",42.59,[20211211,1,0,2,4,1,0,0,1,2],[0.72,"+"],15.19],["EGY","Egypt",43.52,[20211206,1,1,2,4,0,0,0,1,3],[0.79,"="],19.78],["MLT","Malta",43.52,[20220103,1,1,1,4,0,0,0,3,4],[253.3,"-"],84.52],["UZB","Uzbekistan",44.44,[20211207,1,0,1,3,0,1,1,3,3],[0.33,"-"],32.72],["SGP","Singapore",44.44,[20211231,1,1,1,4,0,1,0,2,4],[7.78,"+"],87.0],["ZAF","South Africa",44.44,[20220103,1,2,2,1,1,0,0,1,3],[14.22,"+"],26.49],["KOR","South Korea",45.37,[20211231,1,2,1,4,0,0,0,3,3],[8.01,"-"],83.19],["CYP","Cyprus",46.3,[20211129,1,1,1,3,1,0,0,3,2],[334.28,"+"],67.84],["GEO","Georgia",46.3,[20220102,0,2,2,4,0,0,0,2,4],[50.65,"+"],29.06],["ALB","Albania",46.3,[20220103,1,1,1,3,0,2,0,3,3],[18.21,"+"],35.89],["LUX","Luxembourg",46.3,[20220103,1,1,1,3,1,0,0,3,2],[137.66,"+"],67.69],["LTU","Lithuania",46.3,[20211218,1,1,2,4,0,0,0,2,2],[66.19,"+"],68.22],["PRT","Portugal",46.3,[20211231,0,2,2,4,0,0,0,2,3],[220.12,"+"],89.61],["TON","Tonga",47.22,[20220103,1,0,1,3,0,2,0,4,2],[0.0,"="],58.91],["JPN","Japan",47.22,[20220103,1,1,1,1,0,1,1,4,1],[0.45,"+"],78.88],["MUS","Mauritius",47.22,[20211213,1,2,2,3,0,0,0,2,3],[4.43,"="],71.5],["SSD","South Sudan",48.15,[20220102,1,1,0,4,0,2,1,2,2],[1.13,"+"],1.6],["MOZ","Mozambique",48.15,[20211206,0,1,2,3,1,2,0,1,3],[9.46,"-"],18.92],["BEL","Belgium",48.15,[20220103,1,3,1,3,0,0,0,3,3],[109.8,"+"],75.66],["GBR","United Kingdom",48.61,[20211226,1,2,2,3,1,0,0,2,3],[276.87,"+"],69.62],["DJI","Djibouti",49.07,[20220101,1,1,1,4,1,0,0,3,4],[2.4,"+"],9.12],["CRI","Costa Rica",49.07,[20220103,2,2,2,2,0,1,0,1,3],[14.91,"+"],69.01],["OMN","Oman",49.07,[20211207,1,1,2,4,0,0,0,3,3],[2.76,"+"],55.34],["MDA","Moldova",49.07,[20211221,1,1,2,4,0,0,0,3,2],[8.61,"+"],24.46],["BTN","Bhutan",49.07,[20211220,1,1,2,3,0,0,1,2,4],[0.11,"+"],72.46],["SWZ","Eswatini",49.07,[20211219,0,2,1,2,1,0,2,1,4],[22.18,"-"],25.79],["BGR","Bulgaria",50.0,[20211219,1,2,2,3,0,0,0,3,2],[42.1,"+"],27.86],["CHE","Switzerland",50.0,[20211231,1,2,2,3,0,0,-1,3,3],[189.59,"+"],66.93],["DZA","Algeria",50.0,[20211219,0,2,2,4,0,0,2,1,3],[0.88,"+"],12.57],["RWA","Rwanda",50.46,[20211220,1,2,1,3,1,2,0,2,3],[10.0,"+"],40.69],["MYS","Malaysia",50.46,[20211225,2,1,2,4,0,0,2,2,3],[10.18,"-"],78.19],["AUS","Australia",50.46,[20211214,0,1,2,4,1,0,2,3,3],[150.62,"+"],76.8],["UKR","Ukraine",51.85,[20220103,3,1,1,3,0,0,2,2,2],[9.77,"-"],31.88],["SAU","Saudi Arabia",51.85,[20211213,1,1,1,3,1,0,1,3,2],[3.49,"+"],65.82],["COL","Colombia",51.85,[20211222,0,1,2,3,1,1,0,3,4],[19.96,"+"],55.29],["LKA","Sri Lanka",51.85,[20211220,0,1,2,4,0,1,1,2,3],[2.9,"+"],64.42],["NOR","Norway",51.85,[20211231,2,2,1,4,0,1,0,2,2],[78.22,"+"],71.75],["ARE","United Arab Emirates",51.85,[20211220,1,1,1,3,1,0,1,3,2],[24.96,"+"],91.27],["ROU","Romania",52.78,[20211220,2,1,1,2,0,2,1,3,-1],[9.28,"+"],40.93],["LSO","Lesotho",52.78,[20211213,2,2,2,2,0,2,0,1,3],[12.49,"="],29.69],["HND","Honduras",52.78,[20220101,2,2,2,0,0,1,2,1,3],[0.0,"-"],42.7],["IRL","Ireland",52.78,[20220104,1,2,2,4,0,0,0,3,3],[392.69,"+"],77.05],["USA","United States",53.24,[20220104,2,2,1,3,1,1,2,3,3],[167.3,"+"],61.74],["NPL","Nepal",54.17,[20220103,1,1,1,4,1,1,2,2,4],[0.92,"+"],32.81],["IRN","Iran",54.63,[20220102,0,2,2,4,0,2,0,3,3],[1.95,"-"],60.21],["TUR","Turkey",54.63,[20211212,0,2,2,0,2,0,2,1,4],[48.61,"+"],60.77],["GUY","Guyana",54.63,[20211212,1,2,2,4,0,2,0,1,3],[27.03,"+"],37.37],["LIE","Liechtenstein",54.63,[20220102,3,1,1,3,1,1,0,2,3],[108.28,"+"],67.01],["SYR","Syria",55.09,[20211219,3,3,1,3,1,2,1,1,3],[0.18,"-"],4.28],["BEN","Benin",55.56,[20211206,0,2,2,3,1,1,0,3,4],[0.69,"+"],10.6],["QAT","Qatar",55.56,[20211221,1,1,1,4,1,1,1,2,2],[31.88,"+"],75.7],["HKG","Hong Kong",55.56,[20220103,1,1,1,3,1,1,1,3,2],[0.16,"+"],61.94],["ESP","Spain",56.02,[20211231,1,3,2,3,0,0,2,3,4],[230.07,"+"],81.35],["ISR","Israel",56.48,[20220104,2,2,2,3,0,0,0,4,2],[67.34,"+"],63.95],["ERI","Eritrea",56.48,[20220101,1,1,2,3,1,2,0,2,3],[0.79,"+"]],["BRN","Brunei",57.41,[20211229,3,1,1,2,1,1,0,4,4],[1.47,"-"],87.29],["ECU","Ecuador",57.87,[20220103,2,1,1,4,1,1,2,2,3],[8.29,"-"],70.27],["SVN","Slovenia",59.26,[20220102,1,2,2,4,1,1,0,2,3],[85.15,"+"],57.34],["AND","Andorra",59.26,[20211217,1,2,1,4,1,1,1,2,3],[418.23,"+"],65.35],["IND","India",59.72,[20220103,3,0,2,3,0,2,2,2,2],[2.17,"+"],44.1],["GTM","Guatemala",59.72,[20220103,2,2,2,3,2,1,0,3,2],[3.16,"+"],25.8],["GIN","Guinea",60.19,[20220103,1,1,2,3,0,2,2,2,3],[1.97,"+"],6.89],["PER","Peru",60.19,[20220101,2,2,2,4,1,2,1,3,-1],[13.24,"+"],64.36],["PNG","Papua New Guinea",60.19,[20220103,1,2,2,3,1,2,2,3,3],[0.1,"="],2.46],["IDN","Indonesia",60.65,[20211206,1,1,2,3,1,1,2,3,3],[0.08,"="],41.46],["KHM","Cambodia",60.65,[20211204,1,2,2,4,0,2,2,3,3],[0.05,"+"],80.65],["RUS","Russia",60.65,[20211203,2,2,2,2,0,3,2,3,2],[12.92,"-"],45.96],["TTO","Trinidad and Tobago",61.11,[20211205,2,1,2,4,0,0,1,4,4],[33.38,"+"],47.75],["BRA","Brazil",61.57,[20211210,2,2,2,4,1,1,2,3,3],[4.64,"+"],67.18],["PAN","Panama",62.04,[20211214,2,2,1,4,1,2,0,3,4],[34.61,"-"],56.37],["ZWE","Zimbabwe",63.89,[20211220,0,1,2,3,1,2,2,2,3],[9.74,"-"],20.89],["NLD","Netherlands",63.89,[20211231,3,2,2,4,0,1,0,3,3],[98.75,"+"],71.13],["AUT","Austria",64.81,[20220104,2,2,2,3,1,2,0,3,2],[40.93,"+"],72.08],["HTI","Haiti",64.81,[20211221,1,1,2,4,1,2,1,2,3],[0.3,"+"],0.64],["NZL","New Zealand",65.28,[20211214,3,1,1,3,2,2,2,4,3],[1.24,"-"],75.32],["AGO","Angola",66.67,[20220101,0,2,2,3,1,1,2,4,3],[3.42,"-"],11.58],["BRB","Barbados",67.59,[20211220,3,2,2,3,1,2,0,2,3],[92.56,"+"],49.96],["MAR","Morocco",67.59,[20220103,1,3,2,4,2,0,0,3,3],[5.56,"+"],61.57],["SVK","Slovak Republic",68.52,[20211229,3,3,2,4,0,2,0,2,3],[62.82,"-"],44.65],["LAO","Laos",68.52,[20211227,0,2,2,3,2,2,2,3,3],[12.2,"-"],42.0],["IRQ","Iraq",68.52,[20211221,1,2,2,3,0,2,2,3,3],[0.64,"+"],13.69],["VNM","Vietnam",68.52,[20220103,2,2,2,3,2,2,2,2,3],[17.57,"+"],57.44],["BLZ","Belize",68.52,[20211218,1,2,2,4,1,2,1,2,4],[84.54,"+"],49.18],["MMR","Myanmar",68.52,[20211213,3,1,2,4,1,2,2,3,4],[0.34,"-"],23.77],["SYC","Seychelles",69.44,[20220102,2,2,2,4,1,2,1,1,3],[168.35,"+"],79.13],["KAZ","Kazakhstan",71.3,[20220103,1,1,2,4,2,2,2,3,3],[2.1,"-"],44.91],["FRA","France",72.22,[20211231,1,2,2,3,2,0,2,3,3],[276.63,"+"],73.49],["PHL","Philippines",74.54,[20211227,3,2,2,4,2,2,2,3,4],[2.87,"+"],45.59],["SUR","Suriname",75.0,[20211226,2,2,2,4,0,2,2,3,4],[65.0,"+"],38.62],["UGA","Uganda",75.0,[20211220,3,2,2,2,2,1,2,1,3],[3.37,"-"],2.99],["TKM","Turkmenistan",75.0,[20211211,0,3,2,4,1,2,2,4,3],[],52.41],["CAN","Canada",75.46,[20220103,3,3,2,4,1,2,2,3,3],[118.35,"+"],77.36],["JAM","Jamaica",75.93,[20211221,2,3,1,3,1,2,2,3,3],[16.31,"+"],19.2],["CHN","China",76.39,[20211213,3,3,2,4,1,3,2,2,2],[0.01,"="],83.6],["ITA","Italy",76.85,[20220102,2,3,2,1,2,2,2,3,3],[191.51,"+"],74.27],["DMA","Dominica",79.63,[20211203,3,3,2,4,1,2,1,2,3],[102.0,"+"],38.27],["GRC","Greece",80.09,[20211213,2,2,2,4,2,2,2,3,3],[327.62,"+"],67.98],["DEU","Germany",84.26,[20211231,2,3,2,4,2,1,2,3,2],[44.56,"+"],70.76],["FJI","Fiji",85.19,[20211220,3,3,2,4,2,2,2,-1,3],[31.65,"="],67.56]];