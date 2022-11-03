const dataUpdate="2022.11.03";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["KIR","Kiribati",0.0,[20221024,0,0,0,0,0,0,0,0,0],[0.0,"="],53.69],["OMN","Oman",0.0,[20221101,0,0,0,0,0,0,0,0,0],[0.0,"="],66.61],["BWA","Botswana",0.0,[20221010,0,0,0,0,0,0,0,0,0],[0.0,"="],52.4],["SWE","Sweden",0.0,[20220919,0,0,0,0,0,0,0,0,0],[4.66,"="],72.41],["JOR","Jordan",0.0,[20221101,0,0,0,0,0,0,0,0,2],[0.0,"="],40.39],["ZMB","Zambia",2.78,[20221011,0,0,0,0,0,0,0,1,3],[0.03,"="],40.38],["DZA","Algeria",2.78,[20221030,0,0,0,0,0,0,0,1,3],[0.01,"="],14.43],["CAF","Central African Republic",2.78,[20221023,0,0,0,0,0,0,0,1,3],[0.0,"-"],28.97],["DJI","Djibouti",2.78,[20221017,0,0,0,0,0,0,0,1,2],[0.0,"="],21.47],["PAN","Panama",3.7,[20221017,1,0,0,0,0,0,0,0,-1],[2.67,"="],71.6],["UZB","Uzbekistan",5.56,[20221004,0,0,0,0,0,0,0,0,1],[0.06,"="],49.68],["THA","Thailand",5.56,[20221029,0,0,0,0,0,0,0,0,1],[0.52,"="],74.6],["KAZ","Kazakhstan",5.56,[20221016,0,0,0,0,0,0,0,0,1],[0.26,"="],54.67],["GBR","United Kingdom",5.56,[20221007,0,0,0,0,0,0,0,0,0],[9.13,"-"],75.19],["CAN","Canada",5.56,[20221031,0,0,0,0,0,0,0,0,2],[8.01,"+"],82.28],["DOM","Dominican Republic",5.56,[20221017,0,0,0,0,0,0,0,0,2],[0.29,"="],53.95],["EGY","Egypt",5.56,[20221101,0,0,0,0,0,0,0,0,3],[0.0,"="],35.96],["BTN","Bhutan",5.56,[20221011,0,0,0,0,0,0,0,0,1],[0.91,"="],86.61],["GAB","Gabon",5.56,[20221003,0,0,0,0,0,0,0,0,2],[0.2,"="],10.77],["HUN","Hungary",5.56,[20220926,0,0,0,0,0,0,0,0,2],[0.0,"-"],62.26],["MUS","Mauritius",5.56,[20221010,0,0,0,0,0,0,0,0,2],[9.39,"="],83.74],["CHE","Switzerland",5.56,[20221028,0,0,0,0,0,0,0,0,0],[39.4,"="],68.76],["GEO","Georgia",5.56,[20221031,0,0,0,0,0,0,0,0,2],[0.0,"="],34.08],["BLR","Belarus",5.56,[20220927,0,0,0,0,0,0,0,0,0],[0.0,"="],67.2],["SDN","Sudan",5.56,[20221020,0,0,0,0,0,0,0,0,0],[0.01,"="],9.68],["NAM","Namibia",5.56,[20221031,0,0,0,0,0,0,0,0,0],[0.21,"="],20.18],["AND","Andorra",5.56,[20221007,0,0,0,0,0,0,0,0,2],[9.8,"-"],66.98],["YEM","Yemen",5.56,[20220919,0,0,1,0,0,0,0,0,0],[0.0,"="],2.01],["BEN","Benin",5.56,[20221003,0,0,0,0,0,0,0,0,2],[0.0,"="],20.16],["GIN","Guinea",8.33,[20221031,0,0,0,0,0,0,1,1,2],[0.0,"="],21.53],["TZA","Tanzania",8.33,[20221006,0,0,0,0,0,0,0,1,0],[0.06,"="],34.6],["TJK","Tajikistan",8.33,[20221024,0,0,0,0,0,0,0,1,0],[0.0,"="],51.45],["SYR","Syria",8.33,[20221016,0,0,0,0,0,0,0,1,3],[0.01,"="],9.51],["BFA","Burkina Faso",8.33,[20221031,0,0,0,0,0,0,0,1,3],[0.0,"="],11.72],["LSO","Lesotho",8.33,[20221017,0,0,0,0,0,0,0,1,1],[0.0,"="],37.85],["POL","Poland",9.26,[20221019,1,0,0,0,0,0,0,0,2],[1.47,"-"],56.65],["NER","Niger",10.79,[20220926,0,0,0,0,0,0,0,1,2],[0.0,"="],11.41],["KGZ","Kyrgyz Republic",11.11,[20221030,0,0,0,0,0,0,0,0,2],[0.12,"="],20.38],["MNG","Mongolia",11.11,[20221025,0,0,0,0,0,0,0,0,1],[2.64,"+"],64.02],["TUR","Turkey",11.11,[20221031,0,0,0,0,0,0,0,0,2],[0.0,"="],62.3],["TTO","Trinidad and Tobago",11.11,[20221023,0,0,0,0,0,0,0,0,1],[1.44,"="],46.82],["MLT","Malta",11.11,[20221101,0,0,0,0,0,0,0,0,2],[4.24,"+"],88.34],["SRB","Serbia",11.11,[20221024,0,0,0,0,0,0,0,0,2],[9.75,"-"],47.71],["GRL","Greenland",11.11,[20221010,0,0,0,0,0,0,0,0,1],[0.0,"="],68.15],["ROU","Romania",11.11,[20220926,0,0,0,0,0,0,0,0,0],[2.19,"-"],41.28],["LIE","Liechtenstein",11.11,[20221014,0,0,0,0,0,0,0,0,1],[30.35,"+"],67.22],["LTU","Lithuania",11.11,[20221011,0,0,0,0,0,0,0,0,1],[11.08,"-"],68.34],["NOR","Norway",11.11,[20221023,0,0,0,0,0,0,0,0,1],[2.26,"-"],74.61],["SVN","Slovenia",11.11,[20221024,0,0,0,0,0,0,0,0,2],[31.0,"-"],57.66],["HRV","Croatia",11.11,[20221101,0,0,0,0,0,0,0,0,2],[5.88,"-"],55.81],["MDA","Moldova",11.11,[20221022,0,0,0,0,0,0,0,0,1],[2.02,"="],32.73],["MCO","Monaco",11.11,[20220926,0,0,0,0,0,0,0,0,2],[13.47,"-"],70.34],["KWT","Kuwait",11.11,[20221011,0,0,0,0,0,0,0,0,0],[0.96,"="],78.24],["IRL","Ireland",11.11,[20221018,0,0,0,0,0,0,0,0,1],[3.89,"-"],80.7],["NLD","Netherlands",11.11,[20221023,0,0,0,0,0,0,0,0,0],[10.33,"-"],68.08],["ISL","Iceland",11.11,[20221018,0,0,0,0,0,0,-1,0,0],[9.0,"="],77.82],["JAM","Jamaica",11.11,[20221016,0,0,0,0,-1,0,0,0,1],[0.0,"="],25.96],["LVA","Latvia",11.11,[20221018,0,0,0,0,0,0,0,0,2],[25.38,"-"],70.57],["LUX","Luxembourg",11.11,[20221024,0,0,0,0,0,0,0,0,0],[19.81,"-"],71.45],["MDG","Madagascar",11.11,[20220926,0,0,0,0,0,0,0,0,1],[0.02,"="],5.73],["SVK","Slovak Republic",11.11,[20221031,0,0,0,0,0,0,0,0,2],[5.44,"-"],45.68],["KOR","South Korea",11.11,[20221011,0,0,0,0,0,0,0,0,2],[79.74,"+"],86.25],["FRA","France",11.11,[20221017,0,0,0,0,0,0,0,0,1],[30.87,"-"],78.28],["AFG","Afghanistan",11.11,[20220920,0,2,1,0,1,0,0,0,3],[0.28,"-"],25.35],["ALB","Albania",11.11,[20221013,0,0,0,0,0,0,0,0,2],[0.74,"-"],44.54],["ZAF","South Africa",11.11,[20221028,0,0,0,0,0,0,0,0,0],[0.54,"+"],32.51],["AUS","Australia",11.11,[20221101,0,0,0,0,0,0,0,0,0],[19.45,"+"],83.22],["BGR","Bulgaria",11.11,[20220920,0,0,0,0,0,0,0,0,0],[6.66,"-"],30.57],["BHR","Bahrain",11.11,[20221003,0,0,0,0,0,0,0,0,2],[17.75,"+"],83.3],["PRT","Portugal",11.11,[20221010,0,0,0,0,0,0,0,0,0],[3.61,"-"],86.4],["BRN","Brunei",11.11,[20221031,0,0,0,0,0,0,0,0,1],[110.63,"+"],99.2],["PNG","Papua New Guinea",11.11,[20221031,0,0,0,0,0,0,0,0,2],[0.2,"+"],2.92],["CRI","Costa Rica",11.11,[20221031,0,0,0,0,0,0,0,0,2],[7.34,"="],81.45],["CUB","Cuba",11.11,[20221008,0,0,0,0,0,0,0,0,2],[0.01,"-"],89.17],["FRO","Faeroe Islands",11.11,[20221030,0,0,0,0,0,0,0,0,0],[0.0,"="],76.99],["DNK","Denmark",11.11,[20221012,0,0,0,0,0,0,0,0,0],[13.15,"-"],81.13],["ESP","Spain",11.11,[20221030,0,0,0,0,0,0,0,0,2],[7.26,"="],85.49],["NZL","New Zealand",11.11,[20220930,0,0,0,0,0,0,0,0,2],[60.6,"="],79.75],["EST","Estonia",11.11,[20221004,0,0,0,0,0,0,0,0,1],[7.18,"-"],63.89],["CZE","Czech Republic",11.11,[20221021,0,0,0,0,0,0,0,0,1],[-6.55,"-"],65.67],["SAU","Saudi Arabia",11.11,[20221031,0,0,0,0,0,0,0,0,2],[0.71,"-"],69.55],["ARG","Argentina",13.46,[20220926,0,0,0,0,0,0,0,0,1],[0.42,"="],83.15],["CPV","Cape Verde",13.89,[20221024,0,0,0,0,0,0,0,1,2],[0.0,"="],52.05],["SMR","San Marino",13.89,[20220927,0,0,0,0,0,0,0,1,1],[25.26,"-"],70.15],["BDI","Burundi",13.89,[20221003,0,0,0,0,0,0,0,1,0],[0.0,"-"],0.18],["BGD","Bangladesh",13.89,[20221020,0,0,0,0,0,0,0,1,4],[0.07,"="],72.54],["TLS","Timor-Leste",13.89,[20220920,0,0,0,0,0,0,0,1,3],[0.03,"+"],56.57],["SOM","Somalia",13.89,[20221031,0,0,0,0,0,0,0,1,2],[0.01,"="],33.74],["PSE","Palestine",13.89,[20220927,0,0,0,0,0,0,0,1,1],[],33.85],["TCD","Chad",13.89,[20221009,0,0,0,0,0,0,0,1,3],[0.01,"="],20.42],["VEN","Venezuela",13.89,[20221004,0,0,0,0,0,0,0,1,3],[0.13,"-"],50.48],["PRY","Paraguay",13.89,[20221103,0,0,0,0,0,0,0,1,2],[0.65,"="],51.89],["BMU","Bermuda",13.89,[20221021,0,0,0,0,0,0,0,1,2],[20.19,"+"],74.22],["VUT","Vanuatu",13.89,[20221004,0,0,0,0,0,-1,0,1,2],[0.0,"="],49.36],["MRT","Mauritania",13.89,[20221024,0,0,0,0,1,0,0,1,2],[0.18,"-"],30.09],["SYC","Seychelles",13.89,[20221003,0,0,0,0,0,0,0,1,2],[0.0,"="],75.88],["UGA","Uganda",13.89,[20221028,0,0,0,0,0,0,0,1,3],[0.02,"="],27.02],["CIV","Cote d'Ivoire",13.89,[20221022,0,0,0,0,0,0,0,1,3],[0.03,"="],32.73],["CMR","Cameroon",13.89,[20221031,0,0,0,0,0,0,0,1,0],[0.0,"="],4.6],["URY","Uruguay",13.89,[20221018,0,0,0,0,0,0,0,1,1],[3.83,"="],84.56],["COL","Colombia",13.89,[20221010,1,1,0,0,0,0,0,1,3],[0.15,"="],70.87],["GMB","Gambia",13.89,[20221030,0,0,0,0,0,0,0,1,3],[0.43,"="],13.21],["ECU","Ecuador",13.89,[20221017,0,0,0,0,0,0,0,1,2],[0.39,"="],78.26],["NIC","Nicaragua",13.89,[20221004,0,0,0,0,0,0,0,1,0],[0.04,"-"],83.56],["GRC","Greece",14.81,[20221024,1,0,0,0,0,0,0,0,2],[73.59,"="],73.57],["CYP","Cyprus",14.81,[20220919,0,1,0,0,0,0,0,0,3],[33.38,"="],72.07],["ISR","Israel",14.81,[20221031,1,0,0,0,0,0,0,0,2],[9.37,"-"],65.15],["BEL","Belgium",14.81,[20221017,0,1,0,0,0,0,0,0,2],[6.09,"="],78.61],["ITA","Italy",15.51,[20221024,0,1,0,0,0,0,0,0,2],[20.7,"-"],81.26],["SSD","South Sudan",16.14,[20221010,0,0,0,0,0,0,0,1,3],[0.63,"+"],19.14],["CHL","Chile",16.81,[20221027,0,0,0,1,0,0,0,1,2],[27.64,"-"],90.22],["AGO","Angola",17.1,[20221031,0,2,0,0,0,0,0,1,2],[0.0,"="],21.96],["MEX","Mexico",17.59,[20220929,1,0,0,0,-1,0,0,1,2],[0.42,"+"],64.19],["SGP","Singapore",17.59,[20221031,1,0,0,0,0,0,0,1,2],[77.58,"-"],90.9],["MOZ","Mozambique",17.59,[20221002,0,1,0,0,0,0,0,1,2],[0.02,"="],41.02],["GUY","Guyana",18.52,[20221031,1,1,0,0,0,0,0,0,1],[0.13,"-"],57.08],["SEN","Senegal",19.44,[20221031,0,0,0,0,1,0,0,1,3],[0.0,"="],7.29],["MAR","Morocco",20.33,[20221031,0,1,0,0,0,0,0,0,3],[0.1,"+"],62.76],["KHM","Cambodia",20.37,[20220930,1,0,0,0,0,0,1,1,2],[0.01,"="],86.86],["SUR","Suriname",21.3,[20221016,1,1,0,0,0,0,0,1,2],[1.05,"="],38.49],["TWN","Taiwan",21.3,[20221031,1,1,0,0,0,0,0,1,2],[134.5,"-"],85.74],["BLZ","Belize",21.89,[20221031,1,1,0,0,0,0,0,0,0],[0.5,"="],54.48],["BRA","Brazil",22.59,[20221024,0,0,0,0,0,0,2,1,2],[2.01,"-"],80.04],["NPL","Nepal",22.64,[20221017,0,0,0,1,0,0,0,1,4],[0.05,"+"],76.57],["RUS","Russia",22.69,[20221101,0,1,2,1,0,0,0,0,2],[4.53,"-"],53.51],["VNM","Vietnam",23.15,[20221029,0,1,1,1,0,0,0,0,3],[0.77,"-"],85.95],["DEU","Germany",23.15,[20221101,0,0,0,0,0,1,1,1,2],[45.42,"-"],76.15],["HND","Honduras",23.15,[20221031,0,1,1,0,0,0,0,1,3],[0.3,"+"],54.63],["SWZ","Eswatini",23.15,[20221024,1,0,1,0,0,0,0,1,1],[0.39,"="],40.83],["MLI","Mali",24.0,[20221019,0,0,2,0,0,0,0,1,0],[0.01,"="],9.24],["FIN","Finland",24.07,[20221012,1,1,0,0,1,0,0,0,1],[34.6,"="],78.41],["BOL","Bolivia",24.07,[20220923,1,1,1,0,0,0,0,1,2],[0.22,"-"],50.4],["COD","Democratic Republic of Congo",25.0,[20221031,0,0,1,0,0,0,1,1,3],[0.01,"="],3.76],["RKS","Kosovo",25.04,[20221023,2,2,2,0,0,0,0,0,1],[0.12,"+"],46.28],["SLB","Solomon Islands",25.22,[20221030,1,1,1,0,0,0,0,1,3],[0.0,"="],35.12],["RWA","Rwanda",25.62,[20221017,0,0,0,0,0,0,0,0,1],[0.03,"="],67.36],["USA","United States",25.89,[20221031,1,1,0,0,0,1,0,1,2],[10.92,"+"],68.35],["ABW","Aruba",25.93,[20221010,0,1,1,2,0,0,0,0,2],[6.02,"+"],78.71],["BIH","Bosnia and Herzegovina",25.93,[20221031,1,0,1,2,0,0,0,0,2],[0.79,"-"],26.17],["LKA","Sri Lanka",25.93,[20221023,0,1,1,1,0,0,0,1,1],[0.06,"="],67.57],["BRB","Barbados",26.85,[20221024,1,1,0,2,0,0,0,1,2],[20.38,"="],54.96],["SLV","El Salvador",26.85,[20221025,1,1,1,1,0,0,0,0,1],[0.0,"="],68.56],["LBR","Liberia",27.53,[20221031,0,1,1,0,0,0,0,1,3],[0.02,"="],66.22],["LBY","Libya",29.07,[20221010,-1,2,2,0,0,0,0,1,3],[0.04,"="],18.05],["GRD","Grenada",29.38,[20220328,1,0,0,3,0,0,0,1,3],[0.0,"="],30.99],["MYS","Malaysia",29.63,[20221029,1,1,1,0,1,0,0,0,2],[9.79,"+"],81.09],["IDN","Indonesia",29.89,[20221031,0,1,0,0,0,0,0,1,-1],[1.25,"+"],62.06],["JPN","Japan",31.48,[20221024,1,1,1,1,0,1,1,1,1],[36.73,"+"],83.04],["QAT","Qatar",32.12,[20221017,1,1,1,0,1,0,0,1,2],[14.91,"-"],105.66],["PHL","Philippines",32.17,[20221031,1,1,1,0,1,0,0,1,2],[1.03,"-"],63.56],["BHS","Bahamas",32.41,[20221031,1,1,1,0,1,0,0,1,2],[0.8,"="],40.32],["DMA","Dominica",32.41,[20221030,1,1,1,2,0,0,0,1,3],[0.0,"="],42.14],["GHA","Ghana",33.78,[20221030,0,2,2,0,0,0,0,1,1],[0.06,"="],25.91],["HTI","Haiti",34.26,[20221023,0,1,1,4,0,0,0,1,2],[0.0,"-"],2.04],["AUT","Austria",35.19,[20221031,2,2,1,2,0,0,0,0,2],[49.98,"-"],76.31],["COG","Congo",35.32,[20220922,0,2,2,2,0,0,0,1,3],[0.0,"="],10.96],["FJI","Fiji",35.61,[20221009,0,1,0,0,1,0,0,1,2],[0.11,"="],68.76],["KEN","Kenya",36.0,[20221003,0,1,2,3,0,0,0,1,2],[0.12,"-"],19.44],["ARE","United Arab Emirates",36.11,[20221030,1,2,2,0,0,0,0,1,2],[3.15,"="],103.72],["GTM","Guatemala",36.57,[20221026,2,0,1,3,1,0,0,0,2],[1.94,"-"],39.1],["IND","India",37.04,[20221010,0,1,1,0,0,2,2,1,3],[0.09,"-"],67.05],["TGO","Togo",39.36,[20221005,0,1,1,3,0,2,0,1,-1],[0.02,"="],16.3],["SLE","Sierra Leone",39.65,[20221031,2,2,2,0,1,0,0,1,3],[0.0,"="],30.91],["PER","Peru",40.17,[20220926,1,1,1,0,1,0,1,1,3],[1.72,"-"],83.07],["AZE","Azerbaijan",40.35,[20221031,0,3,2,0,0,0,2,1,0],[0.43,"+"],46.94],["PAK","Pakistan",40.39,[20221030,0,0,0,0,0,0,0,1,2],[0.09,"="],55.99],["HKG","Hong Kong",40.46,[20221029,2,1,1,3,0,0,0,2,2],[68.99,"-"],89.91],["ETH","Ethiopia",40.74,[20221017,1,1,1,3,1,0,0,1,3],[0.01,"="],29.75],["MMR","Myanmar",40.74,[20221030,1,1,0,0,1,2,2,1,3],[0.23,"="],50.84],["MWI","Malawi",40.74,[20221031,1,1,1,3,1,0,0,1,3],[0.0,"="],14.45],["IRQ","Iraq",41.38,[20221031,0,2,2,1,0,0,0,1,2],[0.08,"="],17.75],["LBN","Lebanon",41.43,[20221017,1,2,1,1,1,2,0,1,1],[1.13,"+"],43.88],["TUN","Tunisia",41.6,[20221031,0,1,2,4,0,0,0,1,3],[0.53,"="],51.67],["LAO","Laos",42.04,[20221017,2,1,1,4,0,0,0,1,3],[0.09,"+"],69.36],["MAC","Macao",45.37,[20221030,2,1,1,2,1,0,0,3,3],[],86.22],["NGA","Nigeria",46.68,[20221015,0,0,1,3,1,0,2,1,3],[0.01,"="],20.25],["TON","Tonga",48.64,[20221101,1,2,1,0,0,2,2,1,1],[0.0,"="],71.87],["ZWE","Zimbabwe",53.7,[20221026,1,1,1,3,1,2,1,1,4],[0.0,"="],29.11],["IRN","Iran",53.94,[20221031,1,2,2,4,0,0,2,1,2],[0.13,"-"],66.03],["UKR","Ukraine",60.16,[20221018,3,1,2,3,2,1,2,3,3],[0.15,"-"],38.17],["CHN","China",66.2,[20221101,2,3,2,4,1,2,2,2,3],[0.15,"+"],89.19],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9.99,"-"],45.43]];