const baseURL = 'https://foodhub-api.herokuapp.com';

export const api = {
	createBlogPost: `${baseURL}/blog/create`,
	getBlogList: `${baseURL}/blog`,
	searchRestaurant: (foodtype) => `${baseURL}/restaurant/search?food=${foodtype}&sort=popularity`,
	createRestaurant: `${baseURL}/admin/restaurants/create`,
	deleteRestaurant: `${baseURL}/admin/restaurants/delete`,
	reviewRestaurant: (id) => `${baseURL}/restaurant/review/${id}`,
	placeOrder: (id) => `${baseURL}/restaurant/order/${id}`,
	orderHistory: `${baseURL}/restaurant/order`,
	userRestaurant: `${baseURL}/restaurant/user`,
	updateRestaurant: (id) => `${baseURL}/admin/restaurants/update/${id}`,
	restaurantDetails: `${baseURL}/restaurant/details`,
	login: `${baseURL}/auth/login`,
	signup: `${baseURL}/auth/register`,
};