import DeveloperSection from '@/components/home/DeveloperSection';
import { Terminal, Book, Code2 } from 'lucide-react';

export default function Developers() {
  return (
    <div className="w-full pb-20">
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-container container-pad py-16 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6">Developer Platform</h1>
          <p className="text-lg sm:text-xl text-[#64748B] max-w-3xl mx-auto">
            Build applications on top of the AfuChat ecosystem. Access millions of users with a single OAuth integration.
          </p>
        </div>
      </div>

      <div className="max-container container-pad py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8">
            <div className="w-12 h-12 bg-[#F0EFFF] rounded-xl flex items-center justify-center mb-6">
              <Terminal className="w-6 h-6 text-[#6C63FF]" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">API Reference</h3>
            <p className="text-[#64748B] mb-4">Detailed documentation for REST and GraphQL endpoints across all 8 products.</p>
            <a href="#" className="text-[#6C63FF] font-medium hover:underline">Read APIs →</a>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8">
            <div className="w-12 h-12 bg-[#EBF5FF] rounded-xl flex items-center justify-center mb-6">
              <Book className="w-6 h-6 text-[#1F95FF]" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Guides & Tutorials</h3>
            <p className="text-[#64748B] mb-4">Step-by-step instructions for implementing SSO, payments, and data sync.</p>
            <a href="#" className="text-[#1F95FF] font-medium hover:underline">View Guides →</a>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8">
            <div className="w-12 h-12 bg-[#D1FAE5] rounded-xl flex items-center justify-center mb-6">
              <Code2 className="w-6 h-6 text-[#10B981]" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">SDKs & Libraries</h3>
            <p className="text-[#64748B] mb-4">Official client libraries for React, Node.js, Python, iOS, and Android.</p>
            <a href="#" className="text-[#10B981] font-medium hover:underline">Get SDKs →</a>
          </div>
        </div>
      </div>

      <DeveloperSection />
    </div>
  );
}