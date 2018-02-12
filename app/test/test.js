/* sample testing using Mocha */
/* we will validate server response with chai */
// @ts-check

const chai = require('chai');
const chai_http = require('chai-http');
const expect = chai.expect;
const should = chai.should();

chai.use(chai_http);

/* lets test login */
it('should return 200', (done) => {
  chai.request('http://localhost:3000')
    .post('/mongo/login')
    .send({username: 'saiganesh', password: 'saiganesh'})
    .end(( err, res ) => {
      should.equal(err, null);
      res.should.be.a('object');
      res.body.should.have.property('status').eql(true);
      res.body.should.have.property('token');
      done();
    })
});
