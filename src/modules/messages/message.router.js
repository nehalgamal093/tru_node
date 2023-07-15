import express from 'express'
import { addMessage, deleteMsgs, getMsgs } from './message.controller.js';
import { auth } from '../../middleware/auth.js';


const msgRouter = express.Router();

msgRouter.post('/',addMessage)
msgRouter.get('/',auth,getMsgs)
msgRouter.delete('/',auth,deleteMsgs)
export default msgRouter