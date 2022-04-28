// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]


const superbowlWin = (record) => {
    const result = record.find((record) => record.result === "W");
    return result ? result.year : undefined;
}

/*const superbowlWin = (record) => {
    record.find((record) => {
    (record.result === "W") ? record.year : undefined;
    })
}*/

//i needed a variable to return