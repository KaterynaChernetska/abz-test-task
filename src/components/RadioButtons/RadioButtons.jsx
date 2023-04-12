import { useEffect, useState } from 'react';
import { getPositions } from 'services/api';
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";

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
    <div>
      <p>Select your position</p>
      <ul>
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
      </ul>
    </div>
  );
};

export default RadioButtons;
