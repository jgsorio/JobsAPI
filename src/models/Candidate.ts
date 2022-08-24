import sequelize from '../database';
import { DataTypes, Model } from 'sequelize';

interface CandidateInstance extends Model {
    id: number,
    name: string,
    email: string,
    phone: string,
    bio: string,
    openToWork: boolean
}

const Candidate = sequelize.define<CandidateInstance>(
    'candidates',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING
        },
        bio: {
            type: DataTypes.STRING
        },
        openToWork: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }
);

export default Candidate;