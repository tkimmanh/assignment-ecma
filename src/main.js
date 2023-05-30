import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import DetailBlogPage from './pages/DetailBlogPage';
import HomePage from './pages/HomePage';
import {render , router } from './utilities';
import NotFoundPage from './pages/404';
import AddPostPage from './pages/admin/AddPostPage';
import PostAdminPage from './pages/admin/PostAdminPage';

const app = document.getElementById('app');
router.on('/',() => render(HomePage,app));
router.on('/about',() => render(AboutPage,app))
router.on('/blog',() => render(BlogPage,app))
router.on('/blog/:id',({data}) => render(() => DetailBlogPage(data.id),app))

router.on('admin/blog/add',() => render(AddPostPage,app));
router.on('admin/blog/list',() => render(PostAdminPage,app))
router.notFound(() => render(NotFoundPage,app));
router.resolve();