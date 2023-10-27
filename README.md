<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```
5. cLONAR EL ARCHIVO ```.env.template``` y renombrar la copia a ```.env```.

6. llenar las variables de entorno definidas en el  ```.env```.

7. Ejecutar la aplicacion en Dev  
    ```
    yarn start:dev
    ```

6. Reconstruir la base de datos con la semilla.
    ### Condiciones de uso
   - Solo se usara en modo desarrollo, peticion con el metodo GET.
    ```
    http://localhost:3000/api/v2/seed
    ```

## Stack usado
* MongoDB
* Nest