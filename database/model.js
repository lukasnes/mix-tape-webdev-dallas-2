import { Model, DataTypes } from 'sequelize'
import util from 'util'
import connectToDB from './db.js'



export const db = await connectToDB('postgresql:///mixtape')


export class User extends Model {
    [util.inspect.custom](){
        return this.toJSON()
    }
}


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

User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        username:{
            type: DataTypes.STRING,
            unique:true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
        }
    },
    {
        modelName: 'user',
        sequelize: db,
    }
)

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
            preview: {
                type: DataTypes.STRING
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
            imgUrl: {
                type: DataTypes.STRING,
            },
        },
        
        {
            modelName: 'song',
            sequelize: db,
        }
)

Playlist.hasMany(Song, { foreignKey: 'playlistId'})
Song.belongsTo(Playlist, {foreignKey: 'playlistId'})


User.hasMany(Playlist, {foreignKey:'userId'})
Playlist.belongsTo(User, {foreignKey: 'userId'})


// await db.sync({ force: true })

// const testMixtape = await Playlist.create({ name: 'joe mix' })

// console.log(testMixtape)


// await db.close()