import * as cron from "node-cron";
import logger from "@core/logger";
import moment from "moment-timezone";
import createHttpError from "http-errors";
import i18n from "i18n";
import { FIXTURE_CRON_SCHEDULE, SLACKTOKEN } from "@config/secret";
import axios from "axios";
import { CsvParser } from "./csvParser";

class fetchFlashliveFixtures {
  public csvParser: CsvParser;
  constructor() {
    this.csvParser = new CsvParser();
  }

  public startUpdation = async () => {
    const fs = require("fs");
    const csv = fs.readFileSync("src/script/CSV_FILE.csv");
    const array = csv.toString().split("\n");
    const json = await this.csvParser.csvAsJson(array);
    console.log(json);
    cron.schedule(FIXTURE_CRON_SCHEDULE, async function () {
      try {
        logger.info("cron started");
        json.forEach(
          async (data: {
            date: any;
            event: any;
            remindBefore: any;
            mode: any;
            budget: any;
          }) => {
            const eventDate = new Date(data.date);
            const today = new Date(moment().format("YYYY-MM-DD"));
            const eventDay = eventDate.getDay();
            const diff = eventDate.getTime() - today.getTime();
            const arr: any = data.event.split("");
            let msg: string = "";
            const week: string[] = [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ];
            arr.forEach((element: any) => {
              if (element == " ") msg = msg + "   ";
              else msg = msg + `:alphabet-yellow-${element}:`;
            });
            const diffDays = Number(diff) / (1000 * 3600 * 24);
            if (diffDays == Number(data.remindBefore)) {
              const url = "https://slack.com/api/chat.postMessage";
              const res = await axios.post(
                url,
                  {
                    //add channel name here
                    channel: "remindus",
                  text: `:alphabet-yellow-y::alphabet-yellow-e::alphabet-yellow-a::alphabet-yellow-h:   ${msg}   :alphabet-yellow-i::alphabet-yellow-s:   :alphabet-yellow-c: :alphabet-yellow-o::alphabet-yellow-m: :alphabet-yellow-i::alphabet-yellow-n: :alphabet-yellow-g: :alphabet-yellow-exclamation: :confetti_ball::tada::star-struck::party_parrot:\nDear Cultural Team,

I hope this message finds you well. I am writing to inform you that ${data.event} is approaching in just ${data.remindBefore} days and we are planning to have an ${data.mode} celebration on ${data.date}, ${week[eventDay]}. The budget allocated for the event is :moneybag::moneybag:${data.budget}:moneybag::moneybag:Rupees.

I kindly request you to start preparing accordingly and ensure that we have a memorable and enjoyable celebration. If you have any questions or concerns, please do not hesitate to reach out to me.

Best regards,
Team HR`,
                },
                { headers: { authorization: `Bearer ${SLACKTOKEN}` } }
              );
            }
          }
        );

        logger.info("cron ended");
      } catch (error) {
        logger.error("Error while fixture updation cron", error);
        throw new createHttpError.InternalServerError(
          i18n.__("something_went_wrong")
        );
      }
    });
  };
}
export default new fetchFlashliveFixtures().startUpdation();
