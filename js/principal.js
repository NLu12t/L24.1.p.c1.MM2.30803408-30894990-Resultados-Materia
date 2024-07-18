/***
 *   RESULTADOS MATERIA
 * Sea la información de varios estudiantes: cédula y nota final. 
 * Se sabe que los estudiantes aprueban con 48Ptos.
 * 
 * Se desea procesar a varios estudiantes y determinar la siguiente estadística: 
 * porcentaje de aprobados y 
 * cédula de alguno de los mejores estudiantes.
 * 
 * Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 
 * 888 (60Ptos), 777 (50Ptos), 999 (40Ptos), 333 (90Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y 222 (60Ptos), 
 * 
 * la salida que se espera es como la siguiente:
 * Porcentaje de aprobados: 75%
 * Cédula de uno de los mejores estudiantes: 333
*/

    import Cl_Estudiante from "./Cl_Materia";
    import Cl_Materia from "./Cl_Estudiante";

    //instanciamos al objeto est
    let est1 = new Cl_Estudiante(888, 60);
    let est2 = new Cl_Estudiante(777, 50);
    let est3 = new Cl_Estudiante(999, 40);
    let est4 = new Cl_Estudiante(333, 90);
    let est5 = new Cl_Estudiante(111, 30);
    let est6 = new Cl_Estudiante(666, 90);
    let est7 = new Cl_Estudiante(444, 48);
    let est8 = new Cl_Estudiante(222, 60);

    let Cl_Materia = new Cl_Materia();
    Cl_Materia.procesarEstudiantes(est1);
    Cl_Materia.procesarEstudiantes(est2);
    Cl_Materia.procesarEstudiantes(est3);
    Cl_Materia.procesarEstudiantes(est4);
    Cl_Materia.procesarEstudiantes(est5);
    Cl_Materia.procesarEstudiantes(est6);
    Cl_Materia.procesarEstudiantes(est7);
    Cl_Materia.procesarEstudiantes(est8);

    //mostramos los resultados
    let salida = document.getElementById("salida");
    salida.innerHTML += "Porcentaje de aprobados: " + Cl_Materia.porcAprobados() + "%<br>";
    salida.innerHTML += "Cedula de uno de los mejores estudiantes: " + Cl_Materia.getAuxCE() + "<br>";
