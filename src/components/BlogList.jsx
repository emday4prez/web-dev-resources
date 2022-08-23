import Blog from "./Blog"
import './BlogList.css'
export default function BlogList({blogs}) {
  return (
    <div className="blogGrid">
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog}/>
      ))}
    </div>
  )
}
