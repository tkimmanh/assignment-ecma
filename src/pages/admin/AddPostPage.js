import { addNewPosts } from "../../api/posts";
import HeaderAdmin from "../../components/admin/Header-Admin";
import { useEffect , router } from "../../utilities";

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
    console.log(postAuthor);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const newPost = {
        title: postTitle.value,
        content1: postContent1.value,
        content2: postContent2.value,
        author: postAuthor.value,
        createdAt: Date.now(),
      };
      addNewPosts(newPost)
        .then(() => {
          router.navigate('/blog')
        })
        .catch((error) => console.log(error));
    });
  });
  return ` 
    ${HeaderAdmin()}
    <div class="max-w-5xl mx-auto">

    <form class="form-add" method="post" action="">
    <label class="block text-sm font-medium text-gray-700"> Title </label>
    <input type="text" class="title-input mb-4 py-3 w-full rounded-md border-[1.5px] border-gray-500 bg-white text-sm text-gray-700 shadow-sm"/>

    <label class=" block my-4 text-sm font-medium text-gray-700"> Content 1 </label>
    <textarea class="content1-input" name="" id="editor" cols="30" rows="10"></textarea>
     
    <label class=" block my-4 text-sm font-medium text-gray-700"> Image </label>
    <input type="file" class="image-input">
     
    
    <label class=" block my-4 text-sm font-medium text-gray-700"> Content 2 </label>
    <textarea class="content2-input" name="" id="editor2" cols="30" rows="10"></textarea>

    <label class="block my-4 text-sm font-medium text-gray-700"> Author </label>
    <input type="text" class="author-input py-3 w-full rounded-md border-[1.5px] border-gray-500 bg-white text-sm text-gray-700 shadow-sm"/>

    <button class="add-post block rounded-lg mt-5 bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"> Create Post </button>
    </form>
    </div>
    `;
};
export default AddPostPage;