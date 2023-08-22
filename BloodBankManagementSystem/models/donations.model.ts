import { Table, Column, Model } from "sequelize-typescript";
@Table({
  freezeTableName: true,
  timestamps: false,
})
export class bloodbankmanagementsystem_sql_user_vidura extends Model {
  @Column({
    primaryKey: true,
  })
  id: number;

  @Column
  hospital: string;

  @Column
  date: Date;

  @Column
  blood_type: string;

  @Column
  expiry: Date;

  @Column
  location: string;

  @Column
  donator: string;
  
}

