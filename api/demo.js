const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1");
const { IamAuthenticator } = require("ibm-watson/auth");

const { synthesize } = new TextToSpeechV1({
  authenticator: new IamAuthenticator({ apikey: process.env.API_KEY }),
  serviceUrl: process.env.SERVICE_URL,
  disableSslVerification: true,
});

module.exports = async (req, res) => {
  try {
    const { result } = await synthesize({
      text: req.query.text,
      accept: "audio/mp3",
      voice: "es-LA_SofiaV3Voice",
    });
    result.pipe(res);
  } catch (error) {
    res.status(500).json({ error: JSON.stringify(error) });
  }
};
