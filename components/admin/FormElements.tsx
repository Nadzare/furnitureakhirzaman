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
    <div className="space-y-1.5 sm:space-y-2 min-w-0">
      <label className="block text-xs sm:text-sm font-sans font-semibold text-[#3A2F26]/75 tracking-wide">
        {label}
      </label>
      {hint && (
        <p className="text-[11px] font-sans text-[#3A2F26]/40 leading-snug">{hint}</p>
      )}
      <div className="min-w-0">{children}</div>
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
      className="w-full min-w-0 bg-white border border-[#E8E1D8] rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm font-sans text-[#3A2F26] placeholder-[#3A2F26]/25 focus:outline-none focus:border-[#B08B57]/60 focus:ring-1 focus:ring-[#B08B57]/20 transition-all"
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
      className="w-full min-w-0 bg-white border border-[#E8E1D8] rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm font-sans text-[#3A2F26] placeholder-[#3A2F26]/25 focus:outline-none focus:border-[#B08B57]/60 focus:ring-1 focus:ring-[#B08B57]/20 transition-all resize-y"
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
    <div className="bg-white border border-[#E8E1D8] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 shadow-xs min-w-0 overflow-hidden">
      <div className="border-b border-[#E8E1D8] pb-3 sm:pb-4 min-w-0">
        <h3 className="font-serif text-base sm:text-lg font-semibold text-[#3A2F26] tracking-tight truncate">
          {title}
        </h3>
        {description && (
          <p className="text-xs font-sans text-[#3A2F26]/40 mt-1 leading-normal">{description}</p>
        )}
      </div>
      <div className="space-y-4 sm:space-y-5 min-w-0">{children}</div>
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
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4">
      <button
        onClick={onSave}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-[#B08B57] hover:bg-[#917043] active:scale-[0.99] text-white font-sans font-semibold text-sm rounded-lg transition-all duration-200 cursor-pointer shadow-md shadow-[#B08B57]/15 hover:shadow-[#B08B57]/25 w-full sm:w-auto"
      >
        <Save className="w-4 h-4" />
        {saveLabel}
      </button>
      <button
        onClick={onReset}
        className="flex items-center justify-center gap-2 px-5 py-3 bg-white border border-[#E8E1D8] hover:border-red-300 text-[#3A2F26]/60 hover:text-red-500 active:scale-[0.99] font-sans font-medium text-sm rounded-lg transition-all duration-200 cursor-pointer w-full sm:w-auto"
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
    <div className="fixed bottom-5 left-4 right-4 sm:left-auto sm:right-6 sm:w-auto z-50 bg-[#3A2F26] text-white px-5 py-3.5 rounded-xl shadow-2xl shadow-[#3A2F26]/30 flex items-center justify-center sm:justify-start gap-2.5 text-sm font-sans font-semibold animate-fade-in-up border border-[#B08B57]/30">
      <Save className="w-4 h-4 text-[#B08B57]" />
      <span>Perubahan berhasil disimpan</span>
    </div>
  );
}
