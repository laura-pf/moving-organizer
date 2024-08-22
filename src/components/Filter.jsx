function Filter() {
  return (
    <form className="filter">
      <label className="label">FIltrar por</label>
      <select className="input">
        <option className="input" value="">
          Cajas
        </option>
        <option className="input" value="">
          Muebles
        </option>
        <option className="input" value="">
          Habitación
        </option>
      </select>
      <input className="input" type="text" />
    </form>
  );
}

export default Filter;
