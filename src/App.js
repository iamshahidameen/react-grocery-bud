import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [form, setForm] = useState('');
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (item) {
      setList([...list, item]);
      setItem('');
      console.log(list);
      setAlert(true);
    }
  }
  function deleteItem(name) {
    let newList = list.filter((listItem) => listItem !== name);
    console.log(newList);
    setList(newList);
  }
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 5000);
    return () => clearTimeout(timeOut);
  }, [alert]);
  console.log(item, 'newwww');
  return (
    <>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert ? <Alert itemName={item} /> : ''}

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
              submit
            </button>
          </div>
        </form>
        <div className="grocery-container">
          <div className="grocery-list">
            {list.map((listItem, index) => {
              return (
                <List key={index} name={listItem} deleteItem={deleteItem} />
              );
            })}
          </div>
          <button className="clear-btn">clear items</button>
        </div>
      </section>
    </>
  );
}

export default App;
