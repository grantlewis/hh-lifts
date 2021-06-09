export default function InstagramFeed({ posts }) {
	return (
		<ul className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
			{posts.map((post, i) => {
				return (
					<li key={i}>
						<a
							href={post.permalink}
							aria-label="view image on Instagram"
						>
							<div className="aspect-w-1 aspect-h-1">
								<img
									src={post.media_url}
									atl={post.caption}
								/>
							</div>
						</a>
					</li>
				)
			})}
		</ul>
	)
}
