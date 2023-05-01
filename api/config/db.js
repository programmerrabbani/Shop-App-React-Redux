import mongoose from "mongoose";

// create connection

const mongoDBConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log(` MongoDB Connected SuccessFul `.bgBlue.black);
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

// export

export default mongoDBConnect;
