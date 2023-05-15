const download = require("../models/download");
const Download = require("../models/download");

exports.addData = async (req, res) => {
  try {
    const { data } = req.body;
    var download = await Download.find({});
    let downloadTimes = 0;
    if (download.length > 0) {
      download = await Download.find().sort({ downloadTimes: -1 });
      downloadTimes = download[0].downloadTimes;
    }
    download = await Download.create({
      data,
      downloadTimes: downloadTimes + 1,
    });
    return res.status(201).send({
      message: "created",
      download
    });
  } catch (error) {
    console.error(error + "".red);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
