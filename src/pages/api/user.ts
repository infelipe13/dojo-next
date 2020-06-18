import { NextApiRequest, NextApiResponse } from 'next';

import { getSession } from 'src/utils/auth/iron';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getSession(req);

    res.status(200).json({ user: session || null });
  } catch ({ message }) {
    res.status(500).send({ message });
  }
}
