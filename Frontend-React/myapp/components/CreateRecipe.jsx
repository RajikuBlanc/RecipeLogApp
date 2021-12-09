import { useState } from 'react';
import CreateSeasoning from './CreateSeasoning';

const CreateRecipe = () => {
  const [title, setTitle] = useState('');
  const [textarea, setTextarea] = useState('');
  const [image, setImage] = useState([]);

  const handleChangeImage = e => {
    setImage([...image]);
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
        <input type="file" />
        {/* 保存 CreateRecipe*/}
      </form>
    </div>
  );
};

export default CreateRecipe;
