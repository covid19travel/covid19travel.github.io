const dataUpdate="2021.09.28";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["NIC","Nicaragua",2.78,[20210906,0,0,0,0,0,0,0,1,2],[1.52,"="]],["PRI","Puerto Rico",12.04,[20210926,1,0,1,0,0,0,0,1,3],[]],["SDN","Sudan",13.89,[20210911,0,0,0,0,0,0,0,1,4],[0.05,"+"]],["FRO","Faeroe Islands",13.89,[20210927,0,0,0,0,0,0,0,1,0],[16.66,"+"]],["BFA","Burkina Faso",13.89,[20210927,0,0,0,0,0,0,0,1,4],[0.09,"="]],["GMB","Gambia",13.89,[20210927,0,0,0,0,0,0,0,1,4],[0.25,"="]],["ABW","Aruba",15.28,[20210914,0,2,0,4,0,0,0,0,2],[21.14,"-"]],["BDI","Burundi",15.74,[20210926,0,2,0,0,0,0,0,1,1],[2.6,"="]],["TZA","Tanzania",17.59,[20210926,1,0,0,0,0,0,0,1,1],[0.0,"="]],["CIV","Cote d'Ivoire",17.59,[20210924,0,0,0,0,0,1,0,1,4],[0.45,"-"]],["NER","Niger",19.44,[20210914,0,0,2,1,0,0,0,2,3],[0.02,"+"]],["BLR","Belarus",19.44,[20210920,0,0,0,0,0,0,0,3,2],[20.83,"="]],["BGR","Bulgaria",20.37,[20210831,0,1,0,0,0,0,0,2,3],[22.31,"+"]],["EST","Estonia",22.22,[20210927,0,0,1,1,0,0,0,1,2],[40.75,"+"]],["VUT","Vanuatu",22.22,[20210927,0,0,0,0,0,0,0,4,0],[0.0,"="]],["DNK","Denmark",24.07,[20210927,1,1,0,0,0,0,0,2,3],[6.06,"+"]],["SSD","South Sudan",25.0,[20210926,0,0,0,3,0,0,0,2,2],[0.16,"-"]],["TCD","Chad",25.0,[20210913,0,0,0,3,0,0,0,2,4],[0.0,"="]],["LIE","Liechtenstein",25.0,[20210924,1,1,1,0,0,1,0,3,3],[9.74,"-"]],["LTU","Lithuania",25.0,[20210928,0,0,1,1,0,0,0,2,2],[52.26,"+"]],["COG","Congo",25.0,[20210927,0,0,1,3,0,2,0,2,3],[1.41,"+"]],["HUN","Hungary",27.78,[20210919,0,0,1,3,0,0,0,1,2],[4.48,"+"]],["CAF","Central African Republic",27.78,[20210920,0,0,0,0,0,3,0,2,3],[0.09,"-"]],["SYR","Syria",28.7,[20210906,3,1,0,0,0,0,0,1,2],[1.97,"+"]],["GHA","Ghana",29.17,[20210919,0,0,2,3,0,0,0,1,4],[0.67,"+"]],["TJK","Tajikistan",29.63,[20210920,1,1,0,0,0,0,0,4,3],[0.0,"="]],["MDA","Moldova",29.63,[20210917,1,1,0,2,0,0,0,2,3],[26.18,"+"]],["AFG","Afghanistan",29.63,[20210915,2,0,0,0,0,0,2,4,0],[0.18,"+"]],["SLE","Sierra Leone",29.63,[20210927,1,1,0,0,1,0,0,2,3],[0.0,"="]],["MEX","Mexico",29.63,[20210919,0,2,1,0,1,1,1,1,4],[6.95,"-"]],["GRL","Greenland",30.09,[20210912,1,0,1,3,0,0,0,1,2],[24.16,"-"]],["MAC","Macao",31.48,[20210911,1,0,0,4,0,0,0,2,2],[]],["MWI","Malawi",31.48,[20210927,0,1,1,3,0,0,0,1,3],[0.1,"-"]],["SLV","El Salvador",32.41,[20210920,1,1,2,1,0,0,0,1,4],[5.12,"="]],["CZE","Czech Republic",32.41,[20210920,1,1,1,1,0,0,0,2,2],[4.34,"+"]],["HRV","Croatia",33.8,[20210830,1,1,1,3,0,0,0,1,3],[27.35,"-"]],["CMR","Cameroon",34.26,[20210927,0,1,1,3,0,0,0,2,3],[0.0,"="]],["LUX","Luxembourg",34.26,[20210926,0,1,1,2,0,0,0,3,2],[13.46,"+"]],["EGY","Egypt",35.19,[20210921,1,1,1,4,0,0,0,0,3],[0.66,"="]],["YEM","Yemen",35.19,[20210924,1,1,1,0,0,2,1,2,2],[0.13,"="]],["VIR","United States Virgin Islands",35.19,[20210927,1,1,1,3,1,0,0,1,3],[]],["BIH","Bosnia and Herzegovina",35.19,[20210830,1,1,1,3,0,0,0,1,2],[20.28,"-"]],["SVN","Slovenia",35.19,[20210927,1,1,1,3,0,0,0,1,3],[42.5,"-"]],["SOM","Somalia",35.19,[20210920,0,1,1,3,0,1,0,1,3],[0.67,"+"]],["TUN","Tunisia",36.11,[20210927,1,1,1,1,0,1,0,2,3],[6.13,"+"]],["SRB","Serbia",36.11,[20210921,1,1,1,2,0,1,0,1,2],[74.71,"+"]],["SVK","Slovak Republic",36.11,[20210919,1,1,1,3,0,0,0,2,2],[14.88,"+"]],["TWN","Taiwan",36.57,[20210927,0,1,1,3,1,0,1,2,4],[0.03,"="]],["FIN","Finland",36.57,[20210927,1,1,1,4,0,1,0,2,1],[8.82,"+"]],["PNG","Papua New Guinea",37.04,[20210918,0,1,0,0,1,0,2,2,4],[0.89,"-"]],["MNG","Mongolia",37.04,[20210927,1,2,1,3,0,1,1,1,4],[91.17,"+"]],["SWE","Sweden",37.04,[20210925,0,0,1,3,0,1,0,3,0],[6.26,"="]],["MCO","Monaco",37.04,[20210926,0,1,1,4,0,0,0,2,2],[4.73,"="]],["KIR","Kiribati",37.5,[20210913,0,0,0,4,0,2,0,4,0],[0.0,"="]],["LVA","Latvia",37.96,[20210927,1,1,1,3,0,0,0,2,2],[32.77,"+"]],["ALB","Albania",37.96,[20210820,2,1,1,3,0,2,0,0,2],[23.75,"-"]],["COD","Democratic Republic of Congo",37.96,[20210926,0,1,1,3,0,2,2,1,3],[0.06,"+"]],["NOR","Norway",38.89,[20210924,1,1,1,0,1,1,0,2,1],[12.32,"-"]],["SLB","Solomon Islands",38.89,[20210913,-1,0,1,0,0,0,2,4,1],[0.0,"="]],["SEN","Senegal",38.89,[20210926,1,1,1,1,1,1,1,1,1],[0.08,"="]],["POL","Poland",38.89,[20210924,1,1,1,2,0,1,0,2,2],[2.02,"+"]],["ARE","United Arab Emirates",39.35,[20210920,1,1,1,3,1,0,0,1,3],[3.14,"-"]],["BHR","Bahrain",39.35,[20210905,0,2,2,3,0,1,0,2,4],[4.15,"-"]],["BOL","Bolivia",39.35,[20210927,2,1,1,1,1,2,1,2,4],[2.22,"+"]],["BWA","Botswana",39.81,[20210920,0,2,0,0,0,2,2,1,3],[25.89,"+"]],["KWT","Kuwait",40.74,[20210921,3,1,2,-1,0,0,0,2,3],[1.0,"-"]],["GBR","United Kingdom",41.2,[20210924,1,2,1,3,1,0,0,3,3],[49.84,"+"]],["NLD","Netherlands",41.67,[20210924,1,2,1,0,1,0,0,3,2],[10.11,"+"]],["NAM","Namibia",41.67,[20210928,0,1,1,2,1,2,0,1,2],[2.66,"+"]],["MUS","Mauritius",41.67,[20210925,1,2,1,3,0,0,0,2,3],[7.37,"-"]],["ISL","Iceland",41.67,[20210927,2,1,1,2,0,0,0,3,2],[10.51,"+"]],["ESP","Spain",42.13,[20210926,1,1,2,4,0,0,0,2,2],[4.92,"-"]],["PRY","Paraguay",42.59,[20210926,1,1,1,2,0,2,0,2,3],[0.33,"-"]],["MRT","Mauritania",42.59,[20210920,1,1,2,0,0,2,0,2,3],[1.15,"-"]],["BEL","Belgium",43.06,[20210927,1,2,1,4,0,0,0,3,3],[16.61,"-"]],["TON","Tonga",43.52,[20210919,0,0,1,3,0,2,0,4,2],[]],["ETH","Ethiopia",43.52,[20210927,1,1,1,3,1,0,0,2,3],[1.07,"-"]],["MLT","Malta",43.52,[20210927,1,1,1,4,0,0,0,3,3],[3.53,"-"]],["ZMB","Zambia",43.52,[20210927,0,2,2,3,0,0,0,2,3],[0.28,"-"]],["CYP","Cyprus",43.52,[20210927,1,1,1,3,1,0,0,2,3],[11.19,"-"]],["IRL","Ireland",44.44,[20210924,1,1,1,3,0,1,0,3,3],[26.63,"-"]],["CHE","Switzerland",44.44,[20210925,1,1,1,3,0,1,0,3,2],[15.47,"-"]],["KGZ","Kyrgyz Republic",44.44,[20210919,2,0,2,4,0,0,1,1,2],[1.18,"+"]],["LBR","Liberia",44.44,[20210927,1,2,1,3,1,0,0,1,3],[-0.34,"-"]],["ZAF","South Africa",45.37,[20210922,1,1,1,2,1,2,0,1,3],[3.22,"-"]],["MDG","Madagascar",46.3,[20210927,0,2,1,2,0,2,0,4,3],[0.0,"="]],["BMU","Bermuda",47.22,[20210920,1,1,1,3,1,1,0,2,2],[80.29,"-"]],["SGP","Singapore",47.22,[20210925,1,1,1,4,0,1,0,3,4],[26.42,"+"]],["GEO","Georgia",47.22,[20210927,2,1,2,4,0,0,0,1,3],[40.21,"="]],["SUR","Suriname",47.22,[20210927,2,2,2,3,0,2,0,2,4],[70.28,"-"]],["KOR","South Korea",47.22,[20210924,2,2,2,4,0,0,0,2,3],[4.62,"+"]],["NGA","Nigeria",47.22,[20210919,0,2,1,3,1,1,0,2,2],[0.18,"="]],["MOZ","Mozambique",48.15,[20210923,0,1,2,3,1,2,0,1,3],[0.22,"-"]],["SMR","San Marino",50.0,[20210913,1,1,1,3,1,1,1,1,1],[3.79,"-"]],["LAO","Laos",50.0,[20210913,2,2,1,3,1,1,1,1,3],[5.97,"+"]],["ROU","Romania",50.0,[20210927,1,1,1,4,1,1,1,2,4],[35.43,"+"]],["GUM","Guam",50.93,[20210927,3,1,1,3,1,0,-1,2,3],[]],["TGO","Togo",50.93,[20210913,0,0,2,3,0,1,2,2,4],[1.03,"-"]],["MLI","Mali",50.93,[20210919,1,3,2,3,0,0,0,2,3],[0.06,"-"]],["ERI","Eritrea",50.93,[20210927,0,0,2,3,1,1,0,4,3],[0.08,"-"]],["COL","Colombia",51.39,[20210926,3,1,1,3,2,2,1,1,3],[2.93,"-"]],["BRA","Brazil",51.39,[20210916,2,2,1,3,1,2,2,1,4],[7.98,"+"]],["OMN","Oman",51.85,[20210926,0,1,2,4,1,1,0,2,4],[0.6,"="]],["LBY","Libya",51.85,[20210921,2,0,2,4,1,0,0,2,3],[12.19,"-"]],["SAU","Saudi Arabia",51.85,[20210927,1,1,2,3,1,0,0,3,3],[0.15,"-"]],["AND","Andorra",51.85,[20210926,1,1,2,4,1,0,0,2,2],[9.06,"+"]],["NPL","Nepal",52.31,[20210927,1,1,1,4,1,1,1,2,4],[3.35,"="]],["RUS","Russia",52.31,[20210927,0,2,2,3,0,1,2,2,3],[14.23,"+"]],["JPN","Japan",52.31,[20210924,2,2,1,2,0,1,1,4,1],[1.88,"-"]],["RKS","Kosovo",52.78,[20210927,1,1,1,4,1,1,0,3,3],[5.92,"-"]],["PRT","Portugal",52.78,[20210924,1,2,2,4,0,0,0,3,2],[6.8,"-"]],["DZA","Algeria",52.78,[20210920,2,1,2,4,1,2,0,1,3],[0.36,"-"]],["BGD","Bangladesh",52.78,[20210919,1,0,2,4,0,2,0,3,4],[0.72,"-"]],["URY","Uruguay",52.78,[20210926,1,1,1,2,1,1,1,4,2],[3.41,"-"]],["BHS","Bahamas",54.17,[20210916,2,2,1,4,0,2,2,1,4],[20.34,"-"]],["DJI","Djibouti",54.63,[20210925,1,1,2,4,2,0,0,1,4],[2.43,"-"]],["PSE","Palestine",54.63,[20210927,0,2,2,4,0,0,2,2,4],[]],["CRI","Costa Rica",54.63,[20210926,2,2,2,2,0,1,1,1,3],[43.04,"-"]],["RWA","Rwanda",54.63,[20210927,1,2,1,3,1,2,0,2,3],[1.63,"-"]],["TLS","Timor-Leste",54.63,[20210913,0,2,2,3,2,1,2,2,3],[3.68,"-"]],["PAK","Pakistan",55.09,[20210925,2,2,1,2,2,1,1,3,3],[0.9,"-"]],["THA","Thailand",55.09,[20210920,3,2,2,3,0,2,2,2,3],[16.93,"-"]],["QAT","Qatar",55.56,[20210922,1,1,1,4,1,1,1,2,4],[3.78,"-"]],["ISR","Israel",56.48,[20210924,2,2,2,3,0,0,0,4,2],[58.04,"-"]],["DEU","Germany",56.48,[20210926,1,2,2,3,1,1,0,2,2],[9.2,"-"]],["BLZ","Belize",56.48,[20210920,3,2,1,4,0,2,0,1,4],[37.47,"-"]],["AGO","Angola",56.94,[20210920,0,2,1,3,1,1,2,3,3],[1.28,"+"]],["KEN","Kenya",56.94,[20210927,0,2,2,4,0,2,2,3,4],[0.5,"-"]],["JOR","Jordan",57.41,[20210830,1,1,1,3,1,2,1,3,2],[10.08,"+"]],["UKR","Ukraine",58.33,[20210927,2,1,1,3,2,0,2,1,3],[15.63,"+"]],["AZE","Azerbaijan",58.33,[20210927,2,2,2,2,1,1,0,4,2],[11.19,"-"]],["BEN","Benin",58.33,[20210927,0,2,2,3,1,1,0,4,4],[1.78,"="]],["ECU","Ecuador",58.8,[20210927,2,1,2,4,1,1,1,2,3],[1.32,"+"]],["SWZ","Eswatini",59.26,[20210927,1,1,1,3,1,2,2,1,4],[5.13,"+"]],["HKG","Hong Kong",59.26,[20210913,1,2,1,4,1,1,1,2,2],[0.06,"="]],["UZB","Uzbekistan",59.26,[20210913,1,0,2,3,1,0,2,3,3],[1.52,"-"]],["MAR","Morocco",59.26,[20210822,0,2,1,4,1,2,1,2,3],[3.61,"-"]],["CPV","Cape Verde",59.26,[20210917,1,2,2,4,0,1,2,1,3],[8.09,"-"]],["AUT","Austria",60.19,[20210924,2,2,1,3,1,0,2,3,2],[18.67,"-"]],["LSO","Lesotho",60.19,[20210927,1,2,2,4,1,2,0,1,3],[0.0,"="]],["GIN","Guinea",60.19,[20210920,1,1,2,3,0,2,2,2,3],[0.1,"-"]],["GRC","Greece",60.65,[20210911,1,2,2,3,1,2,1,3,2],[20.81,"="]],["TKM","Turkmenistan",61.11,[20210927,1,2,2,4,0,0,2,4,3],[]],["PER","Peru",61.11,[20210926,2,2,2,4,1,2,1,3,4],[2.47,"-"]],["GAB","Gabon",61.11,[20210919,1,0,2,3,1,2,2,1,3],[8.95,"-"]],["USA","United States",61.57,[20210921,2,2,2,4,1,1,2,3,3],[35.41,"-"]],["BTN","Bhutan",62.96,[20210927,2,2,1,3,1,1,1,3,3],[0.04,"="]],["CHL","Chile",63.43,[20210925,2,3,2,3,1,2,2,2,3],[3.45,"+"]],["TUR","Turkey",63.89,[20210927,1,2,2,0,2,0,2,3,4],[32.48,"-"]],["LBN","Lebanon",64.81,[20210926,0,2,1,3,2,2,2,1,3],[8.08,"-"]],["HTI","Haiti",64.81,[20210917,1,1,2,4,1,2,1,2,3],[0.22,"+"]],["ZWE","Zimbabwe",65.74,[20210923,1,2,2,3,1,2,1,2,3],[1.67,"+"]],["GUY","Guyana",65.74,[20210926,1,2,2,4,1,2,0,3,4],[28.21,"-"]],["DOM","Dominican Republic",65.74,[20210924,1,1,2,4,1,2,2,1,4],[2.82,"+"]],["GTM","Guatemala",66.2,[20210920,3,1,2,4,2,2,0,3,4],[16.19,"+"]],["MMR","Myanmar",66.2,[20210927,3,2,2,4,1,2,1,2,4],[2.96,"-"]],["FRA","France",66.67,[20210925,1,2,2,3,1,0,2,3,3],[9.12,"-"]],["BRB","Barbados",67.59,[20210925,3,2,2,3,1,2,0,2,3],[56.32,"+"]],["CAN","Canada",68.06,[20210924,3,3,2,4,0,1,2,3,3],[11.56,"+"]],["ITA","Italy",68.98,[20210924,2,2,2,2,1,2,2,3,3],[5.57,"-"]],["IDN","Indonesia",68.98,[20210927,3,2,2,4,1,2,2,3,4],[0.87,"-"]],["KHM","Cambodia",69.44,[20210918,2,3,2,4,0,2,2,2,3],[4.45,"+"]],["IRN","Iran",69.91,[20210920,2,3,2,4,0,0,2,3,3],[17.99,"-"]],["IND","India",70.83,[20210907,2,2,2,4,2,2,2,3,4],[2.0,"-"]],["AUS","Australia",71.76,[20210924,2,3,2,4,1,2,2,4,3],[6.84,"+"]],["CUB","Cuba",71.76,[20210919,3,2,2,4,2,2,2,2,4],[64.18,"-"]],["DMA","Dominica",72.22,[20210922,1,3,2,4,1,2,1,2,3],[76.4,"-"]],["VNM","Vietnam",72.69,[20210928,2,2,2,4,2,2,2,3,3],[10.32,"+"]],["HND","Honduras",75.0,[20210913,3,3,2,4,0,2,2,1,3],[4.81,"-"]],["PHL","Philippines",75.46,[20210926,3,2,2,4,1,2,2,3,4],[13.72,"-"]],["IRQ","Iraq",75.93,[20210925,3,2,2,3,0,2,2,3,4],[6.32,"-"]],["ARG","Argentina",75.93,[20210926,1,2,2,4,2,2,2,4,3],[3.33,"-"]],["CHN","China",76.39,[20210917,3,3,2,4,1,3,2,2,2],[0.0,"="]],["PAN","Panama",77.31,[20210927,2,3,2,4,2,3,2,2,4],[6.35,"+"]],["KAZ","Kazakhstan",79.17,[20210926,2,2,2,4,2,2,2,3,3],[12.9,"-"]],["BRN","Brunei",79.63,[20210924,3,3,2,4,1,2,0,4,4],[46.99,"-"]],["LKA","Sri Lanka",80.56,[20210927,3,1,2,4,2,2,2,2,4],[5.73,"-"]],["MYS","Malaysia",80.56,[20210719,0,3,2,4,2,2,2,3,3],[42.82,"-"]],["NZL","New Zealand",81.02,[20210927,3,3,2,4,2,2,2,4,3],[0.32,"-"]],["UGA","Uganda",81.48,[20210926,3,2,2,3,2,2,2,1,3],[0.3,"="]],["TTO","Trinidad and Tobago",83.33,[20210920,2,2,2,4,2,2,2,2,4],[15.64,"+"]],["SYC","Seychelles",84.26,[20210927,3,2,2,4,1,2,2,3,3],[59.99,"-"]],["VEN","Venezuela",86.11,[20210815,3,3,2,4,1,3,1,3,4],[3.54,"-"]],["FJI","Fiji",86.11,[20210913,3,3,2,4,1,2,2,4,2],[13.51,"+"]],["JAM","Jamaica",88.89,[20210927,3,3,2,4,2,3,2,2,4],[12.66,"-"]]];