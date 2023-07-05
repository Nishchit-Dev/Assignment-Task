import {
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import "./login.css";

const Login = () => {
  return (
    <Box>
      <Box className="Heading">
        <Typography id="HeadingContent">Log in Form</Typography>
      </Box>
      <Box className="wrapper">
        <Box
          className="contentImage"
          // metric are different and are based on content
          top="-150px"
          left="20px"
          bottom="20px"
        >
          <img id="LoginImage" src={"/assets/login.jpg"} />
        </Box>
        <Box className="contentForm">
          <Grid className="formWrapper">
            <Box className="contentHeadingWrapper">
              <Typography id="WrapperContentHeading">Members Log in</Typography>
            </Box>
            <Stack className="WrapperForm">
              <TextField
                className="InputTextField"
                placeholder="Email"
                label="Email"
              />
              <TextField
                placeholder="Password"
                className="InputTextField"
                label="Password"
                type="password"
              />
              <Button id="LSButton">
                <Typography textTransform="none">LogIn</Typography>
              </Button>
              <Box textAlign="center">
                <span>or</span>
              </Box>
              <Button
                id="SignInWithGoogle"
                startIcon={<img src={"/assets/google.png"} width={"24px"} />}
              >
                <Typography textTransform="none">SignIn with Google</Typography>
              </Button>
              <Box textAlign="center">
                <Typography>
                  New Here? <Link href="/signup">Sign Up</Link>
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
