// src/components/recruit/RecruitCardList.tsx

import React, { useEffect, useRef, useState, useCallback } from "react";
import RecruitCard from "./RecruitCard";

interface RecruitData {
  recruitment_id: number;
  recruitment_title: string;
  recruitment_type: string;
  main_image: string;
}

interface RecruitCardListProps {
  sortOption: "latest" | "bookmark" | "deadline";
}

export default function RecruitCardList({ sortOption }: RecruitCardListProps) {
  const [recruitList, setRecruitList] = useState<RecruitData[]>([]);
  const [page, setPage] = useState(1);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  // 정렬 옵션 바뀌면 초기화
  useEffect(() => {
    setRecruitList([]);
    setPage(1);
  }, [sortOption]);

  // 옵저버 등록
  useEffect(() => {
    const option = { threshold: 0.5 };
    const observer = new IntersectionObserver(handleObserver, option);
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  // 데이터 요청 (실제 API 붙이면 이 부분 수정)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/recruitments?page=${page}&sort=${sortOption}`);
      const data: RecruitData[] = await response.json();
      setRecruitList((prev) => [...prev, ...data]);
    };

    fetchData();
  }, [page, sortOption]);

  return (
    <>
      <div className="flex flex-wrap gap-x-2 gap-y-4 px-4">
        {recruitList.map((recruit) => (
          <div key={recruit.recruitment_id} className="w-[109px] min-h-[220px]">
            <RecruitCard
              id={recruit.recruitment_id}
              title={recruit.recruitment_title || "제목 없음"}
              badge={recruit.recruitment_type || ""}
              views={0}
              bookmarks={0}
              thumbnail={recruit.main_image || ""}
            />
          </div>
        ))}
      </div>

      {/* 옵저버 타겟 */}
      <div ref={observerRef} className="h-[1px]" />
    </>
  );
}