import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

// export default function StellarToml() {
//   return null;
// }

// export async function getServerSideProps({ req, res }) {
//   res.setHeader('Content-Type', 'text/plain; charset=utf-8');
//   res.send(`
//     ACCOUNTS = [ "GCSGSR6KQQ5BP2FXVPWRL6SWPUSFWLVONLIBJZUKTVQB5FYJFVL6XOXE", "GDRND2IUXVMHZ4XTB2RZ4AJ3AOLON3WTAOC23XEASB56NHDFW3ED57TW" ]
//     SIGNING_KEY = "GCUZ6YLL5RQBTYLTTQLPCM73C5XAIUGK2TIMWQH7HPSGWVS2KJ2F3CHS"
//     NETWORK_PASSPHRASE = "Test SDF Network ; September 2015"

//     TRANSFER_SERVER = "https://testanchor.stellar.org/sep6"
//     TRANSFER_SERVER_SEP0024 = "https://testanchor.stellar.org/sep24"
//     WEB_AUTH_ENDPOINT = "https://testanchor.stellar.org/auth"
//     KYC_SERVER = "https://testanchor.stellar.org/kyc"
//     DIRECT_PAYMENT_SERVER = "https://testanchor.stellar.org/sep31"
//     ANCHOR_QUOTE_SERVER = "https://testanchor.stellar.org/sep38"

//     [[CURRENCIES]]
//     code = "SRT"
//     issuer = "GCDNJUBQSX7AJWLJACMJ7I4BC3Z47BQUTMHEICZLE6MU4KQBRYG5JY6B"
//     status = "test"
//     is_asset_anchored = false
//     desc = "Stellar Reference Token (SRT) is an asset issued on testnet and is used as an anchored asset for this reference server for demonstration and testing purposes."

//     [[CURRENCIES]]
//     code = "USDC"
//     issuer = "GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5"
//     status = "test"
//     is_asset_anchored = false
//     desc = "Circle USDC Token"

//     [DOCUMENTATION]
//     ORG_NAME = "Stellar Development Foundation"
//     ORG_URL = "https://stellar.org"
//     ORG_DESCRIPTION = "The Stellar Development Foundation (SDF) is a non-profit organization whose mission is to create equitable access to the global financial system."
//     ORG_GITHUB = "stellar"
//   `);

//   return {
//     props: {},
//   };
// }
