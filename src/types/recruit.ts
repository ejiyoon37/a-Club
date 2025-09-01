// src/types/recruit.ts
export type RecruitCardProps = {
  id: number;
  title: string;
  badge: string;
  views: number;
  bookmarks: number;
  thumbnail: string;
};

export type Recruitment = {
  recruitment_id: number;
  club_id: number;
  club_name: string;
  recruitment_title: string;
  recruitment_type: string;
  recruitment_start_date: string | null;
  recruitment_end_date: string | null;
  recruitment_description: string;
  main_image: string;
};

