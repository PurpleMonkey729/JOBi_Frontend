export default function Checkbox(props) {
    return (
        <label className="mycheckbox">{props.str}
          <input type="checkbox" disabled={props.disabled} />
          <span className="checkmark"></span>
        </label>
    );
}
