export default class Cl_Materia {
    constructor() {
        this._contEstudiante = 0;
        this._contAprobados = 0;
        this._mayorNota = 0;
        this._auxCE=0;
        this._porcAprobados = 0;
    }

    procesarEstudiantes(est) {
    
        this._contEstudiante++;

        if (est.getNotaF() >= 48) {
            this._contAprobados++;
        }
        if (est.getNotaF() >= mayorNota)
            mayorNota = est.getNotaF();
            auxCE=est.getCedula();
        {
    }
    }    

    porcAprobados() {
        return (this._contAprobados / this._contEstudiante) * 100;
    }


    
}
