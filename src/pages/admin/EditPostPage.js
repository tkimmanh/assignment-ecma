import { getOnePost, updatePost } from "../../api/posts";
import HeaderAdmin from "../../components/admin/Header-Admin";
import { useEffect, router, useState } from "../../utilities";
import axios from "axios";
import joi from "joi";

const postSchema = joi.object({
  id : joi.allow(''),
  title: joi.string().required().min(5).max(20),
  content1: joi.string().required().min(50).max(500),
  content2: joi.string().allow("").optional(),
  author : joi.string().allow("").optional(),
  categories: joi.string(),
  image: joi.string().allow("").optional(),
  createdAt: joi.date(),
  updatedAt: joi.date(),
});
const EditPostPage = ({ id }) => {
  useEffect(() => {
    ClassicEditor.create(document.querySelector("#editor"));
    ClassicEditor.create(document.querySelector("#editor2"))
      .then((editor) => {
        console.log(editor);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const [post, setPost] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setPost(await getOnePost(id));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    const form = document.querySelector(".form-add");
    const postTitle = document.querySelector(".title-input");
    const postContent1 = document.querySelector(".content1-input");
    const postImage = document.querySelector(".image-input");
    const postContent2 = document.querySelector(".content2-input");
    const postAuthor = document.querySelector(".author-input");
    const errorsElement = document.querySelector('#errors');
    const uploadFile = async (files) => {
      if (files) {
        const CLOUD_NAME = "dxg4vjwru";
        const PRESET_NAME = "upload-ecma";
        const FOLDER_NAME = "ECMA";
        const urls = [];
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
        const formData = new FormData();
        formData.append("upload_preset", PRESET_NAME);
        formData.append("folder", FOLDER_NAME);

        for (const file of files) {
          formData.append("file", file);
          const response = await axios.post(api, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          urls.push(response.data.secure_url);
        }
        return urls;
      }
    };
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      try {
        const urls = await uploadFile(postImage.files);
        const newPost = {
          id,
          title: postTitle.value,
          content1: postContent1.value,
          content2: postContent2.value,
          author: postAuthor.value,
          categories: "Project",
          image: urls.length > 0 ? urls : post.image,
          updatedAt: Date.now(),
          createdAt: post.createdAt,
        };
        console.log(postSchema);
        const { error } = postSchema.validate(newPost, { abortEarly: false });
        if (error) {
          const errors = error.details.map((err) => err.message);
          errorsElement.innerHTML = errors.map((err) => `<p>${err}</p>`).join("");
          return;
        }
        await updatePost(newPost);
        router.navigate("admin/blog/list");
      } catch (error) {
        console.log(error);
      }
    });
  });

  return `
  ${HeaderAdmin()}
  <div class="max-w-5xl mx-auto">
  <form class="form-add" method="post" action="">
  <label class="block text-sm font-medium text-gray-700"> Title </label>
  <input type="text" value="${ post.title}" class="title-input mb-4 py-3 w-full rounded-md border-[1.5px] border-gray-500 bg-white text-sm text-gray-700 shadow-sm"/>
  <div class="text-red-500" id="errors"></div>  
  <label class=" block my-4 text-sm font-medium text-gray-700"> Content 1 </label>
  <textarea class="content1-input" name="" id="editor" cols="30" rows="10">${
    post.content1
  }</textarea>
   
  <label class=" block my-4 text-sm font-medium text-gray-700"> Image </label>
  <img src="${post.image}" alt="">
  <input type="file" multiple class="image-input my-3">
     
  
  <label class=" block my-4 text-sm font-medium text-gray-700"> Content 2 </label>
  <textarea class="content2-input" name="" id="editor2" cols="30" rows="10">${
    post.content2
  }</textarea>

  <label class="block my-4 text-sm font-medium text-gray-700"> Author </label>
  <input type="text" value="${
    post.author
  }" class="author-input py-3 w-full rounded-md border-[1.5px] border-gray-500 bg-white text-sm text-gray-700 shadow-sm"/>

  <button class="add-post block rounded-lg mt-5 bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"> Update Post </button>
  </form>
  </div>
    `;
};

export default EditPostPage;
