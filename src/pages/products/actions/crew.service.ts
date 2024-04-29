import axiosInstance from "core/configs/axios.config";
import { API } from "core/configs/api.config";
import { Crew } from "../crew";

export const getCrewService = () => {
  return axiosInstance.get(API.products).then((res) => {
    return res.data.record as Crew[];
  });
};
