import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import OrnamentDivider from '../components/OrnamentDivider';

export default function NotFoundPage() {
  return (
    <PageTransition>
      <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-20 bg-[#F7F2EA] px-6 text-center">
        <div className="max-w-md">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B08D57] font-medium block mb-2">
            Error 404
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl text-[#2A2420] font-light uppercase tracking-tight">
            Page Not Found
          </h1>
          <OrnamentDivider className="my-4" />
          <p className="text-sm text-[#7A6F64] font-light leading-relaxed mb-8">
            The celebration or archive you are looking for has been relocated or archived.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#26211D] text-[#F7F2EA] hover:bg-[#B08D57] transition-colors text-xs uppercase tracking-[0.2em] font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Studio Home</span>
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}

