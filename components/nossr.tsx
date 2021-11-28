import React, { useEffect, useState } from 'react';

const NoSsr: React.FC = ({ children }) => {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return <>{isMounted ? children : null}</>;
};

export default NoSsr;

import React, { useEffect, useState } from 'react';

const [isMounted,setIsMounted] = useState(false); // Need this for the react-tooltip

useEffect(() => {
    setIsMounted(true);
},[]);
 
return (<div>
      {isMounted && <ReactTooltip id={"mytip"} effect={"solid"} />}

      <span data-tip={"Tip Here"} data-for={"mytip"}>Hover me</span>
</div>)