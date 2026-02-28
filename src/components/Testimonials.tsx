import './Testimonials.css';

const testimonials = [
  {
    quote:
      'Finally, something that isn\'t about likes or followers. Just me and the people who actually know me.',
    name: 'Sarah M.',
    role: 'Waitlist member',
  },
  {
    quote:
      'Seeing what my friends pin to my wall feels more like who I really am than anything I\'ve ever posted.',
    name: 'Marcus T.',
    role: 'Friend group of 6',
  },
  {
    quote:
      'It\'s like the old days—when social meant actual friends, not an audience.',
    name: 'Alex R.',
    role: 'College friend group',
  },
];

export function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-content">
        <span className="testimonials-eyebrow">Built with early users (friend groups + families)</span>
        <h2 className="testimonials-title">What early users are saying</h2>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="testimonial-card">
              <p className="testimonial-quote">"{t.quote}"</p>
              <footer className="testimonial-footer">
                <div className="testimonial-avatar" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <cite className="testimonial-name">{t.name}</cite>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
