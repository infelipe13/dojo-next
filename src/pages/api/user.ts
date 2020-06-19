import { NextApiRequest, NextApiResponse } from 'next';

import { getSession } from 'src/utils/auth/iron';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getSession(req);

    if (!session) {
      res.status(200).json({ user: null });

      return;
    }

    res.status(200).json({ user: session });
  } catch ({ message }) {
    res.status(500).send({ message });
  }
}
