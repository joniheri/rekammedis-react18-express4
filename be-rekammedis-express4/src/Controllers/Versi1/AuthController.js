const { TbUser } = require("../../../models");
const { v4: uuidv4 } = require("uuid");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.authTest = (req, res) => {
  return res.send({
    response: "success",
    message: "Response SUCCESS",
  });
};

exports.registerAuth = async (req, res) => {
  const { body } = req;

  // Validate Input
  const validator = joi.object({
    email: joi.string().required().min(5),
    username: joi.string().required().min(5),
    password: joi.string().required().min(5),
    fullname: joi.string().required().min(5),
    noKtp: joi.string().required().min(16),
    level: joi.string().required().min(4),
  });
  const { error } = validator.validate(body);
  if (error) {
    return res.status(422).send({
      response: "fail",
      message: `${error.details[0].message}`,
      data: body,
    });
  }
  // End Validate Input

  // Cek Email must unique
  const cekDuplicateEmail = await TbUser.findOne({
    where: {
      email: body.email,
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  if (cekDuplicateEmail) {
    return res.status(400).send({
      response: "fail",
      message: `Email ${body.email} already exist`,
      // data: cekDuplicateEmail,
    });
  }
  // End Cek Email must unique

  // Insert to database
  const hashLength = 10;
  const hashPassword = await bcrypt.hash(body.email, hashLength);
  const processInputData = await TbUser.create({
    id: uuidv4(),
    email: body.email,
    username: body.username,
    password: hashPassword,
    fullname: body.fullname,
    noKtp: body.noKtp,
    level: body.level,
  });
  if (!processInputData) {
    return res.status(422).send({
      response: "fail",
      message: `Input data FAIL`,
    });
  }
  // End Insert to database

  return res.send({
    response: "success",
    message: "Register SUCCESS",
    dataInput: body,
  });
};
