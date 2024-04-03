import React, { useEffect, useState } from 'react';

const Post = () => {
    const [user ,setUser ] = useState(null);
    const [count ,  setCount] = useState(0);

    const handleSubmit = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        console.log('user name :' ,name);
        setUser(name);
        
        localStorage.setItem(`nameSad${count}`, `${user}`)
        const update = count+1;
        setCount(update);
    }

    
    return (
        <div>
            More post are created here :
            <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='your name' />
            <button className='btn ' >Submit</button>
            </form>
            <div>
                <h1>All posts :</h1>
                <ul>
                    <li>
                    {
                        localStorage.getItem(`nameSad${count}`)
                    }
                    </li>
                </ul>
            </div>
            {
                
            }
        </div>
    );
};

export default Post;