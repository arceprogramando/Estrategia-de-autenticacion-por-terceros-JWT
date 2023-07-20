import { Router } from 'express';
import messageModel from '../dao/models/message.models.js';

const router = Router();

// Creación Create ("C".R.U.D)

router.post('/', async (req, res) => {
  try {
    const { user, message } = req.body;

    // eslint-disable-next-line no-console
    console.log('User:', user);
    // eslint-disable-next-line no-console
    console.log('Message:', message);

    if (!(user && message)) {
      return res.status(400).json({ error: 'Uno de los campos, user o message, no se envió correctamente' });
    }

    const newMessage = {
      user,
      message,
    };

    const createdMessage = await messageModel.create(newMessage);

    return res.status(201).json(createdMessage);
  } catch (error) {
    return res.status(500).json({ error: 'Ocurrió un error al guardar el mensaje' });
  }
});

// Lectura Read (C."R".U.D)

router.get('/', async (req, res) => {
  try {
    const findmessage = await messageModel.find({});
    const messages = findmessage.map((message) => message.toObject());
    // Aquí envío mis mensajes
    res.render('chat', {
      messages,
      style: 'index.css',
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los mensajes' });
  }
});

export default router;
