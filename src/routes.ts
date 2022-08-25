import { Router } from 'express';
import CandidatesController from './controllers/CandidatesController';
import CompaniesController from './controllers/CompaniesController';
import JobsController from './controllers/JobsController';

const router = Router();

router.get('/candidates', CandidatesController.index);
router.post('/candidates', CandidatesController.save);
router.get('/candidates/:id', CandidatesController.show);
router.put('/candidates/:id', CandidatesController.update);
router.delete('/candidates/:id', CandidatesController.delete);

router.get('/companies', CompaniesController.index);
router.post('/companies', CompaniesController.save);
router.get('/companies/:id', CompaniesController.show);
router.put('/companies/:id', CompaniesController.update);
router.delete('/companies/:id', CompaniesController.delete);

router.get('/jobs', JobsController.index);
router.post('/jobs', JobsController.save);
router.get('/jobs/:id', JobsController.show);
router.put('/jobs/:id', JobsController.update);
router.delete('/jobs/:id', JobsController.delete);

export default router;
