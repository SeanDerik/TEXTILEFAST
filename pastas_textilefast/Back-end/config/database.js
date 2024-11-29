import { Sequelize } from 'sequelize';

// Creating a new Sequelize instance
const sequelize = new Sequelize('textilefast', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,  // Optional: turn off SQL query logging
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Call the testConnection function
testConnection();

export default sequelize;
