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
import profile from "../../assets/profile.jpg";
import google from "../../assets/search.png";

const font = "'Poppins', sans-serif";
const theme = createTheme({
  typography: {
    fontFamily: font,
    button: {
      textTransform: "none",
    },
  },
});

const HomeMUI = (user) => {
  return (
    <Stack>
      <Box textAlign="center" m="10px 0 " p="0 0 50px 0">
        <Typography variant="h2" fontWeight={700} fontFamily={font}>
          Profile
        </Typography>
      </Box>
      <Box
        boxShadow={"2px 15px 106px #bebebe"}
        display="flex"
        flexDirection="row"
        alignItems="center"
        backgroundColor="#fff"
        width="800px"
        overflow="hidden"
        m="20px"
        borderRadius="20px"
      >
        <Box
          flex="1.5 1"
          display="flex"
          position="relative"
          top="-150px"
          left="20px"
          bottom="20px"
        >
          <img
            width="150%"
            src={profile}
            style={{ position: "absolute", top: "-100px", left: "-85px" }}
          />
        </Box>
        <Box
          height={"445px"}
          flex="2 1"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Stack p="30px 50px">
            <Box p="30px 0">
              <Typography variant="h4" fontWeight={600} fontFamily={font}>
                Profile
              </Typography>
            </Box>
            <Stack gap="10px">
              <TextField
                disabled
                style={{ borderColor: "" }}
                defaultValue={user.name || "0xNishchit"}
                label="Username"
                variant="outlined"
                InputProps={{ style: { fontFamily: font } }}
                InputLabelProps={{ style: { fontFamily: font } }}
              />
              <TextField
                disabled
                defaultValue={user.email || "0xNishchit@gmail.com"}
                label="Email"
                variant="outlined"
           
                InputProps={{ style: { fontFamily: font } }}
                InputLabelProps={{ style: { fontFamily: font } }}
              />
              <Button
                style={{ background: "#FFC801" }}
                TouchRippleProps={{ style: { color: "black" } }}
              >
                <Typography
                  fontFamily={font}
                  color={"black"}
                  textTransform="none"
                >
                  LogOut
                </Typography>
              </Button>
              {/* <Box textAlign="center">
                  <span>or</span>
                </Box>
                <Button
                  startIcon={<img src={google} width={"24px"} />}
                  style={{ background: "rgba(25, 118, 210, 0.08)" }}
                  sx={{ "&:hover": { backgroundColor: "#fefefe" } }}
                >
                  <Typography fontFamily={font} textTransform="none">
                    SignIn with Google
                  </Typography>
                </Button>
                <Box textAlign="center">
                  <Typography fontFamily={font}>
                    New Here? <Link href="/signupmui">Sign Up</Link>
                  </Typography>
                </Box> */}
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default HomeMUI;
