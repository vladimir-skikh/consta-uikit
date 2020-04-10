import * as React from 'react';

function Xs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        d="M15 8A7 7 0 111 8a7 7 0 0114 0zm-2 0a5 5 0 01-7.757 4.172l6.929-6.93C12.695 6.034 13 6.982 13 8zm-9.172 2.757l6.93-6.929a5 5 0 00-6.929 6.929z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Xs;
