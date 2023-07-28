import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [userInformation, setUserInformation] = useState({
    email: "",
    password: "",
  });

  function setUserEmail(event: ChangeEvent<HTMLInputElement>) {
    setUserInformation({ ...userInformation, email: event.target.value });
  }

  function setUserPassword(event: ChangeEvent<HTMLInputElement>) {
    setUserInformation({ ...userInformation, password: event.target.value });
  }

  const navigate = useNavigate();

  const onClickHandler = () => {
    const endpoint = "http://localhost:8000/users";

    axios
      .post(endpoint, userInformation)
      .then((res) => {
        if (res.status === 200) {
          navigate("/login");
        }
        console.log(res.data);
      })
      .catch((error) => console.log(error));
    setUserInformation({ email: "", password: "" });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={onClickHandler}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={userInformation.email}
                onChange={setUserEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={userInformation.password}
                onChange={setUserPassword}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
