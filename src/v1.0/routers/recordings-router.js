const recordingsController = require("../controllers/recordings-controller");

const RecordingsRouter = require("express").Router();

RecordingsRouter.post("/", recordingsController.createRecording);

RecordingsRouter.get("/:id", recordingsController.getRecordingById);
RecordingsRouter.put("/:id", recordingsController.updateRecordingById);
RecordingsRouter.delete("/:id", recordingsController.deleteRecordingById);
