import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/recipes/", {
        headers: {
          Authorization: "Token a0598f4af0f5c22fe1f2df2feed1441fa63aebfc",
        },
      })
      .then((res) => {
        setRecipes(res.data);
      });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>RecipeApp</title>
      </Head>
      <h1 className="font-bold text-2xl text-red-900">Hello Next!</h1>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
            <p>{recipe.memo}</p>
            {recipe.seasoning.map((item) => {
              return (
                <p key={item.id}>
                  {item.name} {item.measure}ml
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
