import {Schema, model, Document} from 'mongoose';


const HospitalSchema = new Schema({
		name: {
			type: String,
			required: true,
			unique: true
		},
		active_patients: {
			type: Number,
			required: true,
			default: 0
		},
		max_patients: {
			type: Number,
			required: true
		},
		employees: {
			type: Number,
			required: true
		}
	},
	{ timestamps: true }
);

interface IHospital extends Document{
	name: string;
	active_patients: number;
	max_patients: number;
	employees: number;

}

export default model<IHospital>('Hospital', HospitalSchema);