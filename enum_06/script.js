var Months;
(function (Months) {
    Months["january"] = "january";
    Months["febrary"] = "febrary";
    Months["march"] = "march";
    Months["april"] = "april";
    Months["may"] = "may";
    Months["june"] = "june";
    Months["july"] = "july";
    Months["august"] = "august";
    Months["september"] = "september";
    Months["october"] = "october";
    Months["november"] = "november";
    Months["december"] = "december";
})(Months || (Months = {}));
var whichMonth = Months.august;
console.log(whichMonth);
var newMonth = function (month) {
    return month;
};
console.log(newMonth(whichMonth));
// enam ak type k object hi hoga jasy humny js file m object bnaya h wo wala enam m bd m values di hoi hn agr keys ko values na dyn to unki default values ink index numbers hongy
