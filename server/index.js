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
    console.log(sgMail.send(msg));
    sgMail.send(msg);
    
})

app.listen(4567, () => console.log("running on port 4569"));