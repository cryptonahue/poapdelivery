import { API_URL } from "../../constants/env";
import { useEffect, useState, useContext, useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { config, defaultValues } from "../../config/poap";
import { useDropzone } from "react-dropzone";
import Page from "@/components/Page";
import Spacing from "@/components/Spacing";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import LinearProgress from "@mui/material/LinearProgress";
import { useAuth } from "@/context/authContext";
import { create as createPoapFromUser } from "../../services/poap";
import getData from "../../services/getData";
import validateDate from "@/utils/validateDate";
import ReCAPTCHA from "react-google-recaptcha";


const CreatePoap = () => {
  const {
    initialState: { user },
  } = useAuth();

  const {
    register,
    handleSubmit,handleClick,
    formState: { isSubmitting },
    watch,
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(config),
    defaultValues,
  });

  const recaptchaRef = useRef(null);
  const [state, setState] = useState([]);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [statusMessage, setStatusMessage] = useState({
    open: false,
    type: "warning",
    message: "",
  });

  const initialState = async () => {
    if (user) {
      const response = await getData(`${API_URL}/poaps?author=${user.email}`);
      setState(response);
    }
  };

  useEffect(() => {
    initialState();
  }, [user]);

  const onSubmit = async (data) => {
    await createPoapFromUser(
      { captchaToken, ...data },
      user,
      setStatusMessage,
      setCaptchaToken,
      recaptchaRef,
      reset
    );
    await initialState();
  };

  // DropZone
  const onDrop = useCallback((acceptedFiles) => {
    setValue("file", acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  function onChange(value) {
    setCaptchaToken(value);
  }

  let values = watch();

  return (
    <Page title="Crear mi POAP">
      <Spacing space="20" />
      <Typography variant="h4">Gestión POAP</Typography>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="custom_Dropzone" {...getRootProps()}>
          <input {...register("file")} {...getInputProps()} />
          {isDragActive ? (
            <div>Arrastre y suelte...</div>
          ) : (
            <div>
              Arrastre y suelte el archivo
            </div>
          )}
          {!isDragActive && values.file && values.file.length > 0 && (
            <p>{values.file[0].name}</p>
          )}
        </div>
        <br />
        <input
          type="text"
          name="keyword"
          placeholder="Ingresar palabras clave"
          {...register("keyword")}
          className="input"
          style={{ width: "300px" }}
        />
        {isSubmitting && (
          <>
            <Spacing space="18" />
            <LinearProgress color="secondary" />
          </>
        )}

        {!user && (
          <>
            <Spacing space="18" />
            <div className="ini">
            <Alert severity="warning" onClick={handleClick}>Inicia sesión para crear POAP</Alert>
            
            </div>
          </>
        )}

        {statusMessage.open && (
          <>
            <Spacing space="18" />
            <div className="ini">
            <Alert severity={statusMessage.type}>{statusMessage.message}</Alert>
            </div>
          </>

        )}

        <Spacing space="18" />
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6Lf5xGImAAAAAM5BPbd3aRsFzCUQDMFQ9QTcT_nE"
          onChange={onChange}
        />
        <Spacing space="18" />
        <Button
          type="submit"
          variant="outlined"
          color="inherit"
          className="enviar_poap"
          
          disabled={isSubmitting || (!user && "true")}
        >
          Insertar POAP
        </Button>
      </form>
      <Spacing space="25" />
      <div className="table1">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Autor</TableCell>
              <TableCell align="right">Fecha</TableCell>
              <TableCell align="right">Creados</TableCell>
              <TableCell align="right">Disponibles</TableCell>
              <TableCell align="right">Palabras secretas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.length > 0 ? (
              state.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.author}
                  </TableCell>
                  <TableCell align="right">
                    {validateDate(
                      row.createdAt ? row.createdAt : row.created_at
                    )}
                  </TableCell>
                  <TableCell align="right">{row.poaps_created}</TableCell>
                  <TableCell align="right">
                    {row.linkpoaps ? row.linkpoaps.length : "Todos"}
                  </TableCell>
                  <TableCell align="right">{row.keyword}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableCell align="right">No hay POAPS creados</TableCell>
            )}
          </TableBody>
        </Table>
      </TableContainer>

    <div>
    {state.length > 0 ? (
              state.map((row) => (
                <div
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                  }}
                >
                  <div component="th" scope="row">
                    {row.author}
                  </div>
                  <div align="right">
                    {validateDate(
                      row.createdAt ? row.createdAt : row.created_at
                    )}
                  </div>
                  <div align="right">{row.poaps_created}</div>
                  <div align="right">
                    {row.linkpoaps ? row.linkpoaps.length : "Todos"}
                  </div>
                  <div align="right">{row.keyword}</div>
                </div>
              ))
            ) : (
              <div align="right">No hay POAPS creados</div>
            )}
      </div>
      </div>
    </Page>
  );
};

export default CreatePoap;
