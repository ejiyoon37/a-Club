import React from "react";
import scrapIcon from "../../../public/assets/icon/ScrapBtn_default.svg";

type RecruitCardProps = {
    id : number;
  title: string;
  badge: string;
  views: number;
  bookmarks: number;
  thumbnail: string;
};

const RecruitCard = ({
    id,
  title,
  badge,
  views,
  bookmarks,
  thumbnail,
}: RecruitCardProps) => {
    return (
    <div className="w-[109px] flex flex-col items-start gap-[4px] text-left">
      {/* 이미지 + 스크랩 버튼 */}
      <div className="relative w-[109px] h-[109px] rounded-[10px] overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <img
          src={scrapIcon}
          alt="스크랩"
          className="absolute top-2 right-2 w-6 h-6"
        />
      </div>

      {/* 제목 */}
      <div className="h-[38px] mb-[4px] w-full">
        <p className="text-[14px] font-medium leading-[135%] tracking-[-0.03em] text-[#3F454A] line-clamp-2 text-left">
          {title}
        </p>
      </div>

      {/* 모집 방식 뱃지 */}
      <div className="bg-[#EAF0FF] text-[#3366FF] text-[11px] font-medium tracking-[-0.02em] leading-[140%] px-[6px] py-[2px] rounded-[4px] h-[18px]">
        {badge}
      </div>

      {/* 조회/저장 수 */}
      <div className="flex gap-1 text-[12px] font-normal leading-[140%] tracking-[-0.02em] text-[#B7BFC8]">
        <span>조회 {views}</span>
        <span>|</span>
        <span>저장 {bookmarks}</span>
      </div>
    </div>
  );
};

export default RecruitCard;