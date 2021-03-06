import { GetServerSidePropsContext } from 'next';

import { getSession } from 'src/utils/auth/iron';

export const withProtection = (
  handleFn?: (ctx: GetServerSidePropsContext) => Promise<object>
) => async (ctx: GetServerSidePropsContext) => {
  const { req, res } = ctx;
  const session = await getSession(req);

  if (!session) {
    res.writeHead(302, { Location: '/' });
    res.end();

    return { props: {} };
  }

  const props = handleFn ? await handleFn(ctx) : {};

  return { props: { ...props, user: session } };
};
