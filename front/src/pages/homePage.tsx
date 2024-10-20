import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import ZebraCanvas from "@/components/zebra"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-10 items-center ">
        <div className="">
          <Select>
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
          <ZebraCanvas />
          <Slider
            defaultValue={[33]}
            min={1}
            max={255}
            step={1}
            className="my-5"
          />
        </div>
        <div>
          <ZebraCanvas />
          <Slider
            defaultValue={[33]}
            min={1}
            max={255}
            step={1}
            className="my-5"
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
