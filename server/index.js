const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();

sgMail.setApiKey('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');

app.use(cors());

//welcome page
app.get('/', (req,res) => {
     res.send("welcome to the send grid Email server");
});

//email page
app.get('/send-email',(req, res)=> {
    const {recipient ,sender ,topic ,text } = req.query;

    //Sendgrid Requirments
     const msg ={
         to:recipient,
         from: sender,
         subject:topic,
         text:text,
     }
    

    console.log(recipient);
    console.log(sender);
    console.log(topic);
    console.log(text);

    //send Email
    console.log(msg);
    sgMail.send(msg);
    
})

app.listen(4567, () => console.log("running on port 4569"));