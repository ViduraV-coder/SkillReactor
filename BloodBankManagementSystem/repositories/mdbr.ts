import mongoose from "mongoose";

export class MDBR {

    dataSchema = new mongoose.Schema({
        hospital: {
          required: false,
          type: String,
        },
        date: {
          required: false,
          type: Date,
        },
        blood_type: {
          required: false,
          type: String,
        },
        expiry: {
          required: false,
          type: Date,
        },
        location: {
          required: false,
          type: String,
        },
        donator: {
          required: false,
          type: String,
        },
      });
      
    Model = mongoose.model("Donation", this.dataSchema);

    async setDonationsM (obj: any){
        
        const data = new this.Model({
            hospital: obj.body.hospital,
            date: obj.body.date,
            blood_type: obj.body.blood_type,
            expiry: obj.body.expiry,
            location: obj.body.location,
            donator: obj.body.donator
        })
    
        try {
            const dataToSave = await data.save();
            return dataToSave;
        }
        catch (error) {
            return [];
        }
}

}
