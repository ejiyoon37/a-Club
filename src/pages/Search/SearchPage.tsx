// src/pages/SearchPage.tsx
import React from "react";
import TopNav_S from "../../components/Search/TopNav_S";
import { SearchInput } from "../../components/Search/SearchInput";

export default function SearchPage() {
  const handleBlurOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const activeElement = document.activeElement as HTMLElement;

    // input 영역 외 여백 클릭 시 blur 처리
    if (activeElement?.tagName === "INPUT" && !target.closest("input")) {
      activeElement.blur();
    }
  };

  return (
    <div
      className="flex flex-col items-center bg-white min-h-screen w-full"
      onClick={handleBlurOnClick}
    >
      <div className="w-full max-w-[375px]">
        {/* Top Navigation Bar */}
        <TopNav_S />

        {/* Search Input */}
        <div className="flex justify-center mt-[26px]">
          <SearchInput />
        </div>
      </div>
    </div>
  );
}