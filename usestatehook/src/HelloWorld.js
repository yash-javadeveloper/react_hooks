import { useState } from 'react';
export default function HelloWorld() {
 const [name, setName] = useState("")
 return (
 <div style={{ textAlign: "center", padding: "5px" }}>
 <input id="name" name="name"
 value={name}
 onChange={(e) => setName(e.target.value)} />
 <div>Hi {name}</div>
</div>
 )
}
