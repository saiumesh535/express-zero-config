/* we will be centralizing all the responses at one place */

module.exports = {
  /* for all the positive response */
  yahResponse: async (res, data) => {
    res.status(200).json({ status: true, data });
  },
  /* when something goes wrong */
  nahResoonse: async (res, error, code) => {
    res.status(500).json({ status: false, code });
  },
  /* when we want send manual error messages */
  errorMessage: async (res, message) => {
    res.status(200).json({ status: false, message });
  },
};

