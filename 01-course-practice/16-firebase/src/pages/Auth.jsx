import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/Firebase";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = response.user;
      if (user) {
        alert("Kullanıcı başarıyla oluşturuldu!");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      alert("Kayıt hatası: " + error.message);
    }
  };

  const login = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      const user = response.user;

      if (user) {
        navigate("/");
      }
    } catch (error) {
      alert("Kayıt hatası: " + error.message);
    }
  };

  const signWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, provider);

      const user = response.user;

      if (user) {
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <Card sx={{ width: 380, p: 2, boxShadow: 3, borderRadius: 2 }}>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
        >
          <Typography
            variant="h5"
            component="h1"
            textAlign="center"
            fontWeight="bold"
          >
            Giriş Yap / Kaydol
          </Typography>

          <TextField
            label="E-posta"
            type="email"
            variant="outlined"
            size="small"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Şifre"
            type="password"
            variant="outlined"
            size="small"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Box sx={{ display: "flex", gap: 1.5, mt: 1 }}>
            <Button
              onClick={login}
              variant="contained"
              color="primary"
              fullWidth
            >
              Giriş Yap
            </Button>
            <Button
              onClick={register}
              variant="outlined"
              color="secondary"
              fullWidth
            >
              Kaydol
            </Button>
          </Box>

          <Divider>veya</Divider>
          <Button
            onClick={signWithGoogle}
            variant="outlined"
            color="error"
            fullWidth
            sx={{ textTransform: "none", fontWeight: "bold" }}
          >
            <GoogleIcon />
            Google ile Giriş Yap
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Auth;
