const { TbUser } = require("../../../models");

exports.getUsers = async (req, res) => {
  try {
    const datas = await TbUser.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (datas == null || datas.length <= 0) {
      return res.send({
        response: "fail",
        message: "Data NOT FOUND or EMPTY",
      });
    }

    return res.send({
      response: "success",
      message: "Get datas SUCCESS",
      data: datas,
    });
  } catch (error) {
    return res.send({
      response: "fail",
      message: error,
    });
  }
};

exports.getUserById = async (req, res) => {
  const idParam = req.params.id;

  try {
    const dataById = await TbUser.findOne({
      where: { id: idParam },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (dataById === null || dataById.length <= 0) {
      return res.status(400).send({
        response: "fail",
        message: `Data with ID: ${idParam} NOT FOUND`,
      });
    }

    return res.send({
      response: "success",
      message: "Get data SUCCESS",
      data: dataById,
    });
  } catch (error) {
    return res.status(400).send({
      response: "fail",
      message: error,
    });
  }
};
