import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {InjectTwilio, TwilioClient} from "nestjs-twilio";
import {CareerInterface} from "../interface/career.interface";

const nodemailer = require("nodemailer");

@Injectable()
export class CareerService {
    constructor(
        @InjectModel('career')
        private readonly careerInterface: Model<CareerInterface>
    ) {
    }

    async careers() {
        const data = await this.careerInterface.find().exec();
        return {
            "results": data,
            "pageCount": 15,
            "totalCount": data.length
        };

    }

    async careerOne(body) {
        var query = {'_id': body};
        const data = await this.careerInterface.findOne(query).exec();
        return data
    }

    async deletecareer(body) {
        var query = {'_id': body.id};
        return this.careerInterface.deleteOne(query);
    }

    async addCareer(body) {
        const user = new this.careerInterface(body);
        const data = await this.careerInterface.find().exec();
        console.log(user);
        return await user.save().then((data) => {
            let res = {
                "jobCode": data.jobCode,
                "title": data.jobCode,
                "description": data.description,
                "exp": data.exp,
                "designation": data.designation,
                "addBy": data.addBy,
            }
            return {
                "responseCode": 200,
                "error": false,
                "responseMessage": 'career added sucessfully',
                "response": res,
            };
        });
    }

    async updatecareer(body) {
        const user = new this.careerInterface(body);
        // const data = await this.careerInterface.find().exec();
        // console.log(user);
        // return await user.save().then((data) => {
        //     let res = {
        //         "jobCode": data.jobCode,
        //         "title": data.jobCode,
        //         "description": data.description,
        //         "exp": data.exp,
        //         "designation": data.designation,
        //         "addBy": data.addBy,
        //     }
        //     return {
        //         "responseCode": 200,
        //         "error": false,
        //         "responseMessage": 'career added sucessfully',
        //         "response": res,
        //     };
        // });

        console.log(body)
        var query = {'_id': body._id};
        return this.careerInterface.updateOne(query, body, {upsert: true}, function (err, doc) {
            if (err) return {
                error: err
            };
            return 'Succesfully saved.';
        });
    }

    // async..await is not allowed in global scope, must use a wrapper
    // async main() {
    //     // Generate test SMTP service account from ethereal.email
    //     // Only needed if you don't have a real mail account for testing
    //     let testAccount = await nodemailer.createTestAccount();
    //
    //     // create reusable transporter object using the default SMTP transport
    //     let transporter = nodemailer.createTransport({
    //         host: "smtp.ethereal.email",
    //         port: 587,
    //         secure: false, // true for 465, false for other ports
    //         auth: {
    //             user: 'beth.gibson@ethereal.email',
    //             pass: 'xNJUQwJFxrEDF7fCB2'
    //         }
    //     });
    //
    //
    //     // send mail with defined transport object
    //     let info = await transporter.sendMail({
    //         from: '"Fred Foo 👻" <muralidharanc849@gmail.com>',
    //         to: "muralidharan@mybanana.org", // list of receivers
    //         subject: "Hello ✔", // Subject line
    //         text: "Hello world?", // plain text body
    //         html: "<b>Hello world?</b>", // html body
    //     });
    //
    //     console.log("Message sent: %s", info.messageId);
    //
    //
    //     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    //
    //     // Preview only available when sending through an Ethereal account
    //     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    //
    //
    //     return {
    //         "responseCode": 200,
    //         "error": false,
    //         "responseMessage": 'career added sucessfully',
    //         "response": info.messageId,
    //         "Preview URL": nodemailer.getTestMessageUrl(info),
    //     };
    //     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    //
    // }


    async main(body) {

        // var nodemailer = require('nodemailer');
        //
        // var transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: 'muralidharanccse44@gmail.com',
        //         pass: '9790092200'
        //     }
        // });
        //
        // var mailOptions = {
        //     from: 'muralidharanccse44@gmail.com',
        //     to: 'muralidharanc849@gmail.com',
        //     subject: 'aa',
        //     text: `AAA`
        // };
        //
        // transporter.sendMail(mailOptions, function(error, info){
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         console.log('Email sent: ' + info.response);
        //     }
        // });


        // Create a SMTP transporter object
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'muralidharanccse44@gmail.com',
                pass: '9790092200'
            }
        });

        // Message object
        let message = {
            from: 'murali <muralidharanc849@gmail.com>',

            // Comma separated list of recipients
            to: 'Andris Reinman <muralidharanccse44@gmail.com>',
            bcc: 'muralidharanccse44@gmail.com',

            // Subject of the message
            subject: 'Nodemailer is unicode friendly ✔',

            // plaintext body
            text: 'Hello to myself!',

            // HTML body
            html:
                '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
                '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>' +
                '<p>Name : ' + body.firstName + ' ' + body.lastName + ' </p><br/>' +
                '<p>Phone : ' + body.phone + ' </p><br/>' +
                '<p>Email : ' + body.email + ' </p><br/>' +
                '<p>Resume : ' + body.resume + ' </p><br/>',

            // An array of attachments
            // attachments: [
            //     // String attachment
            //     {
            //         filename: 'notes.txt',
            //         content: 'Some notes about this e-mail',
            //         contentType: 'text/plain' // optional, would be detected from the filename
            //     },
            //
            //     // Binary Buffer attachment
            //     {
            //         filename: 'image.png',
            //         content: Buffer.from(
            //             'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
            //             '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
            //             'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
            //             'base64'
            //         ),
            //
            //         cid: 'note@example.com' // should be as unique as possible
            //     },
            //
            //     // File Stream attachment
            //     {
            //         filename: 'nyan cat ✔.pdf',
            //         path: 'C:/fakepath/nyan cat ✔.pdf',
            //         cid: 'nyan@example.com' // should be as unique as possible
            //     }
            // ]
        };

        let info = await transporter.sendMail(message);
        console.log('Message sent successfully as %s', nodemailer.getTestMessageUrl(info));
    }

}

