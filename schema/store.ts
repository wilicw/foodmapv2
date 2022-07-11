import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  address: String,
  image: String,
});

const Store = mongoose.models.store || mongoose.model('store', storeSchema);

export default Store;