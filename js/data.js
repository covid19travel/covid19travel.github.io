const dataUpdate="2021.06.12";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["NIC","Nicaragua",8.33,[20210607,0,0,0,0,0,0,0,1,0],[0.39,"="]],["CAF","Central African Republic",11.11,[20210531,0,0,0,0,0,0,0,2,0],[0.03,"="]],["TZA","Tanzania",13.89,[20210607,0,0,0,0,0,0,0,3,0],[0.0,"="]],["BDI","Burundi",15.74,[20210531,0,2,0,0,0,0,0,1,1],[0.14,"="]],["TCD","Chad",16.67,[20210523,0,0,0,0,0,0,0,2,4],[0.0,"-"]],["CIV","Cote d'Ivoire",17.59,[20210607,0,0,0,0,0,1,0,1,4],[0.11,"-"]],["VUT","Vanuatu",22.22,[20210531,0,0,0,0,0,0,0,4,0],[0.0,"="]],["NZL","New Zealand",22.22,[20210531,0,0,0,0,0,0,0,4,2],[0.06,"="]],["SEN","Senegal",23.15,[20210607,1,0,0,0,0,0,0,3,4],[0.27,"="]],["MAC","Macao",23.15,[20210607,1,0,0,0,0,0,0,3,2],[]],["SSD","South Sudan",25.0,[20210607,0,0,0,3,0,0,0,2,2],[0.0,"="]],["SLB","Solomon Islands",25.0,[20210606,0,0,1,0,0,0,0,3,0],[0.0,"="]],["BFA","Burkina Faso",25.0,[20210606,0,0,0,0,0,0,2,2,4],[0.01,"="]],["ZAF","South Africa",25.0,[20210531,0,0,0,2,0,2,0,1,3],[10.61,"+"]],["ISL","Iceland",26.85,[20210607,1,1,1,2,0,0,0,3,-1],[0.0,"="]],["SLV","El Salvador",26.85,[20210522,1,1,1,0,0,0,0,1,4],[2.66,"="]],["SOM","Somalia",27.78,[20210524,0,1,1,3,0,1,0,1,3],[0.07,"="]],["BOL","Bolivia",27.78,[20210607,2,0,0,0,0,0,0,4,4],[20.3,"-"]],["ISR","Israel",29.63,[20210604,1,1,0,0,0,0,0,4,2],[0.19,"+"]],["SMR","San Marino",30.56,[20210606,1,1,1,4,0,1,0,1,3],[0.0,"="]],["NER","Niger",30.56,[20210531,0,0,1,3,0,0,0,2,3],[0.01,"-"]],["DMA","Dominica",31.48,[20210607,0,0,1,2,0,1,0,2,2],[0.2,"+"]],["SRB","Serbia",32.41,[20210606,1,0,1,2,0,1,0,1,3],[1.99,"-"]],["EGY","Egypt",33.33,[20210606,2,0,0,1,1,1,0,1,4],[0.76,"-"]],["AGO","Angola",33.33,[20210604,0,2,1,1,0,1,0,1,2],[0.5,"-"]],["YEM","Yemen",34.26,[20210607,0,1,1,0,0,2,1,3,2],[0.04,"+"]],["NAM","Namibia",35.19,[20210607,0,0,1,3,0,2,1,1,3],[29.4,"+"]],["SVN","Slovenia",35.19,[20210607,1,1,1,3,0,0,0,1,3],[8.6,"-"]],["RUS","Russia",36.57,[20210520,0,1,2,3,0,0,0,3,2],[6.99,"+"]],["BIH","Bosnia and Herzegovina",37.04,[20210611,1,2,1,3,0,0,0,1,3],[1.28,"-"]],["TJK","Tajikistan",37.96,[20210530,1,1,0,3,0,0,0,4,4],[0.0,"="]],["AFG","Afghanistan",37.96,[20210530,3,2,2,0,0,0,0,1,3],[4.07,"+"]],["CMR","Cameroon",37.96,[20210503,1,1,1,3,0,0,0,2,3],[0.62,"+"]],["GMB","Gambia",38.89,[20210607,0,0,1,4,1,0,0,2,3],[0.05,"+"]],["ZMB","Zambia",38.89,[20210607,0,0,2,4,0,0,0,2,3],[7.46,"+"]],["BEN","Benin",38.89,[20210606,0,0,1,3,1,0,0,3,3],[0.03,"="]],["FRO","Faeroe Islands",38.89,[20210607,1,1,1,2,0,1,0,2,2],[4.39,"-"]],["MRT","Mauritania",39.81,[20210524,0,0,2,4,0,1,0,1,3],[0.78,"-"]],["COD","Democratic Republic of Congo",39.81,[20210607,0,0,2,1,1,1,2,1,3],[0.34,"+"]],["RKS","Kosovo",40.74,[20210611,1,1,1,3,1,0,0,3,3],[0.54,"-"]],["BRN","Brunei",40.74,[20210610,1,1,1,2,0,0,0,4,2],[0.13,"="]],["EST","Estonia",41.67,[20210531,1,2,1,3,0,0,0,2,2],[4.45,"-"]],["BLR","Belarus",42.59,[20210524,0,0,1,4,0,1,0,4,3],[8.76,"-"]],["TGO","Togo",42.59,[20210606,0,2,0,3,0,1,2,2,4],[0.13,"+"]],["MWI","Malawi",42.59,[20210522,0,1,1,3,1,0,0,3,1],[0.07,"+"]],["GHA","Ghana",42.59,[20210606,0,2,2,3,0,1,0,1,4],[0.12,"-"]],["LSO","Lesotho",42.59,[20210605,1,1,1,3,0,2,0,1,4],[0.11,"+"]],["LBR","Liberia",43.52,[20210607,0,2,1,3,1,0,0,2,3],[0.66,"+"]],["ETH","Ethiopia",43.52,[20210607,1,1,1,3,1,0,0,2,3],[0.16,"-"]],["GUM","Guam",43.52,[20210608,1,1,1,3,1,0,0,2,3],[]],["UKR","Ukraine",43.52,[20210531,2,2,1,0,0,1,0,3,2],[3.5,"-"]],["AND","Andorra",43.52,[20210607,1,1,1,4,1,0,0,1,3],[10.17,"+"]],["MEX","Mexico",44.44,[20210606,3,2,1,0,1,1,2,1,4],[2.13,"+"]],["HTI","Haiti",44.44,[20210607,1,0,1,4,0,2,0,2,3],[1.28,"-"]],["MLI","Mali",44.44,[20210531,0,2,2,3,0,1,0,1,3],[0.03,"="]],["LUX","Luxembourg",45.37,[20210610,1,1,1,2,0,2,0,3,2],[5.11,"-"]],["LIE","Liechtenstein",45.37,[20210509,1,2,1,3,0,1,1,2,3],[1.87,"-"]],["HRV","Croatia",46.3,[20210606,1,1,1,3,1,0,0,3,3],[4.11,"+"]],["VIR","United States Virgin Islands",46.3,[20210531,2,2,1,3,0,1,0,1,3],[]],["ALB","Albania",46.3,[20210606,2,1,2,4,0,2,0,0,2],[0.32,"-"]],["USA","United States",46.76,[20210607,2,1,1,4,1,1,1,3,-1],[4.08,"-"]],["UGA","Uganda",47.22,[20210607,2,2,0,2,0,2,0,3,3],[2.35,"+"]],["SWZ","Eswatini",47.22,[20210607,1,1,1,2,0,1,2,1,4],[1.12,"+"]],["TON","Tonga",47.22,[20210606,1,0,1,3,0,2,0,4,0],[]],["UZB","Uzbekistan",47.22,[20210607,2,0,1,3,1,0,1,2,3],[0.72,"+"]],["ROU","Romania",48.15,[20210531,2,1,2,4,0,0,0,3,2],[0.72,"-"]],["TUN","Tunisia",48.15,[20210531,1,1,1,4,1,2,1,2,-1],[15.13,"+"]],["ABW","Aruba",48.15,[20210607,1,2,1,3,0,1,0,3,3],[5.22,"-"]],["ZWE","Zimbabwe",48.15,[20210607,0,2,2,3,0,2,0,1,3],[0.52,"+"]],["BGR","Bulgaria",48.15,[20210531,2,2,1,3,0,0,0,3,3],[1.8,"-"]],["CHE","Switzerland",48.15,[20210610,1,2,1,3,0,1,0,3,2],[4.55,"-"]],["PRY","Paraguay",49.07,[20210607,1,2,1,3,0,2,0,2,3],[39.06,"-"]],["JPN","Japan",49.07,[20210606,1,2,1,1,0,1,1,4,1],[1.58,"-"]],["JOR","Jordan",49.07,[20210601,3,0,0,0,1,2,2,1,2],[1.16,"-"]],["FIN","Finland",49.54,[20210604,2,2,1,4,0,1,0,3,2],[1.6,"-"]],["KOR","South Korea",50.0,[20210604,1,1,1,4,0,1,1,2,3],[1.07,"-"]],["LVA","Latvia",50.0,[20210607,2,1,2,3,0,0,0,3,3],[10.16,"-"]],["SVK","Slovak Republic",50.0,[20210524,2,2,2,4,0,2,0,2,3],[1.75,"-"]],["CZE","Czech Republic",50.93,[20210606,2,2,2,2,0,0,0,3,2],[2.4,"-"]],["SAU","Saudi Arabia",50.93,[20210608,3,1,2,3,0,0,0,2,3],[3.4,"+"]],["SLE","Sierra Leone",50.93,[20210531,1,2,2,2,1,1,0,1,3],[0.26,"+"]],["COG","Congo",50.93,[20210607,0,1,1,3,1,2,1,2,3],[0.27,"-"]],["KWT","Kuwait",50.93,[20210607,3,1,2,2,0,0,0,3,3],[34.94,"+"]],["BLZ","Belize",50.93,[20210607,0,2,1,4,1,2,0,1,3],[2.77,"-"]],["GRL","Greenland",50.93,[20210605,1,2,1,3,0,1,0,4,2],[0.75,"="]],["BEL","Belgium",50.93,[20210604,1,2,1,4,0,1,0,3,3],[8.11,"-"]],["GTM","Guatemala",51.85,[20210607,1,2,2,4,1,0,0,3,4],[7.46,"+"]],["MLT","Malta",52.78,[20210608,2,1,2,4,0,0,0,3,4],[0.65,"="]],["NGA","Nigeria",52.78,[20210606,0,1,1,3,1,2,1,2,3],[0.02,"="]],["BMU","Bermuda",53.7,[20210530,1,1,1,4,1,2,0,2,2],[0.69,"="]],["ARE","United Arab Emirates",53.7,[20210607,1,2,2,3,0,0,2,3,3],[21.5,"+"]],["BHR","Bahrain",53.7,[20210524,1,2,1,4,0,1,1,2,3],[73.64,"-"]],["POL","Poland",53.7,[20210611,1,2,1,2,1,1,1,2,2],[0.98,"+"]],["SWE","Sweden",54.63,[20210604,0,1,1,4,1,1,1,3,2],[7.63,"-"]],["DJI","Djibouti",54.63,[20210607,1,1,2,4,2,0,0,1,4],[0.25,"-"]],["KGZ","Kyrgyz Republic",54.63,[20210607,2,2,2,4,1,0,0,1,3],[6.5,"+"]],["MCO","Monaco",54.63,[20210606,1,2,2,4,0,2,0,1,3],[4.37,"+"]],["FRA","France",54.63,[20210604,1,2,1,4,0,2,0,3,4],[7.19,"-"]],["PNG","Papua New Guinea",55.56,[20210607,1,1,1,3,1,1,1,3,3],[0.7,"="]],["DNK","Denmark",55.56,[20210604,3,2,2,3,0,0,0,3,2],[10.06,"-"]],["CYP","Cyprus",56.48,[20210607,1,1,1,3,1,2,1,2,3],[4.8,"-"]],["MNG","Mongolia",56.48,[20210607,3,1,2,4,1,1,1,1,4],[35.41,"+"]],["PRT","Portugal",56.48,[20210611,1,2,1,4,1,1,0,3,3],[6.29,"+"]],["MDA","Moldova",56.94,[20210531,2,2,2,4,1,1,1,1,4],[1.11,"+"]],["KIR","Kiribati",56.94,[20210531,3,0,2,4,0,2,0,4,3],[0.0,"="]],["PRI","Puerto Rico",57.41,[20210516,1,2,2,3,1,2,1,1,3],[]],["SYR","Syria",57.87,[20210601,2,3,2,3,0,2,2,1,3],[0.12,"="]],["SGP","Singapore",58.33,[20210605,3,2,1,4,0,1,0,3,4],[0.21,"-"]],["GIN","Guinea",58.33,[20210531,0,2,2,3,0,2,2,2,3],[0.12,"="]],["BWA","Botswana",59.26,[20210531,1,1,2,3,0,2,2,1,2],[19.82,"="]],["CPV","Cape Verde",59.26,[20210505,1,2,2,4,0,1,2,1,3],[15.55,"-"]],["NOR","Norway",59.26,[20210611,1,2,1,3,1,1,1,3,2],[3.57,"-"]],["THA","Thailand",59.26,[20210607,3,1,2,4,1,1,1,3,2],[3.65,"-"]],["AUT","Austria",60.19,[20210610,2,2,2,4,1,0,0,3,2],[3.2,"-"]],["GUY","Guyana",60.19,[20210607,2,1,2,4,0,2,0,3,3],[13.39,"+"]],["OMN","Oman",60.19,[20210607,2,2,1,2,1,1,1,3,3],[26.62,"="]],["BRA","Brazil",60.65,[20210523,2,3,2,3,1,2,2,1,4],[30.56,"+"]],["ESP","Spain",61.57,[20210604,1,1,2,4,0,2,2,3,4],[10.88,"-"]],["DZA","Algeria",61.57,[20210607,1,1,2,4,1,2,1,4,3],[0.77,"-"]],["URY","Uruguay",62.04,[20210607,2,2,1,3,1,1,1,4,2],[102.79,"-"]],["GRC","Greece",62.04,[20210607,1,2,1,4,1,1,1,3,4],[8.36,"-"]],["TKM","Turkmenistan",62.04,[20210605,1,3,2,1,0,0,2,4,3],[]],["GBR","United Kingdom",62.5,[20210604,1,2,2,4,1,0,2,3,3],[9.46,"+"]],["RWA","Rwanda",62.96,[20210531,1,2,2,3,1,2,1,2,3],[0.77,"+"]],["PAN","Panama",62.96,[20210510,3,2,2,3,1,2,0,2,4],[17.04,"="]],["KAZ","Kazakhstan",62.96,[20210605,2,2,2,4,0,0,2,3,3],[5.91,"-"]],["PAK","Pakistan",63.43,[20210607,2,2,2,4,1,2,1,1,3],[0.61,"-"]],["MDG","Madagascar",63.89,[20210606,1,2,1,3,1,2,1,4,4],[0.17,"-"]],["MOZ","Mozambique",63.89,[20210606,0,2,2,3,1,3,2,1,3],[0.15,"+"]],["SYC","Seychelles",63.89,[20210531,2,1,2,4,1,2,0,3,3],[118.39,"-"]],["BHS","Bahamas",64.35,[20210607,2,3,2,4,0,3,2,1,3],[5.89,"+"]],["GEO","Georgia",64.81,[20210610,0,2,2,4,0,2,2,2,3],[17.5,"-"]],["ERI","Eritrea",64.81,[20210607,0,0,2,4,1,1,2,4,3],[1.7,"-"]],["TTO","Trinidad and Tobago",64.81,[20210530,2,2,2,4,1,0,0,4,4],[23.53,"-"]],["SDN","Sudan",64.81,[20210524,3,2,2,4,0,3,0,2,3],[0.18,"="]],["KEN","Kenya",65.74,[20210606,2,1,2,3,0,2,2,2,3],[0.75,"+"]],["KHM","Cambodia",66.2,[20210607,3,3,2,4,0,2,1,2,3],[3.63,"-"]],["BRB","Barbados",66.67,[20210605,2,2,2,4,1,2,0,2,3],[0.2,"-"]],["CRI","Costa Rica",66.67,[20210607,3,2,2,3,0,1,2,1,3],[33.43,"-"]],["DOM","Dominican Republic",66.67,[20210531,2,2,2,4,1,2,0,2,4],[10.91,"-"]],["HUN","Hungary",66.67,[20210517,2,2,2,4,0,2,0,4,3],[1.8,"-"]],["LTU","Lithuania",66.67,[20210526,2,3,1,4,1,1,1,2,2],[7.68,"-"]],["NLD","Netherlands",67.59,[20210611,1,2,2,4,1,1,1,3,2],[9.32,"-"]],["GAB","Gabon",67.59,[20210606,1,1,2,3,1,2,2,2,3],[0.93,"-"]],["FJI","Fiji",67.59,[20210531,3,1,2,3,0,2,2,3,2],[6.36,"+"]],["TLS","Timor-Leste",68.52,[20210601,1,3,1,4,2,2,2,2,4],[6.87,"-"]],["QAT","Qatar",68.52,[20210607,2,2,1,4,2,1,1,2,4],[5.97,"+"]],["BTN","Bhutan",68.52,[20210531,3,3,2,3,1,2,1,3,4],[2.22,"+"]],["TWN","Taiwan",68.52,[20210531,3,2,2,4,0,2,2,3,4],[1.23,"-"]],["IDN","Indonesia",68.98,[20210531,3,2,2,4,1,2,2,3,4],[2.63,"+"]],["AZE","Azerbaijan",69.44,[20210606,2,2,2,4,1,1,1,4,2],[0.74,"-"]],["SUR","Suriname",70.37,[20210515,3,2,2,4,0,2,0,4,4],[43.59,"-"]],["LBN","Lebanon",70.37,[20210510,0,2,2,4,1,2,2,2,3],[2.39,"+"]],["MAR","Morocco",71.3,[20210531,1,2,2,4,1,2,2,3,3],[0.93,"+"]],["ITA","Italy",71.3,[20210611,1,3,2,4,1,2,2,3,4],[3.32,"-"]],["HKG","Hong Kong",71.3,[20210607,2,2,2,4,1,1,1,3,2],[0.05,"="]],["PSE","Palestine",71.3,[20210430,2,1,2,4,1,2,2,2,3],[]],["PHL","Philippines",71.76,[20210607,2,2,2,3,1,2,2,3,3],[5.87,"-"]],["BGD","Bangladesh",72.22,[20210607,3,1,2,4,1,2,1,2,4],[1.3,"+"]],["MMR","Myanmar",72.22,[20210531,3,2,2,4,1,2,1,4,4],[0.24,"="]],["CAN","Canada",73.61,[20210604,3,3,2,4,1,1,2,4,3],[3.76,"-"]],["COL","Colombia",74.07,[20210608,3,3,2,3,2,2,2,2,3],[49.6,"-"]],["TUR","Turkey",74.07,[20210530,2,2,2,2,2,1,2,2,4],[7.27,"+"]],["LAO","Laos",74.07,[20210607,2,2,2,3,2,2,2,2,3],[0.05,"-"]],["IRL","Ireland",74.07,[20210608,1,2,2,3,1,2,2,3,3],[6.62,"-"]],["AUS","Australia",74.54,[20210604,2,3,2,4,1,2,2,4,3],[0.04,"-"]],["CHN","China",74.54,[20210607,2,3,2,4,1,2,2,3,2],[0.0,"="]],["DEU","Germany",75.0,[20210606,3,2,2,4,1,2,1,3,2],[2.75,"-"]],["PER","Peru",75.93,[20210606,2,2,2,4,1,3,2,3,4],[9.48,"-"]],["IRN","Iran",76.39,[20210607,2,3,2,3,1,2,2,3,3],[10.0,"+"]],["JAM","Jamaica",76.85,[20210524,1,2,2,4,1,2,2,3,3],[0.83,"="]],["ECU","Ecuador",76.85,[20210525,2,2,2,3,1,1,2,4,3],[5.17,"+"]],["IRQ","Iraq",77.31,[20210607,3,2,2,4,0,2,2,3,4],[10.06,"+"]],["VNM","Vietnam",77.31,[20210531,3,2,2,4,2,2,2,4,3],[0.25,"-"]],["CUB","Cuba",78.24,[20210606,3,3,2,4,2,2,2,2,3],[10.3,"+"]],["HND","Honduras",78.7,[20210517,3,3,2,4,0,1,2,3,4],[6.72,"+"]],["LBY","Libya",79.63,[20210531,1,2,2,4,1,2,2,4,3],[3.76,"-"]],["MYS","Malaysia",80.56,[20210607,3,2,2,4,1,1,2,3,3],[19.11,"-"]],["MUS","Mauritius",80.56,[20210607,3,2,2,3,1,1,2,4,3],[1.61,"+"]],["ARG","Argentina",81.48,[20210607,3,2,2,4,2,2,2,4,3],[56.17,"-"]],["IND","India",81.94,[20210531,3,3,2,4,2,3,2,3,4],[6.88,"-"]],["CHL","Chile",84.72,[20210607,3,3,2,4,2,3,2,4,3],[37.42,"-"]],["LKA","Sri Lanka",85.19,[20210607,3,3,2,4,1,2,2,2,3],[12.75,"-"]],["VEN","Venezuela",87.96,[20210607,3,3,2,4,1,2,2,3,4],[4.81,"-"]],["NPL","Nepal",94.44,[20210607,3,3,2,4,2,3,2,2,4],[11.2,"-"]]];