import React, {
  ForwardedRef,
  ReactComponentElement,
  ReactElement,
  ReactSVGElement,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateSellerAC,
  DeleteSellerAC,
  SellersActionCreator,
  UpdateSellerAC,
} from "../Redux/ActionCreators/SellersActionCreator";
import { SellerSelector } from "../Redux/slices";
import MaterialTable, { Column } from "@material-table/core";
import { SellerArrayType, SellerListType } from "../types/types";
import { Delete, Cached } from "@material-ui/icons";
import DialogUpdate from "./DialogUpdate";
import { Button } from "@material-ui/core";
import { CreateByUser } from "../Services/CrudService";

type DialogModeType = {
  isOpen: boolean;
  mode: "update" | "create";
  code: number;
};

const Table = () => {
  const dispatch = useDispatch();

  const { sellerList } = useSelector(SellerSelector);
  const [updateDialog, setUpdateDialog] = React.useState<DialogModeType>({
    isOpen: false,
    mode: "create",
    code: 0,
  });

  React.useEffect(() => {
    dispatch(SellersActionCreator());
  }, []);

  React.useEffect(() => {
    insertInfo();
  }, [sellerList]);

  const columns: Array<Column<SellerArrayType>> = [
    { title: "Codigo", field: "id" },
    { title: "Nombre", field: "nombre" },
    { title: "Apellido", field: "apellido" },
    { title: "Numero de Identificacion", field: "numero_identificacion" },
    { title: "Ciudad", field: "ciudad" },
  ];

  const data: Array<SellerArrayType> = [];

  const insertInfo = () => {
    if (sellerList) {
      sellerList.map((item: SellerListType) => {

        let newItem:SellerArrayType = {
          id: item.id,
          nombre: item.nombre,
          apellido: item.apellido,
          numero_identificacion: item.numero_identificacion,
          ciudad: item.ciudad.descripcion
        }
        data.push(newItem);
      });
    }

    return data;
  };

  const selectRow = (data: any, action: string) => {
    let newAction: SellerListType = {
      id: data.id,
      nombre: data.nombre,
      apellido: data.apellido,
      numero_identificacion: data.numero_identificacion,
      ciudad: {
        descripcion: data.ciudad
      }
    };

    switch (action) {
      case "delete":
        return dispatch(DeleteSellerAC(newAction.id));

      case "update":
        return setUpdateDialog({
          isOpen: true,
          mode: "update",
          code: newAction.id,
        });
    }
    // setSelectElement(newAction)
  };

  const UpdateCreateSeller = (
    data: any,
    mode: any,
    code: number
  ) => {
    let newItem: SellerListType = {
      id: code,
      nombre: data.nombre,
      apellido: data.apellido,
      numero_identificacion: data.numero_identificacion,
      ciudad: {
        descripcion: data.ciudad
      }
    };

    switch (mode) {
      case "update": {
        dispatch(UpdateSellerAC(code, newItem));
        return setUpdateDialog({ isOpen: false, mode: "create", code: 0 });
      }
      case "create": {
        dispatch(CreateSellerAC(newItem));
        return setUpdateDialog({ isOpen: false, mode: "create", code: 0 });
      }
    }
  };

  return (
    <>
      <MaterialTable
        columns={columns}
        data={insertInfo()}
        actions={[
          {
            icon: () => <Delete />,
            tooltip: "Borrar usuario",
            onClick: (event, rowData) => selectRow(rowData, "delete"),
          },
          {
            icon: () => <Cached />,
            tooltip: "Actualizar Usuario",
            onClick: (event, rowData) => selectRow(rowData, "update"),
          },
        ]}
      />
      <Button
        style={{ marginTop: 20 }}
        variant="contained"
        color="primary"
        onClick={() =>
          setUpdateDialog({ isOpen: true, mode: "create", code: 0 })
        }
      >
        Agregar nuevo vendedor
      </Button>
      <DialogUpdate
        isOpen={updateDialog.isOpen}
        isClose={() =>
          setUpdateDialog({ isOpen: false, mode: "create", code: 0 })
        }
        mode={updateDialog.mode}
        dataInfo={UpdateCreateSeller}
        code={updateDialog.code}
      />
    </>
  );
};

export default Table;
