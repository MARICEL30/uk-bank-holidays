import React from 'react';

type Props = {

    width: string,
    height: string
}


export const SegmentedControls = ({width, height}: Props) => {

  return (
 <div>
   <ul>
     <li>England & Wales</li>
     <li> Scotland</li>
     <li> Northern Ireland</li>
   </ul>
 </div>


  )

}
