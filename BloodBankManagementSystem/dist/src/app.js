"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const donations_controller_1 = require("../controllers/donations.controller");
class App {
    constructor() {
        this.headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
        };
        this.express = (0, express_1.default)();
        this.middleware();
        this.routes();
        this.donationsController = new donations_controller_1.DonationsController();
    }
    middleware() {
        this.express.use(body_parser_1.default.json());
        this.express.use(body_parser_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.express.get("/get-blood/id/:id", (req, res) => {
            res.set(this.headers);
            this.donationsController.getDonationById(+req.params.id).then((data) => {
                if (data.length !== 0) {
                    res.status(200).json(data[0]);
                }
                else {
                    res.status(400).send("No data found for that ID");
                }
            });
        });
        this.express.get("/get-blood/hospital/:hospital", (req, res) => {
            res.set(this.headers);
            this.donationsController
                .getDonationsByHospital(req.params.hospital)
                .then((data) => {
                if (data.length !== 0) {
                    res.status(200).json(data);
                }
                else {
                    res.status(400).send("No data found for that Hospital");
                }
            });
        });
        this.express.get("/get-blood/time/:time", (req, res) => {
            res.set(this.headers);
            this.donationsController
                .getDonationsByTime(req.params.time)
                .then((data) => {
                if (data.length !== 0) {
                    res.status(200).json(data);
                }
                else {
                    res.status(400).send("No data found for that Time");
                }
            });
        });
        this.express.get("/get-blood/type/:type", (req, res) => {
            res.set(this.headers);
            this.donationsController
                .getDonationsByType(req.params.type)
                .then((data) => {
                if (data.length !== 0) {
                    res.status(200).json(data);
                }
                else {
                    res.status(400).send(data);
                }
            });
        });
        this.express.post("/update-blood", (req, res) => {
            res.set(this.headers);
            const id = req.body.id;
            delete req.body.id;
            if (id !== null && id !== undefined) {
                this.donationsController.updateDonations(id, req.body).then((data) => {
                    if (data[0] !== 0) {
                        res.status(200).send("Update successful");
                    }
                    else {
                        res.status(400).send("Cannot find any entry with that ID");
                    }
                });
            }
            else {
                res.status(400).send("ID not provided");
            }
        });
        this.express.post("/delete-blood", (req, res) => {
            res.set(this.headers);
            if (req.body.id !== null && req.body.id !== undefined) {
                this.donationsController
                    .deleteDonationById(req.body.id)
                    .then((data) => {
                    if (data !== 0) {
                        res.status(200).send("Delete successful");
                    }
                    else {
                        res.status(400).send("Cannot find any entry with that ID");
                    }
                });
            }
            else {
                res.status(400).send("ID not provided");
            }
        });
        this.express.post("/clean-blood", (req, res) => {
            res.set(this.headers);
            this.donationsController.deleteDonationsByExpiry(req.body.expiry).then((data) => {
                if (data !== 0) {
                    res.status(200).send("Delete successful");
                }
                else {
                    res.status(400).send("Cannot find any entry with that Expiry Date");
                }
            });
        });
        this.express.use("*", (_, res) => {
            res.set(this.headers);
            res.status(400).send("Make sure the URL is correct");
        });
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map