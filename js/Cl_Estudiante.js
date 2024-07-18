export default class Cl_Estudiante {
    constructor(c, nF) {
        this.cedula = c;
        this.notaF = nF;
    }
    // métodos set y get
    set cedula(c) {
        this._cedula = c;
    }
    set notaF(nF) {
        this._notaF = nF;
    }
    get cedula() {
        return this._cedula;
    }
    get notaF() {
        return this._notaF;
    }
}