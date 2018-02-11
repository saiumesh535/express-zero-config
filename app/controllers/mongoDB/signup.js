const { usersModel } = require('../../schema/auth/users');
const handler = require('../../utils/responseHandler');
const bcrypter = require('../../utils/bcrypter');

exports.signup = async (req, res) => {
  const { username } = { ...req.body };
  /* first check user exists */
  const isUserExists = await usersModel.findOne({ username });
  if (isUserExists) return handler.errorMessage(res, 'user already exists');
  /* has the password and store it in DB instead plain password */
  const password = await bcrypter.encryptPassword(req.body.password);
  const data = await usersModel.create({ username, password });
  res.json(data);
};
