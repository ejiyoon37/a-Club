import TopNav from "../components/common/TopNav"
import TabMenu from "../components/common/TapMenu"
import SortSelector from "../components/Recruit/SortSelector"
import RecruitCardList from "../components/Recruit/RecruitCardList"
import FilterButton from "../components/Recruit/FilterButton"

export default function RecruitAllPage() {
  return (
    <div className="w-full max-w-[375px] mx-auto bg-white min-h-screen">
      <TopNav />

      {/* 탭 메뉴 (모집공고 | 동아리 둘러보기) */}
      <TabMenu active="recruit" />

      {/* 정렬 + 필터 */}
      <div className="flex justify-between items-center px-4 pt-3 pb-2">
        <SortSelector /> {/* 정렬순 버튼  */}
         {/* 필터 버튼 */}
         <FilterButton />
      </div>

      {/* 필터 chips (선택된 경우에만 표시) <SelectedFilterChips />*/}
      

      {/* 모집 공고 카드 리스트 */}
      <RecruitCardList />
       

     
      
    </div>
  )
}