import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const GetDataContex = createContext();

const GetDataContextProvider = ({ children }) => {
  const [post, setPost] = useState([]);
  

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("http://localhost:7777/get_owner");
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const state = { post };
  return (
    <GetDataContex.Provider value={state}>{children}</GetDataContex.Provider>
  );
};

export default GetDataContextProvider;
