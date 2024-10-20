const asyncWrapper = require("../middleware/async")
const mqtt = require("mqtt")
const mqttClient = mqtt.connect({ host: "test.mosquitto.org", port: 1883 })

const changeMode = asyncWrapper(async (req, res) => {
  // Extract the mode from the request body
  const { mode } = req.body
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

const changeColor = asyncWrapper(async (req, res) => {
  // Extract the mode from the request body
  const { color } = req.body
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

module.exports = { changeMode, changeColor }
