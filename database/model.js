import { Model, DataTypes } from 'sequelize'
import util from 'util'
import connectToDB from './db.js'



export const db = await connectToDB('postgresql:///mixtape')

export class Playlist extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

export class Song extends Model {
     [util.inspect.custom]() {
        return this.toJSON()
    }
}


Playlist.init(
    {
        playlistId: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true,
            unique:true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull:true,
        }
    },
    {
        modelName: 'playlist',
        sequelize: db,
        timestamps: true
    }
)

Song.init(
    {
            songId:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                unique: true
            },
            album:{
                type: DataTypes.STRING,

            },
            artist: {
                type: DataTypes.STRING,

            },
            name: {
                type: DataTypes.STRING,

            },
            position: {
                type: DataTypes.INTEGER,
            },
        },
        
        {
            modelName: 'song',
            sequelize: db,
        }
)

Playlist.hasMany(Song, { foreignKey: 'playlistId'})
Song.belongsTo(Playlist, {foreignKey: 'playlistId'})

// await db.sync({ force: true })

// const testMixtape = await Playlist.create({ name: 'joe mix' })

// console.log(testMixtape)

// const testStock = await Stock.create({ stockId: '1', stockSymbol: 'AAPL'})

// console.log(testStock)   


// await db.close()