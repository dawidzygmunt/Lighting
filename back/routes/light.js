const express = require("express")
const router = express.Router()

const { changeMode, changeColor } = require("../controllers/controllerLight")

router.route("/change-mode").patch(changeMode)
router.route("/change-color").patch(changeColor)

module.exports = router
