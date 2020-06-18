import Iron from '@hapi/iron';
import { IncomingMessage } from 'http';
import { NextApiRequest } from 'next';

import { getTokenCookie } from 'src/utils/auth/authCookies';

// :)
const TOKEN_SECRET = '12345678123456781234567812345678';

export const encryptSession = (session: any) => {
  return Iron.seal(session, TOKEN_SECRET, Iron.defaults);
};

export const getSession = async (req: IncomingMessage | NextApiRequest) => {
  const tokenCookie = getTokenCookie(req);

  return tokenCookie && Iron.unseal(tokenCookie, TOKEN_SECRET, Iron.defaults);
};
