const dataUpdate="2021.07.04";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["NIC","Nicaragua",2.78,[20210628,0,0,0,0,0,0,0,1,2],[0.56,"="]],["CAF","Central African Republic",11.11,[20210628,0,0,0,0,0,0,0,2,0],[0.01,"="]],["TZA","Tanzania",11.11,[20210630,0,0,0,0,0,0,0,2,0],[0.0,"="]],["BDI","Burundi",15.74,[20210628,0,2,0,0,0,0,0,1,1],[0.18,"="]],["CIV","Cote d'Ivoire",17.59,[20210627,0,0,0,0,0,1,0,1,4],[0.18,"+"]],["NER","Niger",19.44,[20210627,0,0,2,1,0,0,0,2,3],[0.01,"="]],["TJK","Tajikistan",21.3,[20210628,1,1,0,0,0,0,0,3,4],[0.23,"+"]],["KIR","Kiribati",22.22,[20210628,0,0,0,0,0,0,0,4,3],[0.0,"="]],["NZL","New Zealand",22.22,[20210623,0,0,0,0,0,0,0,4,2],[0.07,"+"]],["VUT","Vanuatu",22.22,[20210621,0,0,0,0,0,0,0,4,0],[0.0,"="]],["BFA","Burkina Faso",22.22,[20210702,0,0,0,0,0,0,2,1,4],[0.01,"="]],["SEN","Senegal",23.15,[20210607,1,0,0,0,0,0,0,3,4],[0.66,"+"]],["SSD","South Sudan",25.0,[20210628,0,0,0,3,0,0,0,2,2],[0.07,"="]],["TCD","Chad",25.0,[20210628,0,0,0,3,0,0,0,2,4],[0.0,"="]],["SLB","Solomon Islands",25.0,[20210627,0,0,1,0,0,0,0,3,0],[0.0,"="]],["PRI","Puerto Rico",26.85,[20210621,1,1,1,0,0,0,0,1,2],[]],["SLV","El Salvador",26.85,[20210628,1,1,1,0,0,0,0,1,4],[5.08,"+"]],["BEN","Benin",27.78,[20210626,0,0,1,3,0,0,0,1,3],[0.03,"="]],["BOL","Bolivia",27.78,[20210607,2,0,0,0,0,0,0,4,4],[13.56,"-"]],["MAC","Macao",28.7,[20210702,1,0,1,0,0,0,0,3,2],[]],["ISR","Israel",29.63,[20210702,1,1,0,0,0,0,0,4,2],[3.01,"+"]],["SOM","Somalia",29.63,[20210621,0,1,1,3,0,1,0,1,3],[0.05,"-"]],["CMR","Cameroon",29.63,[20210628,1,0,1,3,0,0,0,1,3],[0.2,"="]],["DMA","Dominica",31.48,[20210628,0,0,1,2,0,1,0,2,2],[0.4,"="]],["EST","Estonia",32.41,[20210628,1,1,1,1,0,0,0,2,1],[2.37,"+"]],["SRB","Serbia",32.41,[20210628,1,1,1,2,0,0,0,1,2],[0.91,"+"]],["EGY","Egypt",33.33,[20210606,2,0,0,1,1,1,0,1,4],[0.26,"-"]],["GMB","Gambia",33.33,[20210703,0,0,1,4,0,0,0,2,3],[0.06,"-"]],["ABW","Aruba",33.33,[20210629,1,2,1,0,0,0,0,2,1],[1.74,"-"]],["SVN","Slovenia",35.19,[20210620,1,1,1,3,0,0,0,1,3],[1.32,"+"]],["TON","Tonga",35.19,[20210628,0,0,1,3,0,2,0,3,0],[]],["MWI","Malawi",37.04,[20210621,0,1,1,3,0,0,0,3,1],[0.95,"+"]],["BIH","Bosnia and Herzegovina",37.04,[20210623,1,2,1,3,0,0,0,1,3],[0.44,"="]],["YEM","Yemen",37.96,[20210628,1,1,1,0,0,2,1,3,2],[0.01,"="]],["RKS","Kosovo",37.96,[20210701,1,1,1,2,1,0,0,3,3],[3.92,"+"]],["ALB","Albania",37.96,[20210701,2,1,1,3,0,2,0,0,2],[0.12,"+"]],["ISL","Iceland",38.89,[20210621,2,1,1,2,0,0,0,2,2],[0.0,"="]],["FRO","Faeroe Islands",38.89,[20210621,1,1,1,2,0,1,0,2,2],[2.92,"+"]],["VIR","United States Virgin Islands",38.89,[20210628,2,1,1,3,0,0,0,1,3],[]],["SMR","San Marino",38.89,[20210628,1,1,1,3,0,1,0,1,3],[0.42,"="]],["COD","Democratic Republic of Congo",39.81,[20210622,0,0,2,1,1,1,2,1,3],[0.35,"-"]],["MRT","Mauritania",39.81,[20210614,0,0,2,4,0,1,0,1,3],[1.3,"+"]],["BRN","Brunei",40.74,[20210630,1,1,1,2,0,0,0,4,2],[0.1,"-"]],["HRV","Croatia",41.67,[20210624,1,2,1,2,1,0,0,1,3],[2.0,"+"]],["UZB","Uzbekistan",41.67,[20210620,2,0,1,3,1,0,0,2,3],[1.45,"-"]],["AGO","Angola",41.67,[20210615,0,2,1,2,0,1,0,3,3],[0.28,"-"]],["LVA","Latvia",41.67,[20210628,2,1,1,3,0,0,0,2,3],[3.26,"+"]],["LUX","Luxembourg",41.67,[20210628,1,1,1,2,0,1,0,3,2],[9.84,"="]],["CZE","Czech Republic",41.67,[20210628,1,2,1,2,0,0,0,3,2],[1.3,"+"]],["ROU","Romania",42.59,[20210621,2,1,1,4,0,0,0,2,2],[0.25,"="]],["TGO","Togo",42.59,[20210702,0,2,0,3,0,1,2,2,4],[0.43,"+"]],["BLR","Belarus",42.59,[20210524,0,0,1,4,0,1,0,4,3],[8.58,"+"]],["GHA","Ghana",42.59,[20210626,0,2,2,3,0,1,0,1,4],[0.37,"+"]],["CYP","Cyprus",43.52,[20210621,1,0,1,2,1,1,1,1,3],[34.03,"+"]],["GUM","Guam",43.52,[20210621,1,1,1,3,1,0,0,2,3],[]],["ETH","Ethiopia",43.52,[20210627,1,1,1,3,1,0,0,2,3],[0.06,"-"]],["AND","Andorra",43.52,[20210627,1,1,1,4,1,0,0,1,3],[6.66,"="]],["FIN","Finland",43.98,[20210702,1,1,1,4,0,1,0,3,2],[3.57,"-"]],["MEX","Mexico",44.44,[20210628,3,2,1,0,1,1,2,1,4],[3.77,"+"]],["MLI","Mali",44.44,[20210627,0,2,2,3,0,1,0,1,3],[0.02,"="]],["LTU","Lithuania",44.44,[20210620,2,1,1,4,0,0,0,2,2],[1.09,"-"]],["FRA","France",44.44,[20210702,1,2,1,4,0,0,0,2,2],[3.33,"+"]],["CHE","Switzerland",44.44,[20210702,1,1,1,3,0,1,0,3,2],[1.37,"="]],["GRC","Greece",45.37,[20210621,1,1,1,0,1,2,0,3,4],[6.41,"+"]],["LIE","Liechtenstein",45.37,[20210509,1,2,1,3,0,1,1,2,3],[3.75,"+"]],["AFG","Afghanistan",46.3,[20210628,3,2,2,0,-1,0,1,2,3],[3.16,"="]],["USA","United States",46.76,[20210613,2,1,1,4,1,1,1,3,-1],[3.99,"-"]],["UGA","Uganda",47.22,[20210622,2,2,0,2,0,2,0,3,3],[1.67,"-"]],["TKM","Turkmenistan",47.22,[20210622,1,2,1,1,0,0,2,4,3],[]],["BMU","Bermuda",47.22,[20210628,1,1,1,3,1,1,0,2,2],[1.38,"+"]],["DNK","Denmark",47.22,[20210702,1,2,2,2,0,0,0,3,2],[5.32,"+"]],["ARE","United Arab Emirates",47.22,[20210629,1,2,2,3,0,0,0,3,3],[18.87,"-"]],["NGA","Nigeria",47.22,[20210628,0,1,1,3,1,2,0,2,3],[0.02,"="]],["SYR","Syria",47.69,[20210628,3,2,2,3,0,0,0,1,3],[0.21,"="]],["LSO","Lesotho",48.15,[20210614,1,1,2,3,0,2,0,1,4],[2.19,"-"]],["JOR","Jordan",49.07,[20210601,3,0,0,0,1,2,2,1,2],[4.62,"-"]],["AUT","Austria",49.07,[20210702,2,2,1,2,1,0,0,3,2],[0.75,"-"]],["PRY","Paraguay",49.07,[20210703,1,2,1,3,0,2,0,2,3],[21.43,"-"]],["MLT","Malta",49.07,[20210628,1,1,2,4,0,0,0,3,4],[1.1,"+"]],["HUN","Hungary",49.07,[20210628,2,1,1,3,0,2,0,2,2],[0.42,"="]],["KOR","South Korea",50.0,[20210628,1,1,1,4,0,1,1,2,3],[1.4,"+"]],["SVK","Slovak Republic",50.0,[20210627,2,2,2,4,0,2,0,2,3],[0.43,"-"]],["POL","Poland",50.0,[20210702,1,1,1,2,1,1,1,2,2],[0.24,"="]],["SLE","Sierra Leone",50.0,[20210621,0,2,2,3,1,1,0,1,4],[0.79,"-"]],["ESP","Spain",50.46,[20210628,1,2,2,4,0,1,0,3,2],[15.71,"="]],["MCO","Monaco",50.93,[20210614,1,1,2,4,0,2,0,1,3],[6.19,"+"]],["LBY","Libya",50.93,[20210624,0,2,2,3,0,2,1,2,3],[4.56,"="]],["KWT","Kuwait",50.93,[20210627,3,1,2,2,0,0,0,3,3],[40.46,"-"]],["GRL","Greenland",50.93,[20210703,1,2,1,3,0,1,0,4,2],[0.0,"="]],["COG","Congo",50.93,[20210628,0,1,1,3,1,2,1,2,3],[0.54,"="]],["BEL","Belgium",50.93,[20210702,1,2,1,4,0,1,0,3,3],[4.97,"="]],["HTI","Haiti",50.93,[20210629,1,1,2,3,0,2,0,2,3],[0.87,"="]],["GBR","United Kingdom",51.39,[20210702,1,2,1,4,1,0,0,3,3],[34.14,"+"]],["SWE","Sweden",51.85,[20210703,0,1,1,3,1,1,1,3,2],[2.81,"="]],["LBR","Liberia",51.85,[20210628,0,1,2,3,1,1,0,3,3],[2.8,"-"]],["GTM","Guatemala",51.85,[20210628,1,2,2,4,1,0,0,3,4],[8.24,"+"]],["JPN","Japan",53.24,[20210702,1,2,2,2,0,1,1,4,1],[1.23,"+"]],["SAU","Saudi Arabia",53.7,[20210629,3,1,2,3,0,0,0,3,3],[3.94,"-"]],["THA","Thailand",53.7,[20210623,2,1,2,4,1,1,1,3,4],[7.51,"+"]],["MOZ","Mozambique",53.7,[20210701,2,2,2,3,0,2,0,1,3],[2.06,"+"]],["IRL","Ireland",53.7,[20210703,1,2,1,3,1,1,0,3,3],[8.17,"+"]],["RWA","Rwanda",54.63,[20210628,1,2,1,3,1,2,0,2,3],[6.41,"+"]],["DJI","Djibouti",54.63,[20210607,1,1,2,4,2,0,0,1,4],[0.06,"+"]],["KGZ","Kyrgyz Republic",54.63,[20210625,2,2,2,4,1,0,0,1,3],[20.49,"+"]],["SGP","Singapore",54.63,[20210703,2,2,1,4,0,1,0,3,4],[0.19,"-"]],["RUS","Russia",55.09,[20210628,3,2,1,3,0,3,0,3,-1],[14.9,"+"]],["CRI","Costa Rica",55.56,[20210628,3,2,2,3,0,1,0,1,3],[28.61,"="]],["NLD","Netherlands",56.48,[20210702,1,2,2,0,1,1,1,3,2],[4.31,"+"]],["ITA","Italy",56.48,[20210702,1,2,1,2,1,1,1,3,2],[1.23,"+"]],["BHS","Bahamas",56.94,[20210621,2,2,2,4,0,2,2,1,3],[9.74,"="]],["GIN","Guinea",58.33,[20210621,0,2,2,3,0,2,2,2,3],[0.13,"-"]],["BRB","Barbados",58.33,[20210620,2,2,2,3,0,2,0,2,3],[0.4,"-"]],["UKR","Ukraine",58.33,[20210627,3,2,1,3,0,1,2,1,3],[2.12,"+"]],["TLS","Timor-Leste",58.8,[20210627,1,1,1,4,1,2,2,4,4],[4.83,"-"]],["ZAF","South Africa",59.26,[20210621,1,1,1,3,1,2,2,1,3],[31.9,"+"]],["CPV","Cape Verde",59.26,[20210505,1,2,2,4,0,1,2,1,3],[9.28,"+"]],["NOR","Norway",59.26,[20210702,1,2,1,3,1,1,1,3,2],[3.61,"-"]],["SWZ","Eswatini",59.26,[20210628,1,1,1,3,1,2,2,1,4],[0.81,"-"]],["MNG","Mongolia",59.26,[20210628,3,2,2,4,0,1,1,1,4],[67.83,"+"]],["ECU","Ecuador",60.19,[20210625,2,2,2,3,1,1,1,1,2],[7.11,"-"]],["GUY","Guyana",60.19,[20210620,2,1,2,4,0,2,0,3,3],[9.64,"-"]],["ZMB","Zambia",60.19,[20210621,3,2,1,3,2,0,0,2,3],[12.79,"-"]],["BRA","Brazil",60.65,[20210621,2,3,2,3,1,2,2,1,4],[23.87,"-"]],["AZE","Azerbaijan",61.11,[20210628,2,2,2,4,1,1,1,1,2],[0.74,"+"]],["PNG","Papua New Guinea",61.11,[20210621,1,1,1,3,1,1,2,3,0],[0.0,"-"]],["PAN","Panama",61.11,[20210614,3,2,2,3,1,2,0,2,4],[24.68,"+"]],["DZA","Algeria",61.57,[20210607,1,1,2,4,1,2,1,4,3],[0.94,"+"]],["SDN","Sudan",62.04,[20210614,3,2,2,4,0,1,0,3,3],[0.03,"="]],["BWA","Botswana",62.04,[20210613,1,1,2,4,0,2,2,1,3],[24.0,"="]],["QAT","Qatar",62.96,[20210621,2,2,1,3,1,1,1,3,4],[4.28,"-"]],["BHR","Bahrain",62.96,[20210621,2,2,2,4,0,1,1,2,3],[10.84,"-"]],["KAZ","Kazakhstan",62.96,[20210627,2,2,2,4,0,0,2,3,3],[13.69,"+"]],["DOM","Dominican Republic",62.96,[20210628,2,1,2,4,1,2,0,2,4],[8.3,"-"]],["BGR","Bulgaria",62.96,[20210622,2,2,1,3,1,1,1,3,2],[1.07,"+"]],["URY","Uruguay",63.89,[20210627,2,2,1,3,1,1,1,4,2],[30.1,"-"]],["PAK","Pakistan",63.89,[20210702,2,2,2,4,1,1,1,1,3],[0.49,"+"]],["TUR","Turkey",64.81,[20210629,1,1,1,2,2,2,2,2,4],[6.14,"-"]],["IRQ","Iraq",64.81,[20210627,3,2,2,3,0,2,1,3,4],[15.62,"+"]],["ERI","Eritrea",64.81,[20210627,0,0,2,4,1,1,2,4,3],[1.18,"-"]],["GEO","Georgia",64.81,[20210621,0,2,2,4,0,2,2,2,3],[21.88,"+"]],["BTN","Bhutan",65.28,[20210629,3,2,2,4,1,2,1,3,3],[1.96,"-"]],["KEN","Kenya",65.74,[20210606,2,1,2,3,0,2,2,2,3],[0.85,"+"]],["MMR","Myanmar",66.2,[20210701,2,2,2,4,1,2,2,1,3],[2.82,"+"]],["BLZ","Belize",66.67,[20210628,3,2,1,4,1,1,2,1,3],[7.4,"="]],["MAR","Morocco",66.67,[20210621,2,2,1,1,2,2,2,3,3],[1.83,"+"]],["DEU","Germany",67.59,[20210627,1,2,2,4,1,1,1,3,2],[0.67,"-"]],["ZWE","Zimbabwe",67.59,[20210621,0,2,2,3,1,2,2,2,3],[7.35,"+"]],["MDG","Madagascar",67.59,[20210621,2,2,1,3,1,2,1,4,4],[0.05,"+"]],["FJI","Fiji",67.59,[20210628,3,1,2,3,0,2,2,3,2],[36.81,"+"]],["GAB","Gabon",67.59,[20210628,1,1,2,3,1,2,2,2,3],[0.59,"="]],["MDA","Moldova",67.59,[20210628,2,2,2,4,1,2,1,1,3],[1.43,"+"]],["AUS","Australia",68.06,[20210702,2,2,2,4,1,2,2,4,3],[0.14,"-"]],["NPL","Nepal",68.52,[20210703,3,2,2,4,1,1,2,2,4],[5.52,"+"]],["CHN","China",68.98,[20210702,1,2,2,4,1,2,2,3,2],[0.0,"="]],["IDN","Indonesia",68.98,[20210628,3,2,2,4,1,2,2,3,4],[8.51,"+"]],["LAO","Laos",69.44,[20210621,2,2,2,3,1,2,1,2,3],[0.22,"+"]],["CAN","Canada",69.91,[20210702,3,2,2,4,1,1,2,4,3],[1.46,"-"]],["COL","Colombia",70.37,[20210620,3,2,2,3,2,2,2,1,3],[55.56,"-"]],["LBN","Lebanon",71.3,[20210620,1,2,2,3,1,2,2,2,3],[2.24,"+"]],["TWN","Taiwan",71.3,[20210703,3,2,2,4,0,2,1,3,4],[0.27,"="]],["HKG","Hong Kong",71.3,[20210621,2,2,2,4,1,1,1,3,2],[0.05,"-"]],["PSE","Palestine",71.3,[20210430,2,1,2,4,1,2,2,2,3],[]],["SYC","Seychelles",71.3,[20210614,2,1,2,4,1,2,1,3,3],[107.64,"="]],["JAM","Jamaica",71.76,[20210617,2,2,1,3,2,2,2,2,4],[1.34,"-"]],["PHL","Philippines",71.76,[20210702,2,2,2,4,1,2,2,3,3],[5.02,"-"]],["KHM","Cambodia",72.69,[20210628,3,3,2,4,0,3,2,2,3],[5.54,"+"]],["PRT","Portugal",74.07,[20210702,2,2,2,4,1,2,2,3,3],[19.61,"+"]],["TTO","Trinidad and Tobago",74.07,[20210621,2,1,2,4,0,2,2,4,3],[12.7,"-"]],["IRN","Iran",74.54,[20210629,2,3,2,3,1,1,2,3,3],[14.13,"+"]],["OMN","Oman",75.0,[20210628,2,2,2,4,1,2,1,3,3],[39.06,"="]],["ARG","Argentina",75.0,[20210627,2,2,2,4,2,2,2,4,3],[42.14,"-"]],["PER","Peru",75.93,[20210627,2,2,2,4,1,3,2,3,4],[6.19,"="]],["NAM","Namibia",76.85,[20210704,3,2,2,4,1,2,2,1,3],[58.19,"-"]],["TUN","Tunisia",76.85,[20210628,3,2,2,4,2,2,2,2,3],[42.85,"+"]],["VNM","Vietnam",77.31,[20210621,3,2,2,4,2,2,2,4,3],[0.58,"+"]],["CUB","Cuba",78.24,[20210621,3,3,2,4,2,2,2,2,3],[26.58,"+"]],["HND","Honduras",78.7,[20210628,3,3,2,4,0,1,2,3,3],[10.51,"+"]],["MYS","Malaysia",78.7,[20210628,0,2,2,4,2,2,2,3,3],[19.48,"+"]],["MUS","Mauritius",80.56,[20210629,3,2,2,4,1,1,2,4,3],[0.28,"-"]],["SUR","Suriname",81.48,[20210612,3,2,2,4,2,2,0,4,4],[27.83,"-"]],["IND","India",81.94,[20210628,3,3,2,4,2,3,2,3,4],[3.23,"-"]],["CHL","Chile",84.72,[20210613,3,3,2,4,2,3,2,4,3],[17.8,"-"]],["LKA","Sri Lanka",85.19,[20210614,3,3,2,4,1,2,2,2,3],[8.21,"-"]],["BGD","Bangladesh",86.11,[20210622,3,3,2,4,2,2,2,2,3],[4.61,"+"]],["VEN","Venezuela",87.96,[20210607,3,3,2,4,1,2,2,3,4],[4.04,"-"]]];