import { MongooseModuleOptions } from '@nestjs/mongoose';

const mongooseConfig: MongooseModuleOptions = {
  uri: 'mongodb://localhost:27020/my-mongodb',
};

console.log('Mongoose Configuration:', mongooseConfig);

export default mongooseConfig;
