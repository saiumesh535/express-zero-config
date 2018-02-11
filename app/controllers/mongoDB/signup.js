const userSchema = require('../../schema/auth/users');
const handler = require('../../utils/responseHandler');
const bcrypter = require('../../utils/bcrypter');

exports.signup = async (req, res) => {
  const { username } = { ...req.body };
  /* has the password and store it in DB instead plain password */
  const password = await bcrypter.encryptPassword(req.body.password);
  const data = await userSchema.usersModel.create({ username, password }).catch(error => error);
  if (data.code === 11000) return handler.errorMessage(res, 'user already exists');
  res.json(data);
};
