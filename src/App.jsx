import tail from "./assets/tail.png"

function App() {
	return (
		<div className=" font-sans  flex flex-col items-center">
			{/* <div className="flex flex-col  items-center">
				<header className="bg-indigo-700  w-full px-4 py-3  flex justify-center  items-center   border-pink-500 border-b-4 ">
					<div className="max-w-4xl w-full">
						<div className="flex items-center justify-between  text-pink-700">
							<svg
								className="h-8 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 108 32">
								<path d="M16.2 12.8h6.4c.9 0 1.7.7 1.7 1.7 0 .9-.7 1.7-1.7 1.7h-6.4c-.9 0-1.7-.7-1.7-1.7s.8-1.7 1.7-1.7zm-.2 3.9h3c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4h-3c-.8 0-1.4-.6-1.4-1.4-.1-.7.6-1.4 1.4-1.4zm-3.7 3.5h6.4c.9 0 1.7.7 1.7 1.7 0 .9-.7 1.7-1.7 1.7h-6.4c-.9 0-1.7-.7-1.7-1.7.1-.9.8-1.7 1.7-1.7zm-4.4 0c1 0 1.7.7 1.7 1.7 0 .9-.7 1.7-1.7 1.7-.9 0-1.7-.7-1.7-1.7 0-.9.8-1.7 1.7-1.7zm19.8.6c.3 2.1 2.4 3 4.8 3 2.7 0 4.6-1.2 4.6-3.4 0-1.5-.9-2.6-2.8-3.1l-2.4-.5c-.6-.1-.8-.4-.8-.7 0-.4.3-.8 1.2-.8 1 0 1.6.6 1.7 1.2l3-.6c-.5-1.8-2.1-2.9-4.7-2.9s-4.4 1.4-4.4 3.4c0 1.6 1.1 2.6 3 3l2.1.4c.7.1 1 .4 1 .7 0 .4-.5.8-1.3.8-.9 0-1.7-.3-1.8-1.2l-3.2.7zm15.1.1c-1.5 0-2.4-1.1-2.4-2.5 0-1.5 1-2.5 2.4-2.5 1 0 1.9.6 2.1 1.8l3-.7c-.5-2.5-2.6-4-5.1-4-3 0-5.5 2.2-5.5 5.4s2.5 5.4 5.5 5.4c2.5 0 4.7-1.6 5.2-4l-3-.6c-.3 1.2-1.2 1.7-2.2 1.7zm12.4-7.8c-1.7 0-2.8.9-3.5 2.1v-1.9h-3.2v10.2h3.2v-3.2c0-2.6 1.2-3.8 3.5-3.8h.6l.1-3.2c-.2-.1-.4-.2-.7-.2zm3-4.6c-1.1 0-1.9.8-1.9 1.8s.8 1.8 1.9 1.8c1.1 0 1.9-.8 1.9-1.8s-.8-1.8-1.9-1.8zm1.7 14.9V13.3h-3.2v10.2h3.2v-.1zM73.7 13c-1.6 0-2.8.7-3.6 1.7-.7-1.1-1.9-1.7-3.3-1.7-1.3 0-2.3.5-3 1.2v-.9h-3.2v10.2h3.2v-5c0-1.7.8-2.6 1.9-2.6 1 0 1.7.7 1.7 1.9v5.7h3.2v-5c0-1.7.8-2.6 2-2.6 1 0 1.7.7 1.7 1.9v5.7h3.2v-6.4c.1-2.5-1.6-4.1-3.8-4.1zm10.8 0c-1.3 0-2.4.4-3.2 1.1V8.9h-3.2v14.6h3.2v-.8c.8.7 1.8 1.1 3.2 1.1 2.7 0 5-2.2 5-5.4-.1-3.2-2.3-5.4-5-5.4zm-.7 8c-1.3 0-2.5-1.1-2.5-2.6 0-1.6 1.2-2.6 2.5-2.6 1.4 0 2.4 1.1 2.4 2.6s-1 2.6-2.4 2.6zm17.4-7.7H98v.8c-.8-.7-1.8-1.1-3.2-1.1-2.7 0-5 2.2-5 5.4s2.3 5.4 5 5.4c1.3 0 2.4-.4 3.2-1.1v.8h3.2V13.3zM95.5 21c-1.4 0-2.4-1.1-2.4-2.6 0-1.6 1-2.6 2.4-2.6 1.3 0 2.5 1.1 2.5 2.6S96.8 21 95.5 21z" />
							</svg>

							<button
								type="button"
								className="text-gray-600  hover:text-gray-400 sm:hidden">
								<svg className="w-6 h-6  fill-current " viewBox="0 0 24 24">
									<path
										fill-rule="evenodd"
										d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
									/>
								</svg>
							</button>
						</div>
						<div className="my-4 ">
							<h1 className="text-2xl text-indigo-100 ">
								Want to learn Tailwind css?
							</h1>
							<p className="text-sm text-indigo-100">
								Tailwind is the fastest growing utility-first CSS framework.
								Let's learn it step by step.
							</p>

							<div className="relative flex mt-4 ">
								<div className="">
									<a
										href="#"
										className="bg-orange-600 backdrop:text-indigo-100 rounded px-4 py-2  text-xs ">
										Enroll Now
									</a>
								</div>

								<div className="bg-white   rounded-full  flex justify-center items-center p-5  border-4 border-pink-500  absolute  right-0 ">
									<img
										src={tail}
										className="w-16 h-16  object-contain"
										alt="Tailwind Logo"
									/>
								</div>
							</div>
						</div>
					</div>
				</header>
				<main className="mt-16   w-full   flex flex-col items-center">
					<div className="max-w-4xl mx-4">
						<h2 className="font-bold text-xl text-indigo-700 border-b border-indigo-500  pb-1">
							How it works
						</h2>
						<p className="text-sm mt-4 text-gray-600">
							Tailwind is designed for rapid development of modern applications.
							At its core, it is a robust mobile-first design system built with
							developer experience in mind. After using Tailwind CSS, you will
							find it difficult to go back to use anything else. Learn all about
							it in this all-inclusive course.
						</p>
						<h2 class="pb-1  mt-8 font-bold text-xl text-indigo-700 border-b boder-indigo-600">
							Advantages
						</h2>
						{/* Cards Section */}

			{/* <div className="flex flex-col sm:flex-row  sm:-mx-2">
							<div className="sm:w-1/3  mt-4">
								<div
									className="bg-white h-full p-8 border-b-4
							border-pink-600 rounded-lg  flex flex-col  items-center 
						       sm:mx-2 sm:p-3 md:p-8
							"> */}
			{/*  w-16  but  with p-2 leaves icon with w of 12 to fit it thus whwen rounded gives perfect square*/}
			{/* <div className="bg-gray-200 text-indigo-700 h-16 w-16 rounded-full p-2">
										<svg
											className="w-12 h-12 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24">
											<path
												d="M18.9 19.7l-6.9 2-6.9-2L3.7 3h16.7c-.5 5.6-1 11.1-1.5 16.7zM19.4 4H4.8l1.3 14.9 5.9 1.7 5.9-1.7L19.4 4zM8.1 13.8h2V15l2 .7 2-.7.1-2.2H9.9l-.1-2h4.5l.1-2H7.7l-.1-2h9l-.2 3.9-.4 5.8-3.9 1.3-3.9-1.3-.1-2.7z"
												fill-rule="evenodd"
												clip-rule="evenodd"
											/>
										</svg>
									</div> */}
			{/* <div className="mt-4 font-bold">No Custom CSS.</div>
									<div className="text-center  mt-2">
										Tailwind's advanced class extraction will leave your project
										free of custom CSS.
									</div> */}
			{/* </div> */}
			{/* </div> */}

			{/* <div className="sm:w-1/3 mt-4">
								<div
									className="bg-white h-full p-8 border-b-4
							border-pink-600 rounded-lg  flex flex-col  items-center 
							   sm:mx-2 sm:p-3 md:p-8 
							"> */}
			{/*  w-16  but  with p-2 leaves icon with w of 12 to fit it thus whwen rounded gives perfect square*/}
			{/* <div className="bg-gray-200    text-indigo-700 h-16 w-16 rounded-full p-2">
										<svg
											className="w-12 h-12 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24">
											<path d="M20.1 4H3.6c-.5 0-.9.4-.9.9v10.5c0 .5.4.9.9.9h6.2v2H7.4c-.5 0-.8.4-.8.8s.3.9.8.9h9c.5 0 .8-.4.8-.8s-.4-.8-.8-.8H14v-2h6.2c.5 0 .9-.4.9-.9V4.9c-.1-.5-.5-.9-1-.9zm-.4 11H4.1V5.4h15.6V15zM6.9 10.7L9.7 12h.2c.1 0 .2 0 .3-.1.2-.1.3-.3.3-.5s-.1-.4-.3-.5l-1.7-.8 1.7-.8c.2-.1.3-.3.3-.5s-.1-.4-.3-.5h-.3c-.1 0-.2 0-.2.1L6.9 9.6c-.2.1-.3.3-.3.5 0 .3.1.5.3.6zm3.6 2.6c.1.1.3.2.4.2.2 0 .4-.2.5-.4l1.8-5.8c.1-.2 0-.4-.1-.5-.1-.1-.3-.2-.4-.2-.2 0-.4.2-.5.4l-1.8 5.8c0 .2 0 .4.1.5zm2.8-4.5c0 .2.1.4.3.5l1.7.8-1.7.9c-.2.1-.3.3-.3.5s.1.4.3.5c.1.1.2.1.3.1.1 0 .2 0 .2-.1l2.8-1.3c.2-.1.3-.3.3-.5s-.1-.4-.3-.5L14 8.3c-.1 0-.1-.1-.2-.1s-.2 0-.3.1c-.1.2-.2.3-.2.5z" />
										</svg>
									</div> */}
			{/* <div className="mt-4 font-bold">Devloper Experience.</div>
									<div className="text-center  mt-2">
										Tailwind is designed with your happiness in mind. The ease
										of performing changes is refreshing..
									</div> */}
			{/* </div> */}
			{/* </div> */}

			{/* <div className="sm:w-1/3  mt-4">
								<div
									className="bg-white h-full p-8 border-b-4  
							border-pink-600 rounded-lg  flex flex-col  items-center 
							 sm:mx-2  sm:p-3 md:p-8
							"> */}
			{/*  w-16  but  with p-2 leaves icon with w of 12 to fit it thus whwen rounded gives perfect square*/}
			{/* <div className="bg-gray-200 text-indigo-700 h-16 w-16 rounded-full p-2">
										<svg
											className="w-12 h-12 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24">
											<path d="M15.3 3.3c0-.2.1-.3.3-.3h.4c.2 0 .3.1.3.3 0 .2-.1.3-.3.3h-.3c-.2.1-.4-.1-.4-.3zm-5 .4h3.3c.2 0 .3-.1.3-.3.1-.3 0-.4-.2-.4h-3.3c-.3 0-.4.1-.4.3 0 .2.1.4.3.4zm7.4 14.6v2.5c0 .7-.5 1.2-1.2 1.2h-9c-.7 0-1.2-.5-1.2-1.2V3.2c0-.7.6-1.2 1.2-1.2h8.9c.7 0 1.2.5 1.2 1.2v15.1zM7 18h10V4.7H7V18zM7 3.2V4h10v-.8c0-.3-.2-.5-.5-.5h-9c-.3 0-.5.2-.5.5zm10 17.6v-2.1H7v2.1c0 .3.2.5.5.5h8.9c.4 0 .6-.2.6-.5zm-3.7-.9v.2c0 .5-.4.9-.9.9h-.8c-.5 0-.9-.4-.9-.9v-.2c0-.5.4-.9.9-.9h.8c.5 0 .9.4.9.9zm-.6 0c0-.1-.1-.3-.3-.3h-.8c-.1 0-.3.1-.3.3v.2c0 .1.1.3.3.3h.8c.1 0 .3-.1.3-.3v-.2zm3.8 2.5h-9c-.9 0-1.6-.7-1.6-1.6V3.2c0-.9.7-1.6 1.6-1.6h8.9c.9 0 1.6.7 1.6 1.6v17.6c0 .9-.7 1.6-1.5 1.6zM13.4 21h3.1c.1 0 .2-.1.2-.2V19h-3.3c.2.2.3.5.3.9v.2c0 .3-.1.6-.3.9zm-6-2v1.8c0 .1.1.2.2.2h3.1c-.2-.2-.3-.5-.3-.9v-.2c0-.3.1-.6.3-.9H7.4zm0-1.4h9.2V5H7.4v12.6zm6.9-14h.7v-.3V3h-.7c0 .1.1.2.1.3s0 .2-.1.3zm-6.9 0h2.3c0-.1-.1-.2-.1-.3s0-.2.1-.3H7.5c-.1 0-.1.1-.1.2v.4z" />
										</svg>
									</div> */}
			{/* <div className="mt-4 font-bold">Mobile Friendly.</div>
									<div className="text-center mt-2">
										Modern applications demand mobile-friendly & Tailwind's
										responsive modifiers make it easy.
									</div>
								</div>
							</div>
						</div>
					</div> */}

			{/* Forms Section*/}

			{/* <div className="bg-gray-800 w-full py-12  mt-12 flex flex-col items-center  border-t-2 border-black ">
						<h2 className="font-bold text-xl  text-gray-400">
							Sign up to download the free PDF
						</h2>

						<form className="max-w-xl  w-full  mt-4  p-8  md:p-0  " action="#">
							<div className="flex flex-col md:flex-row  md:-mx-2">
								<label htmlFor="first_name" className=" sr-only">
									Fisrt Name
								</label>
								<input
									type="text"
									className="bg-gray-700 mt-4 text-gray-200  border border-gray-600  outline-none  rounded-lg  py-2 px-4  w-full placeholder:text-gray-200  md:mx-2"
									id="first_name"
									placeholder="First Name"
								/>

								<label htmlFor="last_name" className=" sr-only">
									Last Name
								</label>
								<input
									type="text"
									className="bg-gray-700 mt-4 text-gray-200  border border-gray-600  outline-none  rounded-lg  py-2 px-4  w-full placeholder:text-gray-200  md:mx-2"
									id="last_name"
									placeholder="Last Name"
								/>
							</div>
							<div className="flex flex-col md:flex-row  md:-mx-2">
								<label htmlFor="email" className=" sr-only">
									Email
								</label>
								<input
									type="email"
									className="bg-gray-700 mt-4 text-gray-200  border border-gray-600  outline-none  rounded-lg  py-2 px-4  w-full placeholder:text-gray-200  md:mx-2"
									id="email"
									placeholder="vick@gmail.com"
								/>

								<label htmlFor="title" className=" sr-only">
									Title
								</label>
								<input
									type="text"
									className="bg-gray-700 mt-4 text-gray-200  border border-gray-600  outline-none  rounded-lg  py-2 px-4  w-full placeholder:text-gray-200  md:mx-2"
									id="title"
									placeholder="Title"
								/>
							</div>
							<div className="flex flex-col  md:flex-row  md:-mx-2">
								<button className=" w-full outline-none  bg-blue-600   text-sm rounded mt-4 py-2  px-4 md:mx-2">
									Create Account
								</button>
							</div>
						</form>
					</div> */}
			{/* </main> */}

			{/* <footer className="bg-blue-800 w-full  flex flex-col items-center  p-8">
					<p className="text-xs  text-gray-400  font-bold">
						Copyright © 2019 Scrimba
					</p>
				</footer> */}
			{/* </div> */}

			{/* GRID TUTORIAL */}

			{/* NB  -ALways use --grid-template-columns: repeat(3, minmax(0, max-content));--Here the max-content allows a  grid container to pick much content(width) as it can  but remains remains responsive unlike 1fr which limits space for a grid item.Also avoid huge spaces caused by 1fr in cases the grid item is of less size..Then properties like  justfity-content is available on the whole grid align-content too.NOTE....there is dfiffence btw justify-items center(afects each grid) and justify-content-center(affects whole grid)*/}

			{/* J-itmes and a-items for each grid item and J-content- and a-content- for the whole grid */}

			{/* Place-content is the combination of justify-content and align-content  */}
			{/* place-items is the combination of justify-items and align-content  */}
			{/* justify-self , align-self  is used for aligning individual grid items */}
			{/* Place self is the combination of both justify-self and align-self*/}

			{/* <div className="grid grid-cols-1 justify-center   content-center sm:grid-cols-2  md:grid-cols-3  min-h-screen  gap-6 p-4"> */}
			{/* <div className=" video  h-36">AAAAAAAAAA</div>
				<div className=" video h-36">B</div>
				<div className="video  h-36">C</div> */}
			{/* Use Order to show how each apppear at different sizes.The higher the order the later it comes in arrangement*/}

			{/* <div className="video  h-80   sm:order-3">Advanced</div>
				<div className="video  h-80  sm:order-2 ">Basic</div>
				<div className="video  h-80  sm:order-1">Free</div>
			</div> */}

			{/* <div className="p-8 grid grid-cols-1  gap-6  md:grid-cols-3">
				<div className="md:col-span-2">
					<h1 className="text-3xl  font-bold ">Introduction</h1>
					<p className="mt-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ad
						eaque voluptate dicta incidunt qui obcaecati aut rem ratione fugiat
						odit, provident aliquam consequuntur pariatur, non quo quisquam,
						optio dolores hic mollitia perferendis? Nulla, tempora. Illum culpa
						obcaecati eveniet commodi!
					</p>
				</div> */}

			{/* On larger screen we puts cards adjacent to each other thus new div with grid*/}

			{/* <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 sm:gap-6 md:grid-cols-1 md:gap-y-6  md:row-span-2 md:content-start">
					<div className="p-4  bg-gray-100 rounded-lg">
						<h2 className="font-medium">Actions</h2>
						<ul className="">
							<li>Link1</li>
							<li>Link2</li>
							<li>Link3</li>
						</ul>
					</div>

					<div className="p-4 bg-gray-100 rounded-lg">
						<h2 className="font-medium">Related stuff</h2>
						<ul className="">
							<li>Link1</li>
							<li>Link2</li>
						</ul>
					</div>
				</div> */}
			{/* 
				<div className="md:col-span-2">
					<h2 className="font-semibold text-xl">Heading Two</h2>

					<p className="mt-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
						delectus accusantium enim cumque repellendus? Ipsa doloremque soluta
						iure dolor alias eius eos esse, illo ad inventore adipisci
						reiciendis nesciunt sit?
					</p>
					<p className="mt-2 ">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
						perferendis eligendi voluptas placeat laborum, excepturi quam
						accusamus porro nobis explicabo, numquam nostrum quia optio nesciunt
						beatae officia pariatur quibusdam fugit!
					</p>
				</div> */}
			{/* </div> */}

			<header className="bg-indigo-700 w-full px-4 py-3 flex justify-center  border-b-4 border-pink-500">
				{/* NAV SECTION  */}
				<div className="max-w-4xl w-full">
					<div className="flex items-center justify-between ">
						<div className="text-pink-500">
							<svg
								className="h-8 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 108 32">
								<path d="M16.2 12.8h6.4c.9 0 1.7.7 1.7 1.7 0 .9-.7 1.7-1.7 1.7h-6.4c-.9 0-1.7-.7-1.7-1.7s.8-1.7 1.7-1.7zm-.2 3.9h3c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4h-3c-.8 0-1.4-.6-1.4-1.4-.1-.7.6-1.4 1.4-1.4zm-3.7 3.5h6.4c.9 0 1.7.7 1.7 1.7 0 .9-.7 1.7-1.7 1.7h-6.4c-.9 0-1.7-.7-1.7-1.7.1-.9.8-1.7 1.7-1.7zm-4.4 0c1 0 1.7.7 1.7 1.7 0 .9-.7 1.7-1.7 1.7-.9 0-1.7-.7-1.7-1.7 0-.9.8-1.7 1.7-1.7zm19.8.6c.3 2.1 2.4 3 4.8 3 2.7 0 4.6-1.2 4.6-3.4 0-1.5-.9-2.6-2.8-3.1l-2.4-.5c-.6-.1-.8-.4-.8-.7 0-.4.3-.8 1.2-.8 1 0 1.6.6 1.7 1.2l3-.6c-.5-1.8-2.1-2.9-4.7-2.9s-4.4 1.4-4.4 3.4c0 1.6 1.1 2.6 3 3l2.1.4c.7.1 1 .4 1 .7 0 .4-.5.8-1.3.8-.9 0-1.7-.3-1.8-1.2l-3.2.7zm15.1.1c-1.5 0-2.4-1.1-2.4-2.5 0-1.5 1-2.5 2.4-2.5 1 0 1.9.6 2.1 1.8l3-.7c-.5-2.5-2.6-4-5.1-4-3 0-5.5 2.2-5.5 5.4s2.5 5.4 5.5 5.4c2.5 0 4.7-1.6 5.2-4l-3-.6c-.3 1.2-1.2 1.7-2.2 1.7zm12.4-7.8c-1.7 0-2.8.9-3.5 2.1v-1.9h-3.2v10.2h3.2v-3.2c0-2.6 1.2-3.8 3.5-3.8h.6l.1-3.2c-.2-.1-.4-.2-.7-.2zm3-4.6c-1.1 0-1.9.8-1.9 1.8s.8 1.8 1.9 1.8c1.1 0 1.9-.8 1.9-1.8s-.8-1.8-1.9-1.8zm1.7 14.9V13.3h-3.2v10.2h3.2v-.1zM73.7 13c-1.6 0-2.8.7-3.6 1.7-.7-1.1-1.9-1.7-3.3-1.7-1.3 0-2.3.5-3 1.2v-.9h-3.2v10.2h3.2v-5c0-1.7.8-2.6 1.9-2.6 1 0 1.7.7 1.7 1.9v5.7h3.2v-5c0-1.7.8-2.6 2-2.6 1 0 1.7.7 1.7 1.9v5.7h3.2v-6.4c.1-2.5-1.6-4.1-3.8-4.1zm10.8 0c-1.3 0-2.4.4-3.2 1.1V8.9h-3.2v14.6h3.2v-.8c.8.7 1.8 1.1 3.2 1.1 2.7 0 5-2.2 5-5.4-.1-3.2-2.3-5.4-5-5.4zm-.7 8c-1.3 0-2.5-1.1-2.5-2.6 0-1.6 1.2-2.6 2.5-2.6 1.4 0 2.4 1.1 2.4 2.6s-1 2.6-2.4 2.6zm17.4-7.7H98v.8c-.8-.7-1.8-1.1-3.2-1.1-2.7 0-5 2.2-5 5.4s2.3 5.4 5 5.4c1.3 0 2.4-.4 3.2-1.1v.8h3.2V13.3zM95.5 21c-1.4 0-2.4-1.1-2.4-2.6 0-1.6 1-2.6 2.4-2.6 1.3 0 2.5 1.1 2.5 2.6S96.8 21 95.5 21z" />
							</svg>
						</div>

						<button className=" text-gray-50  sm:hidden    hover:text-gray-200">
							<svg className="w-6 h-6  fill-current " viewBox="0 0 24 24">
								<path
									fill-rule="evenodd"
									d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
								/>
							</svg>
						</button>
					</div>

					<div className="my-8">
						<h1 className="text-2xl font-bold text-indigo-100">
							Want to learn Tailwind?
						</h1>
						<p className="text-indigo-200">
							Tailwind is the fastest growing utility-first CSS framework. Let's
							learn it step by step.
						</p>
						<div className="relative mt-4 flex">
							<div className="">
								<a
									href="#"
									className="bg-orange-500 font-bold  px-4 py-2 rounded-md text-indigo-100   text-sm">
									ENROLL NOW
								</a>
							</div>
							<div className="bg-white rounded-full  flex justify-center items-center border-4  border-pink-500 p-4 absolute  right-0 top-0">
								<img
									src={tail}
									alt="Tailwind Logo"
									className="w-16 h-16 object-contain"
								/>
							</div>
						</div>
					</div>
				</div>
			</header>

			<main className="mt-16 w-full flex  flex-col justify-center items-center">
				<div className="max-w-4xl w-full mt-4">
					<h2 className=" border-4 w-full    text-indigo-700 font-bold  text-xl pb-1 ">
						How it works
					</h2>
					<p className="text-sm mt-4 text-gray-600">
						Tailwind is designed for rapid development of modern applications.
						At its core, it is a robust mobile-first design system built with
						developer experience in mind. After using Tailwind CSS, you will
						find it difficult to go back to use anything else. Learn all about
						it in this all-inclusive course.
					</p>

					<h2 className=" border-4 w-full text-indigo-600 font-bold  text-xl pb-1 ">
						Advantages
					</h2>

					{/* Here  because of mx-2 in each card  to create room misaligns it with Heading (Advantages)  thus on sm there is need to eat on the margin adjacent to compensate.  */}
					<div className="flex flex-col sm:flex-row sm:-mx-2">
						<div className="mt-4 sm:w-1/3">
							<div className="bg-white  h-full p-8 border-b-4 border-pink-500   sm:mx-2  sm:p-3  md:p-8  rounded-lg  flex flex-col items-center">
								<div className="bg-gray-200 text-indigo-700 p-2  w-16  rounded-full  ">
									<svg
										className="w-12 h-12 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24">
										<path
											d="M18.9 19.7l-6.9 2-6.9-2L3.7 3h16.7c-.5 5.6-1 11.1-1.5 16.7zM19.4 4H4.8l1.3 14.9 5.9 1.7 5.9-1.7L19.4 4zM8.1 13.8h2V15l2 .7 2-.7.1-2.2H9.9l-.1-2h4.5l.1-2H7.7l-.1-2h9l-.2 3.9-.4 5.8-3.9 1.3-3.9-1.3-.1-2.7z"
											fill-rule="evenodd"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
								<h3 className="mt-4 font-semibold text-xl">No Custom CSS</h3>
								<p className="text-center mt-2">
									Tailwind's advanced class extraction will leave your project
									free of custom CSS.
								</p>
							</div>
						</div>

						<div className="mt-4 sm:w-1/3">
							<div className="bg-white  h-full p-8 border-b-4 border-pink-500    sm:mx-2   sm:p-3 md:p-8 rounded-lg  flex flex-col items-center">
								<div className="bg-gray-200 text-indigo-700 p-2  w-16  rounded-full  ">
									<svg
										className="w-12 h-12 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24">
										<path d="M20.1 4H3.6c-.5 0-.9.4-.9.9v10.5c0 .5.4.9.9.9h6.2v2H7.4c-.5 0-.8.4-.8.8s.3.9.8.9h9c.5 0 .8-.4.8-.8s-.4-.8-.8-.8H14v-2h6.2c.5 0 .9-.4.9-.9V4.9c-.1-.5-.5-.9-1-.9zm-.4 11H4.1V5.4h15.6V15zM6.9 10.7L9.7 12h.2c.1 0 .2 0 .3-.1.2-.1.3-.3.3-.5s-.1-.4-.3-.5l-1.7-.8 1.7-.8c.2-.1.3-.3.3-.5s-.1-.4-.3-.5h-.3c-.1 0-.2 0-.2.1L6.9 9.6c-.2.1-.3.3-.3.5 0 .3.1.5.3.6zm3.6 2.6c.1.1.3.2.4.2.2 0 .4-.2.5-.4l1.8-5.8c.1-.2 0-.4-.1-.5-.1-.1-.3-.2-.4-.2-.2 0-.4.2-.5.4l-1.8 5.8c0 .2 0 .4.1.5zm2.8-4.5c0 .2.1.4.3.5l1.7.8-1.7.9c-.2.1-.3.3-.3.5s.1.4.3.5c.1.1.2.1.3.1.1 0 .2 0 .2-.1l2.8-1.3c.2-.1.3-.3.3-.5s-.1-.4-.3-.5L14 8.3c-.1 0-.1-.1-.2-.1s-.2 0-.3.1c-.1.2-.2.3-.2.5z" />
									</svg>
								</div>
								<h3 className="mt-4 font-semibold text-xl">
									Developer Experience
								</h3>
								<p className="text-center mt-2">
									Tailwind is designed with your happiness in mind. The ease of
									performing changes is refreshing.
								</p>
							</div>
						</div>

						<div className="mt-4 sm:w-1/3 ">
							<div className="bg-white h-full  p-8 border-b-4 border-pink-500  sm:mx-2  sm:p-3  md:p-8 rounded-lg  flex flex-col items-center">
								<div className="bg-gray-200 text-indigo-700 p-2  w-16  rounded-full  ">
									<svg
										className="w-12 h-12 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24">
										<path d="M15.3 3.3c0-.2.1-.3.3-.3h.4c.2 0 .3.1.3.3 0 .2-.1.3-.3.3h-.3c-.2.1-.4-.1-.4-.3zm-5 .4h3.3c.2 0 .3-.1.3-.3.1-.3 0-.4-.2-.4h-3.3c-.3 0-.4.1-.4.3 0 .2.1.4.3.4zm7.4 14.6v2.5c0 .7-.5 1.2-1.2 1.2h-9c-.7 0-1.2-.5-1.2-1.2V3.2c0-.7.6-1.2 1.2-1.2h8.9c.7 0 1.2.5 1.2 1.2v15.1zM7 18h10V4.7H7V18zM7 3.2V4h10v-.8c0-.3-.2-.5-.5-.5h-9c-.3 0-.5.2-.5.5zm10 17.6v-2.1H7v2.1c0 .3.2.5.5.5h8.9c.4 0 .6-.2.6-.5zm-3.7-.9v.2c0 .5-.4.9-.9.9h-.8c-.5 0-.9-.4-.9-.9v-.2c0-.5.4-.9.9-.9h.8c.5 0 .9.4.9.9zm-.6 0c0-.1-.1-.3-.3-.3h-.8c-.1 0-.3.1-.3.3v.2c0 .1.1.3.3.3h.8c.1 0 .3-.1.3-.3v-.2zm3.8 2.5h-9c-.9 0-1.6-.7-1.6-1.6V3.2c0-.9.7-1.6 1.6-1.6h8.9c.9 0 1.6.7 1.6 1.6v17.6c0 .9-.7 1.6-1.5 1.6zM13.4 21h3.1c.1 0 .2-.1.2-.2V19h-3.3c.2.2.3.5.3.9v.2c0 .3-.1.6-.3.9zm-6-2v1.8c0 .1.1.2.2.2h3.1c-.2-.2-.3-.5-.3-.9v-.2c0-.3.1-.6.3-.9H7.4zm0-1.4h9.2V5H7.4v12.6zm6.9-14h.7v-.3V3h-.7c0 .1.1.2.1.3s0 .2-.1.3zm-6.9 0h2.3c0-.1-.1-.2-.1-.3s0-.2.1-.3H7.5c-.1 0-.1.1-.1.2v.4z" />
									</svg>
								</div>
								<h3 className="mt-4 font-semibold text-xl">Mobile Friendly</h3>
								<p className="text-center mt-2">
									Modern applications demand mobile-friendly & Tailwind's
									responsive modifiers make it easy.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-12 bg-blue-800 py-12  w-full flex flex-col items-center  border-t-2 border-black">
					<h2 className="text-xl font-bold  text-gray-400 ">
						Sign Up for Our Newletter
					</h2>
					<form
						className="w-full mt-4  px-8 md:px-0 text-gray-200 max-w-xl"
						action=""
						method="post">
						<div className="flex flex-col md:flex-row md:-mx-2">
							<label htmlFor="first_name" className=" sr-only">
								First Name
							</label>
							<input
								type="text"
								className=" mt-4 outline-none  md:mx-2 px-4 py-2 rounded bg-gray-700 border border-gray-600   w-full "
								placeholder="First Name"
								id="first_name"
							/>

							<label htmlFor="last_name" className="sr-only">
								Last Name
							</label>
							<input
								type="text"
								className=" mt-4 outline-none  md:mx-2 px-4 py-2 rounded bg-gray-700 border border-gray-600   w-full "
								placeholder="Last Name"
								id="last_name"
							/>
						</div>
						<div className="flex flex-col md:flex-row  md:-mx-2">
							<label htmlFor="email" className=" sr-only">
								Email
							</label>
							<input
								type="email"
								className="mt-4 outline-none  md:mx-2 px-4 py-2 rounded bg-gray-700 border border-gray-600   w-full "
								placeholder="vick@gmail.com"
								id="email"
							/>

							<label htmlFor="title" className="sr-only">
								Title
							</label>
							<input
								type="text"
								className=" mt-4 outline-none  md:mx-2 px-4 py-2 rounded bg-gray-700 border border-gray-600  w-full"
								placeholder="title"
								id="title"
							/>
						</div>
						<div  className=" md:-mx-2 ">
							<button className="bg-blue-600 text-sm mt-4 rounded-lg py-2 px-4 w-full ">
								Create Account
							</button>
						</div>
					</form>
				</div>
			</main>
			<footer className="bg-blue-800  text-center  flex  flex-col  w-full  pb-8 ">
				<p className="text-sm font-normal text-gray-500">
					Copyright © 2019 Scrimba
				</p>
			</footer>
		</div>                    
	)
}

export default App
