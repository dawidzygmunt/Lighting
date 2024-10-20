const express = require("express")
const router = express.Router()

const {
  changeMode,
  changePrimaryColor,
  changeSecondaryColor,
  changeHueRandomness,
  changeMinAnimationTime,
  changeMaxAnimationTime,
} = require("../controllers/controllerLight")

router.route("/change-mode").post(changeMode)
router.route("/change-hue-randomness").post(changeHueRandomness)
router.route("/change-min-animation-time").post(changeMinAnimationTime)
router.route("/change-max-animation-time").post(changeMaxAnimationTime)
router.route("/change-primary-color").post(changePrimaryColor)
router.route("/change-secondary-color").post(changeSecondaryColor)

module.exports = router
