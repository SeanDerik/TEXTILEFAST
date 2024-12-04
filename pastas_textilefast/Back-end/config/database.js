import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('textilefast', 'root', 'm4x1046$', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
