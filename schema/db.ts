import * as mongoose from 'mongoose';
import dev_config from '../config/main';

const connectdb = async () => {
  if (mongoose.connection.readyState == 1) return;
  await mongoose.connect(
    `mongodb://${dev_config.user}:${dev_config.pass}@${dev_config.host}:${dev_config.port}/${dev_config.db}`,
    (err) => {
      if (err)
        console.error('error:' + err);
    },
  );
}

export default connectdb;
