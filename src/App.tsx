

import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css'
import './App.css'


import HomePage from "./pages/Homepage/HomePage";
import RegisterClubPage from "./pages/RegisterClubPage";
import ClubDetailPage from "./pages/ClubDetailPage";
import MyPage from "./pages/MyPage";
import AdminPage from "./pages/AdminPage";
import SearchPage from "./pages/Search/SearchPage"
import SearchResultPage from "./pages/Search/SearchResultPage";
import RecruitAllPage from "./pages/RecruitAllPage";
import ClubAllPage from "./pages/ClubAllPage";
function App() {

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-[375px] bg-white min-h-screen shadow-md">
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/register" element={<RegisterClubPage />} />
            <Route path="/club/:id" element={<ClubDetailPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/search/result" element={<SearchResultPage />} />
            <Route path="/recruit/all" element={<RecruitAllPage />} />
            <Route path="/club/all" element={<ClubAllPage />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
  
}

export default App
