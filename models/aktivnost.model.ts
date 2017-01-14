export class Aktivnost{
    constructor(
        public aktivnostiId: number,
        public naziv: string,
        public opis: string,
        public periodikeOdvijanjaId: number,
        public satiTrajanja: number,
        public procesiId: number
    ){

    }
}