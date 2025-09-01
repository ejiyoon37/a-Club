import searchIcon from "/assets/icon/icn_search_24.svg";

interface SearchBarProps {
  onClick?: () => void;
}

function SearchBar({ onClick }: SearchBarProps) {
  return (
    <div
      onClick={onClick}
      className="w-full h-[48px] bg-[#F5F6F8] rounded-[10px] flex items-center px-4 cursor-pointer"
    >
      <img src={searchIcon} alt="검색 아이콘" className="w-4 h-4 mr-2" />
      <span className="text-[#C1C6CD] text-sm">동아리를 검색해 보세요!</span>
    </div>
  );
}

export default SearchBar;