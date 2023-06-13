import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  // const [src, setSrc] = useState('');

  // (i)  --->>> how to create multiple contexts and pass the values -->> ???
  // (ii) --->>> also try how to use routing as in my laptop it was working only if I am using the link
  //             and only then it was routing ---?????? The doubt is it should work without <Link> as well

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  console.log(useContext(Crypto))
  return useContext(Crypto);
};