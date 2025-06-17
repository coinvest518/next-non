'use client'

import React from "react";

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-fortis-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-fortis-brown mb-6">Stay Connected</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates on new programs, success stories, 
            and ways to get involved with Fortis Proles Inc.
          </p>
          <div className="flex justify-center">
            <iframe
              src="https://fortisproles.substack.com/embed"
              width="480"
              height="320"
              style={{ border: '1px solid #EEE', background: 'white' }}
              frameBorder={0}
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}