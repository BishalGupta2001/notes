// its for dp name 1st letter of word  
import React, { useEffect, useState } from "react";

const DpName = ({ fullName }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (fullName) {
      const words = fullName.split(" ");
      const firstInitial = words[0] ? words[0].charAt(0).toUpperCase() : "";
      const secondInitial =
        words.length > 1 ? words[1].charAt(0).toUpperCase() : "";
      const finalName = firstInitial + secondInitial;
      setName(finalName);
    }
  }, [fullName]);

  return <span>{name}</span>;
};

export default DpName;
