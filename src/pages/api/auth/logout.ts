import { NextApiRequest, NextApiResponse } from 'next';

import { removeTokenCookie } from 'src/utils/auth/authCookies';

export default async function handle(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Remove token cookie.
    removeTokenCookie(res);
    // Provide no response.
    res.status(200).end();
  } catch ({ message }) {
    res.status(500).send({ message });
  }
}
