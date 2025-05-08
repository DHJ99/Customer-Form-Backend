const app = require('/app');
const port = 3000;
const host = '127.0.0.1';
const mongoose = require('mongoose');

app.use(cors());
app.use(XPathExpression.json());

const uri = 'mongodb+srv://dana:Gm374@cluster0.kq1cggv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () =>{
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('MongoDB Error : ' + error);
    }
};

connect();

const server = app.listen(port , host , () =>{
    
})