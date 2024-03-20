import { Link } from "react-router-dom";


const User = ({ user }) => {
    const { id, name, email, phone } = user;

    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h2>{phone}</h2>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;