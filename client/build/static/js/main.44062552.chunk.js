(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
	[0],
	{
		18: function (e) {
			e.exports = JSON.parse(
				'{"a":"https://social-news-by-golden-ogbeka.herokuapp.com/api","b":"SOCIAL_SHARE_SESSION"}'
			);
		},
		46: function (e, t, s) {},
		76: function (e, t, s) {
			'use strict';
			s.r(t);
			var a = s(0),
				c = s.n(a),
				r = s(22),
				n = s.n(r),
				l = (s(46), s(15)),
				o = s.n(l),
				i = s(19),
				b = s(2),
				d = s(21),
				m = s(7),
				u = s.p + 'static/media/logo.76c6ef58.png',
				j = s(4),
				x = c.a.createContext(null),
				p = s(1);
			var h = function () {
					var e = c.a.useContext(x),
						t = e.contextVariables,
						s = e.setContextVariables;
					return Object(p.jsx)(p.Fragment, {
						children: t.loggedIn
							? Object(p.jsx)('nav', {
									className: 'bg-white h-14 shadow',
									children: Object(p.jsxs)('div', {
										className:
											'px-6 items-center flex h-14',
										children: [
											Object(p.jsx)('div', {
												className: 'flex-grow',
												children: Object(p.jsx)(j.b, {
													to: '/',
													children: Object(p.jsx)(
														'img',
														{
															src: u,
															className: 'h-9',
															alt: 'Social News',
														}
													),
												}),
											}),
											Object(p.jsx)(j.b, {
												to: '#/',
												className:
													'text-[#251A6A] font-bold text-sm',
												onClick: function () {
													return s(
														Object(b.a)(
															Object(b.a)({}, t),
															{},
															{
																signOutModalState:
																	!0,
															}
														)
													);
												},
												children: 'sign out',
											}),
										],
									}),
							  })
							: Object(p.jsx)('nav', {
									className: 'bg-white h-14 shadow',
									children: Object(p.jsxs)('div', {
										className:
											'px-6 items-center flex h-14',
										children: [
											Object(p.jsx)('div', {
												className: 'flex-grow',
												children: Object(p.jsx)(j.b, {
													to: '/',
													children: Object(p.jsx)(
														'img',
														{
															src: u,
															className: 'h-9',
															alt: 'Social News',
														}
													),
												}),
											}),
											Object(p.jsx)(j.b, {
												to: '/signin',
												className:
													'text-[#251A6A] font-bold text-sm pr-10',
												children: 'sign in',
											}),
											Object(p.jsx)(j.b, {
												to: '/signup',
												className:
													'text-[#251A6A] font-bold text-sm',
												children: 'sign up',
											}),
										],
									}),
							  }),
					});
				},
				f = s(6);
			var g = function () {
				var e = c.a.useContext(x),
					t = e.contextVariables,
					s = e.setContextVariables;
				return Object(p.jsxs)('nav', {
					className:
						'w-1/6 bg-white h-full fixed  shadow-inner hidden md:block',
					children: [
						Object(p.jsxs)(j.c, {
							exact: !0,
							to: '/newsStand',
							className:
								'flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-[#251A6A]',
							activeStyle: {
								backgroundColor: '#251A6A',
								color: 'white',
							},
							children: [
								Object(p.jsx)(f.f, {
									width: 24,
									height: 24,
									className: 'mr-5',
								}),
								Object(p.jsx)('span', {
									children: 'News Stand',
								}),
							],
						}),
						Object(p.jsxs)(j.c, {
							exact: !0,
							to: '/profile',
							className:
								'flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-[#251A6A]',
							activeStyle: {
								backgroundColor: '#251A6A',
								color: 'white',
							},
							children: [
								Object(p.jsx)(f.m, {
									width: 24,
									height: 24,
									className: 'mr-5',
								}),
								Object(p.jsx)('span', { children: 'Profile' }),
							],
						}),
						Object(p.jsxs)(j.c, {
							exact: !0,
							to: '/profile',
							className:
								'flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-[#251A6A]',
							activeStyle: {
								backgroundColor: '#251A6A',
								color: 'white',
							},
							children: [
								Object(p.jsx)(f.c, {
									width: 24,
									height: 24,
									className: 'mr-5',
								}),
								Object(p.jsx)('span', { children: 'Posts' }),
							],
						}),
						Object(p.jsxs)(j.c, {
							exact: !0,
							to: '/profile',
							className:
								'flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-[#251A6A]',
							activeStyle: {
								backgroundColor: '#251A6A',
								color: 'white',
							},
							children: [
								Object(p.jsx)(f.l, {
									width: 24,
									height: 24,
									className: 'mr-5',
								}),
								Object(p.jsx)('span', {
									children: 'Followers',
								}),
							],
						}),
						Object(p.jsxs)(j.c, {
							exact: !0,
							to: '/profile',
							className:
								'flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-[#251A6A]',
							activeStyle: {
								backgroundColor: '#251A6A',
								color: 'white',
							},
							children: [
								Object(p.jsx)(f.k, {
									width: 24,
									height: 24,
									className: 'mr-5',
								}),
								Object(p.jsx)('span', { children: 'Mentors' }),
							],
						}),
						Object(p.jsxs)(j.c, {
							exact: !0,
							to: '/profile',
							className:
								'flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-[#251A6A]',
							activeStyle: {
								backgroundColor: '#251A6A',
								color: 'white',
							},
							children: [
								Object(p.jsx)(f.j, {
									width: 24,
									height: 24,
									className: 'mr-5',
								}),
								Object(p.jsx)('span', { children: 'Search' }),
							],
						}),
						Object(p.jsxs)(j.c, {
							exact: !0,
							to: '/profile',
							className:
								'flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-[#251A6A]',
							activeStyle: {
								backgroundColor: '#251A6A',
								color: 'white',
							},
							children: [
								Object(p.jsx)(f.b, {
									width: 24,
									height: 24,
									className: 'mr-5',
								}),
								Object(p.jsx)('span', { children: 'Settings' }),
							],
						}),
						Object(p.jsxs)(j.b, {
							exact: !0,
							to: '#/',
							className:
								'flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-[#251A6A]',
							activeStyle: {
								backgroundColor: '#251A6A',
								color: 'white',
							},
							onClick: function () {
								return s(
									Object(b.a)(
										Object(b.a)({}, t),
										{},
										{ signOutModalState: !0 }
									)
								);
							},
							children: [
								Object(p.jsx)(f.h, {
									width: 24,
									height: 24,
									className: 'mr-5',
								}),
								Object(p.jsx)('span', { children: 'Sign out' }),
							],
						}),
					],
				});
			};
			var O = function () {
				return Object(p.jsx)(p.Fragment, {
					children: Object(p.jsx)(g, {}),
				});
			};
			var v = function () {
					return Object(p.jsx)(p.Fragment, {
						children: Object(p.jsx)(g, {}),
					});
				},
				y = s(20),
				w = s.p + 'static/media/banner.93a7c7d6.jpeg',
				N = s(26),
				k = s.n(N),
				S = s(18);
			var C = function () {
				var e = c.a.useContext(x),
					t = e.contextVariables,
					s = e.setContextVariables,
					a = c.a.useState({ email: '', password: '' }),
					r = Object(d.a)(a, 2),
					n = r[0],
					l = r[1],
					u = Object(m.f)(),
					j = (function () {
						var e = Object(i.a)(
							o.a.mark(function e(a) {
								var c, r;
								return o.a.wrap(
									function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													if (
														(a.preventDefault(),
														'' !== n.email &&
															'' !== n.password)
													) {
														e.next = 3;
														break;
													}
													return e.abrupt(
														'return',
														s(
															Object(b.a)(
																Object(b.a)(
																	{},
																	t
																),
																{},
																{
																	feedback:
																		Object(
																			b.a
																		)(
																			Object(
																				b.a
																			)(
																				{},
																				t.feedback
																			),
																			{},
																			{
																				open: !0,
																				type: 'error',
																				message:
																					'Incomplete fields',
																			}
																		),
																}
															)
														)
													);
												case 3:
													return (
														(e.prev = 3),
														(e.next = 6),
														k.a.post(
															''.concat(
																S.a,
																'/user/login'
															),
															{
																email: n.email,
																password:
																	n.password,
															}
														)
													);
												case 6:
													'success' ===
														(c = e.sent).data
															.status &&
														(s(
															Object(b.a)(
																Object(b.a)(
																	{},
																	t
																),
																{},
																{
																	feedback:
																		Object(
																			b.a
																		)(
																			Object(
																				b.a
																			)(
																				{},
																				t.feedback
																			),
																			{},
																			{
																				open: !0,
																				type: 'success',
																				message:
																					c
																						.data
																						.message,
																			}
																		),
																	loggedIn:
																		!0,
																}
															)
														),
														localStorage.setItem(
															S.b,
															JSON.stringify(
																c.data.User
															)
														),
														u.push('/newsStand')),
														(e.next = 13);
													break;
												case 10:
													(e.prev = 10),
														(e.t0 = e.catch(3)),
														s(
															Object(b.a)(
																Object(b.a)(
																	{},
																	t
																),
																{},
																{
																	feedback:
																		Object(
																			b.a
																		)(
																			Object(
																				b.a
																			)(
																				{},
																				t.feedback
																			),
																			{},
																			{
																				open: !0,
																				type: 'error',
																				message:
																					(
																						null ===
																							(r =
																								e
																									.t0
																									.response) ||
																						void 0 ===
																							r
																							? void 0
																							: r.data
																					)
																						? e
																								.t0
																								.response
																								.data
																								.message
																						: 'Request unsuccessful',
																			}
																		),
																}
															)
														);
												case 13:
												case 'end':
													return e.stop();
											}
									},
									e,
									null,
									[[3, 10]]
								);
							})
						);
						return function (t) {
							return e.apply(this, arguments);
						};
					})(),
					h = function (e) {
						return l(
							Object(b.a)(
								Object(b.a)({}, n),
								{},
								Object(y.a)({}, e.target.name, e.target.value)
							)
						);
					};
				return Object(p.jsxs)('div', {
					className:
						'bg-white static flex justify-center min-h-screen min-w-screen',
					children: [
						Object(p.jsx)('img', {
							src: w,
							alt: 'Banner',
							className: 'object-cover w-full opacity-90',
							style: { height: '50vh' },
						}),
						Object(p.jsxs)('div', {
							className:
								'bg-white absolute md:bottom-28 bottom-0 md:left-1/3 w-2/3 md:w-1/3 flex items-center flex-col  shadow-md rounded',
							children: [
								Object(p.jsxs)('div', {
									className:
										'mt-10 ml-10 mr-10 mb-5 flex items-center flex-col',
									children: [
										Object(p.jsx)('div', {
											className:
												'h-16 w-16 flex justify-center items-center shadow-xl',
											style: { borderRadius: '50%' },
											children: Object(p.jsx)(f.m, {
												className:
													'text-[#251A6A] h-5 w-5 ',
											}),
										}),
										Object(p.jsx)('div', {
											className:
												'font-sans text-base font-semibold mt-5 text-[#251A6A]',
											children: 'SIGN IN',
										}),
									],
								}),
								Object(p.jsxs)('form', {
									className:
										'flex-col flex items-center w-full pl-5 pr-5 md:pl-20 md:pr-20',
									children: [
										Object(p.jsx)('input', {
											className:
												'w-full h-10 border-purple-100 border-solid border-b-2 mb-2 outline-none bg-transparent focus:border-purple-300',
											placeholder: 'Email',
											type: 'email',
											name: 'email',
											value: n.email,
											onChange: function (e) {
												return h(e);
											},
										}),
										Object(p.jsx)('input', {
											className:
												'w-full h-10 border-purple-100 border-solid border-b-2  outline-none mb-10 bg-transparent focus:border-purple-300',
											placeholder: 'Password',
											type: 'password',
											name: 'password',
											value: n.password,
											onChange: function (e) {
												return h(e);
											},
										}),
										Object(p.jsx)('button', {
											onClick: function (e) {
												return j(e);
											},
											className:
												'w-32 bg-[#251A6A] pt-4 pb-4 rounded text-white text-sm mb-10 font-semibold',
											children: 'SIGN IN',
										}),
									],
								}),
							],
						}),
					],
				});
			};
			var P = function () {
					var e = c.a.useContext(x),
						t = e.contextVariables,
						s = e.setContextVariables,
						a = c.a.useState({ name: '', email: '', password: '' }),
						r = Object(d.a)(a, 2),
						n = r[0],
						l = r[1],
						m = (function () {
							var e = Object(i.a)(
								o.a.mark(function e(a) {
									var c, r;
									return o.a.wrap(
										function (e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														if (
															(a.preventDefault(),
															'' !== n.name &&
																'' !==
																	n.email &&
																'' !==
																	n.password)
														) {
															e.next = 3;
															break;
														}
														return e.abrupt(
															'return',
															s(
																Object(b.a)(
																	Object(b.a)(
																		{},
																		t
																	),
																	{},
																	{
																		feedback:
																			Object(
																				b.a
																			)(
																				Object(
																					b.a
																				)(
																					{},
																					t.feedback
																				),
																				{},
																				{
																					open: !0,
																					type: 'error',
																					message:
																						'Incomplete fields',
																				}
																			),
																	}
																)
															)
														);
													case 3:
														return (
															(e.prev = 3),
															(e.next = 6),
															k.a.post(
																''.concat(
																	S.a,
																	'/user/register'
																),
																{
																	name: n.name,
																	email: n.email,
																	password:
																		n.password,
																}
															)
														);
													case 6:
														'success' ===
															(c = e.sent).data
																.status &&
															(console.log(
																c.data
															),
															s(
																Object(b.a)(
																	Object(b.a)(
																		{},
																		t
																	),
																	{},
																	{
																		feedback:
																			Object(
																				b.a
																			)(
																				Object(
																					b.a
																				)(
																					{},
																					t.feedback
																				),
																				{},
																				{
																					open: !0,
																					type: 'success',
																					message:
																						c
																							.data
																							.message,
																				}
																			),
																	}
																)
															)),
															(e.next = 13);
														break;
													case 10:
														(e.prev = 10),
															(e.t0 = e.catch(3)),
															s(
																Object(b.a)(
																	Object(b.a)(
																		{},
																		t
																	),
																	{},
																	{
																		feedback:
																			Object(
																				b.a
																			)(
																				Object(
																					b.a
																				)(
																					{},
																					t.feedback
																				),
																				{},
																				{
																					open: !0,
																					type: 'error',
																					message:
																						(
																							null ===
																								(r =
																									e
																										.t0
																										.response) ||
																							void 0 ===
																								r
																								? void 0
																								: r.data
																						)
																							? e
																									.t0
																									.response
																									.data
																									.message
																							: 'Request unsuccessful',
																				}
																			),
																	}
																)
															);
													case 13:
													case 'end':
														return e.stop();
												}
										},
										e,
										null,
										[[3, 10]]
									);
								})
							);
							return function (t) {
								return e.apply(this, arguments);
							};
						})(),
						u = function (e) {
							return l(
								Object(b.a)(
									Object(b.a)({}, n),
									{},
									Object(y.a)(
										{},
										e.target.name,
										e.target.value
									)
								)
							);
						};
					return Object(p.jsxs)('div', {
						className:
							'bg-white static flex justify-center min-h-screen min-w-screen',
						children: [
							Object(p.jsx)('img', {
								src: w,
								alt: 'Banner',
								className: 'object-cover w-full opacity-90',
								style: { height: '50vh' },
							}),
							Object(p.jsxs)('div', {
								className:
									'bg-white absolute md:bottom-28 bottom-0 md:left-1/3 w-2/3 md:w-1/3 flex items-center flex-col  shadow-md rounded',
								children: [
									Object(p.jsxs)('div', {
										className:
											'mt-10 ml-10 mr-10 mb-5 flex items-center flex-col',
										children: [
											Object(p.jsx)('div', {
												className:
													'h-16 w-16 flex justify-center items-center shadow-xl',
												style: { borderRadius: '50%' },
												children: Object(p.jsx)(f.m, {
													className:
														'text-[#251A6A] h-5 w-5 ',
												}),
											}),
											Object(p.jsx)('div', {
												className:
													'font-sans text-base font-semibold mt-5 text-[#251A6A]',
												children: 'SIGN UP',
											}),
										],
									}),
									Object(p.jsxs)('form', {
										className:
											'flex-col flex items-center w-full pl-5 pr-5 md:pl-20 md:pr-20',
										children: [
											Object(p.jsx)('input', {
												className:
													'w-full h-10 border-purple-100 border-solid border-b-2 mb-2 outline-none bg-transparent focus:border-purple-300',
												placeholder: 'Full name',
												type: 'text',
												name: 'name',
												value: n.name,
												onChange: function (e) {
													return u(e);
												},
											}),
											Object(p.jsx)('input', {
												className:
													'w-full h-10 border-purple-100 border-solid border-b-2 mb-2 outline-none bg-transparent focus:border-purple-300',
												placeholder: 'Email',
												type: 'email',
												name: 'email',
												value: n.email,
												onChange: function (e) {
													return u(e);
												},
											}),
											Object(p.jsx)('input', {
												className:
													'w-full h-10 border-purple-100 border-solid border-b-2 outline-none mb-10 bg-transparent focus:border-purple-300',
												placeholder: 'Password',
												type: 'password',
												name: 'password',
												value: n.password,
												onChange: function (e) {
													return u(e);
												},
											}),
											Object(p.jsx)('button', {
												className:
													'w-32 bg-[#251A6A] pt-4 pb-4 rounded text-white text-sm mb-10 font-semibold',
												onClick: function (e) {
													return m(e);
												},
												children: 'SIGN UP',
											}),
										],
									}),
								],
							}),
						],
					});
				},
				F = s(79),
				V = s(78),
				I = s(14);
			var A = function () {
				var e = c.a.useContext(x),
					t = e.contextVariables,
					s = e.setContextVariables;
				return Object(p.jsx)(p.Fragment, {
					children: Object(p.jsxs)(I.Popover, {
						className: ' bottom-5 right-5 md:hidden z-10 fixed',
						children: [
							Object(p.jsx)(I.Popover.Button, {
								children: Object(p.jsx)('button', {
									className:
										'w-16 h-16 bg-[#251A6A]  rounded-full text-white justify-center flex items-center focus:bg-purple-500 ',
									children: Object(p.jsx)(f.i, {
										className: 'w-8 h-8',
									}),
								}),
							}),
							Object(p.jsxs)(I.Popover.Panel, {
								className:
									'absolute bottom-20 right-0 z-10  rounded-lg shadow-lg',
								children: [
									Object(p.jsxs)('div', {
										className:
											'bg-white w-36 h-full flex flex-col p-4 font-sans',
										children: [
											Object(p.jsx)(I.Popover.Button, {
												className: 'mb-2  text-right',
												children: Object(p.jsx)(j.b, {
													to: '/newsStand',
													className:
														'text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2',
													children: 'News Stand',
												}),
											}),
											Object(p.jsx)(I.Popover.Button, {
												className: 'mb-2 text-right',
												children: Object(p.jsx)(j.b, {
													to: '/profile',
													className:
														'text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2',
													children: 'Profile',
												}),
											}),
											Object(p.jsx)(I.Popover.Button, {
												className: 'mb-2 text-right',
												children: Object(p.jsx)(j.b, {
													to: '/profile',
													className:
														'text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2',
													children: 'Posts',
												}),
											}),
											Object(p.jsx)(I.Popover.Button, {
												className: 'mb-2 text-right',
												children: Object(p.jsx)(j.b, {
													to: '/profile',
													className:
														'text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2',
													children: 'Followers',
												}),
											}),
											Object(p.jsx)(I.Popover.Button, {
												className: 'mb-2 text-right',
												children: Object(p.jsx)(j.b, {
													to: '/profile',
													className:
														'text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2',
													children: 'Mentors',
												}),
											}),
											Object(p.jsx)(I.Popover.Button, {
												className: 'mb-2 text-right',
												children: Object(p.jsx)(j.b, {
													to: '/profile',
													className:
														'text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2',
													children: 'Search',
												}),
											}),
											Object(p.jsx)(I.Popover.Button, {
												className: 'mb-2 text-right',
												children: Object(p.jsx)(j.b, {
													to: '/profile',
													className:
														'text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2',
													children: 'Settings',
												}),
											}),
											Object(p.jsx)(I.Popover.Button, {
												className: 'text-right',
												children: Object(p.jsx)(j.b, {
													to: '#/',
													className:
														'text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2',
													onClick: function () {
														return s(
															Object(b.a)(
																Object(b.a)(
																	{},
																	t
																),
																{},
																{
																	signOutModalState:
																		!0,
																}
															)
														);
													},
													children: 'Sign out',
												}),
											}),
										],
									}),
									Object(p.jsx)('img', {
										src: '/solutions.jpg',
										alt: '',
									}),
								],
							}),
						],
					}),
				});
			};
			var T = function () {
				return Object(p.jsxs)('div', {
					className:
						'bg-white static flex justify-center min-h-screen min-w-screen',
					children: [
						Object(p.jsx)('img', {
							src: w,
							alt: 'Banner',
							className: 'object-cover w-full opacity-90',
							style: { height: '50vh' },
						}),
						Object(p.jsxs)('div', {
							className:
								'bg-white absolute bottom-28 md:left-1/3 w-2/3 md:w-1/3 flex items-center flex-col  shadow-md rounded',
							children: [
								Object(p.jsxs)('div', {
									className:
										'mt-10 ml-10 mr-10 mb-5 flex items-center flex-col',
									children: [
										Object(p.jsx)('div', {
											className:
												'h-16 w-16 flex justify-center items-center shadow-xl',
											style: { borderRadius: '50%' },
											children: Object(p.jsx)(f.e, {
												className:
													'text-[#251A6A] h-5 w-5 ',
											}),
										}),
										Object(p.jsx)('div', {
											className:
												'font-sans text-base font-semibold mt-5 text-[#251A6A]',
											children: 'Page not found',
										}),
										Object(p.jsx)('p', {
											style: {
												fontWeight: 'lighter',
												marginTop: 20,
												textAlign: 'center',
											},
											children:
												"The page you are looking for wasnt't found. Please use the button below to go to the homepage",
										}),
									],
								}),
								Object(p.jsx)('form', {
									className:
										'flex-col flex items-center w-full pl-5 pr-5 md:pl-20 md:pr-20',
									children: Object(p.jsx)(j.b, {
										to: '/',
										children: Object(p.jsx)('button', {
											className:
												'w-32 bg-[#251A6A] pt-4 pb-4 rounded text-white text-sm mb-10 font-semibold',
											children: 'Homepage',
										}),
									}),
								}),
							],
						}),
					],
				});
			};
			var B = function (e) {
					var t = e.contextVariables,
						s = e.setContextVariables,
						a = e.signOutUser;
					return Object(p.jsx)(F.a.Root, {
						show: t.signOutModalState,
						children: Object(p.jsxs)(V.a, {
							open: t.signOutModalState,
							onClose: function () {
								return s(
									Object(b.a)(
										Object(b.a)({}, t),
										{},
										{ signOutModalState: !1 }
									)
								);
							},
							className: 'fixed z-10 inset-0 overflow-y-auto',
							children: [
								Object(p.jsx)(V.a.Overlay, {
									className:
										'fixed inset-0  bg-opacity-75 transition-opacity',
								}),
								Object(p.jsxs)('div', {
									className:
										'flex items-center justify-center min-h-screen',
									children: [
										Object(p.jsx)(F.a.Child, {
											enter: 'ease-out duration-300',
											enterFrom: 'opacity-0',
											enterTo: 'opacity-100',
											leave: 'ease-in duration-200',
											leaveFrom: 'opacity-100',
											leaveTo: 'opacity-0',
											children: Object(p.jsx)(
												V.a.Overlay,
												{
													className:
														'fixed inset-0 bg-black opacity-30',
												}
											),
										}),
										Object(p.jsx)(F.a.Child, {
											enter: 'ease-out duration-300',
											enterFrom:
												'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
											enterTo:
												'opacity-100 translate-y-0 sm:scale-100',
											leave: 'ease-in duration-200',
											leaveFrom:
												'opacity-100 translate-y-0 sm:scale-100',
											leaveTo:
												'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
											children: Object(p.jsxs)('div', {
												className:
													'inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:items-center sm:max-w-lg sm:w-full',
												children: [
													Object(p.jsx)('div', {
														className:
															'bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4',
														children: Object(
															p.jsxs
														)('div', {
															className:
																'sm:flex sm:items-start',
															children: [
																Object(p.jsx)(
																	'div',
																	{
																		className:
																			'mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 sm:mx-0 sm:h-10 sm:w-10',
																		children:
																			Object(
																				p.jsx
																			)(
																				f.h,
																				{
																					className:
																						'h-6 w-6 text-[#251A6A]',
																					'aria-hidden':
																						'true',
																				}
																			),
																	}
																),
																Object(p.jsxs)(
																	'div',
																	{
																		className:
																			'mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left',
																		children:
																			[
																				Object(
																					p.jsx
																				)(
																					V
																						.a
																						.Title,
																					{
																						as: 'h3',
																						className:
																							'text-lg leading-6 font-medium text-gray-900',
																						children:
																							'Sign out?',
																					}
																				),
																				Object(
																					p.jsx
																				)(
																					'div',
																					{
																						className:
																							'mt-2',
																						children:
																							Object(
																								p.jsx
																							)(
																								'p',
																								{
																									className:
																										'text-md text-gray-500',
																									children:
																										'Are you sure you want to sign out?',
																								}
																							),
																					}
																				),
																			],
																	}
																),
															],
														}),
													}),
													Object(p.jsxs)('div', {
														className:
															'bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse',
														children: [
															Object(p.jsx)(
																'button',
																{
																	type: 'button',
																	className:
																		'w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#251A6A] text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm',
																	onClick:
																		function () {
																			return a();
																		},
																	children:
																		'Sign out',
																}
															),
															Object(p.jsx)(
																'button',
																{
																	type: 'button',
																	className:
																		'mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm',
																	onClick:
																		function () {
																			return s(
																				Object(
																					b.a
																				)(
																					Object(
																						b.a
																					)(
																						{},
																						t
																					),
																					{},
																					{
																						signOutModalState:
																							!1,
																					}
																				)
																			);
																		},
																	children:
																		'Cancel',
																}
															),
														],
													}),
												],
											}),
										}),
									],
								}),
							],
						}),
					});
				},
				M = function (e) {
					var t = e.contextVariables,
						s = e.setContextVariables;
					return Object(p.jsx)(F.a.Root, {
						show: t.feedback.open,
						children: Object(p.jsxs)(V.a, {
							open: t.feedback.open,
							onClose: function () {
								return s(
									Object(b.a)(
										Object(b.a)({}, t),
										{},
										{
											feedback: Object(b.a)(
												Object(b.a)({}, t.feedback),
												{},
												{ open: !1 }
											),
										}
									)
								);
							},
							className: 'fixed z-10 inset-0 overflow-y-auto',
							children: [
								Object(p.jsx)(V.a.Overlay, {
									className:
										'fixed inset-0  bg-opacity-75 transition-opacity',
								}),
								Object(p.jsxs)('div', {
									className:
										'flex items-center justify-center min-h-screen',
									children: [
										Object(p.jsx)(F.a.Child, {
											enter: 'ease-out duration-300',
											enterFrom: 'opacity-0',
											enterTo: 'opacity-100',
											leave: 'ease-in duration-200',
											leaveFrom: 'opacity-100',
											leaveTo: 'opacity-0',
											children: Object(p.jsx)(
												V.a.Overlay,
												{
													className:
														'fixed inset-0 bg-black opacity-30',
												}
											),
										}),
										Object(p.jsx)(F.a.Child, {
											enter: 'ease-out duration-300',
											enterFrom:
												'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
											enterTo:
												'opacity-100 translate-y-0 sm:scale-100',
											leave: 'ease-in duration-200',
											leaveFrom:
												'opacity-100 translate-y-0 sm:scale-100',
											leaveTo:
												'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
											children: Object(p.jsxs)('div', {
												className:
													'inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:items-center sm:max-w-lg sm:w-full',
												children: [
													Object(p.jsx)('div', {
														className:
															'bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4',
														children: Object(
															p.jsxs
														)('div', {
															className:
																'sm:flex sm:items-start',
															children: [
																'success' ===
																	t.feedback
																		.type &&
																	Object(
																		p.jsx
																	)('div', {
																		className:
																			'mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10',
																		children:
																			Object(
																				p.jsx
																			)(
																				f.a,
																				{
																					className:
																						'h-6 w-6 text-green-700',
																					'aria-hidden':
																						'true',
																				}
																			),
																	}),
																'info' ===
																	t.feedback
																		.type &&
																	Object(
																		p.jsx
																	)('div', {
																		className:
																			'mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10',
																		children:
																			Object(
																				p.jsx
																			)(
																				f.g,
																				{
																					className:
																						'h-6 w-6 text-blue-700',
																					'aria-hidden':
																						'true',
																				}
																			),
																	}),
																'error' ===
																	t.feedback
																		.type &&
																	Object(
																		p.jsx
																	)('div', {
																		className:
																			'mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10',
																		children:
																			Object(
																				p.jsx
																			)(
																				f.d,
																				{
																					className:
																						'h-6 w-6 text-red-700',
																					'aria-hidden':
																						'true',
																				}
																			),
																	}),
																Object(p.jsxs)(
																	'div',
																	{
																		className:
																			'mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left',
																		children:
																			[
																				Object(
																					p.jsx
																				)(
																					V
																						.a
																						.Title,
																					{
																						as: 'h3',
																						className:
																							'text-lg capitalize leading-6 font-medium text-gray-900',
																						children:
																							t
																								.feedback
																								.type,
																					}
																				),
																				Object(
																					p.jsx
																				)(
																					'div',
																					{
																						className:
																							'mt-2',
																						children:
																							Object(
																								p.jsx
																							)(
																								'p',
																								{
																									className:
																										'text-md text-gray-500',
																									children:
																										t
																											.feedback
																											.message,
																								}
																							),
																					}
																				),
																			],
																	}
																),
															],
														}),
													}),
													Object(p.jsx)('div', {
														className:
															'bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse',
														children: Object(p.jsx)(
															'button',
															{
																type: 'button',
																className:
																	'mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm',
																onClick:
																	function () {
																		return s(
																			Object(
																				b.a
																			)(
																				Object(
																					b.a
																				)(
																					{},
																					t
																				),
																				{},
																				{
																					feedback:
																						Object(
																							b.a
																						)(
																							Object(
																								b.a
																							)(
																								{},
																								t.feedback
																							),
																							{},
																							{
																								open: !1,
																							}
																						),
																				}
																			)
																		);
																	},
																children:
																	'Cancel',
															}
														),
													}),
												],
											}),
										}),
									],
								}),
							],
						}),
					});
				},
				R = function (e) {
					var t = e.contextVariables;
					e.setContextVariables;
					return Object(p.jsx)(F.a.Root, {
						show: t.loadingIndicatorState,
						children: Object(p.jsxs)(V.a, {
							open: t.loadingIndicatorState,
							onClose: function () {
								return null;
							},
							className:
								'fixed z-10 inset-0 overflow-y-auto text-center',
							children: [
								Object(p.jsx)(V.a.Overlay, {
									className:
										'fixed inset-0  bg-opacity-75 transition-opacity',
								}),
								Object(p.jsxs)('div', {
									className:
										'flex items-center justify-center min-h-screen',
									children: [
										Object(p.jsx)(F.a.Child, {
											enter: 'ease-out duration-300',
											enterFrom: 'opacity-0',
											enterTo: 'opacity-100',
											leave: 'ease-in duration-200',
											leaveFrom: 'opacity-100',
											leaveTo: 'opacity-0',
											children: Object(p.jsx)(
												V.a.Overlay,
												{
													className:
														'fixed inset-0 bg-black opacity-30',
												}
											),
										}),
										Object(p.jsx)(F.a.Child, {
											enter: 'ease-out duration-300',
											enterFrom:
												'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
											enterTo:
												'opacity-100 translate-y-0 sm:scale-100',
											leave: 'ease-in duration-200',
											leaveFrom:
												'opacity-100 translate-y-0 sm:scale-100',
											leaveTo:
												'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
											children: Object(p.jsx)('div', {
												className:
													'border-purple-200 border-p border-8 border-solid border-t-8 w-32 h-32 animate-spin inline-block',
												style: {
													borderTopColor:
														'rgb(76,29,149)',
													borderRadius: '50%',
												},
											}),
										}),
									],
								}),
							],
						}),
					});
				},
				z = function () {
					var e = Object(m.f)(),
						t = c.a.useState({
							signOutModalState: !1,
							loadingIndicatorState: !1,
							feedback: {
								type: '',
								message: '',
								open: !1,
								timeout: 3e3,
							},
							loggedIn: !1,
						}),
						s = Object(d.a)(t, 2),
						a = s[0],
						r = s[1],
						n = function () {
							setTimeout(function () {
								r(function (e) {
									return Object(b.a)(
										Object(b.a)({}, e),
										{},
										{
											feedback: Object(b.a)(
												Object(b.a)({}, e.feedback),
												{},
												{ open: !1 }
											),
										}
									);
								});
							}, a.feedback.timeout);
						},
						l = (function () {
							var t = Object(i.a)(
								o.a.mark(function t() {
									return o.a.wrap(function (t) {
										for (;;)
											switch ((t.prev = t.next)) {
												case 0:
													r(
														Object(b.a)(
															Object(b.a)({}, a),
															{},
															{
																loadingIndicatorState:
																	!0,
															}
														)
													),
														localStorage.removeItem(
															S.b
														),
														r(function (e) {
															return Object(b.a)(
																Object(b.a)(
																	{},
																	e
																),
																{},
																{
																	signOutModalState:
																		!1,
																	loadingIndicatorState:
																		!1,
																	loggedIn:
																		!1,
																	feedback:
																		Object(
																			b.a
																		)(
																			Object(
																				b.a
																			)(
																				{},
																				e.feedback
																			),
																			{},
																			{
																				open: !0,
																				message:
																					'Sign out successful',
																				type: 'success',
																			}
																		),
																}
															);
														}),
														n(),
														e.push('/signin');
												case 5:
												case 'end':
													return t.stop();
											}
									}, t);
								})
							);
							return function () {
								return t.apply(this, arguments);
							};
						})();
					return Object(p.jsxs)(x.Provider, {
						value: {
							contextVariables: a,
							setContextVariables: r,
							hideFeedback: n,
						},
						children: [
							Object(p.jsx)(h, {}),
							Object(p.jsx)(B, {
								contextVariables: a,
								setContextVariables: r,
								signOutUser: l,
							}),
							Object(p.jsx)(M, {
								contextVariables: a,
								setContextVariables: r,
							}),
							Object(p.jsx)(R, {
								contextVariables: a,
								setContextVariables: r,
							}),
							Object(p.jsx)(A, {}),
							Object(p.jsxs)(m.c, {
								children: [
									Object(p.jsx)(m.a, {
										path: '/',
										exact: !0,
										component: C,
									}),
									Object(p.jsx)(m.a, {
										path: '/signin',
										component: C,
									}),
									Object(p.jsx)(m.a, {
										path: '/signup',
										component: P,
									}),
									Object(p.jsx)(m.a, {
										path: '/newsStand',
										component: O,
									}),
									Object(p.jsx)(m.a, {
										path: '/profile',
										component: v,
									}),
									Object(p.jsx)(m.a, {
										path: '*',
										component: T,
									}),
								],
							}),
						],
					});
				},
				E = function (e) {
					e &&
						e instanceof Function &&
						s
							.e(3)
							.then(s.bind(null, 80))
							.then(function (t) {
								var s = t.getCLS,
									a = t.getFID,
									c = t.getFCP,
									r = t.getLCP,
									n = t.getTTFB;
								s(e), a(e), c(e), r(e), n(e);
							});
				};
			n.a.render(
				Object(p.jsx)(c.a.StrictMode, {
					children: Object(p.jsx)(j.a, {
						children: Object(p.jsx)(z, {}),
					}),
				}),
				document.getElementById('root')
			),
				E();
		},
	},
	[[76, 1, 2]],
]);
//# sourceMappingURL=main.44062552.chunk.js.map
