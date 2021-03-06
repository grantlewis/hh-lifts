import PostTitle from './post-title'
import PostBody from './post-body'

export default function SimplePost({ post }) {
	return (
		<>
			<PostTitle>{post.title}</PostTitle>
			<PostBody content={post.content} />
		</>
	)
}
