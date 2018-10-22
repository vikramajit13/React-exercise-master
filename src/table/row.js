// Row Component goes here
import React, { Component }  from 'react';

const Row =(props)=>{
    
    return (
        <tr>
          <td>
           <span> { props.item.firstName } </span><span className="margin-left-5">{ props.item.lastName }</span>
          </td>
          <td>
            { props.item.email }
          </td>
          <td>
            { props.item.profile.company }
          </td>
          <td>
            { props.item.profile.address?props.item.profile.address.state:"" }
          </td>
        </tr>
      );
}
export default Row;