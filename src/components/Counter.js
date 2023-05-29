import { useEffect } from "../utilities";
const Counter = () => {
    useEffect(() => {
        try {
          const counters = document.querySelectorAll(".value");
          const speed = 300;
          counters.forEach((counter) => {
            const animate = () => {
              const value = +counter.getAttribute("akhi");
              const data = +counter.innerText;
              const time = value / speed;
              if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
              } else {
                counter.innerText = value;
              }
            };
            animate();
          });
        } catch (error) {
          console.log(error);
        }
      });
    return `
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
    `
}
export default Counter;