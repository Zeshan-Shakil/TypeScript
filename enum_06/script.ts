enum Months {
  january = 'january',
  febrary = 'febrary',
  march = 'march',
  april = 'april',
  may = 'may',
  june = 'june',
  july = 'july',
  august = 'august',
  september = 'september',
  october = 'october',
  november = 'november',
  december = 'december',
}
let whichMonth: Months = Months.august;
console.log(whichMonth);

let newMonth = (month: Months) => {
  return month;
};
console.log(newMonth(whichMonth));

// enam ak type k object hi hoga jasy humny js file m object bnaya h wo wala enam m bd m values di hoi hn agr keys ko values na dyn to unki default values ink index numbers hongy