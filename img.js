var h = 523;
var w = 933;
var iter = 0;
var totalPop = 8094505615;
var ratio = document.getElementById("ratio");
var pop = document.getElementById("pop");
var per = document.getElementById("per");
var population = 0;
var count = 0;
ratio.innerHTML = "0 / 201";
pop.innerHTML = population;
per.innerHTML = "0.00%";
var img = new Image();
var textbox = document.getElementById("input");
img.crossOrigin = "Anonymous";
img.src = 'countries.png';
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
img.onload = function() {
    ctx.drawImage(img, 0, 0);

    for (let i = 0; i < chosen.length; i++) {
        let guess = chosen[i];
        let names = Object.keys(countries);
        for (let k = 0; k < names.length; k++) {
            if (names[k].toUpperCase() == guess) {
                count += 1;
                population += countries[names[k]][0];
                pop.innerHTML = population;
                ratio.innerHTML = count.toString() + " / 201";
                let percent = Math.round(population / totalPop * 10000) / 100
                per.innerHTML = percent.toString() + "%";
                let coords = countries[names[k]].slice(1)
                for (let j = 0; j < coords.length; j += 2) {
                    bucket(coords[j], coords[j + 1]);
                }
            }
        }
    }
};
var chosen = [];
if (!localStorage.chosen) {
    localStorage.chosen = "";
}
else {
    let start = 0;
    for (let i = 0; i < localStorage.chosen.length; i++) {
        if (localStorage.chosen[i] == '-') {
            chosen.push(localStorage.chosen.slice(start, i));
            start = i + 1;
        }
    }
}





function bucket(x, y) {
    var data = ctx.getImageData(x, y, 1, 1).data;
    var r = data[0];
    var g = data[1];
    var b = data[2];
    if ((r + b + g) / 3 > 100) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.fillRect(x, y, 1, 1);
        ctx.stroke();
        try {
            bucket(x - 1, y);
            bucket(x + 1, y);
            bucket(x, y - 1);
            bucket(x, y + 1);
            bucket(x + 1, y + 1);
            bucket(x + 1, y - 1);
            bucket(x - 1, y + 1);
            bucket(x - 1, y - 1);
        } catch(error) {
            bucket2(x - 1, y);
            bucket2(x + 1, y);
            bucket2(x, y - 1);
            bucket2(x, y + 1);
            bucket2(x + 1, y + 1);
            bucket2(x + 1, y - 1);
            bucket2(x - 1, y + 1);
            bucket2(x - 1, y - 1);
        }
    }
}

