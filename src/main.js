import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import DetailBlogPage from './pages/DetailBlogPage';
import HomePage from './pages/HomePage';
import {render , router } from './utilities';
import NotFound from './pages/404';

const app = document.getElementById('app');
router.on('/',() => render(HomePage,app));
router.on('/about',() => render(AboutPage,app))
router.on('/blog',() => render(BlogPage,app))
router.on('/blog/:id',({data}) => render(() => DetailBlogPage(data.id),app))

router.notFound(() => render(NotFound, app));
router.resolve();