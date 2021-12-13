const SeasoningItem = ({ name, measure, onClick }) => {
  return (
    <div>
      <li className="my-2">
        <label className="flex justify-between" htmlFor="checkbox">
          <input type="checkbox" />
          <span>
            {name} {measure}g
          </span>
          <div>
            <button className="bg-green-300 px-4 mr-2" type="button" onClick={onClick}>
              変更
            </button>
            <button
              className="bg-red-300 px-4"
              onClick={() => {
                deleteSeasoning(seasoning.id);
              }}
            >
              削除
            </button>
          </div>
        </label>
      </li>
    </div>
  );
};

export default SeasoningItem;
