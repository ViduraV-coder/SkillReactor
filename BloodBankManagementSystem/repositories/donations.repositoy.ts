import { bloodbankmanagementsystem_sql_user_vidura } from "../models/donations.model";
import { connect } from "../services/postgresDB.service";
import { Op } from "sequelize";

export class DonationsRepository {
  private readonly db: any = {};
  private readonly bloodbankmanagementsystem_sql_user_vidura;

  constructor() {
    this.db = connect();
    this.bloodbankmanagementsystem_sql_user_vidura =
      this.db.sequelize.getRepository(
        bloodbankmanagementsystem_sql_user_vidura
      );
  }

  async getDonationById(id: number) {
    try {
      return await this.bloodbankmanagementsystem_sql_user_vidura.findAll({
        where: {
          id,
        },
      });
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async getDonationsByHospital(hospital: string) {
    try {
      return await this.bloodbankmanagementsystem_sql_user_vidura.findAll({
        where: {
          hospital,
        },
      });
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async getDonationsByTime(time: any) {
    try {
      return await this.bloodbankmanagementsystem_sql_user_vidura.findAll({
        where: {
          time,
        },
      });
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async getDonationsByType(blood_type: string) {
    try {
      return await this.bloodbankmanagementsystem_sql_user_vidura.findAll({
        where: {
          blood_type,
        },
      });
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async updateDonations(id: number, data: any) {
    try {
      return await this.bloodbankmanagementsystem_sql_user_vidura.update(data, {
        where: {
          id,
        },
      });
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async deleteDonationById(id: number) {
    try {
      return await this.bloodbankmanagementsystem_sql_user_vidura.destroy({
        where: {
          id,
        },
      });
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async deleteDonationsByExpiry(expiry: any) {
    try {
      return await this.bloodbankmanagementsystem_sql_user_vidura.destroy({
        where: {
          expiry: {
            [Op.lt]: expiry,
          },
        },
      });
    } catch (err) {
      console.log(err);
      return [];
    }
  }
}
