const { prisma } = require("../config/db");

exports.RecordingsModel = prisma.recordings;

// model Recordings {
//     id          Int        @id @default(autoincrement())
//     date        DateTime?  @default(now())
//     url         String
//     type        String
//     therapist   Therapist? @relation(fields: [therapistId], references: [id])
//     therapistId Int?
//     user        User?      @relation(fields: [userId], references: [id])
//     userId      Int
//   }
