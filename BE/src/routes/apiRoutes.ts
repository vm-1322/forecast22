import express from 'express';

import * as apiController from '../controllers/apiController';

const router = express.Router();

router.get('/matches', apiController.getMatches);
router.get('/teams', apiController.getTeams);

export default router;
