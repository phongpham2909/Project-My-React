import React, { Component } from 'react';

const AccountList = [
    {
        email:"phongpham2140051@gmail.com",
        firstnam:"Phong",
        lastname:"Phạm",
        password:"29091996",
        
    },
    {
        email:"phongpham2140051@gmail.com",
        firstnam:"Phong 2",
        lastname:"Phạm",
        password:"123456",
      
    },
    {
        email:"phongpham2140051@gmail.com",
        firstnam:"Phong 3",
        lastname:"Phạm",
        password:"123456789",
    
    }
];

buildAccountList()
{
    let _accountlist = [];
     
    for(let i in AccountList)
    {
        _accountlist.push(
            <tr key={i}>
                <td>{i + 1}</td>
                <td>{AccountList[i].firstnam}</td>
                <td>{AccountList[i].lastname}</td>
                <td>{AccountList[i].email}
                </td> 
            </tr>
        )
    }
    return _accountlist;
}

class AccountForm extends Component {
    constructor(props)
    {
        super(props);

    }
  render() {
      let _accountlist = this.buildAccountList();
    return (
      <div>
     <Table striped bordered condersed hover>
     <thead>
         <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
         </tr>
     </thead>
     <tbody>
         {_accountlist}
     </tbody>
     </Table>
    </div>
    );
  }
}

export default AccountForm;