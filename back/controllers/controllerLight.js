const asyncWrapper = require("../middleware/async")
const mqtt = require("mqtt")
const mqttClient = mqtt.connect({ host: "test.mosquitto.org", port: 1883 })

const changeMode = asyncWrapper(async (req, res) => {
  const { mode } = req.body
  console.log(mode)

  // Publish the mode to the MQTT broker
  mqttClient.publish("tv/config/mode", mode, (err) => {
    if (err) {
      console.error("Failed to publish mode", err)
      res.status(500).send("Failed to publish mode")
    } else {
      console.log("Mode published successfully")
      res.status(200).send("Mode published successfully -> " + mode)
    }
  })
})

const changePrimaryColor = asyncWrapper(async (req, res) => {
  // Extract the mode from the request body
  const { primaryColor } = req.body
  const { r, g, b } = primaryColor
  const color = `${r},${g},${b}`
  console.log(color)
  // Publish the mode to the MQTT broker
  mqttClient.publish("tv/config/primaryColor", color, (err) => {
    if (err) {
      console.error("Failed to publish mode", err)
      res.status(500).send("Failed to publish mode")
    } else {
      console.log("Mode published successfully")
      res.status(200).send("Mode published successfully -> " + color)
    }
  })
})

const changeSecondaryColor = asyncWrapper(async (req, res) => {
  // Extract the mode from the request body
  const { secondaryColor } = req.body
  const { r, g, b } = secondaryColor
  const color = `${r},${g},${b}`
  console.log(color)
  // Publish the mode to the MQTT broker
  mqttClient.publish("tv/config/secondaryColor", color, (err) => {
    if (err) {
      console.error("Failed to publish mode", err)
      res.status(500).send("Failed to publish mode")
    } else {
      console.log("Mode published successfully")
      res.status(200).send("Mode published successfully -> " + color)
    }
  })
})

const changeHueRandomness = asyncWrapper(async (req, res) => {
  const { randomness } = req.body
  console.log(randomness)

  // Publish the mode to the MQTT broker
  mqttClient.publish("tv/config/hueRandomness", randomness, (err) => {
    if (err) {
      console.error("Failed to publish mode", err)
      res.status(500).send("Failed to publish mode")
    } else {
      console.log("Mode published successfully")
      res.status(200).send("Mode published successfully -> " + randomness)
    }
  })
})

const changeMinAnimationTime = asyncWrapper(async (req, res) => {
  const { minAnimationTime } = req.body
  console.log(minAnimationTime)

  // Publish the mode to the MQTT broker
  mqttClient.publish("tv/config/minAnimationTime", minAnimationTime, (err) => {
    if (err) {
      console.error("Failed to publish mode", err)
      res.status(500).send("Failed to publish mode")
    } else {
      console.log("Mode published successfully")
      res
        .status(200)
        .send(
          "Min animation time published successfully -> " + minAnimationTime
        )
    }
  })
})

const changeMaxAnimationTime = asyncWrapper(async (req, res) => {
  const { maxAnimationTime } = req.body
  console.log(maxAnimationTime)

  // Publish the mode to the MQTT broker
  mqttClient.publish("tv/config/maxAnimationTime", maxAnimationTime, (err) => {
    if (err) {
      console.error("Failed to publish mode", err)
      res.status(500).send("Failed to publish mode")
    } else {
      console.log("Mode published successfully")
      res.status(200).send("Mode published successfully -> " + maxAnimationTime)
    }
  })
})

module.exports = {
  changeMode,
  changePrimaryColor,
  changeSecondaryColor,
  changeHueRandomness,
  changeMinAnimationTime,
  changeMaxAnimationTime,
}
