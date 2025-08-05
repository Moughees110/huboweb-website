"use client";

interface HeaderProps {
  isOpen: boolean;
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="bg-white shadow h-16 p-4 flex items-center z-10">
      <h1 className="text-xl font-semibold text-gray-800 truncate">{title}</h1>
    </header>
  );
}
