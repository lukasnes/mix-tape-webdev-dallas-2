import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import axios from "axios";

const app = express();
const port = "8000";

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());
app.use(
  session({ secret: "ssshhhhh", saveUninitialized: true, resave: false })
);

ViteExpress.config({ printViteDevServerHost: true });


const url = ""
//API URL
axios.get(url).then((res) =>{
console.log(res)
})

//Add PlayList
  app.post("/api/addplaylist", async (req,res)=>{

  })

  //Delete Playlist

  app.post("/api/deleteplaylist", async (req,res)=>{

  })
  //Get playlist Songs
  app.get("/api/playlistsongs", async (req,res)=>{

  })
  //Add new Song
  app.post("/api/addnewsong", async (req,res)=>{

  })
  //Delete Song
  app.post("/api/deletesong", async(req,res)=>{

  })



  ViteExpress.listen(app, port, () =>
  console.log(`Listening on http://localhost:${port}`)
);
