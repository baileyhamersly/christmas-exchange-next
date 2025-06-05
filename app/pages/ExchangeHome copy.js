'use client'

import React, { useState, useEffect } from "react";
// import UserList from "./UserList.js";
// import { Button } from "@mui/material";

function ExchangeHome() {

  const [showPopup, setShowPopup] = useState(true);
  const [showList, setShowList] = useState("");
  const [userName, setUserName] = useState("");

  const userList = [
    "Alan",
    "Andrew",
    "Bailey",
    "Cindy",
    "Clay",
    "Laurence",
    "Lee",
    "Michelle",
    "Pamela",
    "Steven",
    "Vincent",
  ];

  // useEffect(() => {
  //   // Check for the XMAS_EXCHANGE cookie when the component mounts
  //   const xmasExchangeCookie = document.cookie
  //     .split("; ")
  //     .find((row) => row.startsWith("XMAS_EXCHANGE="));

  //   if (xmasExchangeCookie) {
  //     const userName = xmasExchangeCookie.split("=")[1];
  //     setUserName(userName);
  //   }
  // }, []);

  // const handleUserClick = (userName) => {
  //   // Set the XMAS_EXCHANGE cookie
  //   document.cookie = `XMAS_EXCHANGE=${userName}`;
  //   setUserName(userName);
  //   setShowPopup(false); // Close the pop-up
  // };

  // const clearCookieAndShowPopup = () => {
  //   // Clear the XMAS_EXCHANGE cookie
  //   document.cookie = "XMAS_EXCHANGE=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  //   setUserName(null);
  //   setShowPopup(true); // Show the initial pop-up
  // };

  // const renderUserLinks = userList.map((user) => (
  //   <Button
  //     variant="contained"
  //     sx={{
  //       margin: "10px",
  //       color: "secondary.dark",
  //       fontWeight: "bold",
  //       backgroundColor: "secondary.light",
  //       ":hover": { backgroundColor: "secondary.main" },
  //     }}
  //     onClick={() => {
  //       setShowList(user);
  //     }}
  //     key={user}
  //   >
  //     {user}
  //   </Button>
  // ));

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      {showPopup && !userName && (
        <div className="popup-container">
          <div className="popup">
            <h2>Choose your name:</h2>
            {userList.map((user) => (
              <button
                key={user}
                variant="contained"
                sx={{
                  margin: "8px",
                  color: "primary.dark",
                  fontWeight: "bold",
                  backgroundColor: "primary.light",
                  ":hover": { backgroundColor: "primary.main" },
                }}
                onClick={() => handleUserClick(user)}
              >
                {user}
              </button>
            ))}
            <h5>
              <p style={{color: "red"}}>
                This will ensure you cannot see if any gifts have been purchased
                when viewing your own wishlist, so make sure you choose YOUR
                name.
              </p>
              If you accidentally choose the wrong name or someone else needs to
              use the app, click the link "Not You?" at the top of the main
              page.
            </h5>
          </div>
        </div>
      )}
      <div
        style={{
          padding: "25px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 800,
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ fontSize: "45px", fontWeight: "bold" }}>
            Christmas Exchange
          </div>
          <img src="/smallSnowman.png" />
        </div>
        
        {userName && (
          <div>
            <p>
              {"You are viewing this page as " + userName + ". "}
              <a
                href=""
                onClick={clearCookieAndShowPopup}
                style={{ color: "#cf3554", fontWeight: "bold" }}
              >
                {"Not You?"}
              </a>
            </p>
          </div>
        )}

        <h2>Whose Wish List Do you Want to View?</h2>
        {/* <div className="user-links">{renderUserLinks}</div>
        {showList && <UserList userName={userName} showList={showList} />} */}
      </div>
    </div>
  );
}

export default ExchangeHome;
