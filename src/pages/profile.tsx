import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { Container, Div100Vh } from 'src/components';
import { withProtection } from 'src/hofs';

type User = {
  name: string;
};

type Props = {
  user: User;
};

export default function Profile({ user }: Props) {
  const router = useRouter();

  return (
    <Div100Vh>
      <Container>
        <h1 className="font-bold text-primary text-x6">Profile</h1>
        {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
        <button
          onClick={async () => {
            await fetch('/api/auth/logout');

            router.push('/');
          }}
        >
          Logout
        </button>
      </Container>
    </Div100Vh>
  );
}

export const getServerSideProps: GetServerSideProps = withProtection();
