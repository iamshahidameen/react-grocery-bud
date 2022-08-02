import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [form, setForm] = useState('');
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  function handleSubmit(e) {
    e.preventDefault();
    if (!item) {
      setAlert({
        show: true,
        msg: ' Please enter the value in field',
        type: 'danger',
      });
    } else if (item && isEditing) {
    } else {
      setList([...list, item]);
      setItem('');
      console.log(list);
      setAlert({
        show: true,
        msg: item + ' Added to the list',
        type: 'success',
      });
    }
  }
  function deleteItem(id, name) {
    let newList = list.filter((listItem, index) => index !== id);
    console.log(newList);
    setList(newList);
    setAlert({
      show: true,
      msg: name + ' has been deleted from the list',
      type: 'danger',
    });
  }
  function clearAll() {
    setAlert({
      show: true,
      msg: 'List Deleted',
      type: 'danger',
    });
    setList([]);
  }
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert({ show: false, msg: '', type: '' });
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [alert]);
  return (
    <>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show ? <Alert message={alert.msg} type={alert.type} /> : ''}

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
