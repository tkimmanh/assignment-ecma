import { deletePost, getAllPost } from "../../api/posts";
import HeaderAdmin from "../../components/admin/Header-Admin";
import { useEffect, useState } from "../../utilities";
import { truncateText } from "../../utilities/common";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const PostAdminPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
     const posts = await getAllPost('')
      setPosts(posts)
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
useEffect(() => {
    const btns = document.querySelectorAll('.btn-remove');
    [...btns].forEach((btn) => {
      btn.addEventListener('click',async function(e){
        const id = this.dataset.id
        const confirmRemove = window.confirm('Có muốn xóa không ? :)') 
        if(!confirmRemove) return;
        try {
          await deletePost(id)
          const newList = posts.filter((post) => post.id !== +id)
          setPosts(newList)
        } catch (error) {
          console.log(error);
        }
      })
    })
  })
  return `
  ${HeaderAdmin()}
  <h1 class="text-center font-bold text-2xl my-5">List Post</h1>
    <div class="overflow-x-auto">
  <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">

    <thead class="ltr:text-left rtl:text-right">
      <tr>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">title</th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">author</th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">categories</th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">content 1</th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">content 2</th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">createdAt</th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">updatedAt</th>
        <th class="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
    ${posts.map((post) => {
      return `
      <tr>
      <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">${truncateText(post.title,30)  ?? ""}</td>
      <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">${truncateText(post.author,20) ?? "Trống"}</td>
      <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">${post.categories ?? "Trống"}</td>
      <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">${truncateText(post.content1,40) ?? "Trống"}</td>
      <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">${truncateText(post.content2,40) ?? "Trống"}</td>
      <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">${dayjs(post.createdAt).format("DD-MM-YYYY") ?? ""}</td>
      <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">${dayjs(post.updatedAt).format("DD-MM-YYYY") ?? "Chưa update"}</td>
      <td class="whitespace-nowrap px-4 py-2">
        <a href="#" class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">Edit</a>
        <button data-id=${post.id ?? ""} class="btn-remove inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">Delete</button>
      </td>
    </tr>
      `
    }).join('')}
     
    </tbody>
  </table>
</div>
    `;
};
export default PostAdminPage;
