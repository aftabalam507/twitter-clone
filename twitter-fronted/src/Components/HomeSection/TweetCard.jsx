import RepeatIcon from "@mui/icons-material/Repeat";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { UploadFile, UploadFileOutlined } from "@mui/icons-material";

const TweetCard = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTweet = () => {
    console.log("logout");
    handleClose();
  };

  const handleOpenReplyModel = () => {
    console.log("open model");
  };

  const handleCreateRetweet = () => {
    console.log("handle create retweet");
  };

  const handleLikeTweet = () => {
    console.log("handling like tweet");
  };

  return (
    <div className="">
      {/* <div className="flex items-center font-semibold text-gray-700 py-2">
        <RepeatIcon />
        <p>You Retweet</p>
      </div> */}

      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer"
          alt="username"
          //src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
          src="https://pbs.twimg.com/profile_images/1700112215695560704/RKKebm_W_400x400.jpg"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Aftab Alam</span>
              <span className="text-gray-600">@aftabalam507 .2m</span>
              <img
                className="ml-2 w-10 h-10 "
                //src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"
                src="https://images.template.net/111397/free-instagram-verified-icon-clipart-5ktr9.jpg"
                alt=""
              />
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="mt-2">
            <div className="cursor-pointer ">
              <p className="mb-2 p-0">
                twitter clone - full stack project with spring boot and react
              </p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src="https://pbs.twimg.com/media/GEh0GdeXsAAzLt6?format=jpg&name=small"
                alt=""
              />
            </div>

            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex item-center text-gray-600">
                <ChatBubbleOutlineIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>43</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                <RepeatIcon
                  className="cursor-pointer"
                  onClick={handleCreateRetweet}
                />
              </div>

              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <FavoriteIcon
                    className="cursor-pointer"
                    onClick={handleLikeTweet}
                  />
                ) : (
                  <FavoriteBorderIcon
                    className="cursor-pointer"
                    onClick={handleLikeTweet}
                  />
                )}
              </div>

              <div className="space-x-3 flex item-center text-gray-600">
                <BarChartIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>430</p>
              </div>

              <div className="space-x-3 flex item-center text-gray-600">
                <FileUploadIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
