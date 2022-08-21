const dataUpdate="2022.08.21";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["PRI","Puerto Rico",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["HUN","Hungary",0.0,[20220812,0,0,0,0,0,0,0,0,2],[24.03,"="],63.87],["GUM","Guam",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["ERI","Eritrea",0.0,[20200121,0,0,0,0,0,0,0,0,0],[0.06,"="]],["BWA","Botswana",2.78,[20220815,0,0,0,0,0,0,0,1,2],[0.16,"="],58.44],["ZMB","Zambia",2.78,[20220808,0,0,0,0,0,0,0,1,3],[0.26,"="],28.79],["KAZ","Kazakhstan",5.56,[20220815,0,0,0,0,0,0,0,0,1],[5.43,"-"],54.96],["MUS","Mauritius",5.56,[20220815,0,0,0,0,0,0,0,0,2],[63.8,"="],75.27],["DOM","Dominican Republic",5.56,[20220815,0,0,0,0,0,0,0,0,0],[2.33,"="],54.21],["AND","Andorra",5.56,[20220730,0,0,0,0,0,0,0,0,0],[14.05,"="],67.64],["YEM","Yemen",5.56,[20220801,0,0,1,0,0,0,0,0,0],[0.01,"="],1.37],["SDN","Sudan",8.33,[20220811,0,0,0,0,0,0,0,1,0],[0.01,"="],9.94],["BEN","Benin",8.33,[20220812,0,0,0,0,0,0,0,1,2],[0.0,"="],20.66],["BFA","Burkina Faso",8.33,[20220731,0,0,0,0,0,0,0,1,3],[0.0,"="],7.42],["TJK","Tajikistan",8.33,[20220815,0,0,0,0,0,0,0,1,0],[0.0,"="],51.77],["NAM","Namibia",8.33,[20220808,0,0,0,0,0,0,0,1,0],[0.0,"="],19.35],["TZA","Tanzania",8.33,[20220722,0,0,0,0,0,0,0,1,0],[0.06,"="],23.24],["NER","Niger",10.78,[20220808,0,0,0,0,0,0,0,1,2],[0.03,"="],11.83],["GAB","Gabon",11.11,[20220801,0,0,0,0,0,0,0,0,2],[0.28,"="],10.98],["IRL","Ireland",11.11,[20220720,0,0,0,0,0,0,0,0,1],[8.06,"="],81.19],["CRI","Costa Rica",11.11,[20220731,0,0,0,0,0,0,0,0,1],[32.16,"="],81.28],["CUB","Cuba",11.11,[20220817,0,0,0,0,0,0,0,0,2],[0.69,"-"],88.69],["FRO","Faeroe Islands",11.11,[20220802,0,0,0,0,0,0,0,0,0],[0.0,"="],77.32],["FRA","France",11.11,[20220801,0,0,0,0,0,0,0,0,2],[28.27,"="],78.64],["SWE","Sweden",11.11,[20220808,0,0,0,0,0,0,0,0,0],[9.83,"="],73.19],["EST","Estonia",11.11,[20220817,0,0,0,0,0,0,0,0,1],[19.9,"="],63.56],["SVN","Slovenia",11.11,[20220808,0,0,0,0,0,0,0,0,2],[61.85,"+"],57.67],["DNK","Denmark",11.11,[20220819,0,0,0,0,0,0,0,0,0],[24.99,"="],81.76],["SVK","Slovak Republic",11.11,[20220808,0,0,0,0,0,0,0,0,2],[0.0,"="],50.73],["GRL","Greenland",11.11,[20220819,0,0,0,0,0,0,0,0,1],[0.0,"="],68.46],["SAU","Saudi Arabia",11.11,[20220808,0,0,0,0,0,0,0,0,2],[0.29,"-"],69.77],["SRB","Serbia",11.11,[20220808,0,0,0,0,0,0,0,0,2],[61.33,"-"],47.71],["ROU","Romania",11.11,[20220731,0,0,0,0,0,0,0,0,1],[22.43,"-"],41.98],["MLT","Malta",11.11,[20220816,0,0,0,0,0,0,0,0,2],[8.93,"+"],89.32],["CHE","Switzerland",11.11,[20220815,0,0,0,0,0,0,0,0,0],[30.06,"="],69.13],["JAM","Jamaica",11.11,[20220818,0,0,0,0,0,0,0,0,1],[4.0,"-"],25.6],["AFG","Afghanistan",11.11,[20220805,0,2,1,0,1,0,0,0,3],[0.59,"+"],23.98],["ZAF","South Africa",11.11,[20220815,0,0,0,0,0,0,0,0,0],[0.43,"-"],32.47],["ALB","Albania",11.11,[20220810,0,0,0,0,0,0,0,0,2],[21.8,"-"],43.97],["MDG","Madagascar",11.11,[20220819,0,0,0,0,0,0,0,0,1],[0.02,"="],4.8],["AUS","Australia",11.11,[20220816,0,0,0,0,0,0,0,0,2],[65.47,"-"],83.91],["MDA","Moldova",11.11,[20220818,0,0,0,0,0,0,0,0,1],[33.06,"="],34.74],["MNG","Mongolia",11.11,[20220812,0,0,0,0,0,0,0,0,2],[29.85,"="],64.99],["LVA","Latvia",11.11,[20220819,0,0,0,0,0,0,0,0,2],[65.41,"="],69.69],["LTU","Lithuania",11.11,[20220813,0,0,0,0,0,0,0,0,1],[44.02,"-"],67.39],["ISL","Iceland",11.11,[20220816,0,0,0,0,0,0,0,0,0],[22.56,"="],78.36],["BHR","Bahrain",11.11,[20220805,0,0,0,0,0,0,0,0,2],[25.35,"-"],83.71],["BGR","Bulgaria",11.11,[20220808,0,0,0,0,0,0,0,0,2],[15.23,"-"],30.03],["LIE","Liechtenstein",11.11,[20220819,0,0,0,0,0,0,0,0,1],[29.22,"="],67.72],["NOR","Norway",11.11,[20220717,0,0,0,0,0,0,0,0,1],[2.36,"-"],74.98],["TTO","Trinidad and Tobago",11.11,[20220819,0,0,0,0,0,0,0,0,1],[19.65,"+"],46.94],["KWT","Kuwait",11.11,[20220809,0,0,0,0,0,0,0,0,1],[1.8,"="],78.39],["KIR","Kiribati",11.11,[20220801,0,0,0,0,0,0,0,0,4],[0.0,"="],48.09],["GBR","United Kingdom",11.11,[20220817,0,0,0,0,0,0,0,0,1],[8.53,"="],75.21],["UZB","Uzbekistan",11.11,[20220726,0,0,0,0,0,0,0,0,1],[0.06,"="],46.34],["GEO","Georgia",11.11,[20220803,0,0,0,0,0,0,0,0,2],[44.18,"="],33.89],["OMN","Oman",12.32,[20220726,0,0,0,0,0,0,0,0,0],[0.96,"="],67.35],["NIC","Nicaragua",13.89,[20220815,0,0,0,0,0,0,0,1,0],[0.06,"="],82.58],["GMB","Gambia",13.89,[20220810,0,0,0,0,0,0,0,1,3],[0.0,"="],13.54],["SMR","San Marino",13.89,[20220808,0,0,0,0,0,0,0,1,1],[39.58,"="],70.03],["PRY","Paraguay",13.89,[20220807,0,0,0,0,0,0,0,1,1],[2.87,"="],52.29],["PRT","Portugal",13.89,[20220808,0,0,0,0,0,0,0,1,2],[21.46,"="],86.54],["KOR","South Korea",13.89,[20220816,0,0,0,0,0,0,0,1,3],[246.42,"-"],86.17],["UGA","Uganda",13.89,[20220808,0,0,0,0,0,0,0,1,3],[0.0,"="],27.12],["TUR","Turkey",13.89,[20220814,0,0,0,0,0,0,0,1,2],[63.69,"="],62.68],["CMR","Cameroon",13.89,[20220815,0,0,0,0,0,0,0,1,2],[0.0,"="],4.51],["TCD","Chad",13.89,[20220814,0,0,0,0,0,0,0,1,3],[0.01,"="],21.01],["URY","Uruguay",13.89,[20220807,0,0,0,0,0,0,0,1,1],[7.58,"="],84.39],["VEN","Venezuela",13.89,[20220815,0,0,0,0,0,0,0,1,3],[0.61,"-"],50.66],["CAF","Central African Republic",13.89,[20220810,0,0,0,0,0,0,0,1,3],[0.0,"="],22.84],["BDI","Burundi",13.89,[20220812,0,0,0,0,0,0,0,1,0],[0.97,"="],0.14],["ECU","Ecuador",13.89,[20220815,0,0,0,0,0,0,0,1,2],[10.81,"="],79.02],["VUT","Vanuatu",13.89,[20220811,0,0,0,0,0,0,0,1,2],[1.12,"-"],40.93],["BRN","Brunei",13.95,[20220719,0,0,0,0,0,0,0,1,2],[0.0,"="],97.9],["POL","Poland",14.81,[20220817,1,0,0,0,0,0,0,0,2],[9.22,"+"],58.83],["CZE","Czech Republic",14.81,[20220802,0,1,0,0,0,0,0,0,1],[17.19,"-"],65.51],["HRV","Croatia",14.81,[20220815,0,1,0,0,0,0,0,0,2],[20.3,"+"],55.35],["CYP","Cyprus",14.81,[20220815,0,1,0,0,0,0,0,0,2],[25.2,"="],72.04],["DEU","Germany",14.81,[20220808,0,-1,0,0,0,1,0,0,2],[46.52,"="],76.03],["GRC","Greece",14.81,[20220815,1,0,0,0,0,0,0,0,2],[105.62,"="],73.09],["ISR","Israel",14.81,[20220815,1,0,0,0,0,0,0,0,2],[15.46,"-"],66.2],["JOR","Jordan",14.81,[20220814,0,1,0,0,0,0,0,0,2],[8.32,"="],40.86],["BLR","Belarus",14.82,[20220801,0,0,0,0,0,0,0,1,0],[0.0,"="],66.52],["NZL","New Zealand",14.97,[20220808,0,0,0,0,0,0,0,1,2],[81.52,"-"],80.5],["TLS","Timor-Leste",15.13,[20220807,0,0,0,0,0,0,0,1,3],[0.43,"="],55.85],["LUX","Luxembourg",15.42,[20220815,0,0,0,0,0,0,0,1,0],[14.17,"="],72.4],["ITA","Italy",15.52,[20220819,0,1,0,0,0,0,0,0,2],[35.66,"-"],80.96],["NLD","Netherlands",15.65,[20220717,0,0,0,0,0,0,0,1,0],[8.79,"="],68.39],["COL","Colombia",15.74,[20220819,1,0,0,0,0,0,0,1,3],[1.89,"="],70.65],["CIV","Cote d'Ivoire",15.74,[20220713,0,1,0,0,0,0,0,1,3],[0.19,"="],30.46],["BMU","Bermuda",16.03,[20220810,0,0,0,0,0,0,0,1,2],[27.07,"="],74.25],["ARG","Argentina",16.21,[20220815,0,0,0,0,0,0,0,1,1],[9.86,"="],83.31],["SSD","South Sudan",16.27,[20220819,0,0,0,0,0,0,0,1,3],[0.0,"="],14.25],["KHM","Cambodia",17.59,[20220812,1,0,0,0,0,0,0,1,2],[0.16,"-"],87.18],["PAN","Panama",17.59,[20220808,1,0,0,0,0,0,0,1,2],[21.45,"="],72.11],["MCO","Monaco",17.59,[20220815,0,1,0,0,0,0,0,1,2],[11.65,"="],69.96],["RWA","Rwanda",18.47,[20220813,0,0,0,0,0,0,0,0,1],[0.04,"-"],77.91],["CAN","Canada",19.41,[20220815,0,0,0,0,1,0,0,1,2],[9.74,"+"],82.61],["CPV","Cape Verde",19.44,[20220814,0,0,0,0,0,0,1,1,2],[0.75,"-"],52.4],["IDN","Indonesia",20.73,[20220817,1,0,0,0,0,0,0,1,2],[1.74,"-"],62.3],["BEL","Belgium",20.96,[20220819,0,1,0,0,0,0,0,2,2],[15.55,"="],78.86],["SUR","Suriname",21.3,[20220814,1,1,0,0,0,0,0,1,2],[0.46,"="],38.81],["MEX","Mexico",22.22,[20220808,1,1,1,0,0,0,0,1,3],[2.66,"-"],63.1],["PSE","Palestine",22.22,[20220810,0,0,0,0,0,0,0,4,4],[],34.56],["BTN","Bhutan",22.22,[20220723,0,0,1,0,0,0,0,2,4],[2.15,"="],86.7],["ESP","Spain",23.61,[20220808,0,0,1,3,0,0,0,1,2],[6.3,"="],85.55],["FIN","Finland",24.07,[20220819,1,1,0,0,1,0,0,0,-1],[29.8,"="],78.4],["THA","Thailand",24.07,[20220813,1,1,0,1,0,0,0,1,1],[2.82,"+"],74.47],["GUY","Guyana",24.85,[20220809,1,1,0,0,0,0,0,1,1],[6.61,"-"],57.37],["RKS","Kosovo",25.04,[20220815,2,2,2,0,0,0,0,0,1],[25.4,"-"],46.26],["VNM","Vietnam",25.93,[20220815,0,1,1,2,0,0,0,0,3],[2.63,"+"],84.13],["ABW","Aruba",25.93,[20220808,0,1,1,2,0,0,0,0,2],[21.41,"="],78.26],["BIH","Bosnia and Herzegovina",25.93,[20220816,1,0,1,2,0,0,0,0,2],[11.26,"="],25.87],["AGO","Angola",26.03,[20220808,0,2,1,0,0,0,0,1,2],[0.0,"="],22.36],["MRT","Mauritania",26.85,[20220815,1,1,1,0,0,0,0,1,2],[0.07,"-"],30.56],["TWN","Taiwan",26.85,[20220813,1,1,0,0,0,0,0,3,2],[91.85,"+"],83.91],["SYR","Syria",26.85,[20220817,1,1,1,0,0,0,0,1,-1],[0.11,"="],9.26],["MAR","Morocco",27.1,[20220809,0,1,0,0,0,0,0,1,3],[0.22,"-"],63.31],["RUS","Russia",28.24,[20220815,0,1,2,1,0,0,0,2,2],[21.68,"+"],51.93],["PNG","Papua New Guinea",28.54,[20220815,0,1,1,2,0,0,0,1,2],[0.04,"="],2.84],["MOZ","Mozambique",28.7,[20220731,0,1,1,2,0,0,0,1,2],[0.06,"="],39.92],["CHL","Chile",28.8,[20220815,1,1,0,2,0,0,0,1,2],[46.99,"-"],90.53],["COG","Congo",29.31,[20220815,0,0,1,2,0,0,1,1,3],[0.0,"="],11.21],["GRD","Grenada",29.37,[20220328,1,0,0,3,0,0,0,1,3],[33.77,"+"],31.08],["LBR","Liberia",29.79,[20220819,1,1,1,0,0,0,0,1,4],[0.22,"="],44.83],["FJI","Fiji",29.98,[20220815,0,1,0,0,1,0,0,1,2],[1.64,"="],68.88],["PHL","Philippines",30.37,[20220730,1,1,1,0,1,0,0,1,4],[3.18,"-"],63.08],["SLB","Solomon Islands",30.9,[20220813,1,1,1,0,0,0,1,1,3],[0.0,"="],27.13],["NPL","Nepal",31.25,[20220815,2,0,0,1,0,0,0,1,4],[1.13,"+"],69.51],["SGP","Singapore",31.48,[20220808,1,1,1,0,0,1,0,1,2],[58.28,"-"],91.71],["LSO","Lesotho",31.65,[20220817,0,2,2,3,0,0,0,1,4],[0.0,"="],38.25],["QAT","Qatar",32.2,[20220818,1,1,1,0,1,0,0,1,3],[22.29,"-"],102.49],["DMA","Dominica",32.41,[20220814,1,1,1,2,0,0,0,1,3],[0.0,"="],42.21],["SEN","Senegal",32.41,[20220815,1,1,1,0,1,0,0,1,3],[0.12,"="],6.39],["USA","United States",32.63,[20220802,1,1,0,0,2,1,0,1,2],[30.52,"+"],67.37],["SWZ","Eswatini",32.66,[20220801,0,1,1,4,0,0,0,1,1],[0.22,"-"],28.69],["LBY","Libya",32.76,[20220802,1,2,2,0,0,0,0,1,3],[1.16,"="],18.17],["BRA","Brazil",33.17,[20220808,2,1,1,0,1,1,1,1,2],[7.8,"="],79.93],["KGZ","Kyrgyz Republic",33.33,[20220815,0,0,2,4,0,0,0,0,2],[1.15,"="],20.33],["TGO","Togo",33.76,[20220814,0,1,1,3,0,2,0,1,3],[0.14,"+"],18.02],["BGD","Bangladesh",34.26,[20220813,2,1,1,0,0,1,0,1,4],[0.1,"="],71.44],["HTI","Haiti",34.26,[20220815,0,1,2,4,0,0,0,1,2],[0.0,"-"],1.45],["AZE","Azerbaijan",34.41,[20220813,0,3,2,0,2,0,0,1,0],[4.79,"+"],47.13],["IRQ","Iraq",34.53,[20220808,0,2,2,1,0,0,0,1,2],[1.08,"="],17.8],["ARE","United Arab Emirates",34.94,[20220718,1,1,1,0,1,0,0,2,3],[7.49,"-"],104.56],["AUT","Austria",35.19,[20220815,2,2,1,2,0,0,0,0,2],[58.69,"="],76.44],["SOM","Somalia",35.19,[20220812,0,0,2,1,0,2,0,1,3],[0.0,"="],12.41],["HND","Honduras",35.85,[20220812,2,2,1,0,0,0,0,1,3],[4.37,"="],53.79],["LKA","Sri Lanka",36.11,[20220807,0,1,1,1,1,1,0,1,3],[0.61,"-"],66.88],["SLV","El Salvador",36.93,[20220816,1,1,1,2,1,0,0,0,4],[0.0,"="],68.59],["IND","India",37.04,[20220816,0,1,1,0,0,2,2,1,3],[0.89,"-"],66.72],["JPN","Japan",37.53,[20220816,1,1,1,1,0,1,1,1,1],[167.6,"+"],82.33],["EGY","Egypt",37.96,[20220816,1,1,2,3,0,0,0,0,3],[0.0,"="],35.68],["BLZ","Belize",38.55,[20220808,1,1,1,0,1,0,1,1,2],[11.89,"="],54.71],["KEN","Kenya",39.32,[20220805,0,1,2,3,0,0,0,1,2],[0.03,"="],17.6],["NGA","Nigeria",39.49,[20220731,0,1,1,3,1,0,0,1,3],[0.03,"+"],13.2],["COD","Democratic Republic of Congo",39.81,[20220812,0,1,1,0,1,0,2,1,3],[0.01,"="],2.64],["PER","Peru",40.16,[20220815,1,1,1,0,1,0,1,1,3],[14.49,"-"],83.02],["PAK","Pakistan",40.48,[20220729,0,0,0,0,0,0,0,1,4],[0.25,"+"],56.5],["MLI","Mali",40.74,[20220808,0,2,2,3,0,0,0,1,3],[0.01,"="],6.84],["BHS","Bahamas",40.74,[20220808,1,1,1,3,1,0,0,1,4],[2.83,"+"],39.89],["MWI","Malawi",40.74,[20220731,1,1,1,3,1,0,0,1,3],[0.05,"="],9.72],["LBN","Lebanon",41.56,[20220808,1,2,1,1,1,2,0,1,1],[15.95,"-"],42.74],["TUN","Tunisia",41.59,[20220814,0,1,2,4,0,0,0,1,3],[3.06,"="],52.02],["MYS","Malaysia",41.67,[20220814,1,1,1,1,1,1,1,0,2],[10.06,"-"],81.86],["GHA","Ghana",42.59,[20220813,0,2,2,4,0,0,0,1,1],[0.05,"="],24.4],["SLE","Sierra Leone",42.66,[20220815,2,2,2,0,1,0,0,1,3],[0.01,"="],25.77],["ETH","Ethiopia",42.67,[20220801,1,1,1,3,1,0,0,1,3],[0.03,"="],30.52],["GTM","Guatemala",43.98,[20220801,2,1,1,3,1,1,0,1,2],[10.27,"+"],38.28],["DZA","Algeria",45.21,[20220808,1,2,1,4,1,0,0,1,3],[0.24,"-"],15.51],["SYC","Seychelles",45.37,[20220712,1,0,2,4,1,0,0,1,3],[23.24,"="],76.2],["BOL","Bolivia",46.3,[20220815,2,1,1,1,1,1,1,1,3],[16.09,"-"],50.34],["GIN","Guinea",46.3,[20220725,1,1,1,3,0,0,2,1,2],[0.0,"="],18.98],["HKG","Hong Kong",47.13,[20220813,1,1,2,4,0,0,0,2,2],[75.62,"+"],87.28],["BRB","Barbados",47.22,[20220808,1,1,1,2,1,1,1,1,2],[100.17,"-"],54.86],["TKM","Turkmenistan",47.22,[20200909,1,2,2,0,0,0,2,4,1],[],46.04],["TON","Tonga",48.64,[20220809,1,2,1,0,0,2,2,1,4],[98.67,"="],72.22],["DJI","Djibouti",49.07,[20220815,1,1,1,4,2,0,0,1,3],[0.0,"="],17.94],["LAO","Laos",53.01,[20220811,2,1,1,4,1,2,0,1,3],[1.64,"-"],70.34],["ZWE","Zimbabwe",53.7,[20220807,1,1,1,3,1,2,1,1,3],[0.09,"+"],29.34],["IRN","Iran",53.94,[20220815,1,2,2,4,0,0,2,1,2],[5.86,"-"],66.03],["MMR","Myanmar",54.63,[20220815,1,1,1,2,1,2,2,1,4],[0.06,"-"],51.2],["MAC","Macao",57.41,[20220813,1,3,1,2,0,2,2,3,3],[],86.51],["UKR","Ukraine",69.44,[20220819,3,1,2,3,1,1,2,3,3],[2.84,"+"],34.81],["CHN","China",73.61,[20220815,3,3,2,4,2,3,1,2,4],[0.2,"-"],88.95],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[77.24,"-"],45.35]];