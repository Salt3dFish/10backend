import express from "express";
import infoRouter from './routes/reqinfo'

const app=express();
app.use(express.json());

const PORT=3003;

app.get('/ping',(req,res)=>{
  res.json(req.query)
})

app.use(express.static('static')) //生成静态资源路由

app.use('/api/info',infoRouter)


app.listen(PORT,()=>{
  console.log(`Server running on the PORT ${PORT}`);
})