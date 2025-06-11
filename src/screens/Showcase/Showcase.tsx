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

export default function Showcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      <Header />
      <AboutSection />
    </div>
  );
}