const { User } = require("../../schemas/user");


async function login(req, res) {
  try {
    const  { nickName }  = req.body;
    console.log("nickName",nickName)

    const user = await User.findOne({ nickName });
    console.log(user)

    if(user){
      res.status(409).json({ message: "nickName must be unique" });
      return;
    }
    const newUser = await User.create({
      nickName: nickName,
    });

      return res.status(200).json({
      status: "success",
      code: 200,
      newUser,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = login;