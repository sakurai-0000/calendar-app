import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

import BaseModel from "./base";
import DB from "../infrastructure/db/handler";
import { Schedule } from "../entity/schedule";

export default class HinataModel extends BaseModel {
  constructor(db: DB) {
    super(db);
  }

  /**
   * `year`年`month`月の予定を取得
   * @param month 月の指定
   * @param year 年の指定
   */
  async findAll(month: number, year: number) {
    const targetMonth = dayjs(`${year}-${month}-1`);
    const firstDay = targetMonth.startOf("month").toISOString();
    const lastDay = targetMonth.endOf("month").toISOString();
    return await this.db.query<Schedule[]>(
      `select * from hinataSchedules where date between ? and ?;`,
      [
        firstDay,
        lastDay
      ]
    );
  }

  /**
   * 指定されたidの予定を取得
   * @param id 追加したいデータのid
   */
  async find(id: number) {
    const schedules = await this.db.query<Schedule[]>(
      `select * from hinataSchedules where id = ?`,
      [id]
    );
    return schedules[0];
  }

  /**
   * 予定の追加
   * @param schedule 追加したい予定のデータ
   */
  async store(schedule: Schedule) {
    const result = await this.db.query<{ insertId: number }>(
      `insert into hinataSchedules (title, description, date, location) values (?, ?, ?, ?);`,
      [
        schedule.title,
        schedule.description,
        new Date(schedule.date),
        schedule.location
      ]
    );

    const newSchedule = await this.find(result.insertId);

    return newSchedule;
  }

  /**
 * 日向坂46のデータを登録
 * Promise.allで全部終わるのを待ってそれの配列を返す
 */
  async createHinataSchedule() {
    const hinataData = this.hinataData();
    const newData = await Promise.all(
      hinataData.map(async d => await this.store(d))
    );

    return newData;
  }
  /**
   * 日向坂の予定を返す
   */
  private hinataData() {
    const hinataData: Schedule[] = [
      {
        title: "松田好花 Birthday",
        description: "おめでとうございます",
        location: "京都",
        date: dayjs().month(11).date(27).toDate()
      },
      {
        title: "丹生明里 Birthday",
        description: "おめでとうございます",
        location: "埼玉",
        date: dayjs().month(11).date(15).toDate()
      },
      {
        title: "加藤史帆 Birthday",
        description: "おめでとうございます",
        location: "東京",
        date: dayjs().month(11).date(2).toDate()
      }
    ];

    return hinataData;
  }
}
