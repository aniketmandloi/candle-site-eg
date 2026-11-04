import { useEffect, useRef } from 'react';

export default function BagDialog({ open, items, onClose }) {
  const dialogRef = useRef(null);
  const total = items.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && !dialog.open) {
      dialog.showModal();
    }
    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog ref={dialogRef} className="bag" aria-labelledby="bag-title" onClose={onClose}>
      <h2 id="bag-title" className="bag-title">Your bag</h2>
      {items.length === 0 ? (
        <p className="bag-empty">Your bag is empty.</p>
      ) : (
        <ul className="bag-items">
          {items.map((item, index) => (
            <li key={`${item.id}-${index}`} className="bag-item">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </li>
          ))}
        </ul>
      )}
      <p className="bag-total">Total <span>${total}</span></p>
      <div className="bag-actions">
        <a className="button" href="#checkout">Checkout</a>
        <button className="text-button" type="button" onClick={() => dialogRef.current.close()}>Close</button>
      </div>
    </dialog>
  );
}
