import React, { useState } from "react";
import "./Sidebar.css";
import Folder from "./Folder/Folder";

export default function Sidebar() {
  const [searchValue, setSearchValue] = useState("");
  const [activeFolder, setactiveFolder] = useState("Inbox");

  const handleFolderClick = (Name) => {
    setactiveFolder(Name);
  };
  return (
    <div className="sidebar">
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        placeholder="Search Mail and People"
        type="text"
        className="search_box"
      />
      <div className="sidebar_folder">
        <h3>Folders</h3>
        <Folder
          Name="Inbox"
          unread_count={5}
          highlighted={activeFolder === "Inbox"}
          handleFolderClick={handleFolderClick}
        />
        <Folder
          Name="Spam"
          unread_count={4}
          highlighted={activeFolder === "Spam"}
          handleFolderClick={handleFolderClick}
        />
        <Folder
          Name="Deleted Items"
          unread_count={0}
          highlighted={activeFolder === "Deleted Items"}
          handleFolderClick={handleFolderClick}
        />
        <Folder
          Name="Custom Folder"
          unread_count={0}
          highlighted={activeFolder === "Custom Folder"}
          handleFolderClick={handleFolderClick}
        />
      </div>
    </div>
  );
}
