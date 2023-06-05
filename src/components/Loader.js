const Loader = () => {
    return `
    <!-- loader -->
    <div id="loader" class="hidden">
      <div class="w-full h-full fixed top-0 left-0 bg-white z-50">
        <div class="flex justify-center items-center mt-[50vh]">
          <div class="fas fa-circle-notch fa-spin fa-5x text-violet-600"></div>
        </div>
      </div>
    </div>
    <!-- loader -->
    `
}
export default Loader