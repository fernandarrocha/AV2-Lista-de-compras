import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Container,
  Box,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// LEGENDA DAS CORES DO PROJETO:
// #D8B4F8 - Azul principal: fundo do topo, borda do menu e botões ativos
// #e75480 - Rosa principal: fundo do menu de navegação, borda do topo
// #fff    - Branco: textos e ícones para contraste
// #212121 - Preto suave: texto dos botões ativos
// #bdbdbd - Cinza claro: cor antiga dos botões (substituir por azul/rosa se desejar)
// #e0e0e0 - Cinza hover (pode ser substituído por azul/rosa claro para manter a paleta)

export default function NavBar() {
  const location = useLocation();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#D8B4F8", // azul principal do projeto
        borderRadius: 3,
        boxShadow: "none",
        borderBottom: "1px solid #e75480", // rosa médio do projeto
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              ml: 2,
              color: "#555555", // mantém branco para contraste
              letterSpacing: 1,
            }}
          >
            Cadastro de Produtos
          </Typography>
          <Box
            sx={{
              background: "#ffd9e9", // rosa do projeto
              borderRadius: "14px",
              px: 2,
              py: 1,
              display: "flex",
              alignItems: "center",
              boxShadow: "0 2px 8px #0003",
              border: "1.5px solid #D8B4F8", // azul do projeto
            }}
          >
            <Stack direction="row" spacing={2} mr={2}>
              <Button
                color="secondary"
                variant={location.pathname === "/" ? "contained" : "outlined"}
                component={RouterLink}
                to="/"
                startIcon={<ListAltIcon />}
                sx={{
                  backgroundColor:
                    location.pathname === "/"
                      ? "#D8B4F8" // azul principal do projeto
                      : "transparent",
                  color: location.pathname === "/" ? "#212121" : "#555555",
                  borderColor: "#bdbdbd",
                  "&:hover": {
                    backgroundColor: "#e0e0e0", // cinza mais claro
                    color: "#212121",
                    borderColor: "#e0e0e0",
                  },
                  fontWeight: "bold",
                  borderWidth: 2,
                }}
              >
                Produtos
              </Button>
              <Button
                color="secondary"
                variant={
                  location.pathname === "/novo" ? "contained" : "outlined"
                }
                component={RouterLink}
                to="/novo"
                startIcon={<AddCircleOutlineIcon />}
                sx={{
                  backgroundColor:
                    location.pathname === "/novo" ? "#bdbdbd" : "transparent",
                  color: location.pathname === "/novo" ? "#212121" : "#555555",
                  borderColor: "#bdbdbd",
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                    color: "#212121",
                    borderColor: "#e0e0e0",
                  },
                  fontWeight: "bold",
                  borderWidth: 2,
                }}
              >
                Novo Produto
              </Button>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
