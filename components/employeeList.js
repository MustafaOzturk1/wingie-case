import employeeStyles from '../styles/Employee.module.scss'
import EmployeeItem from './employeeItem'
import { useSelector,useDispatch } from 'react-redux'
import { changeVote } from '../redux/actions/employeeAction';
import * as _ from 'lodash';

const EmployeeList = () => {
    const useCounter = () => {
        const dispatch = useDispatch()
        const increment = (id,vote) =>
          dispatch(changeVote(id,vote+1))
        const decrement = (id,vote) =>
          dispatch(changeVote(id,vote-1))
        return { increment, decrement }
      }
      const {employee} = useSelector(state => state);
      const {increment,decrement } = useCounter();
    return (
        <div className={employeeStyles.grid}>
            {employee&&_.orderBy(employee,'vote','desc').map((e)=> (
                <EmployeeItem key={e.id} employee={e} increment = {increment} decrement = {decrement}/>
            ))}
        </div>
    )
}

export default EmployeeList
