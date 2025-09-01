import React from "react";

interface ExploreCardProps {
  clubName: string;
  clubType: "중앙동아리" | "소학회";
  clubImage: string;
}

const ExploreCard = ({ clubName, clubType, clubImage }: ExploreCardProps) => {
  return (
    <div className="w-[120px] h-[156px] flex flex-col items-center gap-[8px] px-[8px] pt-[12px] pb-[16px] bg-[#F6F7F8] rounded-[16px]">
      {/* 원형 프로필 이미지 */}
      <div className="w-[80px] h-[80px] rounded-full border-[1.12px] border-[#E9EDF0] overflow-hidden">
        <img
          src={clubImage}
          alt={clubName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 텍스트 영역 */}
      <div className="flex flex-col items-center gap-[4px]">
        {/* 동아리 분류 칩 */}
        <div className="px-[8px] py-[2px] rounded-full bg-[#F0F3F5]">
          <span className="text-[10px] font-medium leading-[14px] tracking-[-0.03em] text-[#808A96]">
            {clubType}
          </span>
        </div>

        {/* 동아리명 */}
        <p className="w-full text-center text-[14px] font-medium leading-[135%] tracking-[-0.03em] text-[#262931]">
          {clubName}
        </p>
      </div>
    </div>
  );
};

export default ExploreCard;