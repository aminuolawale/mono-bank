module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [process.env.ENTITY_PATH],
  synchronize: true,
};
