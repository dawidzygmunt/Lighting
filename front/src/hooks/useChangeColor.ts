import axiosClient from "@/lib/axiosInstance"
import { useMutation } from "@tanstack/react-query"

const useChangeColor = () => {
  return useMutation({
    mutationFn: async (primaryColor: { r: number; g: number; b: number }) => {
      const { data } = await axiosClient.post("/change-color", {
        primaryColor: primaryColor,
      })
      return data
    },
  })
}

export default useChangeColor
