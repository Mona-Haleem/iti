import React from "react";

export default function UserProfile({user}){
    return <p>
            {user ? 
            `Name: ${user.name} - Age: ${user.age}`
            :"No user data available."}   
         </p>
    
}