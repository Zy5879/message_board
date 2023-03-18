function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <input
          value={props.user}
          onChange={props.handleChange}
          name="user"
          type="text"
        />
      </div>
      <div className="form-group">
        <input
          value={props.text}
          onChange={props.handleChange}
          name="text"
          type="text"
        />
      </div>
      <div className="form-group">
        <button>Add Message</button>
      </div>
    </form>
  );
}

export default Form;
