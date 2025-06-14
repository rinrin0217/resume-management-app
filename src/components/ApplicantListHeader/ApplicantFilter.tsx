import React, { useState, useRef, useEffect } from "react";
import FilterMenu from "../Filter/FilterMenu";
import FilterButton from "../Filter/FilterButton";

// フィルターのカテゴリと項目を定義
const FILTER_CATEGORIES = [
  { label: "ステータス", key: "status" },
  { label: "履歴書ステータス", key: "resumeStatus" },
  { label: "経歴書ステータス", key: "careerStatus" },
];
const FILTER_ITEMS = ["完成", "進行中", "未着手", "要修正"];

const ApplicantFilter: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<{ [key: string]: string[] }>({
    status: [],
    resumeStatus: [],
    careerStatus: [],
  });
  const menuWrapperRef = useRef<HTMLDivElement>(null);

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

  const handleToggle = () => setOpen((prev) => !prev);

  const handleChange = (category: string, item: string) => {
    setSelected((prev) => ({
      ...prev,
      [category]: prev[category].includes(item)
        ? prev[category].filter((v) => v !== item)
        : [...prev[category], item]
    }));
  };

  return (
    <div ref={menuWrapperRef} className="relative inline-block">
      <FilterButton
        onClick={(e) => {
          e.stopPropagation();
          handleToggle();
        }}
      />
      {open && (
        <div className="absolute left-0 z-20 w-max">
          <FilterMenu
            categories={FILTER_CATEGORIES}
            items={FILTER_ITEMS}
            selected={selected}
            onChange={handleChange}
            innerRef={menuWrapperRef}
          />
        </div>
      )}
    </div>
  );
};

export default ApplicantFilter;