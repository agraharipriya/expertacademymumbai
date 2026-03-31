const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Save form
router.post("/", async (req, res) => {
    try {
        const { name, className, subject, email, phone, message } = req.body;
        const data = new Contact({ name, className, subject, email, phone, message });
        console.log("Saving to DB:", data);
        await data.save();

        console.log("Sending email to:", process.env.RECEIVER_EMAIL);
        // Send Email Notification
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL,
            subject: `New Enquiry from ${name} - Expert Academy`,
            text: `You have received a new enquiry:

Student Name: ${name}
Class & Board: ${className}
Subject: ${subject}
Email Address: ${email}
Phone Number: ${phone}
Message: ${message}

Submitted at: ${new Date().toLocaleString()}`
        };

        // We don't await the email to avoid delaying the response to the user
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Nodemailer Email Error:", error.message);
            } else {
                console.log("Email sent successfully:", info.response);
            }
        });

        res.status(201).json({ message: "Form Submitted Successfully" });
    } catch (error) {
        console.error("Submit Route Error:", error);
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
});

// Get all submissions
router.get("/", async (req, res) => {
    try {
        const data = await Contact.find().sort({ createdAt: -1 });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching data" });
    }
});

module.exports = router;