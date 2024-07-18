export default class Cl_Materia {
    constructor() {
        this._contEstudiante = 0;
        this._contAprobados = 0;
        this._mayorNota = 0;
        this._cedulaMayorNota = null;
    }

    procesarEstudiantes(est) {
        //contamos todos los estudiantes
        if (est.notaF() < 0) {
            throw new Error('La nota no puede ser negativa');
        }
        this._contEstudiante++;
//contamos los aprobados
        if (est.notaF >= 48) {
            this._contAprobados++;
        }
        if (est.notaF > this._mayorNota) {
            this._mayorNota = est.notaF;
            this._cedulaMayorNota = est.cedula;
        }
    }

    calcPorcAprobados() {
        //calculamos el porcentaje
        return (this._contAprobados / this._totalEstudiantes) * 100;
    }
}
    
/*    procesarEstudiantes(est) {
        this._contEstudiante++;

        if ( est.notaF() >= 48 ) {
            this._contAprobados++;
        }
        if (est.notaF() > this.mayorNota) {
            this._mayorNota = est.notaF();
            this._cedulaMayorNota = est.cedula();
        }    
    }

    calcPorcAprobados() {
        return (this._contAprobados / this._contEstudiante) * 100;
    }  
}
    */
