// importanción nombrada
import { changeLogo } from "./modules/changeLogo.js";
import { changePrincipalTitle } from "./modules/changePrincipalTitle.js";
import { aliceUser } from "./modules/literalObject.js";


changePrincipalTitle("title");

// Crear una función que se le pase el nombre de la imagen a mostrar (cat o dino)
// esta imagen es la que se debe mostrar en el elemento con id "logo"
changeLogo("cat.jpg");

console.log( aliceUser.getFullName() );
console.log( aliceUser );
console.log( aliceUser.stringify() );