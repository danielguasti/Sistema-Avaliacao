import express from 'express';
import MainRouter from './routes/MainRoutes';
import alunoRouter from './routes/AlunoRouter';
import professorRouter from './routes/ProfessorRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(professorRouter);
app.use(alunoRouter);
app.use(MainRouter);

app.listen(port, function(){
    console.log(`Server running on port ${port}`);
})