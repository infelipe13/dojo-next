import { AppProps } from 'next/app';

import 'src/tailwind/index.css';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style global jsx>{`
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          src: url('/fonts/montserrat-v14-latin-400.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          src: url('/fonts/montserrat-v14-latin-700.woff2') format('woff2');
        }
      `}</style>
    </>
  );
}
