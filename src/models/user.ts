export interface UsuarioI{
  name: string;
  FechaNac: Date;
  cargo?: string; // el ? es para que sea opcional y n obligatrio
  salario: number;

  mostrarUsuario ():void
  edad(): number
}
