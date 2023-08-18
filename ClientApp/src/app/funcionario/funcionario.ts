import { IDepartamento } from '../departamento/departamento';
 export interface IFuncionario {
  id: number;
  nome: string;
  foto: string;
  rg: number;
  Departamento: IDepartamento;

}
