// define  contante usuarioAutentidado e rececbe o valor o valor do token que está armazenado 
//no localStorage
export const usuarioAutenticado = () => localStorage.getItem('usuario-gufos') !== null;
    //  Define a variável base64 que vai receber o payload do token
export const parseJwt = () => {
    var base64 = localStorage.getItem('usuario-gufos').split('.')[1];
     // converte 
    return JSON.parse(window.atob(base64))
}