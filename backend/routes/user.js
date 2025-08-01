const router = require("express").Router();
const userController = require("../controller/userController");

router.post("/login", userController.userLogin);
router.post("/register", userController.userRegister);
router.get("/getall", userController.getAllUsers);
router.get("/getbyemail/:email", userController.getUserByEmail);
router.put("/update/:Id", userController.updateUser);

module.exports = router;