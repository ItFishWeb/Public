const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const passport = require("passport")
require("./db/conn.js");
const Register = require("./models/registers");
const Login = require("./models/login");
const {json} = require("express");
const { AsyncResource } = require("async_hooks");
const port = process.env.PORT || 3000;


// const initializePassport = require('./passport-config');
// initializePassport(
//     passport,
//     username => {
//     username.find(username => username.username === username)
// }
// const username=[];

const static_path = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");
const image_path = path.join(__dirname,"../public/assets/img");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));

app.set("view engine","hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);


app.get("/", (req,res) =>{
    res.render("index")
});
app.get("/register", (req,res) =>{
    res.render("register");
})

app.post("/register",async (req,res) =>{
    try {
        const validate = req.body.need;
       // const cvalidate = req.body.cneed;
        if(validate != ""){

            const registerEmployee = new Register({
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                need:validate,
                message: req.body.message
            })
            const registered = await registerEmployee.save();
            res.status(201).render("index");
            res.send("Dziękujemy za zgłoszenie, sprawdź swoją skrzynkę e-mail na którą wysłaliśmy potwierdzenie uczestnictwa :)")
        }else{
            res.send("Nie wybrałeś tematu kursu !")
        }

    } catch (error) {
        res.status(400).send(error);
    }
});
app.get("/login", (req,res)=>{
    res.render("login");
})
app.post("/login",async (req,res)=>{
   try {
       res.redirect("admin")
       console.log("Poszlo")
   } catch (error) {
        res.send(error);
   }

});

app.listen(port, () =>{
    console.log('server is running at port no ${port}');
})