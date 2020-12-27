import Router from "express-promise-router";
// import ScheduleController from "../../controllers/schedule";
import HinataController from "../../controllers/hinata";
import DB from "../db/handler";

const hinataRouter = (db: DB) => {
  const router = Router();
  const hinataController = new HinataController(db);

  // 日向坂
  router.get("/", hinataController.index);
  router.post("/create-hinata-schedule", hinataController.createHinataSchedule);

  return router;
};

export default hinataRouter;
