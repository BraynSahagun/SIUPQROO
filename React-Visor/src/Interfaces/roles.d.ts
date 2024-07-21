// Interfaces/roles.ts

export interface IBase {
    ID: number;
  }
  
  export interface IDirector extends IBase {
    Director: string;
  }
  
  export interface IAdministrador extends IBase {
    Administrador: string;
  }
  
  export interface ISecretario extends IBase {
    Secretario: string;
  }
  