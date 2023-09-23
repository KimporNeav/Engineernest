const express = require('express'); // Corrected the typo 'expess' to 'express'
const nodemailer = require("nodemailer");
const Email = require("email-templates");
const cors = require('cors'); 
const path = require("path"); // Import the 'path' module for file paths
const { log } = require('console');
const app = express();
require('dotenv').config();

app.set('view engine', 'ejs');

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors());
app.post('/api/mailSeeker', async (req, res) => { // Added 'async' to the route handler function

    try {
        console.log(process.env.SMTP_PASSWORD);
        console.log(process.env.SMTP_RECEIVER);
        console.log(process.env.SMTP_SENDER);
        console.log("Sending email ...");
        const myEmail = req.body.email;
        const skill = req.body.skill;
        // const name = req.body.name;
        const receiver = process.env.SMTP_RECEIVER
        let transporter = nodemailer.createTransport({
            // host: "smtp.gmail.com",
            // host: "mail.openjavascript.info",
            host: process.env.SMTP_SENDER,
            service: "gmail",
            port: 465,
            secure: true,
            logger: true,
            debug: true,
            secureConnection: false,

            // host: "smtp.gmail.com",
            // pool: true,
            auth: {
                user: process.env.SMTP_SENDER,
                pass: process.env.SMTP_PASSWORD,
            },
            tls: {
                rejectUnauthorized: true
            }
        });

        const email = new Email({
            views: {
                root: path.join(__dirname, "views"), // Set the correct path to the views directory
                options: { extension: "ejs" },
            },
            message: {
                // from: myEmail,
                // from: `${name} <${myEmail}>`, // Corrected the email format
                from: `Engineernest <${myEmail}>`, // Corrected the email format
            },

            ISsecure: true,
            preview: false,
            send: true,
            transport: transporter,
        });


        email.send({ // Await the email sending
            template: "jobseeker",
            message: {
                to: receiver,
            },
            locals: {
                // name: name,
                email: myEmail,
                skill: skill
            },
        })
            .then(console.log(`Mail sent successfully to ${receiver}`));


        // console.log(`Mail sent successfully to ${receiver}`);
        res.status(200).json({ message: "Mail sending process completed" });
    } catch (error) {
        console.error(`>> Error sending mail to: ${error.message}`);
        return res.status(500).json({ error: "Failed to send email" }); // Respond with an error
    }


    // Removed the following line since it's not needed
    // Promise.all(emailPromises);

    // Return a response to the client
    // return "Mail sending process completed";
});

app.post('/api/mailHiring', async (req, res) => { // Added 'async' to the route handler function

    try {
        console.log("Sending email ...");
        const myEmail = req.body.email;
        const skill = req.body.skill;
        // const name = req.body.name;
        const receiver = process.env.SMTP_RECEIVER
        let transporter = nodemailer.createTransport({
            // host: "smtp.gmail.com",
            // host: "mail.openjavascript.info",
            host: process.env.SMTP_SENDER,
            service: "gmail",
            port: 465,
            secure: true,
            logger: true,
            debug: true,
            secureConnection: false,

            // host: "smtp.gmail.com",
            // pool: true,
            auth: {
                user: process.env.SMTP_SENDER,
                pass: process.env.SMTP_PASSWORD,
            },
            tls: {
                rejectUnauthorized: true
            }
        });

        const email = new Email({
            views: {
                root: path.join(__dirname, "views"), // Set the correct path to the views directory
                options: { extension: "ejs" },
            },
            message: {
                // from: myEmail,
                // from: `${name} <${myEmail}>`, // Corrected the email format
                from: `Engineernest <${myEmail}>`, // Corrected the email format
            },

            ISsecure: true,
            preview: false,
            send: true,
            transport: transporter,
        });


        email.send({ // Await the email sending
            template: "hiring",
            message: {
                to: receiver,
            },
            locals: {
                // name: name,
                email: myEmail,
                skill: skill
            },
        })
            .then(console.log(`Mail sent successfully to ${receiver}`));


        // console.log(`Mail sent successfully to ${receiver}`);
        res.status(200).json({ message: "Mail sending process completed" });
    } catch (error) {
        console.error(`>> Error sending mail to: ${error.message}`);
        return res.status(500).json({ error: "Failed to send email" }); // Respond with an error
    }


    // Removed the following line since it's not needed
    // Promise.all(emailPromises);

    // Return a response to the client
    // return "Mail sending process completed";
});

app.post('/api/mailContact', async (req, res) => { // Added 'async' to the route handler function

    try {
        console.log("Sending email ...");
        const myEmail = req.body.email;
        // const name = req.body.name;
        const receiver = process.env.SMTP_RECEIVER
        let transporter = nodemailer.createTransport({
            // host: "smtp.gmail.com",
            // host: "mail.openjavascript.info",
            host: process.env.SMTP_SENDER,
            service: "gmail",
            port: 465,
            secure: true,
            logger: true,
            debug: true,
            secureConnection: false,

            // host: "smtp.gmail.com",
            // pool: true,
            auth: {
                user: process.env.SMTP_SENDER,
                pass: process.env.SMTP_PASSWORD,
            },
            tls: {
                rejectUnauthorized: true
            }
        });

        const email = new Email({
            views: {
                root: path.join(__dirname, "views"), // Set the correct path to the views directory
                options: { extension: "ejs" },
            },
            message: {
                // from: myEmail,
                // from: `${name} <${myEmail}>`, // Corrected the email format
                from: `Engineernest <${myEmail}>`, // Corrected the email format
            },

            ISsecure: true,
            preview: false,
            send: true,
            transport: transporter,
        });


        email.send({ // Await the email sending
            template: "contact",
            message: {
                to: receiver,
            },
            locals: {
                // name: name,
                email: myEmail,
            },
        })
            .then(console.log(`Mail sent successfully to ${receiver}`));


        // console.log(`Mail sent successfully to ${receiver}`);
        res.status(200).json({ message: "Mail sending process completed" });
    } catch (error) {
        console.error(`>> Error sending mail to: ${error.message}`);
        return res.status(500).json({ error: "Failed to send email" }); // Respond with an error
    }


    // Removed the following line since it's not needed
    // Promise.all(emailPromises);

    // Return a response to the client
    // return "Mail sending process completed";
});
const port =  process.env.PORT
app.listen(port || 8000, () => {
    console.log(`Server is running on port ${port}`);
});
