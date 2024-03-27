import React from "react";

const Content = ({ content }) => {
  return (
    <div className='h-full w-full flex items-center justify-center p-2'>
      <div className='w-full h-[95%] -mt-14 p- overflow-y-scroll'>
        {/* Content */}
        <div className='p-4 w-full'>{content}</div>
      </div>
    </div>
  );
};

export default Content;
