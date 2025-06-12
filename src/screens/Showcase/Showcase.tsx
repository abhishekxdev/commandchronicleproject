import React from "react";
import { Avatar, AvatarImage } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Header } from "../../components/ui/header";
import { Terminal } from "lucide-react";

function AboutSection() {
  return (
    <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto text-left">
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 mb-8">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#232422] flex items-center justify-center flex-shrink-0">
          <Terminal className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
        </div>
        <div className="flex-1">
          <p className="text-xl sm:text-2xl font-semibold text-neutral-100 mb-3 sm:mb-4 leading-relaxed">
            CommandChronicles is a <span className="font-bold">secure, cross-device command line utility</span><br className="hidden sm:block" />
            built to help developers keep track of their terminal usage — with full context and privacy.
          </p>
          <p className="text-base sm:text-lg text-neutral-400 mb-3 sm:mb-4 leading-relaxed">
            Whether you're <span className="font-bold text-neutral-100">working solo</span> or <span className="font-bold text-neutral-100">across multiple machines</span>,<br className="hidden lg:block" />
            CommandChronicles gives you the tools to <span className="font-bold text-neutral-100">search smarter</span>,<br className="hidden lg:block" />
            track command behavior, and stay productive without compromising security.
          </p>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            <span className="font-bold text-neutral-100">Encrypted command sync</span>, <span className="font-bold text-neutral-100">context-rich search</span>, and<br className="hidden lg:block" />
            a seamless CLI experience — all designed to help you<br className="hidden lg:block" />
            work faster, safer, and with complete command over your history.
          </p>
        </div>
      </div>
      <button className="mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg font-semibold rounded-md transition-colors w-full sm:w-auto">
        Request Demo
      </button>
    </section>
  )
}

