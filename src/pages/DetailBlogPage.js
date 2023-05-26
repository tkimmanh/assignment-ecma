import { data } from "../../data"
import { Header } from "../components/Header";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const DetailBlogPage = (id) => {
    const blog = data.find((data) => data.id === +id)
    if(!blog) return 0;
    return `
    ${Header()}
    <div class="container max-w-5xl px-12 py-7 leading-loose mx-auto font-[Poppins] ">
    <h1 class="font-bold text-3xl my-3">${blog.title}</h1>
    <span class="font-normal text-[#49505780] mb-2">Date : ${dayjs(blog.createAt).fromNow()}</span>
    <p>
        ${blog.content1}
  </p>
    <img class="py-4" src="${blog.image}" alt="">
  <p>
   ${blog.content2}
  </p>
    <h1 class="text-center my-6 text-xl">Author : ${blog.author}</h1>     
    </div>
    `
}
export default DetailBlogPage;