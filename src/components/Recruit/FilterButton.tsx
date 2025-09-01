// src/components/recruit/FilterButton.tsx

import React from "react";
import { useNavigate } from "react-router-dom";

export default function FilterButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/recruit/filter"); // 필터 페이지로 이동
  };

  return (
    <button
      onClick={handleClick}
      className="text-[#6B7684] text-sm font-medium px-[12px] py-[6px] border border-[#D1D6DB] rounded-[6px]"
    >
      필터
    </button>
  );
}