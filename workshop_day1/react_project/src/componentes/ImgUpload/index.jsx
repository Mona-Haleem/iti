import React, { useContext } from 'react'
import { cloudinaryInstance, serverInstance } from '../../utils/axiosInstance';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { AuthContext } from '../../contexts/AuthContext';
import { Button } from '@mui/material';
function ImgUpload({handelImgUrl,setLoading}) {
    const {userData,setUserData} = useContext(AuthContext)
    
    const handleImageChange = async (e) => {
        setLoading(true)
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append("upload_preset","profile_img")
                try {
                    const response = await cloudinaryInstance.post('/upload',formData);
                    const img_url = response.data.secure_url;
                    handelImgUrl(img_url)
                    
                } catch (error) {
                    console.error('Cloudinary upload failed:', error);
                    return null;
                }
        };
    }
    
  return (
    <Button
        variant="contained"
        component="label"
        startIcon={<UploadFileIcon />}
    >
        Upload Image
        <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
        />
    </Button>
  )
}

export default ImgUpload