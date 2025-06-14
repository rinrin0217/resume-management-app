import React from "react";

// props型定義：columnsはカラム名の配列
type HeaderProps = {
  columns: string[];
};

// ヘッダーコンポーネント本体
export default function ApplicantTableHeader({ columns }: HeaderProps) {
  return (
    <thead>
      <tr className="bg-gray-50">
        {columns.map((col, idx) => (
          <th
            key={col}
            className={
              [
                "font-bold text-gray-700 px-4 py-5",
                idx !== columns.length - 1 ? "border-r" : "",
                col === "氏名" ? "min-w-[180px]" : "",
                col === "履歴書" || col === "経歴書" ? "min-w-[220px]" : "",
              ].join(" ")
            }
          >
            {/* カラム名を表示 */}
            {col}
          </th>
        ))}
      </tr>
    </thead>
  );
}