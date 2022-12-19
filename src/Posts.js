import React, {useState,useEffect} from "react";
import axios, { Axios, AxiosHeaders } from "axios";
const baseURL = "http://localhost:1000/data"

const Posts = () => {
  
    const [blogs,setBlogs] = useState([ 
        {  title: "How to tie your shoes", post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",author:"Donna Lieberman", id: 1 },
        {  title: "How to walk on water", post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis pellentesque. Velit scelerisque in dictum non consectetur a erat nam at. Lacus suspendisse faucibus interdum posuere. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Dignissim convallis aenean et tortor. Pulvinar etiam non quam lacus. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Aliquam vestibulum morbi blandit cursus risus. Nunc id cursus metus aliquam eleifend mi.", author:"Deandre way",id: 2 },
        {  title: "How to eat a sandwich", post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut etiam sit amet nisl. Lacus sed turpis tincidunt id aliquet risus. Arcu felis bibendum ut tristique et egestas quis ipsum. Maecenas ultricies mi eget mauris pharetra et. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Nisi lacus sed viverra tellus in hac habitasse. Mollis nunc sed id semper risus in. Volutpat est velit egestas dui. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Sed adipiscing diam donec adipiscing tristique risus.",author:"Mike Shwartz", id: 3 },

       
        
      ])
 
    function OtherPosts(){
     const[morePosts,setMorePosts] = useState()
      useEffect(() => {
        axios.get(baseURL)
        .then(res => {
          console.log(res.data.blogs)
        })
        
      }, [])
      {}

    }

   function handleDelete(index) {
      const newBlogs = blogs
      newBlogs.splice(index,1)
      setBlogs([...newBlogs])
    }
    
    return (  
         <>
        {blogs.map((blog)=>(
            <div className="posts" key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.post}</p>
            <p>Written by {blog.author}</p>
            <button onClick={handleDelete}>Delete Blog</button>

        
     
            </div>
       
        ))}
        <OtherPosts/>
  
          </>
     

    );
}
 
export default Posts;