/*import express from "express";
import send_reservation from "../controller/reservation.js";

const router = express.Router();

router.post("/send", send_reservation);

export default router;
*/

import express from 'express';
import Reservation from '../models/Reservation.js';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/reserve', async (req, res) => {
  const { name, contact, email, date, time } = req.body;

  try {
    // Save reservation to MongoDB
    const reservation = new Reservation({ name, contact, email, date, time });
    await reservation.save();

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Reservation Confirmation',
      text: `Your reservation is confirmed for ${date} at ${time}.`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Reservation made and email sent!' });
  } catch (error) {
    res.status(500).json({ message: 'Error making reservation' });
  }
});

export default router;
