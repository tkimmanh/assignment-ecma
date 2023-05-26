import { data } from "../../data";
import {truncateText } from '../utilities/common'
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const HomePage = () => {
  return `
  
    ${Header()}
    <main class="lg:max-w-7xl md:max-w-5xl md:px-2 my-0 mx-auto">
    <!-- main-contaier -->
    <div class="main-contaier">
    <!-- background -->
    <div class="background mx-auto lg:max-w-6xl md:max-w-4xl max-w-2xl">
      <div class="">
        <div
          class="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-24 gap-0 text-center lg:text-left"
        >
          <div class="text-content my-auto">
            <span
              class="font-extrabold text-transparent md:text-5xl lg:text-8xl text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Portfolio</span
            >
            <h1 class="font-bold font-[Poppins] text-4xl text-[#21243D]">
              Hi, I am Manh,
            </h1>

            <h1 class="font-bold font-[Poppins] text-4xl text-[#21243D]">
              front end developer
            </h1>
            <p class="max-w-[500px] my-5 mx-auto">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor
              do amet sint. Velit officia consequat duis enim velit
              mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button class="open-timeline bg-gradient-to-r from-green-200 to-green-500 hover:shadow-lg shadow-cyan-500/50 w-52 h-11 rounded-2xl font-semibold font-[Poppins] text-xl text-white"
            > Timeline</button>
          </div>
          <div class="image-content mt-9">
            <img
              class="h-[450px] mx-auto w-[450px] object-cover border-8 border-white-500/100 origin-center lg:rotate-6 lg:hover:rotate-12"
              src="https://images.pexels.com/photos/7841717/pexels-photo-7841717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <!-- incrementing counter -->
 
    <div>   
    <div class="content max-w-7xl mx-3 lg:mx-0 min-h-[200px] lg:flex md:flex md:justify-evenly md:items-center lg:items-center lg:justify-around bg-gradient-to-r from-purple-400 to-pink-600">

      <div class="text-center py-4 lg:py-0">
      <div class="value text-white font-bold text-6xl lg:text-center"akhi="69">0</div>
      <span class=" text-white font-bold  text-center text-xl">PROJECT</span>
      </div>

      <div class="text-center py-4 lg:py-0 ">
      <div class="value text-white font-bold text-6xl text-center" akhi="0">0</div>
      <span class=" text-white font-bold mx-auto text-xl">YEARS EXPERIENCE</span>
      </div>

     <div class="text-center py-4 lg:py-0">
      <div class="value text-white font-bold text-6xl text-center" akhi="7">0</div>
      <span class="text-white font-bold  ext-xl">SKILL</span>
      </div>

      <div class="text-center py-4 lg:py-0 md:py-0">
        <div class="value text-white font-bold text-6xl text-center" akhi="200">0</div>
        <span class=" text-white font-bold text-xl">WORKING HOURS +</span>
      </div>

    </div>
  </div>
    <!-- blog -->
    <div class="main-blog mt-10">
      <h1
        class="text-center font-bold font-[Poppins] text-4xl text-[#21243D]"
      >
        -Blog-
      </h1>
      <!-- box blog -->
      <ul
        class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full mx-auto"
      >
       ${data.map((blog) => {
        return `
        <li class="blog max-w-full m-5 mx-4">
        <div class="relative">
        <img
          class="lg:max-w-[400px] lg:h-[250px] w-full h-[300px] hover:scale-100 object-cover rounded"
          src="${blog.image}"
          alt=""
        />
        <h2
          class="category absolute top-5 text-white right-5 bg-[#2125294D] px-2 font-semibold"
        >
         ${blog.category}
        </h2>
      </div>
      <div class="date my-3">
        <span class="font-thin">${dayjs(blog.createAt).format('DD.MM.YYYY')}</span>
      </div>
      <div
        class="title hover:underline font-bold font-[Poppins] text-xl text-[#21243D] my-3"
      >
        <a href="/blog/${blog.id}">${blog.title}</a>
      </div>
      <div class="desc">
        <p class="font-thin text-sm">
          ${truncateText(blog.content1,90)}
        </p>
      </div>
      <div class="spaceX border-t-2 mt-2"></div>
      <div class="author bg-[#20e3b2C4] my-3 py-2  rounded-md">
        <h2 class="text-sm text-center text-white">
          By: ${blog.author}
        </h2>
      </div>
    </li>
        `
       }).join('')}
      </ul>
      <!-- end box blog -->
      <ul class="flex justify-center">
        <li class="page-item mx-3">
          <a class="page-link" href="" aria-label="Next">
            <span aria-hidden="true">&raquo; Prev</span>
          </a>
        </li>

        <li class="page-item mx-3">
          <a class="page-link" href="" aria-label="Next">
            <span aria-hidden="true">Next &raquo;</span>
          </a>
        </li>
      </ul>
    </div>
   <!-- time line -->
<div class="box-timeline bg-white hidden lg:block left-[-2000px] transition-all duration-500 ease-linear w-4xl h-screen fixed mx-auto bottom-0 top-0 py-4 overflow-y-scroll ">
<div class="float-right cursor-pointer p-5 inline">
<box-icon class="remove-timeLine" name='x'></box-icon>
</div>
<h1 class="text-center font-bold text-2xl">Time Line</h1> 
  <div class=" grid grid-cols-9 w-[800px] px-2">
    <!-- Stack 1 -->
    <div class="col-span-4 w-full h-full ">
        <div class="w-full h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-md p-2 md:pl-4">
            <h1 class="text-white text-xl font-medium py-2">2020</h1>
            <p class="text-gray-100 sm:text-sm text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla </p>
        </div>
    </div>
    <div class="relative col-span-1 w-full h-full flex justify-center items-center">
        <div class="h-full w-1 bg-indigo-300"></div>
        <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">1</div>
    </div>
    <div class="col-span-4 w-full h-full"></div>
    <!-- Stack 2 -->
    <div class="col-span-4 w-full h-full"></div>
    <div class="relative col-span-1 w-full h-full flex justify-center items-center">
        <div class="h-full w-1 bg-indigo-300"></div>
        <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">2</div>
    </div>
    <div class="col-span-4 w-full h-full ">
        <div class="w-full h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-md p-2 md:pl-4">
            <h1 class="text-white text-xl font-medium py-2">2021</h1>
            <p class="text-gray-100 sm:text-sm text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla ?</p>
        </div>
    </div>

    <!-- Stack 3 -->
    <div class="col-span-4 w-full h-full ">
        <div class="w-full h-full bg-gradient-to-r from-sky-400 to-cyan-300 rounded-md p-2 md:pl-4">
            <h1 class="text-white text-xl font-medium py-2">2022</h1>
            <p class="text-gray-100 sm:text-sm text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla </p>
        </div>
    </div>
    <div class="relative col-span-1 w-full h-full flex justify-center items-center">
        <div class="h-full w-1 bg-indigo-300"></div>
        <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">3</div>
    </div>
    <div class="col-span-4 w-full h-full"></div>
    
    <!-- stack 4 -->
    <div class="col-span-4 w-full h-full"></div>
    <div class="relative col-span-1 w-full h-full flex justify-center items-center">
        <div class="h-full w-1 bg-indigo-300"></div>
        <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">4</div>
    </div>
    <div class="col-span-4 w-full h-full ">
        <div class="w-full h-full bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 rounded-md p-2 md:pl-4">
            <h1 class="text-white text-xl font-medium py-2">2023</h1>
            <p class="text-gray-100 sm:text-sm text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla ?</p>
        </div>
    </div>
</div>
</div>
</div>
   <!-- skill -->
   <h1 class="text-center font-bold font-[Poppins] py-12 lg:py-7 text-4xl text-[#21243D]">-Skill-</h1>
   <div class="grid lg:grid-cols-6 md:grid-cols-5 grid-cols-4 lg:gap-20 md:gap-15 gap-4">
    <img class=" h-40 object-contain" src="./images/HTML5_logo_and_wordmark.svg.png" alt="">
    <img class=" h-40 object-contain" src="./images/css.png" alt="">
    <img class=" h-40 object-contain" src="./images/logoJS.png" alt="">
    <img class=" h-40 object-contain" src="./images/Tailwind_CSS_Logo.svg.png" alt="">
    <img class=" h-40 object-contain" src="./images/PHP.png" alt="">
    <img class=" h-40 object-contain" src="./images/boostrap.png" alt="">
    <!-- <img class=" h-40 object-contain" src="./images/reactjs.png" alt="">
    <img class=" h-40 object-contain" src="./images/ts.png" alt="">
    <img class=" h-40 object-contain" src="./images/nodejs.png" alt=""> -->
   </div>
  <!-- end main contaier -->
</div>

  </main>
   </div> 
   ${Footer()}
   `;
};
export default HomePage;