function TestimonialSection() {
  const testimonials = [
    {
      quote: "Easily monitor and manage the time spent on tasks and projects with NimbusFlow's intuitive time tracking. Gain insights",
      name: "Name",
      company: "Company",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      quote: "Easily monitor and manage the time spent on tasks and projects with NimbusFlow's intuitive time tracking. Gain insights",
      name: "Name", 
      company: "Company",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      quote: "Easily monitor and manage the time spent on tasks and projects with NimbusFlow's intuitive time tracking. Gain insights",
      name: "Name",
      company: "Company", 
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      quote: "Easily monitor and manage the time spent on tasks and projects with NimbusFlow's intuitive time tracking. Gain insights",
      name: "Name",
      company: "Company",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    }
  ]

  return (
    <section id="testimonials" className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 sm:mb-16 text-center">
        Don't simply take it from us...
      </h2>
      
      {/* Updated grid with wider cards for desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#1a1a1a] rounded-xl p-6 sm:p-8 border border-gray-800 flex flex-col min-h-[320px] w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] xl:max-w-[350px] mx-auto">
            <div className="flex items-start mb-6">
              <img 
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
            </div>
            
            <p className="text-gray-300 text-base leading-relaxed mb-6 flex-grow">
              "{testimonial.quote}"
            </p>
            
            <div className="mt-auto">
              <div className="font-semibold text-white text-base">{testimonial.name}</div>
              <div className="text-gray-400 text-sm">{testimonial.company}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function WhatMakesUsDifferentSection() {
  return (
    <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-neutral-100 mb-8 sm:mb-12">What makes us different</h2>
      <div className="flex flex-col xl:flex-row items-center gap-8 sm:gap-12">
        {/* Right: Mockup */}
        <div className="flex-1 w-full flex justify-center order-2 xl:order-2">
          <div className="rounded-2xl bg-orange-500 p-4 sm:p-6 lg:p-8 flex items-end min-h-[280px] sm:min-h-[340px] w-full max-w-[400px] sm:max-w-[480px]">
            <div className="bg-[#181818] rounded-xl w-full h-[220px] sm:h-[260px] p-4 sm:p-6 flex flex-col justify-between shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md bg-black flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500"><rect x="2" y="2" width="16" height="16" rx="4"/></svg>
                </div>
                <span className="text-base sm:text-lg font-bold text-white">Company</span>
              </div>
              <div className="flex-1 flex flex-col gap-2 text-gray-300 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">My Task</span>
                  <span className="ml-2 px-2 py-0.5 rounded bg-orange-500 text-xs text-white font-bold">Kanban</span>
                </div>
                <div className="mt-2">
                  <div className="font-semibold text-gray-200 mb-1 text-xs sm:text-sm">Backlog</div>
                  <div className="bg-gray-800 rounded p-2 mb-1">
                    <div className="text-xs text-gray-100">Interface Framework</div>
                    <div className="text-[10px] text-gray-400">Craft a striking interface that boosts user engagement.</div>
                  </div>
                  <div className="bg-gray-800 rounded p-2">
                    <div className="text-xs text-gray-100">Interface Blueprint</div>
                    <div className="text-[10px] text-gray-400">Design a UI layout that enhances navigation.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Left: Features */}
        <div className="flex-1 w-full space-y-4 sm:space-y-6 max-w-2xl xl:max-w-lg order-1 xl:order-1">
          <div className="bg-[#23241f] border border-gray-800 rounded-2xl p-6 flex flex-col gap-2 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white flex-shrink-0"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg>
              <span className="text-lg sm:text-xl font-bold text-white">Project Dashboards</span>
            </div>
            <p className="text-white text-sm sm:text-base leading-relaxed">
              Easily monitor the time spent on tasks with intuitive time tracking, and enhance productivity with real-time tracking and detailed reports.
            </p>
          </div>
          <div className="bg-[#23241f] border border-gray-800 rounded-2xl p-6 flex flex-col gap-3 shadow-lg">
            <div className="flex items-center gap-3">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white flex-shrink-0"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <span className="text-lg sm:text-xl font-bold text-white">Time management</span>
            </div>
            <p className="text-white text-sm sm:text-base leading-relaxed">
              Track command execution times, analyze productivity patterns, and optimize your workflow with detailed time insights and performance metrics.
            </p>
          </div>
          <div className="bg-[#23241f] border border-gray-800 rounded-2xl p-6 flex flex-col gap-3 shadow-lg">
            <div className="flex items-center gap-3">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white flex-shrink-0"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
              <span className="text-lg sm:text-xl font-bold text-white">Cross-functional collaboration</span>
            </div>
            <p className="text-white text-sm sm:text-base leading-relaxed">
              Share command knowledge across teams, enable seamless onboarding, and foster collaboration with shared command libraries and team insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TaskManagementSection() {
  return (
    <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto">
      {/* Task Management Interface Mockup */}
      <div className="flex justify-center">
        <div className="rounded-2xl bg-orange-500 p-4 sm:p-6 lg:p-8 flex items-end min-h-[400px] sm:min-h-[450px] w-full max-w-[600px] lg:max-w-[800px]">
          <div className="bg-[#2a2a2a] rounded-xl w-full h-[350px] sm:h-[400px] p-4 sm:p-6 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md bg-orange-500 flex items-center justify-center">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                    <path d="M3 12h6m0 0l-3-3m3 3l-3 3"/>
                  </svg>
                </div>
                <span className="text-lg sm:text-xl font-bold text-white">My Task</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-600"></div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-600"></div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-3 sm:gap-6 mb-4 sm:mb-6 overflow-x-auto">
              <button className="flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-white whitespace-nowrap">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m0 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
                <span className="text-xs sm:text-sm">List</span>
              </button>
              <button className="flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-white whitespace-nowrap">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18M9 21V9"/>
                </svg>
                <span className="text-xs sm:text-sm">Kanban</span>
              </button>
              <button className="flex items-center gap-1 sm:gap-2 bg-orange-500 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm whitespace-nowrap">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Timeline
              </button>
              <button className="flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-white whitespace-nowrap">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span className="text-xs sm:text-sm">Calendar</span>
              </button>
            </div>

            {/* Timeline Content */}
            <div className="space-y-3 sm:space-y-4">
              {/* Timeline months */}
              <div className="flex justify-between text-xs text-gray-400 mb-3 sm:mb-4">
                <span>Aug</span>
                <span>Sept</span>
                <span>Oct</span>
                <span>Nov</span>
              </div>

              {/* Timeline items - All contained within the box */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-white">IB</span>
                  </div>
                  <span className="text-white text-xs sm:text-sm">Interface Blueprint</span>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-white">DF</span>
                  </div>
                  <span className="text-white text-xs sm:text-sm">Design Framework</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-white">VS</span>
                  </div>
                  <span className="text-gray-400 text-xs sm:text-sm">Visual Structure</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-white">LT</span>
                  </div>
                  <span className="text-white text-xs sm:text-sm">Layout Template</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureSection() {
  const features = [
    {
      title: "Seamless Command Sync",
      description:
        "Keep your terminal history up-to-date and accessible, no matter where you work. CommandChronicles ensures your commands are always available, securely and privately.",
      command: "$ cc sync --all",
      subtext: "Your commands are now securely synced across all devices.",
    },
    {
      title: "Context-Aware Search",
      description:
        "Search your command history by project, path, or environment. Instantly locate the exact command you need, with all the details you care about.",
      command: '$ cc search "docker build"',
      subtext: "Find any command, with full context, in seconds.",
    },
    {
      title: "Privacy & Encryption",
      description:
        "Your command history is encrypted at rest and in transit. Only you have access—no compromises, ever.",
      command: "$ cc privacy --status",
      subtext: "All your commands are encrypted and private.",
    },
    {
      title: "Team Collaboration",
      description:
        "Invite teammates, share command history, and boost productivity together. CommandChronicles is built for both solo developers and teams.",
      command: "$ cc team --invite alice",
      subtext: "Collaborate and share command insights with your team.",
    },
  ];

  return (
    <section id="features" className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Experience our features</h2>
        <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          CommandChronicles streamlines terminal history management and collaboration, boosting developer productivity with intuitive dashboards, context-rich search, and secure cross-device sync.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-md text-base sm:text-lg transition-colors w-full sm:w-auto">
          Request Demo
        </button>
      </div>
      {/* Feature blocks - Alternating left/right */}
      <div className="flex flex-col gap-16 md:gap-20">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className={`flex flex-col lg:flex-row ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''} items-center gap-8`}
          >
            {/* Terminal card */}
            <div className="flex-1 flex justify-center lg:justify-end w-full">
              <div className="bg-[#23241f] rounded-lg shadow-lg p-6 w-full max-w-md">
                <div className="flex items-center mb-4">
                  <span className="w-3 h-3 rounded-full bg-orange-500 mr-2"></span>
                </div>
                <div className="bg-[#10141a] rounded p-4 text-left text-gray-200 text-sm">
                  <div className="mb-2 font-mono">{feature.command}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{feature.subtext}</div>
                </div>
              </div>
            </div>
            {/* Text */}
            <div className="flex-1 w-full text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Pricing</h2>
      </div>
      <div className="flex flex-col items-center mb-8 sm:mb-12">
        <span className="text-gray-300 mb-2">Billed</span>
        <div className="flex gap-2 bg-[#23231f] rounded-lg p-1">
          <button className="px-4 sm:px-6 py-2 rounded-md bg-black text-white font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base">
            Annual <span className="text-orange-500">(-10%)</span>
          </button>
          <button className="px-4 sm:px-6 py-2 rounded-md text-gray-300 font-semibold focus:outline-none text-sm sm:text-base">Monthly</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {/* Basic */}
        <div className="bg-black rounded-2xl p-6 sm:p-8 flex flex-col items-center shadow-lg">
          <div className="text-base sm:text-lg font-semibold text-white mb-2">Basic (Free)</div>
          <div className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">$0</div>
          <ul className="text-gray-300 text-left mb-6 sm:mb-8 space-y-2 w-full text-sm sm:text-base">
            <li>✓ Unlimited command history</li>
            <li>✓ Context-aware search</li>
            <li>✓ Up to 2 devices</li>
            <li>✓ Basic privacy & encryption</li>
            <li>✓ Community support</li>
          </ul>
          <button className="bg-[#23231f] text-white px-4 sm:px-6 py-3 rounded-md font-semibold w-full text-sm sm:text-base">Get started</button>
        </div>
        {/* Pro */}
        <div className="bg-[#23231f] rounded-2xl p-6 sm:p-8 flex flex-col items-center shadow-lg">
          <div className="text-base sm:text-lg font-semibold text-white mb-2">Pro</div>
          <div className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">$12</div>
          <ul className="text-gray-300 text-left mb-6 sm:mb-8 space-y-2 w-full text-sm sm:text-base">
            <li>✓ Unlimited command history</li>
            <li>✓ Context-aware search</li>
            <li>✓ Up to 10 devices</li>
            <li>✓ Advanced privacy & encryption</li>
            <li>✓ Team collaboration</li>
            <li>✓ Priority support</li>
          </ul>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-3 rounded-md font-semibold w-full text-sm sm:text-base">Get started</button>
        </div>
        {/* Enterprise */}
        <div className="bg-black rounded-2xl p-6 sm:p-8 flex flex-col items-center shadow-lg md:col-span-2 lg:col-span-1">
          <div className="text-base sm:text-lg font-semibold text-white mb-2">Enterprise</div>
          <div className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">$30</div>
          <ul className="text-gray-300 text-left mb-6 sm:mb-8 space-y-2 w-full text-sm sm:text-base">
            <li>✓ Unlimited command history</li>
            <li>✓ Context-aware search</li>
            <li>✓ Unlimited devices</li>
            <li>✓ Enterprise-grade security</li>
            <li>✓ Team collaboration</li>
            <li>✓ Dedicated support</li>
          </ul>
          <button className="bg-[#23231f] text-white px-4 sm:px-6 py-3 rounded-md font-semibold w-full text-sm sm:text-base">Get started</button>
        </div>
      </div>
      <div className="text-center text-white text-base sm:text-lg mt-6 sm:mt-8">
        Have any questions? see our <a href="#" className="text-orange-500 underline hover:text-orange-600">FAQ</a>
      </div>
    </section>
  )
}

function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 bg-[#23231f] text-[#ecebdc]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 items-start">
          {/* Tagline Column */}
          <div className="md:col-span-1 flex items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-left">
              Every command <br />
              <span className="italic font-normal text-gray-300">tells a story</span>
            </h2>
          </div>

          {/* Company Column */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6 text-left">Company</h3>
            <div className="space-y-4">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm text-left font-normal">
                Changelog
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm text-left font-normal">
                Resources
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm text-left font-normal">
                FAQ
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-1">
            <div className="space-y-4">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm font-normal">About</a>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block text-gray-400 hover:text-white transition-colors text-sm font-normal text-left"
              >
                Pricing
              </button>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm font-normal">Blog</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm font-normal">Contact us</a>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-md transition-colors">
                <span>🔥</span>
                We're hiring!
              </button>
            </div>
          </div>

          {/* Social Media Column */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4 text-left">Social media</h3>
            <div className="space-y-4">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm font-normal">Instagram</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm font-normal">Github</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm font-normal">Linkedin</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export const Showcase = (): JSX.Element => {
  const handleRequestDemo = () => {
    // In a real app, this would open a demo request form or modal
    alert("Demo request submitted! We'll contact you soon.");
  };

  const handleLearnMore = () => {
    // In a real app, this would navigate to a detailed features page
    window.open("https://example.com/features", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#272724]">
      {/* Full-width clean background */}
      <div className="w-full min-h-screen relative overflow-hidden">
        {/* Grid Background for Hero Section and Nav Bar - Optimized for laptop view */}
        <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 grid-rows-6 gap-0 pointer-events-none z-0">
          {Array.from({ length: 72 }).map((_, i) => (
            <div
              key={i}
              className="border border-[#4a4a45]/40 sm:border-[#4a4a45]/35 md:border-[#4a4a45]/30"
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#272724] to-transparent pointer-events-none z-10" />
        
        {/* Nav Bar and Hero Section */}
        <div className="relative isolate z-20">
          <Header />
          <section className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 z-20">
            <div className="relative min-h-[900px] pt-6 sm:pt-12">
              {/* Main content - Hero Section - Optimized for laptop 100% zoom */}
              <div className="relative z-10 text-center pt-4 sm:pt-8 pb-6">
                {/* Main heading - Optimized sizing for laptop */}
                <h1 className="font-desktop-h1 font-[number:var(--desktop-h1-font-weight)] text-[#e6e7d5] tracking-[var(--desktop-h1-letter-spacing)] leading-tight [font-style:var(--desktop-h1-font-style)] mb-4 sm:mb-6
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  {/* First line with cursor at the end */}
                  <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <span>Master Your Terminal History</span>
                    <div className="relative inline-flex items-center flex-shrink-0">
                      <div className="absolute w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px] xl:w-[32px] xl:h-[32px] bg-[#343431] rounded-full" />
                      <img
                        className="relative w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] md:w-[26px] md:h-[26px] lg:w-[30px] lg:h-[30px] xl:w-[34px] xl:h-[34px] z-10"
                        alt="Cursor"
                        src="/polygon-1.svg"
                      />
                    </div>
                  </div>
                  {/* Second line */}
                  <div className="block">
                    Securely, Seamlessly, Everywhere
                  </div>
                </h1>

                {/* Description text - Optimized for laptop view */}
                <p className="max-w-[700px] mx-auto px-4 font-desktop-p-large font-[number:var(--desktop-p-large-font-weight)] text-[#aeac93] text-center tracking-[var(--desktop-p-large-letter-spacing)] leading-relaxed [font-style:var(--desktop-p-large-font-style)] mb-6 sm:mb-8
                  text-sm sm:text-base md:text-lg lg:text-xl">
                  CommandChronicles is your encrypted, cross-device command log. Search, sync, and understand your CLI history like never before — with full context and total control.
                </p>

                {/* CTA Buttons - Optimized for laptop view */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                  <Button 
                    onClick={handleRequestDemo}
                    className="bg-[#ff5800] hover:bg-[#e64f00] transition-colors duration-200 px-6 py-3 sm:px-8 sm:py-4 rounded-lg h-auto w-full sm:w-auto"
                  >
                    <span className="font-desktop-h3 font-[number:var(--desktop-h3-font-weight)] text-[#e6e7d5] text-sm sm:text-base md:text-lg tracking-[var(--desktop-h3-letter-spacing)] leading-[var(--desktop-h3-line-height)] [font-style:var(--desktop-h3-font-style)]">
                      Request Demo
                    </span>
                  </Button>
                  <Button 
                    onClick={handleLearnMore}
                    className="bg-[#1e1e1c] hover:bg-[#2a2a27] transition-colors duration-200 px-6 py-3 sm:px-8 sm:py-4 rounded-lg h-auto w-full sm:w-auto"
                  >
                    <span className="font-desktop-h3 font-[number:var(--desktop-h3-font-weight)] text-[#e6e7d5] text-sm sm:text-base md:text-lg tracking-[var(--desktop-h3-letter-spacing)] leading-[var(--desktop-h3-line-height)] [font-style:var(--desktop-h3-font-style)]">
                      Learn more
                    </span>
                  </Button>
                </div>
              </div>

              {/* Mobile Cards - Show above terminal preview on mobile - Keep unchanged */}
              <div className="relative z-10 flex sm:hidden gap-4 px-4 mb-8 justify-center">
                {/* Comment card (Cassandra) - Left side on mobile */}
                <Card className="p-2 bg-[#1e1e1c] rounded overflow-hidden shadow-[0px_4px_20px_#3b3c411a] flex-1 max-w-[180px]">
                  <CardContent className="p-0">
                    <div className="flex-col gap-2 w-full flex">
                      <div className="flex w-full items-center justify-between">
                        <div className="inline-flex items-center gap-1">
                          <Avatar className="relative w-5 h-5">
                            <AvatarImage src="/ellipse-5.png" alt="Cassandra" />
                          </Avatar>
                          <span className="relative [font-family:'Inter',Helvetica] font-medium text-[#e6e7d5] text-xs tracking-[0] leading-[normal]">
                            Cassandra
                          </span>
                        </div>
                        <img
                          className="relative w-4 h-4"
                          alt="Icon add plus"
                          src="/icon---add-plus.svg"
                        />
                      </div>
                      <p className="relative w-full [font-family:'Inter',Helvetica] font-medium text-[#9c9c95] text-[10px] tracking-[0] leading-[normal]">
                        streamlines your terminal history in just few clicks
                      </p>
                      <Badge className="inline-flex items-center justify-center gap-1 px-1 py-[2px] bg-[#343431] rounded overflow-hidden self-start">
                        <span className="relative [font-family:'Inter',Helvetica] font-medium text-[#9c9c95] text-[9px] tracking-[0] leading-[normal] whitespace-nowrap">
                          Comment
                        </span>
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Task card - Right side on mobile */}
                <Card className="px-2 py-1 border border-solid border-[#272724] bg-[#1e1e1c] rounded overflow-hidden shadow-[0px_4px_20px_#3b3c411a] flex-1 max-w-[180px]">
                  <CardContent className="p-0">
                    <div className="flex w-full items-center justify-between relative mb-1">
                      <div className="flex items-center gap-2">
                        <img
                          className="relative w-4 h-4"
                          alt="Icon backlog"
                          src="/icon---backlog.svg"
                        />
                        <span className="relative [font-family:'Inter',Helvetica] font-medium text-[#e6e7d5] text-xs tracking-[0] leading-[normal]">
                          Terminal ++
                        </span>
                      </div>
                      <div className="inline-flex items-start">
                        <img
                          className="ml-[-1.00px] relative w-3 h-3 mt-[-1.00px] mb-[-1.00px] object-cover"
                          alt="Rectangle"
                          src="/rectangle-8.png"
                        />
                        <img
                          className="mr-[-1.00px] ml-[-3px] relative w-3 h-3 mt-[-1.00px] mb-[-1.00px] object-cover"
                          alt="Rectangle"
                          src="/rectangle-7.png"
                        />
                      </div>
                    </div>

                    <div className="flex w-full items-center justify-end gap-1 relative">
                      <div className="flex items-start gap-1">
                        <Badge className="inline-flex items-center justify-center gap-1 px-1 py-[2px] bg-[#343431] rounded overflow-hidden">
                          <div className="relative w-2 h-2 bg-[#c296fb] rounded-sm" />
                          <span className="relative [font-family:'Inter',Helvetica] font-medium text-[#9c9c95] text-[9px] tracking-[0] leading-[normal] whitespace-nowrap">
                            Team
                          </span>
                        </Badge>
                        <Badge className="inline-flex items-center justify-center gap-1 px-1 py-[2px] bg-[#343431] rounded overflow-hidden">
                          <span className="relative [font-family:'Inter',Helvetica] font-medium text-[#9c9c95] text-[9px] tracking-[0] leading-[normal] whitespace-nowrap">
                            Project
                          </span>
                        </Badge>
                      </div>
                      <img
                        className="relative w-4 h-4"
                        alt="Icon urgancy"
                        src="/icon---urgancy.svg"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Dashboard image - Optimized for laptop 100% zoom */}
              <div className="relative z-10 flex justify-center px-4">
                <div className="relative w-full max-w-[1100px]">
                  <img 
                    src="/ccr_demo.png" 
                    alt="CommandChronicles Terminal Demo" 
                    className="w-full h-auto rounded-lg shadow-2xl border border-[#343431]"
                  />
                  {/* Blur gradient overlay at the bottom of terminal */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[#272724] via-[#272724]/80 to-transparent rounded-b-lg pointer-events-none" />
                </div>
              </div>

              {/* Task card - Positioned for laptop view */}
              <Card className="hidden sm:block px-2.5 py-[5px] top-[450px] right-12 lg:right-16 xl:right-20 border border-solid border-[#272724] absolute bg-[#1e1e1c] rounded overflow-hidden shadow-[0px_4px_20px_#3b3c411a]">
                <CardContent className="p-0">
                  <div className="flex w-[204px] items-center gap-[67px] relative flex-[0_0_auto]">
                    <div className="w-[114px] items-center gap-[11px] flex relative">
                      <img
                        className="relative w-5 h-5"
                        alt="Icon backlog"
                        src="/icon---backlog.svg"
                      />
                      <span className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#e6e7d5] text-sm tracking-[0] leading-[normal]">
                        Terminal ++
                      </span>
                    </div>
                    <div className="inline-flex items-start relative flex-[0_0_auto]">
                      <img
                        className="ml-[-1.00px] relative w-4 h-4 mt-[-1.00px] mb-[-1.00px] object-cover"
                        alt="Rectangle"
                        src="/rectangle-8.png"
                      />
                      <img
                        className="mr-[-1.00px] ml-[-5px] relative w-4 h-4 mt-[-1.00px] mb-[-1.00px] object-cover"
                        alt="Rectangle"
                        src="/rectangle-7.png"
                      />
                    </div>
                  </div>

                  <div className="flex w-[204px] items-center justify-end gap-2.5 relative flex-[0_0_auto]">
                    <div className="flex w-[174px] items-start gap-1 relative ml-[-2.00px]">
                      <Badge className="inline-flex items-center justify-center gap-1 px-1 py-[3px] relative flex-[0_0_auto] bg-[#343431] rounded overflow-hidden">
                        <div className="relative w-3 h-3 bg-[#c296fb] rounded-sm" />
                        <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#9c9c95] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                          Team
                        </span>
                      </Badge>
                      <Badge className="inline-flex items-center justify-center gap-1 px-1 py-[3px] relative flex-[0_0_auto] bg-[#343431] rounded overflow-hidden">
                        <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#9c9c95] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                          Project
                        </span>
                      </Badge>
                    </div>
                    <img
                      className="relative w-[22px] h-[20.5px]"
                      alt="Icon urgancy"
                      src="/icon---urgancy.svg"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Comment card (Cassandra) - Positioned for laptop view */}
              <Card className="hidden sm:block p-2.5 top-[380px] left-12 lg:left-16 xl:left-20 absolute bg-[#1e1e1c] rounded overflow-hidden shadow-[0px_4px_20px_#3b3c411a]">
                <CardContent className="p-0">
                  <div className="flex-col items-end gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="flex w-[239px] items-center justify-between relative flex-[0_0_auto]">
                      <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                        <Avatar className="relative w-6 h-6 mt-[-2.00px] mb-[-2.00px] ml-[-2.00px]">
                          <AvatarImage src="/ellipse-5.png" alt="Cassandra" />
                        </Avatar>
                        <span className="relative w-[75px] [font-family:'Inter',Helvetica] font-medium text-[#e6e7d5] text-sm tracking-[0] leading-[normal]">
                          Cassandra
                        </span>
                      </div>
                      <img
                        className="relative w-5 h-5"
                        alt="Icon add plus"
                        src="/icon---add-plus.svg"
                      />
                    </div>
                    <p className="relative w-[239px] [font-family:'Inter',Helvetica] font-medium text-[#9c9c95] text-xs tracking-[0] leading-[normal]">
                      streamlines your terminal history in just few clicks
                    </p>
                    <Badge className="inline-flex items-center justify-center gap-1 px-1 py-[3px] relative flex-[0_0_auto] bg-[#343431] rounded overflow-hidden">
                      <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#9c9c95] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                        Comment
                      </span>
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Main gradient overlay for overall page fade effect */}
              <div className="absolute w-full h-full top-0 left-0 [background:linear-gradient(180deg,rgba(40,40,37,0)_74%,rgba(40,40,37,1)_100%)] pointer-events-none" />
            </div>
          </section>
        </div>
      </div>
      {/* About Section and the rest of the content follow with plain background */}
      <AboutSection />
      <TestimonialSection />
      <WhatMakesUsDifferentSection />
      <TaskManagementSection />
      <FeatureSection />
      <PricingSection />
      <Footer />
    </div>
  );
};