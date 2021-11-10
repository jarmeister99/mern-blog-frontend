import dateformat from 'dateformat'

const PostHeader = (props) => {
    const postData = props.postData;
    const formattedDate = dateformat(postData.createdOn, "mmmm dS, yyyy")

    const titleStyle = {
        fontSize: "16px",
        fontWeight: "bold"
    }
    const titleInfoStyle = {
        fontSize: "12px",
        fontStyle: "italic"
    }
    return (
        <>
            <span style={titleStyle}>{postData.title}</span>
            <span style={titleInfoStyle}>Submitted on {formattedDate} by {postData.user}</span>
        </>
    )
}

export default PostHeader;