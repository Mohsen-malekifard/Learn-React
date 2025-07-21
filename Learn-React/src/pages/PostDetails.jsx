import { useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams();
  return <h2>پست شماره: {id}</h2>;
}
export default PostDetails;