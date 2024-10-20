import { useState } from "react"
import { HexColorPicker } from "react-colorful"

const Zebra = () => {
  const [color, setColor] = useState("#121212")
  return (
    <div>
      <HexColorPicker color={color} onChange={setColor} />
    </div>
  )
}

export default Zebra
