export default function Checkbox(props) {
    return (
        <label className="mycheckbox">{props.str}
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
    );
}
