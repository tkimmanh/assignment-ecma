import { data } from "../../data";
import { Header } from "../components/Header"
import { truncateText } from "../utilities/common";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const BlogPage = () => {
    return `
    ${Header()}
    <div class="lg:max-w-7xl md:max-w-5xl md:px-2 my-0 mx-auto"> 
    <ul class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-4 mx-4">
   ${data.map((blog) => {
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
     ${blog.category}
    </h2>
  </div>
  <div class="date my-3">
    <span class="font-thin">${dayjs(blog.createAt).format('DD.MM.YYYY')}</span>
  </div>
  <div
    class="title hover:underline font-bold font-[Poppins] text-xl text-[#21243D] my-3"
  >
    <a href="/blog/${blog.id}">${blog.title}</a>
  </div>
  <div class="desc">
    <p class="font-thin text-sm">
      ${truncateText(blog.content1,90)}
    </p>
  </div>
  <div class="spaceX border-t-2 mt-2"></div>
  <div class="author bg-[#20e3b2C4] my-3 py-2  rounded-md">
    <h2 class="text-sm text-center text-white">
      By: ${blog.author}
    </h2>
  </div>
</li>
    `
   }).join('')}
  </ul>
  </div>
    `
}
export default BlogPage;