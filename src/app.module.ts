import {HttpModule, Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UserModule} from './user/user.module';
import {ConfigModule} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';
import {TwilioModule} from "nestjs-twilio";
import { CareerController } from './career/career.controller';
import {CareerModule} from "./career/career.module";

@Module({
  imports: [
    UserModule,
    CareerModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    // mongodb://dbuser:dbpass@localhost:27017/dbname

    MongooseModule.forRoot(
      process.env.APP_ENV === 'Dev' ? `mongodb://${process.env.DB_USER ? process.env.DB_USER + ':' : ''}${
        process.env.DB_PASS ? encodeURIComponent(process.env.DB_PASS) + '@' : ''
      }${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}${
        process.env.DB_AUTH_METHOD !== 'None' ? '?authSource=admin' : ''
      }` : `mongodb+srv://admin:admin@cluster0.jwp6p.mongodb.net/medq_react?retryWrites=true&w=majority`,
    ),
    TwilioModule.forRoot({
      accountSid: process.env.TWILIO_ACCOUNT_SID,
      authToken: process.env.TWILIO_AUTH_TOKEN,
    }),
  ],

    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}

