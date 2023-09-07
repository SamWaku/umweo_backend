const ActivityService = require('./activity-service');
const RecordingService = require('./recordings-service');
const ScheduleService = require('./recordings-service');
const TaskService = require('./task-service');
const UserService = require('./user-service');

const ServiceContainer = () => {
    return {
        userservice: UserService(),
        taskservice: TaskService(),
        scheduleservice: ScheduleService(),
        recordingservice: RecordingService(),
        activityservice: ActivityService(),
    }
}

module.exports = ServiceContainer();