import "./index.scss";

const Input = (props) => {
  return (
    <div
      className="form-input"
      data-theme={`${props.hasError ? "error" : "no-error"}`}
    >
      <div className="field">
        <label htmlFor={props.name} className="label-name">
          <span className="content-name">{props.name}</span>
        </label>
        <input
          required={props?.required}
          placeholder={props?.placeholder}
          type={props?.type || "text"}
          autoComplete="new-password"
        />
      </div>
    </div>
  );
};

export default Input;
