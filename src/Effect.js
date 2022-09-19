import React, { useState, useEffect } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);

  // Similaire à componentDidMount et componentDidUpdate :
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    document.title = `Vous avez cliqué ${count} fois`;
  });
  const evolCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={evolCount}>Cliquez ici</button>
    </div>
  );
};

export default Effect;
