const { prisma } = require("../config/db");

exports.ActivityModel = prisma.activity;

// model Activity {
//     id          Int    @id @default(autoincrement())
//     name        String
//     title       String
//     description String
//     user        User?  @relation(fields: [userId], references: [id])
//     userId      Int?
//   }
