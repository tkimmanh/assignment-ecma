import { getAllPost } from "../api/posts";
import { Header } from "../components/Header";
import { useEffect, useState } from "../utilities";
import { truncateText } from "../utilities/common";
import debounce from "lodash.debounce";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const BlogPage = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const posts = await getAllPost("");
        setPost(posts);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  useEffect(() => {
    const filterInput = document.querySelector(".search-input");
    const loader = document.querySelector('.loader')
    const handleFilterChange = debounce( (e) => {
      try {
        if (e.target.value !== "") {
          loader.classList.remove('hidden')
          setTimeout(async () => {
            const filteredPosts = await getAllPost(`?title_like=${e.target.value}`)
            setPost(filteredPosts);
            loader.classList.add('hidden');
          },700)
        }
      } catch (error) {
        console.log(error);
      }
    }, 500);
    filterInput.addEventListener("keyup", handleFilterChange);
  });

  return `

    ${Header()}

    <div class="lg:max-w-7xl md:max-w-5xl md:px-2 my-0 mx-auto"> 
  

  <label for="Search" class="relative w-[400px] mx-auto block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">

    <input type="text" placeholder="Search"  class="search-input  h-8 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"/>
    <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"> Search </span>
  </label>
    <ul class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-4 mx-4">

    <!-- loader -->

    <div class="loader fixed hidden left-[50%] top-[50%] z-50  h-14 w-14 animate-spin rounded-full border-8 border-solid border-[#3c91e6] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
      </div>
   ${posts
     .map((blog) => {
       return `
    <li class="blog max-w-full m-5 mx-4">
    <div class="relative">
    <img
      class="lg:max-w-[400px] lg:h-[250px] w-full h-[300px] hover:scale-100 object-cover rounded"
      src="${blog.image}"
      alt=""
    />
    <h2
      class="category absolute top-5 text-white right-5 bg-[#2125294D] px-2 font-semibold"
    >
     ${blog.categories}
    </h2>
  </div>
  <div class="date my-3">
    <span class="font-thin">${dayjs(blog.createdAt).format("DD.MM.YYYY")}</span>
  </div>
  <div
    class="title hover:underline font-bold font-[Poppins] text-xl text-[#21243D] my-3"
  >
    <a href="/blog/${blog.id}">${blog.title}</a>
  </div>
  <div class="desc">
    <p class="font-thin text-sm">
      ${truncateText(blog.content1, 90)}
    </p>
  </div>
  <div class="spaceX border-t-2 mt-2"></div>
  <div class="author bg-[#20e3b2C4] my-3 py-2  rounded-md">
    <h2 class="text-sm text-center text-white">
      By: ${blog.author}
    </h2>
  </div>
</li>
    `;
     })
     .join("")}
  </ul>
  </div>
    `;
};
export default BlogPage;
