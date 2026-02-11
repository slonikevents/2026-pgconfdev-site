import CYBERTEC_LOGO from './logo/CYBERTEC.svg';
import EDB_LOGO from './logo/EDB.svg';
import MICROSOFT_LOGO from './logo/Microsoft.svg';
import PERCONA_LOGO from './logo/Percona.png';
import FUJITSU_LOGO from './logo/fujitsu.svg';
import XATA_LOGO from './logo/xata.png';
import AWS_LOGO from './logo/aws.svg';

export const SPONSOR_LIST = {
  GOLD: [
    {
      NAME: 'EDB',
      URL: 'https://www.enterprisedb.com/',
      LOGO: EDB_LOGO,
      DESCRIPTION:
        'As the leading contributor to PostgreSQL, EDB is committed to building the next generation of Postgres for operators, developers, data engineers, and AI builders. EDB provides a modern Postgres data platform for transactional, analytical, and new AI workloads powered by an enhanced Postgres engine.',
    },
    {
      NAME: 'Microsoft',
      URL: 'https://aka.ms/pg-at-microsoft',
      LOGO: MICROSOFT_LOGO,
      DESCRIPTION:
        'At Microsoft, our Postgres team is focused on advancing Postgres—by contributing to Postgres open source; by providing the Azure Database for PostgreSQL and Azure HorizonDB services; by contributing to the Postgres ecosystem with Citus, Patroni, and VS Code; and by supporting the Postgres community.',
    },
    {
      NAME: 'AWS',
      URL: 'https://aws.amazon.com',
      LOGO: AWS_LOGO,
      DESCRIPTION:
        "Amazon Web Services (AWS) is the world's most comprehensive & broadly adopted cloud provider, with 200+ fully featured services spanning over 35 geographic regions. With many solutions built for & around PostgreSQL, we strive to be a leading employer & contributor within the PostgreSQL community.",
    },
  ],
  SILVER: [
    {
      NAME: 'Percona',
      URL: 'https://www.percona.com',
      LOGO: PERCONA_LOGO,
    },
    {
      NAME: 'Fujitsu',
      URL: 'https://www.postgresql.fastware.com/',
      LOGO: FUJITSU_LOGO,
    },
  ],
  BRONZE: [
    {
      NAME: 'CYBERTEC',
      URL: 'https://www.cybertec-postgresql.com',
      LOGO: CYBERTEC_LOGO,
    },
    {
      NAME: 'Xata',
      URL: 'https://xata.io',
      LOGO: XATA_LOGO,
    },
  ],
};
