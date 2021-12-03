import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [seasonings, setSeasonings] = useState([]);
  const [createSeasoning, setCreateSeasoning] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/seasonings/", {
        headers: {
          Authorization: "Token a0598f4af0f5c22fe1f2df2feed1441fa63aebfc",
        },
      })
      .then((res) => {
        setSeasonings(res.data);
      });
  }, []);

  const newSeasoning = (seasoning, count) => {
    const data = {
      name: seasoning,
      measure: count,
    };
    axios
      .post("http://127.0.0.1:8000/api/seasonings/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token a0598f4af0f5c22fe1f2df2feed1441fa63aebfc",
        },
      })
      .then((res) => {
        setSeasonings([...seasonings, res.data]);
        setCount(0);
        setCreateSeasoning("");
      });
  };

  const deleteSeasoning = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/seasonings/${id}/`, {
        headers: {
          Authorization: "Token a0598f4af0f5c22fe1f2df2feed1441fa63aebfc",
        },
      })
      .then((res) => {
        setSeasonings(seasonings.filter((seasoning) => seasoning.id !== id));
      });
  };

  const handleInputChange = (e) => {
    setCreateSeasoning(e.target.value);
  };

  const handleMeasureCountUp = () => {
    setCount((prev) => prev + 5);
  };

  const handleMeasureCountDown = () => {
    setCount((prev) => prev - 5);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>RecipeApp</title>
      </Head>
      <h1 className="mb-2 font-bold text-2xl text-red-900">Hello Next!</h1>
      <div className="flex space-x-2">
        <input
          type="text"
          name="name"
          value={createSeasoning}
          placeholder="新しい調味料を追加する"
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
        />

        <button onClick={() => handleMeasureCountDown()}>-</button>
        <p>{count}</p>
        <button onClick={() => handleMeasureCountUp()}>+</button>

        <button
          className="bg-blue-300 px-4"
          onClick={() => newSeasoning(createSeasoning, count)}
        >
          追加
        </button>
      </div>
      <ul>
        {seasonings.map((seasoning) => {
          return (
            <li key={seasoning.id}>
              <p>
                {seasoning.name} {seasoning.measure}g{" "}
                <button
                  onClick={() => {
                    deleteSeasoning(seasoning.id);
                  }}
                >
                  削除
                </button>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
