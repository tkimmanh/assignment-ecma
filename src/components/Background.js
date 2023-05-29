const Background = () => {
    return `
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
    `
}
export default Background