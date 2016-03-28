import React from 'react';


export default function Response({ response }) {

  return (
    <div>
      <h4 className='page-header'>Response</h4>
      <pre className='json'>
        {JSON.stringify(response.body, null, 2)}
      </pre>
    </div>
  );
}
