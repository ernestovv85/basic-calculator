import "../styles/ClearButton.css";

export default function ClearButton(props) {
  return (
    <main className="clear-button" onClick={props.handleClear}>
      {props.children}
    </main>
  );
}
