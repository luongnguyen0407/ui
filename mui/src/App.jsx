import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
  AppBar,
  Button,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const theme = createTheme({
  palette: {
    primary: {
      light: "#dce775",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="static" sx={{ width: "100%" }}>
          <Toolbar>
            <Typography sx={{ color: "primary.light", flexGrow: 1 }}>
              MUI-5
            </Typography>
            <Button sx={{ color: "secondary.main" }}>Login</Button>
            <Button sx={{ color: "primary.contrastText" }}>LogOut</Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Container maxWidth="xl">
        <Box sx={{ height: "25%", marginTop: 5 }} textAlign="center">
          <Typography variant="h1" gutterBottom>
            Hello world
          </Typography>
          <Typography variant="h3">Hello world With h3</Typography>
          <Typography variant="subtitle2" align="right" mt={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            dicta non quibusdam, repellendus iste quod a nobis repellat
            consequuntur ipsam est iusto at tempore explicabo nulla sint
            sapiente neque commodi!
          </Typography>
        </Box>
      </Container>
      <Grid container spacing={5}>
        <Grid item xs={8}>
          <Typography sx={{ border: 1 }}>xs=8</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ border: 1 }}>xs=4</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ border: 1 }}>xs=4</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography sx={{ border: 1 }}>xs=8</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
