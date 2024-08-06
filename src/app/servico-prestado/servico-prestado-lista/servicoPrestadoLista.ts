import { Cliente } from "../../clientes/clientes-form/cliente";

export class ServicoPrestadoLista{
    descricao?:string;
    valor?:number;
    data?: string;
    cliente!:Cliente;
}