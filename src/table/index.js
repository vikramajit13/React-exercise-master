// Table Component goes here
import React, { Component }  from 'react';
import Row from './row';


class Table  extends Component {
    render(){ 
        /// FilteredDataState contains list ,filtered o state.

        let filteredDataState =this.props.list.filter((data)=>{
           return this.props.state=="All"?data:
           data.profile.address?data.profile.address.state?
           data.profile.address.state.indexOf(this.props.state)!==-1:
           data.profile.address.state!=undefined:data.profile.address!=undefined ;
        })

        ///filteredData this is the final filtered list based on name

        let filteredData =filteredDataState.filter((data)=>{
            return (data.firstName.toLowerCase().indexOf(this.props.name)!==-1 || data.lastName.toLowerCase().indexOf(this.props.name)!==-1);
        })

        return (
      <div className="Table Table-Bordered">
            <table >
                <thead>
                    <tr>
                        <th>Name</th>
                       <th>Email</th>
                        <th>Company</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>{
                filteredData.map((data)=>{
                    return  <Row item={data} key={data.id}/>
                })
            }
                </tbody>
            </table>
        </div>
    )
    }
}

export default Table;