let todoList = [
  {
    id: 1001,
    title: "Belajar Node JS",
    isDone: false,
  },
  {
    id: 1002,
    title: "Belajar Express",
    isDone: false,
  },
  {
    id: 1003,
    title: "Belajar React JS",
    isDone: false,
  },
  {
    id: 1004,
    title: "Belajar HTML",
    isDone: false,
  },
];

exports.getTodos = (req, res) => {
  return res.send({
    response: "success",
    message: "Get datas SUCCESS",
    data: todoList,
  });
};

exports.getTodoById = (req, res) => {
  const idParam = req.params.id;
  if (!idParam) {
    return res.status(400).send({
      response: "fail",
      message: "Get data FAIL",
    });
  }

  const dataById = todoList.find((item) => item.id == idParam);

  if (!dataById) {
    return res.status(400).send({
      response: "fail",
      message: `Data with ID: ${idParam} NOT FOUND`,
      data: dataById,
    });
  }
  return res.send({
    response: "success",
    message: "Get data SUCCESS",
    data: dataById,
  });
};
