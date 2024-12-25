import * as express from "express"
import * as dotenv from "dotenv"
import * as cors from "cors"
import * as bodyParser from "body-parser"
import * as morgan from "morgan"
import helmet from "helmet"
import * as dynamoose from "dynamoose"
// import serverless from "serverless-http";



/* CONFIGURATIONS */
dotenv.config();
const isProduction = process.env.NODE_ENV === "production";
if (!isProduction) {
    dynamoose.aws.ddb.local();
}
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());







/* SERVER */
const port = process.env.PORT || 3000;
if (!isProduction) {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

// aws production environment
// const serverlessApp = serverless(app);
// export const handler = async (event: any, context: any) => {
//     if (event.action === "seed") {
//         await seed();
//         return {
//             statusCode: 200,
//             body: JSON.stringify({ message: "Data seeded successfully" }),
//         };
//     } else {
//         return serverlessApp(event, context);
//     }
// };
