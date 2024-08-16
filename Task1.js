import React from 'react';
import Button from 'react-bootstrap/Button';
export function Task1(){
    return(
        <>
        <center><h1>Notification</h1></center><br/><br/><br/>
        <center>
      <Button className='box' variant="info">Informaton Message</Button><br/><br/>
      <Button className='box' variant="success">Sucess Message</Button><br/><br/>
      <Button className='box' variant="warning">Warning Message</Button><br/><br/>
      <Button className='box' variant="danger">Error Message</Button><br/><br/>
      </center>
    </>
  );
}
