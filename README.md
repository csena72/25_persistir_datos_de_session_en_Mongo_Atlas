# Desafío: Persistir datos de session en Mongo Atlas

### >> Consigna: 

Siguiendo nuestro sobre el entregable de la clase anterior, vamos a persistir las sesiones de usuario en Mongo Atlas.

- Verificar que en los reinicios del servidor, no se pierdan las sesiones activas de los clientes.

- Mediante el cliente web de Mongo Atlas, revisar los id de sesión 
correspondientes a cada cliente y sus datos.

- Borrar una sesión de cliente en la base y comprobar que en el próximo request al usuario se le presente la vista de login.

- Fijar un tiempo de expiración de sesión de 10 minutos recargable con cada visita del cliente al sitio y verificar que si pasa ese tiempo de inactividad el cliente quede deslogueado.
