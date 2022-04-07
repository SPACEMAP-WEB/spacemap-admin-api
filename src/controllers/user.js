const UserService = require("../services/user");

exports.createModel = async function (req, res, next) {
  // const {       
  //   id,
  //   user_type,
  //   password,
  //   firstname,
  //   lastname,
  //   affiliation,
  //   username,
  //   email
  // } = req.body
  let model = await UserService.create( req.body
    // id,
    // user_type,
    // password,
    // firstname,
    // lastname,
    // affiliation,
    // username,
    // email
  );
  return {
    data: model,
    message: "Succesfully Model Created",
  };
};
exports.readModels = async function (req, res, next) {
  let models = await UserService.read();  
  return {
    data: models,
    message: "Succesfully Models Retrieved",
  };
};

exports.readModel = async function (req, res, next) {
  console.log(req.params.id);
  let model = await UserService.readByID(req.params.id);
  return {
    data: model,
    message: "Succesfully Model Retrieved",
  };
};

exports.updateModel = async function (req, res, next) {
  let model = await UserService.update(req.params.id, req.body);
  return {
    data: model,
    message: "Succesfully Model Updated",
  };
};

exports.deleteModel = async function (req, res, next) {
  await UserService.delete(req.params.id);
  return {
    message: "Succesfully Model Deleted",
  };
};
