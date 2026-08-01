"use client"

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile'

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      setError("Please complete the security check.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formState,
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to send message. Please try again.');
      }

      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTurnstileToken(null);
      turnstileRef.current?.reset();
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-[5rem] h-[auto] w-full max-w-[360px] md:max-w-[720px] flex flex-col px-3 md:px-0" id="contact">
      <div 
        className="stroke-yellow-300 text-[2.2rem] xs:text-[2.8rem] sm:text-[4rem] md:text-[6rem] font-extrabold z-0 opacity-80 text-transparent select-none leading-none mb-6 whitespace-nowrap" 
        style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", WebkitTextStrokeColor: "yellow" }}
      >
        {"<"}Contact me {"/>"}
      </div>

      <div className="w-full bg-slate-900/20 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col md:flex-row gap-8">
        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-400/5 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/5 rounded-full blur-[60px] pointer-events-none" />

        {/* Left Side: Form and Details */}
        <div className="w-full md:w-[55%] flex flex-col justify-between z-10">
          <div>
            <h3 className="text-lg font-bold text-slate-100 mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-yellow-400" />
              <span>Get in Touch</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Have a project in mind, want to collaborate, or just want to say hi? Drop a message below and I'll get back to you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 focus:border-yellow-400 rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 outline-none transition-all duration-200"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 focus:border-yellow-400 rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 outline-none transition-all duration-200"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 focus:border-yellow-400 rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 outline-none transition-all duration-200 resize-none"
                />
              </div>

              {/* Cloudflare Turnstile */}
              <div className="flex justify-center w-full">
                <Turnstile
                  ref={turnstileRef}
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
                  onSuccess={(token) => {
                    setTurnstileToken(token);
                    setError(null);
                  }}
                  onError={() => {
                    setError("Security verification failed to load. Please refresh the page.");
                  }}
                  onExpire={() => {
                    setTurnstileToken(null);
                    setError("Security check expired. Please verify again.");
                  }}
                  options={{
                    theme: 'dark',
                  }}
                />
              </div>

              {error && (
                <div className="text-red-400 text-xs text-center font-medium mt-1">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-2.5 px-4 bg-yellow-400 hover:bg-yellow-350 disabled:bg-slate-800 disabled:text-slate-500 text-black font-extrabold rounded-xl transition-all duration-200 text-xs shadow-lg shadow-yellow-400/5 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : submitted ? (
                  <span>Message Sent Successfully!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Quick info icons */}
          <div className="mt-8 pt-6 border-t border-slate-800/50 flex flex-wrap gap-4 text-slate-300">
            <a href="mailto:nikhildasar20@gmail.com" className="flex items-center gap-2 hover:text-yellow-400 text-[11px] font-semibold transition-colors duration-200">
              <Mail className="w-4 h-4 text-yellow-400/85" />
              <span>nkdasar@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 text-[11px] font-semibold">
              <MapPin className="w-4 h-4 text-yellow-400/85" />
              <span>Bengaluru, India</span>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Dark Styled Map */}
        <div className="w-full md:w-[45%] min-h-[280px] md:min-h-[380px] rounded-2xl overflow-hidden relative border border-slate-800/50 z-10 select-none shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4884218671603!2d78.38144677519183!3d17.43632318346149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c555555%3A0x633e8b0b5c1a01b0!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            className="absolute inset-0 w-full h-full border-0 grayscale invert contrast-[1.25] opacity-75 hover:opacity-90 transition-opacity duration-300"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
