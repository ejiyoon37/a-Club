// // src/pages/Homepage/RecruitingSection.tsx

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import type { Recruitment } from "../../types/recruit";
// import RecruitCard from "../../components/Recruit/RecruitCard";
// import img1 from "../../../public/assets/clubPic/AKO.jpg";
// import moreIcon from "../../../public/assets/icon/All.svg";

// function RecruitingSection() {
//   const [recruitList, setRecruitList] = useState<Recruitment[]>([]);
//   const navigate = useNavigate();

//   // 임시 데이터
//   useEffect(() => {
//     const mockData: Recruitment[] = [
//       {
//         recruitment_id: 1,
//         club_id: 101,
//         club_name: "SWeat",
//         recruitment_title: "💙 24-2 SWeat 신입 부원 모집 💙",
//         recruitment_type: "수시모집",
//         recruitment_phone_number: "",
//         recruitment_email: "",
//         recruitment_start_date: "",
//         recruitment_end_date: "",
//         recruitment_description: "",
//         application_url: null,
//         created_at: "",
//         updated_at: "",
//         recruitment_image_url: img1,
//       },
//       {
//         recruitment_id: 2,
//         club_id: 102,
//         club_name: "미유미유",
//         recruitment_title: "🐱 미유미유 집사단 모집",
//         recruitment_type: "상시모집",
//         recruitment_phone_number: "",
//         recruitment_email: "",
//         recruitment_start_date: "",
//         recruitment_end_date: "",
//         recruitment_description: "",
//         application_url: null,
//         created_at: "",
//         updated_at: "",
//         recruitment_image_url: img1,
//       },
//       {
//         recruitment_id: 3,
//         club_id: 103,
//         club_name: "FEEL'M",
//         recruitment_title: "🎬 FEEL'M 영화제작 신입모집",
//         recruitment_type: "마감 D-2",
//         recruitment_phone_number: "",
//         recruitment_email: "",
//         recruitment_start_date: "",
//         recruitment_end_date: "",
//         recruitment_description: "",
//         application_url: null,
//         created_at: "",
//         updated_at: "",
//         recruitment_image_url: img1,
//       },
//       {
//         recruitment_id: 4,
//         club_id: 104,
//         club_name: "샘터",
//         recruitment_title: "🎉 교육봉사 샘터 신입모집",
//         recruitment_type: "마감 D-1",
//         recruitment_phone_number: "",
//         recruitment_email: "",
//         recruitment_start_date: "",
//         recruitment_end_date: "",
//         recruitment_description: "",
//         application_url: null,
//         created_at: "",
//         updated_at: "",
//         recruitment_image_url: img1,
//       },
//       {
//         recruitment_id: 5,
//         club_id: 105,
//         club_name: "AKO",
//         recruitment_title: "⭐ 중앙동아리 AKO 신입모집",
//         recruitment_type: "상시모집",
//         recruitment_phone_number: "",
//         recruitment_email: "",
//         recruitment_start_date: "",
//         recruitment_end_date: "",
//         recruitment_description: "",
//         application_url: null,
//         created_at: "",
//         updated_at: "",
//         recruitment_image_url: img1,
//       },
//       {
//         recruitment_id: 6,
//         club_id: 106,
//         club_name: "ATC",
//         recruitment_title: "🎾 테니스 동아리 ATC 모집",
//         recruitment_type: "상시모집",
//         recruitment_phone_number: "",
//         recruitment_email: "",
//         recruitment_start_date: "",
//         recruitment_end_date: "",
//         recruitment_description: "",
//         application_url: null,
//         created_at: "",
//         updated_at: "",
//         recruitment_image_url: img1,
//       },
//     ];

//     setRecruitList(mockData);
//   }, []);

//   return (
//     <section className="w-[343px] space-y-3">
//       {/* 상단 타이틀 + 전체보기 버튼 */}
//       <div className="flex justify-between items-center w-full">
//         <h2 className="text-[18px] font-semibold text-black">
//           지금 모집중인 공고
//         </h2>

//         <button
//           className="w-[80px] h-[36px] flex items-center justify-center p-0 bg-transparent border-none"
//           onClick={() => navigate("/recruit/all")}
//         >
//           <img
//             src={moreIcon}
//             alt="전체보기"
//             className="w-[64px] h-[20px]"
//           />
//         </button>
//       </div>

//       {/* 카드 목록: flex-wrap 적용 */}
//       <div className="flex flex-wrap gap-x-4 gap-y-8 px-4">
//         {recruitList.map((recruit) => (
//           <div key={recruit.recruitment_id} className="w-[109px] min-h-[220px]">
//             {/* 개별 카드 */}
//             <RecruitCard
//               id={recruit.recruitment_id}
//               title={recruit.recruitment_title}
//               badge={recruit.recruitment_type}
//               views={103}
//               bookmarks={10}
//               thumbnail={recruit.recruitment_image_url}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default RecruitingSection;


// src/pages/Homepage/RecruitingSection.tsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecruitCard from "../../components/Recruit/RecruitCard";
import { fetchHomeRecruitments } from "../../api/recruit";
import type { Recruitment } from "../../types/recruit";
import arrow from "../../../public/assets/icon/ic-arrow-right-16.svg";

function RecruitingSection() {
  const [recruitList, setRecruitList] = useState<Recruitment[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchHomeRecruitments();
        console.log("✅ 모집공고 응답 데이터:", data);
  
        // ✅ recruitment_id 중복 제거
        const unique = data.filter(
          (item, index, self) =>
            index === self.findIndex((r) => r.recruitment_id === item.recruitment_id)
        );
  
        console.log("🧹 중복 제거 후:", unique);
  
        setRecruitList(unique);
      } catch (err) {
        console.error("❌ API 호출 실패:", err);
      }
    };
  
    loadData();
  }, []);
  
  return (
    <section className="w-[343px] space-y-3">
      {/* 상단 제목 + 전체보기 버튼 */}
      <div className="flex justify-between items-center w-full">
        <h2 className="text-[18px] font-semibold text-black">지금 모집중인 공고</h2>
        <button
          className="w-[80px] h-[36px] flex items-center justify-center p-0 bg-transparent border-none"
          onClick={() => navigate("/recruit/all")}
        >
            <span
            className="text-[14px] font-medium text-[#B7BFC8]"
            style={{
            fontFamily: "Wanted Sans",
            lineHeight: "135%",
            letterSpacing: "-0.03em",
            }}
            >
                전체보기
            </span>
            <img
                src={arrow}
                alt="arrow"
                className="w-4 h-4 ml-1" // 16px = 4, ml-1 = 4px 간격
            />
        </button>
      </div>

      {/* 모집 공고 카드 리스트 */}
      <div className="flex flex-wrap gap-x-2 gap-y-4 px-4">
        {recruitList
            .slice(0, 9)
            .map((recruit) => (   
                <div key={recruit.recruitment_id} className="w-[109px] min-h-[220px]">
                    <RecruitCard
                    id={recruit.recruitment_id}
                    title={recruit.recruitment_title || "제목 없음"}
                    badge={recruit.recruitment_type || ""}
                    views={0} // 현재 API에는 없음
                    bookmarks={0} // 현재 API에는 없음
                    thumbnail={recruit.main_image || ""}
                    />
                </div>
        ))}
      </div>
    </section>
  );
}

export default RecruitingSection;