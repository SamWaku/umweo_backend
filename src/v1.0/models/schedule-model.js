const {prisma}=require('../config/db');

exports.ScheduleModel=prisma.schedule


// model Schedule {
//     id          Int        @id @default(autoincrement())
//     date        DateTime?  @default(now())
//     therapist   Therapist? @relation(fields: [therapistId], references: [id])
//     therapistId Int?
//     title       String
//     time        String
//     user        User?      @relation(fields: [userId], references: [id])
//     userId      Int?
//   }
  