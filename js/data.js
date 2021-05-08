const dataUpdate="2021.05.08";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["TZA","Tanzania",2.78,[20210503,0,0,0,0,0,0,0,1,0],[0.0,"="]],["AFG","Afghanistan",5.56,[20210503,0,0,0,0,0,0,0,0,2],[0.63,"+"]],["CAF","Central African Republic",11.11,[20210503,0,0,0,0,0,0,1,2,3],[0.78,"="]],["NIC","Nicaragua",13.89,[20210426,0,0,0,0,0,0,0,1,1],[0.2,"="]],["BDI","Burundi",15.74,[20210503,0,2,0,0,0,0,0,1,1],[0.16,"+"]],["BLR","Belarus",19.44,[20210502,0,0,0,0,0,0,0,3,3],[11.44,"-"]],["VUT","Vanuatu",22.22,[20210503,0,0,0,0,0,0,0,4,0],[0.0,"="]],["KIR","Kiribati",22.22,[20210426,0,0,0,0,0,0,0,4,0],[]],["NZL","New Zealand",22.22,[20210426,0,0,0,0,0,0,0,4,2],[0.06,"="]],["MAC","Macao",23.15,[20210503,1,0,0,0,0,0,0,3,2],[]],["SEN","Senegal",23.15,[20210503,1,0,0,0,0,0,0,3,4],[0.24,"="]],["TWN","Taiwan",25.0,[20210503,0,0,1,0,0,0,0,3,2],[0.03,"="]],["TCD","Chad",25.0,[20210425,0,0,0,0,0,0,2,2,4],[0.04,"="]],["CIV","Cote d'Ivoire",25.93,[20210426,0,0,0,0,0,1,0,4,4],[0.17,"="]],["SLV","El Salvador",26.85,[20210503,1,1,1,0,0,0,0,1,4],[2.33,"+"]],["BOL","Bolivia",27.78,[20210501,2,0,0,0,0,0,0,4,4],[12.8,"-"]],["COD","Democratic Republic of Congo",29.63,[20210503,0,0,2,1,0,1,2,1,3],[0.06,"="]],["DMA","Dominica",29.63,[20210413,1,0,0,2,0,1,0,2,2],[0.0,"="]],["BFA","Burkina Faso",30.56,[20210425,0,0,0,0,0,0,2,4,4],[0.03,"="]],["SOM","Somalia",31.48,[20210425,0,2,1,3,0,1,0,1,3],[0.41,"="]],["HTI","Haiti",32.41,[20210419,0,0,0,3,0,2,0,2,3],[0.14,"-"]],["BEN","Benin",33.33,[20210425,0,0,0,3,1,0,0,3,4],[0.07,"="]],["MRT","Mauritania",33.33,[20210420,1,1,1,1,0,1,0,1,3],[0.65,"+"]],["SLB","Solomon Islands",33.33,[20210426,0,0,1,0,1,0,1,3,0],[0.0,"="]],["YEM","Yemen",34.26,[20210503,0,1,1,0,0,2,1,3,1],[0.06,"="]],["UZB","Uzbekistan",34.26,[20210503,1,0,1,3,0,0,0,2,3],[1.19,"+"]],["NER","Niger",34.26,[20210419,0,1,1,3,0,0,0,2,2],[0.05,"+"]],["TJK","Tajikistan",35.19,[20210426,1,1,0,3,0,0,0,3,4],[0.0,"="]],["RUS","Russia",36.57,[20210426,0,1,2,3,0,0,0,3,2],[5.62,"-"]],["GRL","Greenland",37.04,[20210427,1,0,1,2,0,0,0,4,2],[]],["DJI","Djibouti",37.96,[20210425,1,1,1,4,0,0,0,1,4],[3.17,"-"]],["CMR","Cameroon",37.96,[20210503,1,1,1,3,0,0,0,2,3],[1.45,"="]],["JPN","Japan",38.43,[20210507,1,1,1,1,0,1,1,3,1],[3.96,"+"]],["LTU","Lithuania",38.89,[20210502,2,1,1,4,0,0,0,2,2],[42.58,"-"]],["GMB","Gambia",38.89,[20210419,0,0,1,4,1,0,0,2,3],[0.16,"-"]],["ZMB","Zambia",39.81,[20210502,0,0,2,4,0,1,0,1,3],[0.32,"="]],["BRN","Brunei",40.74,[20210505,1,1,1,2,0,0,0,4,2],[0.16,"+"]],["NAM","Namibia",42.59,[20210412,1,1,1,3,0,2,0,1,3],[6.75,"-"]],["LIE","Liechtenstein",42.59,[20200602,1,2,2,4,0,1,0,-1,1],[13.86,"-"]],["ISR","Israel",43.52,[20210507,1,1,1,3,0,0,0,4,2],[0.62,"-"]],["LBR","Liberia",43.52,[20210426,0,2,1,3,1,0,0,2,3],[0.04,"="]],["SYC","Seychelles",43.52,[20210503,0,0,1,4,0,2,0,3,2],[72.63,"-"]],["ETH","Ethiopia",43.52,[20210507,1,1,1,3,1,0,0,2,3],[0.51,"-"]],["MEX","Mexico",44.44,[20210503,3,2,1,0,1,1,2,1,4],[1.9,"-"]],["GUM","Guam",44.44,[20210502,1,1,2,3,0,1,0,1,3],[]],["BIH","Bosnia and Herzegovina",45.37,[20210506,1,2,1,4,0,2,0,1,3],[9.72,"-"]],["MWI","Malawi",45.37,[20210501,0,1,1,3,1,0,0,4,1],[0.06,"-"]],["PRY","Paraguay",45.37,[20210502,1,1,1,3,0,2,0,2,3],[30.36,"+"]],["VIR","United States Virgin Islands",46.3,[20210502,2,2,1,3,0,1,0,1,3],[]],["TON","Tonga",47.22,[20210502,1,0,1,3,0,2,0,4,0],[]],["NGA","Nigeria",47.22,[20210426,0,1,1,3,1,2,0,2,3],[0.02,"="]],["MLI","Mali",48.15,[20210503,1,2,2,3,0,1,0,1,3],[0.14,"-"]],["TGO","Togo",48.15,[20210502,0,2,0,3,0,1,2,4,3],[0.24,"="]],["FRO","Faeroe Islands",48.15,[20210425,1,2,1,2,0,1,1,2,2],[]],["AUS","Australia",48.61,[20210507,0,2,1,3,1,0,2,4,3],[0.05,"="]],["HRV","Croatia",49.07,[20210506,1,1,1,4,1,0,0,3,3],[35.86,"-"]],["RKS","Kosovo",49.07,[20210427,2,1,1,3,1,2,0,2,4],[17.2,"+"]],["SAU","Saudi Arabia",50.0,[20210503,3,0,2,3,0,0,0,3,3],[2.91,"="]],["EST","Estonia",50.0,[20210426,2,3,2,4,0,1,0,2,-1],[27.03,"+"]],["ISL","Iceland",50.0,[20210425,1,2,1,3,1,0,0,3,3],[1.42,"="]],["GHA","Ghana",50.93,[20210502,0,2,2,3,0,1,0,4,4],[0.14,"+"]],["CHE","Switzerland",50.93,[20210506,1,2,1,4,0,1,0,3,3],[17.56,"-"]],["ZAF","South Africa",50.93,[20210503,3,2,0,2,1,2,0,1,3],[2.75,"+"]],["BGR","Bulgaria",50.93,[20210505,2,2,1,3,0,0,0,4,4],[10.52,"+"]],["BLZ","Belize",50.93,[20210503,3,2,1,0,0,2,1,1,3],[0.65,"-"]],["SLE","Sierra Leone",50.93,[20210426,1,2,2,2,1,1,0,1,3],[0.03,"="]],["EGY","Egypt",50.93,[20210419,1,2,2,4,0,1,0,1,4],[1.06,"+"]],["VNM","Vietnam",51.39,[20210426,1,1,0,3,1,1,1,4,3],[0.03,"="]],["SDN","Sudan",51.39,[20210502,3,1,2,4,0,1,0,2,3],[0.17,"="]],["ZWE","Zimbabwe",51.85,[20210501,1,2,2,3,0,2,0,1,3],[0.14,"-"]],["FIN","Finland",52.31,[20210507,2,2,2,4,0,1,0,3,2],[3.93,"+"]],["SGP","Singapore",52.78,[20210507,2,2,1,4,0,1,0,3,4],[0.41,"+"]],["AND","Andorra",52.78,[20210427,1,2,2,4,1,0,0,1,3],[29.21,"-"]],["UGA","Uganda",52.78,[20210423,2,2,1,2,1,2,0,1,3],[0.11,"="]],["SMR","San Marino",52.78,[20210426,1,1,2,4,0,1,1,1,4],[0.42,"-"]],["BHR","Bahrain",53.7,[20210503,1,2,2,2,0,1,1,2,3],[79.5,"+"]],["DNK","Denmark",53.7,[20210507,3,2,1,3,0,1,0,3,2],[17.15,"+"]],["COG","Congo",53.7,[20210419,0,1,1,4,1,2,1,2,3],[1.21,"+"]],["LUX","Luxembourg",53.7,[20210503,1,1,1,3,1,2,0,3,2],[21.63,"-"]],["ALB","Albania",54.63,[20210502,2,1,2,4,0,2,0,1,4],[2.44,"-"]],["MCO","Monaco",54.63,[20210501,1,2,2,4,0,2,0,1,3],[8.37,"="]],["BEL","Belgium",54.63,[20210507,1,2,1,4,0,2,0,3,3],[25.59,"+"]],["KGZ","Kyrgyz Republic",54.63,[20210502,2,2,2,4,1,0,0,1,3],[5.23,"+"]],["SRB","Serbia",56.48,[20210503,1,2,2,4,1,1,0,1,3],[14.65,"-"]],["ARE","United Arab Emirates",56.48,[20210502,1,2,2,4,0,0,2,3,3],[18.02,"-"]],["MOZ","Mozambique",56.48,[20210504,1,2,2,3,1,3,2,1,3],[0.1,"-"]],["FJI","Fiji",56.48,[20210502,0,2,1,3,0,2,2,3,1],[0.19,"-"]],["LVA","Latvia",56.48,[20210501,2,2,2,4,0,0,0,3,3],[30.2,"+"]],["THA","Thailand",56.48,[20210426,3,1,2,4,1,1,1,2,2],[2.8,"+"]],["CYP","Cyprus",56.48,[20210504,0,2,2,4,0,2,0,3,3],[41.8,"+"]],["CZE","Czech Republic",56.48,[20210502,2,2,2,4,0,0,0,3,3],[15.93,"-"]],["SVN","Slovenia",56.48,[20210426,1,2,1,3,1,1,1,2,3],[33.44,"-"]],["USA","United States",56.94,[20210504,2,1,1,4,1,1,1,3,4],[13.16,"-"]],["GIN","Guinea",57.41,[20210503,0,2,2,4,0,2,2,1,3],[0.37,"+"]],["SYR","Syria",57.87,[20210503,2,3,2,3,0,2,2,1,3],[0.43,"-"]],["KOR","South Korea",58.33,[20210502,1,1,2,4,0,1,1,3,3],[1.15,"+"]],["GTM","Guatemala",58.33,[20210426,2,1,2,4,1,0,0,3,3],[4.8,"-"]],["PAK","Pakistan",58.8,[20210418,2,3,2,4,0,3,0,2,4],[1.86,"-"]],["CPV","Cape Verde",59.26,[20210505,1,2,2,4,0,1,2,1,3],[50.23,"-"]],["LKA","Sri Lanka",59.26,[20210502,3,2,2,4,0,1,0,2,3],[8.8,"+"]],["AGO","Angola",59.26,[20210405,1,1,1,4,1,2,1,2,3],[0.67,"+"]],["BHS","Bahamas",59.72,[20210503,2,2,2,4,1,2,1,1,3],[11.62,"-"]],["GBR","United Kingdom",59.72,[20210507,1,2,2,4,1,0,1,3,3],[3.05,"+"]],["ABW","Aruba",60.19,[20210503,1,2,2,4,0,2,0,3,3],[]],["GUY","Guyana",60.19,[20210502,2,1,2,4,0,2,0,3,3],[14.35,"-"]],["LSO","Lesotho",60.19,[20210412,2,1,2,4,0,2,0,3,4],[0.2,"+"]],["BRA","Brazil",60.65,[20210502,2,3,2,4,-1,2,2,1,4],[28.46,"+"]],["ROU","Romania",61.11,[20210502,2,1,1,4,0,2,2,2,4],[6.45,"-"]],["CRI","Costa Rica",62.04,[20210503,1,2,2,3,1,1,2,1,3],[40.65,"-"]],["BWA","Botswana",62.04,[20210412,1,1,2,4,0,2,2,1,3],[9.01,"="]],["TKM","Turkmenistan",62.04,[20210426,1,3,2,1,0,0,2,4,3],[]],["MDG","Madagascar",62.04,[20210419,3,1,1,3,0,2,2,3,4],[0.84,"-"]],["KAZ","Kazakhstan",62.96,[20210503,2,2,2,4,0,0,2,3,4],[13.77,"-"]],["SWZ","Eswatini",62.96,[20210426,2,1,1,3,1,2,2,1,4],[0.2,"+"]],["PRI","Puerto Rico",62.96,[20210405,1,2,2,3,1,2,1,3,3],[]],["NOR","Norway",63.89,[20210506,1,3,1,4,1,1,1,3,2],[7.5,"-"]],["MDA","Moldova",63.89,[20210504,2,2,2,4,1,1,1,1,4],[5.58,"-"]],["FRA","France",63.89,[20210507,1,3,2,4,0,2,0,3,3],[28.58,"-"]],["GEO","Georgia",64.81,[20210426,0,2,2,4,0,2,2,2,3],[32.07,"+"]],["TTO","Trinidad and Tobago",64.81,[20210418,2,2,2,4,1,0,0,4,4],[19.35,"-"]],["SVK","Slovak Republic",64.81,[20210426,2,2,1,4,0,2,2,2,3],[7.36,"-"]],["ERI","Eritrea",64.81,[20210425,0,0,2,4,1,1,2,4,3],[0.29,"+"]],["MYS","Malaysia",65.28,[20210503,3,2,2,4,1,1,2,3,3],[10.47,"+"]],["PAN","Panama",65.74,[20210503,3,2,2,3,1,2,0,3,4],[7.24,"+"]],["PNG","Papua New Guinea",65.74,[20210426,2,2,2,3,1,1,1,2,3],[1.01,"="]],["SWE","Sweden",65.74,[20210507,1,2,2,4,1,1,1,3,2],[48.36,"-"]],["BTN","Bhutan",66.67,[20210419,0,2,2,4,1,1,1,4,4],[2.15,"+"]],["BRB","Barbados",66.67,[20210425,2,2,2,4,1,2,0,2,3],[3.78,"-"]],["HUN","Hungary",66.67,[20210430,2,2,2,4,0,2,0,4,3],[14.55,"-"]],["ESP","Spain",67.59,[20210503,1,1,2,4,0,2,2,3,4],[13.24,"-"]],["NLD","Netherlands",67.59,[20210506,1,2,2,4,1,1,1,3,2],[41.59,"-"]],["MLT","Malta",67.59,[20210503,2,2,2,4,0,0,2,3,4],[4.53,"-"]],["PHL","Philippines",68.06,[20210426,1,2,2,4,1,2,2,3,4],[6.57,"-"]],["IDN","Indonesia",68.98,[20210426,3,2,2,4,1,2,2,3,4],[1.84,"+"]],["DOM","Dominican Republic",70.37,[20210503,3,2,2,4,1,2,0,2,3],[4.47,"+"]],["BMU","Bermuda",70.37,[20210426,3,2,2,4,1,2,0,2,2],[]],["SUR","Suriname",70.37,[20210503,3,2,2,4,0,2,0,4,4],[13.88,"+"]],["KWT","Kuwait",70.37,[20210426,3,2,2,2,1,2,1,2,3],[30.07,"-"]],["JOR","Jordan",70.37,[20210426,3,2,2,3,1,2,1,1,3],[10.16,"-"]],["UKR","Ukraine",70.83,[20210503,3,3,2,4,2,1,2,1,3],[12.0,"-"]],["PSE","Palestine",71.3,[20210430,2,1,2,4,1,2,2,2,3],[]],["GAB","Gabon",71.3,[20210419,1,2,2,3,1,2,2,2,3],[1.51,"-"]],["POL","Poland",71.3,[20210507,2,2,2,4,1,1,1,3,2],[12.19,"-"]],["MAR","Morocco",71.3,[20210426,1,2,2,4,1,2,2,3,3],[0.8,"-"]],["HKG","Hong Kong",71.3,[20210501,2,2,2,4,1,1,1,3,2],[]],["RWA","Rwanda",71.3,[20210502,1,2,2,4,1,2,2,2,3],[0.47,"-"]],["TUN","Tunisia",72.22,[20210430,3,1,2,4,1,2,2,1,3],[11.02,"-"]],["PRT","Portugal",72.22,[20210507,1,2,2,4,1,2,2,3,3],[3.3,"-"]],["SSD","South Sudan",72.22,[20210503,2,2,2,4,1,2,1,2,3],[0.07,"="]],["URY","Uruguay",72.22,[20210418,3,2,2,4,1,1,0,4,2],[72.87,"+"]],["KHM","Cambodia",72.69,[20210503,3,3,2,4,0,3,2,2,4],[4.08,"-"]],["IRQ","Iraq",73.15,[20210419,3,2,2,4,0,2,2,1,4],[13.76,"-"]],["AZE","Azerbaijan",73.15,[20210506,3,2,2,4,2,1,0,4,4],[8.87,"-"]],["KEN","Kenya",73.15,[20210426,3,2,2,3,1,1,2,3,4],[0.89,"+"]],["IND","India",73.61,[20210430,3,3,2,4,0,3,2,3,4],[28.24,"-"]],["LBN","Lebanon",74.07,[20210503,1,2,2,4,1,2,2,2,3],[11.0,"-"]],["JAM","Jamaica",74.07,[20210430,1,2,2,4,1,2,2,2,3],[4.1,"-"]],["ITA","Italy",75.0,[20210507,2,3,2,4,1,2,2,3,4],[16.56,"-"]],["DEU","Germany",75.0,[20210501,3,2,2,4,1,2,1,3,2],[19.16,"+"]],["ECU","Ecuador",75.46,[20210503,2,3,2,4,1,3,2,4,3],[12.17,"+"]],["CAN","Canada",75.46,[20210507,3,3,2,4,1,2,2,4,3],[20.24,"-"]],["AUT","Austria",75.93,[20210507,2,2,2,4,1,2,2,3,3],[15.78,"-"]],["PER","Peru",75.93,[20210501,2,2,2,4,1,3,2,3,4],[10.84,"-"]],["ARG","Argentina",77.31,[20210503,3,2,2,4,2,2,2,3,3],[44.5,"+"]],["MUS","Mauritius",77.78,[20210503,3,2,2,4,1,1,1,4,4],[0.19,"+"]],["IRL","Ireland",77.78,[20210507,1,3,2,4,1,2,2,2,3],[8.78,"-"]],["CHN","China",78.24,[20210503,3,2,2,4,2,3,2,3,2],[0.0,"="]],["QAT","Qatar",79.63,[20210503,3,3,2,4,2,2,0,2,4],[21.91,"-"]],["CUB","Cuba",79.63,[20210502,3,3,2,4,2,2,2,2,3],[9.04,"+"]],["LBY","Libya",79.63,[20210419,1,2,2,4,1,2,2,4,3],[4.55,"+"]],["OMN","Oman",80.56,[20210503,2,2,2,4,2,2,1,3,3],[17.04,"="]],["MMR","Myanmar",81.48,[20210425,3,3,2,4,1,2,2,4,4],[]],["IRN","Iran",81.48,[20210502,3,3,2,4,1,2,2,3,3],[21.77,"-"]],["VEN","Venezuela",81.48,[20210502,3,2,2,4,1,2,2,3,4],[3.77,"-"]],["HND","Honduras",82.41,[20210503,3,3,2,4,0,2,2,3,3],[8.65,"-"]],["TUR","Turkey",83.33,[20210425,2,2,2,3,2,2,2,3,4],[30.07,"-"]],["CHL","Chile",84.72,[20210502,3,3,2,4,2,3,2,4,3],[28.05,"-"]],["DZA","Algeria",85.19,[20210426,3,2,2,4,2,2,2,4,3],[0.52,"="]],["LAO","Laos",86.11,[20210426,3,2,2,3,2,2,2,4,4],[0.88,"-"]],["TLS","Timor-Leste",87.04,[20210426,3,3,2,4,2,2,2,4,4],[7.47,"+"]],["GRC","Greece",87.96,[20210421,3,3,2,4,1,2,2,3,4],[17.93,"+"]],["COL","Colombia",88.89,[20210502,2,3,2,3,2,3,2,4,3],[30.57,"-"]],["BGD","Bangladesh",88.89,[20210426,3,1,2,4,2,2,2,4,3],[1.02,"-"]],["NPL","Nepal",91.67,[20210503,3,3,2,3,2,3,2,2,4],[26.68,"+"]],["MNG","Mongolia",96.3,[20210503,3,3,2,4,2,2,2,4,4],[29.33,"-"]]];