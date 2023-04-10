import {
  BadGatewayException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import * as nodemailer from "nodemailer";

@Injectable()
export class MailService {
  transporter: nodemailer.Transporter;
  static instance: MailService;

  /**
   * constructore
   */
  public constructor() {
    this.transporter = this.getT();
  }

  /***
   * returns a singleton instance of the MailService class
   */
  static getInstance() {
    if (this.instance !== null) {
      return this.instance;
    }
    this.instance = new MailService();
    return this.instance;
  }

  /**
   * returns an instance for SMTP transporter
   * @returns nodemailer.Transporter
   */
  getT(): nodemailer.Transporter {
    // craeting Transporter
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  public send_(options: Options): Promise<any> {
    try {
      return this.transporter.sendMail(options);
    } catch (error) {
      throw new BadGatewayException({ message: error });
    }
  }
}

/**
 * Optios Interface
 */
export interface Options {
  // recipient
  to: string;
  // message
  text: string;
  // html
  html: string;
  // subject
  subject: string;
}
