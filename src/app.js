const fetch = require('node-fetch')
const DB = require('./models/index')

; (async() => {
	// let res = await fetch(`https://www.qollie.com/graphql`, {
	// 	headers: {
	// 		'Content-Type': 'application/json'
	// 	},
	// 	body: JSON.stringify({
	// 		query:  "\n\nfragment commonFields on Comment {\n  _id\n  status\n  checked\n  kind\n  content\n  anonymous\n  likes\n  dislikes\n  judge\n  createdAt\n  category\n  pros\n  cons\n  shareType\n  isSysDelete\n  ip\n  replies {\n    _id\n  }\n  author {\n    _id\n    nickname\n    picture\n    showComments\n    showAvatar\n  }\n}\n\n\nfragment jobCommentFields on JobComment {\n  job {\n    _id\n    jobTitle\n    company {\n      _id\n      name\n      jobs {\n        _id\n        jobTitle\n      }\n      logo\n    }\n    sourcesLinks\n  }\n}\n\n\nfragment companyCommentFields on CompanyComment{\n  company {\n    _id\n    name\n    taxId\n    introduction\n    website\n    sourcesLinks\n    logo\n    jobs {\n      _id\n      jobTitle\n    }\n  }\n}\n\n\nquery search(\n  $kind: String\n  $companyId: ID\n  $jobId: ID\n  $keyword: String\n  $page: Int\n  $limit: Int\n) {\n  searchComments(query: {\n    kind: $kind\n    companyId: $companyId\n    jobId: $jobId\n    keyword: $keyword\n    page: $page\n    limit: $limit\n  }) {\n    ... commonFields\n    ... jobCommentFields\n    ... companyCommentFields\n  }\n}\n\n",
	// 		variables: {
	// 			"companyId": "58ab3b11f39d145e5f7f4ffa",
	// 			limit: 100
	// 		}
	// 	}),
	// 	method: 'POST'
	// })

	// res = await res.json()
	// res = res.data.searchComments
	// // 把資料分為面試跟閒聊
	// res = {
	// 	experience: res.filter(row => row.category === 'experienced'),
	// 	chat: res.filter(row => row.category === 'chat')
	// }

	// const count = {
	// 	experience: {
	// 		topic: res.experience.length,
	// 		replies: getCount(res.experience)
	// 	},
	// 	chat: {
	// 		topic: res.chat.length,
	// 		replies: getCount(res.chat)
	// 	},
	// }

	// // console.log(`experience length = `, res.experience.length);
	// // console.log(`chat length = `, res.chat.length);
	// console.log(count);
})()

function getCount(obj) {
	let count = 0
	for (const row of obj) {
		count += row.replies.length
	}
	return count
}
// fragment commonFields on Comment {
// 	_id
// 	status
// 	checked
// 	kind
// 	content
// 	anonymous
// 	likes
// 	dislikes
// 	judge
// 	createdAt
// 	category
// 	pros
// 	cons
// 	shareType
// 	isSysDelete
// 	ip
// 	replies {
// 		_id
// 	}
// 	author {
// 		_id
// 		nickname
// 		picture
// 		showComments
// 		showAvatar
// 	}
// }
// fragment jobCommentFields on JobComment {
// 	job {
// 		_id
// 		jobTitle
// 		company {
// 			_id
// 			name
// 			jobs {
// 				_id
// 				jobTitle
// 			}
// 			logo
// 		}
// 		sourcesLinks
// 	}
// }
// fragment companyCommentFields on CompanyComment{
// 	company 
// 	_id
// 	name
// 	taxId
// 	introduction
// 	website
// 	sourcesLinks
// 	logo
// 	jobs {
// 		_id
// 		jobTitle
// 	}
// }
// }
// query search(\n  $kind: String\n  $companyId: ID\n  $jobId: ID\n  $keyword: String\n  $page: Int\n  $limit: Int\n) {\n  searchComments(query: {\n    kind: $kind\n    companyId: $companyId\n    jobId: $jobId\n    keyword: $keyword\n    page: $page\n    limit: $limit\n  }) {\n    ... commonFields\n    ... jobCommentFields\n    ... companyCommentFields\n  }\n}