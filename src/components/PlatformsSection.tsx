import React from 'react';
import { platformsData } from '@/content/platforms';
import { ScrollReveal } from './ScrollReveal';

export function PlatformsSection() {
  return (
    <section id="our-approach" className="py-20 sm:py-24 md:py-28 border-b border-border bg-bg">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-eyebrow text-muted mb-4">
              {platformsData.eyebrow}
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tighter leading-tight mb-4">
              {platformsData.headline}
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {platformsData.leadText}
            </p>
          </div>
        </ScrollReveal>

        {/* 1.5px Stroke Line-Art SVG Wireframes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16 sm:mb-20">
          {/* Wireframe 1: Facebook / Instagram Feed (4:5 Post in Feed) */}
          <ScrollReveal delayMs={40}>
            <div className="border border-border bg-white p-6 sm:p-8 flex flex-col h-full rounded-none">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">
                  4:5 Feed Post
                </span>
                <span className="text-[11px] font-mono text-muted uppercase">
                  Feed Environment
                </span>
              </div>

              {/* SVG Wireframe */}
              <div className="py-2 flex justify-center items-center flex-grow">
                <svg
                  viewBox="0 0 240 330"
                  className="w-full max-w-[240px] h-auto text-ink"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer Feed Card */}
                  <rect
                    x="5"
                    y="5"
                    width="230"
                    height="320"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    fill="#FFFFFF"
                  />

                  {/* Header: Avatar + Handle + Sponsored */}
                  <circle
                    cx="26"
                    cy="26"
                    r="10"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    fill="#F8F9FC"
                  />
                  <line
                    x1="44"
                    y1="22"
                    x2="110"
                    y2="22"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="44"
                    y1="30"
                    x2="85"
                    y2="30"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                  />
                  {/* Three dots menu */}
                  <circle cx="212" cy="26" r="1.5" fill="#101A35" />
                  <circle cx="218" cy="26" r="1.5" fill="#101A35" />
                  <circle cx="224" cy="26" r="1.5" fill="#101A35" />

                  {/* 4:5 Media Container (width 200, height 170) */}
                  <rect
                    x="20"
                    y="46"
                    width="200"
                    height="165"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    fill="#F8F9FC"
                  />
                  {/* Architectural diagonal line accent */}
                  <line
                    x1="20"
                    y1="46"
                    x2="220"
                    y2="211"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    strokeOpacity="0.15"
                  />
                  {/* Aspect Ratio Badge */}
                  <rect
                    x="75"
                    y="118"
                    width="90"
                    height="22"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    fill="#FFFFFF"
                  />
                  <text
                    x="120"
                    y="133"
                    fill="#101A35"
                    fontSize="10"
                    fontFamily="monospace"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    4:5 RATIO
                  </text>

                  {/* Interaction Bar: Heart, Comment, Share, Save */}
                  <path
                    d="M 23 227 C 20 223 25 220 29 224 L 30 225 L 31 224 C 35 220 40 223 37 227 L 30 234 Z"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="48"
                    y="222"
                    width="14"
                    height="10"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 72 222 L 84 227 L 72 232 L 75 227 Z"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 210 222 L 222 222 L 222 234 L 216 230 L 210 234 Z"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />

                  {/* CTA Bar */}
                  <rect
                    x="20"
                    y="244"
                    width="200"
                    height="24"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    fill="#EBF1FF"
                  />
                  <text
                    x="120"
                    y="260"
                    fill="#285BFF"
                    fontSize="9"
                    fontFamily="monospace"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    SEND WHATSAPP MESSAGE
                  </text>

                  {/* Caption Text Lines */}
                  <line
                    x1="20"
                    y1="284"
                    x2="160"
                    y2="284"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="20"
                    y1="295"
                    x2="210"
                    y2="295"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="20"
                    y1="306"
                    x2="120"
                    y2="306"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                  />
                </svg>
              </div>

              {/* Label & Description */}
              <div className="mt-4 pt-4 border-t border-border">
                <h3 className="font-heading font-bold text-ink text-base mb-1">
                  Facebook & Instagram Feed
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  In-feed sponsored post configured for high readability, native browsing habit, and prominent headline messaging.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Wireframe 2: Stories (9:16 Full Screen) */}
          <ScrollReveal delayMs={80}>
            <div className="border border-border bg-white p-6 sm:p-8 flex flex-col h-full rounded-none">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">
                  9:16 Stories
                </span>
                <span className="text-[11px] font-mono text-muted uppercase">
                  Immersive Vertical
                </span>
              </div>

              {/* SVG Wireframe */}
              <div className="py-2 flex justify-center items-center flex-grow">
                <svg
                  viewBox="0 0 240 330"
                  className="w-full max-w-[240px] h-auto text-ink"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer 9:16 Device Container */}
                  <rect
                    x="25"
                    y="5"
                    width="190"
                    height="320"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    fill="#F8F9FC"
                  />

                  {/* Top Progress Segment Bars */}
                  <line
                    x1="35"
                    y1="16"
                    x2="85"
                    y2="16"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="92"
                    y1="16"
                    x2="142"
                    y2="16"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    strokeOpacity="0.25"
                  />
                  <line
                    x1="149"
                    y1="16"
                    x2="205"
                    y2="16"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    strokeOpacity="0.25"
                  />

                  {/* Header: Avatar, Brand Handle, Close Button */}
                  <circle
                    cx="47"
                    cy="32"
                    r="8"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    fill="#FFFFFF"
                  />
                  <line
                    x1="62"
                    y1="30"
                    x2="115"
                    y2="30"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="62"
                    y1="36"
                    x2="95"
                    y2="36"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                  />
                  {/* Close 'X' */}
                  <line
                    x1="195"
                    y1="28"
                    x2="203"
                    y2="36"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="203"
                    y1="28"
                    x2="195"
                    y2="36"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />

                  {/* Story Central Content Frame */}
                  <rect
                    x="45"
                    y="80"
                    width="150"
                    height="140"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    fill="#FFFFFF"
                  />
                  {/* Headline Lines */}
                  <line
                    x1="60"
                    y1="105"
                    x2="175"
                    y2="105"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="60"
                    y1="117"
                    x2="160"
                    y2="117"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />
                  {/* 9:16 Aspect Badge */}
                  <rect
                    x="75"
                    y="145"
                    width="90"
                    height="22"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    fill="#EBF1FF"
                  />
                  <text
                    x="120"
                    y="160"
                    fill="#285BFF"
                    fontSize="10"
                    fontFamily="monospace"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    9:16 STORIES
                  </text>

                  {/* Swipe Up Indicator */}
                  <path
                    d="M 115 258 L 120 252 L 125 258"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  {/* Bottom Story Message Bar */}
                  <rect
                    x="37"
                    y="278"
                    width="135"
                    height="28"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    fill="#FFFFFF"
                  />
                  <text
                    x="47"
                    y="295"
                    fill="#101A35"
                    fontSize="9"
                    fontFamily="monospace"
                    opacity="0.6"
                  >
                    Send message...
                  </text>
                  {/* Paper Plane Share Icon */}
                  <path
                    d="M 188 284 L 202 291 L 188 298 L 192 291 Z"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Label & Description */}
              <div className="mt-4 pt-4 border-t border-border">
                <h3 className="font-heading font-bold text-ink text-base mb-1">
                  Instagram & Facebook Stories
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  Full-screen vertical story with sequential progress bars, strong visual impact, and instant interactive response options.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Wireframe 3: Reels (9:16 with Side Action Column) */}
          <ScrollReveal delayMs={120}>
            <div className="border border-border bg-white p-6 sm:p-8 flex flex-col h-full rounded-none">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">
                  9:16 Reels
                </span>
                <span className="text-[11px] font-mono text-muted uppercase">
                  Action Column
                </span>
              </div>

              {/* SVG Wireframe */}
              <div className="py-2 flex justify-center items-center flex-grow">
                <svg
                  viewBox="0 0 240 330"
                  className="w-full max-w-[240px] h-auto text-ink"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer 9:16 Reel Container */}
                  <rect
                    x="25"
                    y="5"
                    width="190"
                    height="320"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    fill="#F8F9FC"
                  />

                  {/* Top Reel Label */}
                  <text
                    x="42"
                    y="28"
                    fill="#101A35"
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="700"
                  >
                    Reels
                  </text>
                  {/* Camera icon top right */}
                  <rect
                    x="184"
                    y="18"
                    width="14"
                    height="11"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />

                  {/* Center Media Presentation */}
                  <rect
                    x="40"
                    y="45"
                    width="125"
                    height="160"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    fill="#FFFFFF"
                  />
                  {/* Aspect Badge */}
                  <rect
                    x="55"
                    y="112"
                    width="95"
                    height="22"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    fill="#EBF1FF"
                  />
                  <text
                    x="102"
                    y="127"
                    fill="#285BFF"
                    fontSize="10"
                    fontFamily="monospace"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    9:16 VIDEO REEL
                  </text>

                  {/* Right-Side Action Column */}
                  {/* 1. Like / Heart */}
                  <path
                    d="M 183 115 C 180 110 186 107 190 112 L 191 113 L 192 112 C 196 107 202 110 199 115 L 191 123 Z"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="184"
                    y1="128"
                    x2="198"
                    y2="128"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />

                  {/* 2. Comment Bubble */}
                  <rect
                    x="183"
                    y="142"
                    width="16"
                    height="12"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="184"
                    y1="160"
                    x2="198"
                    y2="160"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />

                  {/* 3. Share Paper Plane */}
                  <path
                    d="M 184 174 L 199 181 L 184 188 L 188 181 Z"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <line
                    x1="184"
                    y1="194"
                    x2="198"
                    y2="194"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />

                  {/* 4. Three dots vertical */}
                  <circle cx="191" cy="210" r="1.5" fill="#101A35" />
                  <circle cx="191" cy="216" r="1.5" fill="#101A35" />
                  <circle cx="191" cy="222" r="1.5" fill="#101A35" />

                  {/* 5. Music Disc */}
                  <rect
                    x="184"
                    y="238"
                    width="14"
                    height="14"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    fill="#FFFFFF"
                  />

                  {/* Bottom Creator Meta & Audio Line */}
                  <circle
                    cx="48"
                    cy="225"
                    r="8"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    fill="#FFFFFF"
                  />
                  <line
                    x1="62"
                    y1="225"
                    x2="125"
                    y2="225"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />
                  {/* Caption lines */}
                  <line
                    x1="40"
                    y1="245"
                    x2="165"
                    y2="245"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="40"
                    y1="256"
                    x2="140"
                    y2="256"
                    stroke="#101A35"
                    strokeWidth="1.5"
                  />
                  {/* CTA button */}
                  <rect
                    x="40"
                    y="272"
                    width="125"
                    height="22"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    fill="#EBF1FF"
                  />
                  <text
                    x="102"
                    y="286"
                    fill="#285BFF"
                    fontSize="9"
                    fontFamily="monospace"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    SEND MESSAGE
                  </text>
                  {/* Audio line */}
                  <line
                    x1="40"
                    y1="305"
                    x2="130"
                    y2="305"
                    stroke="#101A35"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                  />
                </svg>
              </div>

              {/* Label & Description */}
              <div className="mt-4 pt-4 border-t border-border">
                <h3 className="font-heading font-bold text-ink text-base mb-1">
                  Instagram & Facebook Reels
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  Vertical short-form video featuring a dedicated right-side interaction column for engagement, sharing, and sound tracking.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Three-Step Flow Diagram: Platform vs. Destination */}
        <ScrollReveal delayMs={150}>
          <div className="border border-border bg-white p-6 sm:p-10 mb-8 rounded-none">
            <div className="mb-8">
              <span className="font-mono uppercase text-xs tracking-wider text-muted font-semibold block mb-2">
                Conversion Architecture
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
                How an Impression Becomes a Conversation
              </h3>
              <p className="text-sm text-muted mt-2 max-w-2xl">
                The advertising platform and the contact destination are distinct stages. Meta delivers visibility; WhatsApp enables personal closing.
              </p>
            </div>

            {/* Three Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
              {platformsData.flowSteps.map((step, idx) => (
                <div
                  key={step.step}
                  className="border border-border p-6 flex flex-col justify-between bg-bg/50 rounded-none relative"
                >
                  <div>
                    {/* Header: Step Number & Distinction Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-muted">
                        STEP {step.step}
                      </span>
                      {step.category === 'Platform' && (
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-tint text-[#153BB8] border border-accent/30">
                          {step.role}
                        </span>
                      )}
                      {step.category === 'Interaction' && (
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white text-ink border border-border">
                          {step.role}
                        </span>
                      )}
                      {step.category === 'Destination' && (
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-positive/10 text-[#0E5E34] border border-positive/30">
                          {step.role}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="font-heading font-bold text-ink text-lg sm:text-xl tracking-tight mb-3">
                      {step.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Distinction Clarification */}
                  <div className="mt-6 pt-4 border-t border-border/80 text-[11px] font-mono text-muted">
                    {step.category === 'Platform' && (
                      <span>Environment: Paid Meta Placement</span>
                    )}
                    {step.category === 'Interaction' && (
                      <span>Action: Verified User Intent</span>
                    )}
                    {step.category === 'Destination' && (
                      <span>Environment: Private 1-on-1 Chat</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Placement Qualification Note from the Brief */}
        <ScrollReveal delayMs={180}>
          <div className="border border-border p-5 sm:p-6 bg-white rounded-none flex items-start gap-4">
            <span className="w-1.5 h-1.5 bg-accent inline-block mt-2 flex-shrink-0" />
            <div className="space-y-1 text-xs sm:text-sm text-ink/85 leading-relaxed">
              <p className="font-medium text-ink">
                {platformsData.placementNote}
              </p>
              <p className="text-muted text-xs">
                {platformsData.distinctionNote}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
