import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { AppModule } from './app.module';
import * as cors from 'cors';

const ENV_LOCAL = '.env.local'
const ENV_DEV = '.env.dev'
config({
  path: ENV_LOCAL || ENV_DEV,
});

(async () => {
  const { PORT } = process.env;
  const app = await NestFactory.create(AppModule);
  app.use(cors());

  await app.listen(PORT,()=>{
    console.log('listening on port:',PORT)
  });
})();
