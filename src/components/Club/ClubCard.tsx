import type { ClubCardProps } from "../../types/club";
import React from "react";

type Props = ClubCardProps;

function ClubCard({ name, tag, logo }: Props) {
  return (
    <div
      className="flex flex-col items-center w-[109px] px-2 py-3 bg-[#F6F7F8] rounded-[12px]"
      style={{ gap: "8px" }}
    >
      {/* 프로필 이미지 */}
      <img
        src={logo}
        alt={name}
        className="w-[72px] h-[72px] rounded-full object-cover"
      />

      {/* 뱃지 */}
      <div className="px-[6px] py-[3px] rounded-[18px] bg-[#E9EDF0] text-[10px] text-[#A4AAB1]">
        {tag}
      </div>

      {/* 동아리 이름 */}
      <p
        className="text-center text-[14px] font-medium"
        style={{
          fontFamily: "Wanted Sans",
          color: "#262931",
          lineHeight: "135%",
          letterSpacing: "-0.03em",
        }}
      >
        {name}
      </p>
    </div>
  );
}

export default ClubCard;