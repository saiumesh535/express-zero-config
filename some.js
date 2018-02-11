let winston = require('winston');

winston.add(winston.transports.File, { filename: 'app.out.log', level: 'error' });

let options = {
  from: new Date('2018-02-01'),
  until: new Date(),
  limit: 10,
  level: 'error',
  order: 'desc',
};

winston.query(options, (err, results) => {
  if (err) {
      throw err;
  } else {
      console.log(results);
  }
});
