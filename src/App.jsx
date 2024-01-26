import "./App.css";
import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import { Route, Routes } from "react-router";
import List from "./components/List";
import MeatEater from "./components/MeatEater.jsx";
import Vegan from "./components/Vegan";
import { api } from "./api/apiResource";
import Vrecipe from './components/Vrecipe';
import MeatP from "./components/MeatP.jsx";
import app from './config/firebase.js';

const App = () => {
  const [recipes, setPecipes] = useState([]);
  const [type, setType] = useState([]);
  const Recipes = async () => {
    const res = await api.get("/burmeseRecipes");
    console.log(res.data);
    setPecipes(res.data);
  };

  useEffect(() => {
    Recipes();
  }, []);

  const userType = async ()=>{
    const res = await api.get('/userType');
    setType(res.data);
    console.log(res.data);
  }

  useEffect(()=>{
    userType();
  },[])

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Main text="မြန်မာ့ဟင်းလျာများ" delay={200} />}
        />
        <Route path="/list" element={<List />} />
        <Route path="/list/meateater" element={<MeatEater recipes={recipes} type={type}/>} />
        <Route path="/list/meateater/:id/:index" element={<MeatP recipes={recipes} type={type}/>} />
        <Route path="/list/vegan" element={<Vegan recipes={recipes} type={type}/>} />
        <Route path="/list/vegan/:id/:index" element={<Vrecipe recipes={recipes} type={type}/>} />
      </Routes>
    </div>
  );
};

export default App;
