import { Header } from "../components/Header";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import { useEffect, useState } from "../utilities";
import { getOnePost } from "../api/posts";
import Footer from "../components/Footer";
dayjs.extend(relativeTime)

const DetailBlogPage = (id) => {
  const [post , setPost ] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const post = setPost(await getOnePost(id))
        if(!post) return 0;
      } catch (error) {
        console.log(error);
      }
    })()
  },[])
    // const post = data.find((data) => data.id === +id)
   
    return `
    ${Header()}
    <div class="container max-w-6xl px-12 py-7 leading-loose mx-auto font-[Poppins] ">
    <h1 class="font-bold text-3xl my-3">${post.title}</h1>
    <span class="font-normal text-[#49505780] mb-2">Date : ${dayjs(post.createdAt).fromNow()}</span>
    <p>
        ${post.content1}
  </p>
    <img class="py-4" src="${post.image}" alt="">
  <p>
   ${post.content2}
  </p>
    <h1 class="text-center my-6 text-xl">Author : ${post.author}</h1>     
    </div>
    ${Footer()}
    `
}
export default DetailBlogPage;