function bucket2(x, y) {
    var data = ctx.getImageData(x, y, 1, 1).data;
    var r = data[0];
    var g = data[1];
    var b = data[2];
    if ((r + b + g) / 3 > 100 && (r != 0 || g != 146 || b != 253)) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.fillRect(x, y, 1, 1);
        ctx.stroke();
        try {
            bucket2(x - 1, y);
            bucket2(x + 1, y);
            bucket2(x, y - 1);
            bucket2(x, y + 1);
            bucket2(x + 1, y + 1);
            bucket2(x + 1, y - 1);
            bucket2(x - 1, y + 1);
            bucket2(x - 1, y - 1);
        } catch(error) {
            bucket(x - 1, y);
            bucket(x + 1, y);
            bucket(x, y - 1);
            bucket(x, y + 1);
            bucket(x + 1, y + 1);
            bucket(x + 1, y - 1);
            bucket(x - 1, y + 1);
            bucket(x - 1, y - 1);
        }
    }
}
countries = {
    'Afghanistan':[38928346, 605, 237],
    'Albania':[2877797],
    'Algeria':[43851044, 445, 255],
    'Andorra':[77265],
    'Angola':[32866272, 480, 363],
    'Antigua and Barbuda':[97929],
    'Argentina':[45195774, 269, 418],
    'Armenia':[2963243, 551, 218],
    'Australia':[25499884, 785, 387, 813, 445],
    'Austria':[9006398, 475, 197],
    'Azerbaijan':[10139177, 560, 220],
    'Bahamas':[393244],
    'Bahrain':[1701575],
    'Bangladesh':[164689383, 667, 267],
    'Barbados':[287375],
    'Belarus':[9449323, 510, 176],
    'Belgium':[11589623, 449, 188],
    'Belize':[397628, 283, 476],
    'Benin':[12123200, 443, 303],
    'Bhutan':[771608, 669, 256],
    'Bolivia':[11673021, 265, 369],
    'Bosnia and Herzegovina':[3280819, 482, 208],
    'Botswana':[2351627, 498, 387],
    'Brazil':[212559417, 299, 358],
    'Brunei':[437479, 733, 318],
    'Bulgaria':[6948445, 526, 224],
    'Burkina Faso':[20903273, 433, 296],
    'Burundi':[11890784, 512, 337],
    'Cambodia':[16718965, 705, 295],
    'Cameroon':[26545863, 469, 316],
    'Canada':[37742154, 152, 157, 245, 49, 256, 120, 155, 108, 292, 195, 265, 197, 124, 97, 183, 100, 197, 96, 201, 59, 222, 87, 218, 138, 144, 83, 161, 86, 182, 84, 135, 77, 177, 69, 188, 116, ],
    'Cape Verde':[555988, 284, 477],
    'Central African Republic':[4829767, 491, 310],
    'Chad':[16425864, 484, 286],
    'Chile':[19116201, 257, 390, 249, 458],
    'China':[1439323776, 702, 239],
    'Colombia':[50882891, 247, 317],
    'Comoros':[869601, 284, 476],
    'Democratic Republic of Congo':[5518087, 495, 334],
    'Costa Rica':[5094118, 221, 304],
    'Croatia':[4105267, 478, 203],
    'Cuba':[11326616, 239, 275],
    'Cyprus':[1207359, 522, 236],
    'Czech Republic':[10708981, 475, 189],
    'Denmark':[5792202, 459, 157],
    'Djibouti':[988000],
    'Dominica':[71986],
    'Dominican Republic':[10847910, 255, 280],
    'East Timor':[1318000, 544, 200],
    'Ecuador':[17000000, 236, 331],
    'Egypt':[102000000, 512, 260],
    'El Salvador':[6000000, 544, 200],
    'Equatorial Guinea':[1400000, 462, 324],
    'Eritrea':[3500000, 535, 288],
    'Estonia':[1300000, 503, 158],
    'Eswatini':[1100000, 516, 398],
    'Ethiopia':[114900000, 537, 307],
    'Fiji':[896000, 860, 383],
    'Finland':[5500000, 504, 141],
    'France':[65200000, 443, 201, 300, 319],
    'Gabon':[2200000, 466, 332],
    'Gambia':[2400000, 398, 294],
    'Georgia':[3900000, 514, 215],
    'Germany':[83700000, 463, 184],
    'Ghana':[31000000, 433, 308],
    'Greece':[10400000, 493, 222],
    'Greenland': [56000, 329, 86],
    'Grenada':[112000, 520, 300],
    'Guatemala':[17900000, 204, 290],
    'Guinea':[13000000, 410, 302],
    'Guinea-Bissau':[1900000, 398, 298],
    'Guyana':[786000, 285, 315],
    'Haiti':[11400000, 251, 280],
    'Holy See':[801, 251, 280],
    'Honduras':[9900000, 213, 292],
    'Hungary':[9660000, 487, 199],
    'Iceland':[341000, 389, 135],
    'India':[1380000000, 636, 274],
    'Indonesia':[273500000, 697, 331, 729, 332, 793, 338, 745, 334],
    'Iran':[83900000, 576, 243],
    'Iraq':[40200000, 548, 242],
    'Ireland':[4930000, 416, 179],
    'Israel':[8650000, 526, 248],
    'Italy':[60400000, 464, 205],
    'Ivory Coast':[26380000, 421, 308],
    'Jamaica':[2960000, 238, 283],
    'Japan':[126400000, 804, 210, 791, 232],
    'Jordan':[10000000, 530, 247],
    'Kazakhstan':[18700000, 612, 193],
    'Kenya':[53700000, 536, 326],
    'Kiribati':[119000, 863, 387],
    'Kosovo':[1900000, 492, 215],
    'Kuwait':[4200000, 559, 252],
    'Kyrgyzstan':[6500000, 627, 215],
    'Laos':[7200000, 707, 273, 713, 299],
    'Latvia':[1800000, 503, 165, 494, 165],
    'Lebanon':[6800000, 529, 239],
    'Lesotho':[2100000, 508, 407],
    'Liberia':[5000000, 411, 313],
    'Libya':[6800000, 481, 258],
    'Liechtenstein':[38000, 399, 295],
    'Lithuania':[2700000, 498, 170],
    'Luxembourg':[600000, 452, 190],
    'Macedonia':[2000000, 491, 216],
    'Madagascar':[27600000, 555, 383],
    'Malawi':[19100000, 523, 363, 526, 369],
    'Malaysia':[32300000, 699, 319, 729, 322, 738, 315],
    'Maldives':[540000, 766, 327],
    'Mali':[20200000, 428, 280],
    'Malta':[440000, 501, 236],
    'Marshall Islands':[59000, 849, 355],
    'Mauritania':[4600000, 413, 278],
    'Mauritius':[1200000, 236, 265],
    'Mexico':[128900000, 179, 276, 145, 257, 138, 245],
    'Micronesia':[540000, 766, 328],
    'Moldova':[4000000, 602, 217],
    'Monaco':[39000, 456, 209],
    'Mongolia':[3200000, 699, 198],
    'Montenegro':[600000, 488, 213],
    'Morocco':[36900000, 420, 244],
    'Mozambique':[31200000, 525, 376],
    'Myanmar':[54400000, 683, 273],
    'Namibia':[2500000, 482, 386],
    'Nauru':[10800, 567, 262],
    'Nepal':[29100000, 650, 254],
    'Netherlands':[17100000, 449, 183],
    'New Zealand':[4800000, 888, 433, 871, 454],
    'Nicaragua':[6600000, 217, 296],
    'Niger':[24200000, 460, 285],
    'Nigeria':[206100000, 455, 304],
    'North Korea':[25700000, 761, 220],
    'North Macedonia':[2000000, 491, 216],
    'Norway':[5400000, 458, 148, 469, 134, 497, 114, 482, 66, 470, 66, 498, 62, 486, 115],
    'Oman':[5100000, 576, 281],
    'Pakistan':[220890000, 619, 248],
    'Palau':[18000, 567, 263],
    'Palestine':[5100000, 527, 243],
    'Panama':[4300000, 228, 308],
    'Papua New Guinea':[8900000, 806, 344],
    'Paraguay':[7100000, 282, 387],
    'Peru':[32900000, 244, 355],
    'Philippines':[109500000, 748, 286, 757, 309],
    'Poland':[37800000, 486, 183],
    'Portugal':[10100000, 415, 224],
    'Qatar':[2800000, 567, 262],
    'Republic of Congo':[92000000, 478, 328],
    'Romania':[19200000, 499, 203],
    'Russia':[145900000, 616, 107, 549, 198, 788, 196, 845, 168, 699, 86, 584, 89, 700, 68, 683, 64, 678, 57, 793, 86, 804, 189],
    'Rwanda':[12900000, 515, 334],
    'Saint Kitts and Nevis':[53000, 515, 334],
    'Saint Lucia':[183000, 265, 283],
    'Saint Vincent and the Grenadines':[110940, 265, 283],
    'Samoa':[198000, 861, 384],
    'San Marino':[33000, 861, 384],
    'Sao Tome and Principe':[219000, 283, 477],
    'Saudi Arabia':[348000000, 548, 266],
    'Senegal':[16700000, 398, 290],
    'Serbia':[8700000, 489, 209],
    'Seychelles':[98000, 501, 236],
    'Sierra Leone':[7900000, 406, 308],
    'Singapore':[5800000, 713, 338],
    'Slovakia':[5500000, 485, 193],
    'Slovenia':[2000000, 480, 204],
    'Solomon Islands':[680000, 847, 355],
    'Somalia':[15800000, 547, 323],
    'South Africa':[59300000, 497, 410],
    'South Korea':[51200000, 765, 231],
    'South Sudan':[11100000, 510, 312],
    'Spain':[46700000, 429, 218],
    'Sri Lanka':[21400000, 644, 311],
    'Sudan':[43800000, 511, 289],
    'Suriname':[580000, 292, 318],
    'Swaziland':[1160000, 518, 400],
    'Sweden':[10000000, 482, 133],
    'Switzerland':[8600000, 457, 199],
    'Syria':[17500000, 536, 235],
    'Taiwan':[23570000, 746, 268],
    'Tajikistan':[9500000, 623, 226],
    'Tanzania':[59700000, 524, 343],
    'Thailand':[69800000, 694, 288],
    'Timor Leste':[1300000],
    'Togo':[8200000, 438, 308],
    'Tonga':[105000, 836, 346],
    'Trinidad and Tobago':[1400000, 279, 304],
    'Tunisia':[11800000, 460, 240],
    'Turkey':[84300000, 530, 224],
    'Turkmenistan':[6000000, 585, 222],
    'Tuvalu':[11700, 861, 385],
    'Uganda':[45700000, 519, 326],
    'Ukraine':[43700000, 519, 190],
    'United Arab Emirates':[9890000, 576, 268],
    'United Kingdom':[67800000, 432, 181, 425, 165],
    'United States':[331000000, 180, 219, 46, 130],
    'Uruguay':[3400000, 292, 417],
    'Uzbekistan':[33400000, 600, 215],
    'Vanuatu':[307000],
    'Vatican City':[825],
    'Venezuela':[28400000, 269, 311],
    'Vietnam':[97300000, 708, 272, 714, 297],
    'Yemen':[29800000, 555, 290],
    'Zambia':[18300000, 516, 356],
    'Zimbabwe':[14800000, 512, 380],
}

document.addEventListener("keyup", async function(event) {
    if (event.keyCode === 13) {
        let guess = textbox.value.toUpperCase();
        textbox.value = "";
        let names = Object.keys(countries);
        for (let i = 0; i < names.length; i++) {
            if (names[i].toUpperCase() == guess && !alreadyPicked(guess)) {
                chosen.push(names[i].toUpperCase());
                localStorage.chosen += (guess.toUpperCase() + "-");
                count += 1;
                population += countries[names[i]][0];
                pop.innerHTML = population;
                ratio.innerHTML = count.toString() + " / 201";
                let percent = Math.round(population / totalPop * 10000) / 100
                per.innerHTML = percent.toString() + "%";
                let coords = countries[names[i]].slice(1)
                for (let j = 0; j < coords.length; j += 2) {
                    bucket(coords[j], coords[j + 1]);
                }
            }
        }
    }
});


function alreadyPicked(country) {
    for (let i = 0; i < chosen.length; i++) {
        if (country.toUpperCase() == chosen[i]) {
            return true;
        }
    }
    return false;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

