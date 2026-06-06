import connectDb from "./config/db.config.js";
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import expenseRoutes from './routes/expense.routes.js'


dotenv.config()

const app = express()

connectDb()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.status(200).json({
    message: "App backend is running"
  });
});


app.use("/api/expenses", expenseRoutes);




const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})