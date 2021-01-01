export default function Options({ name, isTrue }) {
  return (
    <div className="options">
      <input type="checkbox" name="checkbox" id="checkbox" checked={isTrue} />
      <label htmlFor="checkbox">{name}</label>
    </div>
  );
}
