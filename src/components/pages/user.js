import React, { useState, useEffect} from 'react';

function UserData(){

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/users/all')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(er => console.error(er));
  }, []);

  console.log(data);

  return (
    <>
      <div className='app-about-content'>
        {data ? data.userList.map((item) => (
          <div key={item.id} >
            <p>{item.username}</p>
          </div>
        )) : 'null'}
      </div>
    </>
  )

}

export default UserData;