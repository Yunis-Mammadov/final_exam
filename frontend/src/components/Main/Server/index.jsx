import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { deleteServer, getAll } from '../../../api/request';
import styles from "../Server/index.module.css";

const Server = () => {
  const [server,setServer] = useState([])

  useEffect(() => {
    getAll().then(data => {
      setServer(data)
    })
  }, [])

  const handleDelete = async(serverId) => {
    setServer(prevServer => prevServer.filter(server =>  server._id !== serverId ))
   await deleteServer(serverId)

 }

  return (
    <>
    <div>
        <h1 className={styles.serverH1}>Different hosting platforms to suit <br /> every need!</h1>
    </div>
    <Grid container spacing={7} item xs={10} margin={"0 auto"}>
      {server && server.map((servers)=>{
        return   <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 275 ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <CardContent>
          <img src={servers.imageURL} alt="" />
          <Typography variant="h6">
            {servers.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {servers.description}
          </Typography>
        </CardContent>
        <CardActions>
        <button className={styles.serverButton} onClick={() => handleDelete(servers._id)}>Delete</button>
        </CardActions>
      </Card>
        </Grid>
      })}
    </Grid>
    </>
  )
}

export default Server