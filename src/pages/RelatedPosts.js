import { useEffect, useState } from "../utilities";
import { truncateText } from "../utilities/common";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { getAllCategories } from "../api/categories";
dayjs.extend(relativeTime);

const RelatedPostsPage = (categoryId) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const category = await getAllCategories(`/${categoryId}?_embed=posts`);
        setRelatedPosts(category.posts);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [categoryId]);

  return `
  <h1 class="text-center font-semibold text-2xl mb-4">Related posts</h1>
      <div class="lg:max-w-full md:max-w-5xl md:px-2 my-0 mx-auto">
        <ul class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full">
          ${
            relatedPosts
              ? relatedPosts
                  .map((blog) => {
                    return `
                      <li class="blog max-w-full m-5 mx-4">
                        <div class="relative">
                          <img
                            class="lg:max-w-[400px] lg:h-[250px] w-full h-[300px] hover:scale-100 object-cover rounded"
                            src="${
                              Array.isArray(blog.image)
                                ? blog.image[0]
                                : blog.image ?? ""
                            }"
                            alt=""
                          />
                          <h2 class="category absolute top-5 text-white right-5 bg-[#2125294D] px-2 font-semibold">
                            ${blog.categoryId === 1 ? "PROJECT" : "CREATIVE" ?? ""}
                          </h2>
                        </div>
                        <div class="date my-3">
                          <span class="font-thin">${dayjs(
                            blog.createdAt
                          ).format("DD.MM.YYYY") ?? ""}</span>
                        </div>
                        <div class="title hover:underline font-bold font-[Poppins] text-xl text-[#21243D] my-3">
                          <a href="/blog/${blog.id ?? ""}">${blog.title ?? ""}</a>
                        </div>
                        <div class="desc font-thin text-sm">
                          <p class="">
                            ${truncateText(blog.content1, 90) ?? ""}
                          </p>
                        </div>
                        <div class="spaceX border-t-2 mt-2"></div>
                        <div class="author bg-[#20e3b2C4] my-3 py-2 rounded-md">
                          <h2 class="text-sm text-center text-white">
                            By: ${blog.author ?? ""}
                          </h2>
                        </div>
                      </li>
                    `;
                  })
                  .join("")
              : ""
          }
        </ul>
      </div>
    `;
};

export default RelatedPostsPage;
