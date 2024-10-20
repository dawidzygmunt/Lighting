import axiosClient from "@/lib/axiosInstance"
import { useMutation } from "@tanstack/react-query"

const useChangeMode = () => {
  return useMutation({
    mutationFn: async (mode: string) => {
      const { data } = await axiosClient.post("/change-mode", { mode })
      return data
    },
  })
}

export default useChangeMode
