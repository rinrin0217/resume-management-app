'use client'
import React, { useState, useRef, useEffect } from "react";
import FilterMenu from "./Filter/FilterMenu";
import FilterButton from "./Filter/FilterButton";

// フィルターのカテゴリと項目を定義
const FILTER_CATEGORIES = [
  { label: "ステータス", key: "status" },
  { label: "履歴書ステータス", key: "resumeStatus" },
  { label: "経歴書ステータス", key: "careerStatus" },
];
const FILTER_ITEMS = ["完成", "進行中", "未着手", "要修正"];

const ApplicantMainTitle: React.FC = () => {
  // フィルターメニューの開閉状態と、選択されたフィルター項目を管理
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<{ [key: string]: string[] }>({
    status: [],
    resumeStatus: [],
    careerStatus: [],
  });

  // メニューの外側クリック検知用のref
  const menuWrapperRef = useRef<HTMLDivElement>(null);

  // メニューが開いているときだけ、外部クリックでメニューを閉じるイベントを登録
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (menuWrapperRef.current && !menuWrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  // フィルターボタンの開閉処理
  const handleToggle = () => setOpen((prev) => !prev);

  // チェックボックスの選択・解除処理
  const handleChange = (category: string, item: string) => {
    setSelected((prev) => ({
      ...prev,
      [category]: prev[category].includes(item)
        ? prev[category].filter((v) => v !== item)
        : [...prev[category], item]
    }));
  };

  return (
    <section className="bg-[#f7fafd] py-10 pb-6 min-h-[180px]">
      <div className="ml-12">
        {/* タイトル表示 */}
        <h1 className="text-[2.2rem] font-bold m-0 mb-5">
          求職者管理
        </h1>
        <div ref={menuWrapperRef}>
          {/* フィルターボタン。クリックでメニュー開閉 */}
          <FilterButton
            onClick={(e) => {
              e.stopPropagation();
              handleToggle();
            }}
          />
          {/* メニューが開いているときだけ表示 */}
          {open && (
            <FilterMenu
              categories={FILTER_CATEGORIES}
              items={FILTER_ITEMS}
              selected={selected}
              onChange={handleChange}
              innerRef={menuWrapperRef}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ApplicantMainTitle;