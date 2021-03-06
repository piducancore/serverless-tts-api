const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1");
const { IamAuthenticator } = require("ibm-watson/auth");

const tts = new TextToSpeechV1({
  authenticator: new IamAuthenticator({ apikey: process.env.API_KEY }),
  serviceUrl: process.env.SERVICE_URL,
  disableSslVerification: true,
});

function streamToBuffer(stream) {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on("error", (err) => reject(err));
    stream.on("end", () => resolve(Buffer.concat(chunks)));
  });
}

module.exports = async (req, res) => {
  try {
    const { text, voice, buffer } = req.query;
    const { result } = await tts.synthesize({
      text,
      accept: "audio/mp3",
      voice: voice ? voice : "en-US_MichaelV3Voice" /* For spanish use "es-LA_SofiaV3Voice" */,
    });
    if (buffer) {
      const data = await streamToBuffer(result);
      res.setHeader("Content-Type", "audio/mpeg");
      res.setHeader("Content-Disposition", "filename=demo.mp3");
      res.send(data);
    } else {
      result.pipe(res);
    }
  } catch (error) {
    throw error;
  }
};
