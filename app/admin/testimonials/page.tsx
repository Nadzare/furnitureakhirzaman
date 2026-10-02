"use client";

import { useState } from "react";
import { useCMS } from "@/lib/cms-store";
import {
  SectionCard,
  FormField,
  TextInput,
  TextArea,
  ActionBar,
  SaveToast,
} from "@/components/admin/FormElements";
import { Plus, Trash2, ChevronDown, ChevronUp, Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsEditor() {
  const { testimonials, updateSection, resetSection } = useCMS();
  const [form, setForm] = useState(testimonials);
  const [showToast, setShowToast] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const updateItem = (index: number, key: string, value: any) => {
    const updated = [...form];
    updated[index] = { ...updated[index], [key]: value };
    setForm(updated);
  };

  const addItem = () => {
    const newItem = {
      id: `test-${Date.now()}`,
      name: "",
      role: "",
      location: "",
      quote: "",
      rating: 5,
      imageUrl: "",
    };
    setForm([...form, newItem]);
    setExpandedIndex(form.length);
  };

  const removeItem = (index: number) => {
    setForm(form.filter((_, i) => i !== index));
    setExpandedIndex(null);
  };

  const handleSave = () => {
    updateSection("testimonials", form);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleReset = () => {
    resetSection("testimonials");
    window.location.reload();
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <SectionCard
        title="Daftar Testimoni"
        description={`Total: ${form.length} testimoni`}
      >
        <div className="space-y-3">
          {form.map((item, index) => (
            <div
              key={item.id}
              className="border border-[#E8E1D8] rounded-lg overflow-hidden"
            >
              {/* Collapsed header */}
              <div
                role="button"
                tabIndex={0}
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setExpandedIndex(expandedIndex === index ? null : index);
                  }
                }}
                className="w-full flex items-center justify-between px-4 py-3 bg-[#FAFAF8] hover:bg-[#F5F3F0] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  {item.imageUrl ? (
                    <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-[#B08B57]/20">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-[#E8E1D8] flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-sans text-[#3A2F26]/30">?</span>
                    </div>
                  )}
                  <div className="text-left">
                    <span className="text-sm font-sans font-medium text-[#3A2F26]/70 block">
                      {item.name || "Testimoni Baru"}
                    </span>
                    <div className="flex items-center gap-1 mt-0.5">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-2.5 h-2.5 fill-[#B08B57] text-[#B08B57]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(index);
                    }}
                    className="p-1.5 text-[#3A2F26]/20 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  {expandedIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-[#3A2F26]/30" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#3A2F26]/30" />
                  )}
                </div>
              </div>

              {/* Expanded content */}
              {expandedIndex === index && (
                <div className="px-4 py-5 space-y-4 border-t border-[#E8E1D8] bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField label="Nama">
                      <TextInput
                        value={item.name}
                        onChange={(v) => updateItem(index, "name", v)}
                      />
                    </FormField>
                    <FormField label="Peran / Jabatan">
                      <TextInput
                        value={item.role}
                        onChange={(v) => updateItem(index, "role", v)}
                      />
                    </FormField>
                    <FormField label="Lokasi">
                      <TextInput
                        value={item.location}
                        onChange={(v) => updateItem(index, "location", v)}
                      />
                    </FormField>
                    <FormField label="Rating (1-5)">
                      <TextInput
                        value={String(item.rating)}
                        onChange={(v) =>
                          updateItem(
                            index,
                            "rating",
                            Math.max(1, Math.min(5, parseInt(v) || 1))
                          )
                        }
                        type="number"
                      />
                    </FormField>
                  </div>

                  <FormField label="URL Foto Profil">
                    <TextInput
                      value={item.imageUrl}
                      onChange={(v) => updateItem(index, "imageUrl", v)}
                    />
                  </FormField>

                  <FormField label="Kutipan / Quote">
                    <TextArea
                      value={item.quote}
                      onChange={(v) => updateItem(index, "quote", v)}
                      rows={3}
                    />
                  </FormField>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={addItem}
          className="flex items-center gap-2 text-[#B08B57] text-sm font-sans font-medium hover:text-[#C4A26F] transition-colors cursor-pointer mt-2"
        >
          <Plus className="w-4 h-4" />
          Tambah Testimoni
        </button>
      </SectionCard>

      <ActionBar onSave={handleSave} onReset={handleReset} />
      <SaveToast show={showToast} />
    </div>
  );
}
