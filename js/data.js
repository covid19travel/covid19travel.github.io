const dataUpdate="2023.02.21";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["HUN","Hungary",0.0,[20221231,0,0,0,0,0,0,0,0,2],[1.23,"="],62.28],["AFG","Afghanistan",0.0,[20221231,0,0,0,0,0,0,0,0,0],[0.05,"="],26.9],["GUM","Guam",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["JOR","Jordan",0.0,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],40.39],["MDG","Madagascar",0.0,[20221231,0,0,0,0,0,0,0,0,1],[0.0,"="],7.32],["VIR","United States Virgin Islands",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["LVA","Latvia",0.0,[20221231,0,0,0,0,0,0,0,0,2],[1.31,"-"],70.57],["BWA","Botswana",0.0,[20221231,0,0,0,0,0,0,0,0,0],[0.41,"-"],54.72],["BTN","Bhutan",0.0,[20221231,0,0,0,0,0,0,0,0,1],[0.0,"-"],86.61],["ERI","Eritrea",0.0,[20200121,0,0,0,0,0,0,0,0,0],[0.0,"="]],["PRI","Puerto Rico",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["KIR","Kiribati",0.0,[20221231,0,0,0,0,0,0,0,0,0],[0.48,"="],62.08],["BLR","Belarus",0.0,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],67.23],["PSE","Palestine",0.0,[20221231,0,0,0,0,0,0,0,0,1],[],33.85],["TZA","Tanzania",2.78,[20221231,0,0,0,0,0,0,0,1,0],[0.01,"="],44.69],["DJI","Djibouti",2.78,[20221231,0,0,0,0,0,0,0,1,2],[0.0,"="],30.66],["GEO","Georgia",5.56,[20221231,0,0,0,0,0,0,0,0,2],[11.4,"="],34.08],["MUS","Mauritius",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"-"],83.74],["NAM","Namibia",5.56,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"-"],20.65],["ISL","Iceland",5.56,[20221231,0,0,0,0,0,0,0,0,0],[3.43,"="],77.82],["SRB","Serbia",5.56,[20221231,0,0,0,0,0,0,0,0,0],[8.73,"+"],47.71],["MDA","Moldova",5.56,[20221231,0,0,0,0,0,0,0,0,1],[4.74,"="],32.87],["DOM","Dominican Republic",5.56,[20221231,0,0,0,0,0,0,0,0,0],[0.08,"-"],54.16],["SOM","Somalia",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],37.11],["UZB","Uzbekistan",5.56,[20221231,0,0,0,0,0,0,0,0,1],[0.03,"-"],52.27],["CHE","Switzerland",5.56,[20221231,0,0,0,0,0,0,0,0,0],[1.64,"="],68.79],["GBR","United Kingdom",5.56,[20221231,0,0,0,0,0,0,0,0,1],[5.41,"="],75.19],["CAN","Canada",5.56,[20221231,0,0,0,0,0,0,0,0,2],[4.37,"+"],82.6],["YEM","Yemen",5.56,[20221231,0,0,1,0,0,0,0,0,0],[0.0,"="],2.26],["THA","Thailand",5.56,[20221231,0,0,0,0,0,0,0,0,1],[0.04,"="],74.6],["SDN","Sudan",5.56,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"-"],20.65],["PNG","Papua New Guinea",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.03,"="],3.08],["KHM","Cambodia",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],87.19],["GAB","Gabon",5.56,[20221231,0,0,0,0,0,0,0,0,3],[0.0,"="],10.77],["KAZ","Kazakhstan",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"-"],54.79],["CAF","Central African Republic",8.33,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"="],39.01],["CMR","Cameroon",8.33,[20221231,0,0,0,0,0,0,0,1,0],[0.18,"+"],11.91],["MRT","Mauritania",8.33,[20221231,0,0,0,0,0,0,0,1,1],[0.0,"="],32.47],["BFA","Burkina Faso",8.33,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"-"],14.71],["ZMB","Zambia",8.33,[20221231,0,0,0,0,0,0,0,1,3],[0.32,"+"],43.38],["TJK","Tajikistan",8.33,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"="],51.95],["POL","Poland",9.26,[20221231,1,0,0,0,0,0,0,0,2],[4.03,"+"],56.81],["EGY","Egypt",10.29,[20221231,0,2,0,0,0,0,0,0,3],[0.0,"="],36.34],["NER","Niger",10.55,[20221231,0,0,0,0,0,0,0,1,2],[0.0,"="],20.45],["SSD","South Sudan",10.55,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"="],20.65],["MNG","Mongolia",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.02,"-"],64.02],["IRL","Ireland",11.11,[20221231,0,0,0,0,0,0,0,0,1],[2.62,"="],80.83],["SWE","Sweden",11.11,[20221231,0,0,0,0,0,0,0,0,0],[1.4,"="],72.38],["SVN","Slovenia",11.11,[20221231,0,0,0,0,0,0,0,0,2],[12.19,"+"],57.66],["SVK","Slovak Republic",11.11,[20221231,0,0,0,0,0,0,0,0,2],[3.32,"-"],45.68],["TUR","Turkey",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],62.31],["SMR","San Marino",11.11,[20221231,0,0,0,0,0,0,0,0,1],[22.31,"="],70.15],["SYR","Syria",11.11,[20221231,0,0,0,0,0,0,0,0,3],[0.01,"="],10.2],["KGZ","Kyrgyz Republic",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"-"],20.67],["SAU","Saudi Arabia",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.16,"="],69.63],["RUS","Russia",11.11,[20221231,0,0,0,0,0,0,0,0,0],[9.22,"+"],54.96],["ROU","Romania",11.11,[20221231,0,0,0,0,0,0,0,0,1],[3.06,"+"],41.28],["QAT","Qatar",11.11,[20221231,0,0,0,0,0,0,0,0,2],[2.6,"+"],105.8],["MLT","Malta",11.11,[20221231,0,0,0,0,0,0,0,0,2],[2.65,"="],88.4],["PRY","Paraguay",11.11,[20221231,0,0,0,0,0,0,0,0,2],[1.33,"="],52.23],["KWT","Kuwait",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.0,"="],78.35],["TTO","Trinidad and Tobago",11.11,[20221231,0,0,0,0,0,0,0,0,2],[3.18,"="],46.82],["LIE","Liechtenstein",11.11,[20221231,0,0,0,0,0,0,0,0,0],[5.62,"="],67.24],["LSO","Lesotho",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.0,"="],40.35],["LTU","Lithuania",11.11,[20221231,0,0,0,0,0,0,0,0,1],[9.91,"="],68.37],["LUX","Luxembourg",11.11,[20221231,0,0,0,0,0,0,0,0,0],[8.35,"-"],71.44],["PER","Peru",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.45,"+"],83.74],["OMN","Oman",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],66.62],["NZL","New Zealand",11.11,[20221231,0,0,0,0,0,0,0,0,2],[24.35,"="],79.84],["MCO","Monaco",11.11,[20221231,0,0,0,0,0,0,0,0,2],[4.0,"+"],70.34],["NOR","Norway",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.73,"-"],74.61],["NLD","Netherlands",11.11,[20221231,0,0,0,0,0,0,0,0,0],[2.8,"="],68.08],["NGA","Nigeria",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],30.53],["PRT","Portugal",11.11,[20221231,0,0,0,0,0,0,0,0,0],[1.72,"="],86.59],["KOR","South Korea",11.11,[20221231,0,0,0,0,0,0,0,0,2],[21.19,"-"],85.75],["SWZ","Eswatini",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.5,"="],34.39],["CRI","Costa Rica",11.11,[20221231,0,0,0,0,0,0,0,0,2],[11.8,"="],83.28],["CPV","Cape Verde",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.1,"+"],52.05],["CYP","Cyprus",11.11,[20221231,0,0,0,0,0,0,0,0,1],[17.94,"="],72.1],["CZE","Czech Republic",11.11,[20221231,0,0,0,0,0,0,0,0,0],[7.67,"+"],65.68],["BRN","Brunei",11.11,[20221231,0,0,0,0,0,0,0,0,2],[20.12,"="],99.43],["BRB","Barbados",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],55.04],["DNK","Denmark",11.11,[20221231,0,0,0,0,0,0,0,0,0],[2.11,"-"],80.79],["DZA","Algeria",11.11,[20221231,0,0,0,0,0,0,0,0,3],[0.01,"="],14.43],["BLZ","Belize",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.68,"-"],54.62],["VUT","Vanuatu",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],49.66],["ESP","Spain",11.11,[20221231,0,0,0,0,0,0,0,0,2],[2.15,"="],85.64],["EST","Estonia",11.11,[20221231,0,0,0,0,0,0,0,0,1],[3.59,"="],64.0],["BHR","Bahrain",11.11,[20221231,0,0,0,0,0,0,0,0,2],[32.77,"+"],83.33],["BEN","Benin",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],20.54],["FRA","France",11.11,[20221231,0,0,0,0,0,0,0,0,1],[5.41,"+"],78.4],["FRO","Faeroe Islands",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],76.99],["BGR","Bulgaria",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.7,"+"],30.61],["ZAF","South Africa",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.51,"-"],35.13],["HRV","Croatia",11.11,[20221231,0,0,0,0,0,0,0,0,2],[1.29,"="],55.85],["GMB","Gambia",11.11,[20221231,0,0,0,0,0,0,0,0,3],[0.0,"="],16.8],["ALB","Albania",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.3,"+"],44.85],["GRC","Greece",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],73.61],["GRL","Greenland",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.0,"="],68.17],["HKG","Hong Kong",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],90.74],["AUS","Australia",11.11,[20221231,0,0,0,0,0,0,0,0,0],[9.72,"="],82.72],["AND","Andorra",11.11,[20221231,0,0,0,0,0,0,0,0,2],[1.11,"="],67.0],["MOZ","Mozambique",12.04,[20221231,0,1,0,0,0,0,0,1,2],[0.13,"+"],56.01],["CIV","Cote d'Ivoire",13.89,[20221231,0,0,0,0,0,0,0,1,2],[0.03,"+"],42.77],["MYS","Malaysia",13.89,[20221231,0,0,0,0,0,0,0,1,1],[0.67,"="],81.15],["UKR","Ukraine",13.89,[20221231,0,0,0,0,0,0,0,1,1],[1.98,"+"],38.17],["CUB","Cuba",13.89,[20221231,0,0,0,0,0,0,0,1,2],[0.04,"="],89.26],["TKM","Turkmenistan",13.89,[20221231,0,0,0,0,0,0,0,1,3],[],57.37],["CHL","Chile",13.89,[20221231,0,0,0,0,0,0,0,1,2],[8.09,"+"],90.29],["NIC","Nicaragua",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.03,"="],86.54],["VEN","Venezuela",13.89,[20221231,0,0,0,0,0,0,0,1,3],[0.06,"-"],52.88],["URY","Uruguay",13.89,[20221231,0,0,0,0,0,0,0,1,1],[3.21,"+"],84.69],["SYC","Seychelles",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"="],76.29],["COG","Congo",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"="],10.96],["BGD","Bangladesh",13.89,[20221231,0,0,0,0,0,0,0,1,4],[0.0,"-"],79.9],["LBY","Libya",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"-"],18.15],["TCD","Chad",13.89,[20221231,0,0,0,0,0,0,0,1,3],[0.01,"="],20.45],["ARE","United Arab Emirates",13.89,[20221231,0,0,0,0,0,0,0,1,2],[1.1,"+"],103.72],["ARG","Argentina",14.38,[20221231,0,0,0,0,0,0,0,0,1],[0.37,"-"],76.53],["DEU","Germany",14.81,[20221231,0,0,0,0,0,1,0,0,2],[15.2,"-"],76.24],["ECU","Ecuador",14.81,[20221231,0,0,0,0,0,1,0,0,2],[3.7,"="],79.06],["BEL","Belgium",14.81,[20221231,0,1,0,0,0,0,0,0,2],[9.03,"="],78.65],["ISR","Israel",14.81,[20221231,1,0,0,0,0,0,0,0,2],[4.22,"-"],65.18],["IDN","Indonesia",14.93,[20221231,0,0,0,0,0,0,0,1,1],[0.07,"="],62.68],["TLS","Timor-Leste",15.03,[20221231,0,0,0,0,0,0,0,1,3],[0.01,"-"],59.5],["TON","Tonga",16.18,[20221231,0,0,0,0,0,0,0,1,1],[0.81,"="],72.06],["IRQ","Iraq",16.67,[20221231,0,0,2,1,0,0,0,1,0],[0.0,"="],17.85],["JAM","Jamaica",16.67,[20221231,0,0,1,0,0,0,0,0,0],[0.77,"="],26.44],["LBN","Lebanon",16.67,[20221231,0,0,0,0,1,0,0,0,2],[1.62,"+"],43.98],["AGO","Angola",17.02,[20221231,0,2,0,0,0,0,0,1,2],[0.0,"="],23.34],["SGP","Singapore",17.59,[20221231,1,0,0,0,0,0,0,1,2],[0.0,"="],90.85],["TWN","Taiwan",17.59,[20221231,1,0,0,0,0,0,0,1,2],[69.26,"-"],86.73],["MEX","Mexico",17.59,[20221231,1,0,0,0,0,0,0,1,2],[3.21,"="],64.82],["GUY","Guyana",18.52,[20221231,1,1,0,0,0,0,0,0,1],[0.36,"="],47.23],["FIN","Finland",18.52,[20221231,1,1,0,0,0,0,0,0,1],[1.87,"="],78.47],["SEN","Senegal",19.44,[20221231,0,0,0,0,1,0,0,1,3],[0.0,"-"],8.27],["BDI","Burundi",19.44,[20221231,0,0,1,0,0,0,0,1,3],[0.04,"="],0.25],["COL","Colombia",19.44,[20221231,1,1,0,0,0,0,0,1,1],[0.23,"="],71.23],["PAN","Panama",20.37,[20221231,1,0,1,0,0,0,0,0,2],[0.0,"-"],71.88],["SUR","Suriname",21.3,[20221231,1,1,0,0,0,0,0,1,2],[0.0,"="],38.49],["NPL","Nepal",21.59,[20221231,0,0,0,1,0,0,0,1,4],[0.01,"="],79.33],["ITA","Italy",21.99,[20221231,0,1,0,0,0,1,0,1,2],[6.7,"="],81.26],["BRA","Brazil",22.22,[20221231,0,0,0,0,0,0,2,1,2],[2.3,"-"],81.61],["ETH","Ethiopia",22.22,[20221231,0,0,0,3,0,0,0,1,3],[0.01,"="],30.26],["KEN","Kenya",22.77,[20221231,0,0,2,0,0,0,0,1,3],[0.01,"-"],20.23],["LKA","Sri Lanka",23.15,[20221231,0,1,1,1,0,0,0,0,1],[0.01,"="],67.57],["HND","Honduras",23.15,[20221231,0,1,1,0,0,0,0,1,3],[0.48,"="],55.62],["VNM","Vietnam",23.15,[20221231,0,1,1,1,0,0,0,0,2],[0.02,"="],87.51],["MLI","Mali",23.69,[20221231,0,0,2,0,0,0,0,1,1],[0.06,"="],12.73],["BMU","Bermuda",24.07,[20221231,1,1,1,0,0,0,0,0,2],[1.38,"="],74.22],["BOL","Bolivia",24.07,[20221231,1,1,1,0,0,0,0,1,2],[1.26,"+"],50.4],["DMA","Dominica",24.07,[20221231,1,1,1,0,0,0,0,0,2],[0.0,"="],42.14],["MAR","Morocco",24.46,[20221231,0,1,0,0,0,0,0,0,3],[0.02,"="],62.79],["COD","Democratic Republic of Congo",25.0,[20221231,0,0,0,0,0,0,2,1,3],[0.0,"-"],6.92],["RKS","Kosovo",25.04,[20221231,2,2,2,0,0,0,0,0,1],[1.11,"+"],46.3],["PHL","Philippines",25.41,[20221231,0,1,1,0,1,0,0,1,2],[0.09,"-"],64.05],["GIN","Guinea",25.45,[20221231,0,2,2,0,0,0,2,1,2],[0.03,"="],23.77],["RWA","Rwanda",25.64,[20221231,0,0,0,0,0,0,0,0,0],[0.02,"-"],71.85],["FJI","Fiji",25.74,[20221231,0,1,1,0,0,0,0,1,2],[0.19,"="],68.93],["ABW","Aruba",25.93,[20221231,0,1,1,2,0,0,0,0,2],[0.0,"="],79.0],["BIH","Bosnia and Herzegovina",25.93,[20221231,1,0,1,2,0,0,0,0,2],[0.24,"="],26.17],["SLV","El Salvador",26.85,[20221231,1,1,1,1,0,0,0,0,2],[0.0,"="],68.56],["BHS","Bahamas",26.85,[20221231,1,1,0,0,1,0,0,1,2],[0.0,"="],40.4],["LAO","Laos",28.61,[20221231,1,1,1,0,0,0,0,1,3],[0.02,"="],69.36],["IND","India",28.7,[20221231,0,1,0,0,0,2,2,0,3],[0.01,"="],67.17],["USA","United States",28.72,[20221231,1,1,0,0,0,1,1,1,2],[10.59,"-"],69.25],["GRD","Grenada",29.38,[20220328,1,0,0,3,0,0,0,1,3],[0.0,"="],31.07],["LBR","Liberia",29.46,[20221231,0,1,1,0,0,0,0,1,4],[0.0,"="],70.36],["TGO","Togo",30.1,[20221231,0,0,1,3,0,0,0,1,3],[0.01,"+"],17.56],["SLB","Solomon Islands",30.46,[20221231,1,1,1,0,0,0,0,1,3],[0.0,"="],35.12],["TUN","Tunisia",31.36,[20221231,0,0,2,4,0,0,0,0,3],[0.16,"="],51.79],["HTI","Haiti",31.48,[20221231,0,1,1,3,0,0,0,1,2],[0.08,"="],2.06],["JPN","Japan",33.33,[20221231,1,1,1,1,0,1,1,1,1],[15.72,"-"],83.34],["GHA","Ghana",33.38,[20221231,0,2,2,0,0,0,0,1,1],[0.0,"="],29.3],["AUT","Austria",35.19,[20221231,2,2,1,2,0,0,0,0,2],[54.41,"+"],76.32],["MAC","Macao",36.11,[20221231,2,1,1,2,0,0,0,1,2],[],92.2],["GTM","Guatemala",36.57,[20221231,2,0,1,3,1,0,0,0,2],[1.66,"+"],39.72],["MMR","Myanmar",37.04,[20221231,1,0,0,0,1,2,2,1,3],[0.01,"="],50.84],["SLE","Sierra Leone",37.96,[20221231,2,2,2,0,1,0,0,1,3],[0.0,"="],43.03],["UGA","Uganda",38.44,[20221231,0,2,2,0,2,0,0,1,1],[0.0,"-"],27.56],["PAK","Pakistan",40.54,[20221231,0,0,0,0,0,0,0,1,2],[0.01,"="],59.04],["MWI","Malawi",40.74,[20221231,1,1,1,3,1,0,0,1,3],[0.03,"-"],19.33],["AZE","Azerbaijan",45.56,[20221231,0,3,2,0,0,0,2,1,0],[0.17,"="],46.94],["CHN","China",47.69,[20221231,3,1,2,3,1,0,0,2,3],[0.0,"="],89.54],["ZWE","Zimbabwe",53.7,[20221231,1,1,1,3,1,2,1,1,4],[0.54,"="],29.11],["IRN","Iran",53.94,[20221231,1,2,2,4,0,0,2,1,2],[0.19,"+"],66.1],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[13.49,"+"],45.43]];