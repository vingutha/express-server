//setting up a server using express
import express from "express"
const app = express();
const port = 1000;

app.listen(1000, () => {
    console.log(`The server running on port number ${port}` );
});