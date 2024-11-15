import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('textilefast', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
