import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  { number: '1', title: 'Invite your people' },
  { number: '2', title: 'They pin photos, videos, quotes, memes — "this reminded me of you"' },
  { number: '3', title: 'Your Wall becomes a living memory board' },
];

function StepArrow() {
  return (
    <div className="step-arrow" aria-hidden="true">
      <motion.div
        className="step-arrow-icon"
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <MoveRight size={24} strokeWidth={2} />
      </motion.div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-it-works-content">
        <h2 className="how-it-works-title">How it works</h2>

        <div className="steps">
          {steps.map((step, i) => (
            <div key={step.number} className="step-group">
              <div className="step">
                <span className="step-number">{step.number}</span>
                <p className="step-text">{step.title}</p>
              </div>
              {i < steps.length - 1 && <StepArrow />}
            </div>
          ))}
        </div>

        <p className="how-it-works-reassurance">
          Start by inviting 3–5 people — we'll prompt them so your first pins
          land fast.
        </p>
      </div>
    </section>
  );
}
