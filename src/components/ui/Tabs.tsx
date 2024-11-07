import React from 'react'

const Tabs = ({ tab }: { tab: string }) => {
  return (
    <div className="inline-block cursor-pointer border border-black rounded-xl uppercase font-medium text-[10px] px-4 py-1">{tab}</div>
  );
};

export default Tabs