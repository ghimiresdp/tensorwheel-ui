import Axios from "axios";
import AuthUtils from "../utils/authUtils";

export function listBlogs() {

  return fetch("/api/blog/").then(response => response.json())
}

export function deleteBlog(id) {
  return Axios.delete(
    `/api/my-blog/${id}/`,
    {
      headers: {
        authorization: `Bearer ${AuthUtils.getAccessToken()}`
      }
    }
  )
}