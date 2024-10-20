import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import useChangeColor from "@/hooks/useChangeColor"
import useChangeMode from "@/hooks/useChangeMode"
import { useState } from "react"
import { RgbColorPicker } from "react-colorful"

const HomePage = () => {
  const [primaryColor, setPrimaryColor] = useState({ r: 255, g: 0, b: 0 })
  const [secondColor, setSecondColor] = useState({ r: 255, g: 0, b: 0 })

  const changeColor = useChangeColor()
  const changeMode = useChangeMode()

  const handlePrimary = (primaryColor: { r: number; g: number; b: number }) => {
    setPrimaryColor(primaryColor)
    changeColor.mutate(primaryColor)
    console.log(primaryColor)
  }

  const handleSecond = (secondColor: { r: number; g: number; b: number }) => {
    setSecondColor(secondColor)
    changeColor.mutate(secondColor)
    console.log(secondColor)
  }

  const handleMode = (mode: string) => {
    changeMode.mutate(mode)
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-10 items-center ">
        <div>
          <Select onValueChange={handleMode}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Static</SelectItem>
              <SelectItem value="2">Twinkle primary/secondary</SelectItem>
              <SelectItem value="3">twinkle hue</SelectItem>
            </SelectContent>
          </Select>

          {/* <h3>Hue randomness</h3> */}
        </div>
        <Slider
          defaultValue={[33]}
          min={1}
          max={255}
          step={1}
          className="max-w-[220px]"
        />
      </div>

      <div className="flex gap-10">
        <div>
          <RgbColorPicker color={primaryColor} onChange={handlePrimary} />
          <div className="my-5 flex flex-col gap-3">
            <span>min animation time</span>
            <Slider defaultValue={[33]} min={0} max={1023} step={1} />
          </div>
        </div>
        <div>
          <RgbColorPicker color={secondColor} onChange={handleSecond} />
          <div className="my-5 flex flex-col gap-3">
            <span>max animation time</span>
            <Slider defaultValue={[33]} min={0} max={1023} step={1} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
