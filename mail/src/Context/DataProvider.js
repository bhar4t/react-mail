import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [SelectedFolder, setSelectedFolder] = useState("");
  const [SelectedMessage, setSelectedMessage] = useState("");
  const [inbox, setinbox] = useState([
    {
      mId: "guid-1",
      From: "user 3",
      unread: true,
      subject: "Training Program",
      content:
        "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.",
    },
    {
      mId: "guid-2",
      From: "user 7",
      unread: false,
      subject: "Empower your future",
      content:
        "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
    },
  ]);
  const [Spam, setSpam] = useState([
    {
      mId: "guid-3",
      From: "User 1",
      unread: true,
      subject: "Pre Approved Loan",
      content:
        "Congratulations ! <u>Credit card<u> is being shipped to you today!",
    },
    {
      mId: "guid-4",
      From: "User 2",
      unread: true,
      subject: "You won a lottery!",
      content:
        "You have just won the New York official lottery. Please send us your address so that we may start the transfer.",
    },
    {
      mId: "guid-5",
      From: "User 4",
      unread: false,
      subject: "You won a lottery!",
      content:
        "You have just won the New York official lottery. Please send us your address so that we may start the transfer.",
    },
  ]);
  return (
    <DataContext.Provider
      value={(inbox, Spam, SelectedFolder, SelectedMessage)}
    >
      {props.children}
    </DataContext.Provider>
  );
};
