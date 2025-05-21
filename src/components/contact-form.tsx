'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          budget: '',
        });
      }, 3000);
    }, 1000);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>

      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-creme-green/20 flex items-center justify-center mx-auto mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#5cb762"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
          <p className="text-white/70">
            Thanks for reaching out. We'll get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Your name</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Smith"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 bg-white/5 border-white/10 placeholder:text-white/30"
            />
          </div>

          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 bg-white/5 border-white/10 placeholder:text-white/30"
            />
          </div>

          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              placeholder="Your company"
              value={formData.company}
              onChange={handleChange}
              className="mt-2 bg-white/5 border-white/10 placeholder:text-white/30"
            />
          </div>

          <div>
            <Label htmlFor="budget">Budget range</Label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full mt-2 px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-creme-pink"
            >
              <option value="" disabled>Select a budget range</option>
              <option value="Less than $10k">Less than $10k</option>
              <option value="$10k - $25k">$10k - $25k</option>
              <option value="$25k - $50k">$25k - $50k</option>
              <option value="$50k - $100k">$50k - $100k</option>
              <option value="$100k+">$100k+</option>
            </select>
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 min-h-[120px] bg-white/5 border-white/10 placeholder:text-white/30"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full creme-button-primary py-3 flex items-center justify-center"
          >
            {submitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}
