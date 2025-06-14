import React from "react";

// props型定義：columnsはカラム名の配列、rowDataはその行のデータ
type RowProps = {
  columns: string[];
  rowData?: (string | React.ReactNode)[];
};

// 行コンポーネント本体
export default function ApplicantTableRow({ columns, rowData }: RowProps) {
  return (
    <tr className="border-t">
      {/* カラム名の数だけセルを生成 */}
      {columns.map((col, idx) => (
        <td
          key={col + idx}
          className={
            [
              "px-4 py-5 whitespace-nowrap",
              idx !== columns.length - 1 ? "border-r" : "",
              col === "氏名" ? "min-w-[180px]" : "",
              col === "履歴書" || col === "経歴書" ? "min-w-[220px]" : "",
            ].join(" ")
          }
        >
          {rowData ? rowData[idx] : ""}
        </td>
      ))}
    </tr>
  );
}