import Head from 'next/head'
import Link from 'next/link'
import ImageContainer from '../components/ImageContainer'
import Layout from '../../components/Layout'


export default function firstPost() {
    return (
        <Layout>

            <Head>
                <title>
                    First post
                </title>
            </Head>
            <h1>First Post</h1>
            <Link href='/'>
                Back to home
            </Link>
            <ImageContainer src="/images/profile.jpg" alt="Your Name" />

        </Layout>
    )
}