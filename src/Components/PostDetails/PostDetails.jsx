import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData()

    const { id, title, body } = post
    const nevigate = useNavigate()

    // const params = useParams()
    const { issa } = useParams()

    const handleGoBack = () => {
        nevigate(-1)
    }

    console.log(issa)
    return (
        <div>
            <h3>Post Details: {id} </h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>

            <button onClick={handleGoBack}><small>Go Back</small></button>

        </div>
    );
};

export default PostDetails;