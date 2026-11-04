import { scents } from '../data/scents.js';

export default function Scents({ onAdd }) {
  return (
    <section id="scents" className="scents" aria-labelledby="scents-title">
      <h2 id="scents-title" className="section-title">Six scents, each sold by its burn time</h2>
      <table className="scent-table">
        <thead>
          <tr>
            <th scope="col"><span className="visually-hidden">Ingredient</span></th>
            <th scope="col">Scent</th>
            <th scope="col">Notes</th>
            <th scope="col">Burns</th>
            <th scope="col" className="num">Price</th>
            <th scope="col"><span className="visually-hidden">Bag</span></th>
          </tr>
        </thead>
        <tbody>
          {scents.map((scent) => (
            <tr key={scent.id}>
              <td><img className="scent-thumb" src={scent.image} alt="" width="84" height="84" loading="lazy" /></td>
              <th scope="row">{scent.name}</th>
              <td>{scent.notes}</td>
              <td>{scent.hours} hours</td>
              <td className="num">${scent.price}</td>
              <td>
                <button className="add-button" type="button" onClick={() => onAdd(scent)}>Add to bag</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
