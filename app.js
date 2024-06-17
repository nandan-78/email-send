import express from 'express' ;
import router from './routes/router.js'
import cors from 'cors';
import dontEnv from 'dotenv' ;

dontEnv.config() ;

const app  = express() ;

const port = process.env.PORT || 8001 ;

app.use(express.json());
app.use(cors()) //cross origin resource sharing
app.use(router)




app.listen(port , () =>{
    console.log(`Server is running at localhost://${port}`);
})