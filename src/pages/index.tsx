import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { Container, Div100Vh } from 'src/components';
import { getSession } from 'src/utils/auth/iron';

export default function Login() {
  const router = useRouter();

  return (
    <Div100Vh>
      <Container>
        <h1 className="font-bold text-primary text-x6">Login</h1>
        <button
          onClick={async () => {
            await fetch('/api/auth/login');

            router.replace('/profile');
          }}
        >
          Authenticate
        </button>
      </Container>
    </Div100Vh>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession(req);

  if (session) {
    res.writeHead(302, { Location: '/profile' });
    res.end();
  }

  return { props: {} };
};
