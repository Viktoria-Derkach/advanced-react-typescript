import type { NextPage } from 'next';

import { DualAlert } from '../src/02-mutually-exclusive/dual-alert';

const MutuallyExclusive: NextPage = () => {
  return (
    <div>
      <h2 className="my-4">Mutually exclusive props</h2>
      {/* should be valid */}
      <DualAlert
        message="Can we do mutually exclusive props?"
        variant='danger'
      />
            <DualAlert

        messageId="hello-tsx"
      />
      {/* should be invalid */}
      {/* <DualAlert
       message="Can we do mutually exclusive props?"
        messageId="hello-tsx"
      />
      <DualAlert  /> */}

    </div>
  );
};

export default MutuallyExclusive;
