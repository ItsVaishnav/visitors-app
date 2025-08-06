import React, { useEffect } from "react";

function New() {
  let data = "Dekha Lo";
  console.log(data);

  useEffect(() => {
    data = "Kolambi";
    setTimeout(() => {
      console.log("SetTimot Completeed");
      data = "Ravas";
      console.log(data);
    }, 5000);
  });

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}

export default New;
