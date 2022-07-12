import * as mongoose from 'mongoose';

const connectdb = async () => {
  if (mongoose.connection.readyState == 1) return;
  const mongo_uri: string = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  await mongoose.connect(
    mongo_uri,
    (err) => {
      if (err)
        console.error('error:' + err);
    },
  );
}

export default connectdb;
