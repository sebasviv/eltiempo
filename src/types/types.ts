export type SellerListType = {
  id: number;
  nombre: string;
  apellido: string;
  numero_identificacion: number;
  ciudad: {
    descripcion: string;
  };
};


export type SellerArrayType = {
  id: number;
  nombre: string;
  apellido: string;
  numero_identificacion: number;
  ciudad: string;
}