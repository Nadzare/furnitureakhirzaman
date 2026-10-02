"use client";

import { ReactNode } from "react";
import { RotateCcw, Save } from "lucide-react";

interface FormFieldProps {
  label: string;
  hint?: string;
  children: ReactNode;
}

export function FormField({ label, hint, children }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-sans font-semibold text-[#3A2F26]/70 tracking-wide">
        {label}
      </label>
      {hint && (
        <p className="text-[11px] font-sans text-[#3A2F26]/35">{hint}</p>
      )}
      {children}
    </div>
  );
}

interface TextInputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  type?: string;
}

export function TextInput({ value, onChange, placeholder, type = "text" }: TextInputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-white border border-[#E8E1D8] rounded-lg px-4 py-3 text-sm font-sans text-[#3A2F26] placeholder-[#3A2F26]/25 focus:outline-none focus:border-[#B08B57]/50 focus:ring-1 focus:ring-[#B08B57]/15 transition-all"
    />
  );
}

interface TextAreaProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  rows?: number;
}

export function TextArea({ value, onChange, placeholder, rows = 4 }: TextAreaProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full bg-white border border-[#E8E1D8] rounded-lg px-4 py-3 text-sm font-sans text-[#3A2F26] placeholder-[#3A2F26]/25 focus:outline-none focus:border-[#B08B57]/50 focus:ring-1 focus:ring-[#B08B57]/15 transition-all resize-y"
    />
  );
}

interface SectionCardProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function SectionCard({ title, description, children }: SectionCardProps) {
  return (
    <div className="bg-white border border-[#E8E1D8] rounded-xl p-6 md:p-8 space-y-6 shadow-sm">
      <div className="border-b border-[#E8E1D8] pb-4">
        <h3 className="font-serif text-lg font-semibold text-[#3A2F26] tracking-tight">
          {title}
        </h3>
        {description && (
          <p className="text-xs font-sans text-[#3A2F26]/35 mt-1">{description}</p>
        )}
      </div>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

interface ActionBarProps {
  onSave: () => void;
  onReset: () => void;
  saveLabel?: string;
}

export function ActionBar({ onSave, onReset, saveLabel = "Simpan Perubahan" }: ActionBarProps) {
  return (
    <div className="flex items-center gap-3 pt-4">
      <button
        onClick={onSave}
        className="flex items-center gap-2 px-6 py-3 bg-[#B08B57] hover:bg-[#917043] text-white font-sans font-semibold text-sm rounded-lg transition-all duration-200 cursor-pointer shadow-md shadow-[#B08B57]/15 hover:shadow-[#B08B57]/25"
      >
        <Save className="w-4 h-4" />
        {saveLabel}
      </button>
      <button
        onClick={onReset}
        className="flex items-center gap-2 px-5 py-3 bg-white border border-[#E8E1D8] hover:border-red-300 text-[#3A2F26]/50 hover:text-red-500 font-sans font-medium text-sm rounded-lg transition-all duration-200 cursor-pointer"
      >
        <RotateCcw className="w-4 h-4" />
        Reset Default
      </button>
    </div>
  );
}

interface SaveToastProps {
  show: boolean;
}

export function SaveToast({ show }: SaveToastProps) {
  if (!show) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#3A2F26] text-white px-5 py-3 rounded-lg shadow-2xl shadow-[#3A2F26]/20 flex items-center gap-2 text-sm font-sans font-semibold animate-fade-in-up">
      <Save className="w-4 h-4 text-[#B08B57]" />
      Perubahan berhasil disimpan
    </div>
  );
}
