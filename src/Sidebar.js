import React from "react";
import "./Sidebar.css";
import InboxEmail from "./InboxEmail";
import SpamEmail from "./SpamEmail";

import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import SendIcon from "@material-ui/icons/Send";
import BlockIcon from "@material-ui/icons/Block";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ArchiveIcon from "@material-ui/icons/Archive";
import SearchIcon from "@material-ui/icons/Search";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <div className="sidebar__search">
            <SearchIcon />
            <input placeholder="Search Mail and People" />
          </div>
        </div>
      </div>

      <SidebarOption Icon={ExpandLessIcon} title="Folders" />
      <SidebarOption Icon={InboxIcon} title="Inbox" />
      <InboxEmail />
      <SidebarOption Icon={BlockIcon} title="Junk Email" />
      <SpamEmail />
      <SidebarOption Icon={EditIcon} title="Drafts" />
      <SidebarOption Icon={SendIcon} title="Sent Items" />
      <SidebarOption Icon={DeleteIcon} title="Deleted Items" />
      <SidebarOption Icon={ArchiveIcon} title="Archive" />
    </div>
  );
};

export default Sidebar;
