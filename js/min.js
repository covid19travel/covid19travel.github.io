var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(g){return g.raw=g};$jscomp.createTemplateTagFirstArgWithRaw=function(g,m){g.raw=m;return g};
var COUNTRIES_INDEX={NAME:0,REGION:1,SUBREG:2,INTERM:3},countries=[["Åland Islands","150","154",""],["Afghanistan","142","034",""],["Albania","150","039",""],["Algeria","002","015",""],["American Samoa","009","061",""],["Andorra","150","039",""],["Angola","002","202","017"],["Anguilla","019","419","029"],["Antarctica","","",""],["Antigua and Barbuda","019","419","029"],["Argentina","019","419","005"],["Armenia","142","145",""],["Aruba","019","419","029"],["Australia","009","053",""],["Austria","150",
"155",""],["Azerbaijan","142","145",""],["Bahamas","019","419","029"],["Bahrain","142","145",""],["Bangladesh","142","034",""],["Barbados","019","419","029"],["Belarus","150","151",""],["Belgium","150","155",""],["Belize","019","419","013"],["Benin","002","202","011"],["Bermuda","019","021",""],["Bhutan","142","034",""],["Bolivia","019","419","005"],["Bonaire, Sint Eustatius and Saba","019","419","029"],["Bosnia and Herzegovina","150","039",""],["Botswana","002","202","018"],["Bouvet Island","019",
"419","005"],["Brazil","019","419","005"],["British Indian Ocean Territory","002","202","014"],["British Virgin Islands","019","419","029"],["Brunei","142","035",""],["Bulgaria","150","151",""],["Burkina Faso","002","202","011"],["Burundi","002","202","014"],["Cambodia","142","035",""],["Cameroon","002","202","017"],["Canada","019","021",""],["Cape Verde","002","202","011"],["Cayman Islands","019","419","029"],["Central African Republic","002","202","017"],["Chad","002","202","017"],["Chile","019",
"419","005"],["China","142","030",""],["Christmas Island","009","053",""],["Cocos (Keeling) Islands","009","053",""],["Colombia","019","419","005"],["Comoros","002","202","014"],["Congo","002","202","017"],["Cook Islands","009","061",""],["Costa Rica","019","419","013"],["Cote d'Ivoire","002","202","011"],["Croatia","150","039",""],["Cuba","019","419","029"],["Curaçao","019","419","029"],["Cyprus","150","039",""],["Czech Republic","150","151",""],["Democratic People's Republic of Korea","142","030",
""],["Democratic Republic of Congo","002","202","017"],["Denmark","150","154",""],["Djibouti","002","202","014"],["Dominica","019","419","029"],["Dominican Republic","019","419","029"],["Ecuador","019","419","005"],["Egypt","002","015",""],["El Salvador","019","419","013"],["Equatorial Guinea","002","202","017"],["Eritrea","002","202","014"],["Estonia","150","154",""],["Eswatini","002","202","018"],["Ethiopia","002","202","014"],["Faeroe Islands","150","154",""],["Falkland Islands (Malvinas)","019",
"419","005"],["Fiji","009","054",""],["Finland","150","154",""],["France","150","155",""],["French Guiana","019","419","005"],["French Polynesia","009","061",""],["French Southern Territories","002","202","014"],["Gabon","002","202","017"],["Gambia","002","202","011"],["Georgia","142","145",""],["Germany","150","155",""],["Ghana","002","202","011"],["Gibraltar","150","039",""],["Greece","150","039",""],["Greenland","019","021",""],["Grenada","019","419","029"],["Guadeloupe","019","419","029"],["Guam",
"009","057",""],["Guatemala","019","419","013"],["Guernsey","150","154","830"],["Guinea","002","202","011"],["Guinea-Bissau","002","202","011"],["Guyana","019","419","005"],["Haiti","019","419","029"],["Heard Island and McDonald Islands","009","053",""],["Holy See","150","039",""],["Honduras","019","419","013"],["Hong Kong","142","030",""],["Hungary","150","151",""],["Iceland","150","154",""],["India","142","034",""],["Indonesia","142","035",""],["Iran","142","034",""],["Iraq","142","145",""],["Ireland",
"150","154",""],["Isle of Man","150","154",""],["Israel","142","145",""],["Italy","150","039",""],["Jamaica","019","419","029"],["Japan","142","030",""],["Jersey","150","154","830"],["Jordan","142","145",""],["Kazakhstan","142","143",""],["Kenya","002","202","014"],["Kiribati","009","057",""],["Kosovo","150","039",""],["Kuwait","142","145",""],["Kyrgyz Republic","142","143",""],["Laos","142","035",""],["Latvia","150","154",""],["Lebanon","142","145",""],["Lesotho","002","202","018"],["Liberia","002",
"202","011"],["Libya","002","015",""],["Liechtenstein","150","155",""],["Lithuania","150","154",""],["Luxembourg","150","155",""],["Macao","142","030",""],["Madagascar","002","202","014"],["Malawi","002","202","014"],["Malaysia","142","035",""],["Maldives","142","034",""],["Mali","002","202","011"],["Malta","150","039",""],["Marshall Islands","009","057",""],["Martinique","019","419","029"],["Mauritania","002","202","011"],["Mauritius","002","202","014"],["Mayotte","002","202","014"],["Mexico","019",
"419","013"],["Micronesia (Federated States of)","009","057",""],["Moldova","150","151",""],["Monaco","150","155",""],["Mongolia","142","030",""],["Montenegro","150","039",""],["Montserrat","019","419","029"],["Morocco","002","015",""],["Mozambique","002","202","014"],["Myanmar","142","035",""],["Namibia","002","202","018"],["Nauru","009","057",""],["Nepal","142","034",""],["Netherlands","150","155",""],["New Caledonia","009","054",""],["New Zealand","009","053",""],["Nicaragua","019","419","013"],
["Niger","002","202","011"],["Nigeria","002","202","011"],["Niue","009","061",""],["Norfolk Island","009","053",""],["North Macedonia","150","039",""],["Northern Mariana Islands","009","057",""],["Norway","150","154",""],["Oman","142","145",""],["Pakistan","142","034",""],["Palau","009","057",""],["Palestine","142","145",""],["Panama","019","419","013"],["Papua New Guinea","009","054",""],["Paraguay","019","419","005"],["Peru","019","419","005"],["Philippines","142","035",""],["Pitcairn","009","061",
""],["Poland","150","151",""],["Portugal","150","039",""],["Puerto Rico","019","419","029"],["Qatar","142","145",""],["Réunion","002","202","014"],["Romania","150","151",""],["Russia","150","151",""],["Rwanda","002","202","014"],["Saint Barthélemy","019","419","029"],["Saint Helena","002","202","011"],["Saint Kitts and Nevis","019","419","029"],["Saint Lucia","019","419","029"],["Saint Martin (French Part)","019","419","029"],["Saint Pierre and Miquelon","019","021",""],["Saint Vincent and the Grenadines",
"019","419","029"],["Samoa","009","061",""],["San Marino","150","039",""],["Sao Tome and Principe","002","202","017"],["Sark","150","154","830"],["Saudi Arabia","142","145",""],["Senegal","002","202","011"],["Serbia","150","039",""],["Seychelles","002","202","014"],["Sierra Leone","002","202","011"],["Singapore","142","035",""],["Sint Maarten (Dutch part)","019","419","029"],["Slovak Republic","150","151",""],["Slovenia","150","039",""],["Solomon Islands","009","054",""],["Somalia","002","202","014"],
["South Africa","002","202","018"],["South Georgia and the South Sandwich Islands","019","419","005"],["South Korea","142","030",""],["South Sudan","002","202","014"],["Spain","150","039",""],["Sri Lanka","142","034",""],["Sudan","002","015",""],["Suriname","019","419","005"],["Svalbard and Jan Mayen Islands","150","154",""],["Sweden","150","154",""],["Switzerland","150","155",""],["Syria","142","145",""],["Taiwan","142","030",""],["Tajikistan","142","143",""],["Tanzania","002","202","014"],["Thailand",
"142","035",""],["Timor-Leste","142","035",""],["Togo","002","202","011"],["Tokelau","009","061",""],["Tonga","009","061",""],["Trinidad and Tobago","019","419","029"],["Tunisia","002","015",""],["Turkey","142","145",""],["Turkmenistan","142","143",""],["Turks and Caicos Islands","019","419","029"],["Tuvalu","009","061",""],["Uganda","002","202","014"],["Ukraine","150","151",""],["United Arab Emirates","142","145",""],["United Kingdom","150","154",""],["United States Minor Outlying Islands","009",
"057",""],["United States Virgin Islands","019","419","029"],["United States","019","021",""],["Uruguay","019","419","005"],["Uzbekistan","142","143",""],["Vanuatu","009","054",""],["Venezuela","019","419","005"],["Vietnam","142","035",""],["Wallis and Futuna Islands","009","061",""],["Western Sahara","002","015",""],["Yemen","142","145",""],["Zambia","002","202","014"],["Zimbabwe","002","202","014"]],countriesEU="Austria;Belgium;Bulgaria;Croatia;Cyprus;Czech Republic;Denmark;Estonia;Finland;France;Germany;Greece;Hungary;Ireland;Italy;Latvia;Lithuania;Luxembourg;Malta;Netherlands;Poland;Portugal;Romania;Slovak Republic;Slovenia;Spain;Sweden".split(";"),
countriesSA="Austria;Belgium;Czech Republic;Denmark;Estonia;Finland;France;Germany;Greece;Hungary;Iceland;Italy;Latvia;Liechtenstein;Lithuania;Luxembourg;Malta;Netherlands;Norway;Poland;Portugal;Slovak Republic;Slovenia;Spain;Sweden;Switzerland".split(";"),ct;
(function(g){function m(a,d,c){c=void 0===c?tree_data:c;var b=document.getElementById(a);b.checked=d;b.indeterminate=!1;a=jst.gc(a,c);for(c=0;c<a.length;c++)m(a[c][0],d,a[c])}function u(){w=data.slice();w.sort(function(a,d){return z(a[DATA_INDEX.NAME],d[DATA_INDEX.NAME])})}function h(a,d){1==a&&0==w.length&&u();a=0==a?data:w;for(var c=document.getElementById("countriesTable").rows,b=1;b<c.length;b++){var f=d==q.ASC?b-1:data.length-b,r=a[f][DATA_INDEX.STRINGENCY];f=a[f][DATA_INDEX.NAME];var k=e(f);
c[b].style.display=p.isVisible(k)?"":"none";k=c[b].getElementsByTagName("td");k[0].innerText=r;k[1].innerText=f}}function e(a){return countries.findIndex(function(d){return d[COUNTRIES_INDEX.NAME]===a})}function n(a){return data.findIndex(function(d){return d[DATA_INDEX.NAME]===a})}function l(a){return(a=a.getElementsByTagName("td")[1])?a.textContent||a.innerText:null}function v(){for(var a=document.getElementsByClassName("content"),d=a.length-1;0<=d;d--){var c=a[d].previousSibling;c.getElementsByClassName("collapsible")[0].classList.toggle("active");
c.classList.toggle("activeRow");a[d].remove()}}function A(a){a.addEventListener("click",function(){this.classList.toggle("activeRow");if(this.children[1].classList.toggle("active")){var d=document.createElement("tr");d.className="content";var c=l(this);c=n(c);var b=data[c][DATA_INDEX.DATA];c='\n\t<strong>Containment and closure policies:</strong>\n\t<br /><br />\n\t<table id="containment">\n\t<tr><td>Closings of schools and universities:</td><td class="strong">'+C1[b[1]+1]+'</td></tr>\n\t<tr><td>Closings of workplaces:</td><td class="strong">'+
C2[b[2]+1]+'</td></tr>\n\t<tr><td>Cancelling public events:</td><td class="strong">'+C3[b[3]+1]+'</td></tr>\n\t<tr><td>Limits on gatherings:</td><td class="strong">'+C4[b[4]+1]+'</td></tr>\n\t<tr><td>Closing of public transport:</td><td class="strong">'+C5[b[5]+1]+'</td></tr>\n\t<tr><td>Orders to confine to the home:</td><td class="strong">'+C6[b[6]+1]+'</td></tr>\n\t<tr><td>Restrictions on internal travel:</td><td class="strong">'+C7[b[7]+1]+'</td></tr>\n\t<tr><td>Restrictions on international travel:</td><td class="strong">'+
C8[b[8]+1]+"</td></tr>\n\t</table>\n\t<br />\n\tUpdated: ";b=b[0].toString();b=b.substring(0,4)+"."+b.substring(4,6)+"."+b.substring(6,8);d.innerHTML="<td></td><td>"+(c+b+"\n\t</td>");document.getElementById("countriesTable").insertBefore(d,this.nextSibling)}else this.nextSibling.remove()})}function B(){var a=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);window.location.hash&&a&&setTimeout(function(){var d=window.location.hash;window.location.hash="";window.location.hash=
d},300);g.ohc()}var y=function(a){this.direction=a},q={ASC:0,DESC:1,NONE:2},x=[new y(q.ASC),new y(q.NONE)],p={name:Array(countries.length).fill(!0),region:Array(countries.length).fill(!0),eu:Array(countries.length).fill(!0),sa:Array(countries.length).fill(!0),isVisible:function(a){return this.name[a]&&this.region[a]&&this.eu[a]&&this.sa[a]}},z=(new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"})).compare,w=[];g.ohc=function(){if(window.location.hash){var a=decodeURIComponent(window.location.hash.substr(1));
(a=document.getElementById(a))&&a.click()}};g.lc=function(){document.getElementById("update").innerHTML+=dataUpdate;var a=document.getElementById("countriesTable");data.forEach(function(d){var c=d[DATA_INDEX.NAME];d=d[DATA_INDEX.STRINGENCY];var b=document.createElement("tr");b.id=c;b.className="collapsibleRow";b.innerHTML="<td>"+d+"</td><td class='collapsible'>"+c+"</td>";a.appendChild(b);A(b)});B()};g.st=function(a){v();var d=document.getElementById("countriesTable").rows[0].getElementsByTagName("th");
x[a].direction==q.ASC?(x[a].direction=q.DESC,d[a].style.backgroundImage='url("./img/desc.gif")',h(a,q.DESC)):(x[a].direction=q.ASC,d[a].style.backgroundImage='url("./img/asc.gif")',h(a,q.ASC));a=0==a?1:0;x[a].direction=q.NONE;d[a].style.backgroundImage='url("./img/bg.gif")'};g.fr=function(a){v();a=a.value.toUpperCase();for(var d=document.getElementById("countriesTable").getElementsByTagName("tr"),c=1;c<d.length;c++){var b=l(d[c]),f=e(b);p.name[f]=-1<b.toUpperCase().indexOf(a);d[c].style.display=p.isVisible(f)?
"":"none"}};g.hca=function(a){v();m(a.id,a.checked);for(var d=document.getElementById("countriesTable").getElementsByTagName("tr"),c=1;c<d.length;c++){var b=l(d[c]);b=e(b);p.region[b]=a.checked;d[c].style.display=p.isVisible(b)?"":"none"}};g.hc=function(a,d){v();var c=jst.ga(a.id);if(0!=c.length)for(var b=0;b<c.length;b++){var f=document.getElementById(c[b]),r=f;b:{var k=jst.gc(c[b]);for(var t=0;t<k.length;t++)if(!document.getElementById(k[t][0]).checked){k=!1;break b}k=!0}r.checked=k;r=f;if(f.checked)f=
!1;else b:{f=jst.gc(c[b]);for(k=0;k<f.length;k++)if(t=document.getElementById(f[k][0]),t.checked||t.indeterminate){f=!0;break b}f=!1}r.indeterminate=f}m(a.id,a.checked);c=document.getElementById("countriesTable").getElementsByTagName("tr");for(b=1;b<c.length;b++)f=l(c[b]),f=e(f),countries[f][d]==a.id&&(p.region[f]=a.checked,c[b].style.display=p.isVisible(f)?"":"none")};g.hce=function(a,d){v();for(var c=document.getElementById("countriesTable").getElementsByTagName("tr"),b=1;b<c.length;b++){var f=
l(c[b]);if(-1<d.findIndex(function(k){return k===f})){var r=e(f);("ceu"==a.id?p.eu:p.sa)[r]=a.checked;c[b].style.display=p.isVisible(r)?"":"none"}}}})(ct||(ct={}));var sh;
(function(g){function m(){return"width=640,height=320,left="+(screen.width-640)/2+",top="+(screen.height-320)/2}g.sof=function(){window.open("https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcovid19travel.com","facebook-share-dialog",m());return!1};g.sot=function(){window.open("https://twitter.com/intent/tweet?text="+document.title+"&url=https%3A%2F%2Fcovid19travel.com&hashtags=coronavirus,covid19,travel,information","twitter-share-dialog",m());return!1};g.sbe=function(){window.location.href=
"mailto:?&subject="+document.title+"&body="+encodeURIComponent("I saw this on internet and thought you'd like to see it: http://covid19travel.com")}})(sh||(sh={}));
var C1=["No data","No measures","Recommend closing or all schools open with alterations","Require closing (only some levels or categories)","Require closing all levels"],C2=["No data","No measures","Recommend closing (or recommend work from home)","Require closing (or work from home) for some sectors or categories of workers","Require closing (or work from home) for all-but-essential workplaces (eg grocery stores, doctors)"],C3=["No data","No measures","Recommend cancelling","Require cancelling"],
C4="No data;No measures;Restrictions on very large gatherings (the limit is above 1000 people);Restrictions on gatherings between 101-1000 people;Restrictions on gatherings between 11-100 people ;Restrictions on gatherings of 10 people or less".split(";"),C5=["No data","No measures","Recommend closing (or significantly reduce transport available)","Require closing (or prohibit most citizens from using it)"],C6=["No data","No measures","Recommend not leaving house","Require not leaving house with exceptions for daily exercise, grocery shopping, and 'essential' trips",
"Require not leaving house with minimal exceptions (eg allowed to leave once a week, or only one person can leave at a time, etc)"],C7=["No data","No measures","Recommend not to travel between regions/cities","Internal movement restrictions in place"],C8="No data;No measures;Screening arrivals;Quarantine arrivals from some or all regions;Ban arrivals from some regions;Ban on all regions or total border closure".split(";"),tree_data=["001",[["002",[["015"],["202",[["011"],["014"],["017"],["018"]]]]],
["019",[["021"],["419",[["005"],["013"],["029"]]]]],["142",[["030"],["034"],["035"],["143"],["145"]]],["150",[["039"],["151"],["154"],["155"]]],["009",[["053"],["054"],["057"],["061"]]]]],jst;
(function(g){function m(h,e){var n=[];Array.isArray(e[0])||e[0]!=h||(n=e);for(var l=0;l<e.length&&0==n.length;l++)Array.isArray(e[l])&&(n=m(h,e[l]));return n}function u(h,e,n){if(!Array.isArray(e[0])&&e[0]==h)return!0;if(!Array.isArray(e[0])&&Array.isArray(e[1])){n.push(e[0]);if(u(h,e[1],n))return!0;n.pop();return!1}for(var l=0;l<e.length;l++)if(Array.isArray(e[l])&&u(h,e[l],n))return!0;return!1}jst.ga=function(h){var e=[];u(h,tree_data,e);return e.reverse()};jst.gc=function(h,e){e=void 0===e?tree_data:
e;h=m(h,e);return 2>h.length?[]:h[1]}})(jst||(jst={}));