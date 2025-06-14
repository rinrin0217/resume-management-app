"use client";

import React, { useRef } from "react";
import ApplicantTableHeader from "./ApplicantTableHeader";
import ApplicantTableRow from "./ApplicantTableRow";

// カラム名
const columns = [
  "氏名",
  "ステータス",
  "履歴書",
  "履歴書ステータス",
  "経歴書",
  "経歴書ステータス",
  "編集",
];

const rows: (string | React.ReactNode)[][] = [];

 // 横スクロール用のドラッグ状態管理
export default function ApplicantTable() {
  const scrollRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

   // ドラッグ開始時の処理
  const onMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    if (scrollRef.current) {
      scrollRef.current.classList.add("cursor-grabbing");
      startX = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft = scrollRef.current.scrollLeft;
    }
  };

  // ドラッグ終了時・領域外マウス移動時の処理
  const onMouseLeave = () => {
    isDown = false;
    if (scrollRef.current) scrollRef.current.classList.remove("cursor-grabbing");
  };
  const onMouseUp = () => {
    isDown = false;
    if (scrollRef.current) scrollRef.current.classList.remove("cursor-grabbing");
  };

  // ドラッグ中のスクロール処理
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    if (scrollRef.current) {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    // スクロール可能なテーブル領域
    <div
      ref={scrollRef}
      className="bg-white rounded-xl shadow p-4 overflow-x-auto cursor-grab"
      style={{ userSelect: "none" }}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <table className="min-w-[1200px] w-full text-lg select-none">
        {/* ヘッダー部分 */}
        <ApplicantTableHeader columns={columns} />
        {/* データ行部分 */}
        <tbody>
          {(rows.length > 0 ? rows : Array.from({ length: 10 })).map((row, idx) => (
            <ApplicantTableRow
              key={idx}
              columns={columns}
              rowData={Array.isArray(row) ? row : undefined}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}