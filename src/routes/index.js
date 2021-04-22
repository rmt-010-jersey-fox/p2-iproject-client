import Home from "../views/Home.vue";
import Playlist from "../views/Playlist.vue";

const  routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/playlist",
		component: Playlist,
	},
];

export default routes;
