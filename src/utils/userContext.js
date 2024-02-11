import { createContext } from "react";


const UserContext=createContext({
    user:{
        name:null,
        email:null,
   
    }
})
UserContext.displayName='UserContext'

export default UserContext;