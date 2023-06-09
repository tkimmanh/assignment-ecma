import axios from "axios";
import { addNewPosts } from "../../api/posts";
import HeaderAdmin from "../../components/admin/Header-Admin";
import { useEffect, router } from "../../utilities";
import joi from "joi";
import Loader from "../../components/Loader";

const postSchema = joi.object({
  title: joi.string().required().min(5).max(100),
  content1: joi.string().required().min(50).max(1000),
  content2: joi.string().allow("").optional().max(1000),
  author: joi.string().required(),
  categories: joi.string(),
  image: joi.allow(""),
  createdAt: joi.date(),
  categoryId: joi.number(),
});

const AddPostPage = () => {
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

  useEffect(() => {
    const form = document.querySelector(".form-add");
    const postTitle = document.querySelector(".title-input");
    const postContent1 = document.querySelector(".content1-input");
    const postImage = document.querySelector(".image-input");
    const postContent2 = document.querySelector(".content2-input");
    const postAuthor = document.querySelector(".author-input");
    const postCategories = document.querySelector(".categories");
    const errorsElement = document.querySelector("#errors");
    const showLoader = document.getElementById("loader");
    const uploadFile = async (files) => {
      if (files) {
        const CLOUD_NAME = "dxg4vjwru";
        const PRESET_NAME = "upload-ecma";
        const FOLDER_NAME = "ECMA";
        const urls = [];
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

        const fromData = new FormData();
        fromData.append("upload_preset", PRESET_NAME);
        fromData.append("folder", FOLDER_NAME);
        for (const file of files) {
          fromData.append("file", file);
          const response = await axios.post(api, fromData, {
            headers: {
              "Content-Type": "multipart/from-data",
            },
          });
          urls.push(response.data.secure_url);
        }
        return urls;
      }
    };
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const urls = await uploadFile(postImage.files);
      const newPost = {
        title: postTitle.value,
        content1: postContent1.value,
        content2: postContent2.value,
        author: postAuthor.value,
        categoryId: postCategories.value,
        image: urls,
        createdAt: Date.now(),
      };

      const { error } = postSchema.validate(newPost, { abortEarly: false });
      if (error) {
        const errors = error.details.map((err) => err.message);
        errorsElement.innerHTML = errors.map((err) => `<p>${err}</p>`).join("");
        return;
      }
      try {
        await addNewPosts(newPost);
        showLoader.classList.remove("hidden");
        router.navigate("/admin/blog/list");
        alert("Thêm sản phẩm thành công");
      } catch (error) {
        console.log(error);
      }
    });
  });

  return `
    ${HeaderAdmin()}
    <div class="max-w-5xl mx-auto">
      ${Loader()}
      <form class="form-add" method="post" action="">
        <label class="block text-sm font-medium text-gray-700"> Title </label>
        <input type="text" class="title-input mb-4 py-3 w-full rounded-md border-[1.5px] border-gray-500 bg-white text-sm text-gray-700 shadow-sm"/>
        <div class="text-red-500" id="errors"></div>
        <label class=" block my-4 text-sm font-medium text-gray-700"> Content 1 </label>
        <textarea class="content1-input" name="" id="editor" cols="30" rows="10"></textarea>

        <label class=" block my-4 text-sm font-medium text-gray-700"> Image </label>
        <input type="file" multiple class="image-input">
        
        <label class=" block my-4 text-sm font-medium text-gray-700"> Content 2 </label>
        <textarea class="content2-input" name="" id="editor2" cols="30" rows="10"></textarea>

        <label class="block my-4 text-sm font-medium text-gray-700"> Author </label>
        <input type="text" class="author-input py-3 w-full rounded-md border-[1.5px] border-gray-500 bg-white text-sm text-gray-700 shadow-sm"/>

        <label class="block my-4 text-sm font-medium text-gray-700"> Categories </label>
        <select class="categories" name="" id="">
        <option value="1">PROJECT</option>
        <option value="2">CREATIVE</option>
        </select>

        <button class="add-post block rounded-lg mt-5 bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"> Create Post </button>
      </form>
    </div>
  `;
};

export default AddPostPage;
