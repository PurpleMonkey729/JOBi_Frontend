export default function Checkbox(props) {
    return (
        <label className={"mycheckbox " + props.className}>{props.str}
          <input type="checkbox" disabled={props.disabled} />
          <span className="checkmark"></span>
        </label>
    );
}
