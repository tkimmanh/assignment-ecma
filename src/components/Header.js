import { logout } from '../api/user'
import { useEffect, useState , router } from '../utilities'
import { truncateText } from '../utilities/common'
export const Header = () => {
  const { user } = JSON.parse(localStorage.getItem('userLogin')) || {}
  useEffect(() => {
    const btnLogout = document.querySelectorAll('.btn-logout');
    [...btnLogout].forEach((btn) => {
     btn.addEventListener('click',function(){
        try {
          localStorage.removeItem('userLogin')
          router.navigate('/')
        } catch (error) {
          console.log('Đăng xuất thất bại');
          console.log(error);
        }
}) 
    })
  })
    return `
    <header>
    <div class="header-container flex justify-between my-2 lg:max-w-7xl mx-auto">
      <!-- logo -->
      <div class="main-logo">
        <img
          class="w-[65px] h-[25]"
          src="./images/bird-colorful-gradient-design-vector_343694-2506.avif"
          alt=""
        />
      </div>
    
      <!-- nav -->
      <div class="main-nav mt-4">
        <a
          class="font-normal text-[#49505780] hover:text-black mx-2"
          href="/"
          >Home</a
        >
        <a
          class="font-normal text-[#49505780] hover:text-black mx-2"
          href="/blog"
          >Blog</a
        >
        <a
          class="font-normal text-[#49505780] hover:text-black mx-2"
          href=""
          >Contact</a
        >
        <a
        class="font-normal text-[#49505780] hover:text-black mx-2"
        href=""
        >About</a
      >
      </div>
      <!-- info -->
      <div class="main-info mt-4">
     
        <a class="mx-1" href="">
          <box-icon
            class="text-[#49505780]"
            type="logo"
            name="facebook-circle"
          ></box-icon>
        </a>
        <a class="mx-1" href="">
          <box-icon
            class="text-[#49505780]"
            type="logo"
            name="github"
          ></box-icon>
        </a>
        <a class="mx-1" href="">
          <box-icon class="text-[#49505780]" name="envelope"></box-icon>
        </a>
      </div>
      ${user ? `
      <div class="login">
       <img class="inline rounded" src="https://i.pravatar.cc/50" />
      <span>${truncateText(user.email,10 ?? "")}</span>
      <button class="btn-logout bg-green-400 px-2 py-1 rounded text-white">Logout</button>
      </div>
    </div>
      ` : "<a class='mt-3' href='/login'>Login</a>"}
    <button class="btn-logout hidden bg-green-400 px-2 py-1 rounded text-white">Logout</button>
    <!-- end header-container -->
  </header>`
}
export default Header