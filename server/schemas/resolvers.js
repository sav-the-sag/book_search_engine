const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    /* QUERIES */
      Query: {
        // Get a single user by ID or username
        me: async (parent, args, context) => {
          if (context.user) {
            return await User.findOne(
              { _id: context.user._id },
              { __v: 0, password: 0 }
            );
          } 
          throw new AuthenticationError('You need to log in...');
        },
      },
    }