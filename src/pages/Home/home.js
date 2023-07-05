import { Box, Stack, TextField, Button, Typography, Grid } from "@mui/material";

import "./home.css";
const Home = (user) => {
  return (
    <Box>
      <Box className="Heading">
        <Typography id="HeadingContent">Profile</Typography>
      </Box>
      <Box className="wrapper">
        <Box
          className="contentImage"
          // metric are different and are based on content
          top="-150px"
          left="20px"
          bottom="20px"
        >
          <img
            className="ProfileImage"
            width="150%"
            src={"/assets/profile.jpg"}
          />
        </Box>
        <Box className="contentForm">
          <Grid className="formWrapper">
            <Box className="contentHeadingWrapper">
              <Typography id="WrapperContentHeading">Profile</Typography>
            </Box>
            <Stack gap="10px">
              <Box display={"flex"} justifyContent={"center"}>
                <img src={"/assets/ProfileImg.png"} width={"100px"} />
              </Box>
              <TextField
                disabled
                className="InputTextField"
                defaultValue={user.name || "0xNishchit"}
                label="Username"
              />
              <TextField
                disabled
                className="InputTextField"
                defaultValue={user.email || "0xNishchit@gmail.com"}
                label="Email"
              />
              <Button
                id="Logout"
                onClick={() => {
                  window.open("/login");
                }}
              >
                <Typography color={"black"} textTransform="none">
                  LogOut
                </Typography>
              </Button>
            </Stack>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
