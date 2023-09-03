const { prisma } = require("../config/db")

exports.TaskModel=prisma.tasks

// model Tasks {
//     id          Int        @id @default(autoincrement())
//     title       String
//     description String
//     therapist   Therapist? @relation(fields: [therapistId], references: [id])
//     therapistId Int?
//     user        User?      @relation(fields: [userId], references: [id])
//     userId      Int?
//   }