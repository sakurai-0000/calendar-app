// import ScheduleModel from "../models/schedule";
import HinataModel from "../models/hinata";
import DB from "../infrastructure/db/handler";
import {
  Dictionary,
  Request as _Request,
  Response
} from "express-serve-static-core";
import { Schedule } from "../entity/schedule";

type Request = _Request<Dictionary<string>>;

export default class HinataController {
  private hinataModel: HinataModel;

  constructor(db: DB) {
    this.hinataModel = new HinataModel(db);
  }

  /**
   * 予定を取得するためのコントローラー
   * `month`と`year`の指定がマスト
   */
  index = async (req: Request, res: Response) => {
    const year = Number(req.query.year as string);
    const month = Number(req.query.month as string);

    // queryの指定がなかったら400 Bad Request
    const isValid = year > 0 && month > 0 && month <= 12;
    if (!isValid) {
      res.sendStatus(400);
      return;
    }
    const schedules = await this.hinataModel.findAll(month, year);
    res.json(schedules);
  };

  /**
   * 新しい予定を作成するコントローラー
   */
  create = async (req: Request, res: Response) => {
    const schedule = req.body as Schedule;
    const newSchedule = await this.hinataModel.store(schedule);

    res.json(newSchedule);
  };

  /**
   * 予定を一件だけ返すコントローラー
   */
  show = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (!id) {
      res.sendStatus(400);
      return;
    }

    const schedule = await this.hinataModel.find(id);

    res.json(schedule);
  };

  /**
   * 日向坂メンバーの誕生日を登録するコントローラー
   */
  createHinataSchedule = async (_req: Request, res: Response) => {
    const schedules = await this.hinataModel.createHinataSchedule();

    res.json(schedules);
  };
}
