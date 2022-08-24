import sequelize from "../database";
import { DataTypes, Model } from 'sequelize';

interface CompanyInstance extends Model {
    id: number,
    name: string,
    email: string,
    bio: string,
    website: string
}

const Company = sequelize.define<CompanyInstance>(
    'companies',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: {
            type: DataTypes.TEXT
        },
        website: {
            type: DataTypes.STRING
        }
    }
);

export default Company;