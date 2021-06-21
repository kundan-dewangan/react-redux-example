import React, { useState } from "react";
import { connect } from "react-redux";
import logo from './logo.svg';
import './App.css';
import { increment, decrement, addItem, deleteItem } from './redux/actions';

function App({
  user,
  loading,
  error,
  itemList,
  incrementHandle,
  decrementHandle,
  addItemRecord,
  deleteItemRecord
}) {

  const [title, setTitle] = useState('')

  const inputHandlerChange = (e) => {
    setTitle(e.target.value)
  }
  
  const submitHandler = () => {
    addItemRecord(title);
    setTitle('')    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h4 className="display-4">React Redux Example</h4>
        <img src={logo} className="App-logo" alt="logo" />
       
        <h1 style={{ textAlign: 'center', marginTop:'0px' }}>{user}</h1>

        <div style={{ display: 'flex' }}>
          <button type="button" onClick={() => incrementHandle()} title="Increse the value">+</button>
          <button type="button" onClick={() => decrementHandle()} title="Decrese the value">-</button>
        </div>
        <hr  style={{ width: '40%' }}/>

        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <input type="input" placeholder="Enter the name" onChange={inputHandlerChange} value={title} />
          <button type="button" onClick={submitHandler} title="Add the value">Add</button>
        </div>

         <div  style={{ width: '60%' }}>
          {itemList && itemList.map((item, index)=>{
            return(
              <>
              <div style={{ display: 'flex', border: '1px solid #ffffff' }} key={index}>
                <div style={{ width: '85%' }}>{item.item}</div>
                <button type="button" style={{ width: '10%' }} onClick={()=>deleteItemRecord(item.id)}>X</button>
              </div>
              </>
            )
          })}
          </div>


      </header>
    </div>
  );
}

// export default App;

const mapStateToProps = ({ authUser }) => {
  const { user, loading, error, itemList } = authUser;
  return { user, loading, error, itemList };
};

const mapDispatchToProps = (dispatch) => ({
  incrementHandle: () => dispatch(increment()),
  decrementHandle: () => dispatch(decrement()),
  addItemRecord: (item) => dispatch(addItem(item)),
  deleteItemRecord: (id) => dispatch(deleteItem(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

