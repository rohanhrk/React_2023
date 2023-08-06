import { useEffect, useState } from "react";

const Profile = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleTimer = () => {
        console.log("React OP");
    }
    const timer = setInterval(handleTimer, 1000);

    console.log("count change");

    return (()=> {
        clearInterval(timer);
        console.log("unmound");
    })
  }, [count]);

  console.log("render");
  return (
    <div>
      <h1> Profile Function Component </h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        setCount
      </button>
    </div>
  );
}

export default Profile;
