import Head from 'next/head'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import EmployeeList from '../components/employeeList'
import { fetchEmployees } from '../redux/actions/employeeAction';


export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  })

  return (
    <div>
      <Head>
        <title>Wiggie</title>
      </Head>
      <EmployeeList />
    </div>
  )
}