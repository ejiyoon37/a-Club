import TopNav from "../components/common/TopNav";

function MyPage() {
  return (
  <>
      <TopNav />

      <main className="p-4">
        <h1 className="text-xl font-semibold mb-4">마이페이지</h1>

        <section className="space-y-4">
          {/* 유저 정보 - 로그인 연동  */} 
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-sm text-gray-500">로그인한 사용자</p>
            <p className="text-base font-medium">user@example.com</p>
          </div>

          {/* 즐겨찾기한 동아리 목록 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">즐겨찾기한 동아리</h2>
            <div className="text-sm text-gray-500">아직 즐겨찾기한 동아리가 없습니다.</div>
          </div>
        </section>
      </main>
    </>
  );
}
export default MyPage;