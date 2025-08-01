'use client';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({ text, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition mb-12 ${className}`}
    >
      {text}
    </button>
  );
}
