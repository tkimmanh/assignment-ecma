import { Header } from "../components/Header";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { router, useEffect, useState } from "../utilities";
import { getOnePost } from "../api/posts";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
dayjs.extend(relativeTime);

const DetailBlogPage = (id) => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const showLoader = document.getElementById('loader');
    ( () => {
      try {
        showLoader.classList.remove('hidden')
        setTimeout(async () => {
          setPost(await getOnePost(id));
       },300)
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return `
    ${Header()}
<div class="container max-w-6xl px-12 py-7 leading-loose mx-auto font-[Poppins] ">
  <!-- loader -->
  ${Loader()}
  <!-- loader -->
  <h1 class="font-bold text-3xl my-3">${post.title ?? ""}</h1>
  <span class="font-normal text-[#49505780] mb-2">Date : ${dayjs(post.createdAt).fromNow()}</span>

  <p>${post.content1 ?? ""}</p>
  ${Array.isArray(post.image)
      ? post.image
          .map((imageUrl) => `<img class="my-5" src="${imageUrl ?? ""} " alt="">`)
          .join("")
      : `<img src="${post.image ?? ""}" alt="">`
  }
  <p>
    ${post.content2 ?? ""}
  </p>
  <h1 class="text-center my-6 text-xl">Author : ${post.author ?? ""}</h1>     
</div>
${Footer()}
`;
};

export default DetailBlogPage;
