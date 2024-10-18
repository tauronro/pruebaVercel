import React, { useContext } from "react";
import { context } from "../context/contextProvider";

const Son = () => {
  const saludo = useContext(context);
  console.log(saludo);

  return (
    <div>
      <div>
        Este mensaje lo envia el abuelo: {saludo.saludo}
      </div>
      <button onClick={() => saludo.setSaludo('Quiero un helado abuelo')}>
        Cambiar mensaje
      </button>
    </div>
  );
};

export default Son;
