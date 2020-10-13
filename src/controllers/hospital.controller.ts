import { Request, Response, Router } from 'express';
import config from 'config';
import Hospital from '../models/hospital';
import { ErrorHandler, handleError } from '../error';
import bodyValidator from '../middlewares/validators/hospital/hospital.validator';
import validationHandler from '../middlewares/validators/validators';

const router = Router();


router.post('/', bodyValidator, validationHandler, async (req: Request, res: Response) => {
  console.log(req.body)
  const { 
    name, 
    active_patients, 
    max_patients, 
    employees 
  } = req.body;

  try {
    let hospital = await Hospital.findOne({ name });
    if (hospital) {
      const custom = new ErrorHandler(400, 'Hospital already exists');
      handleError(custom, req, res);
    }
    hospital = new Hospital({
        name,
        active_patients, 
        max_patients, 
        employees 
    });

    await hospital.save();


    res.status(200).json({
        data: { hospital } ,
        msj: 'Hospital Created',
      });


  } catch (err) {
    console.log(err);
    const custom = new ErrorHandler(500, 'Server Error');
    handleError(custom, req, res);
  }
});

export default router;