import React from "react";
import TopNav from "../../components/common/TopNav";
import { SearchInput } from "../../components/Search/SearchInput";
import ClubCard from "../../components/Club/ClubCard";
import catImage from "/assets/clubPic/cat.png"

export default function SearchResultPage() {
  // 임시 하드코딩 검색 결과 (나중에 API 결과로 대체 예정)
  const results = //[];
  [{
      name: "미유미유",
      tag: "중앙동아리",
      logo: catImage,

    },]

  return (
    <div className="flex flex-col items-center bg-white min-h-screen w-full">
      <div className="w-full max-w-[375px]">
        {/* TopNav */}
        <TopNav/>

        {/* SearchInput */}
        <div className="flex justify-center mt-[26px] px-4">
          <SearchInput />
        </div>

        <br />

        {/* Search Result Section */}
        <div className="mt-6 px-4">
          {results.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-3 gap-y-4 pl-[14px]">
              {results.map((club, index) => (
                <ClubCard
                  key={index}
                  name={club.name}
                  tag={club.tag}
                  logo={club.logo}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center text-center min-h-[60vh] leading-none space-y-[4px]">
              <p
                className="text-[18px] font-semibold text-[#5A6167]"
                style={{
                  fontFamily: "Wanted Sans",
                  lineHeight: "135%",
                  letterSpacing: "-0.03em",
                }}
              >
                검색 결과가 없어요...
              </p>
              <p
                className="text-[16px] font-medium text-[#A0AAB0]"
                style={{
                  fontFamily: "Wanted Sans",
                  lineHeight: "135%",
                  letterSpacing: "-0.03em",
                }}
              >
                다른 검색어로 검색해 보세요!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}