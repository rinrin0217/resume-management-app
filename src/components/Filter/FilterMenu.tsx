import React from "react";

// propsの型定義：カテゴリ情報、項目リスト、選択状態、変更ハンドラ、refを受け取る
type FilterMenuProps = {
  categories: { label: string; key: string }[];
  items: string[];
  selected: { [key: string]: string[] };
  onChange: (category: string, item: string) => void;
  innerRef: React.RefObject<HTMLDivElement | null>;
};

// FilterMenuコンポーネント本体
const FilterMenu: React.FC<FilterMenuProps> = ({
  categories,
  items,
  selected,
  onChange,
  innerRef,
}) => (
  // メニュー全体のラッパー。背景や枠線、影、パディング、横並びレイアウトなど
  <div
    ref={innerRef}
    className="bg-white border border-gray-300 rounded-lg shadow-md p-5 flex flex-row gap-24 mt-2 text-[1.15rem] w-fit max-w-full"
  >
    {/* 各カテゴリごとにラベルとチェックボックスリストを表示 */}
    {categories.map((cat) => (
      <div key={cat.key}>
        <div className="font-bold mb-2 text-[1.2rem]">{cat.label}</div>
        {/* 各カテゴリ内の項目ごとにチェックボックス＋ラベルを表示 */}
        {items.map((item) => (
          <label
            key={item}
            className="block mb-2 cursor-pointer text-[1.1rem] whitespace-nowrap"
          >
            {/* チェックボックス本体。選択状態に応じてON/OFFし、クリックでonChangeを呼ぶ */}
            <input
              type="checkbox"
              checked={selected[cat.key]?.includes(item) ?? false}
              onChange={() => onChange(cat.key, item)}
              className="mr-2 w-[18px] h-[18px] accent-blue-500"
            />
            {item}
          </label>
        ))}
      </div>
    ))}
  </div>
);

export default FilterMenu;