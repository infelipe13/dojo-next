import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { Container, Div100Vh } from 'src/components';
import { withProtection } from 'src/hofs';
import { useUser } from 'src/hooks';

type User = {
  fullName: string;
};

type Props = {
  user: User;
};

export default function Profile({ user }: Props) {
  const router = useRouter();
  // const user = useUser();

  return (
    <Div100Vh>
      <Container>
        <h1 className="font-bold text-primary text-x6">Profile</h1>
        {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
        <button
          onClick={async () => {
            await fetch('/api/auth/logout');

            router.replace('/');
          }}
        >
          Logout
        </button>
      </Container>
    </Div100Vh>
  );
}

export const getServerSideProps: GetServerSideProps = withProtection();

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   const result = await fetch('http://localhost:3000/api/user', {
//     headers: { cookie: req.headers.cookie! },
//   });
//   const { user } = await result.json();

//   return { props: { user } };
// };
