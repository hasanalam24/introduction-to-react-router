import { Link, useNavigate } from "react-router-dom";


const Post = ({ post }) => {
    const { id, title } = post


    const nevigate = useNavigate()

    const postStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }

    const handleShowDetails = () => {
        nevigate(`/post/${id}`)
    }

    return (
        <div style={postStyle}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>

            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Button</button></Link>
            <button onClick={handleShowDetails}>Click to see details</button>
        </div>
    );
};

export default Post;