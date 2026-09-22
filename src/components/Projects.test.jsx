import { render, screen, fireEvent } from '@testing-library/react';
import Projects from './Projects';

// Grab the first project card (its accessible name starts with "Show details for").
const firstCard = () =>
  screen.getAllByRole('button', { name: /details for/i })[0];

const swipe = (el, fromX, toX, fromY = 100, toY = 100) => {
  fireEvent.touchStart(el, { touches: [{ clientX: fromX, clientY: fromY }] });
  fireEvent.touchEnd(el, { changedTouches: [{ clientX: toX, clientY: toY }] });
};

describe('Projects card flip interactions', () => {
  test('cards start on the front face (not flipped)', () => {
    render(<Projects />);
    expect(firstCard()).toHaveAttribute('aria-pressed', 'false');
  });

  test('swipe left reveals the details face', () => {
    render(<Projects />);
    const card = firstCard();
    swipe(card, 200, 110); // dx = -90 -> left
    expect(card).toHaveAttribute('aria-pressed', 'true');
    expect(card).toHaveAccessibleName(/hide details/i);
  });

  test('swipe right flips the details face back', () => {
    render(<Projects />);
    const card = firstCard();
    swipe(card, 200, 110); // left -> details
    expect(card).toHaveAttribute('aria-pressed', 'true');
    swipe(card, 110, 200); // right -> back
    expect(card).toHaveAttribute('aria-pressed', 'false');
  });

  test('a mostly-vertical drag does NOT flip (page scroll is preserved)', () => {
    render(<Projects />);
    const card = firstCard();
    swipe(card, 100, 88, 100, 320); // dx = -12, dy = 220 -> vertical
    expect(card).toHaveAttribute('aria-pressed', 'false');
  });

  test('a tap (tiny movement) still toggles via click', () => {
    render(<Projects />);
    const card = firstCard();
    // Simulate a tap: touchstart/end with negligible movement, then the click it emits.
    fireEvent.touchStart(card, { touches: [{ clientX: 100, clientY: 100 }] });
    fireEvent.touchEnd(card, { changedTouches: [{ clientX: 103, clientY: 101 }] });
    fireEvent.click(card);
    expect(card).toHaveAttribute('aria-pressed', 'true');
  });

  test('the click emitted right after a swipe is ignored (no double toggle)', () => {
    render(<Projects />);
    const card = firstCard();
    swipe(card, 200, 110); // left -> details (aria-pressed true)
    fireEvent.click(card); // the synthetic click a swipe also emits
    // Must stay flipped, not toggle back off.
    expect(card).toHaveAttribute('aria-pressed', 'true');
  });
});
