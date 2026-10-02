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
    <div className="space-y-6 max-w-4xl min-w-0">
      <SectionCard
        title="Daftar Testimoni"
        description={`Total: ${form.length} testimoni klien`}
      >
        <div className="space-y-2.5 sm:space-y-3">
          {form.map((item, index) => (
            <div
              key={item.id}
              className="border border-[#E8E1D8] rounded-xl overflow-hidden bg-white shadow-2xs"
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
                className="w-full flex items-center justify-between px-3 sm:px-4 py-3 bg-[#FAFAF8] hover:bg-[#F5F3F0] transition-colors cursor-pointer gap-2"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  {item.imageUrl ? (
                    <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden flex-shrink-0 border border-[#B08B57]/20">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="36px"
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E8E1D8] flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-sans text-[#3A2F26]/40 font-bold">?</span>
                    </div>
                  )}
                  <div className="text-left min-w-0">
                    <span className="text-xs sm:text-sm font-sans font-semibold text-[#3A2F26]/75 truncate block max-w-[130px] xs:max-w-[180px] sm:max-w-none">
                      {item.name || "Testimoni Baru"}
                    </span>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-2.5 h-2.5 fill-[#B08B57] text-[#B08B57]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(index);
                    }}
                    aria-label={`Hapus testimoni ${item.name || index + 1}`}
                    className="p-1.5 sm:p-2 text-[#3A2F26]/30 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="p-1 text-[#3A2F26]/30">
                    {expandedIndex === index ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded content */}
              {expandedIndex === index && (
                <div className="px-3.5 sm:px-5 py-4 sm:py-5 space-y-4 border-t border-[#E8E1D8] bg-white">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <FormField label="Nama Klien">
                      <TextInput
                        value={item.name}
                        onChange={(v) => updateItem(index, "name", v)}
                        placeholder="Nama klien..."
                      />
                    </FormField>
                    <FormField label="Peran / Profesi">
                      <TextInput
                        value={item.role}
                        onChange={(v) => updateItem(index, "role", v)}
                        placeholder="Owner Villa / Ibu Rumah Tangga..."
                      />
                    </FormField>
                    <FormField label="Lokasi">
                      <TextInput
                        value={item.location}
                        onChange={(v) => updateItem(index, "location", v)}
                        placeholder="Purwokerto / Yogyakarta..."
                      />
                    </FormField>
                    <FormField label="Rating Bintang (1-5)">
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
                      placeholder="https://images.unsplash.com/..."
                    />
                  </FormField>

                  {item.imageUrl && (
                    <div className="flex items-center gap-3 p-2 bg-[#F8F6F2] rounded-lg border border-[#E8E1D8]">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-[#B08B57]/30">
                        <Image
                          src={item.imageUrl}
                          alt={item.name || "Preview"}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <span className="text-xs font-sans text-[#3A2F26]/60">Preview Foto Klien</span>
                    </div>
                  )}

                  <FormField label="Kutipan / Quote Ulasan">
                    <TextArea
                      value={item.quote}
                      onChange={(v) => updateItem(index, "quote", v)}
                      rows={3}
                      placeholder="Pengalaman klien menggunakan jasa Furniture Akhir Zaman..."
                    />
                  </FormField>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={addItem}
          className="flex items-center gap-2 text-[#B08B57] text-sm font-sans font-medium hover:text-[#C4A26F] transition-colors cursor-pointer mt-3 pt-1"
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
