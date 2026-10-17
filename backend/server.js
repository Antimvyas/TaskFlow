
import express from "express"
import cors from "cors";
import dotevn from "dotenv"
import authRoutes from "./routes/authRoutes.js"

dotevn.config()
const app=express();
app.use(cors());
app.use(express.json());
app.use('/api',authRoutes);

app.get('/',(req,res)=>{
    res.json({
        message: "TaskFlow API is running"
    });

})

const PORT=1801

app.listen(PORT,()=>{
    console.log(`server is running on the ${PORT}`);
    
})