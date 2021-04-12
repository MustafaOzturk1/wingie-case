import * as types from '../types'

const initialStore= []
export const employeeReducer = (state = initialStore, action) => {
    switch (action.type) {
        case types.GET_EMPLOYEES:
            return [
                ...state,
                ...action.payload,
            ]
        case types.CHANGE_VOTE:
            return state.map((employee) => {
                if (employee.id === action.employeeId) {
                    return {
                        ...employee,
                        ...action.vote
                    }
                }
                else {
                    return employee;

                }
            })
        default:
            return state
    }
}