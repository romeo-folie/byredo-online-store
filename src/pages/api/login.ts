import {setAuthCookies} from "next-firebase-auth";
import {NextApiRequest, NextApiResponse} from "next";
import initAuth from "../../services/firebase/initAuth";

initAuth();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log("request ", req.headers);
    await setAuthCookies(req, res);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return res.status(500).json({error: "Unexpected error."});
  }
  return res.status(200).json({status: true});
};

export default handler;
