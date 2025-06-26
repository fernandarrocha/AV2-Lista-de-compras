import { TextField, Button, Stack, CircularProgress } from "@mui/material";

export default function FormProduto({
  produto,
  loading,
  onChange,
  onSubmit,
  onCancel,
}) {
  if (loading)
    return (
      <CircularProgress
        sx={{ display: "block", mx: "auto", my: 4, color: "#00000" }}
      />
    );

  return (
    <form onSubmit={onSubmit}>
      <Stack
        spacing={3}
        sx={{
          maxWidth: 500,
          mx: "auto",
          my: 4,
          p: 4,
          boxShadow: 3,
          borderRadius: 3,
          backgroundColor: "#D8B4F8", //header
        }}
      >
        <TextField
          label="Nome do Produto"
          name="nome"
          value={produto.nome}
          onChange={onChange}
          required
          fullWidth
          variant="outlined"
          InputLabelProps={{ style: { color: "#555555" } }}
          InputProps={{
            style: {
              color: "#555555",
              background: "#E6E6FA",
              borderRadius: 6,
            },
          }}
        />
        <TextField
          label="Preço"
          name="preco"
          type="number"
          value={produto.preco}
          onChange={onChange}
          required
          fullWidth
          variant="outlined"
          inputProps={{ step: "0.01", min: "0" }}
          InputLabelProps={{ style: { color: "#555555" } }}
          InputProps={{
            style: {
              color: "#555555",
              background: "#E6E6FA",
              borderRadius: 6,
            },
          }}
        />
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#E6E6FA",
              color: "#555555",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#555555",
              },
              fontWeight: "bold",
            }}
          >
            Salvar
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#fff",
              color: "#555555",
              "&:hover": {
                borderColor: "#757575",
                backgroundColor: "#E6E6FA",
                color: "#fff",
              },
              fontWeight: "bold",
            }}
            onClick={onCancel}
          >
            Cancelar
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
