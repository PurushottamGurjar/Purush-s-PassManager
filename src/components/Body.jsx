import React, { useState, useEffect } from 'react';
import "./Body.css";

const Body = () => {
  const [passwordArray, setPasswordArray] = useState([]);
  const [passwordIndex, setPasswordIndex] = useState(1);
  const [form, setForm] = useState({ index: 1, site: "", username: "", password: "" });

  useEffect(() => {
    const passwords = localStorage.getItem("passwords");

    if (passwords) {
      try {
        const parsed = JSON.parse(passwords);
        setPasswordArray(parsed);

        if (parsed.length > 0) {
          const lastIndex = parsed[parsed.length - 1].index + 1;
          setPasswordIndex(lastIndex);
          setForm({ site: "", username: "", password: "", index: lastIndex });
        }
        console.log("The current length of the password array is", parsed.length);
      } catch (err) {
        console.error("Error parsing localStorage:", err);
        localStorage.setItem("passwords", JSON.stringify([]));
        setPasswordArray([]);
        setPasswordIndex(1);
        setForm({ site: "", username: "", password: "", index: 1 });
      }
    } else {
      setPasswordArray([]);
      setPasswordIndex(1);
      setForm({ site: "", username: "", password: "", index: 1 });
      localStorage.setItem("passwords", JSON.stringify([]));
    }
  }, []);

  const HandleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      ...form,
      index: passwordIndex,
    };

    const updatedArray = [...passwordArray, newEntry];
    setPasswordArray(updatedArray);
    localStorage.setItem("passwords", JSON.stringify(updatedArray));

    const nextIndex = passwordIndex + 1;
    setPasswordIndex(nextIndex);
    setForm({ site: "", username: "", password: "", index: nextIndex });
  };

  const HandleDelete = (toDeleteIndex) => {
    const updatedArray = passwordArray.filter(item => item.index !== toDeleteIndex);
    setPasswordArray(updatedArray);
    localStorage.setItem("passwords", JSON.stringify(updatedArray));
  };

  return (
    <div className='body'>
      <p className="pass-heading">Welcome to your Personal Password Manager</p>

      <form onSubmit={HandleSubmit}>
        <div className="input-containers">
          <input
            type="text"
            name="site"
            value={form.site}
            className="site-name"
            placeholder='Enter the Website... Example: https://www.purushottam.online'
            onChange={(e) => setForm({ ...form, site: e.target.value })}
            required
          />
          <div className="input-container-secondary">
            <input
              type="text"
              name="username"
              value={form.username}
              className="site-password"
              placeholder='Enter Your Username...'
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
            />
            <input
              type="text"
              name="password"
              value={form.password}
              className="site-password"
              placeholder='Enter the password...'
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>
          <button className="submit-button" type="submit">Add Your Password</button>
        </div>
      </form>

      <div className="password-displayer">
        <p>Welcome to Your Saved Passwords</p>
      </div>

      <div className="password-displayer-container">
        <div className="password-displayer-heading">
          <p className="password-displayer-heading-index">Index</p>
          <p className="password-displayer-heading-site">Website Name</p>
          <p className="password-displayer-heading-site">Your UserName</p>
          <p className="password-displayer-heading-site">Your Password</p>
        </div>

        <div className="password-displayer-content">
          {passwordArray.map((items) => (
            <div key={items.index} className="password-displayer-item">
              <div className="index-delete-container">
                <p className="password-displayer-index">{items.index}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => HandleDelete(items.index)}
                  style={{ alignSelf: 'center', cursor: 'pointer' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="24"
                  height="24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 7h12M9 7V4h6v3M10 11v6m4-6v6m5-10H5l1 14h12l1-14z"
                  />
                </svg>
              </div>
              <p className="password-displayer-site password-displayer-itemSite">{items.site}</p>
              <p className="password-displayer-site password-displayer-username">{items.username}</p>
              <p className="password-displayer-site password-displayer-username">{items.password}</p>
            </div>
          ))}
        </div>

        <div className="extra"></div>
      </div>
    </div>
  );
};

export default Body;
