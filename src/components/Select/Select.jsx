function Select({ tableNames, tableChange }) {
  function changeHandler({ target }) {
    tableChange(target.value);
  }

  return (
    <select name="tableSelect" onInput={changeHandler}>
      {tableNames.map((name, i) => (
        <option value={name} key={name + i}>
          {name}
        </option>
      ))}
    </select>
  );
}

export default Select;
