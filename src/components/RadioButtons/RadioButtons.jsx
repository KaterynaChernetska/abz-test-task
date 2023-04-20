import { useEffect, useState } from 'react';
import { getPositions } from 'services/api';
import scss from './RadioButtons.module.scss';

const RadioButtons = ({ handleRadioChange, positionId }) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const getAllPositions = async () => {
      try {
        const { positions } = await getPositions();
        setPositions(positions);
        console.log(positions);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    getAllPositions();
  }, []);

  return (
    <div className={scss.radioContainer} >
      <p className={scss.radioTitle}> Select your position</p>
      <div className={scss.radioItemsContainer}>
        {positions?.map(({ id, name }) => (
          <label key={id}>
            <input
              type="radio"
              option={name}
              value={name}
              checked={positionId === id}
              onChange={() => handleRadioChange(id)}
            />
            {name}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButtons;
