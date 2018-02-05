var winston = require('winston');

winston.add(winston.transports.File, { filename: 'app.out.log', level: 'error' });

var options = {
    from : new Date('2018-02-01'),
    until : new Date,
    limit: 10,
    level: 'error',
    order: 'desc'
}

winston.query(options, function(err, results) {
    if (err) {
      throw err;
  } else {
      console.log(results)
  }
});