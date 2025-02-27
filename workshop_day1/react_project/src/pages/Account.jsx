import React, { useContext, useState } from 'react';
import { Box, Card, CardContent, Avatar, Typography, Button, TextField, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { AuthContext } from '../contexts/AuthContext';
import ProfileEdit from '../componentes/profileEdit';
import ImgUpload from '../componentes/ImgUpload';
import { serverInstance } from '../utils/axiosInstance';

const styles = {
  headers:{
    fontWeight: "bold",
    width: "150px",
    display: "inline-block",
    '@media (max-width: 670px)': {
      display:"block"
    }
  }
}
export default function Account() {
    const [isEditing, setIsEditing] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    const {userData,setUserData} = useContext(AuthContext)
    console.log(userData);
   
    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handelImgUrl = async(img_url)=>{
        try {
            await serverInstance.patch(`/users/${userData.id}`, {img_url});
            setIsUploading(false);
            setUserData((prev)=>({...prev,img_url}));
        } catch (error) {
            console.error('update failed:', error);
        }      
    }
   

    return (
        <Box 
            sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                minHeight: '80vh',
                maxWidth:"650px",
                mx:"auto",
                p: 2
            }}
        >
            <Card sx={{width: '100%', boxShadow: 3 }}>
                <CardContent sx={{textAlign:"center"}}>
                  <Box sx={{ display:"flex",alignItems:"center", padding:"40px"  }}>
                    <Box>
                      <Avatar 
                          sx={{ 
                              width: 150, 
                              height: 150, 
                              mb: 2 
                          }} 
                          src={userData.img_url} 
                          alt="User Profile Picture"
                      />
                     
                     <Typography variant="h5" gutterBottom>
                              {userData.username}
                    </Typography>

                    <ImgUpload handelImgUrl={handelImgUrl} setLoading={setIsUploading}/>
                    {isUploading && <Typography variant='p'>upLoading ...</Typography>}
                    </Box>
                    {isEditing ? <ProfileEdit handleToggle={handleEditToggle}/>
                     : (
                        <Box sx={{marginLeft:"50px" ,textAlign:"start"}}>
                            <Typography variant="body1" color="textSecondary" sx={{marginBottom:"25px"}}>
                              <Typography variant='span' sx={styles.headers}>Name: </Typography>{userData.firstName} {userData.lastName}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" sx={{marginBottom:"25px"}}>
                            <Typography variant='span' sx={styles.headers}>Email: </Typography>{userData.email}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" sx={{marginBottom:"25px"}}>
                               <Typography variant='span' sx={styles.headers}>Phone Number: </Typography>  {userData.phoneNumber}
                            </Typography> 
                        </Box>
                    )}
                    </Box>
                    {!isEditing && <Button 
                        variant="contained" 
                        color="primary" 
                        startIcon={<EditIcon />}
                        onClick={handleEditToggle}
                        sx={{ mt: 2 }}
                    > 
                    Edit Profile
                    </Button>
                    }   
                </CardContent>
            </Card>
        </Box>
    );
}