const whiteList = [
  "https://www.yoursite.com",
  "http://localhost:5173",
  "http://localhost:3500",
  "http://localhost:3000",
  'https://qwrkjrlb-5173.asse.devtunnels.ms'
];

const corsOption = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed By CORS"));
    }
  },
  optionalSuccessStatus: 200,
};

module.exports=corsOption;
