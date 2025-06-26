import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  CircularProgress,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import produtoService from "../services/produtoService";

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const carregarProdutos = async () => {
    setLoading(true);
    try {
      const lista = await produtoService.listar();
      setProdutos(lista);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Deseja realmente excluir este produto?")) {
      await produtoService.excluir(id);
      carregarProdutos();
    }
  };

  if (loading)
    return (
      <CircularProgress
        sx={{ display: "block", mx: "auto", my: 4, color: "#424242" }}
      />
    );

  return (
    <TableContainer
      component={Paper}
      elevation={3}
      sx={{
        background: "#ffd9e9",
        borderRadius: 3,
        boxShadow: 3,
        my: 4,
        maxWidth: 900,
        mx: "auto",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          m: 2,
          textAlign: "center",
          fontWeight: "bold",
          color: "#555555",
        }}
      >
        Lista de Produtos
      </Typography>
      <Table
        sx={{
          minWidth: 650,
          background: "#ffd9e9",
          borderRadius: 3,
          "& .MuiTableCell-root": {
            border: "1px solid #D8B4F8",
            color: "#555555",
            background: "#ffd9e9",
          },
          "& .MuiTableHead-root .MuiTableCell-root": {
            background: "#D8B4F8",
            color: "#555555",
            fontWeight: "bold",
          },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Preço</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {produtos.map((produto) => (
            <TableRow key={produto.id}>
              <TableCell align="center">{produto.id}</TableCell>
              <TableCell align="center">{produto.nome}</TableCell>
              <TableCell align="center">
                R$ {produto.preco.toFixed(2)}
              </TableCell>
              <TableCell align="center">
                <IconButton
                  color="primary"
                  onClick={() => navigate(`/editar/${produto.id}`)}
                  sx={{ color: "#D8B4F8" }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => handleDelete(produto.id)}
                  sx={{ color: "#f87171" }}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          {produtos.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} align="center">
                Nenhum produto cadastrado.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
