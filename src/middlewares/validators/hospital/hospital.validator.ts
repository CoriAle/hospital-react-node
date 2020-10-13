import {body} from 'express-validator';

const validations = [
	body('name').exists().withMessage('Name is required'),
	body('name').if(body('name').exists()).isLength({min: 8}).withMessage('Name must have at least 8 characters'),	
  	body('active_patients').exists().withMessage('Active patients are required'),
  	body('max_patients').exists().withMessage('Max patients is required'),
  	body('employees').exists().withMessage('Employees is required'),
 ];

export default validations;