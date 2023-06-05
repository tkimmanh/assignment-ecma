import { truncateText } from "../utilities/common";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "../utilities";
import { getAllPost } from "../api/posts";
import Counter from "../components/Counter";
import Timeline from "../components/TimeLine";
import Background from "../components/Background";
import Skill from "../components/Skill";
dayjs.extend(relativeTime);

const HomePage = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const showLoader = document.getElementById('loader');
    (() => {
      try {
        showLoader.classList.remove('hidden')
        setTimeout(async () => {
          const posts = await getAllPost("?_limit=3");
          setPost(posts);
        },500)
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return `
    ${Header()}
  <main data-aos="fade-right" class="lg:max-w-7xl md:max-w-5xl md:px-2 my-0 mx-auto ">

  <!-- loader -->
  <div id="loader" class="hidden">
    <div class="w-full h-full fixed top-0 left-0 bg-white z-50">
      <div class="flex justify-center items-center mt-[50vh]">
        <div class="fas fa-circle-notch fa-spin fa-5x text-violet-600"></div>
      </div>
    </div>
  </div>
  <!-- loader -->

    <!-- main-contaier -->
    <div class="main-container">
    <!-- background -->
   ${Background()}
    <!-- incrementing counter -->
   ${Counter()}
    <!-- blog -->
    <div class="main-blog mt-10">
      <h1 class="text-center font-bold font-[Poppins] text-4xl text-[#21243D]">-Blog-</h1>
      <!-- box blog -->
      <ul class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full mx-auto">
       ${posts.map((blog) => {
           return `
        <li class="blog max-w-full m-5 mx-4">
        <div class="relative">
        <img class="lg:max-w-[400px] lg:h-[250px] w-full h-[300px] hover:scale-100 object-cover rounded"
          src="${Array.isArray(blog.image) ? blog.image[0] : blog.image}" alt=""/>
        <h2
          class="category absolute top-5 text-white right-5 bg-[#2125294D] px-2 font-semibold"
        >
         ${blog.categories}
        </h2>
      </div>
      <div class="date my-3">
        <span class="font-thin">${dayjs(blog.createdAt).format(
          "DD.MM.YYYY"
        )}</span>
      </div>
      <div class="title hover:underline font-bold font-[Poppins] text-xl text-[#21243D] my-3">
        <a href="/blog/${blog.id}">${blog.title}</a>
      </div>
      <div class="desc">
        <p class="font-thin text-sm">
          ${truncateText(blog.content1, 90)}
        </p>
      </div>
      <div class="spaceX border-t-2 mt-2"></div>
      <div class="author bg-[#20e3b2C4] my-3 py-2  rounded-md">
        <h2 class="text-sm text-center text-white"> By: ${blog.author} </h2>
      </div>
    </li>`;}).join("")}
      </ul>
      <!-- end box blog -->
    </div>
   <!-- time line -->
     ${Timeline()}
   <!-- skill -->
   <h1 class="text-center font-bold font-[Poppins] py-12 lg:py-7 text-4xl text-[#21243D]">-Skill-</h1>
   ${Skill()}
  <!-- end main contaier -->
</div>

  </main>
   </div> 
   ${Footer()}
   `;
};
export default HomePage;
