import {
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  Grid,
  Link,
} from "@mui/material";

import "./singup.css";

const Signup = () => {
  return (
    <Box>
      <Box className="Heading">
        <Typography id="HeadingContent">Sign Up Form</Typography>
      </Box>
      <Box className="wrapper">
        <Box
          className="contentImage"
          // metric are different and are based on content
          bottom={"20px"}
          top={"-200px"}
          left={"20px"}
        >
          <img id="SingupImage" src={"/assets/signup.jpg"} />
        </Box>
        <Box className="contentForm">
          <Grid className="formWrapper">
            <Box className="contentHeadingWrapper">
              <Typography id="WrapperContentHeading">Create Account</Typography>
            </Box>
            <Stack className="WrapperForm">
              <TextField
                placeholder="Username"
                label="Username"
                className="InputTextField"
              />
              <TextField
                className="InputTextField"
                placeholder="Email"
                label="Email"
              />
              <TextField
                className="InputTextField"
                placeholder="Password"
                label="Password"
                type="password"
              />

              <Button id="LSButton">
                <Typography textTransform="none">Sign Up</Typography>
              </Button>
              <Box textAlign="center">
                <span>or</span>
              </Box>
              <Button
                id="SignUpWithGoogle"
                startIcon={<img src={"/assets/google.png"} width={"24px"} />}
              >
                <Typography textTransform="none">
                  Sign up with Google
                </Typography>
              </Button>
              <Box textAlign="center">
                <Typography>
                  Already have Account? <Link href="/login">LogIn</Link>
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default Signup;
