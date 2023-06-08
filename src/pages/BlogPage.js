import { getAllPost } from "../api/posts";
import { Header } from "../components/Header";
import { useEffect, useState } from "../utilities";
import { truncateText } from "../utilities/common";
import debounce from "lodash.debounce";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { getAllCategories } from "../api/categories";
dayjs.extend(relativeTime);

const BlogPage = () => {
  const [posts, setPost] = useState([]);
  const [limit , setLimit] = useState(3)
  useEffect(() => {
    const handleBtn = document.querySelector('.wrapper-btn');
    handleBtn.classList.add('hidden')
    const showLoader = document.getElementById('loader');
    (async () => {
      try {
        showLoader.classList.remove('hidden')
        setTimeout(async () => {
        const posts = await getAllPost(`?_page=1&_limit=${limit}`);
        handleBtn.classList.remove('hidden')
        setPost(posts);
        showLoader.classList.add('hidden')
       },200)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [limit]);

  function handleLoadMore() {
    setLimit(limit + 3);
  }
useEffect(() => {
   const loadMore = document.querySelector('.btn-loadMore')
   loadMore.addEventListener('click', handleLoadMore)
})

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
          },200)
        }
      } catch (error) {
        console.log(error);
      }
    }, 500);
    filterInput.addEventListener("keyup", handleFilterChange);
  });
  
useEffect(() => {
  const postSort = document.querySelector('.btn-filter')
  postSort.addEventListener('click',async function() {
    try {
     const posts = await getAllPost('?_sort=createdAt&_order=desc')
     setPost(posts)
    } catch (error) {
      console.log(error);
    }
  })
})
const [category , setCategory ] = useState([])
 useEffect(() => {
  (async () =>{
    try {
      const category = await getAllCategories('')
      setCategory(category)
    } catch (error) {
      console.log(error);
    } 
  })()
 },[])

  return `
    ${Header()}
    <div class="lg:max-w-7xl md:max-w-5xl md:px-2 my-0 mx-auto min-h-screen"> 
    
    <button class="btn-filter float-right"><i class="text-2xl fa-solid fa-clock-rotate-left"></i></button>
    <div class="float-right mx-2 mt-1">
    <select name="" id="" onchange="if (this.value) window.location.href=this.value">
    <option value="">Select</option>
    ${category.map((cate) => {
      return `
        <option value="/cate/${cate.id}">${cate.name}</option>
      `
    }).join('')}
  </select>
    </div>
    ${Loader()}
  <label for="Search" class="relative w-[400px] mx-auto block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">

    <input type="text" placeholder="Search" class="search-input h-8 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"/>
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
      src="${Array.isArray(blog.image) ? blog.image[0] : blog.image }"
      alt=""
    />
    <h2
      class="category absolute top-5 text-white right-5 bg-[#2125294D] px-2 font-semibold"
    >
     ${blog.categoryId === 1 ? "PROJECT" : "CREATIVE"}
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
  <div class="desc font-thin text-sm">
    <p class="">
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
  <div class="wrapper-btn w-full">
  <button class="btn-loadMore mx-auto bg-green-500 text-white py-2 px-1 rounded">Load more</button>
  </div>
  ${Footer()}
    `;
};
export default BlogPage;
