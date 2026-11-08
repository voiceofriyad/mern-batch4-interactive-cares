import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const { postId } = useParams();

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
