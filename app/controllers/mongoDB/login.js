const { usersModel } = require('../../schema/auth/users');
const bcrypter = require('../../utils/bcrypter');
const handler = require('../../utils/responseHandler');
const tokenHandler = require('../../utils/tokenHelper');

exports.login = async (req, res) => {
  const { username, password } = { ...req.body };
  /* first check user exists or not , if exists check password */
  const userData = await usersModel.findOne({ username });
  if (!userData) return handler.errorMessage(res, 'lol, wtf');
  /* now check password */
  const isPasswordValid = await bcrypter.checkPassword(password, userData.password);
  /* send error message if password doesn't match */
  if (!isPasswordValid) return handler.errorMessage(res, 'lol, wtf');
  /* create token wit some data, do not put password in it */
  const token = await tokenHandler.createToken({ data: userData._id });
  handler.yahResponse(res, token);
};
