import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import { Dish } from './Dish';
import { Body } from './body.js';
import DishDescription from './dishDescription.js';

/*
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

*/

const App = ({ allDish }) => {
  const dishes = 
  (<ul id="main" className="k-widget k-listview" role="listbox">
    {allDish.map(item =>
      (<li><Dish image={item.image} name={item.dish} price={item.price} addToCart="" navDetails="#" /></li>))}
  </ul>);
  return (
    <div>
      <Body component={<DishDescription/>} />
    </div>
  );
}


const mapToProps = ({ allDish }) => ({ allDish });
export default connect(mapToProps)(App);
