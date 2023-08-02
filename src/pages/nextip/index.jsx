import Link from 'next/link';

export default function IndexPage({ ip }) {
  return (
    <div>
      <h1 className="text-color-red-500">ip address: {ip}</h1>
    
    </div>
  );
}

// IndexPage.getInitialProps = async ({ req }) => {
//   const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
//   return { ip };
// };

export async function getServerSideProps({ req }) {
  const forwarded = req.headers["x-forwarded-for"]
  const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress
  return {
    props: {
      ip,
    },
  }
}
