const words = {
"1":    "one",
"2":    "two",
"3":    "three",
"4":    "four",
"5":    "five",
"6":    "six",
"7":    "seven",
"8":    "eight",
"9":    "nine",
"10":	"ten",
"11":	"eleven",
"12":	"twelve",
"13":	"thirteen",
"14":	"fourteen",
"15":	"fifteen",
"16":	"sixteen",
"17":	"seventeen",
"18":	"eighteen",
"19":	"nineteen",
"20":	"twenty",
"21":	"twenty one",
"22":	"twenty two",
"23":	"twenty three",
"24":	"twenty four",
"25":	"twenty five",
"26":	"twenty six",
"27":	"twenty seven",
"28":	"twenty eight",
"29":	"twenty nine",
"30":	"thirty",
"31":	"thirty one",
"32":	"thirty two",
"33":	"thirty three",
"34":	"thirty four",
"35":	"thirty five",
"36":	"thirty six",
"37":	"thirty seven",
"38":	"thirty eight",
"39":	"thirty nine",
"40":	"forty",
"41":	"forty one",
"42":	"forty two",
"43":	"forty three",
"44":	"forty four",
"45":	"forty five",
"46":	"forty six",
"47":	"forty seven",
"48":	"forty eight",
"49":	"forty nine",
"50":	"fifty",
"51":	"fifty one",
"52":	"fifty two",
"53":	"fifty three",
"54":	"fifty four",
"55":	"fifty five",
"56":	"fifty six",
"57":	"fifty seven",
"58":	"fifty eight",
"59":	"fifty nine",
};

// Complete the words function below.
function timeInWords(h, m) {
    h = parseInt(h);
    m = parseInt(m);
    var postStr = '';
    if (m === 0) {
        postStr = words[h] + ' o\' clock';
        return postStr;
    } else if (m >= 1 && m <= 30) {
        if (m === 1) {
            postStr = words[m] + ' minute past ';
        } else if (m === 15) {
            postStr = 'quarter past ';
        } else if (m === 30) {
            postStr = 'half past ';
        } else {
            postStr = words[m] + ' minutes past ';
        }
        return postStr + words[h];
    } else if (m > 30) {
        h = h + 1;
        let rem = 60 - m;
        if (rem === 1) {
            postStr = words[rem] + ' minute to ';
        } else if (m === 45) {
            postStr = 'quarter to ';
        } else if (m === 30) {
            postStr = 'half to ';
        } else {
            postStr = words[rem] + ' minutes to ';
        }
        return postStr + words[h];
    }
}

