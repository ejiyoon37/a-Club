// src/pages/HomePage/ExploreClubsSection.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import ExploreCard from "../../components/ExploreCard";
import moreIcon from "../../../public/assets/icon/All.svg";
// 임시 이미지
import logo1 from "../../../public/assets/clubPic/clubLogo1.png";
import arrow from "../../../public/assets/icon/ic-arrow-right-16.svg";

const ExploreClubsSection = () => {
  const exploreData = [
    { clubName: "동아리명", clubType: "중앙동아리", clubImage: logo1 },
    { clubName: "필름", clubType: "소학회", clubImage: logo1 },
    { clubName: "동아리명", clubType: "중앙동아리", clubImage: logo1 },
    { clubName: "동아리명", clubType: "소학회", clubImage: logo1 },
    { clubName: "동아리명", clubType: "소학회", clubImage: logo1 },
    { clubName: "동아리명", clubType: "소학회", clubImage: logo1 },
  ];

  const navigate = useNavigate();

  return (
    <section className="w-[343px] mx-auto space-y-3 mb-[40px]">
      {/* 제목 영역 */}
      <div className="flex justify-between items-center px-1">
        <h2 className="text-[18px] font-semibold text-[#262931]">동아리 둘러보기</h2>
        <button
        className="flex items-center justify-center h-[36px] px-2 bg-transparent border-none"
        onClick={() => navigate("/club/all")}
        >
        <span
            className="text-[14px] font-medium text-[#B7BFC8]"
            style={{
            fontFamily: "Wanted Sans",
            lineHeight: "135%",
            letterSpacing: "-0.03em",
            }}
        >
            전체보기
        </span>
        <img
            src={arrow}
            alt="arrow"
            className="w-4 h-4 ml-1"
        />
        </button>
      </div>

      {/* 카드 리스트 */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide px-1">
        {exploreData.map((club, idx) => (
          <ExploreCard
            key={idx}
            clubName={club.clubName}
            clubType={club.clubType as "중앙동아리" | "소학회"}
            clubImage={club.clubImage}
          />
        ))}
      </div>
    </section>
  );
};

export default ExploreClubsSection;