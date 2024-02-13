import { Button, Grid } from "@mui/material";
import img1 from "../../assets/background.jpg";
import logo from "../../assets/logo.png";
import { GoogleLogin } from "@react-oauth/google";
import AuthModal from "./AuthModel";
import { useState } from "react";

const Authentication = () => {
  const [openAuthModel, setOpenAuthModel] = useState(false);
  const handleOpenAuthModel = () => setOpenAuthModel(true);
  const handleCloseAuthModel = () => setOpenAuthModel(false);
  return (
    <div>
      <Grid className="overflow-y-hidden" container>
        <Grid className="hidden lg:block" item lg={7}>
          <img className="w-full h-screen" src={img1} alt="background_image" />
          <div className="absolute top-[26%] left-[19%]">
            <img
              height={300}
              width={300}
              viewBox={(0, 0, 24, 24)}
              src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
              alt="logo"
            />
          </div>
        </Grid>

        <Grid className="px-10 " lg={5} xs={12}>
          <h1 className="mt-10 font-bold text-7xl">Happening Now</h1>
          <h1 className="font-bold text-3xl py-16 mr-">Join Twitter Today</h1>

          <div className="w-[60%]">
            <div className="w-full ">
              <GoogleLogin width={330} />
              <p className="py-5 text-center ">OR</p>
              <Button
                onClick={handleOpenAuthModel}
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  borderRadius: "29px",
                  py: "7px",
                }}
              >
                Create Account
              </Button>

              <p className="text-sm mt-2">
                By signin up, you agree to the Terms of Services and Privacy
                Policy, including Cookie Use.
              </p>
            </div>

            <div className="mt-10">
              <h1 className="font-bold text-xl mb-5">Already Have Account</h1>
              <Button
                onClick={handleOpenAuthModel}
                fullWidth
                variant="outlined"
                size="large"
                sx={{
                  borderRadius: "29px",
                  py: "7px",
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
      <AuthModal open={openAuthModel} handleClose={handleCloseAuthModel} />
    </div>
  );
};

export default Authentication;
