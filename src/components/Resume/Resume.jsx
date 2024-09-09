import React from 'react'

const Resume = () => {
  return (
    <div>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-wrap hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
      >
        View My Resume
      </a>
    </div>
  );
}

export default Resume
