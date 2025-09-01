import { useNavigate } from "react-router-dom";
import logo from "/assets/a_club_logo.png"
import userIcon from "/assets/icon/mypage.png";
import searchIcon from "/assets/icon/icon_search_bold_24.svg";


function TopNav() {
  const navigate = useNavigate();

  return (
    <header className="w-full max-w-[343px] h-[48px] flex items-center justify-between px-4 bg-white mx-auto">
      {/* 로고 영역 (좌측 여백 포함) */}
      <div
        className="w-[114px] h-[40px] flex items-center justify-start cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="a Club 로고" className="w-[98px] h-[24px] ml-1" />
      </div>

      {/* 우측 아이콘 영역 (검색 + 마이페이지) */}
      <div className="flex items-center gap-3">
        {/* 검색 아이콘 (터치 영역 40x40) */}
        <div
          className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer"
          onClick={() => navigate("/search")}
        >
          <img src={searchIcon} alt="검색" className="w-[20px] h-[20px]" />
        </div>

        {/* 마이페이지 아이콘 (터치 영역 40x40) */}
        <div
          className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer"
          onClick={() => navigate("/mypage")}
        >
          <img src={userIcon} alt="마이페이지" className="w-[24px] h-[24px]" />
        </div>
      </div>
    </header>
  );
}

export default TopNav;