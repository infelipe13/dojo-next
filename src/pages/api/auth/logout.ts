import { NextApiRequest, NextApiResponse } from 'next';

import { removeTokenCookie } from 'src/utils/auth/authCookies';

export default async function handle(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Remove token cookie.
    removeTokenCookie(res);
    // Redirect to sign in.
    res.writeHead(302, { Location: '/' });
    // Provide no response.
    res.end();
  } catch ({ message }) {
    res.status(500).send({ message });
  }
}
