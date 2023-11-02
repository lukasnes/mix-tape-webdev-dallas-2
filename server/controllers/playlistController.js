import { Sequelize } from "sequelize"

import { 
    User, 
    Playlist,
    Friend,
    FriendList,
    Likes
 } from "../../database/model.js"


const getPlaylistByUser = async (req, res) => {

    
    let { userId } = req.params 
 
        const playlists = await Playlist.findAll({
            where: {
                userId: +userId
            },
            attributes:[
                'playlistId',
                'name',
                'createdAt',
                'likeCount',
             ],
            include: [                
                {
                    model: Likes,
                    attributes: [

                    ],
                },
                {
                model: User,
                attributes:[
                    'userId',
                    'username',
                ]
            },
            ],
            
            group: 
            [
                'playlistId', 
                'user.user_id'
            ],


        })    
        
        let playlistData = await Promise.all(playlists.map( async (pl)=>{
            let plObj = {
                playlist: pl,

            }
            if(req.session.userId){
                const friendList = await FriendList.findOne({
                    where: {
                        userId: req.session.userId
                    },
                    include: {
                        model: Friend,
                        attributes: [
                            'friendId',
            
                        ],
                        where: {
                            userId: pl.user.userId
                        }
                    }
                })
                if(friendList){
                    plObj.isFollowing = true
                } else {
                    plObj.isFollowing = false
                }
                const liked = await Likes.findOne({
                    where: {
                        playlistId: pl.playlistId,
                        userId: req.session.userId,
                    }
                })

                if(liked){
                    plObj.hasLiked = true
                } else {
                    plObj.hasLiked = false
                }

                console.log(friendList)
            }
            return plObj

        }))

        console.log(playlistData)
        res.status(200).json(playlistData)
    } 


const addPlaylist = async (req, res) => {
    const { userId } = req.session
    const user = await User.findOne(
        {
            where: {
                userId: userId
            }
        }
    )
    
     const newPlaylist = await user.createPlaylist(
        {
         name: 'New Playlist',
         likeCount: 0
        }
    )


    res.status(201).json(newPlaylist)
};


const editPlaylist = async (req,res) => {


    const {
        playlistId,
        playlistname
    } = req.body

    const playlist = await Playlist.findOne(
        {
            where:
            { playlistId:playlistId }
        }
        
        )
        playlist.name = playlistname
        await playlist.save()

    res.status(200).json(playlist)

}

const deletePlayList = async (req, res) => {
    const { userId } = req.session
    console.log("userId:", userId)

    const { playlistId } = req.body
    console.log("playlistId:", playlistId)

    const likes = await Likes.findAll(

    )
    console.log(likes)

    
    await Likes.destroy({
            where:{
                // userId: userId,
                playlistId: playlistId
            }
        })

    const playlist = await Playlist.findOne(
        {
            where:
            { playlistId:playlistId }
        }
    )
    await playlist.destroy()

    // const playlists = await Playlist.findAll({
    //     where: {
    //         userId: +userId
    //     },
    //     attributes:[
    //         'playlistId',
    //         'name',
    //         'createdAt',
    //         'likeCount',
    //      ],
    //     include: [                
    //         {
    //             model: Likes,
    //             attributes: [

    //             ],
    //         },
    //         {
    //         model: User,
    //         attributes:[
    //             'userId',
    //             'username',
    //         ]
    //     },
    //     ],
        
    //     group: 
    //     [
    //         'playlistId', 
    //         'user.user_id'
    //     ],


    // })    
    
    // let playlistData = await Promise.all(playlists.map( async (pl)=>{
    //     let plObj = {
    //         playlist: pl,

    //     }
    //     if(req.session.userId){
    //         const friendList = await FriendList.findOne({
    //             where: {
    //                 userId: req.session.userId
    //             },
    //             include: {
    //                 model: Friend,
    //                 attributes: [
    //                     'friendId',
        
    //                 ],
    //                 where: {
    //                     userId: pl.user.userId
    //                 }
    //             }
    //         })
    //         if(friendList){
    //             plObj.isFollowing = true
    //         } else {
    //             plObj.isFollowing = false
    //         }
    //         const liked = await Likes.findOne({
    //             where: {
    //                 playlistId: pl.playlistId,
    //                 userId: req.session.userId,
    //             }
    //         })

    //         if(liked){
    //             plObj.hasLiked = true
    //         } else {
    //             plObj.hasLiked = false
    //         }

    //         console.log(friendList)
    //     }
    //     return plObj

    // }))

    // console.log(playlistData)
    res.status(200).json({
        success: true,
    })
    // res.status(200).json(playlists)

}

// const updatedPlaylist = async (req, res) => {

// }

export { 
    getPlaylistByUser,
    addPlaylist, 
    editPlaylist,
    deletePlayList,
}
