export default class Cl_Estudiante {
    constructor(cedula, NotaF) {
        this._cedula = 0;
        this._NotaF = 0;
    }

    //metodos

    setCedula(c) {
        this._cedula = c;
    }

    getCedula() {
        return this._cedula;
    }

    setNotaF(n) {
        this._NotaF = n;
    }

    getNotaF() {
        return this._NotaF;
    }
}