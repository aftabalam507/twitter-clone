import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ImageIcon from "@mui/icons-material/Image";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

export default function ReplyModal({ handleClose, open }) {
  const navigate = useNavigate();
  const [uploadingImage, setUploadingImage] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState("");

  const handleSubmit = (values) => {
    console.log("handle submit", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      tweetId: 4,
    },
    onSubmit: handleSubmit,
  });

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imageUrl = event.target.files[0];
    formik.setFieldValue("image", imageUrl);
    setSelectedImage(imageUrl);
    setUploadingImage(false);
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
              </div>

              <div className="mt-2">
                <div
                  onClick={() => navigate(`/tweet/${3}`)}
                  className="cursor-pointer "
                >
                  <p className="mb-2 p-0">
                    twitter clone - full stack project with spring boot and
                    react
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section className={`py-10`}>
            <div className="flex space-x-5">
              <Avatar
                alt="username"
                //src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
                src="https://pbs.twimg.com/profile_images/1700112215695560704/RKKebm_W_400x400.jpg"
              />
              <div className="w-full">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="content"
                      placeholder="what is happening?!"
                      className={`border-none outline-none text-xl bg-transparent`}
                      {...formik.getFieldProps("content")}
                      {...(formik.errors.content && formik.touched.content && (
                        <span className="text-red-500">
                          {formik.errors.content}
                        </span>
                      ))}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <div className="flex space-x-5 items-center">
                      <label className="flext items-center space-x-2 rounded-md cursor-pointer">
                        <ImageIcon className="text-[#1d9bf0]" />
                        <input
                          type="file"
                          name="imageFile"
                          className="hidden"
                          onChange={handleSelectImage}
                        />
                      </label>
                      <FmdGoodIcon className="text-[#1d9bf0]" />
                      <TagFacesIcon className="text-[#1d9bf0]" />
                    </div>

                    <div>
                      <Button
                        sx={{
                          width: "100%",
                          borderRadius: "29px",
                          py: "8px",
                          px: "20px",
                          bgcolor: "#1e88e5",
                        }}
                        variant="contained"
                        type="submit"
                      >
                        Tweet
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
}
