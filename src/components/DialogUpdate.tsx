import {
  Button,
  Dialog,
  DialogContent,
  DialogProps,
  Slide,
  SlideProps,
  TextField,
  Typography,
  Theme,
  makeStyles,
} from "@material-ui/core";
import { fontFamily, fontSize } from "@mui/system";

import React from "react";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((_theme: Theme) => ({
  dialogContent: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    fontFamily: "cursive",
  },

  textTitle: {
    color: "orange",
    fontSize: 16,
    marginBottom: 20,
    marginTop: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  buttonsContained: {
    margin: 20,
  },
}));

interface Props {
  isOpen: boolean;
  isClose: any;
  mode: "update" | "create";
  dataInfo: Function;
  code: number;
}

const Transition = React.forwardRef<unknown, SlideProps>((props, ref) => (
  <Slide direction="up" timeout={10000} ref={ref} {...props} />
));

type FormInputs = {
//   codigo: string;
  nombre: string;
  apellido: string;
  numero_identificacion: number;
  ciudad: string;
};

const DialogUpdate = ({ isOpen, isClose, mode, dataInfo, code }: Props) => {
  const [maxWidth] = React.useState<DialogProps["maxWidth"]>("xs");

  const classes = useStyles();
  const [inputInfo, setInputInfo] = React.useState<FormInputs>({
    // codigo: "",
    nombre: "",
    apellido: "",
    numero_identificacion: 0,
    ciudad: "",
  });

  const handleForm = (event: any) => {
    setInputInfo({
        ...inputInfo,
        [event.target.name]: event.target.value,
      });
  }
  return (
    <Dialog
      fullWidth={true}
      maxWidth={maxWidth}
      open={isOpen}
      TransitionComponent={Transition}
    >
      <DialogContent className={classes.dialogContent}>
        {mode === "update" ? (
          <Typography className={classes.textTitle}>
            Actualizar datos del vendedor
          </Typography>
        ) : (
          <Typography className={classes.textTitle}>
            Crear nuevo vendedor
          </Typography>
        )}
        <form
        onChange={handleForm}
          onSubmit={(event) => {
            event.preventDefault();
            dataInfo(inputInfo, mode, code)
          }}
        >
          {/* <TextField
            required
            label={"Codigo"}
            id="margin-dense"
            margin="dense"
            variant="filled"
            color="primary"
            name="codigo"
            InputProps={{
              name: "codigo",
            }}
          /> */}
          <TextField
            required
            label={"Nombre"}
            id="margin-dense"
            margin="dense"
            variant="filled"
            color="primary"
            name="nombre"
            InputProps={{
              name: "nombre",
            }}
          />
          <TextField
            required
            label={"Apellido"}
            id="margin-dense"
            margin="dense"
            variant="filled"
            color="primary"
            name="apellido"
            InputProps={{
              name: "apellido",
            }}
          />
          <TextField
            required
            label={"Numero de Identificacion"}
            id="margin-dense"
            margin="dense"
            variant="filled"
            color="primary"
            name="numero_identificacion"
            InputProps={{
              name: "numero_identificacion",
            }}
          />
          <TextField
            required
            label={"ciudad"}
            id="margin-dense"
            margin="dense"
            variant="filled"
            color="primary"
            name="ciudad"
            InputProps={{
              name: "ciudad",
            }}
          />

          <div className={classes.buttonsContained}>
            <Button
              style={{ marginRight: 10 }}
              variant="contained"
              color="secondary"
              onClick={isClose}
            >
              Cancelar
            </Button>

            <Button
              style={{ marginLeft: 10 }}
              variant="contained"
              color="primary"
              type="submit"
            >
              {mode === "update" ? "Actualizar" : "Crear"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogUpdate;
