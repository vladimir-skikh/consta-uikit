import * as React from 'react';

function Xs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M11 3H1v2h10V3zM1 7h14v2H1V7zM1 11h10v2H1v-2z" />
    </svg>
  );
}

export default Xs;
