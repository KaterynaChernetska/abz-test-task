import scss from './TextInputs.module.scss';

const TextInputs = ({ handleInputChange, name, email, phone }) => {

    const handleFocus = (event) => {
        if (event.target.value === '') {
            event.target.value = '+380';
          }
    }
  return (
    <div className={scss.textInputContainer}>
   <label>
   <input className={scss.textInput}
        onChange={handleInputChange}
        type="text"
        name="name"
        value={name}
        required
        minLength={2}
        maxLength={60}
        placeholder={'Your name'}
      />
   </label>
  <label> 
  <input className={scss.textInput}
        onChange={handleInputChange}
        type="text"
        name="email"
        value={email}
        required
        minLength={2}
        maxLength={100}
        pattern="^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|&quot;(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*&quot;)@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
        placeholder={'Email'}
      />
  </label>
      <label>
      <input className={scss.textInput}
        onChange={handleInputChange}
        onFocus={handleFocus}
        type="tel"
        name="phone"
        value={phone}
        required
        pattern="^[\+]{0,1}380([0-9]{9})$"
        placeholder={'Phone'}
      />
      </label>
    </div>
  );
};

export default TextInputs;


