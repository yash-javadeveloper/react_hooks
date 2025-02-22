import { useState,useEffect } from 'react';
export default function HelloWorld() 
{
  const [count, setCount] = useState(0);

 useEffect(() => 
{
setTimeout(() =>
{
 
   setCount((count) => count + 1);
}, 1000);
},);

return <h1>Rendering this element is done {count} times!</h1>;
}