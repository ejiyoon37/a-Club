// src/components/Search/TopNav_S.tsx

import { useNavigate } from "react-router-dom";
import arrowLeftIcon from "/assets/icon/ic_arrow_left_24.svg";

export default function TopNav_S() {
  const navigate = useNavigate();

   return (
    <header className="w-[375px] h-[48px] bg-white border-b border-[#E9EDF0] relative flex items-center">
      {/* 뒤로가기 버튼 (터치 영역만, 배경 및 테두리 없음) */}
      <button
        onClick={() => navigate(-1)}
        className="w-[48px] h-[48px] flex items-center justify-center absolute left-0 top-0 bg-transparent border-none"
        aria-label="뒤로가기"
      >
        <img src={arrowLeftIcon} alt="뒤로가기" className="w-6 h-6" />
      </button>

      {/* 중앙 텍스트 */}
      <div className="w-full text-center">
        <h1 className="text-[16px] font-semibold text-[#5A6167] leading-[135%] tracking-[-0.03em]">
          동아리 검색
        </h1>
      </div>
    </header>
  );
}