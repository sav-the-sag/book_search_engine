import { gql } from '@apollo/client';

// Mutation for user login
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        # username
        email
        password
      }
    }
  }
`;