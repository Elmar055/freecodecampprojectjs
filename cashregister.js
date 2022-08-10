function checkCashRegister (price, cash, cid) {
  const amount = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }
  let totalcid = 0;
  for (let element of cid) {
    totalcid += element[1];
  }
  totalcid = totalcid.toFixed(2);
  let changeAfter = cash - price;
  const changeArr = [];
  if (changeAfter > totalcid) {
    return { status: "INSUFFICIENT_FUNDS", change: changeArr };
  } else if (changeAfter.toFixed(2) === totalcid) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();
    for (let elem of cid) {
      let elem1 = [elem[0], 0];
      while (changeAfter >= amount[elem[0]] && elem[1] > 0) {
        elem1[1] += amount[elem[0]];
        elem[1] -= amount[elem[0]];
        changeAfter -= amount[elem[0]];
        changeAfter = changeAfter.toFixed(2);
      }
      if (elem1[1] > 0) {
        changeArr.push(elem1);
      }
    }
  }
  if (changeAfter > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: changeArr};
}
  
