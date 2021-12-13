import { useEffect, useState } from 'react';
import axios from 'axios';
const CreateSeasoning = () => {
  const [seasonings, setSeasonings] = useState([]);
  const [editeField, setEditeField] = useState({ id: '', name: '', measure: 0 });
  const [seasoningLists, setSeasoningLists] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/seasonings/', {
        headers: {
          Authorization: 'Token a0598f4af0f5c22fe1f2df2feed1441fa63aebfc'
        }
      })
      .then(res => {
        setSeasonings(res.data);
      });
  }, []);

  const newSeasoning = (seasoning, count) => {
    const data = {
      name: seasoning,
      measure: count
    };
    axios
      .post('http://127.0.0.1:8000/api/seasonings/', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token a0598f4af0f5c22fe1f2df2feed1441fa63aebfc'
        }
      })
      .then(res => {
        setSeasonings([...seasonings, res.data]);
        setCount(0);
        setCreateSeasoning('');
      });
  };

  const deleteSeasoning = id => {
    axios
      .delete(`http://127.0.0.1:8000/api/seasonings/${id}/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token a0598f4af0f5c22fe1f2df2feed1441fa63aebfc'
        }
      })
      .then(res => {
        setSeasonings(seasonings.filter(seasoning => seasoning.id !== id));
      });
  };

  const editSeasoning = seasoning => {
    axios
      .put(`http://127.0.0.1:8000/api/seasonings/${seasoning.id}/`, seasoning, {
        header: {
          'Content-Type': 'application/json',
          Authorization: 'Token a0598f4af0f5c22fe1f2df2feed1441fa63aebfc'
        }
      })
      .then(res => {
        setSeasonings(seasonings.map(seasoning => (seasoning.id === editeField.id ? res.data : seasoning)));
        setEditeField({ id: '', name: '', measure: '' });
      });
  };

  const handleEditChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setEditeField({ ...editeField, [name]: value });
  };

  const handleCountUpMeasure = e => {
    const name = e.target.name;
    const value = Number(e.target.value) + 5;
    setEditeField({ ...editeField, [name]: value });
  };

  const handleCountDownMeasure = e => {
    const name = e.target.name;
    const value = Number(e.target.value) - 5;
    setEditeField({ ...editeField, [name]: value });
  };

  const handleCheck = e => {
    if (checked.includes(e.target.value)) {
      setSeasoningLists(seasoningLists.filter(item => e.target.value !== item.id));
      setChecked(checked.filter(item => item !== e.target.value));
    } else {
      setChecked([...checked, e.target.value]);
      setSeasoningLists([
        ...seasoningLists,
        {
          id: e.target.value
        }
      ]);
    }
  };
  console.log(seasoningLists, checked);
  return (
    <>
      <div className="flex space-x-2">
        <input
          type="text"
          name="name"
          value={editeField.name}
          placeholder="調味料名"
          onChange={e => {
            handleEditChange(e);
          }}
          required
        />

        <button name="measure" value={editeField.measure} onClick={e => handleCountDownMeasure(e)}>
          -
        </button>
        <p>{editeField.measure}g</p>
        <button name="measure" value={editeField.measure} onClick={e => handleCountUpMeasure(e)}>
          +
        </button>
        {editeField.id ? (
          <button className="bg-green-300 px-4" onClick={() => editSeasoning(editeField)}>
            変更
          </button>
        ) : (
          <button className="bg-blue-300 px-4" onClick={() => newSeasoning(editeField)}>
            追加
          </button>
        )}
      </div>
      <ul>
        {seasonings.map(seasoning => {
          return (
            <li className="my-2" key={seasoning.id}>
              <label className="flex justify-between" htmlFor="checkbox">
                <input
                  type="checkbox"
                  value={seasoning.id}
                  name={seasoning.name}
                  measure={seasoning.measure}
                  onChange={e => handleCheck(e)}
                />
                <span>
                  {seasoning.name} {seasoning.measure}g
                </span>
                <div>
                  <button className="bg-green-300 px-4 mr-2" type="button" onClick={() => setEditeField(seasoning)}>
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
          );
        })}
      </ul>
    </>
  );
};

export default CreateSeasoning;
