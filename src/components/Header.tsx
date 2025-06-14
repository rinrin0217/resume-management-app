import React from "react";

const Header: React.FC = () => (
  <header
    style={{
      padding: "24px 0 0 32px",
      borderBottom: "1px solid #eee",
      background: "#fff",
    }}
  >
    <span
      style={{
        color: "#2196f3",
        fontWeight: "bold",
        fontSize: "1.5rem",
      }}
    >
      求職者管理
    </span>
  </header>
);

export default Header;