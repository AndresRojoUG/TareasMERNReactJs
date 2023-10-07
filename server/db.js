import {createPool} from 'mysql2/promise';

export const pool =  createPool({
    host:'localhost',
    port:1111,//colocar puerto de donde se encuentra la BD
    user:'root',
    password:'',//contrasena de la bd
    database:'d'//crear tu base de de datos que se debera llamar tasksdb
})

//con el pool vamos a poder hacer consultas 