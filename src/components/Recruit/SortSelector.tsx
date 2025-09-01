import React, { useState } from "react";
import SortBottomSheet from "./SortBottomSheet";

export default function SortSelector() {
  const [selectedOption, setSelectedOption] = useState("최근 게시순");
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleOpenSheet = () => {
    setIsBottomSheetOpen(true);
  };
//상태갱신
  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setIsBottomSheetOpen(false);
    
  };

  return (
    <>
      <button
        onClick={handleOpenSheet}
        className="text-[#6B7684] text-sm font-medium px-[12px] py-[6px] border border-[#D1D6DB] rounded-[6px]"
      >
        {selectedOption}
      </button>

      {isBottomSheetOpen && (
        <SortBottomSheet
          selected={selectedOption}
          onSelect={handleSelectOption}
          onClose={() => setIsBottomSheetOpen(false)}
        />
      )}
    </>
  );
}