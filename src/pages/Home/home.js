import {
    Box,
    Stack,

    TextField,
    Button,
    Typography,

  } from "@mui/material";
  import profile from "../../assets/profile.jpg";
  import ProfileImg from "../../assets/ProfileImg.png";
  
  const font = "'Poppins', sans-serif";

  
  const Home = (user) => {

  
    return (
      <Stack >
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
          <Box height={"445px"}
            flex="2 1"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Stack p="30px 50px">
              <Box p="10px 0" textAlign={"center"}>
                <Typography variant="h4" fontWeight={600} fontFamily={font}>
                  Profile
                </Typography>
              </Box>
              <Stack gap="10px">
                <Box  display={"flex"} justifyContent={"center"}>
                  <img src={ProfileImg} width={"100px"} />
                </Box>
                <TextField
                disabled
                  defaultValue={user.name || "0xNishchit"}
                  label="Username"
                  variant="outlined"
                  InputProps={{ style: { fontFamily: font } }}
                  InputLabelProps={{ style: { fontFamily: font } }}
                />
                <TextField
                disabled
                    defaultValue={user.email||"0xNishchit@gmail.com"}
                  label="Email"
                  variant="outlined"
                  InputProps={{ style: { fontFamily: font } }}
                  InputLabelProps={{ style: { fontFamily: font } }}
                />
                <Button
                  onClick={()=>{window.open("/login")}}
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
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    );
  };
  
  export default Home;
  