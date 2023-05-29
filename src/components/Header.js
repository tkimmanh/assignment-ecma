import { useEffect } from '../utilities'
export const Header = () => {
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
    </div>
    <!-- end header-container -->
  </header>
    `
}