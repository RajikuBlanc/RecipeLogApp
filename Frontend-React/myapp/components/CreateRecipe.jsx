import { useState } from 'react';
import CreateSeasoning from './CreateSeasoning';

const CreateRecipe = () => {
  const [title, setTitle] = useState('');
  const [textarea, setTextarea] = useState('');
  const [seasonings, setSeasonings] = useState([]);
  // const [image, setImage] = useState([]);

  // const handleChangeImage = e => {
  //   setImage([...image]);
  // };

  const newRecipe = (title, textarea, seasonings) => {
    const data = {
      title: title,
      memo: textarea,
      easoningName: seasonings
    };
    axios
      .post('http://127.0.0.1:8000/api/seasonings/', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token a0598f4af0f5c22fe1f2df2feed1441fa63aebfc'
        }
      })
      .then(res => {
        setTitle('');
        setTextarea('');
        setSeasonings([]);
      });
  };

  return (
    <div>
      <h2 className="font-bold text-xl text-blue-500">NewRecipe</h2>
      <form className="flex flex-col" action="POST">
        {/* タイトル CharField*/}
        <input
          className="my-2"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="タイトル"
        />
        {/* メモ TextArea */}
        <textarea
          value={textarea}
          onChange={e => setTextarea(e.target.value)}
          placeholder="メモを入力"
          className="my-2"
          cols="30"
          rows="5"
        ></textarea>
        {/* 調味料 CharField(name,measure) Objects*/}
        <CreateSeasoning />
        {/* 画像 ImageField */}
        {/* 保存 CreateRecipe*/}
        <button type="button" className="px-4 py-1 bg-blue-300 rounded-md text-white font-bold">
          保存
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
