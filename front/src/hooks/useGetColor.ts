import axiosClient from "@/lib/axiosInstance"
import { useQuery } from "@tanstack/react-query"

const useGetColor = () => {
  return useQuery({
    queryKey: ["color"],
    queryFn: async () => {
      const { data } = await axiosClient.get("/get-color")
      return data
    },
  })
}

export default useGetColor
