const dataUpdate="2021.07.02";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["NIC","Nicaragua",2.78,[20210628,0,0,0,0,0,0,0,1,2],[0.56,"="]],["CAF","Central African Republic",11.11,[20210628,0,0,0,0,0,0,0,2,0],[0.01,"="]],["TZA","Tanzania",11.11,[20210630,0,0,0,0,0,0,0,2,0],[0.0,"="]],["BDI","Burundi",15.74,[20210628,0,2,0,0,0,0,0,1,1],[0.18,"="]],["CIV","Cote d'Ivoire",17.59,[20210627,0,0,0,0,0,1,0,1,4],[0.17,"+"]],["NER","Niger",19.44,[20210627,0,0,2,1,0,0,0,2,3],[0.01,"="]],["TJK","Tajikistan",21.3,[20210628,1,1,0,0,0,0,0,3,4],[0.25,"+"]],["BFA","Burkina Faso",22.22,[20210627,0,0,0,0,0,0,2,1,4],[0.01,"+"]],["KIR","Kiribati",22.22,[20210628,0,0,0,0,0,0,0,4,3],[0.0,"="]],["VUT","Vanuatu",22.22,[20210621,0,0,0,0,0,0,0,4,0],[0.0,"="]],["NZL","New Zealand",22.22,[20210623,0,0,0,0,0,0,0,4,2],[0.05,"-"]],["SEN","Senegal",23.15,[20210607,1,0,0,0,0,0,0,3,4],[0.5,"+"]],["SLB","Solomon Islands",25.0,[20210627,0,0,1,0,0,0,0,3,0],[0.0,"="]],["SSD","South Sudan",25.0,[20210628,0,0,0,3,0,0,0,2,2],[0.04,"-"]],["TCD","Chad",25.0,[20210628,0,0,0,3,0,0,0,2,4],[0.0,"="]],["PRI","Puerto Rico",26.85,[20210621,1,1,1,0,0,0,0,1,2],[]],["SLV","El Salvador",26.85,[20210628,1,1,1,0,0,0,0,1,4],[2.82,"="]],["BEN","Benin",27.78,[20210626,0,0,1,3,0,0,0,1,3],[0.03,"="]],["FRA","France",27.78,[20210702,1,2,0,0,0,0,0,2,2],[2.99,"+"]],["BOL","Bolivia",27.78,[20210607,2,0,0,0,0,0,0,4,4],[14.82,"-"]],["MAC","Macao",28.7,[20210621,1,0,1,0,0,0,0,3,2],[]],["SOM","Somalia",29.63,[20210621,0,1,1,3,0,1,0,1,3],[0.06,"-"]],["ISR","Israel",29.63,[20210628,1,1,0,0,0,0,0,4,2],[2.68,"+"]],["CMR","Cameroon",29.63,[20210628,1,0,1,3,0,0,0,1,3],[0.2,"="]],["DMA","Dominica",31.48,[20210628,0,0,1,2,0,1,0,2,2],[0.2,"-"]],["EST","Estonia",32.41,[20210628,1,1,1,1,0,0,0,2,1],[2.01,"+"]],["SRB","Serbia",32.41,[20210628,1,1,1,2,0,0,0,1,2],[0.89,"="]],["GMB","Gambia",33.33,[20210621,0,0,1,4,0,0,0,2,3],[0.15,"-"]],["EGY","Egypt",33.33,[20210606,2,0,0,1,1,1,0,1,4],[0.33,"-"]],["ABW","Aruba",33.33,[20210629,1,2,1,0,0,0,0,2,1],[2.01,"-"]],["SVN","Slovenia",35.19,[20210620,1,1,1,3,0,0,0,1,3],[1.33,"-"]],["TON","Tonga",35.19,[20210628,0,0,1,3,0,2,0,3,0],[]],["BIH","Bosnia and Herzegovina",37.04,[20210623,1,2,1,3,0,0,0,1,3],[0.42,"-"]],["MWI","Malawi",37.04,[20210621,0,1,1,3,0,0,0,3,1],[0.85,"+"]],["YEM","Yemen",37.96,[20210628,1,1,1,0,0,2,1,3,2],[0.01,"="]],["ALB","Albania",37.96,[20210701,2,1,1,3,0,2,0,0,2],[0.12,"="]],["RKS","Kosovo",37.96,[20210701,1,1,1,2,1,0,0,3,3],[3.76,"-"]],["SMR","San Marino",38.89,[20210628,1,1,1,3,0,1,0,1,3],[0.42,"="]],["FRO","Faeroe Islands",38.89,[20210621,1,1,1,2,0,1,0,2,2],[2.34,"+"]],["ISL","Iceland",38.89,[20210621,2,1,1,2,0,0,0,2,2],[0.0,"="]],["VIR","United States Virgin Islands",38.89,[20210628,2,1,1,3,0,0,0,1,3],[]],["COD","Democratic Republic of Congo",39.81,[20210622,0,0,2,1,1,1,2,1,3],[0.39,"+"]],["MRT","Mauritania",39.81,[20210614,0,0,2,4,0,1,0,1,3],[1.17,"+"]],["BRN","Brunei",40.74,[20210630,1,1,1,2,0,0,0,4,2],[0.16,"+"]],["HRV","Croatia",41.67,[20210624,1,2,1,2,1,0,0,1,3],[1.99,"+"]],["UZB","Uzbekistan",41.67,[20210620,2,0,1,3,1,0,0,2,3],[1.47,"+"]],["LVA","Latvia",41.67,[20210628,2,1,1,3,0,0,0,2,3],[2.95,"+"]],["LUX","Luxembourg",41.67,[20210628,1,1,1,2,0,1,0,3,2],[7.05,"+"]],["AGO","Angola",41.67,[20210615,0,2,1,2,0,1,0,3,3],[0.38,"+"]],["CZE","Czech Republic",41.67,[20210628,1,2,1,2,0,0,0,3,2],[1.22,"-"]],["ROU","Romania",42.59,[20210621,2,1,1,4,0,0,0,2,2],[0.27,"-"]],["TGO","Togo",42.59,[20210620,0,2,0,3,0,1,2,2,4],[0.37,"+"]],["BLR","Belarus",42.59,[20210524,0,0,1,4,0,1,0,4,3],[7.67,"+"]],["GHA","Ghana",42.59,[20210626,0,2,2,3,0,1,0,1,4],[0.3,"-"]],["AND","Andorra",43.52,[20210627,1,1,1,4,1,0,0,1,3],[7.58,"+"]],["ETH","Ethiopia",43.52,[20210627,1,1,1,3,1,0,0,2,3],[0.08,"="]],["GUM","Guam",43.52,[20210621,1,1,1,3,1,0,0,2,3],[]],["CYP","Cyprus",43.52,[20210621,1,0,1,2,1,1,1,1,3],[25.55,"+"]],["MEX","Mexico",44.44,[20210628,3,2,1,0,1,1,2,1,4],[3.57,"+"]],["MLI","Mali",44.44,[20210627,0,2,2,3,0,1,0,1,3],[0.02,"="]],["LTU","Lithuania",44.44,[20210620,2,1,1,4,0,0,0,2,2],[1.15,"-"]],["LIE","Liechtenstein",45.37,[20210509,1,2,1,3,0,1,1,2,3],[3.0,"+"]],["GRC","Greece",45.37,[20210621,1,1,1,0,1,2,0,3,4],[4.49,"+"]],["AFG","Afghanistan",46.3,[20210628,3,2,2,0,-1,0,1,2,3],[3.92,"-"]],["USA","United States",46.76,[20210613,2,1,1,4,1,1,1,3,-1],[3.84,"+"]],["BMU","Bermuda",47.22,[20210628,1,1,1,3,1,1,0,2,2],[2.29,"="]],["NGA","Nigeria",47.22,[20210628,0,1,1,3,1,2,0,2,3],[0.02,"="]],["ARE","United Arab Emirates",47.22,[20210629,1,2,2,3,0,0,0,3,3],[20.62,"-"]],["UGA","Uganda",47.22,[20210622,2,2,0,2,0,2,0,3,3],[1.72,"-"]],["TKM","Turkmenistan",47.22,[20210622,1,2,1,1,0,0,2,4,3],[]],["FIN","Finland",47.69,[20210628,2,2,1,4,0,1,0,3,2],[3.21,"+"]],["SYR","Syria",47.69,[20210628,3,2,2,3,0,0,0,1,3],[0.22,"="]],["LSO","Lesotho",48.15,[20210614,1,1,2,3,0,2,0,1,4],[1.65,"+"]],["CHE","Switzerland",48.15,[20210625,1,2,1,3,0,1,0,3,2],[1.28,"+"]],["HUN","Hungary",49.07,[20210628,2,1,1,3,0,2,0,2,2],[0.47,"-"]],["PRY","Paraguay",49.07,[20210621,1,2,1,3,0,2,0,2,3],[23.12,"-"]],["JOR","Jordan",49.07,[20210601,3,0,0,0,1,2,2,1,2],[4.55,"-"]],["AUT","Austria",49.07,[20210701,2,2,1,2,1,0,0,3,2],[0.88,"-"]],["MLT","Malta",49.07,[20210628,1,1,2,4,0,0,0,3,4],[0.94,"+"]],["SLE","Sierra Leone",50.0,[20210621,0,2,2,3,1,1,0,1,4],[0.89,"-"]],["DNK","Denmark",50.0,[20210628,1,2,2,3,0,0,0,3,2],[4.44,"+"]],["SVK","Slovak Republic",50.0,[20210627,2,2,2,4,0,2,0,2,3],[0.53,"-"]],["KOR","South Korea",50.0,[20210628,1,1,1,4,0,1,1,2,3],[1.33,"+"]],["ESP","Spain",50.46,[20210628,1,2,2,4,0,1,0,3,2],[13.37,"+"]],["LBY","Libya",50.93,[20210624,0,2,2,3,0,2,1,2,3],[4.67,"+"]],["MCO","Monaco",50.93,[20210614,1,1,2,4,0,2,0,1,3],[6.55,"-"]],["KWT","Kuwait",50.93,[20210627,3,1,2,2,0,0,0,3,3],[39.98,"+"]],["GRL","Greenland",50.93,[20210627,1,2,1,3,0,1,0,4,2],[0.0,"="]],["BEL","Belgium",50.93,[20210628,1,2,1,4,0,1,0,3,3],[4.9,"-"]],["COG","Congo",50.93,[20210628,0,1,1,3,1,2,1,2,3],[0.75,"+"]],["HTI","Haiti",50.93,[20210629,1,1,2,3,0,2,0,2,3],[1.32,"+"]],["GBR","United Kingdom",51.39,[20210625,1,2,1,4,1,0,0,3,3],[30.35,"+"]],["LBR","Liberia",51.85,[20210628,0,1,2,3,1,1,0,3,3],[2.93,"+"]],["GTM","Guatemala",51.85,[20210628,1,2,2,4,1,0,0,3,4],[7.76,"+"]],["JPN","Japan",53.24,[20210701,1,2,2,2,0,1,1,4,1],[1.2,"+"]],["IRL","Ireland",53.7,[20210629,1,2,1,3,1,1,0,3,3],[7.77,"+"]],["MOZ","Mozambique",53.7,[20210701,2,2,2,3,0,2,0,1,3],[1.62,"+"]],["SAU","Saudi Arabia",53.7,[20210629,3,1,2,3,0,0,0,3,3],[2.76,"-"]],["POL","Poland",53.7,[20210625,1,2,1,2,1,1,1,2,2],[0.25,"-"]],["THA","Thailand",53.7,[20210623,2,1,2,4,1,1,1,3,4],[6.59,"+"]],["DJI","Djibouti",54.63,[20210607,1,1,2,4,2,0,0,1,4],[0.07,"="]],["SWE","Sweden",54.63,[20210628,0,1,1,4,1,1,1,3,2],[2.34,"+"]],["RWA","Rwanda",54.63,[20210628,1,2,1,3,1,2,0,2,3],[6.37,"-"]],["KGZ","Kyrgyz Republic",54.63,[20210625,2,2,2,4,1,0,0,1,3],[18.15,"+"]],["SGP","Singapore",54.63,[20210628,2,2,1,4,0,1,0,3,3],[0.23,"-"]],["RUS","Russia",55.09,[20210628,3,2,1,3,0,3,0,3,-1],[14.37,"+"]],["CRI","Costa Rica",55.56,[20210628,3,2,2,3,0,1,0,1,3],[28.81,"-"]],["PAK","Pakistan",56.48,[20210621,2,1,2,4,1,1,1,1,3],[0.44,"+"]],["BHS","Bahamas",56.94,[20210621,2,2,2,4,0,2,2,1,3],[11.92,"+"]],["BRB","Barbados",58.33,[20210620,2,2,2,3,0,2,0,2,3],[1.24,"-"]],["UKR","Ukraine",58.33,[20210627,3,2,1,3,0,1,2,1,3],[2.14,"-"]],["GIN","Guinea",58.33,[20210621,0,2,2,3,0,2,2,2,3],[0.19,"-"]],["TLS","Timor-Leste",58.8,[20210627,1,1,1,4,1,2,2,4,4],[4.21,"+"]],["ZAF","South Africa",59.26,[20210621,1,1,1,3,1,2,2,1,3],[28.52,"+"]],["CPV","Cape Verde",59.26,[20210505,1,2,2,4,0,1,2,1,3],[8.66,"+"]],["NOR","Norway",59.26,[20210624,1,2,1,3,1,1,1,3,2],[3.26,"-"]],["SWZ","Eswatini",59.26,[20210628,1,1,1,3,1,2,2,1,4],[1.69,"-"]],["MNG","Mongolia",59.26,[20210628,3,2,2,4,0,1,1,1,4],[67.28,"+"]],["ECU","Ecuador",60.19,[20210625,2,2,2,3,1,1,1,1,2],[8.14,"+"]],["ZMB","Zambia",60.19,[20210621,3,2,1,3,2,0,0,2,3],[13.38,"-"]],["GUY","Guyana",60.19,[20210620,2,1,2,4,0,2,0,3,3],[10.48,"-"]],["BRA","Brazil",60.65,[20210621,2,3,2,3,1,2,2,1,4],[25.46,"-"]],["AZE","Azerbaijan",61.11,[20210628,2,2,2,4,1,1,1,1,2],[0.63,"+"]],["PNG","Papua New Guinea",61.11,[20210621,1,1,1,3,1,1,2,3,0],[0.03,"="]],["PAN","Panama",61.11,[20210614,3,2,2,3,1,2,0,2,4],[24.02,"+"]],["DZA","Algeria",61.57,[20210607,1,1,2,4,1,2,1,4,3],[0.87,"+"]],["BWA","Botswana",62.04,[20210613,1,1,2,4,0,2,2,1,3],[24.0,"+"]],["SDN","Sudan",62.04,[20210614,3,2,2,4,0,1,0,3,3],[0.03,"-"]],["BGR","Bulgaria",62.96,[20210622,2,2,1,3,1,1,1,3,2],[1.03,"+"]],["BHR","Bahrain",62.96,[20210621,2,2,2,4,0,1,1,2,3],[13.18,"-"]],["KAZ","Kazakhstan",62.96,[20210627,2,2,2,4,0,0,2,3,3],[10.54,"+"]],["QAT","Qatar",62.96,[20210621,2,2,1,3,1,1,1,3,4],[4.16,"+"]],["DOM","Dominican Republic",62.96,[20210628,2,1,2,4,1,2,0,2,4],[7.98,"+"]],["URY","Uruguay",63.89,[20210627,2,2,1,3,1,1,1,4,2],[35.39,"-"]],["PRT","Portugal",63.89,[20210701,2,2,2,4,1,1,0,3,3],[16.99,"+"]],["IRQ","Iraq",64.81,[20210627,3,2,2,3,0,2,1,3,4],[15.05,"+"]],["GEO","Georgia",64.81,[20210621,0,2,2,4,0,2,2,2,3],[19.96,"+"]],["NAM","Namibia",64.81,[20210622,3,1,1,4,1,2,2,1,3],[70.19,"-"]],["ERI","Eritrea",64.81,[20210627,0,0,2,4,1,1,2,4,3],[1.47,"-"]],["TUR","Turkey",64.81,[20210629,1,1,1,2,2,2,2,2,4],[6.38,"-"]],["BTN","Bhutan",65.28,[20210629,3,2,2,4,1,2,1,3,3],[1.81,"-"]],["KEN","Kenya",65.74,[20210606,2,1,2,3,0,2,2,2,3],[0.88,"-"]],["MMR","Myanmar",66.2,[20210701,2,2,2,4,1,2,2,1,3],[2.27,"+"]],["BLZ","Belize",66.67,[20210628,3,2,1,4,1,1,2,1,3],[7.04,"+"]],["MAR","Morocco",66.67,[20210621,2,2,1,1,2,2,2,3,3],[1.54,"+"]],["ZWE","Zimbabwe",67.59,[20210621,0,2,2,3,1,2,2,2,3],[6.65,"+"]],["MDG","Madagascar",67.59,[20210621,2,2,1,3,1,2,1,4,4],[0.04,"+"]],["FJI","Fiji",67.59,[20210628,3,1,2,3,0,2,2,3,2],[31.89,"+"]],["DEU","Germany",67.59,[20210627,1,2,2,4,1,1,1,3,2],[0.69,"+"]],["NLD","Netherlands",67.59,[20210624,1,2,2,4,1,1,1,3,2],[3.59,"+"]],["GAB","Gabon",67.59,[20210628,1,1,2,3,1,2,2,2,3],[0.62,"+"]],["MDA","Moldova",67.59,[20210628,2,2,2,4,1,2,1,1,3],[1.52,"+"]],["TWN","Taiwan",68.52,[20210628,3,2,2,4,0,2,2,3,4],[0.28,"-"]],["IDN","Indonesia",68.98,[20210628,3,2,2,4,1,2,2,3,4],[7.79,"+"]],["LAO","Laos",69.44,[20210621,2,2,2,3,1,2,1,2,3],[0.13,"+"]],["ITA","Italy",69.91,[20210625,1,3,2,4,1,2,2,3,4],[1.2,"+"]],["CAN","Canada",69.91,[20210628,3,2,2,4,1,1,2,4,3],[1.4,"-"]],["COL","Colombia",70.37,[20210620,3,2,2,3,2,2,2,1,3],[58.76,"-"]],["LBN","Lebanon",71.3,[20210620,1,2,2,3,1,2,2,2,3],[2.12,"+"]],["SYC","Seychelles",71.3,[20210614,2,1,2,4,1,2,1,3,3],[139.3,"="]],["HKG","Hong Kong",71.3,[20210621,2,2,2,4,1,1,1,3,2],[0.04,"-"]],["PSE","Palestine",71.3,[20210430,2,1,2,4,1,2,2,2,3],[]],["JAM","Jamaica",71.76,[20210617,2,2,1,3,2,2,2,2,4],[1.57,"-"]],["AUS","Australia",71.76,[20210628,2,3,2,4,1,2,2,4,3],[0.15,"+"]],["PHL","Philippines",71.76,[20210621,2,2,2,3,1,2,2,3,3],[5.22,"-"]],["KHM","Cambodia",72.69,[20210628,3,3,2,4,0,3,2,2,3],[5.14,"+"]],["TTO","Trinidad and Tobago",74.07,[20210621,2,1,2,4,0,2,2,4,3],[16.33,"+"]],["IRN","Iran",74.54,[20210629,2,3,2,3,1,1,2,3,3],[13.39,"+"]],["CHN","China",74.54,[20210628,3,2,2,4,1,2,2,3,2],[0.0,"="]],["ARG","Argentina",75.0,[20210627,2,2,2,4,2,2,2,4,3],[44.56,"-"]],["OMN","Oman",75.0,[20210628,2,2,2,4,1,2,1,3,3],[39.06,"+"]],["PER","Peru",75.93,[20210627,2,2,2,4,1,3,2,3,4],[9.14,"+"]],["TUN","Tunisia",76.85,[20210628,3,2,2,4,2,2,2,2,3],[38.1,"+"]],["VNM","Vietnam",77.31,[20210621,3,2,2,4,2,2,2,4,3],[0.5,"+"]],["CUB","Cuba",78.24,[20210621,3,3,2,4,2,2,2,2,3],[24.16,"+"]],["MYS","Malaysia",78.7,[20210628,0,2,2,4,2,2,2,3,3],[18.59,"+"]],["HND","Honduras",78.7,[20210628,3,3,2,4,0,1,2,3,3],[9.46,"-"]],["MUS","Mauritius",80.56,[20210629,3,2,2,4,1,1,2,4,3],[0.89,"+"]],["NPL","Nepal",80.56,[20210621,2,3,2,4,2,2,2,2,3],[5.51,"+"]],["SUR","Suriname",81.48,[20210612,3,2,2,4,2,2,0,4,4],[29.54,"+"]],["IND","India",81.94,[20210628,3,3,2,4,2,3,2,3,4],[3.35,"-"]],["CHL","Chile",84.72,[20210613,3,3,2,4,2,3,2,4,3],[19.94,"-"]],["LKA","Sri Lanka",85.19,[20210614,3,3,2,4,1,2,2,2,3],[8.62,"-"]],["BGD","Bangladesh",86.11,[20210622,3,3,2,4,2,2,2,2,3],[4.22,"+"]],["VEN","Venezuela",87.96,[20210607,3,3,2,4,1,2,2,3,4],[4.21,"-"]]];