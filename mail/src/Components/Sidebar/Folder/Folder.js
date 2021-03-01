import React from "react";
import "./Folder.css";

export default function Folder({
  Name,
  unread_count,
  highlighted,
  handleFolderClick,
}) {
  return (
    <div
      className={highlighted ? " folder folder_highlighted" : "folder"}
      onClick={() => handleFolderClick(Name)}
    >
      <p className="folder_name">{Name}</p>
      <p className="unread_count">{unread_count !== 0 ? unread_count : ""}</p>
    </div>
  );
}
