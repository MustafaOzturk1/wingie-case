import * as types from '../types'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { graphqlUrl } from '../../constants/constant'

export const fetchEmployees = () => async dispatch => {
    const client = new ApolloClient({
        uri: graphqlUrl,
        cache: new InMemoryCache()
      })
      const { data } = await client.query({
        query: gql`
        query AllEmployees {
          allEmployees {
            id,
            firstName,
            lastName,
            address,
            avatar,
            jobTitle,
            vote
          }
        }    
        `
      })
    dispatch({
        type: types.GET_EMPLOYEES,
        payload : data.allEmployees
    })
}
export const changeVote = (id,vote) => ({
    type: types.CHANGE_VOTE,
    employeeId: id,
    vote: {vote:vote}
});
