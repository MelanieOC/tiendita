import React, { Component } from 'react';
import './App.css';
import products from './data';
import { Panel, Image, ListGroup, ListGroupItem } from 'react-bootstrap';
class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          products.map(item => {
            return (
              <Panel header={item.dish} footer={item.price}>
                <ListGroup fill>
                  <ListGroupItem>
                    <Image src={item.image} responsive />
                  </ListGroupItem>
                  <ListGroupItem>
                    <ul>
                      {
                        Object.keys(item.nutricionalInform).map(a => {
                          const value = item.nutricionalInform[a];
                          const nutri = a.split('_');
                          if(nutri.length>1){
                            return <li>{nutri[0].charAt(0).toUpperCase()}{nutri[0].slice(1)} ({nutri[1]}):{value}</li>
                          }else{
                            return <li>{a.charAt(0).toUpperCase()}{a.slice(1)}:{value}</li>
                          }
                          
                        })
                      }
                    </ul>
                  </ListGroupItem>
                </ListGroup>
              </Panel>
            );
          })
        }
      </div>
    );
  }
}

export default App;
