import axiosClient from "@/lib/axiosInstance"
import { useQuery } from "@tanstack/react-query"

const useGetMode = () => {
  return useQuery({
    queryKey: ["mode"],
    queryFn: async () => {
      const { data } = await axiosClient.get("/get-mode")
      return data
    },
  })
}

export default useGetMode
