
import Head from 'next/head'
import Link from 'next/link'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { graphqlUrl } from '../../../constants/constant'
import employeeStyles from '../../../styles/Employee.module.scss'

const employee = ({article}) => {
    console.log(article);
    return (
        <>
        <Head>
            <title>Employee Detail</title>
        </Head>
        <div className={employeeStyles.card}>
            <div className={employeeStyles.cardbody}>
                {article.title}
                {/* <p>
                    <img src={employee.avatar} alt="card image" />
                </p>
                <span>
                    <p>{employee.firstName + " " + employee.lastName}</p>
                    <p>{employee.email}</p>
                    <p>{employee.phone}</p>
                    <p>{employee.city}</p>
                    <p>{employee.address}</p>
                </span> */}
            </div>
        </div>
        <Link href='/'>Go Back</Link>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+context.params.id)
    const article = await res.json()

    // const client = new ApolloClient({
    //     uri: graphqlUrl,
    //     cache: new InMemoryCache()
    // })
    // const { data } = await client.query({
    //     query: gql`
    //     query Employee {
    //         employee{
    //             id,
    //             firstName,
    //             lastName,
    //             email,
    //             phone,
    //             address,
    //             city,
    //             avatar
    //         }
    //     }   
    //     `
    // })
    return {
        props: {
            article
        }
    }
}

export default employee
