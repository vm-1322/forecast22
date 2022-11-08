import express from 'express';

import * as apiController from '../controllers/api';

const router = express.Router();

router.get('/teams', apiController.getTeams);

export default router;
