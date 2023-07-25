# Estrategia de autenticacion por terceros
## _Felipe Antonio Aleman Arce_
### Ejercicio 9 entregable , Estrategia de autenticacion por terceros ( No Finalizada)
[![Coderhouse](https://res.cloudinary.com/hdsqazxtw/image/upload/v1570710978/coderhouse.jpg)](https://github.com/arceprogramando)

Estoy haciendo esto para poder tener un ejemplo de como hacer un readme a la hora de mostrar un proyecto

- Nuevas funcionalidades de los lenguajes ECMAScritpt✔️
- Manejo de archivos en JavaScript✔️
- Servidor con Express ✔️
- Router y Multer✔️
- Motores de plantillas✔️
- Primera practica integradora ((>‿◠)✌) ✔️
- Segunda Preentrega del Proyecto Final((>‿◠)✌) ✔️
- Login Por Formulario ✔️
- Estrategia de autenticacion por terceros (no finalizada)

## Desafio Entregable
#  Estrategia de autenticacion por terceros
### Desarrollar un servidor basado en express donde podamos hacer consultas a nuestro archivo de productos tengamos nuestras rutas
### Y manejemos nuestro multer para subir imagenenes desde handlebars, poder integrar socket.io , multer, mongodb, mongoose , mongoatlas
### Express Handlebars ,Router , Clases para trabajar con mongoose 
### Practicamos Indexacion 
### Login Por formulario 
### Agregamos estrategia por tercero (actual)

- Se instalarán las dependencias a partir del comando npm install ✔️
- Se echará a andar el servidor✔️
- Se creara las Rutas correspondientes
- Se revisará que el archivo YA CUENTE CON AL MENOS DIEZ PRODUCTOS CREADOS al - momento de su entrega, es importante para que los tutores no tengan que crear los productos por sí mismos, y así agilizar el proceso de tu evaluación.✔️
- Se corroborará que el servidor esté corriendo en el puerto 8080.✔️
- Se mandará a llamar desde el navegador a la url http://localhost:8080/products sin query, eso debe devolver todos los 10 productos.✔️
- Se mandará a llamar desde el navegador a la url http://localhost:8080/products?limit=5 , eso debe devolver sólo los primeros 5 de los 10 productos.✔️
- Se mandará a llamar desde el navegador a la url http://localhost:8080/products/2, eso debe devolver sólo el producto con id=2.✔️
- Se mandará a llamar desde el navegador a la url http://localhost:8080/products/34123123, al no existir el id del producto, debe devolver un objeto con un error indicando que el producto no existe.✔️
- Se generara la creacion del upload de multer para subir imagenes✔️
- Configurar nuestro proyecto para que trabaje con Handlebars y websocket.✔️
- Configurar el servidor para integrar el motor de plantillas Handlebars e instalar un servidor de socket.io al mismo.✔️
- Crear una vista “home.handlebars” la cual contenga una lista de todos los productos agregados hasta el momento ✔️
- demás, crear una vista “realTimeProducts.handlebars”, la cual vivirá en el endpoint “/realtimeproducts” en nuestro views router, ésta contendrá la misma lista de productos, sin embargo, ésta trabajará con websockets. ✔️
- Uso de sweetalert✔️
- Si se desea hacer la conexión de socket emits con HTTP, deberás buscar la forma de utilizar el servidor io de Sockets dentro de la petición POST. ¿Cómo utilizarás un emit dentro del POST?(sin terminar)❌❔
- Continuar sobre el proyecto que has trabajado para tu ecommerce y configurar los siguientes elementos:
- Agregar el modelo de persistencia de Mongo y mongoose a tu proyecto. ✔️
- Crear una base de datos llamada “ecommerce” dentro de tu Atlas, crear sus colecciones “carts”, “messages”, “products” y sus respectivos schemas. (falta crear schemas de message y carts) ✔️
- Separar los Managers de fileSystem de los managers de MongoDb en una sola carpeta “dao”. Dentro de dao, agregar también una carpeta “models” donde vivirán los esquemas de MongoDB. La estructura deberá ser igual a la vista en esta clase
Contener todos los Managers (FileSystem y DB) en una carpeta llamada “Dao” ✔️
- Reajustar los servicios con el fin de que puedan funcionar con Mongoose en lugar de FileSystem ✔️
- NO ELIMINAR FileSystem de tu proyecto. ✔️
- Implementar una vista nueva en handlebars llamada chat.handlebars, la cual permita implementar un chat como el visto en clase. Los mensajes deberán guardarse en una colección “messages” en mongo (no es necesario implementarlo en FileSystem). El formato es:  {user:correoDelUsuario, message: mensaje del usuario}✔️
- Corroborar la integridad del proyecto para que todo funcione como lo ha hecho hasta ahora.✔️

- Tendrás definidos todos los endpoints para poder trabajar con productos y carritos.✔️
- Profesionalizar las consultas de productos con filtros, paginación y ordenamientos ✔️
- Profesionalizar la gestión de carrito para implementar los últimos conceptos vistos.✔️
- Permitir comentarios en el archivo
- La lógica del negocio que ya tienes hecha no debería cambiar, sólo su persistencia. 
- Los nuevos endpoints deben seguir la misma estructura y lógica que hemos seguido. ✔️
(Algunas cosas quedaron por terminar)
- Con base en nuestra implementación actual de productos, modificar el método GET / para que cumpla con los siguientes puntos:
- Deberá poder recibir por query params un limit (opcional), una page (opcional), un sort (opcional) y un query (opcional) ✔️
- limit permitirá devolver sólo el número de elementos solicitados al momento de la petición, en caso de no recibir limit, éste será de 10. ✔️
- page permitirá devolver la página que queremos buscar, en caso de no recibir page, ésta será de 1 ✔️
- query, el tipo de elemento que quiero buscar (es decir, qué filtro aplicar), en caso de no recibir query, realizar la búsqueda general ✔️
  sort: asc/desc, para realizar ordenamiento ascendente o descendente por precio, en caso de no recibir sort, no realizar ningún ordenamiento ✔️
- Se deberá poder buscar productos por categoría o por disponibilidad, y se deberá poder realizar un ordenamiento de estos productos de manera ascendente o descendente por precio.✔️
- Además, agregar al router de carts los siguientes endpoints:
  DELETE api/carts/:cid/products/:pid deberá eliminar del carrito el producto seleccionado. ✔️
  PUT api/carts/:cid deberá actualizar el carrito con un arreglo de productos con el formato especificado arriba. ✔️
  PUT api/carts/:cid/products/:pid deberá poder actualizar SÓLO la cantidad de ejemplares del producto por cualquier cantidad pasada desde req.body ✔️
- DELETE api/carts/:cid deberá eliminar todos los productos del carrito ✔️
- Esta vez, para el modelo de Carts, en su propiedad products, el id de cada producto generado dentro del array tiene que hacer referencia al modelo de Products. Modificar la ruta /:cid para que al traer todos los productos, los traiga completos mediante un “populate”. De esta manera almacenamos sólo el Id, pero al solicitarlo podemos desglosar los productos asociados. ✔️
- Crear una vista en el router de views ‘/products’ para visualizar todos los productos con su respectiva paginación. Cada producto mostrado puede resolverse de dos formas: ✔️
- Llevar a una nueva vista con el producto seleccionado con su descripción completa, detalles de precio, categoría, etc. Además de un botón para agregar al carrito.
- Contar con el botón de “agregar al carrito” directamente, sin necesidad de abrir una página adicional con los detalles del producto.(no se como hacer) ❌❔
- Además, agregar una vista en ‘/carts/:cid (cartId) para visualizar un carrito específico, donde se deberán listar SOLO los productos que pertenezcan a dicho carrito.  ✔️

Tutor : 
- los productos los tenes en /realtimeproducts... cuando en la presentación de la entrega dice que tiene que estar en /products ✔️


- y te falta la vista /carts/:id 
(Falta arreglar tema _id guardado como objeto de productos visible y no id de referenca )✔️



### Consignas
#### Aspectos a incluir

- Debera contar con todas las vistas realizadas en el hands on lab, asi tambien como las rutas de router para procesar el registro y el login.✔️
- Una vez completado el login , realizar la redireccion directamente a la vista de productos.✔️
- Agregar a la vista de productos un mensaje de bienvenida con los datos del usuario.✔️
- Agregar un sistema de roles de manera que si colocamos el login como correo adminCoder@coder.com y la contraseña adminCod3r123, el usuario de la sesion ademas tenga un campo.✔️
- Todos los usuarios que no sean admin debera contar con un rol "usuario".✔️
- Implementar boton de "logout" para destruir la sesion y redirigir a la vista de login ✔️
- Al cargar el proyecto, éste deberá comenzar en la pantalla de login ✔️
- El proceso de registro deberá guardar en la base de datos al usuario ✔️
Se regresará al proceso de login y se colocarán las credenciales de manera incorrecta, esto para probar que no se pueda avanzar a la siguiente pantalla. ✔️
Posteriormente, se colocarán las credenciales de manera correcta, esto para corroborar que se cree una sesión correctamente y que se haga una redirección a la vista de productos. ✔️
- La vista de productos tendrá en una parte de arriba de la página el mensaje “Bienvenido” seguido de los datos del usuario que se haya logueado (NO mostrar password). Es importante que se visualice el “rol” para ver que aparezca “usuario” o “user”✔️
- Se presionará el botón de logout y se destruirá la sesión, notando cómo nos redirige a login. ✔️
Se ingresarán las credenciales específicas de admin indicadas en las diapositivas, el login debe redirigir correctamente y mostrar en los datos del rol: “admin” haciendo referencia a la correcta gestión de roles. ✔️
- Al no tener un usuario, primero se creará un usuario, para esto, la pantalla de login deberá tener un link de redirección “Regístrate” ✔️
- Se revisará que edmin NO viva en base de datos, sino que sea una validaciól an que se haga de manera interna en el código.
✔️
> Espero que Los ejercicios se encuentren
> resueltos de buena forma y espero 
> que lo haya solucionado de forma optima

## (Nos encontramos aca ) Refactor a nuestro login
- Al cargar el proyecto este debera comenzar en la pantalla de login ✔️
- Al no tener un usuario registrado aun , se procedera a hacer un registro, por lo que la pantalla de login debe tener un link de "registrate", el cual nos redirecione a la pantalla de registro. ✔️
- Al registrarme con los datos solicitados , se revisara la contraseña guardada en la base de datos, cuidando que esta este correctamente hasheada.✔️
- Se realizara el proceso de login con las mismas credenciales con las que se registro el usuario, corroborando que el login funcione correctamente y
redirija a la pantalla principal ✔️
- Ademas , la pantalla de login debera contar con un boton "entrar con Github" el cual al hacer click nos permita entrar directamente a la pagina con los datos obtenidos de Github.✔️
- Se corroborara en la base de datos que el nuevo usuario "creado con Github" cuente con un password vacio ✔️

### Estas son cosas que me faltan arreglar
¿Preguntas para tutor? o para arreglar despues
-  Si se desea hacer la conexión de socket emits con HTTP, deberás buscar la forma de utilizar el servidor io de Sockets dentro de la petición POST. ¿Cómo utilizarás un emit dentro del POST?(sin terminar) ❔
- Contar con el botón de “agregar al carrito” directamente, sin necesidad de abrir una página adicional con los detalles del producto.(no se como hacer) ❔
- Me falta practicar aggregate a mis queries (minuto 50 clase mongo avanzado 2 esta la explicacion)
- Las rutas para renderizar tengo que acomodarlas con la pagination  (minuto 23 parte 2 mongo avanzado 2 esta la explicacion )

## Herramientas
Mi repositorio publico es  [arceprogramando][arceprogramando]
en github.

Para realizar este Ejercicio

- [Coderhouse]  - Se vieron las clases de coderhouse Correspondientes!
- [node.js] - Se uso Node Js
- [Express] - Se uso la libreria Express de Node
- [Multer] - Se instalo multer para poder manejar archivo de imagen
- [Nodemon] - Se instalo globalmente Nodemon Se instalo como paquete de desarrollo 
- [express-handlebars] - Se instalo el motor de plantillas express-handlebars
- [socket.io] - Se instalo socket.io para trabajar con websocket dentro de nuestro servidor
- [sweetalert2] - Importo desde de su CDN link 
- [mongoose] - Utilizo mongoose para trabajar las rutas de mi mongo atlas , y pasar mi filesistem a una base de datos
- [eslint] - Estoy usando eslint como dependencia de desarrollo
- [cors] - Para que funcione como middleware que especifica los origenes permitidos, como servicios externos(no se tanto su funcionamiento)
- [bootstrap] - Para poder hacer mi representacion en handlebars un poco mas atractiva
- [cross-env] - Para ejecutar scripts que establecen y utilizan variables de entorno en diferentes plataformas
- [dotenv] - para cargar variables de entorno desde archivos de configuración locales.
- [mongoose-paginate-v2] - para controlar la paginacion de el proyecto
- [cookie-parser] - Para el control de las cookies
- [express-session]- Para el control de las sesiones activas
- [session-file-store] - Para el guardado de archivos de sessiones en local
- [connect-mongo] - Para efectuar la configuracion de session store con la url de mongo
- [bcrypt] - Para el manejo de hasheos 
- [passport] - El core de passport.js para poder implementar diferentes tipos de estrategias de logeo
- [passport-local] - Utilizacion de estrategia de logeo local
- [passport-github2] - Para poder utilizar los requitos del auth de github con passport
- [jsonwebtoken] - Para cambiar mi session a jsonwebtoken (no funcional en esta)

## Installation

Express and nodemon requires [Node.js](https://nodejs.org/) to run.

Primero instalamos de [Node.js](https://nodejs.org/)  su pagina oficial.

Inicializamos el proyecto 

```sh
npm i

```

Para hacer el proyecto fui por los siguientes pasos 


Primero instale de [Nodemon](https://nodemon.io) 
Yo lo instale como dependencia de desarrollo

```sh
npm install nodemon -D

```

### Todos los paquetes en 1 
```sh
npm install cors dotenv express express-handlebars express-routemap mongoose multer socket.io cookie-parser express-session session-file-store connect-mongo b-crypt passport passport-local passport-github2 jsonwebtoken

npm install crossenv nodemon -D

npm init @eslint/config

```

### Fin de todos los paquetes en 1 

Segundo instale [eslint](https://eslint.org) 
para una mejor escritura de mi codigo siguiendo la practica de el modelo de airbnb tambien se instalo como dependencia de desarrollo

```sh
npm init @eslint/config

```


Tercero instalamos [express](http://expressjs.com)

```sh
npm install express

```
Cuarto agregamos a nuestro package.json


```sh
"type": "module",

```

Quinto instalamos [multer](https://www.npmjs.com/package/multer)

```sh
npm install multer

```
Sexto instalamos [socket.io](https://socket.io) para manejar los websocket entre cliente-servidor(aun no le se tanto)


Septimo instalamos [express-hamdlebars](https://www.npmjs.com/package/express-handlebars)

```sh
npm install express-handlebars

```

Octavo instalamos [mongoose](https://www.npmjs.com/package/mongoose) 

```sh
npm install mongoose

```

Noveno instalamos [cross-env](https://www.npmjs.com/package/cross-env) ejecutar scripts que establecen y utilizan variables de entorno en diferentes plataformas


```sh
npm install cross-env

```

Decimo instalamos [dotenv](https://www.npmjs.com/package/dotenv) para cargar variables de entorno desde archivos de configuración locales.


```sh
npm install dotenv

```

Undécimo instalamos [express-routemap](https://www.npmjs.com/package/express-routemap) para poder mapear nuestro conjunto de rutas a utilizar o en uso


```sh
npm install express-routemap

```

Duodécimo instalamos [cookie-parser](https://www.npmjs.com/package/cookie-parser) que se utiliza para analizar las cookies en las solicitudes entrantes y hacerlas accesibles en req.cookies.

```sh
npm install cookie-parser

```

Decimotercero instalamos [express-session](https://www.npmjs.com/package/express-session) que se utiliza para manejar sesiones en Express y permite almacenar y acceder a datos de sesión en cada solicitud a través de req.session

```sh
npm install express-session

```
Decimocuarto instalamos [session-file-store](https://www.npmjs.com/package/session-file-store) para manejar como archivos en session las sesiones conectadas a base de datos

```sh
npm install session-file-store

```

DecimoQuinta instalamos [connect-mongo](https://www.npmjs.com/package/connect-mongo) que es una dependencia importante para conectar las sesiones de Express con MongoDB
```sh
npm install connect-mongo

```
DecimoSexta instalamos [b-crypt](https://www.npmjs.com/package/bcrypt) dependencia para el manejo del hash de las contraseñas

```sh
npm install b-crypt

```
decimoséptimo instalamos [passport](https://www.npmjs.com/package/passport) core passport de creacion de diferentes forma de logearse
```sh
npm install passport

```
decimooctavo instalamos [passport-local](https://www.npmjs.com/package/passport-local)  una estrategia de autenticación que se utiliza con Passport para autenticar a los usuarios utilizando credenciales locales, como nombre de usuario y contraseña
```sh
npm install passport-local

```
decimonoveno instalamos [passport-github2](https://www.npmjs.com/package/passport-github2) para manejar la estrategia de creacion de usuarios con las herramientas e informacion que proporciona github en su conexion con passport

```sh
npm install passport-github2

```
Veinte instalamos [jsonwebtoken](https://jwt.io) para el manejo de json web token (no utilizada en esta entrega)

```sh
npm install jsonwebtoken

```


```
http://localhost:8080/ 
http://localhost:8080/products
http://localhost:8080/chat
http://localhost:8080/carts/:id
http://localhost:8080/register
http://localhost:8080/profile
http://localhost:8080/api/products
http://localhost:8080/api/products/:pid
[http://localhost:8080/api/products?limit=n?sort="asc"|"desc"?page=n]
http://localhost:8080/api/carts
http://localhost:8080/api/carts/:cid/product/:pid 
http://localhost:8080/api/carts/:cid
http://localhost:8080/api/chat
http://localhost:8080/api/session/
http://localhost:8080/api/session/register
http://localhost:8080/api/session/login
http://localhost:8080/api/session/welcome
http://localhost:8080/api/session/logout


```



  [Coderhouse]: <https://plataforma.coderhouse.com/cursos/43335/programacion-backend>
  [arceprogramando]: <https://github.com/arceprogramando>
  [node.js]: <http://nodejs.org>
  [express]: <http://expressjs.com>
  [Nodemon]: <https://nodemon.io>
  [Multer]:<https://www.npmjs.com/package/multer>
  [express-handlebars]:<https://www.npmjs.com/package/express-handlebars>
  [socket.io]:<https://socket.io/docs/v4/>
  [sweetalert2]:<https://sweetalert2.github.io/v10.html>
  [mongoose]:<https://www.npmjs.com/package/mongoose>
  [eslint]:<https://eslint.org>
  [cors]:<https://www.npmjs.com/package/cors>
  [dotenv]:<https://www.npmjs.com/package/dotenv>
  [cross-env]:<https://www.npmjs.com/package/cross-env>
  [express-routemap]:<https://www.npmjs.com/package/express-routemap>
  [bootstrap]:<https://getbootstrap.com>
  [mongoose-paginate-v2]:<https://www.npmjs.com/package/mongoose-paginate-v2>
  [cookie-parser]:<https://www.npmjs.com/package/cookie-parser>
  [express-session]:<https://www.npmjs.com/package/express-session>
  [session-file-store]:<https://www.npmjs.com/package/session-file-store>
  [connect-mongo]:<https://www.npmjs.com/package/connect-mongo>
  [b-crypt]:<https://www.npmjs.com/package/bcrypt>
  [passport]:<https://www.npmjs.com/package/passport>
  [passport-local]:<https://www.npmjs.com/package/passport-local>
  [passport-github2]:<https://www.npmjs.com/package/passport-github2>
  [jsonwebtoken]:<https://jwt.io>
