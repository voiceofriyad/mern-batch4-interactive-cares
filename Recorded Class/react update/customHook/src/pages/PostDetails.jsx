import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const PostDetails = () => {
  const { postId } = useParams();

  const {
    data: post,
    isLoading,
    errorMessage,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, null);

  if (isLoading) {
    return <h3>Loading.........</h3>;
  }

  if (errorMessage) {
    return <h3>{errorMessage}</h3>;
  }

  return (
    <div>
      <h2>Post Details Page of Post Id - {postId}</h2>
      <p>
        <b>Post Title</b> - {post?.title}
      </p>
      <p>
        <b>Post Description</b> - {post?.body}
      </p>
    </div>
  );
};

export default PostDetails;
