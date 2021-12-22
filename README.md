<h1>DESAFíO GOCLOUD</h1>
<h2>Desarrollador Full Stack ReactJS</h2>

<p>El objetivo es: Crear un parte modificada de nuestro producto principal OMNI, a través de sólo 2
pantallas.</p>

<p>El desafío está dividido en tres secciones:</p>

1. Full Stack. Uso de ReactJS para resolver el problema, utilización de librerías y herramientas.
2. Diseño. Implementación de las líneas de diseño adjuntos al desafío.
3. Infraestructura. Utilización de AWS para la implementación del resultado final 


La primera pantalla es el Login, a través de la cual el usuario puede ingresar a la plataforma utilizando su
nombre de usuario y contraseña.
La segunda pantalla, es un pequeño detalle con una lista e información de las llamadas realizadas por
uno de nuestros asistentes virtuales.


Puntos Importantes.
● La pantalla Login debe estar en la ruta /login.
● La pantalla Detalle debe estar en la ruta raíz (/).
● Se debe manejar los estados ingresado y no ingresado.
● La pantalla Detalle no debe poder revisarse si es que el usuario no ha ingresado sus
credenciales, siendo re-enviado a la pantalla de Login.


Tecnologías a utilizar.
● ReactJS, react-router, redux y/o contexts y hooks para el manejo del ciclo de vida de la
aplicación en el FrontEnd.
● NodeJS (Typescript), para el BackEnd y las conexiones con servicios de Amazon Web Services.
● Se debe implementar la versión final en AWS EC2 o en caso contrario, usar hosting tradicional.
● Uso de AWS DynamoDB para el manejo de Base de Datos, usuarios y detalle.
● Uso de AWS Cognito User Pool o DynamoDB para el manejo de credenciales. En caso contrario
puedes utilizar MongoDB.
● Se debe utilizar Typescript tanto formato ts como tsx.
● La Aplicación Web se evaluará sólo en su versión de escritorio, dejando de lado la versión móvil.