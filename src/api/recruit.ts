// src/api/recruit.ts
import axios from "axios";
import type { Recruitment } from "../types/recruit";

export const fetchHomeRecruitments = async (): Promise<Recruitment[]> => {
  const res = await axios.get("/api/home/updatedrecruitment");
  return res.data;
};