const dataUpdate="2021.10.22";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["NIC","Nicaragua",2.78,[20211017,0,0,0,0,0,0,0,1,2],[1.09,"="]],["CAF","Central African Republic",11.11,[20211011,0,0,0,0,0,0,0,2,3],[0.03,"="]],["TZA","Tanzania",13.89,[20211011,0,0,0,0,0,0,0,1,1],[0.0,"="]],["SDN","Sudan",13.89,[20211018,0,0,0,-1,0,0,0,1,4],[0.22,"-"]],["BFA","Burkina Faso",13.89,[20211009,0,0,0,0,0,0,0,1,4],[0.1,"-"]],["BDI","Burundi",13.89,[20211003,0,0,1,0,0,0,0,1,1],[0.43,"-"]],["FRO","Faeroe Islands",13.89,[20211016,0,0,0,0,0,0,0,1,0],[25.44,"+"]],["VUT","Vanuatu",16.67,[20211011,0,0,0,0,0,0,0,2,0],[0.0,"="]],["CIV","Cote d'Ivoire",17.59,[20211011,0,0,0,0,0,1,0,1,4],[0.11,"-"]],["BLR","Belarus",19.44,[20211011,0,0,0,0,0,0,0,3,2],[21.41,"+"]],["NER","Niger",19.44,[20211004,0,0,2,1,0,0,0,2,3],[0.05,"+"]],["SWE","Sweden",19.44,[20211019,0,0,0,0,0,0,0,3,0],[5.56,"-"]],["NOR","Norway",20.37,[20211015,1,0,0,0,0,0,0,2,0],[9.29,"+"]],["SEN","Senegal",21.3,[20211018,1,1,0,0,0,0,0,1,3],[0.02,"="]],["ZMB","Zambia",21.3,[20211011,0,2,0,0,0,0,0,1,3],[0.12,"="]],["SLV","El Salvador",22.22,[20211010,0,0,1,1,0,0,0,1,2],[0.68,"-"]],["TCD","Chad",22.22,[20211018,0,0,0,3,0,0,0,1,4],[0.0,"-"]],["PRI","Puerto Rico",23.15,[20211010,1,0,1,0,0,0,0,1,3],[]],["YEM","Yemen",23.15,[20211018,1,0,1,0,0,0,1,1,2],[0.08,"="]],["FIN","Finland",24.07,[20211021,1,1,0,0,0,1,0,2,1],[9.11,"+"]],["DNK","Denmark",24.07,[20211021,1,1,0,0,0,0,0,2,2],[14.62,"+"]],["EST","Estonia",25.0,[20211018,0,0,1,1,0,0,0,2,2],[90.49,"+"]],["MDA","Moldova",25.93,[20211009,0,1,0,2,0,0,0,2,2],[39.05,"+"]],["LTU","Lithuania",25.93,[20211017,0,1,0,2,0,0,0,2,2],[98.0,"+"]],["CHL","Chile",26.39,[20211018,1,1,1,3,0,0,0,0,3],[7.55,"+"]],["SSD","South Sudan",27.78,[20211010,0,0,0,4,0,0,0,2,3],[0.12,"-"]],["HUN","Hungary",27.78,[20211011,0,0,1,3,0,0,0,1,2],[13.92,"+"]],["SLB","Solomon Islands",27.78,[20211004,-1,0,1,0,0,0,0,4,0],[0.0,"="]],["LIE","Liechtenstein",28.7,[20211018,0,0,0,3,0,1,-1,2,2],[14.61,"+"]],["TUN","Tunisia",28.7,[20211011,0,1,1,1,0,0,0,2,3],[1.3,"+"]],["SLE","Sierra Leone",29.63,[20211011,1,1,0,0,1,0,0,2,3],[0.0,"="]],["TJK","Tajikistan",29.63,[20211015,1,1,0,0,0,0,0,4,3],[0.0,"="]],["GRL","Greenland",30.09,[20211018,1,0,1,3,0,0,0,1,2],[17.87,"+"]],["BOL","Bolivia",31.02,[20211012,2,1,1,1,1,0,0,2,4],[4.34,"+"]],["CZE","Czech Republic",32.41,[20211004,1,1,1,1,0,0,0,2,2],[19.17,"+"]],["GMB","Gambia",33.33,[20211018,0,0,2,3,0,0,0,1,3],[0.02,"="]],["LBN","Lebanon",34.26,[20211018,0,0,1,2,1,1,0,1,4],[8.11,"+"]],["SVK","Slovak Republic",34.72,[20211018,1,1,1,3,0,0,0,2,3],[38.07,"+"]],["MEX","Mexico",35.19,[20211012,0,2,1,0,1,1,2,1,4],[3.1,"-"]],["HRV","Croatia",35.19,[20211018,1,1,-1,2,1,0,0,2,2],[46.22,"+"]],["ABW","Aruba",35.19,[20211017,1,0,1,4,0,1,0,0,2],[11.64,"-"]],["PRY","Paraguay",35.19,[20211016,1,1,1,3,0,0,0,1,3],[0.69,"+"]],["AFG","Afghanistan",35.19,[20211017,0,2,2,0,1,0,0,4,3],[0.08,"-"]],["SVN","Slovenia",35.19,[20211011,1,1,1,3,0,0,0,1,3],[63.21,"+"]],["BIH","Bosnia and Herzegovina",35.19,[20211016,1,1,1,3,0,0,0,1,2],[17.25,"-"]],["SOM","Somalia",35.19,[20211011,0,1,1,3,0,1,0,1,3],[0.0,"="]],["COG","Congo",36.11,[20211011,0,0,1,3,0,2,0,2,3],[2.98,"+"]],["NAM","Namibia",36.11,[20211004,0,1,1,2,0,2,0,1,3],[1.28,"+"]],["MWI","Malawi",37.04,[20211018,0,1,1,3,1,0,0,1,3],[0.03,"="]],["BEN","Benin",37.04,[20211009,0,0,2,3,0,1,0,2,4],[0.0,"="]],["MNG","Mongolia",37.04,[20211018,1,2,1,3,0,1,1,1,4],[52.06,"="]],["MCO","Monaco",37.04,[20211016,0,1,1,4,0,0,0,2,2],[12.01,"-"]],["KIR","Kiribati",37.5,[20211011,0,0,0,4,0,2,0,4,0],[0.0,"="]],["PAK","Pakistan",37.5,[20211016,0,1,1,2,1,1,0,3,4],[0.3,"-"]],["SMR","San Marino",37.96,[20211009,1,1,1,4,0,0,0,1,3],[8.42,"+"]],["COD","Democratic Republic of Congo",37.96,[20211018,0,1,1,3,0,2,2,1,3],[0.02,"="]],["OMN","Oman",37.96,[20211017,1,1,1,4,0,-1,0,1,4],[0.25,"="]],["TGO","Togo",38.89,[20211018,0,0,2,3,0,0,1,1,4],[0.2,"+"]],["POL","Poland",38.89,[20211015,1,1,1,2,0,1,0,2,2],[9.49,"+"]],["ARE","United Arab Emirates",39.35,[20211018,1,1,1,3,1,0,0,1,2],[1.08,"-"]],["MUS","Mauritius",39.81,[20211004,2,2,0,3,0,0,0,2,3],[5.38,"+"]],["GEO","Georgia",39.81,[20211016,0,1,2,4,0,0,0,1,3],[110.21,"+"]],["BRA","Brazil",40.28,[20211017,2,2,1,2,1,2,0,1,3],[5.72,"+"]],["BEL","Belgium",40.28,[20211021,1,2,1,2,0,0,0,3,2],[36.31,"+"]],["LBR","Liberia",40.74,[20211018,1,1,1,3,1,0,0,1,3],[0.02,"="]],["SRB","Serbia",40.74,[20211015,1,1,1,2,1,0,0,2,3],[76.44,"+"]],["KWT","Kuwait",40.74,[20211013,1,1,1,3,0,0,0,3,3],[0.74,"-"]],["GHA","Ghana",40.74,[20211016,0,2,2,3,0,0,0,1,4],[0.56,"="]],["CYP","Cyprus",40.74,[20211017,1,1,1,2,1,0,0,2,2],[11.95,"+"]],["GBR","United Kingdom",41.2,[20211022,1,2,1,3,1,0,0,3,3],[68.42,"+"]],["ALB","Albania",41.67,[20210928,2,2,1,2,0,2,0,1,3],[16.69,"+"]],["ISL","Iceland",41.67,[20211018,2,1,1,2,0,0,0,3,2],[18.29,"+"]],["ESP","Spain",42.13,[20211008,1,1,2,4,0,0,0,2,2],[3.98,"-"]],["ARG","Argentina",42.59,[20211018,1,1,1,1,1,1,1,2,3],[2.38,"+"]],["EGY","Egypt",43.52,[20211018,1,1,2,4,0,0,0,1,4],[0.86,"+"]],["GUM","Guam",43.52,[20211001,1,1,1,3,1,0,0,2,3],[]],["MLT","Malta",43.52,[20211018,1,1,1,4,0,0,0,3,3],[3.59,"-"]],["ETH","Ethiopia",43.52,[20211018,1,1,1,3,1,0,0,2,3],[0.43,"-"]],["TON","Tonga",43.52,[20211018,0,0,1,3,0,2,0,4,2],[]],["BHR","Bahrain",43.52,[20211013,0,1,2,3,0,1,0,2,4],[4.06,"+"]],["MLI","Mali",44.44,[20211017,1,2,2,3,0,0,0,1,3],[0.13,"+"]],["LBY","Libya",44.44,[20211017,2,0,2,4,0,0,0,2,3],[7.37,"-"]],["CMR","Cameroon",44.44,[20211017,0,0,2,3,1,0,1,1,3],[1.02,"="]],["PRT","Portugal",44.44,[20211016,1,2,2,2,0,0,0,2,2],[6.67,"+"]],["IRL","Ireland",44.44,[20211019,1,1,1,3,0,1,0,3,3],[39.38,"+"]],["ZAF","South Africa",45.37,[20211004,1,1,1,2,1,2,0,1,3],[0.85,"-"]],["NLD","Netherlands",45.37,[20211015,1,2,2,0,1,0,0,3,2],[23.59,"+"]],["TLS","Timor-Leste",46.3,[20211012,0,2,2,3,2,1,0,2,3],[0.57,"-"]],["MDG","Madagascar",46.3,[20211018,0,2,1,2,0,2,0,4,3],[0.0,"-"]],["LUX","Luxembourg",46.3,[20211018,1,1,1,3,1,0,0,3,2],[19.03,"-"]],["CHE","Switzerland",46.3,[20211015,1,1,2,3,0,0,0,3,2],[12.36,"+"]],["NPL","Nepal",46.3,[20211018,1,2,2,3,1,0,0,2,4],[1.59,"+"]],["LVA","Latvia",47.22,[20211014,1,2,2,3,0,0,0,2,3],[120.86,"+"]],["PSE","Palestine",47.22,[20211018,0,0,2,4,0,0,2,2,4],[]],["BGR","Bulgaria",47.22,[20211011,1,2,2,3,0,0,0,2,3],[52.59,"+"]],["JPN","Japan",47.22,[20211017,1,1,1,1,0,1,1,4,1],[0.32,"-"]],["KOR","South Korea",47.22,[20211018,2,2,2,4,0,0,0,2,3],[2.68,"-"]],["ZWE","Zimbabwe",47.22,[20211011,1,1,1,2,1,1,1,1,3],[0.28,"-"]],["MOZ","Mozambique",48.15,[20211012,0,1,2,3,1,2,0,1,3],[0.05,"="]],["UZB","Uzbekistan",48.15,[20211005,1,0,0,3,1,0,2,3,3],[1.16,"+"]],["BGD","Bangladesh",49.07,[20211018,0,0,2,4,0,2,0,3,4],[0.21,"-"]],["TWN","Taiwan",49.07,[20211018,0,2,1,3,1,0,1,2,3],[0.02,"="]],["AND","Andorra",49.07,[20211018,1,1,2,3,1,0,0,2,2],[10.35,"-"]],["LSO","Lesotho",49.07,[20211002,1,2,1,2,1,2,0,1,3],[0.51,"-"]],["GRC","Greece",49.54,[20211018,1,2,2,3,0,2,0,3,2],[27.84,"+"]],["PNG","Papua New Guinea",49.54,[20211018,0,1,2,3,1,0,2,2,2],[3.37,"-"]],["GTM","Guatemala",49.54,[20211017,2,1,2,4,2,0,0,1,4],[5.7,"-"]],["MRT","Mauritania",50.0,[20211011,0,1,2,3,0,2,1,1,3],[0.83,"-"]],["SGP","Singapore",50.93,[20211018,2,1,1,4,0,1,0,3,4],[57.87,"+"]],["ERI","Eritrea",50.93,[20211018,0,0,2,3,1,1,0,4,3],[0.1,"+"]],["NGA","Nigeria",50.93,[20211018,0,2,1,3,1,2,0,2,3],[0.11,"+"]],["KGZ","Kyrgyz Republic",50.93,[20211004,2,1,2,4,0,0,1,1,2],[1.4,"+"]],["BHS","Bahamas",51.39,[20211021,2,2,1,4,0,2,2,1,4],[20.85,"+"]],["COL","Colombia",51.39,[20211017,3,1,1,3,2,2,1,1,3],[2.58,"+"]],["RWA","Rwanda",51.85,[20211001,1,2,1,3,1,2,0,1,3],[0.33,"-"]],["RKS","Kosovo",52.78,[20210927,1,1,1,4,1,1,0,3,3],[0.76,"-"]],["VNM","Vietnam",53.24,[20211017,2,2,2,3,1,0,1,3,3],[3.48,"-"]],["VIR","United States Virgin Islands",53.7,[20211008,3,2,1,3,0,2,0,1,3],[]],["IND","India",54.17,[20211017,2,2,2,2,-1,2,2,2,4],[1.09,"-"]],["KEN","Kenya",54.17,[20211011,0,2,2,3,0,2,2,3,4],[0.19,"-"]],["RUS","Russia",54.17,[20211014,3,1,2,3,0,0,2,2,2],[22.71,"+"]],["AGO","Angola",54.63,[20211016,0,1,1,3,1,1,2,3,3],[0.51,"-"]],["DJI","Djibouti",54.63,[20210925,1,1,2,4,2,0,0,1,4],[0.78,"-"]],["DEU","Germany",54.63,[20211009,1,2,2,3,1,1,0,2,2],[15.7,"+"]],["CRI","Costa Rica",54.63,[20211017,2,2,2,2,0,1,1,1,3],[12.54,"-"]],["THA","Thailand",55.09,[20211018,3,2,2,3,0,2,2,2,3],[14.3,"-"]],["GAB","Gabon",55.56,[20211010,1,0,2,3,1,2,1,1,3],[7.48,"-"]],["ROU","Romania",55.56,[20211011,1,1,1,2,1,1,2,2,3],[77.89,"-"]],["QAT","Qatar",55.56,[20211015,1,1,1,4,1,1,1,2,2],[2.63,"+"]],["URY","Uruguay",55.56,[20211017,1,1,1,2,1,1,1,4,2],[4.63,"-"]],["SAU","Saudi Arabia",55.56,[20211017,1,2,2,3,1,0,0,3,2],[0.13,"+"]],["CPV","Cape Verde",55.56,[20211011,0,2,2,4,0,1,2,1,3],[3.13,"-"]],["USA","United States",56.02,[20211018,2,2,2,4,1,1,1,3,3],[22.9,"-"]],["ISR","Israel",56.48,[20211021,2,2,2,3,0,0,0,4,2],[13.29,"-"]],["BMU","Bermuda",56.48,[20211004,2,1,1,3,2,1,0,2,2],[10.32,"-"]],["BLZ","Belize",56.48,[20211010,3,2,1,4,0,2,0,1,4],[53.24,"-"]],["DZA","Algeria",56.48,[20211010,0,1,2,4,2,2,0,1,3],[0.19,"-"]],["JOR","Jordan",57.41,[20211012,1,1,1,3,1,2,1,3,2],[10.51,"-"]],["TUR","Turkey",58.33,[20211001,1,2,1,0,2,0,2,3,4],[34.16,"-"]],["UKR","Ukraine",58.33,[20211018,2,1,1,3,2,0,2,1,3],[36.1,"+"]],["ECU","Ecuador",58.8,[20211004,2,1,2,4,1,1,1,2,3],[0.86,"-"]],["HKG","Hong Kong",59.26,[20211011,1,2,1,4,1,1,1,2,2],[0.07,"+"]],["MYS","Malaysia",59.26,[20211018,2,1,2,4,1,1,2,2,3],[19.41,"-"]],["AUT","Austria",60.19,[20211021,2,2,1,3,1,0,2,3,2],[30.03,"+"]],["GUY","Guyana",60.19,[20211021,1,2,2,4,0,2,0,3,4],[12.13,"-"]],["AZE","Azerbaijan",60.19,[20211018,2,2,2,2,0,0,2,4,2],[18.43,"+"]],["SYR","Syria",60.65,[20211019,3,3,2,3,1,2,1,1,3],[2.09,"+"]],["BTN","Bhutan",61.11,[20211011,2,2,1,3,1,1,1,3,3],[0.02,"-"]],["SUR","Suriname",61.11,[20211014,2,2,2,4,0,2,0,2,4],[44.22,"-"]],["SWZ","Eswatini",61.11,[20211017,3,1,1,3,1,2,1,1,4],[0.44,"-"]],["MAC","Macao",62.04,[20211014,3,1,2,4,1,0,1,2,2],[]],["SYC","Seychelles",62.04,[20211018,-1,2,2,4,1,2,1,1,3],[31.52,"+"]],["BWA","Botswana",62.04,[20211004,0,2,2,4,0,2,2,1,3],[18.61,"+"]],["GIN","Guinea",62.96,[20211018,1,1,2,3,1,2,2,1,3],[0.05,"-"]],["LKA","Sri Lanka",63.89,[20211018,0,1,2,4,1,2,2,1,4],[2.74,"-"]],["HTI","Haiti",64.81,[20211017,1,1,2,4,1,2,1,2,3],[0.73,"-"]],["CUB","Cuba",65.28,[20211010,3,1,2,4,2,2,2,1,4],[16.24,"-"]],["MAR","Morocco",65.74,[20211004,1,2,2,3,0,2,2,2,3],[0.86,"-"]],["DOM","Dominican Republic",65.74,[20211018,1,1,2,4,1,2,2,1,3],[7.64,"+"]],["KAZ","Kazakhstan",66.2,[20211012,1,1,2,4,1,2,2,3,3],[9.74,"-"]],["PER","Peru",66.67,[20211017,2,2,2,4,1,2,1,3,3],[2.1,"-"]],["FRA","France",66.67,[20211017,1,2,2,3,1,0,2,3,2],[7.56,"-"]],["BRB","Barbados",67.59,[20211017,3,2,2,3,1,2,0,2,3],[110.41,"+"]],["CAN","Canada",68.06,[20211018,3,3,2,4,0,1,2,3,3],[7.45,"-"]],["KHM","Cambodia",69.44,[20211018,2,3,2,4,0,2,2,2,3],[1.26,"-"]],["TTO","Trinidad and Tobago",69.44,[20211016,2,2,2,4,0,2,2,1,3],[15.2,"+"]],["MMR","Myanmar",71.3,[20211011,3,2,2,4,1,2,1,2,4],[1.91,"-"]],["ITA","Italy",71.3,[20211015,2,3,2,1,1,2,2,3,3],[4.71,"+"]],["IDN","Indonesia",71.76,[20211011,3,2,2,4,1,2,2,3,3],[0.3,"-"]],["TKM","Turkmenistan",72.22,[20211008,1,2,2,4,1,2,2,4,3],[]],["LAO","Laos",72.22,[20211011,3,2,2,3,2,2,2,1,3],[6.64,"-"]],["IRN","Iran",72.69,[20211011,3,3,2,4,0,2,2,3,3],[13.52,"-"]],["PAN","Panama",72.69,[20211006,1,3,2,4,2,2,2,2,4],[4.94,"+"]],["PHL","Philippines",74.54,[20211018,3,2,2,4,2,2,2,3,4],[5.46,"-"]],["AUS","Australia",74.54,[20211016,2,3,2,4,1,2,2,4,3],[8.83,"="]],["IRQ","Iraq",75.93,[20211009,3,2,2,3,0,2,2,3,4],[4.13,"-"]],["UGA","Uganda",75.93,[20211018,3,2,2,2,1,2,2,2,3],[0.16,"="]],["CHN","China",76.39,[20211018,3,3,2,4,1,3,2,2,2],[0.0,"="]],["DMA","Dominica",79.63,[20211009,3,3,2,4,1,2,1,2,2],[61.92,"+"]],["BRN","Brunei",79.63,[20211020,3,3,2,4,1,2,0,4,4],[55.97,"-"]],["VEN","Venezuela",80.56,[20211003,3,3,2,4,1,2,1,3,4],[3.89,"-"]],["NZL","New Zealand",81.02,[20211018,3,3,2,4,2,2,2,4,3],[1.64,"+"]],["HND","Honduras",82.41,[20211017,3,3,2,4,2,1,2,1,3],[2.3,"-"]],["JAM","Jamaica",86.11,[20211019,3,3,2,4,1,3,2,3,4],[5.19,"-"]],["FJI","Fiji",88.89,[20211018,3,3,2,4,2,2,2,4,2],[4.16,"="]]];