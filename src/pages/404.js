import { Header } from "../components/Header"
const NotFound = () => {
      return `
      ${Header()}
      <div class="grid h-screen px-4 bg-white place-content-center">
      <h1 class="tracking-widest text-gray-500 uppercase">404 | Not Found</h1>
      </div>
      `
}
export default NotFound