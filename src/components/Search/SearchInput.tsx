import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "/assets/icon/icn_search_24.svg";

export const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      navigate("/search/result");//api 적용이전 임시사항
      //navigate(`/search/result?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div
      className={`flex items-center w-[343px] h-[48px] px-[10px] py-[8px] gap-[4px]
        border-[2px] rounded-[8px] bg-[#F6F7F8]
        ${isFocused || isHovered ? "border-[#3168FF]" : "border-transparent"}`}
      style={{ boxSizing: "border-box" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={searchIcon} alt="검색 아이콘" className="w-6 h-6" />
      <input
        type="text"
        placeholder="동아리를 검색해 보세요!"
        className="flex-1 bg-transparent outline-none border-none text-[16px] font-medium 
                   placeholder:text-[#B7BFC8] text-gray-800"
        style={{
          fontFamily: "Wanted Sans",
          lineHeight: "135%",
          letterSpacing: "-0.03em",
        }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};