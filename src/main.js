import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import DetailBlogPage from './pages/DetailBlogPage';
import HomePage from './pages/HomePage';
import {render , router } from './utilities';
import NotFoundPage from './pages/404';
import AddPostPage from './pages/admin/AddPostPage';
import PostAdminPage from './pages/admin/PostAdminPage';
import EditPostPage from './pages/admin/EditPostPage';
import LoginPage from './pages/LoginPage';
import CategoriesPage from './pages/CategoriesPage';

//private router 
router.on("/admin/*", () => {},{
    before(next) {
        const { user } = JSON.parse(localStorage.getItem("userLogin")) || {}
        if(!user) return (window.location.href = "/")
        if(!user && user.id === 2 ) return (window.location.href = "/admin/blog/list");
        next();
    }
})
router.on('/',() => render(HomePage,app));
router.on('/about',() => render(AboutPage,app));
router.on('/blog',() => render(BlogPage,app));
router.on('/blog/:id',({data}) => render(() => DetailBlogPage(data.id),app))
router.on('/cate/:id',({data}) => render(() => CategoriesPage(data),app))
router.on('/login',() => render(LoginPage,app))

router.on('/admin/blog/add',() => render(AddPostPage,app));
router.on('/admin/blog/list',() => render(PostAdminPage,app));
router.on('/admin/blog/:id/edit',({data}) => render(() => EditPostPage(data),app));

router.notFound(() => render(NotFoundPage,app));
router.resolve();
