// este archivo puede tener 2 tipos de nombre
// app.config.ts
// env.config.ts 
//esta funcion me va mapear las variables de entorno

export const EnvConfiguration = ( )=>({
    environment: process.env.NODE_ENV || 'dev',
    mongodb:process.env.MONGODB,
    port:process.env.port || 3002,
    defaultLimit:process.env.DEFAULT_LIMIT || 7

    // defaultLimit:+process.env.DEFAULT_LIMIT || 7

})