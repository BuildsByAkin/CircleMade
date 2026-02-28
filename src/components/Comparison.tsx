import './Comparison.css';

const traditionalItems = [
  'Built for strangers',
  'Post to everyone',
  'Perform for metrics',
  'Chase likes & followers',
  'Algorithm decides what matters',
  'Moments disappear in a feed',
];

const pinwallItems = [
  'Built for real relationships',
  'Your circle pins to you',
  'No metrics. No performance',
  'Private by default',
  'You control who can pin',
  'Moments stay. Identity grows',
];

export function Comparison() {
  return (
    <section className="comparison">
      <div className="comparison-content">
        <h2 className="comparison-title">
          Social, without the&nbsp;performance.
        </h2>

        <div className="comparison-cards">
          <div className="comparison-card comparison-card--traditional">
            <h3 className="comparison-card-heading">Traditional social</h3>
            <ul className="comparison-list">
              {traditionalItems.map((item) => (
                <li key={item} className="comparison-item comparison-item--negative">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="comparison-card comparison-card--pinwall">
            <h3 className="comparison-card-heading">CircleMade</h3>
            <ul className="comparison-list">
              {pinwallItems.map((item) => (
                <li key={item} className="comparison-item comparison-item--positive">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
