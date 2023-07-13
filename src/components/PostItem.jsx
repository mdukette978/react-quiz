


const PostItem = ({post}) => {

    const handleClick = (e) => {
        console.log(e.currentTarget.id) 
    }

    return (
        <div className="card" onClick={handleClick} id={post.id} >
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default PostItem