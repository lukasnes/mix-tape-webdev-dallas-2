import {Model, DataTypes} from 'sequelize'
import util from 'util'
import connectToDB from './db.js'



export const db = await connectToDB('postgresql:///mixtape')

export class Mixtape extends Model {
    [util.inspect.custome]() {
        return this.toJSON()
    }
}

export class MixtapeSong extends Model {
     [util.inspect.custome]() {
        return this.toJSON()
    }
}


Mixtape.init(
    {
        mixtapeId: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            unique:true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull:true,
        }
    },
    {
        modelName: 'mixtape',
        sequelize: db,
        timestamps: true
    }
)

MixtapeSong.init(
    {
        mixtapeSongId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
            songId:{
                type:DataTypes.INTEGER,
                unique:true,
            },
            album:{
                type: DataTypes.CHAR,

            },
            artist: {
                type: DataTypes.CHAR,

            },
            name: {
                type: DataTypes.CHAR,

            },
            position: {
                type: DataTypes.CHAR,
            },
        },
        
        {
            modelName: 'mixtape',
            sequelize: db,
        }
)

Mixtape.hasMany(MixtapeSong, { foreignKey: 'mixtapeId'})
MixtapeSong.belongsTo(Mixtape, {foreignKey: 'mixtapeId'})