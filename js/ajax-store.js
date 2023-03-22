(function() {
	"use strict";

	// Tool info api request
	const getInfo = async () => {
		try {
			let response = await fetch ('/data/inventory.json');
			return await response.json();
		} catch (error) {
			console.log(error);
		}
	}

	// blog posts api request
	const getBlogPosts = async () => {
		try {
			let response = await fetch ('/data/blog.json');
			return await response.json();
		} catch (error) {
			console.log(error);
		}
	}

	(async() => {

		// variables holding json objects
		let info = await getInfo();
		let posts = await getBlogPosts()
		console.log(posts);

		// creates div structure for blog posts
		const addBlogPosts = () => {
			let html = '';
			for (let i = 0; i < posts.length; i++){
				html += addPost(i);
			}
			return html
		}
		const addPost = (i) => {
			let onePost = '<h3>' +  posts[i].title + '</h3>' +
				'<div class="row justify-space-between">' +
				'<div>' + posts[i].content + '</div>' +
				'<div>' + posts[i].categories +  '</div>' +
				'<div>' + posts[i].date + '</div>' +
				'</div>';
			return onePost;
		}

		// creates table for tool info
		const addProduct = (i) => {
			let tableRow = '<tr>';
			tableRow += '<td>' + info[i].title + '</td>' +
						'<td>' + info[i].quantity + '</td>' +
						'<td>' + info[i].price + '</td>' +
						'<td>' + info[i].categories + '</td>';
			tableRow += '</tr>';

			return tableRow;
		}
		const addProducts = () => {
			let table = '';
			for (let i = 0; i < info.length; i++){
				table += addProduct(i);
			}
			return table;
		}




		let productTable = document.querySelector('#insertProducts');
		productTable.innerHTML = addProducts();

		let blogPosts = document.querySelector('#blogPosts');
		blogPosts.innerHTML = addBlogPosts();



	})();



})();