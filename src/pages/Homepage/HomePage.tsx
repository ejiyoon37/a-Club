import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import Banner from "./Banner";
import SearchBar from "./SearchBar";
import RecruitingSection from "./RecruitingSection";
import ExploreClubSection from "./ExploreClubsSection";
import Footer from "./Footer";

function HomePage() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="w-full max-w-[375px] bg-white">
        <Header />

        <main className="flex flex-col items-center space-y-4 py-4">
          {/* 검색창 */}
          <section className="w-[343px]">
            <SearchBar onClick={handleSearchClick} />
          </section>
          <br/>
          {/* 배너 (검색창과 간격 추가) */}
          <section className="w-[343px] mt-6">
            <Banner />
          </section>

          {/* 지금 모집 중인 공고 */}
          <section className="w-[343px]">
            <RecruitingSection />
          </section>

          {/* 동아리 둘러보기 */}
          <section className="w-[343px]">
            <ExploreClubSection />
          </section>

          {/* 푸터 */}
          <section className="w-full px-4">
            <Footer />
          </section>
        </main>
      </div>
    </div>
  );
}

export default HomePage;