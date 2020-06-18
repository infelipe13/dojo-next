import { NextApiRequest, NextApiResponse } from 'next';

import { setTokenCookie } from 'src/utils/auth/authCookies';
import { encryptSession } from 'src/utils/auth/iron';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log(req.body);

    // ???
    const session = null;
    // Seal the session.
    const token = await encryptSession(session);
    // Set token cookie.
    setTokenCookie(res, token);
    // ???
    const user = {};

    res.status(200).send({ user });
  } catch ({ message }) {
    res.status(500).send({ message });
  }
}
