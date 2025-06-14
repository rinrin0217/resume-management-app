import React from "react";

// propsの型定義：ボタンクリック時の処理
type FilterButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

// FilterButtonコンポーネント本体
const FilterButton: React.FC<FilterButtonProps> = ({ onClick}) => (
  // ボタンと選択件数表示を横並びに配置するコンテナ
  <div className="flex items-center mb-0">
    <button
      className="text-[1.3rem] px-9 py-3 rounded-xl border border-gray-300 bg-white font-bold mr-5 cursor-pointer"
      onClick={onClick}
    >
      フィルター条件
    </button>
    <span className="text-gray-500 text-[1.25rem]">
      0件選択中
    </span>
  </div>
);

export default FilterButton;