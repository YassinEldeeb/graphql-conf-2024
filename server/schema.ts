import { createSchema } from 'graphql-yoga'

// sample data for users
const usersData = [
  {
    id: "0",
    name: "Marcus Reynolds",
    email: "marcus@example.com",
    avatar: "http://localhost:4000/images/boxer1.png",
    bio: "Boxing enthusiast, 3 years of experience",
    favoriteCombo: ["Jab-Cross", "Hook-Cross"],
    trainingPartnerIds: ["1"]
  },
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    avatar: "http://localhost:4000/images/boxer3.png",
    bio: "Boxing enthusiast, 3 years of experience",
    favoriteCombo: ["Jab-Cross", "Hook-Cross"],
    trainingPartnerIds: ["0"]
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "http://localhost:4000/images/boxer2.png",
    bio: "Loves sparring sessions (but can't seem to keep a partner...).",
    favoriteCombo: ["Overhand Right", "Cross-Hook", "Uppercut-Knockout"],
    trainingPartnerIds: []
  }
]

const getTrainingPartners = (partnerIds) => {
  return partnerIds.map(id => usersData.find(user => user.id === id)).filter(Boolean)
}

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      users: [User!]!  # returning a list of users
    }

    type User {
      id: ID!
      name: String!
      email: String!
      avatar: String!
      bio: String!
      favoriteCombo: [String!]
      trainingPartner: [User!]
    }
  `,
  resolvers: {
    Query: {
      users: () => usersData
    },
    User: {
      trainingPartner: (parent) => {
        // resolving training partners by their IDs
        return getTrainingPartners(parent.trainingPartnerIds)
      }
    }
  }
})
