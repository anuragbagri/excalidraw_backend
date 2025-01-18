import express from "express" 

const app =express();

app.get("/" , (req ,res)=> {
    res.send("heelo world")
});

app.listen(3001)