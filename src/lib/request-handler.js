const wrapper = (handler) => async (req, res, next) => {
  try {
    const {
      status = 200,
      success = true,
      message = 'Request success.',
      data = {},
    } = await handler(req, res, next);

    res.status(status).json({
      success,
      message,
      data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = wrapper;
