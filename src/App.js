import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  function handleSubmit(e) {
    e.preventDefault();
    if (!item) {
      // setAlert({
      //   show: true,
      //   msg: ' Please enter the value in field',
      //   type: 'danger',
      // });
      //  Optimized Alert Functionality with function
      showALert(true, 'danger', `Please enter the value in field`);
    } else if (item && isEditing) {
      setList(
        list.map((itemNew, index) => {
          if (index === editID) {
            return [item];
          }
          setIsEditing(false);
          return itemNew;
        })
      );
      setItem('');
    } else {
      //  for creating unique ID
      //const newItem = { id: new Date().getTime().toString(), title: item };
      setList([...list, item]);
      setItem('');
      console.log(list);
      // setAlert({
      //   show: true,
      //   msg: item + ' Added to the list',
      //   type: 'success',
      // });
      //  Optimized Alert Functionality with function
      showALert(true, 'success', `${item} added to the list`);
    }
  }
  function deleteItem(id, name) {
    let newList = list.filter((listItem, index) => index !== id);
    setList(newList);
    // setAlert({
    //   show: true,
    //   msg: name + ' has been deleted from the list',
    //   type: 'danger',
    // });
    //  Optimized Alert Functionality with function
    showALert(true, 'danger', `${name} deleted from list`);
  }
  //  Edit functionality

  function editItem(id) {
    const selectedItemID = list.find((item, index) => index === id);
    setIsEditing(true);
    setEditID(id);
    setItem(selectedItemID);
  }
  function clearAll() {
    // setAlert({
    //   show: true,
    //   msg: 'List Deleted',
    //   type: 'danger',
    // });
    //  Optimized Alert Functionality with function
    showALert(true, 'danger', `All items deleted from list`);
    setList([]);
  }
  //  Optimized Alert Functionality with function
  const showALert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  return (
    <>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show ? (
            <Alert {...alert} removeAlert={showALert} list={list} />
          ) : (
            ''
          )}

          <h3>grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g. eggs"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? 'Edit' : 'Submit'}
            </button>
          </div>
        </form>
        {list.length > 0 ? (
          <div className="grocery-container">
            <div className="grocery-list">
              {list.map((listItem, index) => {
                return (
                  <List
                    key={index}
                    name={listItem}
                    deleteItem={deleteItem}
                    editItem={editItem}
                    id={index}
                  />
                );
              })}
            </div>
            <button className="clear-btn" onClick={clearAll}>
              clear items
            </button>
          </div>
        ) : (
          ''
        )}
      </section>
    </>
  );
}

export default App;
