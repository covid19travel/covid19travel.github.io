const dataUpdate="2021.06.17";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["NIC","Nicaragua",8.33,[20210613,0,0,0,0,0,0,0,1,0],[0.07,"="]],["CAF","Central African Republic",11.11,[20210613,0,0,0,0,0,0,0,2,0],[0.0,"="]],["TZA","Tanzania",13.89,[20210607,0,0,0,0,0,0,0,3,0],[0.0,"="]],["BDI","Burundi",15.74,[20210613,0,2,0,0,0,0,0,1,1],[0.17,"+"]],["TCD","Chad",16.67,[20210612,0,0,0,0,0,0,0,2,4],[0.0,"="]],["CIV","Cote d'Ivoire",17.59,[20210613,0,0,0,0,0,1,0,1,4],[0.21,"-"]],["NER","Niger",19.44,[20210614,0,0,2,1,0,0,0,2,3],[0.01,"="]],["KIR","Kiribati",22.22,[20210614,0,0,0,0,0,0,0,4,3],[0.0,"="]],["VUT","Vanuatu",22.22,[20210615,0,0,0,0,0,0,0,4,0],[0.0,"="]],["NZL","New Zealand",22.22,[20210614,0,0,0,0,0,0,0,4,2],[0.05,"+"]],["SEN","Senegal",23.15,[20210607,1,0,0,0,0,0,0,3,4],[0.27,"-"]],["SOM","Somalia",24.07,[20210614,0,1,1,3,0,1,0,1,3],[0.04,"="]],["SSD","South Sudan",25.0,[20210614,0,0,0,3,0,0,0,2,2],[0.09,"+"]],["SLB","Solomon Islands",25.0,[20210614,0,0,1,0,0,0,0,3,0],[0.0,"="]],["BFA","Burkina Faso",25.0,[20210606,0,0,0,0,0,0,2,2,4],[0.0,"="]],["SLV","El Salvador",26.85,[20210615,1,1,1,0,0,0,0,1,4],[3.33,"+"]],["BOL","Bolivia",27.78,[20210607,2,0,0,0,0,0,0,4,4],[26.36,"+"]],["BEN","Benin",27.78,[20210613,0,0,1,3,0,0,0,1,3],[0.04,"-"]],["MAC","Macao",28.7,[20210614,1,0,1,0,0,0,0,3,2],[]],["CMR","Cameroon",29.63,[20210613,1,0,1,3,0,0,0,1,3],[0.23,"+"]],["ISR","Israel",29.63,[20210614,1,1,0,0,0,0,0,4,2],[0.22,"+"]],["MWI","Malawi",31.48,[20210614,0,1,1,3,0,0,0,1,1],[0.16,"+"]],["DMA","Dominica",31.48,[20210614,0,0,1,2,0,1,0,2,2],[0.2,"="]],["SRB","Serbia",32.41,[20210606,1,0,1,2,0,1,0,1,3],[1.72,"-"]],["EGY","Egypt",33.33,[20210606,2,0,0,1,1,1,0,1,4],[0.66,"-"]],["ABW","Aruba",33.33,[20210614,1,2,1,0,0,0,0,2,1],[2.81,"+"]],["YEM","Yemen",34.26,[20210607,0,1,1,0,0,2,1,3,2],[0.02,"="]],["NAM","Namibia",35.19,[20210607,0,0,1,3,0,2,1,1,3],[37.62,"-"]],["SVN","Slovenia",35.19,[20210615,1,1,1,3,0,0,0,1,3],[5.46,"-"]],["TJK","Tajikistan",35.19,[20210613,1,1,0,3,0,0,0,3,4],[0.0,"="]],["RUS","Russia",36.57,[20210614,0,1,2,3,0,0,0,3,2],[9.07,"+"]],["BIH","Bosnia and Herzegovina",37.04,[20210611,1,2,1,3,0,0,0,1,3],[0.95,"-"]],["ISL","Iceland",37.96,[20210614,1,1,1,2,0,0,0,3,2],[0.0,"="]],["EST","Estonia",38.89,[20210614,1,2,1,2,0,0,0,2,2],[3.75,"-"]],["VIR","United States Virgin Islands",38.89,[20210614,2,1,1,3,0,0,0,1,3],[]],["GMB","Gambia",38.89,[20210607,0,0,1,4,1,0,0,2,3],[0.13,"+"]],["ZMB","Zambia",38.89,[20210617,0,0,2,4,0,0,0,2,3],[11.72,"+"]],["FRO","Faeroe Islands",38.89,[20210607,1,1,1,2,0,1,0,2,2],[1.46,"-"]],["SMR","San Marino",38.89,[20210614,1,1,1,3,0,1,0,1,3],[0.0,"="]],["COD","Democratic Republic of Congo",39.81,[20210613,0,0,2,1,1,1,2,1,3],[0.36,"-"]],["MRT","Mauritania",39.81,[20210614,0,0,2,4,0,1,0,1,3],[0.85,"+"]],["RKS","Kosovo",40.74,[20210611,1,1,1,3,1,0,0,3,3],[0.54,"-"]],["BRN","Brunei",40.74,[20210610,1,1,1,2,0,0,0,4,2],[0.13,"="]],["AGO","Angola",41.67,[20210615,0,2,1,2,0,1,0,3,3],[0.43,"+"]],["OMN","Oman",41.67,[20210614,2,1,1,2,0,0,0,3,3],[33.93,"+"]],["TGO","Togo",42.59,[20210612,0,2,0,3,0,1,2,2,4],[0.18,"+"]],["GHA","Ghana",42.59,[20210613,0,2,2,3,0,1,0,1,4],[0.21,"-"]],["BLR","Belarus",42.59,[20210524,0,0,1,4,0,1,0,4,3],[8.91,"+"]],["GUM","Guam",43.52,[20210608,1,1,1,3,1,0,0,2,3],[]],["AFG","Afghanistan",43.52,[20210613,3,2,2,0,0,0,1,1,3],[3.39,"-"]],["AND","Andorra",43.52,[20210607,1,1,1,4,1,0,0,1,3],[8.32,"-"]],["ETH","Ethiopia",43.52,[20210613,1,1,1,3,1,0,0,2,3],[0.15,"-"]],["LBR","Liberia",43.52,[20210607,0,2,1,3,1,0,0,2,3],[0.98,"+"]],["LTU","Lithuania",44.44,[20210614,2,1,1,4,0,0,0,2,2],[5.62,"-"]],["HTI","Haiti",44.44,[20210607,1,0,1,4,0,2,0,2,3],[0.83,"-"]],["MLI","Mali",44.44,[20210614,0,2,2,3,0,1,0,1,3],[0.02,"="]],["MEX","Mexico",44.44,[20210614,3,2,1,0,1,1,2,1,4],[2.38,"-"]],["LUX","Luxembourg",45.37,[20210614,1,1,1,2,0,2,0,3,2],[3.24,"-"]],["LIE","Liechtenstein",45.37,[20210509,1,2,1,3,0,1,1,2,3],[1.5,"="]],["HRV","Croatia",46.3,[20210606,1,1,1,3,1,0,0,3,3],[2.65,"-"]],["ALB","Albania",46.3,[20210606,2,1,2,4,0,2,0,0,2],[0.3,"-"]],["USA","United States",46.76,[20210613,2,1,1,4,1,1,1,3,-1],[3.83,"-"]],["NGA","Nigeria",47.22,[20210614,0,1,1,3,1,2,0,2,3],[0.01,"="]],["UZB","Uzbekistan",47.22,[20210607,2,0,1,3,1,0,1,2,3],[0.9,"+"]],["CZE","Czech Republic",47.22,[20210613,1,2,2,2,0,0,0,3,2],[1.53,"-"]],["UGA","Uganda",47.22,[20210613,2,2,0,2,0,2,0,3,3],[3.16,"+"]],["TON","Tonga",47.22,[20210614,1,0,1,3,0,2,0,4,0],[]],["TKM","Turkmenistan",47.22,[20210614,1,2,1,1,0,0,2,4,3],[]],["BMU","Bermuda",47.22,[20210614,1,1,1,3,1,1,0,2,2],[0.46,"="]],["SWZ","Eswatini",47.22,[20210607,1,1,1,2,0,1,2,1,4],[0.91,"="]],["ZAF","South Africa",48.15,[20210613,1,1,1,3,1,2,0,1,3],[14.78,"+"]],["LSO","Lesotho",48.15,[20210614,1,1,2,3,0,2,0,1,4],[0.74,"+"]],["ROU","Romania",48.15,[20210531,2,1,2,4,0,0,0,3,2],[0.51,"-"]],["ZWE","Zimbabwe",48.15,[20210613,0,2,2,3,0,2,0,1,3],[1.08,"+"]],["BGR","Bulgaria",48.15,[20210531,2,2,1,3,0,0,0,3,3],[1.56,"-"]],["CHE","Switzerland",48.15,[20210610,1,2,1,3,0,1,0,3,2],[4.06,"+"]],["PRY","Paraguay",49.07,[20210614,1,2,1,3,0,2,0,2,2],[33.11,"-"]],["JPN","Japan",49.07,[20210606,1,2,1,1,0,1,1,4,1],[1.29,"-"]],["JOR","Jordan",49.07,[20210601,3,0,0,0,1,2,2,1,2],[4.4,"-"]],["FIN","Finland",49.54,[20210614,2,2,1,4,0,1,0,3,2],[1.3,"-"]],["LVA","Latvia",50.0,[20210614,2,1,2,3,0,0,0,3,3],[7.69,"-"]],["KOR","South Korea",50.0,[20210614,1,1,1,4,0,1,1,2,3],[0.96,"-"]],["SVK","Slovak Republic",50.0,[20210524,2,2,2,4,0,2,0,2,3],[1.19,"-"]],["MCO","Monaco",50.93,[20210614,1,1,2,4,0,2,0,1,3],[9.1,"+"]],["GRL","Greenland",50.93,[20210614,1,2,1,3,0,1,0,4,2],[1.51,"="]],["KWT","Kuwait",50.93,[20210607,3,1,2,2,0,0,0,3,3],[36.54,"+"]],["SLE","Sierra Leone",50.93,[20210531,1,2,2,2,1,1,0,1,3],[0.45,"+"]],["BEL","Belgium",50.93,[20210614,1,2,1,4,0,1,0,3,3],[5.42,"-"]],["COG","Congo",50.93,[20210607,0,1,1,3,1,2,1,2,3],[0.25,"="]],["BRA","Brazil",51.39,[20210611,2,-1,2,3,1,2,2,1,4],[33.99,"+"]],["GTM","Guatemala",51.85,[20210615,1,2,2,4,1,0,0,3,4],[7.61,"-"]],["FRA","France",51.85,[20210612,1,2,1,4,0,2,0,2,2],[4.86,"-"]],["MLT","Malta",52.78,[20210614,2,1,2,4,0,0,0,3,4],[0.39,"+"]],["THA","Thailand",53.7,[20210615,2,1,2,4,1,1,1,3,4],[3.96,"-"]],["MNG","Mongolia",53.7,[20210614,3,1,2,4,0,1,1,1,4],[72.98,"+"]],["POL","Poland",53.7,[20210611,1,2,1,2,1,1,1,2,2],[0.67,"-"]],["BHR","Bahrain",53.7,[20210524,1,2,1,4,0,1,1,2,3],[50.66,"-"]],["QAT","Qatar",53.7,[20210614,2,1,1,4,1,1,0,2,3],[5.26,"+"]],["SAU","Saudi Arabia",53.7,[20210614,3,1,2,3,0,0,0,3,3],[3.35,"-"]],["ARE","United Arab Emirates",53.7,[20210607,1,2,2,3,0,0,2,3,3],[21.0,"-"]],["ESP","Spain",54.17,[20210613,1,1,2,4,0,1,1,3,4],[10.26,"-"]],["DJI","Djibouti",54.63,[20210607,1,1,2,4,2,0,0,1,4],[0.14,"+"]],["SWE","Sweden",54.63,[20210614,0,1,1,4,1,1,1,3,2],[3.87,"-"]],["RWA","Rwanda",54.63,[20210614,1,2,1,3,1,2,0,2,3],[1.79,"+"]],["KGZ","Kyrgyz Republic",54.63,[20210613,2,2,2,4,1,0,0,1,3],[8.36,"+"]],["PNG","Papua New Guinea",55.56,[20210607,1,1,1,3,1,1,1,3,3],[0.34,"-"]],["DNK","Denmark",55.56,[20210614,3,2,2,3,0,0,0,3,2],[6.06,"-"]],["PRT","Portugal",56.48,[20210611,1,2,1,4,1,1,0,3,3],[8.23,"+"]],["CYP","Cyprus",56.48,[20210607,1,1,1,3,1,2,1,2,3],[4.53,"-"]],["DOM","Dominican Republic",57.41,[20210614,2,1,2,4,0,2,0,2,4],[9.75,"="]],["PRI","Puerto Rico",57.41,[20210516,1,2,2,3,1,2,1,1,3],[]],["UKR","Ukraine",57.41,[20210616,3,1,2,4,0,1,0,2,4],[2.98,"-"]],["SYR","Syria",57.87,[20210601,2,3,2,3,0,2,2,1,3],[0.18,"+"]],["SGP","Singapore",58.33,[20210614,3,2,1,4,0,1,0,3,4],[0.28,"+"]],["GIN","Guinea",58.33,[20210531,0,2,2,3,0,2,2,2,3],[0.07,"-"]],["CPV","Cape Verde",59.26,[20210505,1,2,2,4,0,1,2,1,3],[11.41,"-"]],["NOR","Norway",59.26,[20210611,1,2,1,3,1,1,1,3,2],[3.2,"-"]],["GUY","Guyana",60.19,[20210607,2,1,2,4,0,2,0,3,3],[13.06,"-"]],["AUT","Austria",60.19,[20210614,2,2,2,4,1,0,0,3,2],[2.08,"-"]],["BHS","Bahamas",60.65,[20210614,2,3,2,4,0,2,2,1,3],[7.81,"+"]],["PAN","Panama",61.11,[20210614,3,2,2,3,1,2,0,2,4],[18.9,"+"]],["BRB","Barbados",61.11,[20210614,2,2,2,4,0,2,0,2,3],[0.3,"="]],["DZA","Algeria",61.57,[20210607,1,1,2,4,1,2,1,4,3],[0.79,"-"]],["URY","Uruguay",62.04,[20210613,2,2,1,3,1,1,1,4,2],[82.7,"-"]],["BWA","Botswana",62.04,[20210613,1,1,2,4,0,2,2,1,3],[20.42,"="]],["SDN","Sudan",62.04,[20210614,3,2,2,4,0,1,0,3,3],[0.06,"-"]],["GRC","Greece",62.04,[20210607,1,2,1,4,1,1,1,3,4],[5.92,"-"]],["BLZ","Belize",62.04,[20210614,0,2,1,4,1,2,2,1,3],[2.8,"-"]],["GBR","United Kingdom",62.5,[20210604,1,2,2,4,1,0,2,3,3],[11.39,"+"]],["KAZ","Kazakhstan",62.96,[20210605,2,2,2,4,0,0,2,3,3],[5.71,"-"]],["MDG","Madagascar",63.89,[20210606,1,2,1,3,1,2,1,4,4],[0.11,"="]],["MOZ","Mozambique",63.89,[20210613,0,2,2,3,1,3,2,1,3],[0.24,"+"]],["TLS","Timor-Leste",64.35,[20210615,1,1,1,4,1,2,2,4,4],[5.82,"-"]],["TUR","Turkey",64.81,[20210615,1,1,1,2,2,2,2,2,4],[7.04,"-"]],["TTO","Trinidad and Tobago",64.81,[20210530,2,2,2,4,1,0,0,4,4],[21.16,"-"]],["MYS","Malaysia",64.81,[20210614,0,2,2,4,2,2,2,2,3],[17.27,"-"]],["ERI","Eritrea",64.81,[20210613,0,0,2,4,1,1,2,4,3],[1.68,"+"]],["GEO","Georgia",64.81,[20210610,0,2,2,4,0,2,2,2,3],[17.65,"-"]],["KEN","Kenya",65.74,[20210606,2,1,2,3,0,2,2,2,3],[0.79,"-"]],["PAK","Pakistan",65.74,[20210614,2,1,2,4,1,2,2,1,3],[0.5,"-"]],["KHM","Cambodia",66.2,[20210614,3,3,2,4,0,2,1,2,3],[3.35,"-"]],["HUN","Hungary",66.67,[20210517,2,2,2,4,0,2,0,4,3],[1.22,"-"]],["CRI","Costa Rica",66.67,[20210607,3,2,2,3,0,1,2,1,3],[31.27,"-"]],["GAB","Gabon",67.59,[20210614,1,1,2,3,1,2,2,2,3],[0.87,"+"]],["MDA","Moldova",67.59,[20210614,2,2,2,4,1,2,1,1,3],[1.19,"="]],["FJI","Fiji",67.59,[20210614,3,1,2,3,0,2,2,3,-1],[8.97,"+"]],["NLD","Netherlands",67.59,[20210611,1,2,2,4,1,1,1,3,2],[6.81,"-"]],["BTN","Bhutan",68.52,[20210614,3,3,2,3,1,2,1,3,3],[2.13,"-"]],["TWN","Taiwan",68.52,[20210531,3,2,2,4,0,2,2,3,4],[0.86,"-"]],["IDN","Indonesia",68.98,[20210614,3,2,2,4,1,2,2,3,4],[3.17,"+"]],["MUS","Mauritius",69.44,[20210613,3,2,2,4,0,1,2,2,3],[2.3,"-"]],["AZE","Azerbaijan",69.44,[20210614,2,2,2,4,1,1,1,4,2],[0.53,"-"]],["TUN","Tunisia",69.44,[20210614,1,2,2,4,1,2,1,3,3],[16.96,"-"]],["COL","Colombia",70.37,[20210615,3,2,2,3,2,2,2,1,3],[55.14,"+"]],["LBN","Lebanon",70.37,[20210510,0,2,2,4,1,2,2,2,3],[1.48,"-"]],["HKG","Hong Kong",71.3,[20210613,2,2,2,4,1,1,1,3,2],[0.02,"="]],["ITA","Italy",71.3,[20210611,1,3,2,4,1,2,2,3,4],[2.51,"-"]],["MAR","Morocco",71.3,[20210531,1,2,2,4,1,2,2,3,3],[1.0,"+"]],["PSE","Palestine",71.3,[20210430,2,1,2,4,1,2,2,2,3],[]],["SYC","Seychelles",71.3,[20210614,2,1,2,4,1,2,1,3,3],[169.08,"="]],["JAM","Jamaica",71.76,[20210617,2,2,1,3,2,2,2,2,4],[1.64,"-"]],["PHL","Philippines",71.76,[20210607,2,2,2,3,1,2,2,3,3],[6.08,"="]],["MMR","Myanmar",72.22,[20210613,3,2,2,4,1,2,1,4,4],[0.44,"+"]],["BGD","Bangladesh",72.22,[20210607,3,1,2,4,1,2,1,2,4],[1.69,"+"]],["CAN","Canada",73.61,[20210614,3,3,2,4,1,1,2,4,3],[3.14,"-"]],["IRL","Ireland",74.07,[20210615,1,2,2,3,1,2,2,3,3],[6.47,"+"]],["LAO","Laos",74.07,[20210607,2,2,2,3,2,2,2,2,3],[0.12,"+"]],["AUS","Australia",74.54,[20210604,2,3,2,4,1,2,2,4,3],[0.04,"="]],["DEU","Germany",75.0,[20210614,3,2,2,4,1,2,1,3,2],[1.86,"-"]],["PER","Peru",75.93,[20210613,2,2,2,4,1,3,2,3,4],[8.47,"-"]],["IRN","Iran",76.39,[20210607,2,3,2,3,1,2,2,3,3],[11.81,"-"]],["ECU","Ecuador",76.85,[20210525,2,2,2,3,1,1,2,4,3],[5.92,"+"]],["VNM","Vietnam",77.31,[20210614,3,2,2,4,2,2,2,4,3],[0.32,"+"]],["IRQ","Iraq",77.31,[20210607,3,2,2,4,0,2,2,3,4],[11.22,"+"]],["ARG","Argentina",77.78,[20210613,2,2,2,4,2,2,2,4,3],[50.6,"-"]],["CUB","Cuba",78.24,[20210613,3,3,2,4,2,2,2,2,3],[12.08,"+"]],["CHN","China",78.24,[20210614,3,3,2,4,1,2,2,3,2],[0.0,"="]],["HND","Honduras",78.7,[20210613,3,3,2,4,0,1,2,3,4],[9.32,"+"]],["LBY","Libya",79.63,[20210531,1,2,2,4,1,2,2,4,3],[3.6,"+"]],["SUR","Suriname",81.48,[20210612,3,2,2,4,2,2,0,4,4],[43.71,"+"]],["IND","India",81.94,[20210531,3,3,2,4,2,3,2,3,4],[5.36,"-"]],["NPL","Nepal",81.94,[20210613,2,3,2,4,2,2,2,2,4],[7.55,"-"]],["CHL","Chile",84.72,[20210613,3,3,2,4,2,3,2,4,3],[34.22,"-"]],["LKA","Sri Lanka",85.19,[20210614,3,3,2,4,1,2,2,2,3],[11.54,"-"]],["VEN","Venezuela",87.96,[20210607,3,3,2,4,1,2,2,3,4],[4.37,"-"]]];