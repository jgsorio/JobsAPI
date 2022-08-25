import sequelize from "../database";
import { DataTypes, Model } from 'sequelize';

interface JobInstance extends Model {
    id: number,
    title: number,
    description: string,
    limitDate: Date,
    companyId: number
}

const Job = sequelize.define<JobInstance>(
    'jobs',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        limitDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'companies',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT'
        }
    }
);

export default Job;
