import { useQuery } from "react-query";
import { getCrewService } from "./crew.service";
import { Crew } from "../crew";

export const useCrew = (CrewId?: string) => {
  return useQuery<Crew[], Error>("Crew", () => {
    return getCrewService();
  });
};
