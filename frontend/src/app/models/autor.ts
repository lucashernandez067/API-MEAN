export class Autor {

   constructor(
        public _id: string,
        public nombre: string,
        public apellido: string,
        public descripcion: string,
        public especialidad: string,
        public nacionalidad: string,
        public fecha_nacimiento: any,
        public fallecido: boolean,
        public fecha_fallecimiento: any,
        public image: string
   ){}
}
