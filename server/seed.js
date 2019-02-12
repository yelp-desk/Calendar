const connection = require('./dbConnect.js');

// SEED DATA INTO CAPACITY
for (let i = 1; i <= 100; i++) {
  let capacity = Math.floor(Math.random() * 7) + 6;
  connection.query(`INSERT INTO restaurants (capacity) VALUES (${capacity})`);
}

// SEED DATA INTO AVAILABILITIES
var fakeTimeGen = function () {
  let option = Math.floor(Math.random() * 2);

  if (option) {
    // generate standard opening-close times
    let openingHour = Math.floor(Math.random() * 4) + 8;
    let openingMinute = 3 * Math.floor(Math.random() * 2);
    let openingTime = `${openingHour}:${openingMinute}0:00`;

    let closingHour = Math.floor(Math.random() * 4) + 19;
    let closingMinute = 3 * Math.floor(Math.random() * 2);
    let closingTime = `${closingHour}:${closingMinute}0:00`;
    return [{open: openingTime, close: closingTime}];
  }

  // generate times that close mid-day and re-open at night
  let array = [];
  let openingHour = Math.floor(Math.random() * 4) + 8;
  let openingMinute = 3 * Math.floor(Math.random() * 2);
  let openingTime = `${openingHour}:${openingMinute}0:00`;

  let closingHour = Math.floor(Math.random() * 3) + 13;
  let closingMinute = 3 * Math.floor(Math.random() * 2);
  let closingTime = `${closingHour}:${closingMinute}0:00`;

  array.push({open: openingTime, close: closingTime});

  openingHour = Math.floor(Math.random() * 4) + 15;
  openingMinute = 3 * Math.floor(Math.random() * 2);
  openingTime = `${openingHour}:${openingMinute}0:00`;

  closingHour = Math.floor(Math.random() * 3) + 19;
  closingMinute = 3 * Math.floor(Math.random() * 2);
  closingTime = `${closingHour}:${closingMinute}0:00`;
  
  array.push({open: openingTime, close: closingTime});
  return array;
}

for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 7; j++) {
    fakeTimeGen().forEach(availability => {
      let queryString = `INSERT INTO availabilities (open_time, close_time, day_of_week, rest_id) VALUES ('${availability.open}', '${availability.close}', ${j}, ${i})`;
      connection.query(queryString);
    })
  }
}

connection.end();