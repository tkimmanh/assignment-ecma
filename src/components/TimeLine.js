import { useEffect } from "../utilities";
const Timeline = () => {
    useEffect(() => {
        try {
          const timeLine = document.querySelector(".box-timeline");
          const btnTimeLine = document.querySelector(".open-timeline");
          const removeTimeLine = document.querySelector(".remove-timeLine");
          btnTimeLine.addEventListener("click", function () {
            timeLine.classList.add("left-0");
            timeLine.classList.remove("left-[-2000px]");
          });
          removeTimeLine.addEventListener("click", function () {
            timeLine.classList.remove("left-0");
            timeLine.classList.add("left-[-2000px]");

          });
        } catch (error) {
          console.log(error);
        }
      });
    return `
<div class="box-timeline bg-white left-[-2000px] md:inline lg:inline hidden transition-all duration-500 ease-linear w-4xl h-screen fixed mx-auto bottom-0 top-0 py-4 overflow-y-scroll max-w-4xl">
<div class="float-right cursor-pointer p-5 inline">
<box-icon class="remove-timeLine" name='x'></box-icon>
</div>
<h1 class="text-center font-bold text-2xl">Time Line</h1> 
  <div class=" grid grid-cols-9 w-[800px] px-2">
    <!-- Stack 1 -->
    <div class="col-span-4 w-full h-full">
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
    `
}
export default Timeline