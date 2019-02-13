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
    let open = Math.floor(Math.random() * 4) + 8;
    let close = Math.floor(Math.random() * 4) + 19;
    return [{open: open, close: close}];
  }

  // generate times that close mid-day and re-open at night
  let array = [];

  let open = Math.floor(Math.random() * 4) + 8;
  let close = Math.floor(Math.random() * 3) + 13;
  array.push({open: open, close: close});

  openingHour = Math.floor(Math.random() * 4) + 15;
  closingHour = Math.floor(Math.random() * 3) + 19;
  array.push({open: open, close: close});
  
  return array;
}

for (let i = 1; i <= 100; i++) {
  for (let j = 0; j < 7; j++) {
    fakeTimeGen().forEach(availability => {
      let queryString = `INSERT INTO availabilities (open_time, close_time, day_of_week, rest_id) VALUES ('${availability.open}', '${availability.close}', ${j}, ${i})`;
      connection.query(queryString);
    })
  }
}

connection.end();