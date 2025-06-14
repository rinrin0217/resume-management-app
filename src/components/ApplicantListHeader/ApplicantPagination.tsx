'use client'
import React, { useState } from "react";

type ApplicantPaginationProps = {
  totalPages?: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
};

const DOTS = "...";

// ページ番号配列生成
const getPaginationRange = (current: number, total: number) => {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  // 1～4ページ目
  if (current <= 4) {
    return [1, 2, 3, 4, 5, DOTS, total];
  }
  // 12～最終ページ
  if (current >= total - 3) {
    return [1, DOTS, total - 4, total - 3, total - 2, total - 1, total];
  }
  // 5～11ページ目
  return [1, DOTS, current - 1, current, current + 1, DOTS, total];
};

const BUTTON_WIDTH = 44; // px
const NAV_BUTTON_WIDTH = 64; // 前へ・次への幅(px)
const MAX_BUTTON_COUNT = 7; // 1,2,3,4,5,...,15 or 1,...,11,12,13,14,15 or 1,...,n-1,n,n+1,...,15

const ApplicantPagination: React.FC<ApplicantPaginationProps> = ({
  totalPages = 15,
  initialPage = 1,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const pages = getPaginationRange(currentPage, totalPages);

  // 横幅を常に統一
  // 「前へ」＋ ページ/ドット7個 + 「次へ」
  const totalWidth = NAV_BUTTON_WIDTH * 2 + MAX_BUTTON_COUNT * BUTTON_WIDTH + 8 * (MAX_BUTTON_COUNT + 1);

  return (
    <nav
      className="flex items-center justify-center gap-2 mt-6 select-none"
      style={{
        minWidth: totalWidth,
        maxWidth: totalWidth,
      }}
    >
      {/* 前へ */}
      <button
        className="px-4 py-1 rounded-full border-2 min-w-[64px] text-center disabled:opacity-50"
        style={{ width: NAV_BUTTON_WIDTH }}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        前へ
      </button>
      {/* ページ番号 */}
      {pages.map((page, idx) =>
        page === DOTS ? (
          <span
            key={idx}
            className="min-w-[44px] px-2 text-gray-400 text-center inline-flex items-center justify-center"
            style={{ width: BUTTON_WIDTH }}
          >
            ...
          </span>
        ) : (
          <button
            key={idx}
            className={`px-3 py-1 rounded-full border-2 min-w-[44px] text-center transition-colors
              ${currentPage === page ? "bg-blue-600 text-white font-bold" : "bg-white text-black"}
            `}
            style={{ width: BUTTON_WIDTH }}
            onClick={() => handlePageChange(Number(page))}
            disabled={currentPage === page}
          >
            {page}
          </button>
        )
      )}
      {/* 次へ */}
      <button
        className="px-4 py-1 rounded-full border-2 min-w-[64px] text-center disabled:opacity-50"
        style={{ width: NAV_BUTTON_WIDTH }}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        次へ
      </button>
    </nav>
  );
};

export default ApplicantPagination;