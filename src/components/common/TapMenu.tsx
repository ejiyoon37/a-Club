// src/components/common/TabMenu.tsx
import { useNavigate } from "react-router-dom";

type TabMenuProps = {
  active: "recruit" | "explore";
};

export default function TabMenu({ active }: TabMenuProps) {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 pt-[18px] flex gap-4 border-b border-[#E5E8EB]">
      {/* 모집공고 */}
      <button
        className={`h-[22px] text-[16px] font-semibold leading-[135%] tracking-[-0.03em] ${
          active === "recruit"
            ? "text-[#262931] border-b-[2px] border-[#262931]"
            : "text-[#B7BFC8]"
        }`}
        onClick={() => navigate("/recruit/all")}
      >
        모집 공고
      </button>

      {/* 동아리 둘러보기 */}
      <button
        className={`h-[22px] text-[16px] font-semibold leading-[135%] tracking-[-0.03em] ${
          active === "explore"
            ? "text-[#262931] border-b-[2px] border-[#262931]"
            : "text-[#B7BFC8]"
        }`}
        onClick={() => navigate("/club/all")}
      >
        동아리 둘러보기
      </button>
    </div>
  );
}