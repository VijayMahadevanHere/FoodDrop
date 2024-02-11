import { useContext } from "react";
import UserContext from "../utils/userContext";
import { Link } from "react-router-dom";

const Profile = () => {
    const { user,setLoginUser } = useContext(UserContext);

    // Render login prompt if user is not logged in
    if (!user || !user.email) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-bold mb-4">Please login to access the Profile.</h1>
                <Link to='/login' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</Link>
            </div>
        );
    }

    // Render user profile if user is logged in
    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">Welcome,{user.email}!</h2>
            <div className="mb-4">
                <p><strong>Email:</strong> {user.email}</p>
            </div>
            <Link onClick={()=>{
            setLoginUser({...user,email:null})
            }} to='/' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</Link>
        </div>
    );
}

export default Profile;
