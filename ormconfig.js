module.exports = {
  type: 'postgres',
  url:
    'postgres://poclsmzgibgomn:07a516e869c3d647d699b6ce95d6b1109e46f345b1af5c9df319818c6f4e2c87@ec2-34-225-103-117.compute-1.amazonaws.com:5432/dapdqjhrc5pplm?ssl=true',
  entities: [process.env.ENTITY_PATH],
  synchronize: true,
};
