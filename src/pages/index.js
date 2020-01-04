import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero'
import Insta from '../components/insta';

export default () => {
const posts = usePosts()



return (
    <>
    <Hero />
    <Layout>
    <h1>Read My Blog</h1>
    {
        posts.map(post => (
            <PostPreview key={post.slug} post={post}/>
        ))
    }
    <Insta />
</Layout>
</>
)
}
