import { posthttp } from "../http/post"

export function submitCommentData(data){
  var result = posthttp(`/api/ordercomment`,data);
  return result;
}
