import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {

    //let name = "mario";

    //const [name, setName] = useState("mario");

    //const [age, setAge] = useState(25);
    
    /* const handleClick = () => {
        //console.log("hello, ninjas");
       // name = "luigi";
       setName("luigi");
       setAge(30);
    } */

    /* const handleClickAgain = (name, e) => {
        console.log("hello " + name, e.target);
    } */

    /* const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]); */

    //const [name, setName] = useState("mario");

    /* const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    } */

    const {error, isPending, data: blogs} = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="home">
            {/* <h2>Homepage</h2> */}
            {/* <p>{name} is {age} years old</p> */}
            {/* <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={(e) => handleClickAgain("mario", e)}>Click me again</button> */}

            {/* {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}; */}

            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs}/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's Blogs"/> */}
            {/* <button onClick={() => setName("luigi")}>Change Name</button> */}
            {/* <p>{ name }</p> */}


        </div>
     );
}
 
export default Home;