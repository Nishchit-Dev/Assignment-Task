import {
  Box,
  Stack,
  createTheme,
  TextField,
  Button,
  Typography,
  Container,
  Icon,
  ThemeProvider,
  Link,
} from "@mui/material";
import google from "../../assets/search.png";
import Signup from "../../assets/signup.jpg";

const font = "'Poppins', sans-serif";
const theme = createTheme({
  typography: {
    fontFamily: font,
    button: {
      textTransform: "none",
    },
  },
});

const SignUpMUI = () => {
  return (
    <Stack >
      <Box textAlign="center" m="10px 0 " p="0 0 50px 0">
        <Typography variant="h2" fontWeight={700} fontFamily={font}>
          Sign Up Form
        </Typography>
      </Box>
      <Box
        boxShadow={"2px 15px 106px #bebebe"}
        display="flex"
        flexDirection="row"
        alignItems="center"
        bgcolor="#fff"
        width="800px"
        overflow="hidden"
        m="20px"
        borderRadius="20px"
      >
        <Box
          flex="1.5 1"
          display="flex"
          position="relative"
          top="-200px"
          left="20px"
          backgroundColor="#fff"
          bottom="20px"
        >
          <img
            width="170%"
            src={Signup}
            style={{ position: "absolute", top: "-105px", left: "-175px" }}
          />
        </Box>
        <Box
          flex="2 1"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Stack p="30px 50px">
            <Box p="30px 0">
              <Typography variant="h4" fontWeight={600} fontFamily={font}>
                Create Account
              </Typography>
            </Box>
            <Stack gap="10px">
              <TextField
                placeholder="Username"
                label="Username"
                variant="outlined"
                InputProps={{
                  style: { fontFamily: "Poppins", borderColor: "yellow" },
                }}
                InputLabelProps={{ style: { fontFamily: "Poppins" } }}
              />
              <TextField
                placeholder="Email"
                label="Email"
                variant="outlined"
                
                InputProps={{ style: { fontFamily: "Poppins" } }}
                InputLabelProps={{ style: { fontFamily: "Poppins" } }}
              />
              <TextField
                placeholder="Password"
                label="Password"
                variant="outlined"
                InputProps={{ style: { fontFamily: "Poppins" } }}
                InputLabelProps={{ style: { fontFamily: "Poppins" } }}
              />

              <Button style={{ background: "#FFC801" }}>
                <Typography
                  fontFamily={font}
                  color={"black"}
                  textTransform="none"
                >
                  Sign Up
                </Typography>
              </Button>
              <Box textAlign="center">
                <span>or</span>
              </Box>
              <Button
                startIcon={<img src={google} width={"24px"} />}
                style={{
                  background: "rgba(25, 118, 210, 0.08)",
                }}
                sx={{ "&:hover": { backgroundColor: "#000" } }}
                
              >
                <Typography fontFamily={font} textTransform="none">
                  Sign up with Google
                </Typography>
              </Button>
              <Box textAlign="center">
                <Typography fontFamily={font}>
                  Already have Account? <Link href="/login">LogIn</Link>
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default SignUpMUI;
