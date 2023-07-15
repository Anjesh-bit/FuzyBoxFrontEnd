import "./FuzyTextFields.css";

const FuzyTextFields = (props) => {
  const { type, name, value, placeholder, onChange, onClick, className } =
    props;

  return (
    <div className="fuzzy_textfields_wrapper">
      <input
        type={type}
        name={name}
        value={value}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        multiple
      />
    </div>
  );
};

export default FuzyTextFields;
