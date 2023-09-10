import { IDepartamento } from '../departamento/departamento';
 export interface IFuncionario {
  Id: number;
  Foto: string;
  Nome: string;
  RG: number;
  DepartamentoId: IDepartamento;

}
