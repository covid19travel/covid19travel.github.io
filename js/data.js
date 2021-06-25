const dataUpdate="2021.06.25";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["NIC","Nicaragua",6.48,[20210621,1,0,0,0,0,0,0,1,2],[0.48,"="]],["CAF","Central African Republic",11.11,[20210613,0,0,0,0,0,0,0,2,0],[0.11,"="]],["TZA","Tanzania",13.89,[20210607,0,0,0,0,0,0,0,3,0],[0.0,"="]],["BDI","Burundi",15.74,[20210613,0,2,0,0,0,0,0,1,1],[0.26,"-"]],["CIV","Cote d'Ivoire",17.59,[20210619,0,0,0,0,0,1,0,1,4],[0.07,"-"]],["NER","Niger",19.44,[20210621,0,0,2,1,0,0,0,2,3],[0.01,"="]],["TJK","Tajikistan",21.3,[20210621,1,1,0,0,0,0,0,3,4],[0.07,"+"]],["NZL","New Zealand",22.22,[20210623,0,0,0,0,0,0,0,4,2],[0.03,"-"]],["VUT","Vanuatu",22.22,[20210621,0,0,0,0,0,0,0,4,0],[0.0,"="]],["KIR","Kiribati",22.22,[20210614,0,0,0,0,0,0,0,4,3],[0.0,"="]],["ISR","Israel",22.22,[20210618,0,0,0,0,0,0,0,4,1],[0.83,"+"]],["SEN","Senegal",23.15,[20210607,1,0,0,0,0,0,0,3,4],[0.4,"+"]],["TCD","Chad",25.0,[20210620,0,0,0,0,0,0,2,2,4],[0.01,"+"]],["SLB","Solomon Islands",25.0,[20210620,0,0,1,0,0,0,0,3,0],[0.0,"="]],["SSD","South Sudan",25.0,[20210614,0,0,0,3,0,0,0,2,2],[0.03,"-"]],["BFA","Burkina Faso",25.0,[20210619,0,0,0,0,0,0,2,2,4],[0.01,"="]],["SLV","El Salvador",26.85,[20210615,1,1,1,0,0,0,0,1,4],[2.18,"-"]],["PRI","Puerto Rico",26.85,[20210621,1,1,1,0,0,0,0,1,2],[]],["BEN","Benin",27.78,[20210613,0,0,1,3,0,0,0,1,3],[0.04,"="]],["BOL","Bolivia",27.78,[20210607,2,0,0,0,0,0,0,4,4],[14.97,"-"]],["MAC","Macao",28.7,[20210621,1,0,1,0,0,0,0,3,2],[]],["SOM","Somalia",29.63,[20210621,0,1,1,3,0,1,0,1,3],[0.04,"="]],["CMR","Cameroon",29.63,[20210613,1,0,1,3,0,0,0,1,3],[0.09,"-"]],["DMA","Dominica",31.48,[20210620,0,0,1,2,0,1,0,2,2],[0.4,"="]],["SRB","Serbia",32.41,[20210606,1,0,1,2,0,1,0,1,3],[1.16,"-"]],["EGY","Egypt",33.33,[20210606,2,0,0,1,1,1,0,1,4],[0.52,"-"]],["GMB","Gambia",33.33,[20210621,0,0,1,4,0,0,0,2,3],[0.12,"-"]],["ABW","Aruba",33.33,[20210620,1,2,1,0,0,0,0,2,1],[3.88,"-"]],["SVN","Slovenia",35.19,[20210620,1,1,1,3,0,0,0,1,3],[2.85,"-"]],["TON","Tonga",35.19,[20210620,0,0,1,3,0,2,0,3,0],[]],["MWI","Malawi",37.04,[20210621,0,1,1,3,0,0,0,3,1],[0.35,"+"]],["BIH","Bosnia and Herzegovina",37.04,[20210623,1,2,1,3,0,0,0,1,3],[0.78,"-"]],["FRO","Faeroe Islands",38.89,[20210621,1,1,1,2,0,1,0,2,2],[3.8,"+"]],["EST","Estonia",38.89,[20210614,1,2,1,2,0,0,0,2,2],[2.39,"-"]],["VIR","United States Virgin Islands",38.89,[20210614,2,1,1,3,0,0,0,1,3],[]],["SMR","San Marino",38.89,[20210614,1,1,1,3,0,1,0,1,3],[0.0,"="]],["ISL","Iceland",38.89,[20210621,2,1,1,2,0,0,0,2,2],[0.0,"="]],["MRT","Mauritania",39.81,[20210614,0,0,2,4,0,1,0,1,3],[0.84,"+"]],["YEM","Yemen",39.81,[20210621,1,1,1,0,0,2,1,3,2],[0.01,"="]],["COD","Democratic Republic of Congo",39.81,[20210622,0,0,2,1,1,1,2,1,3],[0.37,"-"]],["BRN","Brunei",40.74,[20210624,1,1,1,2,0,0,0,4,2],[0.2,"="]],["RKS","Kosovo",40.74,[20210611,1,1,1,3,1,0,0,3,3],[0.44,"-"]],["AGO","Angola",41.67,[20210615,0,2,1,2,0,1,0,3,3],[0.39,"-"]],["UZB","Uzbekistan",41.67,[20210620,2,0,1,3,1,0,0,2,3],[1.2,"+"]],["HRV","Croatia",41.67,[20210624,1,2,1,2,1,0,0,1,3],[1.67,"-"]],["LVA","Latvia",41.67,[20210621,2,1,1,3,0,0,0,2,3],[5.1,"-"]],["LUX","Luxembourg",41.67,[20210622,1,1,1,2,0,1,0,3,2],[1.41,"-"]],["TGO","Togo",42.59,[20210620,0,2,0,3,0,1,2,2,4],[0.14,"="]],["ROU","Romania",42.59,[20210621,2,1,1,4,0,0,0,2,2],[0.3,"-"]],["BLR","Belarus",42.59,[20210524,0,0,1,4,0,1,0,4,3],[6.96,"-"]],["GHA","Ghana",42.59,[20210613,0,2,2,3,0,1,0,1,4],[0.19,"-"]],["CYP","Cyprus",43.52,[20210621,1,0,1,2,1,1,1,1,3],[7.34,"+"]],["GUM","Guam",43.52,[20210621,1,1,1,3,1,0,0,2,3],[]],["LBR","Liberia",43.52,[20210607,0,2,1,3,1,0,0,2,3],[1.51,"="]],["AND","Andorra",43.52,[20210607,1,1,1,4,1,0,0,1,3],[6.84,"+"]],["ETH","Ethiopia",43.52,[20210620,1,1,1,3,1,0,0,2,3],[0.11,"="]],["AFG","Afghanistan",43.52,[20210613,3,2,2,0,0,0,1,1,3],[5.38,"+"]],["MEX","Mexico",44.44,[20210621,3,2,1,0,1,1,2,1,4],[2.7,"+"]],["MLI","Mali",44.44,[20210614,0,2,2,3,0,1,0,1,3],[0.02,"="]],["LTU","Lithuania",44.44,[20210620,2,1,1,4,0,0,0,2,2],[2.38,"-"]],["LIE","Liechtenstein",45.37,[20210509,1,2,1,3,0,1,1,2,3],[1.5,"+"]],["GRC","Greece",45.37,[20210621,1,1,1,0,1,2,0,3,4],[3.72,"-"]],["ALB","Albania",46.3,[20210606,2,1,2,4,0,2,0,0,2],[0.1,"-"]],["USA","United States",46.76,[20210613,2,1,1,4,1,1,1,3,-1],[3.42,"="]],["CZE","Czech Republic",47.22,[20210613,1,2,2,2,0,0,0,3,2],[1.07,"-"]],["UGA","Uganda",47.22,[20210622,2,2,0,2,0,2,0,3,3],[2.69,"-"]],["TKM","Turkmenistan",47.22,[20210622,1,2,1,1,0,0,2,4,3],[]],["BMU","Bermuda",47.22,[20210614,1,1,1,3,1,1,0,2,2],[1.15,"="]],["SWZ","Eswatini",47.22,[20210607,1,1,1,2,0,1,2,1,4],[1.6,"+"]],["NGA","Nigeria",47.22,[20210621,0,1,1,3,1,2,0,2,3],[0.02,"="]],["FIN","Finland",47.69,[20210618,2,2,1,4,0,1,0,3,2],[1.47,"+"]],["FRA","France",48.15,[20210625,1,2,1,4,0,1,0,2,2],[3.24,"-"]],["LSO","Lesotho",48.15,[20210614,1,1,2,3,0,2,0,1,4],[1.45,"+"]],["CHE","Switzerland",48.15,[20210618,1,2,1,3,0,1,0,3,2],[1.68,"-"]],["JOR","Jordan",49.07,[20210601,3,0,0,0,1,2,2,1,2],[4.56,"+"]],["JPN","Japan",49.07,[20210619,1,2,1,1,0,1,1,4,1],[1.14,"+"]],["RUS","Russia",49.07,[20210617,3,1,1,3,0,1,0,2,3],[11.43,"+"]],["PRY","Paraguay",49.07,[20210621,1,2,1,3,0,2,0,2,3],[25.75,"-"]],["AUS","Australia",49.54,[20210618,1,1,1,4,1,0,2,4,3],[0.06,"+"]],["KOR","South Korea",50.0,[20210620,1,1,1,4,0,1,1,2,3],[0.95,"+"]],["DNK","Denmark",50.0,[20210618,1,2,2,3,0,0,0,3,2],[3.68,"-"]],["SLE","Sierra Leone",50.0,[20210621,0,2,2,3,1,1,0,1,4],[0.82,"-"]],["SVK","Slovak Republic",50.0,[20210524,2,2,2,4,0,2,0,2,3],[0.71,"-"]],["LBY","Libya",50.93,[20210624,0,2,2,3,0,2,1,2,3],[3.3,"-"]],["MCO","Monaco",50.93,[20210614,1,1,2,4,0,2,0,1,3],[6.55,"-"]],["KWT","Kuwait",50.93,[20210607,3,1,2,2,0,0,0,3,3],[40.91,"+"]],["BEL","Belgium",50.93,[20210618,1,2,1,4,0,1,0,3,3],[4.07,"+"]],["GRL","Greenland",50.93,[20210621,1,2,1,3,0,1,0,4,2],[0.25,"="]],["COG","Congo",50.93,[20210621,0,1,1,3,1,2,1,2,3],[0.73,"="]],["GBR","United Kingdom",51.39,[20210618,1,2,1,4,1,0,0,3,3],[16.45,"+"]],["GTM","Guatemala",51.85,[20210621,1,2,2,4,1,0,0,3,4],[7.61,"+"]],["MLT","Malta",52.78,[20210622,2,1,2,4,0,0,0,3,4],[0.32,"-"]],["HTI","Haiti",53.7,[20210621,1,1,2,4,0,2,0,2,3],[1.18,"+"]],["THA","Thailand",53.7,[20210623,2,1,2,4,1,1,1,3,4],[4.9,"+"]],["POL","Poland",53.7,[20210618,1,2,1,2,1,1,1,2,2],[0.43,"-"]],["SAU","Saudi Arabia",53.7,[20210614,3,1,2,3,0,0,0,3,3],[3.58,"+"]],["ESP","Spain",54.17,[20210620,1,1,2,4,0,1,1,3,4],[7.33,"+"]],["OMN","Oman",54.63,[20210621,2,1,1,2,0,2,1,3,3],[39.02,"-"]],["SWE","Sweden",54.63,[20210619,0,1,1,4,1,1,1,3,2],[5.49,"+"]],["DJI","Djibouti",54.63,[20210607,1,1,2,4,2,0,0,1,4],[0.29,"="]],["KGZ","Kyrgyz Republic",54.63,[20210619,2,2,2,4,1,0,0,1,3],[11.59,"+"]],["RWA","Rwanda",54.63,[20210614,1,2,1,3,1,2,0,2,3],[4.51,"+"]],["CRI","Costa Rica",55.56,[20210622,3,2,2,3,0,1,0,1,3],[29.07,"+"]],["PAK","Pakistan",56.48,[20210621,2,1,2,4,1,1,1,1,3],[0.43,"="]],["MOZ","Mozambique",56.48,[20210624,2,2,2,3,0,2,0,2,4],[0.66,"+"]],["BHS","Bahamas",56.94,[20210621,2,2,2,4,0,2,2,1,3],[5.99,"+"]],["DOM","Dominican Republic",57.41,[20210614,2,1,2,4,0,2,0,2,4],[9.77,"-"]],["UKR","Ukraine",57.41,[20210616,3,1,2,4,0,1,0,2,4],[2.17,"-"]],["SYR","Syria",57.87,[20210601,2,3,2,3,0,2,2,1,3],[0.25,"="]],["SGP","Singapore",58.33,[20210619,3,2,1,4,0,1,0,3,4],[0.32,"="]],["BRB","Barbados",58.33,[20210620,2,2,2,3,0,2,0,2,3],[0.7,"+"]],["GIN","Guinea",58.33,[20210621,0,2,2,3,0,2,2,2,3],[0.2,"+"]],["TLS","Timor-Leste",58.8,[20210620,1,1,1,4,1,2,2,4,4],[3.95,"-"]],["NOR","Norway",59.26,[20210624,1,2,1,3,1,1,1,3,2],[3.33,"-"]],["ZAF","South Africa",59.26,[20210621,1,1,1,3,1,2,2,1,3],[20.9,"+"]],["MNG","Mongolia",59.26,[20210621,3,2,2,4,0,1,1,1,4],[73.47,"+"]],["CPV","Cape Verde",59.26,[20210505,1,2,2,4,0,1,2,1,3],[10.51,"+"]],["ZMB","Zambia",60.19,[20210621,3,2,1,3,2,0,0,2,3],[14.12,"+"]],["AUT","Austria",60.19,[20210618,2,2,2,4,1,0,0,3,2],[1.34,"-"]],["GUY","Guyana",60.19,[20210620,2,1,2,4,0,2,0,3,3],[10.46,"-"]],["BRA","Brazil",60.65,[20210621,2,3,2,3,1,2,2,1,4],[36.38,"+"]],["ARE","United Arab Emirates",60.65,[20210621,1,2,2,4,1,0,2,3,3],[20.49,"-"]],["PAN","Panama",61.11,[20210614,3,2,2,3,1,2,0,2,4],[20.88,"+"]],["PNG","Papua New Guinea",61.11,[20210621,1,1,1,3,1,1,2,3,0],[0.46,"-"]],["DZA","Algeria",61.57,[20210607,1,1,2,4,1,2,1,4,3],[0.84,"="]],["BWA","Botswana",62.04,[20210613,1,1,2,4,0,2,2,1,3],[26.43,"="]],["SDN","Sudan",62.04,[20210614,3,2,2,4,0,1,0,3,3],[0.07,"+"]],["KAZ","Kazakhstan",62.96,[20210605,2,2,2,4,0,0,2,3,3],[6.46,"+"]],["QAT","Qatar",62.96,[20210621,2,2,1,3,1,1,1,3,4],[5.33,"-"]],["BHR","Bahrain",62.96,[20210621,2,2,2,4,0,1,1,2,3],[26.47,"-"]],["BGR","Bulgaria",62.96,[20210622,2,2,1,3,1,1,1,3,2],[1.21,"-"]],["TUR","Turkey",63.43,[20210617,1,1,1,2,2,2,2,2,4],[6.66,"-"]],["URY","Uruguay",63.89,[20210621,2,2,1,3,1,1,1,4,2],[56.47,"-"]],["NAM","Namibia",64.81,[20210622,3,1,1,4,1,2,2,1,3],[46.31,"-"]],["GEO","Georgia",64.81,[20210621,0,2,2,4,0,2,2,2,3],[16.65,"-"]],["MYS","Malaysia",64.81,[20210614,0,2,2,4,2,2,2,2,3],[16.76,"+"]],["ERI","Eritrea",64.81,[20210620,0,0,2,4,1,1,2,4,3],[1.99,"-"]],["KEN","Kenya",65.74,[20210606,2,1,2,3,0,2,2,2,3],[1.03,"+"]],["KHM","Cambodia",66.2,[20210614,3,3,2,4,0,2,1,2,3],[3.89,"-"]],["MAR","Morocco",66.67,[20210621,2,2,1,1,2,2,2,3,3],[1.05,"+"]],["HUN","Hungary",66.67,[20210517,2,2,2,4,0,2,0,4,3],[0.84,"-"]],["DEU","Germany",67.59,[20210620,1,2,2,4,1,1,1,3,2],[0.97,"-"]],["ZWE","Zimbabwe",67.59,[20210621,0,2,2,3,1,2,2,2,3],[2.81,"+"]],["MDA","Moldova",67.59,[20210614,2,2,2,4,1,2,1,1,3],[1.37,"+"]],["MDG","Madagascar",67.59,[20210621,2,2,1,3,1,2,1,4,4],[0.08,"-"]],["GAB","Gabon",67.59,[20210621,1,1,2,3,1,2,2,2,3],[0.81,"-"]],["FJI","Fiji",67.59,[20210621,3,1,2,3,0,2,2,3,2],[17.63,"+"]],["NLD","Netherlands",67.59,[20210624,1,2,2,4,1,1,1,3,2],[4.41,"-"]],["BTN","Bhutan",68.52,[20210614,3,3,2,3,1,2,1,3,3],[2.15,"-"]],["TWN","Taiwan",68.52,[20210531,3,2,2,4,0,2,2,3,4],[0.51,"-"]],["IRL","Ireland",68.52,[20210620,1,2,1,3,1,2,2,3,3],[6.41,"+"]],["IDN","Indonesia",68.98,[20210614,3,2,2,4,1,2,2,3,4],[5.0,"+"]],["MUS","Mauritius",69.44,[20210613,3,2,2,4,0,1,2,2,3],[0.88,"+"]],["TUN","Tunisia",69.44,[20210614,1,2,2,4,1,2,1,3,3],[20.67,"+"]],["AZE","Azerbaijan",69.44,[20210614,2,2,2,4,1,1,1,4,2],[0.47,"+"]],["LAO","Laos",69.44,[20210621,2,2,2,3,1,2,1,2,3],[0.08,"="]],["COL","Colombia",70.37,[20210620,3,2,2,3,2,2,2,1,3],[55.35,"+"]],["PRT","Portugal",70.37,[20210625,1,2,2,4,1,1,2,3,3],[11.11,"+"]],["HKG","Hong Kong",71.3,[20210621,2,2,2,4,1,1,1,3,2],[0.03,"="]],["SYC","Seychelles",71.3,[20210614,2,1,2,4,1,2,1,3,3],[143.81,"="]],["ITA","Italy",71.3,[20210618,1,3,2,4,1,2,2,3,4],[1.65,"-"]],["PSE","Palestine",71.3,[20210430,2,1,2,4,1,2,2,2,3],[]],["LBN","Lebanon",71.3,[20210620,1,2,2,3,1,2,2,2,3],[1.95,"+"]],["PHL","Philippines",71.76,[20210621,2,2,2,3,1,2,2,3,3],[5.14,"-"]],["JAM","Jamaica",71.76,[20210617,2,2,1,3,2,2,2,2,4],[1.77,"+"]],["MMR","Myanmar",72.22,[20210613,3,2,2,4,1,2,1,4,4],[0.92,"+"]],["BLZ","Belize",73.15,[20210621,3,2,1,4,1,2,2,1,3],[3.2,"+"]],["CAN","Canada",73.61,[20210618,3,3,2,4,1,1,2,4,3],[2.17,"-"]],["TTO","Trinidad and Tobago",74.07,[20210621,2,1,2,4,0,2,2,4,3],[16.34,"-"]],["PER","Peru",75.93,[20210620,2,2,2,4,1,3,2,3,4],[11.32,"+"]],["IRN","Iran",76.39,[20210607,2,3,2,3,1,2,2,3,3],[11.61,"+"]],["ECU","Ecuador",76.85,[20210525,2,2,2,3,1,1,2,4,3],[6.42,"+"]],["VNM","Vietnam",77.31,[20210621,3,2,2,4,2,2,2,4,3],[0.32,"-"]],["IRQ","Iraq",77.31,[20210607,3,2,2,4,0,2,2,3,4],[12.63,"+"]],["ARG","Argentina",77.78,[20210621,2,2,2,4,2,2,2,4,3],[40.29,"+"]],["CUB","Cuba",78.24,[20210621,3,3,2,4,2,2,2,2,3],[13.76,"+"]],["CHN","China",78.24,[20210621,3,3,2,4,1,2,2,3,2],[0.0,"="]],["HND","Honduras",78.7,[20210621,3,3,2,4,0,1,2,3,4],[8.27,"-"]],["NPL","Nepal",80.56,[20210621,2,3,2,4,2,2,2,2,3],[6.69,"-"]],["SUR","Suriname",81.48,[20210612,3,2,2,4,2,2,0,4,4],[35.09,"-"]],["IND","India",81.94,[20210617,3,3,2,4,2,3,2,3,4],[3.96,"-"]],["CHL","Chile",84.72,[20210613,3,3,2,4,2,3,2,4,3],[27.54,"-"]],["LKA","Sri Lanka",85.19,[20210614,3,3,2,4,1,2,2,2,3],[10.29,"-"]],["BGD","Bangladesh",86.11,[20210622,3,3,2,4,2,2,2,2,3],[2.57,"+"]],["VEN","Venezuela",87.96,[20210607,3,3,2,4,1,2,2,3,4],[3.98,"-"]]];