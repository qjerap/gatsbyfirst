import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'
import notFoundStyles from "./404.module.scss"

// Header
import Head from "../components/head"


const NotFound = () => {
    return (
        <Layout>
        <Head title="404"/>
            <div className={notFoundStyles.container}>
                <h1>Are you lost?</h1>
                <p><Link to="/">Head home</Link></p>
            </div>
        </Layout>
    )
}

export default NotFound