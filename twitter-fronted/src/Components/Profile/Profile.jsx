import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TweetCard from "../HomeSection/TweetCard";

const Profile = () => {
  const [tabValue, setTabValue] = useState("1");

  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  const handleOpenProfileModel = () => {
    console.log("open profile model");
  };
  const handleFollowUser = () => {
    console.log("open handleFollowUser");
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    if (newValue === 4) {
      console.log("likes tweets");
    } else if (newValue === 1) {
      console.log("user tweets");
    }
  };

  return (
    <div>
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95 `}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Aftab Alam</h1>
      </section>

      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://cdn.pixabay.com/photo/2024/01/10/18/33/fence-8500152_1280.jpg"
          alt="backgrount_image"
        />
      </section>

      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="aftab alam"
            src="https://pbs.twimg.com/profile_images/1700112215695560704/RKKebm_W_400x400.jpg"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />

          {false ? (
            <Button
              onClick={handleOpenProfileModel}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {false ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>

        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Aftab Alam</h1>
            {true && (
              <img
                className="ml-0 w-10 h-10 "
                //src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"
                src="https://images.template.net/111397/free-instagram-verified-icon-clipart-5ktr9.jpg"
                alt=""
              />
            )}
          </div>
          <h1 className="text-gray-500">@aftabalam507</h1>
        </div>

        <div className="mt-2 space-y-3">
          <p className="flex">
            I'm still learning
            <img
              className="ml-0 w-5 h-5 pl-1"
              src="https://abs-0.twimg.com/emoji/v2/svg/1f9d1-200d-1f4bb.svg"
              alt=""
            />
          </p>
          <div className="py-1 flex space-x-5">
            <div className="flex items-center text-gray-500">
              <BusinessCenterIcon />
              <p className="ml-2">Education</p>
            </div>

            <div className="flex items-center text-gray-500">
              <LocationOnIcon />
              <p className="ml-2">Gurugram , Haryana</p>
            </div>
            <div className="flex items-center text-gray-500">
              <CalendarMonthIcon />
              <p className="ml-2">Joined December 2022</p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>55</span>
              <span className="text-gray-500">Following</span>
            </div>
            <div className="flex items-center space-x-1 font-semibold">
              <span>36</span>
              <span className="text-gray-500">Followers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {[1, 1, 1, 1].map((item) => (
                <TweetCard />
              ))}
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item Likes</TabPanel>
          </TabContext>
        </Box>
      </section>
    </div>
  );
};

export default Profile;
