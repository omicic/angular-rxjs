import * as express from 'express';
//var getAllCourses= require("./get-courses.route");

import {Application} from "express";
import {getAllCourses} from "./get-courses.route";
var bodyParser = require('body-parser');
const app: Application = express();

app.use(bodyParser.json());

app.route('/api/courses').get(getAllCourses);

const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



