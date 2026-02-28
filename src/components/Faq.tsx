import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Faq.css';

const faqs = [
  {
    question: 'Can I post on my own wall?',
    answer:
      'Nope — that\'s what makes CircleMade different. Your wall is built by the people who know you. You can pin to their walls, and they pin to yours.',
  },
  {
    question: 'Is this public?',
    answer:
      'No. CircleMade is private by default. Only you and your chosen circle can see your wall. Nothing is searchable or shared publicly.',
  },
  {
    question: 'What if someone posts something I don\'t want?',
    answer:
      'You have full control. Remove any pin instantly, or turn on review-first mode so nothing appears until you approve it.',
  },
  {
    question: 'When will it launch?',
    answer:
      'We\'re in early access right now. Request an invite and we\'ll get you in as soon as possible.',
  },
  {
    question: 'What if I don\'t have many friends?',
    answer:
      'CircleMade works best with small circles. Invite 3–5 people who actually know you (friends, siblings, cousins). We\'ll give them simple prompts so your Wall starts quickly.',
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="faq-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <motion.span
          className="faq-icon"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  return (
    <section className="faq">
      <div className="faq-content">
        <span className="faq-eyebrow">Got questions?</span>
        <h2 className="faq-title">Questions</h2>

        <div className="faq-list">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
